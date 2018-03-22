import { BaseCard, BaseSkill, RawBaseCard } from './baseCardModel';

export interface ExtraCard extends BaseCard {
	energy: string;
}

export interface RawExtraCard extends RawBaseCard {
	energy: string;
}

export class ExtraCardModel {
	public async buildOne(rawCard: RawBaseCard): Promise<ExtraCard> {
		const card: any = {};
		card.id = rawCard.collectorsNum;
		card.name = rawCard.name;
		card.type = rawCard.type;
		card.color = rawCard.color;
		card.energy = rawCard.energy;
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
