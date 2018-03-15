import { Request } from 'express-serve-static-core';
import { Mongo } from '../database/Mongo';
import { CardsService } from '../services/CardsService';

export class CardsController {
	private app: any;
	private cardService: CardsService;

	constructor(app, service) {
		this.app = app;
		this.cardService = service;
	}
	public makeRoutes() {
		const { app, cardService } = this;

		app.get('/', (req, res) => {
			cardService.getAll().then(data => {
				res.send(data);
			});
		});

		app.post('/create', (req, res) => {
			const { body } = req;
			cardService.createCard(body).then(confirmation => {
				res.send(confirmation);
			});
		});

		app.delete('/:id', (req: Request, res: any) => {
			const { id } = req.params;
			cardService.deleteOne(id).then(response => res.send(response));
		});
	}
}
