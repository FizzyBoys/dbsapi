'use strict';
var __awaiter =
	(this && this.__awaiter) ||
	function(thisArg, _arguments, P, generator) {
		return new (P || (P = Promise))(function(resolve, reject) {
			function fulfilled(value) {
				try {
					step(generator.next(value));
				} catch (e) {
					reject(e);
				}
			}
			function rejected(value) {
				try {
					step(generator['throw'](value));
				} catch (e) {
					reject(e);
				}
			}
			function step(result) {
				result.done
					? resolve(result.value)
					: new P(function(resolve) {
							resolve(result.value);
					  }).then(fulfilled, rejected);
			}
			step((generator = generator.apply(thisArg, _arguments || [])).next());
		});
	};
Object.defineProperty(exports, '__esModule', { value: true });
class BattleCardModel {
	buildMany(rawData) {
		return __awaiter(this, void 0, void 0, function*() {
			const cards = [];
			rawData.forEach(rawCard =>
				__awaiter(this, void 0, void 0, function*() {
					return cards.push(yield this.buildOne(rawCard));
				})
			);
			return cards;
		});
	}
	buildOne(rawData) {
		return __awaiter(this, void 0, void 0, function*() {
			console.log({ rawData });
			let card = {};
			card.id = rawData.collectorsNum;
			card.name = rawData.name;
			card.type = rawData.type;
			card.color = rawData.color;
			card.power = rawData.power;
			card.energy = rawData.energy;
			card.comboEnergy = rawData.comboEnergy;
			card.comboPower = rawData.comboPower;
			card.character = rawData.character;
			card.specialTrait = rawData.specialTrait;
			card.era = rawData.era;
			card.series = rawData.series;
			card.rarity = rawData.rarity;
			card.skills = rawData.skills;
			const dateFields = [...rawData.tournamentRelease.split('-')];
			card.tournamentRelease = new Date(
				+dateFields[0],
				+dateFields[1],
				+dateFields[3]
			);
			card.img = rawData.img;
			return card;
		});
	}
}
exports.BattleCardModel = BattleCardModel;
//# sourceMappingURL=battleCardModel.js.map
