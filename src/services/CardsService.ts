import { Mongo } from '../database/Mongo';
import { BaseCardModel, RawBaseCard } from '../models/baseCardModel';

export class CardsService {
	private model: BaseCardModel;
	private mongo: Mongo;

	constructor(model, mongo) {
		this.model = model;
		this.mongo = mongo;
	}

	public getAll() {
		return this.mongo
			.getAll()
			.then((data: RawBaseCard[]) => this.model.buildMany(data));
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

	public updateOne(id: number, update: object) {
		return this.mongo.updateOne(id, update).then((confirmation: object) => {
			let success = false;
			let delta = 0;
			if (confirmation) {
				const { modifiedCount }: any = confirmation;
				(success = modifiedCount >= 1), (delta = modifiedCount);
			}
			const response: object = {
				delta,
				success
			};
			return response;
		});
	}
}
