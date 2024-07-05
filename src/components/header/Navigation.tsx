import { AiFillHome } from "react-icons/ai";
import MenuItem from "../menuItem/MenuItem";
import { BsFillInfoCircleFill } from "react-icons/bs";

export default function Navigation() {
	return (
		<nav className="flex gap-3">
			<MenuItem title="Home" address="/" Icon={AiFillHome} />
			<MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill} />
		</nav>
	);
}
