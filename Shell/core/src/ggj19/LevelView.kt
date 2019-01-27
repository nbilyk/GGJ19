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

import com.acornui.async.then
import com.acornui.collection.replace
import com.acornui.component.*
import com.acornui.component.layout.HAlign
import com.acornui.component.layout.algorithm.CanvasLayoutContainer
import com.acornui.component.layout.algorithm.hGroup
import com.acornui.component.layout.algorithm.vGroup
import com.acornui.component.layout.spacer
import com.acornui.component.scroll.ScrollModelImpl
import com.acornui.component.scroll.TossScrollModelBinding
import com.acornui.component.scroll.TossScroller
import com.acornui.component.text.text
import com.acornui.core.asset.AssetType
import com.acornui.core.asset.load
import com.acornui.core.audio.Music
import com.acornui.core.cache.recycle
import com.acornui.core.cursor.StandardCursors
import com.acornui.core.cursor.cursor
import com.acornui.core.di.Owned
import com.acornui.core.di.inject
import com.acornui.core.di.own
import com.acornui.core.graphic.orthographicCamera
import com.acornui.core.input.interaction.*
import com.acornui.core.input.wheel
import com.acornui.core.observe.DataBinding
import com.acornui.core.observe.dataBinding
import com.acornui.core.observe.mirror
import com.acornui.core.tween.TweenRegistry
import com.acornui.core.tween.createPropertyTween
import com.acornui.core.tween.driveTween
import com.acornui.graphic.Color
import com.acornui.logging.Log
import com.acornui.math.*
import com.acornui.skins.Theme
import ggj19.TileView.Companion.TILE_SIZE
import ggj19.model.GameCharacter
import ggj19.model.GameLevel
import ggj19.model.RoomType
import ggj19.model.emptyLevel
import ggj19.util.Isometric

class LevelView(owner: Owned) : CanvasLayoutContainer(owner) {

	private val stateData = dataBinding(UiControlsStateVo())

	val originalData = dataBinding(emptyLevel)
	private val currentLevel = dataBinding(originalData.value)

	private val gameStage = GameStage(this)

	// Camera and toss scrolling properties.
	private val overviewCam = orthographicCamera(true)
	private val drag = dragAttachment()
	private val tossScroller = own(TossScroller(gameStage, dragAttachment = drag))
	private val hScroll = own(ScrollModelImpl())
	private val vScroll = own(ScrollModelImpl())
	private val tossScrollBinding = own(TossScrollModelBinding(tossScroller, hScroll, vScroll))

	private val padding = 0f
	private val stageW = TILE_SIZE * GameLevel.MAX_COLS + padding * 2f
	private val stageH = TILE_SIZE * GameLevel.MAX_ROWS + padding * 2f

	private val characterIcons = ArrayList<GameCharacterIconView>()
	private var mainMusic: Music? = null

	private val theme = inject(Theme)

	private val atlasPath = "assets/ggj.json"

	init {
		originalData.bind { currentLevel.value = it }
		interactivityMode = InteractivityMode.ALWAYS

		initCameraControls()
		initStageView()
		initCharacterQueue()
		initMusic()
	}

	private fun initMusic() {
		+iconButton {
			iconMap(mapOf(ButtonState.UP to atlas(theme.atlasPath, "speaker-volume-control-mute"), ButtonState.TOGGLED_UP to atlas(theme.atlasPath, "speaker-volume")))
			toggleOnClick = true
			click().add { _ ->
				if (toggled) {
					if (mainMusic == null) {
						load("assets/music/file0413.mp3", AssetType.MUSIC).then {
							it.loop = true
							it.play()
							mainMusic = it
						}
					}
					mainMusic?.play()
				} else {
					mainMusic?.stop()
				}
			}
		} layout { bottom = 5f; left = 5f }
	}

	private fun initCharacterQueue() {
		+vGroup {
			style.gap = 0f
			style.horizontalAlign = HAlign.RIGHT
			+panel {
				style.background = {
					rect {
						style.backgroundColor = Color(0f, 0f, 0f, 0.3f)
					}
				}
				style.padding = Pad(5f)
				+hGroup {
					+spacer() layout { widthPercent = 1f }
					val upNextLbl = +text("Up next:")
					currentLevel.bind { newData ->
						var unlockedCharacters = newData.unlockedCharacters
						if (unlockedCharacters.isNotEmpty()) unlockedCharacters = unlockedCharacters.subList(1, unlockedCharacters.size)
						upNextLbl.visible = unlockedCharacters.isNotEmpty()

						recycle(
								data = unlockedCharacters.reversed(),
								existingElements = characterIcons,
								factory = { item, index -> +GameCharacterIconView(this).apply { defaultWidth = 32f; defaultHeight = 32f } },
								configure = { element, item, index -> element.data.value = item },
								disposer = { element -> element.dispose() },
								retriever = { element -> element.data.value },
								equality = { o1, o2 -> true }
						)
					}
				} layout { widthPercent = 1f }
			} layout { widthPercent = 1f }
			+stack {
				style.padding = Pad(5f)
				+atlas(atlasPath, "CurrentCharacterPresentationBg")

				// The next character you can place.
				+GameCharacterIconView(this).apply {
					cursor(StandardCursors.HAND)
					dragStart().add { e ->
						println("Drag start gciv ${e.currentTarget}")
						stateData.change { it.copy(dragging = currentLevel.value.unlockedCharacters.firstOrNull()) }
					}
					dragEnd().add { _ ->
						val gameCharacter = currentLevel.value.unlockedCharacters.firstOrNull()
						println("Drag end $gameCharacter")
						if (gameCharacter != null) {
							currentLevel.attemptCharacterPlacement(gameCharacter, mouseGridPosition)
							stateData.change { it.copy(dragging = null) }
						}
					}

					currentLevel.bind { newData ->
						data.value = newData.unlockedCharacters.firstOrNull()
						val isPlaced = data.value?.isPlaced == true
						alpha = if (isPlaced) 0.2f else 1f
						interactivityMode = if (isPlaced) InteractivityMode.NONE else InteractivityMode.ALL
					}
				} layout { width = 64f; height = 64f; center() }
			} layout { width = 106f; height = 106f }
		} layout { widthPercent = 1f }
	}

