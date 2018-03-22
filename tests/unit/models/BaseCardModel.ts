import { expect } from 'chai';
import * as sinon from 'sinon';
import { BaseCardModel } from '../../../src/models/baseCardModel';
import Fixture from '../../fixtures/Fixture';

const BCM = {
	buildOne: Function
};
const ECM = {
	buildOne: Function
};
const LCM = {
	buildOne: Function
};

const Model = new BaseCardModel(BCM, ECM, LCM);

describe('BaseCardModel', () => {
	it('BaseCardModel: buildMany', async () => {
		const B = await Fixture.loadFixture(`battleCard`);
		const E = await Fixture.loadFixture(`extraCard`);
		const L = await Fixture.loadFixture(`leaderCard`);

		const Cards = [B, E, L];

		const Battle = sinon.stub(BCM, 'buildOne');
		const Extra = sinon.stub(ECM, 'buildOne');
		const Leader = sinon.stub(LCM, 'buildOne');

		await Model.buildMany(Cards);

		sinon.assert.calledOnce(Battle);
		sinon.assert.calledOnce(Extra);
		sinon.assert.calledOnce(Leader);
	});
});
