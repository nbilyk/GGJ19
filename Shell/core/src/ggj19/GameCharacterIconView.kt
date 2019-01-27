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

import com.acornui.component.StackLayoutContainer
import com.acornui.component.contentsAtlas
import com.acornui.component.image
import com.acornui.core.di.Owned
import com.acornui.core.observe.dataBinding
import ggj19.model.GameCharacter

class GameCharacterIconView(owner: Owned) : StackLayoutContainer(owner) {

	private val atlasPath = "assets/ggj.json"

	val data = dataBinding<GameCharacter?>(null)

	private val icon = +image() layout { fill() }

	init {
		data.bind {
			if (it != null) {
				visible = true
				icon.contentsAtlas(atlasPath, "icon_" + it.type.toString().toLowerCase())
			} else {
				visible = false
			}
		}
	}
}