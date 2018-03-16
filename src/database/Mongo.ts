import { Db, MongoClient, MongoError } from 'mongodb';

export class Mongo {
	protected db: Db;

	constructor() {
		// TODO: figure out a better way to do this
		this.db = null;
	}
	public async connect(): Promise<void> {
		MongoClient.connect(
			'mongodb://dbsapi:mustGetTheDragonBalls@ds111059.mlab.com:11059/dbsdata',
			(err: MongoError, client) => {
				if (err) {
					throw new Error(`The Connection cannot be established ${err}`);
				}
				this.db = client.db('dbsdata');
				return true;
			}
		);
	}
	public async getAll(): Promise<any> {
		try {
			return this.db
				.collection('test')
				.find()
				.toArray();
		} catch (err) {
			throw new Error('connection not found');
		}
	}
	public async create(payload: any): Promise<any> {
		try {
			if (Array.isArray(payload)) {
				return this.db.collection('test').insertMany(payload);
			}
			return this.db.collection('test').insertOne(payload);
		} catch (err) {
			throw new Error('connection not found');
		}
	}

	public async deleteOne(id: number): Promise<any> {
		try {
			return this.db.collection('test').deleteOne({ didItWork: true });
		} catch (err) {
			throw new Error('connection not found');
		}
	}
}
