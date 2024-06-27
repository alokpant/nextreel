// this will make data consistent between TopRated and TopTrending.
// There are few inconsistent between results interms of original_title vs original_name,
// name vs title.

interface BaseData {
  original_name?: string;
  original_title?: string;
  name?: string;
  title?: string;
  backdrop_path?: string;
  poster_path?: string;
  released_date?: string;
  first_air_date?: string;
}

type CleanedUpData = Pick<BaseData, 'original_title' | 'title' | 'poster_path' | 'released_date'>

export const cleanUpRatedAndTrending = <T extends BaseData>(results: T[]): (T & CleanedUpData)[] => results.map((result: T) => ({
  ...result,
  original_title: result.original_name || result.original_title || '',
  title: result.name || result.title || '',
  poster_path: result.backdrop_path || result.poster_path || '',
  released_date: result.released_date || result.first_air_date || ''
}));