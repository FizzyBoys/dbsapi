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
			new Promise((resolve, reject) =>
				reject(new Error(`Unable to get documents: ${err.message}`))
			).then(null, error => {
				// tslint:disable-next-line
				console.log(error.message);
			});
		}
	}
	public async create(payload: any): Promise<any> {
		if (Array.isArray(payload)) {
			this.db
				.collection('test')
				.insertMany(payload)
				.then(data => {
					return data;
				})
				.catch(err => {
					new Promise((resolve, reject) =>
						reject(new Error(`Unable to create document: ${err.message}`))
					).then(null, error => {
						// tslint:disable-next-line
						console.log(error.message);
					});
				});
		}
		return this.db
			.collection('test')
			.insertOne(payload)
			.then(data => {
				return data;
			})
			.catch(err => {
				new Promise((resolve, reject) =>
					reject(new Error(`Unable to create document: ${err.message}`))
				).then(null, error => {
					// tslint:disable-next-line
					console.log(error.message);
					return;
				});
			});
	}

	public async deleteOne(id: number): Promise<any> {
		try {
			return this.db.collection('test').deleteOne({ collectorsNum: id });
		} catch (err) {
			new Promise((_, reject) =>
				reject(new Error(`Unable to delete document: ${err.message}`))
			).then(null, error => {
				// tslint:disable-next-line
				console.log('caught', error.message);
				return;
			});
		}
	}
}
