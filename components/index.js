import dynamic from "next/dynamic";

const Card = dynamic(() => import("./Card"));
const Navbar = dynamic(() => import("./Navbar"));
const Layout = dynamic(() => import("./Layout"));
const NavLink = dynamic(() => import("./NavLink"));

export { Card };
export { Navbar };
export { Layout };
export { NavLink };
