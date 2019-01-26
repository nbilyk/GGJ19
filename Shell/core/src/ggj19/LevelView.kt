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
import com.acornui.core.di.Owned
import com.acornui.core.observe.dataBinding
import com.acornui.graphic.Color
import com.acornui.math.Vector2
import ggj19.model.GameLevel
import ggj19.util.Isometric

class LevelView(owner: Owned) : StackLayoutContainer(owner) {

	val data = dataBinding(GameLevel())

	private val tileViews: List<List<TileView>> = ArrayList(GameLevel.MAX_ROWS) { ArrayList(GameLevel.MAX_COLS) { TileView(this) } }

	private val gameStage: UiComponent

	init {
		val padding = 50f
		defaultWidth = 64f * 20f + padding * 2f
		defaultHeight = 64f * 20f + padding * 2f

		gameStage = +stack {
			+rect {
				style.backgroundColor = Color.GRAY
			} layout { fill() }
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
}