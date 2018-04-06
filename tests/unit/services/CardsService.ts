import * as sinon from 'sinon';
import { CardsService } from '../../../src/services/CardsService';

const M: any = {
	create: Function,
	deleteOne: Function,
	getAll: Function,
	updateOne: Function
};

const Model: any = {
	buildMany: Function
};

const service = new CardsService(Model, M);

describe('CardsService', () => {
	it('CardsService::getAll', async () => {
		const buildMany = sinon.stub(Model, 'buildMany').returns({});
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

	it('CardsService::updateOne', async () => {
		const mongo = sinon.stub(M, 'updateOne').resolves();
		await service.updateOne(1, {});

		sinon.assert.calledOnce(mongo);
	});
});
