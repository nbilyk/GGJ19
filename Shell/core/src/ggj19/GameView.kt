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
import com.acornui.core.observe.or
import com.acornui.core.persistance.Persistence
import com.acornui.core.popup.PopUpInfo
import com.acornui.core.popup.addPopUp
import com.acornui.core.tween.TweenRegistry
import com.acornui.core.tween.createPropertyTween
import com.acornui.core.tween.driveTween
import com.acornui.core.userInfo
import com.acornui.graphic.Color
import com.acornui.logging.Log
import com.acornui.math.Easing
import com.acornui.math.Interpolation
import com.acornui.math.MathUtils
import com.acornui.math.Pad
import com.acornui.signal.bind
import com.acornui.skins.Theme
import ggj19.TileView.Companion.TILE_SIZE
import ggj19.model.GameCharacter
import ggj19.model.GameLevel
import ggj19.model.RoomType
import ggj19.model.emptyLevel

class GameView(owner: Owned) : CanvasLayoutContainer(owner) {

	private val controlsState = dataBinding(UiControlsStateVo())

	val levels = dataBinding(listOf(emptyLevel))
	val currentLevelNumber = dataBinding(0)

	// Character id -> isHappy
	val characterHappiness = dataBinding(mapOf<String, Boolean>())

	private val currentLevel = dataBinding(emptyLevel)

	private val gameStage = GameStage(this, currentLevel, controlsState, characterHappiness)

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
	private val persistence = inject(Persistence)

	init {
		(levels or currentLevelNumber).bind {
			currentLevel.value = levels.value.getOrNull(currentLevelNumber.value) ?: emptyLevel
		}

		interactivityMode = InteractivityMode.ALWAYS

		initCameraControls()
		initStageView()
		initCharacterQueue()
		initCharacterRules()
		initMusic()
		initNextLevelButton()
		initVictoryScreen()
	}

