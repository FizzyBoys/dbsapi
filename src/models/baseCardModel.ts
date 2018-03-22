import { BattleCard, BattleCardModel } from './battleCardModel';
import { ExtraCard, ExtraCardModel } from './extraCardModel';
import { LeaderCard, LeaderCardModel } from './leaderCardModel';

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
	[key: string]: string | number | Date | BaseSkill[] | LeaderCard;
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
	[key: string]: string | number | BaseSkill[] | LeaderCard;
}

export interface BaseSkill {
	keyword: string[];
	text: string;
	cost?: string[];
}

export class BaseCardModel {
	private BCM: BattleCardModel;
	private ECM: ExtraCardModel;
	private LCM: LeaderCardModel;

	constructor(BCM, ECM, LCM) {
		this.BCM = BCM;
		this.ECM = ECM;
		this.LCM = LCM;
	}
	public async buildMany(rawData: RawBaseCard[]): Promise<BaseCard[]> {
		const cards: BaseCard[] = [];
		rawData.forEach(async (rawCard: RawBaseCard) => {
			if (rawCard.type === 'Battle') {
				cards.push(await this.BCM.buildOne(rawCard));
			} else if (rawCard.type === 'Extra') {
				cards.push(await this.ECM.buildOne(rawCard));
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
