import express from 'express';
import { Mongo } from './database/Mongo';
import { CardsController } from './controllers/CardsController';

const app = express();
const M = new Mongo();
const CC = new CardsController(app, M);

M.connect().then(
	app.listen(7777, () => {
		console.log('initiating dragon balls on 7777');
	})
);

CC.makeRoutes();
