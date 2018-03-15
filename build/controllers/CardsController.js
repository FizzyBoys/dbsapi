'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const CardsService_1 = require('../services/CardsService');
const battleCardModel_1 = require('../models/battleCardModel');
class CardsController {
	constructor(app, mongo) {
		this.app = app;
		this.mongo = mongo;
		this.cardService = new CardsService_1.CardsService(
			new battleCardModel_1.BattleCardModel()
		);
	}
	makeRoutes() {
		const { app, cardService, mongo } = this;
		app.get('/', (req, res) => {
			cardService.getAll(mongo).then(data => {
				res.send(data);
			});
		});
		app.post('/create', (req, res) => {
			const { body } = req;
			cardService.createCard(mongo, body).then(confirmation => {
				res.send(confirmation);
			});
		});
	}
}
exports.CardsController = CardsController;
//# sourceMappingURL=CardsController.js.map
