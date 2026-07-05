import { FormatData } from '../../../sim/dex-formats';

export const Formats: FormatData[] = [
	{
		name: "[Gen 9] HSD",
		desc: `<b>Hic Sunt Dracones</b>"`,
		mod: 'hicsuntdracones',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Terastal Clause', 'Sleep Clause Mod', 'Z-Move Clause', 'Mega Data Mod', 'Data Mod'],
		banlist: [
			'Baton Pass'
		],
		onValidateTeam(team, format) {
			let speciesTable = {};
			let allowedTiers = ['HSD'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (template.tier !== 'HSD') {
					return [set.species + ' is not legal in HSD.'];
				}
			}
		},
	}
];