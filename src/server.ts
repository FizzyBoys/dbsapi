import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as logger from 'morgan';
import { CardsController } from './controllers/CardsController';
import { Mongo } from './database/Mongo';

// instantiate classes
const app = express();

// initialize middleware
app.use(logger('combined'));
app.use(bodyParser.json());

// TODO: move instantiation to another class
// init classes
const M = new Mongo();
const CC = new CardsController(app, M);

// initalize routes
CC.makeRoutes();

// Open MongoDB connection
M.connect().then(result => {
	app.listen(7777, () => {
		// tslint:disable-next-line
		console.log('initiating dragon balls on 7777');
	});
});
