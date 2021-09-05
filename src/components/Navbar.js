import React from "react";

const Navbar = () => {
  return (
    <header className="flex fixed w-full z-10">
      <div className="bg-transparent flex flex-1 justify-between items-center p-6 ">
        <h1 className=" text-white text-center font-bold text-2xl">
          <a href="#home">Srijan Kr. Gupta</a>
        </h1>
        <ul className="hidden md:flex text-center justify-around text-white uppercase">
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
