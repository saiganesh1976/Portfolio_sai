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
              I am SaiGanesh student of Electronics and Computer Engineering at
              Sreenidhi Institute of Science and Technology, expected to
              graduate in 2025. I have a keen interest in Robotics, Web
              Development, I have acquired multiple skills in these domains. I
              am always eager to learn new things, challenge myself, and
              collaborate with others who share my passion and enthusiasm.
            </p>
          </div>
          <div>
            <div className=" grid lg:grid-cols-5 grid-cols-3">
              <img src={html_icon} alt="" className=" w-40" />
              <img src={css_icon} alt="" className=" mt-2 w-40" />
              <img src={js_icon} alt="" className=" w-40" />
              <img src={bootstrap_icon} alt="" className=" w-40" />
              <img src={react_icon} alt="" className=" w-40" />
              <img src={tailwind_icon} alt="" className=" w-40" />
              <img src={ps_icon} alt="" className=" w-40" />
              <img src={figma_icon} alt="" className=" w-40" />
              <img src={vs_icon} alt="" className=" w-40" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
