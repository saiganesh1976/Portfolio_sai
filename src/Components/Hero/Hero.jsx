import React, { useEffect, useState } from 'react';
import profile_img from "../../assets/profile_img.jpg";
import linkedin_icon from "../../assets/linkedIn.svg";
import github_icon from "../../assets/github.svg";
import instagram_icon from "../../assets/instagram.svg";
// import resume from '../../assets/SaiGanesh_Resume.pdf';
import { FiDownload } from "react-icons/fi";

const skills = [
  "MERN Stack Developer",
  "Java Programmer",
  "Robotics Enthusiast",
  "Tailwind CSS",
];

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    const typingEffect = setInterval(() => {
      setDisplayedText((prevText) => {
        const nextChar = skills[currentSkill].charAt(prevText.length);
        if (nextChar) {
          return prevText + nextChar;
        } else {
          // Once a skill is fully typed, switch to the next one
          setCurrentSkill((prevSkill) => (prevSkill + 1) % skills.length);
          return "";
        }
      });
    }, 100); // Typing speed (100ms per character)

    return () => clearInterval(typingEffect); // Clean up interval on unmount
  }, [currentSkill]);

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
        <p className="text-xl">Hi There,</p>
        <h1 className="text-4xl md:text-5xl font-semibold">
          I'm <span className="text-violet-400">Sai Ganesh Ratnala</span>
        </h1>
        <p className="text-xl md:text-xl">a Final Year Electronics & Computer Engineering Student at SNIST, Hyderabad.</p>
        <h1 className="text-3xl font-bold text-center transition-all duration-500 ease-in-out">
          I specialize in{" "}
          <span className="text-violet-400">{displayedText}</span>
        </h1>
        <div className="flex gap-3">
          <a href="https://www.linkedin.com/in/saiganeshratnala/" target="_blank">
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
          <a href="/SaiGanesh_Resume.pdf" download>
            <div className="flex items-center justify-center gap-2 transition ease-in-out delay-150 hover:scale-105 duration-700 border-2 border-violet-300 hover:border-violet-600 py-3 px-5 w-50 text-center rounded-full font-medium cursor-pointer text-md text-violet-500">
              My Resume <FiDownload className="text-violet-500" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
