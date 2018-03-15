'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
class CardsService {
	constructor(model) {
		this.model = model;
	}
	getAll(mongo) {
		return mongo.getAll().then(data => this.model.buildMany(data));
	}
	createCard(mongo, payload) {
		return mongo.create(payload).then(confirmation => confirmation);
	}
}
exports.CardsService = CardsService;
//# sourceMappingURL=CardsService.js.map
