export const Pokedex: {[speciesid: string]: ModdedSpeciesData} = {
	krakalong: {
		num: 10001,
		name: "Krakalong",
		types: ["Fire", "Dragon"],
		baseStats: {hp: 80, atk:  90, def: 60, spa: 110, spd: 95, spe: 105},
		abilities: {0: "Aftermath", H: "Flash Fire"},
		heightm: 1.70,
		weightkg: 40,
	},
	swedusa: {
		num: 10002,
		name: "Swedusa",
		types: ["Poison", "Dark"],
		baseStats: {hp: 80, atk:  90, def: 75, spa: 80, spd: 90, spe: 95},
		abilities: {0: "Parental Bond", 1: "Merciless", H: "Intimidate"},
		heightm: 1.40,
		weightkg: 50,
	},
	excalibirb: {
		num: 10003,
		name: "Excalibirb",
		types: ["Flying", "Steel"],
		baseStats: {hp: 85, atk:  105, def: 105, spa: 70, spd: 85, spe: 75},
		abilities: {0: "Dauntless Shield", H: "Intrepid Sword"},
		heightm: 2.20,
		weightkg: 190,
	},
	pentragon: {
		num: 10004,
		name: "Pentragon",
		types: ["Dragon", "Normal"],
		baseStats: {hp: 70, atk:  80, def: 60, spa: 110, spd: 90, spe: 120},
		abilities: {0: "Neuroforce", H: "Tinted Lens"},
		heightm: 1.80,
		weightkg: 60,
	},

};
