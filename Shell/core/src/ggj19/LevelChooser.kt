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

import com.acornui.component.WindowPanel
import com.acornui.component.button
import com.acornui.component.layout.algorithm.vGroup
import com.acornui.core.di.Owned
import com.acornui.core.input.interaction.click
import com.acornui.core.observe.DataBinding

class LevelChooser(owner: Owned, levels: Int, levelBinding: DataBinding<Int>) : WindowPanel(owner) {

	init {
		+vGroup {
			for (i in 1..levels) {
				+button("Level $i") {
					levelBinding.bind {
						toggled = i == it + 1
					}
					click().add {
						levelBinding.value = i - 1
//						close()
					}
				}
			}
		}
	}

}
