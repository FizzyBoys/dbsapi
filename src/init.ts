import { CardsController } from './controllers/CardsController';
import { Mongo } from './database/Mongo';
import { BaseCardModel } from './models/baseCardModel';
import { BattleCardModel } from './models/battleCardModel';
import { ExtraCardModel } from './models/extraCardModel';
import { LeaderCardModel } from './models/leaderCardModel';
import { CardsService } from './services/CardsService';

export class Init {
	private app: any;
	private M: Mongo;
	private CS: CardsService;
	private CC: CardsController;
	private BCM: BattleCardModel;
	private ECM: ExtraCardModel;
	private LCM: LeaderCardModel;
	private Model: BaseCardModel;

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
		this.BCM = new BattleCardModel();
		this.ECM = new ExtraCardModel();
		this.LCM = new LeaderCardModel();
		this.Model = new BaseCardModel(this.BCM, this.ECM, this.LCM);
		this.CS = new CardsService(this.Model, this.M);
		this.CC = new CardsController(this.app, this.CS);
	}

	private initRoutes() {
		this.CC.makeRoutes();
	}
}
