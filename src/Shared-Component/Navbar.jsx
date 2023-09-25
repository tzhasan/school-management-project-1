import React from "react";
import { NavLink } from "react-router-dom";

// navlinks ke map kore Navbar e implement korte hobe !!!
const navLinks = [
  {
    name: "Home",
    path: "/",
    logo: "",
  },
  {
    name: "About Us",
    path: "/",
    logo: "",
  },
  {
    name: "Teacher",
    path: "/",
    logo: "",
  },
  {
    name: "Student",
    path: "/",
    logo: "",
  },
  {
    name: "Results",
    path: "/",
    logo: "",
  },
  {
    name: "Photo",
    path: "/",
    logo: "",
  },
  {
    name: "Video",
    path: "/",
    logo: "",
  },
  {
    name: "Register",
    path: "/register",
    logo: "",
  },
  {
    name: "Login",
    path: "/login",
    logo: "",
  },
];

const Navbar = () => {
  return (
    <div className="container mx-auto bg-[#051939] h-14 flex items-center border-b-4 border-[#800505]">
      <ul className="flex items-center text-white text-[18px]">
        {navLinks.map((link, index) => (
          <li className="ml-4" key={index}>
            <NavLink to={link.path}>{link.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
