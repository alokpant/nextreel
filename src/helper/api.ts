const API_KEY = process.env.API_KEY;
const API_URL = process.env.API_URL || '';

export default function buildApiUrl(apiPath: string) {
	// return `${API_URL}${apiPath}?api_key=${API_KEY}&language=en-US&page=1`;
	return API_URL.concat(`${apiPath}?api_key=${API_KEY}&language=en-US&page=1`);
}

export function buildSearchApiUrl(searchTerm: string) {
	return `${buildApiUrl("/search/movie")}&query=${searchTerm}&include_adult=false`;
}
