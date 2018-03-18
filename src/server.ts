import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as basicAuth from 'express-basic-auth';
import * as logger from 'morgan';
import { CardsController } from './controllers/CardsController';
import { Mongo } from './database/Mongo';
import { CardsService } from './services/CardsService';

// init app
const app = express();

// init middleware
app.use(logger('combined'));
app.use(bodyParser.json());

const options = {
	users: { admin: 'admin' }
};

// TODO: move instantiation to another class
// init classes
const M = new Mongo();
const CS = new CardsService(M);
const CC = new CardsController(app, CS);

// init routes
CC.makeRoutes();

// Open MongoDB connection
M.connect().then(result => {
	app.listen(7777, () => {
		// tslint:disable-next-line
		console.log('initiating dragon balls on 7777');
	});
});
