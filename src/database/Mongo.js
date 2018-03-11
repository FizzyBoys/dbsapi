import MongoClient from 'mongodb';

export class Mongo {
    constructor() {
        this.db;
    }
    async connect() {
        MongoClient.connect(
            'mongodb://dbsapi:mustGetTheDragonBalls@ds111059.mlab.com:11059/dbsdata',
            (err, client) => {
                if (err) return console.log(err);
                this.db = client.db('dbsdata');
                return true;
            }
        );
    }
    async query() {
        try {
            return this.db
                .collection('test')
                .find()
                .toArray();
        } catch (err) {
            throw new Error('connection not found');
        }
    }
}
