import {
	BaseCard,
	BaseCardModel,
	BaseSkill,
	RawBaseCard
} from './baseCardModel';

export interface BattleCard extends BaseCard {
	power: number;
	energy: string;
	comboEnergy: number;
	comboPower: number;
	character: string;
	specialTrait: string;
	era: string;
	skills: BaseSkill[];
}

export interface RawBattleCard extends RawBaseCard {
	power: number;
	energy: string;
	comboEnergy: number;
	comboPower: number;
	character: string;
	specialTrait: string;
	era: string;
	skills: BaseSkill[];
}

export class BattleCardModel {
	public async buildOne(rawCard: RawBaseCard): Promise<BattleCard> {
		const card: any = {};
		card.id = rawCard.collectorsNum;
		card.name = rawCard.name;
		card.type = rawCard.type;
		card.color = rawCard.color;
		card.power = rawCard.power;
		card.energy = rawCard.energy;
		card.comboEnergy = rawCard.comboEnergy;
		card.comboPower = rawCard.comboPower;
		card.character = rawCard.character;
		card.specialTrait = rawCard.specialTrait;
		card.era = rawCard.era;
		card.series = rawCard.series;
		card.rarity = rawCard.rarity;
		card.skills = rawCard.skills;
		const dateFields: string[] = [...rawCard.tournamentRelease.split('-')];
		card.tournamentRelease = new Date(
			+dateFields[0],
			+dateFields[1],
			+dateFields[2]
		);
		card.img = rawCard.img;
		return card;
	}
}
