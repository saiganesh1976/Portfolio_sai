import React from "react";
import bps from "../../assets/bps.jpeg";
import sri_chaithanya from "../../assets/sri_chaitanya.jpeg";
import sreenidhi from "../../assets/sreenidhi.png";

const Education = () => {
  return (
    <div id="Education" className="flex flex-col items-center justify-center gap-8 m-8 sm:m-12 md:m-16">
      <h1 className="text-5xl text-center font-semibold">Education</h1>
      <div className="lg:flex md:grid md:grid-cols-2 flex-wrap justify-center items-stretch gap-12 py-10">
        <div className="flex flex-col max-w-sm w-full mb-10 rounded bg-transparent border-4 hover:bg-violet-900 overflow-hidden hover:shadow-lg hover:shadow-violet-300">
          <div className="overflow-hidden">
            <img
              className="w-full h-80 object-cover transition-transform ease-in-out duration-500 transform hover:scale-110"
              src={sreenidhi}
              alt="sreenidhi"
            />
          </div>
          <div className="flex flex-col justify-between flex-grow px-6 py-4">
            <div className="font-semibold text-xl mb-2 text-center">
              <h1>Sreenidhi Institute of Science and Technology</h1>
              <p className="text-sm m-2 font-light">BTech, Electronics and Computer Engineering</p>
              <p className="text-sm m-2 font-medium">2021-2025</p>
              <p className="text-sm">CGPA: 8.69</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col max-w-sm w-full mb-10 rounded bg-transparent border-4 hover:bg-violet-900 overflow-hidden hover:shadow-lg hover:shadow-violet-300">
          <div className="overflow-hidden">
            <img
              className="w-full h-80 object-cover transition-transform ease-in-out duration-500 transform hover:scale-110"
              src={sri_chaithanya}
              alt="Sri Chaithanya"
            />
          </div>
          <div className="flex flex-col justify-between flex-grow px-6 py-4">
            <div className="font-semibold text-xl mb-2 text-center">
              <h1>Sri Chaitanya Junior Kalasala, Hyderabad</h1>
              <p className="text-sm m-2 font-light">Intermediate, MPC</p>
              <p className="text-sm m-2 font-medium">2019-2021</p>
              <p className="text-sm">Percentage: 97%</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col max-w-sm w-full mb-10 rounded bg-transparent border-4 hover:bg-violet-900 overflow-hidden hover:shadow-lg hover:shadow-violet-300">
          <div className="overflow-hidden">
            <img
              className="w-full h-80 object-cover transition-transform ease-in-out duration-500 transform hover:scale-110"
              src={bps}
              alt="bps"
            />
          </div>
          <div className="flex flex-col justify-between flex-grow px-6 py-4">
            <div className="font-semibold text-xl mb-2 text-center">
              <h1>Bhadrachalam Public School & JR. College</h1>
              <p className="text-sm m-2 font-light">High School, CBSE</p>
              <p className="text-sm m-2 font-medium">2014-2018</p>
              <p className="text-sm">Percentage: 78%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