	private fun initCharacterQueue() {
		+vGroup {
			interactivityMode = InteractivityMode.CHILDREN
			style.gap = 0f
			style.horizontalAlign = HAlign.RIGHT
			+panel {
				interactivityMode = InteractivityMode.CHILDREN
				style.background = {
					rect {
						style.backgroundColor = Color(0f, 0f, 0f, 0.6f)
					}
				}
				style.padding = Pad(5f)
				+hGroup {
					+text {
						currentLevelNumber.bind {
							text = "Level $it"
						}
						click().add { e ->
							if (e.count == 2) {
								addPopUp(PopUpInfo(LevelChooser(this, levels.value.size, currentLevelNumber)))
							}
						}
					}
					+iconButton(theme.atlasPath, "burn") {
						label = "Restart"
						click().add {
							resetLevel()
						}
					}
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
				interactivityMode = InteractivityMode.CHILDREN
				style.padding = Pad(5f)
				+atlas(atlasPath, "CurrentCharacterPresentationBg")

				// The next character you can place.
				+GameCharacterIconView(this).apply {
					cursor(StandardCursors.HAND)

					currentLevel.bind { _ ->
						val firstUnplaced = currentLevel.value.characters.find { !it.isPlaced }
						data.value = firstUnplaced
					}
					dragStart().add { e ->
						alpha = 0.2f
						println("Drag start gciv ${e.currentTarget}")
						controlsState.change { it.copy(dragging = data.value) }
					}
					dragEnd().add { _ ->
						alpha = 1f
						val gameCharacter = data.value
						println("Drag end $gameCharacter")
						if (gameCharacter != null) {
							currentLevel.placeCharacter(gameCharacter, mouseGridPosition)
							controlsState.change { it.copy(dragging = null) }
						}
					}


				} layout { width = 64f; height = 64f; center() }
			} layout { width = 106f; height = 106f }
		} layout { widthPercent = 1f }
	}

	private fun initCharacterRules() {
		currentLevel.bind { level ->
			characterHappiness.change { GameRules.calculateHappiness(level.characters) }
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
			startZoom = controlsState.value.camera.zoom
		}

		pinch().add {
			zoomCamera(it.startDistance * startZoom / it.distance)
		}

		controlsState.bind {
			if (!hScroll.changed.isDispatching && !vScroll.changed.isDispatching) {
				hScroll.value = it.camera.x
				vScroll.value = it.camera.y
			}
			updateCam()
		}

		wheel().add {
			tossScroller.stop()
			if (it.deltaY != 0f) {
				zoomCamera(controlsState.value.camera.zoom * if (it.deltaY > 0f) 1.2f else 0.8f)
			}
		}
	}

	private fun initStageView() {
		+gameStage.apply {
			cameraOverride = overviewCam
		}
	}

	private fun updateCam() {
		val cam = controlsState.value.camera
		val z = cam.zoom
		val w = overviewCam.viewportWidth * z
		val h = overviewCam.viewportHeight * z
		overviewCam.zoom = z
		overviewCam.moveToLookAtRect(cam.x - w * 0.5f, cam.y - h * 0.5f, w, h)

		tossScrollBinding.modelToPixelsX = 1f / z
		tossScrollBinding.modelToPixelsY = 1f / z

		window.requestRender()
	}

	private fun moveCamera(x: Float = controlsState.value.camera.x, y: Float = controlsState.value.camera.y, zoom: Float = controlsState.value.camera.zoom) {
		controlsState.change {
			TweenRegistry.kill(this, "camera", finish = true)
			it.copy(camera = it.camera.copy(x = x, y = y, zoom = zoom))
		}
	}

	/**
	 * Zooms the camera
	 */
	private fun zoomCamera(zoom: Float) {
		controlsState.change {
			TweenRegistry.kill(this, "camera", finish = true)
			val newZoom = MathUtils.clamp(zoom, 0.1f, 4f)
			val cam = it.camera
			it.copy(camera = cam.copy(zoom = newZoom))
		}
	}

	private fun tweenCamera(x: Float = controlsState.value.camera.x, y: Float = controlsState.value.camera.y, zoom: Float = controlsState.value.camera.zoom, duration: Float = 0.5f, ease: Interpolation = Easing.pow3, delay: Float = 0f) {
		val start = controlsState.value.camera.copy()
		val end = CameraVo(x, y, MathUtils.clamp(zoom, 0.1f, 4f))
		driveTween(createPropertyTween(this, "camera", duration, ease, { 0f }, { alpha ->
			controlsState.change {
				it.copy(camera = start.lerp(end, alpha))
			}
		}, targetValue = 1f, delay = delay))

	}

	private fun resetLevel() {
		currentLevel.value = levels.value.getOrNull(currentLevelNumber.value) ?: emptyLevel
	}

	private fun initMusic() {
		+iconButton {
			iconMap(mapOf(ButtonState.UP to atlas(theme.atlasPath, "speaker-volume-control-mute"), ButtonState.TOGGLED_UP to atlas(theme.atlasPath, "speaker-volume")))
			toggleOnClick = true
			controlsState.bind { toggled = !it.isMuted }
			toggledChanged.add { _ ->
				controlsState.change {
					it.copy(isMuted = !toggled)
				}
			}
		} layout { bottom = 5f; left = 5f }

		if (userInfo.isDesktop && persistence.getItem("muted") != "true") {
			// On desktop we can start unmuted.
			controlsState.change { it.copy(isMuted = false) }
		}

		controlsState.bind {
			if (it.isMuted) {
				mainMusic?.stop()
				persistence.setItem("muted", "true")
				persistence.flush()
			} else {
				if (mainMusic == null) {
					load("assets/music/background.mp3", AssetType.MUSIC).then {
						it.loop = true
						it.play()
						mainMusic = it
					}
				}
				mainMusic?.play()
				persistence.setItem("muted", "false")
				persistence.flush()
			}
		}
	}

	private fun initNextLevelButton() {
		// Next level button
		+iconButton(atlasPath, "smiley") {
			label = "Next Level!"
			(currentLevel or characterHappiness).bind {
				var showButton = false
				if (currentLevel.value.characters.isNotEmpty()) {
					val nextUnplaced = currentLevel.value.characters.find { !it.isPlaced }
					if (nextUnplaced == null) {
						println("All placed")
						// All placed
						if (!characterHappiness.value.containsValue(false)) {
							// All happy
						println("All Happy")
							showButton = true
						}
					}
				}
				visible = showButton
			}
			click().add {
				currentLevelNumber.change { it + 1 }
			}
		} layout { bottom = 10f; horizontalCenter = 0f }
	}

	private fun initVictoryScreen() {
		(levels or currentLevelNumber).bind {
			if (levels.value.isNotEmpty() && currentLevelNumber.value >= levels.value.size) {
				visible = false
				addPopUp(popUpInfo = PopUpInfo(VictoryView(this)))
			}
		}
	}

	// Utility

	private val gridPosition = GridPosition()

	private val mouseGridPosition: GridPosition
		get() = gameStage.canvasToGrid(mouse.canvasX, mouse.canvasY, gridPosition)
}

data class UiControlsStateVo(
		val isMuted: Boolean = true,
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
fun DataBinding<GameLevel>.placeCharacter(gameCharacter: GameCharacter, position: GridPosition) {
	val tile = value.getTile(position.row, position.col)
	Log.debug("placeCharacter : Position: $position Tile: $tile Character: $gameCharacter")
	var foundEmptyLocation = false
	if (tile != null && tile.roomType == RoomType.STANDARD) {
		val existingCharacter = value.getCharacterAt(position.row, position.col)
		if (existingCharacter?.id == gameCharacter.id) return
		if (existingCharacter == null) {
			Log.debug("Tile empty, placing...")
			foundEmptyLocation = true
			change {
				it.copy(characters = it.characters.replace(gameCharacter, gameCharacter.copy(row = position.row, col = position.col)))
			}
		}
	}
	if (!foundEmptyLocation) {
		change {
			it.copy(characters = it.characters.replace(gameCharacter, gameCharacter.copy(row = -1, col = -1)))
		}
	}
}

data class GridPosition(var row: Int = 0, var col: Int = 0)