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

import com.acornui.component.layout.algorithm.CanvasLayoutContainer
import com.acornui.component.layout.algorithm.hGroup
import com.acornui.component.layout.algorithm.scaleBox
import com.acornui.component.stage
import com.acornui.component.text.text
import com.acornui.core.di.Owned
import com.acornui.core.nav.NavBindable
import com.acornui.core.observe.dataBinding
import com.acornui.core.observe.or
import com.acornui.signal.bind
import com.acornui.skins.BasicUiSkin
import ggj19.model.GameLevel

/**
 * @author nbilyk
 */
class GGJ19(owner: Owned) : CanvasLayoutContainer(owner), NavBindable {

	private val atlasPath = "assets/ggj.json"

	private val levels = dataBinding(listOf(GameLevel()))
	private val currentLevel = dataBinding(0)

	init {
		BasicUiSkin(stage).apply()

		+LevelView(this).apply {
			(levels or currentLevel).bind {
				data.value = levels.value[currentLevel.value]
			}
		} layout { fill() }

		+hGroup {
			+text {
				currentLevel.bind {
					text = "Level: $it"
				}
			}
		} layout { left = 10f; top = 10f }
	}
}
