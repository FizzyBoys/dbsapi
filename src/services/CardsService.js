export class CardsService {
	constructor() {}
	getAll(mongo) {
		return mongo.getAll().then(data => data);
	}
	createCard(mongo, payload) {
		return mongo.create(payload).then(confirmation => confirmation);
	}
}
