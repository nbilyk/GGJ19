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

import ggj19.model.GameCharacter
import ggj19.model.GameCharacterType
import ggj19.model.GameCharacterType.*
import kotlin.math.abs

object GameRules {

	private val dislikeRules: Map<GameCharacterType, List<GameCharacterType>> = mapOf(
			MUSICIAN to listOf(MUSICIAN, PARENT),
			OLD_PERSON to listOf(OLD_PERSON, COOK),
			PARENT to listOf(PARENT, MUSICIAN),
			COOK to listOf(OLD_PERSON, COOK)
	)

	fun calculateHappiness(characters: List<GameCharacter>): Map<String, Boolean> {
		val happiness = HashMap<String, Boolean>()
		// Initialize to happy
		for (character in characters) {
			happiness[character.id] = true
		}

		// Check for reasons to be unhappy.

		// Dislike rules
		for (character in characters) {
			val dislikeRule = dislikeRules[character.type] ?: continue
			val neighbors = character.neighbors(characters)
			if (neighbors.find { dislikeRule.contains(it.type) } != null) {
				happiness[character.id] = false
			}
		}
		return happiness
	}

	// Directly adjacent
	private fun GameCharacter.neighbors(all: List<GameCharacter>): List<GameCharacter> {
		return all.filter {
			if (it.id == this.id) false
			else if (!it.isPlaced) false
			else {
				it.row == row && abs(col - it.col) <= 1
				|| it.col == col && abs(row - it.row) <= 1
			}
		}
	}
}