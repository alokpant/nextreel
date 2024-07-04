import Link from "next/link";
import { TopData } from "../../app/types";
import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";

const IMAGE_URL = process.env.IMAGE_URL;

export default function Card(card: TopData) {
	const lightBackgroundClasses =
		"border-slate-200 from-slate-100 to-slate-200 hover:from-slate-100 hover:to-slate-300";
	const darkBackgroundClasses =
		"dark:border-slate-800 dark:from-slate-800 dark:to-slate-900 dark:hover:from-slate-700 dark:hover:to-slate-900";
	return (
		<Link
			href={`/movie/${card.id}`}
			className={`cursor-pointer border-1 bg-gradient-to-r transition-background duration-300 ${lightBackgroundClasses} ${darkBackgroundClasses}`}
		>
			<Image
				src={`${IMAGE_URL}${card.poster_path}`}
				width="500"
				height="300"
				alt={card.original_title}
			/>
			<section className="p-3">
				<h1 className="text-md font-semibold text-slate-800 dark:text-slate-300">
					{card.title}
				</h1>
				{card.release_date && (
					<h3 className="text-xs">
						<span className="text-slate-800 dark:text-slate-300">
							Released Date:{" "}
						</span>
						{card.release_date}
					</h3>
				)}
				<p className="line-clamp-3 text-sm pt-3">{card.overview}</p>
				<p className="flex items-center text-sm pt-3">
					<FiThumbsUp className="mr-2" /> {card.vote_count}
				</p>
			</section>
		</Link>
	);
}
