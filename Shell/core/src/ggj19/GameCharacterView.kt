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


import com.acornui.component.ContainerImpl
import com.acornui.component.InteractivityMode
import com.acornui.component.atlas
import com.acornui.component.layout.moveTo
import com.acornui.core.di.Owned
import com.acornui.core.input.interaction.dragStart
import com.acornui.core.observe.dataBinding
import com.acornui.math.Vector2
import ggj19.TileView.Companion.TILE_SIZE
import ggj19.model.GameCharacter
import ggj19.util.Isometric

class GameCharacterView(owner: Owned, initialCharacter: GameCharacter) : ContainerImpl(owner) {

	private val atlasPath = "assets/ggj.json"

	val data = dataBinding(initialCharacter)

	private val icon = addChild(atlas { setOrigin(32f, 32f) })

	init {
		dragStart().add {
			println("Drag start")
		}
		data.bind {
			println("Char changed: ${it}")
			moveTo(Isometric.twoDToIso(Vector2(
					(it.col + 0.5f) * TILE_SIZE,
					(it.row + 0.5f) * TILE_SIZE
			)))
			icon.setRegion(atlasPath, it.type.char.toString())
		}
	}
}