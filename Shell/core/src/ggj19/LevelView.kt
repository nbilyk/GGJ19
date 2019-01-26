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
import com.acornui.collection.replaceAt
import com.acornui.component.*
import com.acornui.component.drawing.MeshBuilderStyle
import com.acornui.component.drawing.line
import com.acornui.component.drawing.staticMesh
import com.acornui.component.drawing.staticMeshC
import com.acornui.component.layout.algorithm.CanvasLayoutContainer
import com.acornui.component.layout.algorithm.hGroup
import com.acornui.component.layout.moveTo
import com.acornui.component.layout.spacer
import com.acornui.component.scroll.ScrollModelImpl
import com.acornui.component.scroll.TossScrollModelBinding
import com.acornui.component.scroll.TossScroller
import com.acornui.component.text.text
import com.acornui.core.cache.recycle
import com.acornui.core.di.Owned
import com.acornui.core.di.own
import com.acornui.core.graphic.orthographicCamera
import com.acornui.core.input.Ascii
import com.acornui.core.input.interaction.dragAttachment
import com.acornui.core.input.interaction.pinch
import com.acornui.core.input.interaction.pinchStart
import com.acornui.core.input.keyDown
import com.acornui.core.input.wheel
import com.acornui.core.observe.dataBinding
import com.acornui.core.tween.TweenRegistry
import com.acornui.core.tween.createPropertyTween
import com.acornui.core.tween.driveTween
import com.acornui.graphic.Color
import com.acornui.math.*
import ggj19.model.GameCharacter
import ggj19.model.GameLevel
import ggj19.model.emptyLevel
import ggj19.util.Isometric

class LevelView(owner: Owned) : CanvasLayoutContainer(owner) {

	private val stateData = dataBinding(UiControlsStateVo())

	val originalData = dataBinding(emptyLevel)
	private val currentLevel = dataBinding(originalData.value)

	private val tileViews: List<List<TileView>> = ArrayList(GameLevel.MAX_ROWS) { ArrayList(GameLevel.MAX_COLS) { TileView(this) } }

	private val gameStage = container()

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

	init {
		originalData.bind { currentLevel.value = it }
		interactivityMode = InteractivityMode.ALWAYS

		initTileViews()
		initCameraControls()
		initStageView()
		initCharacterQueue()
	}

	private fun initCharacterQueue() {
		+panel {
			style.background = {
				rect {
					style.backgroundColor = Color(0f, 0f, 0f, 0.3f)
				}
			}
			style.padding = Pad(5f)
			+hGroup {
				+spacer() layout { widthPercent = 1f }
				currentLevel.bind { newData ->
					recycle(
							data = newData.characters,
							existingElements = characterIcons,
							factory = { item, index -> +GameCharacterIconView(this) },
							configure = { element, item, index -> element.data.value = item },
							disposer = { element -> element.dispose() },
							retriever = { element -> element.data.value },
							equality = { o1, o2 -> true }
					)
				}
			} layout { widthPercent = 1f }
		} layout { widthPercent = 1f }
	}

	private fun initTileViews() {
		for (row in 0 until GameLevel.MAX_ROWS) {
			for (col in 0 until GameLevel.MAX_COLS) {
				tileViews[row][col].data.bind { newTile ->
					currentLevel.change {
						it.copy(
								grid = it.grid.replaceAt(row, it.grid[row].replaceAt(col, newTile))
						)
					}
				}
			}
		}

		currentLevel.bind {
			for (row in 0 until GameLevel.MAX_ROWS) {
				for (col in 0 until GameLevel.MAX_COLS) {
					tileViews[row][col].data.value = it.getTile(row, col)
				}
			}
		}
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

			val origin = Isometric.twoDToIso(Vector2(GameLevel.MAX_COLS / 2 * TILE_SIZE, GameLevel.MAX_ROWS / 2 * TILE_SIZE))
			setOrigin(origin.x, origin.y)

			+container {

				for (row in 0 until GameLevel.MAX_ROWS) {
					for (col in 0 until GameLevel.MAX_COLS) {
						+tileViews[row][col]
						tileViews[row][col].moveTo(Isometric.twoDToIso(col * TILE_SIZE, row * TILE_SIZE))
					}
				}

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

							for (row in 0 until GameLevel.MAX_ROWS) {
								val ptA = Isometric.twoDToIso(Vector2(0f, row * TILE_SIZE))
								val ptB = Isometric.twoDToIso(Vector2(GameLevel.MAX_ROWS * TILE_SIZE, row * TILE_SIZE))
								line(ptA.x, ptA.y, ptB.x, ptB.y)
							}
							for (col in 0 until GameLevel.MAX_COLS) {
								val ptA = Isometric.twoDToIso(Vector2(col * TILE_SIZE, 0f))
								val ptB = Isometric.twoDToIso(Vector2(col * TILE_SIZE, GameLevel.MAX_ROWS * TILE_SIZE))
								line(ptA.x, ptA.y, ptB.x, ptB.y)
							}
						}
					}
				}
			}
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

	companion object {
		const val TILE_SIZE = 64f
	}
}

data class UiControlsStateVo(
		val camera: CameraVo = CameraVo()
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