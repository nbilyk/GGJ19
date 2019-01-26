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

package ggj19.util

import com.acornui.math.Vector2

object Isometric {

	fun isoToTwoD(x: Float, y: Float): Vector2 = isoToTwoD(Vector2(x, y))
	fun isoToTwoD(coord: Vector2): Vector2 {
		return coord.set((2f * coord.y + coord.x) / 2f, (2f * coord.y - coord.x) / 2f)
	}

	fun twoDToIso(x: Float, y: Float): Vector2 = twoDToIso(Vector2(x, y))
	fun twoDToIso(coord: Vector2): Vector2 {
		return coord.set(coord.x - coord.y, (coord.x + coord.y) / 2)
	}
}