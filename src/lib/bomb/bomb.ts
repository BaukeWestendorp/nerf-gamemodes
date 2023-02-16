export enum BombStatus {
	UNPLANTED,
	PLANTING,
	COUNTING_DOWN,
	DEFUSING,
	DEFUSED,
	EXPLODED
}

export interface WireInfo {
	color: string;
	label: string;
}

export const allWires: Record<string, WireInfo> = {
	red: {
		color: 'red',
		label: 'rode'
	},
	green: {
		color: 'green',
		label: 'groene'
	},
	blue: {
		color: 'blue',
		label: 'blauwe'
	}
};

export function generateWires(amount: number): [] {
	let wires = [];
	for (let i = 0; i < amount; i++) {
		wires.push(getRandomWire());
	}
	return wires;
}

export function getRandomWire() {
	const wireInfos = Object.values(allWires);
	return wireInfos[Math.floor(Math.random() * wireInfos.length)];
}
