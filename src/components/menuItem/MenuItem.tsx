import Link from "next/link";
import type { IconType } from "react-icons";

interface MenuItemProps {
	title: string;
	address: string;
	Icon: IconType;
}

const MenuItem = ({ title, address, Icon }: MenuItemProps) => {
	return (
		<Link href={address}>
			{<Icon className="sm:hidden" />}
			<span className="uppercase hidden sm:inline text-sm hover:text-amber-700">
				{title}
			</span>
		</Link>
	);
};
export default MenuItem;
