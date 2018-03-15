import { BattleCardModel, RawBattleCard } from '../models/battleCardModel';
import { Mongo } from '../database/Mongo';

export class CardsService {
	private model: BattleCardModel;
	private mongo: Mongo;

	constructor(model, mongo) {
		this.model = model;
		this.mongo = mongo;
	}
	public getAll() {
<<<<<<< ca0d2e8280c380f959d39f2f2e8898aec36d0bcd
		return this.mongo.getAll().then((data: object) => {
			return data;
		});
=======
		return this.mongo
			.getAll()
			.then((data: RawBattleCard[]) => this.model.buildMany(data));
>>>>>>> feature(#13): made Battle Card model
	}
	public createCard(payload: any) {
		return this.mongo.create(payload).then((confirmation: object) => {
			let success = false;
			let delta = 0;
			if (confirmation) {
				const { insertedCount }: any = confirmation;
				success = insertedCount >= 1;
				delta = insertedCount;
			}
			const response = {
				delta,
				success
			};
			return response;
		});
	}
	public deleteOne(id: number) {
		return this.mongo.deleteOne(id).then((confirmation: object) => {
			let success = false;
			let delta = 0;
			if (confirmation) {
				const { deletedCount }: any = confirmation;
				(success = deletedCount >= 1), (delta = deletedCount);
			}
			const response: object = {
				delta,
				success
			};
			return response;
		});
	}
}
