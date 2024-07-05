import Link from "next/link";

export default function Logo() {
	return (
		<Link
			href="/"
			className="bg-amber-400 text-amber-900 py-1 px-2 text-xl rounded font-bold"
		>
			IMDB
		</Link>
	);
}
