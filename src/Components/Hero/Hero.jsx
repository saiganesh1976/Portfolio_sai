import React from "react";
import profile_img from "../../assets/profile_img.jpg";
import linkedin_icon from "../../assets/linkedIn.svg";
import github_icon from "../../assets/github.svg";
import instagram_icon from "../../assets/instagram.svg";

const Hero = () => {
  return (
    <div className="flex flex-col items-center text-center p-6 md:py-28 md:px-48 m gap-6 lg:flex-row lg:gap-14">
      <div className="w-full lg:w-1/3">
        <img
          src={profile_img}
          alt="Profile"
          className="w-48 md:w-80 mx-auto rounded-full"
        />
      </div>
      <div className="flex flex-col items-center lg:items-start lg:text-left gap-4 lg:w-2/3">
        <p className=" text-xl">Hello There,</p>
        <h1 className="text-4xl md:text-5xl font-semibold">
          I'm <span className="text-violet-400">Sai Ganesh Ratnala</span>
        </h1>
        <p className="text-xl md:text-xl">Undergraduate at SNIST, Hyderabad</p>
        <div className="flex gap-3">
          <a href="https://www.linkedin.com/in/ratnala-saiganesh/" target="_blank">
            <img src={linkedin_icon} alt="" className="w-8 my-5" />
          </a>
          <a href="https://github.com/saiganesh1976" target="_blank">
            <img src={github_icon} alt="" className="w-8 my-5" />
          </a>
          <a href="https://www.instagram.com/saiganesh_ratnala/" target="_blank">
            <img src={instagram_icon} alt="" className="w-8 my-5" />
          </a>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mt-3 items-center">
          <div className="mt-3 lg:mt-0 transition ease-in-out delay-150 border-2 hover:-translate-z-1 hover:scale-105 duration-700 bg-gradient-to-r from-violet-500 to-fuchsia-500 py-3 px-5 rounded-full font-medium cursor-pointer text-md text-white">
            <a href="#contact">Connect with me</a>
          </div>
          <a href="/SaiGanesh_Resume.pdf" target="_blank" rel="noopener noreferrer">
{/*            <a href={`${process.env.PUBLIC_URL}/assets/SaiGanesh_Resume.pdf`} download> */}
{/*           <a href="/SaiGanesh_Resume.pdf" download> */}
            <div className="transition ease-in-out delay-150 hover:scale-105 duration-700 border-2 border-violet-300 hover:border-violet-600 py-3 px-5 w-40 text-center rounded-full font-medium cursor-pointer text-md text-violet-500">
              {" "}
              My Resume
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
