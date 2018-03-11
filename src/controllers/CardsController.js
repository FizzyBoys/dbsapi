import { CardsService } from '../services/CardsService';

export class CardsController {
	constructor(app, mongo) {
		this.app = app;
		this.mongo = mongo;
		this.service = new CardsService();
	}
	makeRoutes() {
		const { app, service, mongo } = this;

		app.get('/', (req, res) => {
			service.getAll(mongo).then(data => {
				res.send(data);
			});
		});

		app.post('/create', (req, res) => {
			let { body } = req;
			service.createCard(mongo, body).then(confirmation => {
				res.send(confirmation);
			});
		});
	}
}
