import React from "react";
import Link from "next/link";
import { NavLink } from "./index";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "mailto:tr.abdulkadir.polat@gmail.com" },
];

const Navbar = () => {
  return (
    <div className="bg-space-cadet px-5 z-50 fixed w-full">
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between">
        <div className="w-full">
          <Link href="/">
            <a className="font-bold text-3xl text-white px-3 pb-1 bg-gunmetal rounded-lg">
              A
            </a>
          </Link>
        </div>
        <div className="flex w-full justify-evenly items-center">
          {navigation.map((item, index) =>
            item.name !== "Contact" ? (
              <NavLink
                exact={item.href === "/"}
                key={index}
                href={item.href}
                className="text-white font-semibold mr-3"
              >
                {item.name}
              </NavLink>
            ) : (
              <Link href={item.href}>
                <a className="text-white font-normal mr-3">{item.name}</a>
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
