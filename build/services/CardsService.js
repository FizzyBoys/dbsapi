"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CardsService {
    constructor(mongo) {
        this.mongo = mongo;
    }
    getAll() {
        return this.mongo.getAll().then((data) => data);
    }
    createCard(payload) {
        return this.mongo
            .create(payload)
            .then((confirmation) => confirmation);
    }
    deleteOne(id) {
        return this.mongo
            .deleteOne(id)
            .then((confirmation) => confirmation);
    }
}
exports.CardsService = CardsService;
//# sourceMappingURL=CardsService.js.map