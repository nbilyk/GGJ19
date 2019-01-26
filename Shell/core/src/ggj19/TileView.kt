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
import com.acornui.component.atlas
import com.acornui.core.di.Owned
import com.acornui.core.observe.dataBinding
import ggj19.model.RoomType
import ggj19.model.Tile

class TileView(owner: Owned) : ContainerImpl(owner) {

	private val atlasPath = "assets/ggj.json"
	val data = dataBinding(Tile())

	private val atlas = addChild(atlas(atlasPath, "EmptyTile") {
		originY = 64f
		originX = 128f
		setScaling(0.5f, 0.5f)
	})

	init {
		data.bind {
			val region = when (it.roomType) {
				RoomType.NONE -> "EmptyRoom"
				RoomType.STANDARD -> "Room"
			}
			atlas.setRegion(atlasPath, region)
		}


	}
}