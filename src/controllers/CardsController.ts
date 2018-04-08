import { Response } from 'express';
import * as basicAuth from 'express-basic-auth';
import { Request } from 'express-serve-static-core';
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

		app.get('/all', (req: Request, res: Response) => {
			cardService.getAll().then(data => {
				res.status(200).send(data);
			});
		});

		app.post(
			'/create',
			basicAuth({ users: { [process.env.AUTH_USER]: process.env.AUTH_PWD } }),
			(req: Request, res: Response) => {
				const { body } = req;
				cardService
					.createCard(body)
					.then(confirmation => res.status(200).send(confirmation));
			}
		);

		app.delete(
			'/:id',
			basicAuth({ users: { [process.env.AUTH_USER]: process.env.AUTH_PWD } }),
			(req: Request, res: Response) => {
				const { id } = req.params;
				cardService
					.deleteOne(id)
					.then(response => response && res.status(200).send(response));
			}
		);

		app.put(
			'/:id',
			basicAuth({ users: { admin: 'admin' } }),
			(req: Request, res: Response) => {
				const { id } = req.params;
				const { body } = req;
				cardService
					.updateOne(id, body)
					.then(response => response && res.status(200).send(response));
			}
		);
	}
}
