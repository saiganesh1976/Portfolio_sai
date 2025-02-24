import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-slate-900 py-3 flex flex-col lg:flex-row lg:items-center justify-between lg:justify-evenly text-center">
      <div className="flex items-center justify-between px-4 lg:px-0">
        <div>
          <h1 className="text-2xl font-bold text-white">
            {" "}
            <a href="https://www.linkedin.com/in/ratnala-saiganesh/" target="_blank">
              {" "}
              SaiGanesh Ratnala{" "}
            </a>
          </h1>
        </div>
        <button
          className="text-white lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>
      </div>
      <div
        className={`lg:flex lg:items-center lg:gap-10 ${
          isOpen ? "block" : "hidden"
        } lg:block`}
      >
        <ul className="lg:flex text-white gap-10">
          <li className="py-2 lg:py-0">
            <a href="#home">Home</a>
          </li>
          <li className="py-2 lg:py-0">
            {" "}
            <a href="#about"> About Me</a>
          </li>
          <li className="py-2 lg:py-0">
            <a href="#Education"> Education</a>
          </li>
          <li className="py-2 lg:py-0">
            <a href="#Experience"> Experiences</a>
          </li>
          <li className="py-2 lg:py-0">
            <a href="#projects"> Projects</a>
          </li>
          <li className="py-2 lg:py-0">
            <a href="#contact"> Contact</a>
          </li>
        </ul>
      </div>
      <div className="mt-3 hidden lg:block lg:mt-0 transition ease-in-out delay-150 hover:-translate-z-1 hover:scale-105 duration-700 bg-gradient-to-r from-violet-500 to-fuchsia-500 py-3 px-5 rounded-full font-medium cursor-pointer text-md text-white">
        <a href="#contact">Connect with me</a>
      </div>
    </div>
  );
};

export default Navbar;
