import React, { useState } from "react";

const HamburgerButton = ({ isOpen, toggleMenu }) => (
  <button className="text-white lg:hidden" onClick={toggleMenu}>
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
);

const NavbarLinks = ({ isOpen }) => (
  <div
    className={`lg:flex lg:items-center lg:gap-10 ${
      isOpen ? "block" : "hidden"
    } lg:block`}
  >
    <ul className="lg:flex text-white gap-10">
      <NavItem href="#home">Home</NavItem>
      <NavItem href="#about">About Me</NavItem>
      <NavItem href="#Education">Education</NavItem>
      <NavItem href="#Experience">Experiences</NavItem>
      <NavItem href="#projects">Projects</NavItem>
      <NavItem href="#contact">Contact</NavItem>
    </ul>
  </div>
);

const NavItem = ({ href, children }) => (
  <li className="py-2 lg:py-0 hover:text-violet-500 transition duration-300">
    <a href={href}>{children}</a>
  </li>
);

const ConnectButton = () => (
  <div className="mt-3 hidden lg:block lg:mt-0 transition-transform transform hover:scale-110 duration-500 hover:rotate-3d hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 py-3 px-5 rounded-full font-medium cursor-pointer text-md text-white">
    <a href="#contact">Connect with me</a>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="bg-slate-900 py-3 flex flex-col lg:flex-row lg:items-center justify-between lg:justify-evenly text-center">
      <div className="flex items-center justify-between px-4 lg:px-0">
        <div>
          <h1 className="text-2xl font-bold text-white">
            <a href="https://www.linkedin.com/in/saiganeshratnala/" target="_blank" rel="noopener noreferrer">
              SaiGanesh Ratnala
            </a>
          </h1>
        </div>
        <HamburgerButton isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>
      <NavbarLinks isOpen={isOpen} />
      <ConnectButton />
    </div>
  );
};

export default Navbar;
