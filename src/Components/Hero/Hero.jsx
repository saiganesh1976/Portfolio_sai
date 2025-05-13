import React, { useEffect, useState } from 'react';
import profile_img from "../../assets/profile_img.jpg";
import linkedin_icon from "../../assets/linkedIn.svg";
import github_icon from "../../assets/github.svg";
import instagram_icon from "../../assets/instagram.svg";
import { FiDownload } from "react-icons/fi";

const skills = [
  "Full-Stack MERN Developer",
  "Java Developer",
  "IoT Enthusiast",
  "Web & UI/UX Designer",
  "Robotics & Embedded Systems",
  "Data Science & Analytics",
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
          setCurrentSkill((prevSkill) => (prevSkill + 1) % skills.length);
          return "";
        }
      });
    }, 100); 

    return () => clearInterval(typingEffect); 
  }, [currentSkill]);

  return (
    <div className="flex flex-col items-center text-center p-6 md:py-28 md:px-48 gap-6 lg:flex-row lg:gap-14">
      <div className="w-full lg:w-1/3">
        <img
          src={profile_img}
          alt="Profile"
          className="w-48 md:w-80 mx-auto rounded-full transform transition-all duration-700 ease-in-out hover:scale-110"
        />
      </div>
      <div className="flex flex-col items-center lg:items-start lg:text-left gap-4 lg:w-2/3">
        <p className="text-xl text-gray-700">Hi There,</p>
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-800">
          I'm <span className="text-violet-400">Sai Ganesh Ratnala</span>
        </h1>
        <h1 className="text-4xl font-bold text-center transition-all duration-500 ease-in-out">
          <span className="text-violet-400">{displayedText}</span>
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          I'm a passionate developer with a focus on Full-Stack development, IoT, and Robotics. I specialize in creating intuitive web applications, integrating cutting-edge technologies, and solving real-world problems through innovative solutions.
        </p>

        <div className="flex gap-3 mt-6">
          <a href="https://www.linkedin.com/in/saiganeshratnala/" target="_blank">
            <img src={linkedin_icon} alt="LinkedIn" className="w-8 h-8 hover:scale-110 transition-transform" />
          </a>
          <a href="https://github.com/saiganesh1976" target="_blank">
            <img src={github_icon} alt="GitHub" className="w-8 h-8 hover:scale-110 transition-transform" />
          </a>
          <a href="https://www.instagram.com/saiganesh_ratnala/" target="_blank">
            <img src={instagram_icon} alt="Instagram" className="w-8 h-8 hover:scale-110 transition-transform" />
          </a>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mt-6 items-center">
          <div className="transition-transform ease-in-out duration-300 hover:scale-105 bg-gradient-to-r from-indigo-600 to-blue-500 py-3 px-6 rounded-full text-md text-white font-semibold cursor-pointer hover:shadow-lg">
            <a href="#contact">Let's Connect</a>
          </div>
          <a href="/SaiGanesh_Resume.pdf" download>
            <div className="transition-all duration-300 ease-in-out hover:scale-105 border-2 border-indigo-400 hover:border-indigo-600 py-3 px-6 rounded-full font-medium text-indigo-500 cursor-pointer flex items-center justify-center gap-2">
              <span>Download Resume</span> <FiDownload className="text-indigo-500" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
