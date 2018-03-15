export interface BattleCard {
	id: string;
	name: string;
	type: string;
	color: string;
	power: number;
	energy: string;
	comboEnergy: number;
	comboPower: number;
	character: string;
	specialTrait: string;
	era: string;
	series: string;
	rarity: string;
	skills: BattleCardSkill[];
	tournamentRelease: Date;
	img: string;
}

export interface RawBattleCard {
	_id: string;
	name: string;
	type: string;
	color: string;
	power: number;
	energy: Energy;
	comboEnergy: number;
	comboPower: number;
	collectorsNum: string;
	character: string;
	specialTrait: string;
	era: string;
	series: string;
	rarity: string;
	skills: BattleCardSkill[];
	tournamentRelease: string;
	img: string;
}

export interface BattleCardSkill {
	keyword: string[];
	text: string;
	cost?: string[];
}

export interface Energy {
	totalCost: number;
	colorRequirement: string;
}

export class BattleCardModel {
	public async buildMany(rawData: RawBattleCard[]): Promise<BattleCard[]> {
		const cards: BattleCard[] = [];
		rawData.forEach(async (rawCard: RawBattleCard) =>
			cards.push(await this.buildOne(rawCard))
		);
		return cards;
	}
	public async buildOne(rawData: RawBattleCard): Promise<BattleCard> {
		const card: any = {};
		card.id = rawData.collectorsNum;
		card.name = rawData.name;
		card.type = rawData.type;
		card.color = rawData.color;
		card.power = rawData.power;
		card.energy = rawData.energy;
		card.comboEnergy = rawData.comboEnergy;
		card.comboPower = rawData.comboPower;
		card.character = rawData.character;
		card.specialTrait = rawData.specialTrait;
		card.era = rawData.era;
		card.series = rawData.series;
		card.rarity = rawData.rarity;
		card.skills = rawData.skills;
		const dateFields: string[] = [...rawData.tournamentRelease.split('-')];
		card.tournamentRelease = new Date(
			+dateFields[0],
			+dateFields[1],
			+dateFields[3]
		);
		card.img = rawData.img;
		return card;
	}
	// to-do: change DB data to enable this

	// private convertEnergy(energy: Energy): string {
	// 	const color: string[] = energy.colorRequirement.split('');
	// 	return `${energy.totalCost}${color[1].repeat(+color[0])}`;
	// }
}
