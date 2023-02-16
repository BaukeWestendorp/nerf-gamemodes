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
	blue: {
		color: 'seagreen',
		label: 'smaragdgroene'
	},
	orange: {
		color: 'indigo',
		label: 'indigokleurige'
	},
	purple: {
		color: 'firebrick',
		label: 'vuursteenrode'
	}
};

export function generateWires(): WireInfo[] {
	let wires = [
		...Object.values(allWires),
		...Object.values(allWires),
		...Object.values(allWires),
		...Object.values(allWires)
	];

	shuffle(wires);

	return wires;
}

export function getRandomWire() {
	const wireInfos = Object.values(allWires);
	return wireInfos[Math.floor(Math.random() * wireInfos.length)];
}

const shuffle = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
};
