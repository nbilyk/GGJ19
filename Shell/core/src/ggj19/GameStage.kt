/*
 * Copyright 2019 GGJ2019
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package ggj19

import com.acornui.collection.ArrayList
import com.acornui.collection.replace
import com.acornui.component.*
import com.acornui.component.drawing.MeshBuilderStyle
import com.acornui.component.drawing.line
import com.acornui.component.drawing.staticMesh
import com.acornui.component.drawing.staticMeshC
import com.acornui.component.layout.moveTo
import com.acornui.core.Disposable
import com.acornui.core.cache.recycle
import com.acornui.core.di.Owned
import com.acornui.core.input.Ascii
import com.acornui.core.input.interaction.dragEnd
import com.acornui.core.input.interaction.dragStart
import com.acornui.core.input.keyDown
import com.acornui.core.observe.DataBinding
import com.acornui.core.observe.or
import com.acornui.core.time.onTick
import com.acornui.graphic.Color
import com.acornui.math.RayRo
import com.acornui.math.Vector2
import com.acornui.signal.bind
import ggj19.model.GameLevel
import ggj19.model.emptyCharacter
import ggj19.util.Isometric

class GameStage(
		owner: Owned,
		private val currentLevel: DataBinding<GameLevel>,
		private val controlsState: DataBinding<UiControlsStateVo>,
		private val characterHappiness: DataBinding<Map<String, Boolean>>
) : ElementContainerImpl<UiComponent>(owner) {

	private val tileViews: List<List<TileView>> = ArrayList(GameLevel.MAX_ROWS) { ArrayList(GameLevel.MAX_COLS) { TileView(this) } }
	private val characterViews = ArrayList<GameCharacterView>()

	private val dragView = GameCharacterView(owner)

	init {
		interactivityMode = InteractivityMode.ALWAYS

		val origin = Isometric.twoDToIso(Vector2(GameLevel.MAX_COLS / 2 * TileView.TILE_SIZE, GameLevel.MAX_ROWS / 2 * TileView.TILE_SIZE))
		setOrigin(origin.x, origin.y)

		initTileViews()
		initCharacters()
		initDebugLines()
		initDragView()
	}

	private fun initTileViews() {
		for (row in 0 until GameLevel.MAX_ROWS) {
			for (col in 0 until GameLevel.MAX_COLS) {
				+tileViews[row][col].apply {
					moveTo(Isometric.twoDToIso(col * TileView.TILE_SIZE, row * TileView.TILE_SIZE))
				}
			}
		}

		currentLevel.bind {
			for (row in 0 until GameLevel.MAX_ROWS) {
				for (col in 0 until GameLevel.MAX_COLS) {
					tileViews[row][col].data.value = it.getTile(row, col)!!
				}
			}
		}
	}

	private fun initCharacters() {
		// Characters
		currentLevel.bind { newData ->
			val placedCharacters = newData.characters.filter { it.isPlaced }
			recycle(
					data = placedCharacters,
					existingElements = characterViews,
					factory = { item, index -> +createGameCharacterView() },
					configure = { element, item, index -> element.data.value = item },
					disposer = { element -> element.dispose() },
					retriever = { element -> element.data.value },
					equality = { o1, o2 -> o1?.id == o2?.id }
			)
		}
	}

	private fun initDebugLines() {
		// Debug lines
		+staticMeshC {
			visible = false
			stage.keyDown().add {
				if (it.ctrlKey && it.keyCode == Ascii.D) {
					visible = !visible
				}
			}
			mesh = staticMesh {
				buildMesh {
					//							MeshBuilderStyle.lineStyle.colorTint = Color(0.25f, 0.25f, 0.25f, 1f)
					MeshBuilderStyle.lineStyle.colorTint = Color.RED

					for (row in 0..GameLevel.MAX_ROWS) {
						val ptA = Isometric.twoDToIso(Vector2(0f, row * TileView.TILE_SIZE))
						val ptB = Isometric.twoDToIso(Vector2(GameLevel.MAX_ROWS * TileView.TILE_SIZE, row * TileView.TILE_SIZE))
						line(ptA.x, ptA.y, ptB.x, ptB.y)
					}
					for (col in 0..GameLevel.MAX_COLS) {
						val ptA = Isometric.twoDToIso(Vector2(col * TileView.TILE_SIZE, 0f))
						val ptB = Isometric.twoDToIso(Vector2(col * TileView.TILE_SIZE, GameLevel.MAX_ROWS * TileView.TILE_SIZE))
						line(ptA.x, ptA.y, ptB.x, ptB.y)
					}
				}
			}
		}
	}

	private var tick: Disposable? = null

	private fun initDragView() {
		+dragView.apply {
			controlsState.bind {
				data.value = it.dragging ?: emptyCharacter
				val oldIsDragging = visible
				val newIsDragging = it.dragging != null
				if (oldIsDragging != newIsDragging) {
					visible = newIsDragging
					if (visible) {
						if (tick == null) {
							tick = onTick {
								this@GameStage.mousePosition(tmpVec2)
								dragView.setPosition(tmpVec2.x, tmpVec2.y)
							}
						}
					} else {
						tick?.dispose()
						tick = null
					}
				}
			}
		}
	}

	private fun createGameCharacterView(): GameCharacterView {
		return GameCharacterView(this).apply {
			setScaling(0.6f, 0.6f) // TODO: TEMP
			data.changed.add { old, new ->
				currentLevel.change {
					it.copy(characters = it.characters.replace(old, new))
				}

			}

			(data or currentLevel).bind {
				val isLocked = currentLevel.value.isLocked(data.value)
				interactivityMode = if (isLocked) InteractivityMode.NONE else InteractivityMode.ALL
				// TODO: Make pretty
				colorTint = if (isLocked) Color.GRAY else Color.WHITE
				alpha = if (isLocked) 0.5f else 1f
			}

			dragStart().add { _ ->
				visible = false
				controlsState.change { it.copy(dragging = data.value) }
			}

			dragEnd().add { _ ->
				visible = true
				val gameCharacter = data.value
				currentLevel.placeCharacter(gameCharacter, canvasToGrid(mouse.canvasX, mouse.canvasY, GridPosition()))
				controlsState.change { it.copy(dragging = null) }
			}

			characterHappiness.bind {
				isHappy.value = it[data.value.id] ?: true
			}
		}
	}

	private val tmpGridP = GridPosition()

	// Overriding the hit testing to account for isometric.
	override fun getChildrenUnderPoint(canvasX: Float, canvasY: Float, onlyInteractive: Boolean, returnAll: Boolean, out: MutableList<UiComponentRo>, rayCache: RayRo?): MutableList<UiComponentRo> {
		if (!visible || (onlyInteractive && inheritedInteractivityMode == InteractivityMode.NONE)) return out

		if ((returnAll || out.isEmpty())) {
			canvasToGrid(canvasX, canvasY, tmpGridP)
			for (i in characterViews.lastIndex downTo 0) {
				val characterView = characterViews[i]
				if (!characterView.visible || (onlyInteractive && !characterView.interactivityEnabled)) continue
				val m = characterView.data.value
				if (m.row == tmpGridP.row && m.col == tmpGridP.col) {
					out.add(characterView)
				}
				if (!returnAll && !out.isEmpty()) break
			}
		}
		if ((returnAll || out.isEmpty()) && (!onlyInteractive || interactivityEnabled)) {
			// This component intersects with the ray, but none of its children do.
			out.add(this)
		}

		return out
	}

	private val tmpVec2 = Vector2()

	fun canvasToGrid(canvasX: Float, canvasY: Float, out: GridPosition): GridPosition {
		Isometric.isoToTwoD(canvasToLocal(tmpVec2.set(canvasX, canvasY)))
		out.col = (tmpVec2.x / TileView.TILE_SIZE).toInt()
		out.row = (tmpVec2.y / TileView.TILE_SIZE).toInt()
		return out
	}
}