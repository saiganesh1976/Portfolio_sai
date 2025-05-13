import React from "react";
import profile_img from "../../assets/profile_img.jpg";
import tailwind_icon from "../../assets/tailwindcss.svg";
import react_icon from "../../assets/npm.svg";
import ps_icon from "../../assets/ps.svg";
import js_icon from "../../assets/js.svg";
import figma_icon from "../../assets/figma.svg";
import css_icon from "../../assets/css.svg";
import html_icon from "../../assets/html5.svg";
import bootstrap_icon from "../../assets/bootstrap.svg";
import vs_icon from "../../assets/vs.svg";
import nodeJs_icon from "../../assets/nodejs.svg";
import postman_icon from "../../assets/postman.svg";
import MongoDB_icon from "../../assets/MongoDB.svg";
import mySql_icon from "../../assets/mySql.svg";
import git_icon from "../../assets/git.svg";
import arduino_icon from "../../assets/aurdino.svg";
import java_icon from "../../assets/Java.svg";

const About = () => {
  return (
    <div id="about" className="flex flex-col items-center justify-center gap-8 p-8 md:p-16">
      <h1 className="text-5xl text-center font-semibold text-gray-900">About Me</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start mt-10 gap-12">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={profile_img}
            alt="Profile"
            className="w-3/4 rounded-lg shadow-xl transform transition-all duration-700 ease-in-out hover:scale-110 hover:rotate-3 hover:shadow-2xl"
          />
        </div>
        <div className="flex flex-col gap-8 w-full md:w-1/2">
          <p className="text-lg text-gray-700 text-justify">
            Hello, I’m Sai Ganesh Ratnala, a passionate and dedicated Final Year B.Tech student specializing in Electronics and Computer Engineering at Sreenidhi Institute of Science and Technology (SNIST), Hyderabad. I'm set to graduate in 2025.
            <br />
            With a keen interest in Robotics and Web Development, I have gained hands-on experience through a variety of personal and collaborative projects. My enthusiasm for solving real-world problems through innovative technology drives me to constantly learn and improve.
            <br />
            I enjoy working in dynamic, fast-paced environments where I can collaborate with like-minded professionals to develop meaningful solutions. My expertise spans full-stack development, data management, and systems design.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-gray-800">Key Skills & Technologies:</h2>
            <div className="grid lg:grid-cols-5 grid-cols-3 gap-6 mt-4">
              <img
                src={java_icon}
                alt="Java"
                className="w-24 h-24 transform transition-all duration-500 ease-in-out hover:scale-110 hover:rotate-3 hover:shadow-lg"
              />
              <img
                src={html_icon}
                alt="HTML5"
                className="w-24 h-24 transform transition-all duration-500 ease-in-out hover:scale-110 hover:rotate-3 hover:shadow-lg"
              />
              <img
                src={css_icon}
                alt="CSS3"
                className="w-24 h-24 transform transition-all duration-500 ease-in-out hover:scale-110 hover:rotate-3 hover:shadow-lg"
              />
              <img
                src={js_icon}
                alt="JavaScript"
                className="w-24 h-24 transform transition-all duration-500 ease-in-out hover:scale-110 hover:rotate-3 hover:shadow-lg"
              />
              <img
                src={react_icon}
                alt="React"
                className="w-24 h-24 transform transition-all duration-500 ease-in-out hover:scale-110 hover:rotate-3 hover:shadow-lg"
              />
              <img
                src={nodeJs_icon}
                alt="Node.js"
                className="w-24 h-24 transform transition-all duration-500 ease-in-out hover:scale-110 hover:rotate-3 hover:shadow-lg"
              />
              <img
                src={MongoDB_icon}
                alt="MongoDB"
                className="w-24 h-24 transform transition-all duration-500 ease-in-out hover:scale-110 hover:rotate-3 hover:shadow-lg"
              />
              <img
                src={postman_icon}
                alt="Postman"
                className="w-24 h-24 transform transition-all duration-500 ease-in-out hover:scale-110 hover:rotate-3 hover:shadow-lg"
              />
              <img
                src={tailwind_icon}
                alt="Tailwind CSS"
                className="w-24 h-24 transform transition-all duration-500 ease-in-out hover:scale-110 hover:rotate-3 hover:shadow-lg"
              />
              <img
                src={bootstrap_icon}
                alt="Bootstrap"
                className="w-24 h-24 transform transition-all duration-500 ease-in-out hover:scale-110 hover:rotate-3 hover:shadow-lg"
              />
              <img
                src={vs_icon}
                alt="Visual Studio"
                className="w-24 h-24 transform transition-all duration-500 ease-in-out hover:scale-110 hover:rotate-3 hover:shadow-lg"
              />
              <img
                src={mySql_icon}
                alt="MySQL"
                className="w-24 h-24 transform transition-all duration-500 ease-in-out hover:scale-110 hover:rotate-3 hover:shadow-lg"
              />
              <img
                src={git_icon}
                alt="Git"
                className="w-24 h-24 transform transition-all duration-500 ease-in-out hover:scale-110 hover:rotate-3 hover:shadow-lg"
              />
              <img
                src={ps_icon}
                alt="Photoshop"
                className="w-24 h-24 transform transition-all duration-500 ease-in-out hover:scale-110 hover:rotate-3 hover:shadow-lg"
              />
              <img
                src={figma_icon}
                alt="Figma"
                className="w-24 h-24 transform transition-all duration-500 ease-in-out hover:scale-110 hover:rotate-3 hover:shadow-lg"
              />
              <img
                src={arduino_icon}
                alt="Arduino"
                className="w-24 h-24 transform transition-all duration-500 ease-in-out hover:scale-110 hover:rotate-3 hover:shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
