import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as basicAuth from 'express-basic-auth';
import * as logger from 'morgan';
<<<<<<< ca0d2e8280c380f959d39f2f2e8898aec36d0bcd
import { Init } from './init';
=======
import { CardsController } from './controllers/CardsController';
import { Mongo } from './database/Mongo';
import { CardsService } from './services/CardsService';
import { BattleCardModel } from './models/battleCardModel';
>>>>>>> feature(#13): made Battle Card model

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
<<<<<<< ca0d2e8280c380f959d39f2f2e8898aec36d0bcd
const CS = new CardsService(M);
const CC = new CardsController(app, CS);
=======
// Attach our classes to server
const I = new Init(app);
>>>>>>> feature(none): added improved error handling to mongo
=======
const BCM = new BattleCardModel();
const CS = new CardsService(BCM, M);
const CC = new CardsController(app, M, CS);
>>>>>>> feature(#13): made Battle Card model

// Once the app is started up, attach open our port
I.bootstrap().then(connection => {
	app.listen(7777, () => {
		// tslint:disable-next-line
		console.log('initiating dragon balls on 7777');
	});
});
