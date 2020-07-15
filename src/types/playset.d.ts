declare type PlaysetTable = {
  title: string,
  items: string[],
}

declare type PlaysetPreset = {
  relation: number[][],
  desire: number[][],
  stuff: number[][],
  place: number[][],
}

declare type Playset = {
	title: string,
	descriptions: { title: string, content: string }[],
	author: string,
	relation: PlaysetTable[],
	desire: PlaysetTable[],
	place: PlaysetTable[],
	stuff: PlaysetTable[],
	preset: PlaysetPreset[],
}
