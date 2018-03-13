import { Mongo } from '../database/Mongo';
import { CardsService } from '../services/CardsService';

export class CardsController {
	private app: any;
	private mongo: Mongo;
	private cardService: CardsService;

	constructor(app, mongo) {
		this.app = app;
		this.mongo = mongo;
		this.cardService = new CardsService();
	}
	public makeRoutes() {
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
