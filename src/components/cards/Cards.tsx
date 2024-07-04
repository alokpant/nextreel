import { TopData } from "../../app/types";
import Card from "./Card";

interface CardProps {
	cards: TopData[];
}

export default function Cards({ cards }: CardProps) {
	return (
		<div className="sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
			{cards.map((item) => (
				<Card key={item.id} {...item} />
			))}
		</div>
	);
}
