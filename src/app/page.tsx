import { ApiParamType } from "@/components/subHeader/SubHeaderItem";
import topTrending from '../data/topTrending.json';
import topRated from '../data/topRated.json';
import { useSearchParams } from 'next/navigation'
import { ApiSuccessResponse, TopData } from "./types";
import Cards from "@/components/cards/Cards";
import { cleanUpRatedAndTrending } from "@/helper/data";

const ApiParam = {
  TOP_TRENDING: 'trending',
  TOP_RATED: 'rated',
} as const;

export const API_GENRE_URL = {
  [ApiParam.TOP_TRENDING]: '/movie/top_rated',
  [ApiParam.TOP_RATED]: '/trending/all/week',
} as const;

const DAY_IN_SECONDS = 86400

const API_KEY = process.env.API_KEY;
const API_URL = process.env.API_URL;

export default async function Home({ searchParams }:  Record<string, any>) {
  const genre: ApiParamType = searchParams.genre || ApiParam.TOP_TRENDING;
  const apiUrl = `${API_URL}${API_GENRE_URL[genre]}?api_key=${API_KEY}&language=en-US&page=1`;

  try {
    const response = await fetch(apiUrl, { next: { revalidate: DAY_IN_SECONDS }});
    const data: ApiSuccessResponse = await response.json();

    if (!response.ok) {
      throw new Error('Failed to see the result');
    }

    const results = cleanUpRatedAndTrending<TopData>(data.results);
    return (
      <main className="max-w-6xl m-auto flex justify-between px-3 py-6 items-center">
        <Cards cards={ results} />
      </main>
    );
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Failed to see the result');
  }
}