	private fun initCameraControls() {
		window.sizeChanged.add { newWidth: Float, newHeight: Float, _: Boolean ->
			overviewCam.setViewport(newWidth, newHeight)
			updateCam()
		}

		hScroll.min = -stageH
		vScroll.min = -stageW * 0.5f
		hScroll.max = stageW
		vScroll.max = stageH * 0.5f

		hScroll.changed.add {
			moveCamera(x = it.value)
		}
		vScroll.changed.add {
			moveCamera(y = it.value)
		}

		var startZoom = 0f
		pinchStart().add {
			startZoom = stateData.value.camera.zoom
		}

		pinch().add {
			zoomCamera(it.startDistance * startZoom / it.distance)
		}

		stateData.bind {
			if (!hScroll.changed.isDispatching && !vScroll.changed.isDispatching) {
				hScroll.value = it.camera.x
				vScroll.value = it.camera.y
			}
			updateCam()
		}

		wheel().add {
			tossScroller.stop()
			if (it.deltaY != 0f) {
				zoomCamera(stateData.value.camera.zoom * if (it.deltaY > 0f) 1.2f else 0.8f)
			}
		}
	}

	private fun initStageView() {
		+gameStage.apply {
			cameraOverride = overviewCam
			currentLevel.mirror(this@LevelView.currentLevel)
		}
	}

	private fun updateCam() {
		val cam = stateData.value.camera
		val z = cam.zoom
		val w = overviewCam.viewportWidth * z
		val h = overviewCam.viewportHeight * z
		overviewCam.zoom = z
		overviewCam.moveToLookAtRect(cam.x - w * 0.5f, cam.y - h * 0.5f, w, h)

		tossScrollBinding.modelToPixelsX = 1f / z
		tossScrollBinding.modelToPixelsY = 1f / z

		window.requestRender()
	}

	private fun moveCamera(x: Float = stateData.value.camera.x, y: Float = stateData.value.camera.y, zoom: Float = stateData.value.camera.zoom) {
		stateData.change {
			TweenRegistry.kill(this, "camera", finish = true)
			it.copy(camera = it.camera.copy(x = x, y = y, zoom = zoom))
		}
	}

	/**
	 * Zooms the camera
	 */
	private fun zoomCamera(zoom: Float) {
		stateData.change {
			TweenRegistry.kill(this, "camera", finish = true)
			val newZoom = MathUtils.clamp(zoom, 0.1f, 4f)
			val cam = it.camera
			it.copy(camera = cam.copy(zoom = newZoom))
		}
	}

	private fun tweenCamera(x: Float = stateData.value.camera.x, y: Float = stateData.value.camera.y, zoom: Float = stateData.value.camera.zoom, duration: Float = 0.5f, ease: Interpolation = Easing.pow3, delay: Float = 0f) {
		val start = stateData.value.camera.copy()
		val end = CameraVo(x, y, MathUtils.clamp(zoom, 0.1f, 4f))
		driveTween(createPropertyTween(this, "camera", duration, ease, { 0f }, { alpha ->
			stateData.change {
				it.copy(camera = start.lerp(end, alpha))
			}
		}, targetValue = 1f, delay = delay))

	}

	fun resetLevel() {
		currentLevel.value = originalData.value
	}

	// Utility

	private val dropPosition = Vector2()
	private val gridPosition = GridPosition()

	private val mouseGridPosition: GridPosition
		get() {
			Isometric.isoToTwoD(gameStage.mousePosition(dropPosition))
			gridPosition.col = (dropPosition.x / TILE_SIZE).toInt()
			gridPosition.row = (dropPosition.y / TILE_SIZE).toInt()
			return gridPosition
		}
}

data class UiControlsStateVo(
		val camera: CameraVo = CameraVo(),
		val dragging: GameCharacter? = null
)

data class CameraVo(
		val x: Float = 0f,
		val y: Float = 0f,
		val zoom: Float = 1f
) {

	/**
	 * Linearly interpolates this camera value to the destination value.
	 */
	fun lerp(other: CameraVo, alpha: Float): CameraVo {
		return CameraVo((other.x - x) * alpha + x, (other.y - y) * alpha + y, (other.zoom - zoom) * alpha + zoom)
	}
}

/**
 * Places a character at the given position if that position is empty.
 */
fun DataBinding<GameLevel>.attemptCharacterPlacement(gameCharacter: GameCharacter, position: GridPosition) {
	val tile = value.getTile(position.row, position.col)
	Log.debug("attemptCharacterPlacement: Position: $position Tile: $tile Character: $gameCharacter")
	if (tile != null && tile.roomType == RoomType.STANDARD) {
		val existingCharacter = value.getCharacterAt(position.row, position.col)
		if (existingCharacter == null) {
			Log.debug("Tile empty, placing...")
			change {
				it.copy(characters = it.characters.replace(gameCharacter, gameCharacter.copy(row = position.row, col = position.col)))
			}
		}
	}
}

class GridPosition(var row: Int = 0, var col: Int = 0)