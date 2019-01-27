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

package ggj19.model

import com.acornui.collection.ArrayList

data class GameLevel(
		val characters: List<GameCharacter> = emptyList(),
		val grid: List<List<Tile>> = ArrayList(MAX_ROWS) { ArrayList(MAX_COLS) { Tile() }},
		val initialLockedCount: Int = 0
) {


	val placedCount: Int
		get() = characters.count { it.isPlaced }

	val unlockedCharacters: List<GameCharacter>
		get() {
			return characters.subList(maxOf(initialLockedCount, placedCount - 1), characters.size)
		}

	fun isLocked(character: GameCharacter): Boolean {
		val index = characters.indexOf(character)
		return index < placedCount - 1
	}

	fun getTile(row: Int, col: Int): Tile? {
		if (row < 0 || col < 0 || row >= MAX_ROWS || col >= MAX_COLS) return null
		return grid[row][col]
	}

	fun getCharacterAt(row: Int, col: Int): GameCharacter? {
		return characters.find { it.row == row && it.col == col }
	}

	companion object {
		const val MAX_COLS = 20
		const val MAX_ROWS = 20
	}
}

val emptyLevel = GameLevel()