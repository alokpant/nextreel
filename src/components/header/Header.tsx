import { AiFillHome } from "react-icons/ai";
import MenuItem from "../menuItem/MenuItem";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Navigation from "./Navigation";
import Logo from "./Logo";
import ModeSwitcher from "./ModeSwitcher";

export default function Header() {
  return <header className="bg-amber-50  dark:bg-slate-950">
    <div className="max-w-6xl m-auto flex justify-between p-3 items-center">
      <Navigation />
      <div className="flex gap-3 items-center">
        <ModeSwitcher />
        <Logo />
      </div>
    </div>
  </header>
}
