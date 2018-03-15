import { Response } from 'express';
import * as basicAuth from 'express-basic-auth';
import { Request } from 'express-serve-static-core';
import { Mongo } from '../database/Mongo';
import { CardsService } from '../services/CardsService';

export class CardsController {
	private app: any;
	private cardService: CardsService;
	private mongo: Mongo;

	constructor(app, mongo, service) {
		this.app = app;
		this.mongo = mongo;
		this.cardService = service;
	}

	public makeRoutes() {
		const { app, cardService } = this;

		app.get('/all', (req: Request, res: Response) => {
			cardService.getAll().then(data => {
				res.status(200).send(data);
			});
		});

		app.post(
			'/create',
			basicAuth({ users: { admin: 'admin' } }),
			(req: Request, res: Response) => {
				const { body } = req;
				cardService
					.createCard(body)
					.then(confirmation => res.status(200).send(confirmation));
			}
		);

		app.delete(
			'/:id',
			basicAuth({ users: { admin: 'admin' } }),
			(req: Request, res: Response) => {
				const { id } = req.params;
				cardService
					.deleteOne(id)
					.then(response => response && res.status(200).send(response));
			}
		);
	}
}
