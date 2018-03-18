import { CardsController } from './controllers/CardsController';
import { Mongo } from './database/Mongo';
import { CardsService } from './services/CardsService';

export class Init {
	private app: any;
	private M: Mongo;
	private CS: CardsService;
	private CC: CardsController;

	constructor(app) {
		this.app = app;
	}

	public async bootstrap() {
		await this.initClasses();
		await this.initRoutes();

		// open mongo connection
		return this.M.connect();
	}

	private initClasses() {
		this.M = new Mongo();
		this.CS = new CardsService(this.M);
		this.CC = new CardsController(this.app, this.CS);
	}

	private initRoutes() {
		this.CC.makeRoutes();
	}
}
