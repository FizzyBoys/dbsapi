'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const bodyParser = require('body-parser');
const express = require('express');
const CardsController_1 = require('./controllers/CardsController');
const Mongo_1 = require('./database/Mongo');
// instantiate classes
const app = express();
const M = new Mongo_1.Mongo();
const CC = new CardsController_1.CardsController(app, M);
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
//# sourceMappingURL=server.js.map
