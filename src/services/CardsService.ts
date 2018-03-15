import { Mongo } from '../database/Mongo';
export class CardsService {
	private mongo: Mongo;

	constructor(mongo: Mongo) {
		this.mongo = mongo;
	}

	public getAll() {
		return this.mongo.getAll().then((data: object) => data);
	}
	public createCard(payload: any) {
		return this.mongo
			.create(payload)
			.then((confirmation: object) => confirmation);
	}
	public deleteOne(id: number) {
		return this.mongo
			.deleteOne(id)
			.then((confirmation: object) => confirmation);
	}
}
