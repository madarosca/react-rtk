export type MovieItemType = {
	director: string;
	title: string;
	episode_id: number;
	url: string;
	release_date: string;
};

export type Movies = {
	count: number;
	next: string;
	previous: string;
	results: MovieItemType[];
};
