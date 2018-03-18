import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as basicAuth from 'express-basic-auth';
import * as logger from 'morgan';
import { Init } from './init';

// Start up express servcer
const app = express();

// Init middleware
app.use(logger('combined'));
app.use(bodyParser.json());

<<<<<<< HEAD
const options = {
	users: { admin: 'admin' }
};

// TODO: move instantiation to another class
// init classes
const M = new Mongo();
const CS = new CardsService(M);
const CC = new CardsController(app, CS);
=======
// Attach our classes to server
const I = new Init(app);
>>>>>>> feature(none): added improved error handling to mongo

// Once the app is started up, attach open our port
I.bootstrap().then(connection => {
	app.listen(7777, () => {
		// tslint:disable-next-line
		console.log('initiating dragon balls on 7777');
	});
});
