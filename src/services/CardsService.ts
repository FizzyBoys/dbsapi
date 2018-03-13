export class CardsService {
	public getAll(mongo: any) {
		return mongo.getAll().then((data: object) => data);
	}
	public createCard(mongo: any, payload: any) {
		return mongo.create(payload).then((confirmation: object) => confirmation);
	}
}
