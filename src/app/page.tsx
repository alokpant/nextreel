import { ApiParamType } from "@/components/subHeader/SubHeaderItem";
import { ApiSuccessResponse, TopData } from "./types";
import Cards from "@/components/cards/Cards";
import { cleanUpRatedAndTrending } from "@/helper/data";
import buildApiUrl from "@/helper/api";

const ApiParam = {
	TOP_TRENDING: "trending",
	TOP_RATED: "rated",
} as const;

export const API_GENRE_URL = {
	[ApiParam.TOP_TRENDING]: "/movie/top_rated",
	[ApiParam.TOP_RATED]: "/trending/all/week",
} as const;

const DAY_IN_SECONDS = 86400;

export default async function Home({ searchParams }: Record<string, any>) {
	const genre: ApiParamType = searchParams.genre || ApiParam.TOP_TRENDING;
	const apiUrl = buildApiUrl(API_GENRE_URL[genre]);

	try {
		const response = await fetch(apiUrl, {
			next: { revalidate: DAY_IN_SECONDS },
		});
		const data: ApiSuccessResponse = await response.json();

		if (!response.ok) {
			throw new Error("Failed to see the result");
		}

		const results = cleanUpRatedAndTrending<TopData>(data.results);
		return (
			<main className="max-w-6xl m-auto flex justify-between px-3 py-6 items-center">
				<Cards cards={results} />
			</main>
		);
	} catch (error) {
		console.error("Error:", error);
		throw new Error("Failed to see the result");
	}
}
