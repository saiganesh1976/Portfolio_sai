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
import nodeJs_icon from "../../assets/nodejs.svg"
import postman_icon from "../../assets/postman.svg"
import MongoDB_icon from "../../assets/MongoDB.svg"
import mySql_icon from "../../assets/mySql.svg"
import git_icon from "../../assets/git.svg"
import arduino_icon from "../../assets/aurdino.svg"

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center gap-8 m-8 sm:m-8 md:m-16"
    >
      <h1 className="text-5xl text-center font-semibold">About Me</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start m-8 md:m-5 gap-10">
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={profile_img} alt="Profile" className="w-3/4 rounded-lg" />
        </div>
        <div className="flex flex-col gap-10 w-full md:w-1/2">
          <div className=" text-justify">
            <p>
              I’m Sai Ganesh Ratnala, a Final Year B.Tech student in Electronics and Computer Engineering at Sreenidhi Institute of Science and Technology (SNIST),
              Hyderabad, graduating in 2025.
              <br>
              With a strong interest in Robotics and Web Development, I have built hands-on experience through diverse projects and leadership roles. 
              I enjoy exploring new technologies, solving real-world problems, and collaborating with like-minded individuals to create impactful solutions.

            </p>
          </div>
          <div>
            <div className=" grid lg:grid-cols-5 grid-cols-3">
              <img src={html_icon} alt="" className=" w-40" />
              <img src={css_icon} alt="" className=" mt-2 w-40" />
              <img src={js_icon} alt="" className=" w-40" />
              <img src={react_icon} alt="" className=" w-40" />
              <img src={nodeJs_icon} alt="" className=" w-30" />
              <img src={MongoDB_icon} alt="" className=" w-40" />
              <img src={postman_icon} alt="" className=" w-40" />
              <img src={tailwind_icon} alt="" className=" w-40" />
              <img src={bootstrap_icon} alt="" className=" w-40" />
              <img src={vs_icon} alt="" className=" w-40" />
              <img src={mySql_icon} alt="" className=" w-40" />
              <img src={git_icon} alt="" className=" w-40" />
              <img src={ps_icon} alt="" className=" w-40" />
              <img src={figma_icon} alt="" className=" w-40" />
              <img src={arduino_icon} alt="" className=" w-40" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
