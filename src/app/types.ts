interface TopKind {
	adult: boolean;
	backdrop_path: string;
	genre_ids: string[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

interface TopRated extends TopKind {}

interface TopTrending extends TopKind {
	media_type: string;
	name: string;
	first_air_date: string;
}

export type TopData = TopRated | TopTrending;

export interface ApiSuccessResponse {
	page: number;
	results: TopData[];
	total_pages: number;
	total_result: number;
}

export interface Movie extends Omit<TopKind, "genre_ids"> {
	belongs_to_collection: {
		id: number;
		name: string;
		poster_path: string;
		backdrop_path: string;
	};
	budget: number;
	genres: {
		id: number;
		name: string;
	}[];
	homepage: string;
	imdb_id: string;
	origin_country: string[];
	production_companies: {
		id: number;
		logo_path: string;
		name: string;
		original_country: string;
	}[];
	production_countries: {
		iso_3166_1: string;
		name: string;
	};
	release_date: string;
	revenue: number;
	runtime: number;
	spoken_languages: {
		english_name: string;
		iso_3166_1: string;
		name: string;
	}[];
	status: string;
	tagline: string;
}

export interface PageParams {
	params: {
		id: number;
		searchTerm: string;
	};
	searchParams: Record<string, any>;
}
