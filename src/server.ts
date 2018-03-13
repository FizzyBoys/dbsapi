import * as bodyParser from 'body-parser';
import * as express from 'express';
import { CardsController } from './controllers/CardsController';
import { Mongo } from './database/Mongo';

// instantiate classes
const app = express();
const M = new Mongo();
const CC = new CardsController(app, M);

// initalize routes
CC.makeRoutes();

// initialize middleware
app.use(bodyParser.json());

// Open MongoDB connection
M.connect().then(result => {
	app.listen(7777, () => {
		// tslint:disable-next-line
		console.log('initiating dragon balls on 7777');
	});
});
