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
  // const response = await fetch(`${API_URL}${API_GENRE_URL[genre]}?api_key=${API_KEY}&languages=en-US&page=1`)
  // const data = await response.json()

  // console.log('=========================')
  // console.log('=========================')
  // console.log('=========================')
  // console.log('=========================')
  // console.log('=========================')
  // console.log(`${API_URL}${API_GENRE_URL[genre]}?api_key=${API_KEY}&languages=en-US&page=1`)
  // console.log(data)

  // if (!response.ok) {
  //   throw new Error('Failed to see the result')
  // }

  // const result = data.results;
  const result = genre === ApiParam.TOP_TRENDING ? topTrending.results : topRated.results;
  const display = result.map(({id, original_title}) => <li key={id}>{original_title}</li>)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul>{display}</ul>
    </main>
  );
}
