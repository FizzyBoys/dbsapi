import { expect } from 'chai';
import * as sinon from 'sinon';
import { Mongo } from '../../../src/database/Mongo';
import { CardsService } from '../../../src/services/CardsService';

const M: any = {
	create: Function,
	deleteOne: Function,
	getAll: Function
};

const service = new CardsService(M);

describe('CardsService', () => {
	it('CardsService::getAll', async () => {
		const mongo = sinon.stub(M, 'getAll').resolves();
		await service.getAll();

		sinon.assert.calledOnce(mongo);
	});

	it('CardsService::create', async () => {
		const mongo = sinon.stub(M, 'create').resolves();
		await service.createCard({});

		sinon.assert.calledOnce(mongo);
	});

	it('CardsService::deleteOne', async () => {
		const mongo = sinon.stub(M, 'deleteOne').resolves();
		await service.deleteOne(1);

		sinon.assert.calledOnce(mongo);
	});
});
