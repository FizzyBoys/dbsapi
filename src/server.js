import express from 'express';
import * as bodyParser from 'body-parser';
import { Mongo } from './database/Mongo';
import { CardsController } from './controllers/CardsController';

// instantiate classes
const app = express();
const M = new Mongo();
const CC = new CardsController(app, M);

// initialize middleware
app.use(bodyParser.json());

// Open MongoDB connection
M.connect().then(
	app.listen(7777, () => {
		console.log('initiating dragon balls on 7777');
	})
);

CC.makeRoutes();
