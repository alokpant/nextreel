import { ApiParamType } from "@/components/subHeader/SubHeaderItem";
import topTrending from '../data/topTrending.json';
import topRated from '../data/topRated.json';

const ApiParam = {
  TOP_TRENDING: 'trending',
  TOP_RATED: 'rated',
} as const;

export const API_GENRE_URL = {
  [ApiParam.TOP_TRENDING]: '/movie/top_rated',
  [ApiParam.TOP_RATED]: '/trending/all/week',
} as const;

const API_KEY = process.env.API_KEY;
const API_URL = process.env.API_URL;

export default async function Home({ searchParams }) {
  const genre: ApiParamType = searchParams.genre || ApiParam.TOP_TRENDING;
  const apiUrl = `${API_URL}${API_GENRE_URL[genre]}?api_key=${API_KEY}x&language=en-US&page=1`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    console.log('=========================');
    console.log('API URL:', apiUrl);
    console.log('Response Data:', data);

    if (!response.ok) {
      throw new Error('Failed to see the result');
    }

    const result = data.results;
    const display = result.map(({ id, original_title }) => <li key={id}>{original_title}</li>);

    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <ul>{display}</ul>
      </main>
    );
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Failed to see the result');
  }
}
