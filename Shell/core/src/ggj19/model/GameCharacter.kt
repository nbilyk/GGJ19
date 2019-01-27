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

data class GameCharacter(
		val id: String = (++nextId).toString(),
		val type: GameCharacterType = GameCharacterType.UNKNOWN,
		val row: Int = -1,
		val col: Int = -1
) {
	val isPlaced: Boolean = (col != -1)

	companion object {
		private var nextId = 0
	}
}

enum class GameCharacterType(val char: Char) {
	MUSICIAN('M'),
	OLD_PERSON('G'),
	PARENT('P'),
	COOK('C'),
	UNKNOWN('U');

	companion object {

		fun fromLetter(char: Char): GameCharacterType {
			for (value in values()) {
				if (value.char == char) return value
			}
			return UNKNOWN
		}
	}
}

val emptyCharacter = GameCharacter()