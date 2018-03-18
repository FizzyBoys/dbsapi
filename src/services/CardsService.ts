import { Mongo } from '../database/Mongo';
export class CardsService {
	private mongo: Mongo;

	constructor(mongo: Mongo) {
		this.mongo = mongo;
	}

	public getAll() {
		return this.mongo.getAll().then((data: object) => {
			return data;
		});
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
