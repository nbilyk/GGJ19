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

import com.acornui.async.launch
import com.acornui.component.UiComponent
import com.acornui.component.style.addStyleRule
import com.acornui.component.text.charStyle
import com.acornui.component.text.loadFontFromAtlas
import com.acornui.core.asset.cachedGroup
import com.acornui.graphic.Color
import com.acornui.skins.BasicUiSkin

class Skin(stage: UiComponent) : BasicUiSkin(stage) {

	override fun initTheme() {
		theme.textColor = Color(1f, 1f, 1f, 1f)
	}

	override fun loadBitmapFonts() {
		val group = cachedGroup()
		launch {
			loadFontFromAtlas("assets/uiskin/mainFont.fnt", theme.atlasPath, group)
			target.addStyleRule(charStyle { fontKey = "assets/uiskin/mainFont.fnt" })
		}
	}
}