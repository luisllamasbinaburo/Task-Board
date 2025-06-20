// Define the structure of Board, Column, and the Data read from JSON
export type ColumnData = {
	colType: string;
	active: boolean;
	collapsed?: boolean;
	name: string;
	index: number;
	coltag?: string;
	path?: string;
	range?: {
		tag: string;
		rangedata: {
			from: number;
			to: number;
		};
	};
	limit?: number;
	sort?: {
		criteria: string;
		order: boolean; // Ascending = 0 AND Descending = 1
	};
	frontmatterKey?: string;
	frontmatterValue?: any;
}

export type Board = {
	name: string;
	index: number;
	columns: ColumnData[];
	filters?: string[];
	filterPolarity?: string;
	filterScope?: string;
	showColumnTags?: boolean;
	showFilteredTags?: boolean;
}

export type BoardConfigs = Board[];

