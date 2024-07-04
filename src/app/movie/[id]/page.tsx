import buildApiUrl from "@/helper/api";
import { Movie, PageParams } from "../../types";
import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";
import Link from "next/link";

const DAY_IN_SECONDS = 86400;
const IMAGE_URL = process.env.IMAGE_URL;

export default async function MoviePage(movieParams: PageParams) {
	const {
		params: { id },
	} = movieParams;
	const apiUrl = buildApiUrl(`/movie/${id}`);

	try {
		const response = await fetch(apiUrl, {
			next: { revalidate: DAY_IN_SECONDS },
		});
		const movie: Movie = await response.json();

		if (!response.ok) {
			throw new Error("Failed to see the result");
		}

		return (
			<main className="max-w-2xl m-auto grid grid-cols-1 sm:grid-cols-2 justify-center sm:justify-between px-3 py-6 items-start">
				<Image
					src={`${IMAGE_URL}${movie.poster_path}`}
					width="300"
					height="300"
					className="justify-self-center sm:justify-self-start w-full"
					alt={movie.original_title}
				/>
				<section className="p-3">
					<h1 className="text-lg font-semibold text-slate-800 dark:text-slate-300">
						{movie.title}
					</h1>
					{movie.release_date && (
						<h3 className="text-xs">
							<span className="text-slate-800 dark:text-slate-300">
								Released Date:{" "}
							</span>
							{movie.release_date}
						</h3>
					)}
					<p className="flex items-center text-xs pt-1">
						<FiThumbsUp className="mr-2" /> {movie.vote_count}
					</p>
					<p className="text-sm py-6">{movie.overview}</p>

					<Link
						href={movie.homepage}
						rel="nofollow"
						className="text-xs hover:bg-amber-400 dark:hover:bg-slate-950 bg-slate-200 dark:bg-slate-800 relative items-center justify-center rounded-md p-2 text-slate-950 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:focus:ring-slate-950"
					>
						Movie page
					</Link>
				</section>
			</main>
		);
	} catch (error) {
		console.error("Error:", error);
		throw new Error("Failed to see the result");
	}
}
