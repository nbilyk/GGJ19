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
import com.acornui.component.*
import com.acornui.component.drawing.line
import com.acornui.component.drawing.staticMesh
import com.acornui.component.drawing.staticMeshC
import com.acornui.component.scroll.ScrollModelImpl
import com.acornui.component.scroll.TossScrollModelBinding
import com.acornui.component.scroll.TossScroller
import com.acornui.core.di.Owned
import com.acornui.core.di.own
import com.acornui.core.graphic.orthographicCamera
import com.acornui.core.input.interaction.dragAttachment
import com.acornui.core.input.interaction.pinch
import com.acornui.core.input.interaction.pinchStart
import com.acornui.core.input.wheel
import com.acornui.core.observe.dataBinding
import com.acornui.core.tween.TweenRegistry
import com.acornui.core.tween.createPropertyTween
import com.acornui.core.tween.driveTween
import com.acornui.graphic.Color
import com.acornui.math.Easing
import com.acornui.math.Interpolation
import com.acornui.math.MathUtils
import com.acornui.math.Vector2
import ggj19.model.GameLevel
import ggj19.util.Isometric

class LevelView(owner: Owned) : StackLayoutContainer(owner) {

	private val stateData = dataBinding(OverviewStateVo())

	val data = dataBinding(GameLevel())

	private val tileViews: List<List<TileView>> = ArrayList(GameLevel.MAX_ROWS) { ArrayList(GameLevel.MAX_COLS) { TileView(this) } }

	private val gameStage = stack()

	private val overviewCam = orthographicCamera(true)

	private val drag = dragAttachment()

	private val tossScroller = own(TossScroller(gameStage, dragAttachment = drag))

	private val hScroll = own(ScrollModelImpl())
	private val vScroll = own(ScrollModelImpl())
	private val tossScrollBinding = own(TossScrollModelBinding(tossScroller, hScroll, vScroll))

	init {
		interactivityMode = InteractivityMode.ALWAYS

		window.sizeChanged.add { newWidth: Float, newHeight: Float, _: Boolean ->
			overviewCam.setViewport(newWidth, newHeight)
			updateCam()
		}

		hScroll.min = 0f
		vScroll.min = 0f

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

		drag.dragStart.add {
			println("D S")
		}

		wheel().add {
			tossScroller.stop()
			if (it.deltaY != 0f) {
				zoomCamera(stateData.value.camera.zoom * if (it.deltaY > 0f) 1.2f else 0.8f)
			}
		}

		+gameStage.apply {
			val padding = 50f
			val stageW = 64f * 20f + padding * 2f
			val stageH = 64f * 20f + padding * 2f
			defaultWidth = stageW
			defaultHeight = stageH

			hScroll.max = stageW
			vScroll.max = stageH

			cameraOverride = overviewCam

			+container {

				+staticMeshC {
					mesh = staticMesh {
						buildMesh {

							for (row in 0 until GameLevel.MAX_ROWS) {
								for (col in 0 until GameLevel.MAX_COLS) {
									val ptA = Isometric.twoDToIso(Vector2(col * 64f, row * 64f))
									val ptB = Isometric.twoDToIso(Vector2((col + 1f) * 64f, row * 64f))
									val ptC = Isometric.twoDToIso(Vector2((col + 1f) * 64f, (row + 1f) * 64f))
									val ptD = Isometric.twoDToIso(Vector2((col) * 64f, (row + 1f) * 64f))
									line(ptA.x, ptA.y, ptB.x, ptB.y)
									line(ptB.x, ptB.y, ptC.x, ptC.y)
									line(ptC.x, ptC.y, ptD.x, ptD.y)
									line(ptD.x, ptD.y, ptA.x, ptA.y)
								}
							}
						}
					}
				}

//				for (row in 0 until GameLevel.MAX_ROWS) {
//					for (col in 0 until GameLevel.MAX_COLS) {
//						+tileViews[row][col]
//						tileViews[row][col].moveTo(col * 64f + padding, row * 64f + padding)
//					}
//				}
			} layout { fill() }
		} layout { fill() }

		data.bind {
			for (row in 0 until GameLevel.MAX_ROWS) {
				for (col in 0 until GameLevel.MAX_COLS) {
					tileViews[row][col].data.value = it.getTile(row, col)
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
		val end = OverviewCameraVo(x, y, MathUtils.clamp(zoom, 0.1f, 4f))
		driveTween(createPropertyTween(this, "camera", duration, ease, { 0f }, { alpha ->
			stateData.change {
				it.copy(camera = start.lerp(end, alpha))
			}
		}, targetValue = 1f, delay = delay))

	}
}

data class OverviewStateVo(
		val camera: OverviewCameraVo = OverviewCameraVo()
)

data class OverviewCameraVo(
		val x: Float = 0f,
		val y: Float = 0f,
		val zoom: Float = 1f
) {

	/**
	 * Linearly interpolates this camera value to the destination value.
	 */
	fun lerp(other: OverviewCameraVo, alpha: Float): OverviewCameraVo {
		return OverviewCameraVo((other.x - x) * alpha + x, (other.y - y) * alpha + y, (other.zoom - zoom) * alpha + zoom)
	}
}