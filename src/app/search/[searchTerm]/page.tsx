import { buildSearchApiUrl } from "@/helper/api";
import type { ApiSuccessResponse, PageParams, TopData } from "../../types";
import { cleanUpRatedAndTrending } from "@/helper/data";
import Cards from "@/components/cards/Cards";

const DAY_IN_SECONDS = 86400;

export default async function SearchPage(searchParams: PageParams) {
	const {
		params: { searchTerm },
	} = searchParams;
	const apiUrl = buildSearchApiUrl(searchTerm);

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
				{results.length > 0 ? (
					<Cards cards={results} />
				) : (
					<h1>No movies found</h1>
				)}
			</main>
		);
	} catch (error) {
		console.error("Error:", error);
		throw new Error("Failed to see the result");
	}
}
