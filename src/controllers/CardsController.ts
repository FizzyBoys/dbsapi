import { Request } from 'express-serve-static-core';
import { Mongo } from '../database/Mongo';
import { CardsService } from '../services/CardsService';
import { Response } from 'express';

export class CardsController {
	private app: any;
	private cardService: CardsService;

	constructor(app, service) {
		this.app = app;
		this.cardService = service;
	}
	public makeRoutes() {
		const { app, cardService } = this;

		app.get('/all', (req: Request, res: Response) => {
			cardService.getAll().then(data => {
				res.status(200).send(data);
			});
		});

		app.post('/create', (req: Request, res: Response) => {
			const { body } = req;
			cardService.createCard(body).then(confirmation => {
				res.status(204).send(confirmation);
			});
		});

		app.delete('/:id', (req: Request, res: Response) => {
			const { id } = req.params;
			cardService.deleteOne(id).then(response => response && res.status(204));
		});
	}
}
