"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
class Mongo {
    constructor() {
        // TODO: figure out a better way to do this
        this.db = null;
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            mongodb_1.MongoClient.connect('mongodb://dbsapi:mustGetTheDragonBalls@ds111059.mlab.com:11059/dbsdata', (err, client) => {
                if (err) {
                    throw new Error(`The Connection cannot be established ${err}`);
                }
                this.db = client.db('dbsdata');
                return true;
            });
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.db
                    .collection('test')
                    .find()
                    .toArray();
            }
            catch (err) {
                throw new Error('connection not found');
            }
        });
    }
    create(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (Array.isArray(payload)) {
                    return this.db.collection('test').insertMany(payload);
                }
                return this.db.collection('test').insertOne(payload);
            }
            catch (err) {
                throw new Error('connection not found');
            }
        });
    }
    deleteOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log({ id }, 'MONGO');
                return this.db.collection('test').deleteOne({ didItWork: true });
            }
            catch (err) {
                throw new Error('connection not found');
            }
        });
    }
}
exports.Mongo = Mongo;
//# sourceMappingURL=Mongo.js.map