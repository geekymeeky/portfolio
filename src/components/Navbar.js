import React from "react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [Nav, setNav] = useState("");
  const controlNavbar = () => {
    window.scrollY > 100
      ? setNav("bg-black")
      : setNav("bg-transparent text-white");
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <header className="flex fixed w-full z-10 ">
      <div
        className={
          Nav + " text-white flex flex-1 justify-between  items-center p-6 "
        }
      >
        <h1 className=" text-center font-bold text-2xl">
          <a href="#home">Srijan Kr. Gupta</a>
        </h1>
        <ul className="hidden md:flex text-center justify-around uppercase">
          <li className="px-4 hover:text-blue-300">
            <a href="#about">About</a>
          </li>
          <li className="px-4 hover:text-blue-300">
            <a href="#experience">Experience</a>
          </li>
          <li className="px-4 hover:text-blue-300">
            <a href="#education">Education</a>
          </li>
          <li className="px-4 hover:text-blue-300">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="px-4 hover:text-blue-300">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
