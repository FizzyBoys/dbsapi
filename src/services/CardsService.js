export class CardsService {
    constructor() {}
    getAll(mongo) {
        return mongo.query().then(data => data);
    }
}
