import React from "react";
import { NavLink } from "react-router";
function Navbar() {
  return (
    <div className="fixed w-full left-0  z-20  ">
      <div className="navbar flex flex-row justify-between p-2  md:px-32 px-5  bg-white shadow-[0_3px_10px_rgba(0,0,0,0.2)]">
        <div className=" top-1 md:-left-24 relative lg:left-0  justify-center cursor-pointer">
          <h1 className="text-xl font-semibold">Movies</h1>
        </div>
        <div className=" hidden   md:flex md:-left-20 relative lg:left-0 flex-row items-center text-lg font-medium gap-8 ">
          <NavLink
            to={"/"}
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            Home
          </NavLink>
          <div className="flex items-center gap-1 ">
            <NavLink
              to={"/movies"}
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              movies
            </NavLink>
          </div>
          <NavLink
            to={"/about"}
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            About
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
