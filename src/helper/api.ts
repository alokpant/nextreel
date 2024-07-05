const API_KEY = process.env.API_KEY;
const API_URL = process.env.API_URL || '';

export default function buildApiUrl(apiPath: string) {
  console.log(`API_URL: ${API_URL}`);
  console.log(`apiPath: ${apiPath}`);
  
  const baseUrl = API_URL.endsWith('/') ? API_URL.slice(0, -1) : API_URL;
  const path = apiPath.startsWith('/') ? apiPath : `/${apiPath}`;
  
  return `${baseUrl}${path}?api_key=${API_KEY}&language=en-US&page=1`;
}

export function buildSearchApiUrl(searchTerm: string) {
	return `${buildApiUrl("/search/movie")}&query=${searchTerm}&include_adult=false`;
}
