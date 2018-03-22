import { BaseCard, BaseSkill, RawBaseCard } from './baseCardModel';

export interface LeaderCard extends BaseCard {
	character: string;
	specialTrait: string;
	era: string;
	power: number;
	awakened: LeaderCard;
}

export interface RawLeaderCard extends RawBaseCard {
	character: string;
	specialTrait: string;
	era: string;
	power: number;
	awakened: LeaderCard;
}

export class LeaderCardModel {
	public async buildOne(rawCard: RawBaseCard): Promise<LeaderCard> {
		const card: any = {};
		card.id = rawCard.collectorsNum;
		card.name = rawCard.name;
		card.type = rawCard.type;
		card.color = rawCard.color;
		card.power = rawCard.power;
		card.character = rawCard.character;
		card.specialTrait = rawCard.specialTrait;
		card.era = rawCard.era;
		card.series = rawCard.series;
		card.rarity = rawCard.rarity;
		card.skills = rawCard.skills;
		card.awakened = rawCard.awakened;
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
