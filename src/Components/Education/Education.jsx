import React from "react";
import bps from "../../assets/bps.jpg";
import sri_chaithanya from "../../assets/sri_chaitanya.jpeg";
import sreenidhi from "../../assets/sreenidhi.png";

const Education = () => {
  return (
    <div id="Education" className="flex flex-col items-center justify-center gap-8 px-6 py-12 sm:px-12 md:px-20">
      <h1 className="text-5xl font-bold text-center">Education</h1>

      <div className="lg:flex md:grid md:grid-cols-2 flex-wrap justify-center items-stretch gap-12 py-10">
        {/* Sreenidhi */}
        <div className="flex flex-col max-w-sm w-full rounded-lg bg-transparent border-4 border-violet-500 hover:bg-violet-900/90 overflow-hidden hover:shadow-xl transition duration-300">
          <img
            className="w-full h-80 object-cover transition-transform duration-500 hover:scale-110"
            src={sreenidhi}
            alt="Sreenidhi Institute"
          />
          <div className="flex flex-col justify-between flex-grow px-6 py-4 text-center">
            <h2 className="text-xl font-semibold">Sreenidhi Institute of Science and Technology</h2>
            <p className="text-sm mt-2 font-light">B.Tech in Electronics and Computer Engineering</p>
            <p className="text-sm font-medium mt-1">2021 – 2025</p>
            <p className="text-sm mt-1">CGPA: <span className="font-semibold">8.71</span></p>
          </div>
        </div>

        {/* Sri Chaitanya */}
        <div className="flex flex-col max-w-sm w-full rounded-lg bg-transparent border-4 border-violet-500 hover:bg-violet-900/90 overflow-hidden hover:shadow-xl transition duration-300">
          <img
            className="w-full h-80 object-cover transition-transform duration-500 hover:scale-110"
            src={sri_chaithanya}
            alt="Sri Chaitanya"
          />
          <div className="flex flex-col justify-between flex-grow px-6 py-4 text-center">
            <h2 className="text-xl font-semibold">Sri Chaitanya Junior Kalasala, Hyderabad</h2>
            <p className="text-sm mt-2 font-light">Intermediate – MPC Stream</p>
            <p className="text-sm font-medium mt-1">2019 – 2021</p>
            <p className="text-sm mt-1">Marks: <span className="font-semibold">970/1000</span></p>
          </div>
        </div>

        {/* BPS */}
        <div className="flex flex-col max-w-sm w-full rounded-lg bg-transparent border-4 border-violet-500 hover:bg-violet-900/90 overflow-hidden hover:shadow-xl transition duration-300">
          <img
            className="w-full h-80 object-cover transition-transform duration-500 hover:scale-110"
            src={bps}
            alt="Bhadrachalam Public School"
          />
          <div className="flex flex-col justify-between flex-grow px-6 py-4 text-center">
            <h2 className="text-xl font-semibold">Bhadrachalam Public School & Jr. College</h2>
            <p className="text-sm mt-2 font-light">High School – CBSE Curriculum</p>
            <p className="text-sm font-medium mt-1">2018 – 2019</p>
            <p className="text-sm mt-1">Marks Obtained: <span className="font-semibold">468 / 600</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
