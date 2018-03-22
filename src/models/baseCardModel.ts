import { BattleCardModel, BattleCard } from './battleCardModel';
import { ExtraCardModel, ExtraCard } from './extraCardModel';
import { LeaderCardModel, LeaderCard } from './leaderCardModel';

export interface BaseCard {
	id: string;
	name: string;
	type: string;
	color: string;
	series: string;
	rarity: string;
	tournamentRelease: Date;
	img: string;
	skills: BaseSkill[];
	[key: string]: string | number | Date | Array<BaseSkill> | LeaderCard;
}

export interface RawBaseCard {
	_id: string;
	collectorsNum: string;
	name: string;
	type: string;
	color: string;
	series: string;
	rarity: string;
	tournamentRelease: string;
	img: string;
	skills: BaseSkill[];
	[key: string]: string | number | Array<BaseSkill> | LeaderCard;
}

export interface BaseSkill {
	keyword: string[];
	text: string;
	cost?: string[];
}

export class BaseCardModel {
	public BCM: BattleCardModel;
	public ECM: ExtraCardModel;
	public LCM: LeaderCardModel;

	constructor() {
		this.BCM = new BattleCardModel();
		this.ECM = new ExtraCardModel();
		this.LCM = new LeaderCardModel();
	}
	public async buildMany(rawData: RawBaseCard[]): Promise<BaseCard[]> {
		const cards: BaseCard[] = [];
		rawData.forEach(async (rawCard: RawBaseCard) => {
			if (rawCard.type === 'Battle') {
				cards.push(await this.BCM.buildOne(rawCard));
			} else if (rawCard.type === 'Extra') {
				cards.push(await this.BCM.buildOne(rawCard));
			} else {
				cards.push(await this.LCM.buildOne(rawCard));
			}
		});
		return cards;
	}
	// to-do: change DB data to enable this

	// private convertEnergy(energy: Energy): string {
	// 	const color: string[] = energy.colorRequirement.split('');
	// 	return `${energy.totalCost}${color[1].repeat(+color[0])}`;
	// }

	// export interface Energy {
	// 	totalCost: number;
	// 	colorRequirement: string;
	// }
}
