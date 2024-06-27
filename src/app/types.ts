interface TopRated {
  adult: boolean,
  backdrop_path: string,
  genre_ids: string[],
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}

interface TopTrending {
  backdrop_path: string,
  id: number,
  title: string,
  original_title: string,
  overview: string,
  poster_path: string,
  media_type: string,
  adult: boolean,
  name: string,
  original_language: string,
  genre_ids: number[],
  popularity: number,
  first_air_date: string,
  release_date: string,
  vote_average: number,
  video: false,
  vote_count: number,
}

export type TopData = TopRated | TopTrending;

export interface ApiSuccessResponse {
  page: number
  results: TopData[]
  total_pages: number
  total_result: number
}