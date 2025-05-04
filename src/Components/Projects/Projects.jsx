import React from "react";
import project2 from "../../assets/project2.png";
import project1 from "../../assets/project1.png";
import project5 from "../../assets/project5.png";
import project4 from "../../assets/project4.png";
import menstore from "../../assets/menstore.png";
import arrow_icon from '../../assets/arrow_icon.svg'
import Eseva from "../../assets/e-seva.png";
import eration from "../../assets/eration.png";
import { FaGithub } from "react-icons/fa";
const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center gap-8 m-8 sm:m-12 md:m-24"
    >
      <h1 className="text-5xl text-center font-semibold">Projects</h1>
      <div className="lg:flex md:grid md:grid-cols-2 flex-wrap justify-center items-stretch gap-12 py-10">
      <div className="flex flex-col max-w-sm w-full mb-10 rounded bg-transparent border-4 hover:bg-violet-900 overflow-hidden hover:shadow-lg hover:shadow-violet-300">
          <div className="overflow-hidden">
            <img
              className="w-full h-48 object-cover transition-transform ease-in-out duration-500 transform hover:scale-110"
              src={eration}
              alt="SRVAN portal"
            />
          </div>
          <div className="flex flex-col justify-between flex-grow px-6 py-4">
            <div className="font-semibold text-xl mb-2 text-center">
              <h1>Smart Ration Vitharan Aur Niyantaran</h1>
              <a
                href="https://major-frontend-wpbt.onrender.com/"
                target="_blank"
              >
                <button className="text-sm font-medium p-2 bg-transparent border-2 hover:bg-violet-600 rounded-md flex my-4 mx-auto items-center gap-2">
                  Know more <img src={arrow_icon} alt="" className="w-5" />
                </button>
              </a>
              <a
                href="https://github.com/saiganesh1976/menstore" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-black dark:text-white hover:text-violet-500 text-xl"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      <div className="flex flex-col max-w-sm w-full mb-10 rounded bg-transparent border-4 hover:bg-violet-900 overflow-hidden hover:shadow-lg hover:shadow-violet-300">
          <div className="overflow-hidden">
            <img
              className="w-full h-48 object-cover transition-transform ease-in-out duration-500 transform hover:scale-110"
              src={Eseva}
              alt="Eseva"
            />
          </div>
          <div className="flex flex-col justify-between flex-grow px-6 py-4">
            <div className="font-semibold text-xl mb-2 text-center">
              <h1>E-seva Portal</h1>
              <a
                href="https://e-seva-1.onrender.com/"
                target="_blank"
              >
                <button className="text-sm font-medium p-2 bg-transparent border-2 hover:bg-violet-600 rounded-md flex my-4 mx-auto items-center gap-2">
                  Know more <img src={arrow_icon} alt="" className="w-5" />
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col max-w-sm w-full mb-10 rounded bg-transparent border-4 hover:bg-violet-900 overflow-hidden hover:shadow-lg hover:shadow-violet-300">
          <div className="overflow-hidden">
            <img
              className="w-full h-48 object-cover transition-transform ease-in-out duration-500 transform hover:scale-110"
              src={menstore}
              alt="menstore"
            />
          </div>
          <div className="flex flex-col justify-between flex-grow px-6 py-4">
            <div className="font-semibold text-xl mb-2 text-center">
              <h1>MenStore.</h1>
              <div className="flex justify-center gap-4 my-4">
              <a
                href="https://menstore-frontend.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-sm font-medium p-2 bg-transparent border-2 hover:bg-violet-600 rounded-md flex items-center gap-2">
                  Know more <img src={arrow_icon} alt="" className="w-5" />
                </button>
              </a>
              <a
                href="https://github.com/saiganesh1976/menstore" // <-- Replace with actual GitHub repo
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-black dark:text-white hover:text-violet-500 text-xl"
              >
                <FaGithub />
              </a>
            </div>

            </div>
          </div>
        </div>
        <div className="flex flex-col max-w-sm w-full mb-10 rounded bg-transparent border-4 hover:bg-violet-900 overflow-hidden hover:shadow-lg hover:shadow-violet-300">
          <div className="overflow-hidden">
            <img
              className="w-full h-48 object-cover transition-transform ease-in-out duration-500 transform hover:scale-110"
              src={project2}
              alt="mittinrich"
            />
          </div>
          <div className="flex flex-col justify-between flex-grow px-6 py-4">
            <div className="font-semibold text-xl mb-2 text-center">
              <h1>Mittinrich</h1>
          <a
                href="https://drive.google.com/drive/folders/1lrWnHU-pSsXKReQCiWZf_RpP7tx0yqWn?usp=sharing"
                target="_blank"
              >
              <button className="text-sm font-medium p-2 bg-transparent border-2 hover:bg-violet-600 rounded-md flex my-4 mx-auto items-center gap-2">
                  Know more <img src={arrow_icon} alt="" className="w-5" />
                </button>
            </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col max-w-sm w-full mb-10 rounded bg-transparent border-4 hover:bg-violet-900 overflow-hidden hover:shadow-lg hover:shadow-violet-300">
          <div className="overflow-hidden">
            <img
              className="w-full h-48 object-cover transition-transform ease-in-out duration-500 transform hover:scale-110"
              src={project1}
              alt="pet health monitoring system"
            />
          </div>
          <div className="flex flex-col justify-between flex-grow px-6 py-4">
            <div className="font-semibold text-xl mb-2 text-center">
              <h1>Pet Health Monitoring System</h1>
              <a
                href="https://github.com/saiganesh1976/Pets-health-monitoring-system"
                target="_blank"
              >
                <button className="text-sm font-medium p-2 bg-transparent border-2 hover:bg-violet-600 rounded-md flex my-4 mx-auto items-center gap-2">
                  Know more <img src={arrow_icon} alt="" className="w-5" />
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col max-w-sm w-full mb-10 rounded bg-transparent border-4 hover:bg-violet-900 overflow-hidden hover:shadow-lg hover:shadow-violet-300">
          <div className="overflow-hidden">
            <img
              className="w-full h-48 object-cover transition-transform ease-in-out duration-500 transform hover:scale-110"
              src={project4}
              alt="basic bank system"
            />
          </div>
          <div className="flex flex-col justify-between flex-grow px-6 py-4">
            <div className="font-semibold text-xl mb-2 text-center">
              <h1>Basic Banking System</h1>
              <a
                href="https://github.com/saiganesh1976/Ratnala-s-Bank"
                target="_blank"
              >
                <button className="text-sm font-medium p-2 bg-transparent border-2 hover:bg-violet-600 rounded-md flex my-4 mx-auto items-center gap-2">
                  Know more <img src={arrow_icon} alt="" className="w-5" />
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col max-w-sm w-full mb-10 rounded bg-transparent border-4 hover:bg-violet-900 overflow-hidden hover:shadow-lg hover:shadow-violet-300">
          <div className="overflow-hidden">
            <img
              className="w-full h-48 object-cover transition-transform ease-in-out duration-500 transform hover:scale-110"
              src={project5}
              alt="hotstar clone"
            />
          </div>
          <div className="flex flex-col justify-between flex-grow px-6 py-4">
            <div className="font-semibold text-xl mb-2 text-center">
              <h1>Hotstar UI clone</h1>
              <a
                href="https://hotstar-clone-peach.vercel.app/"
                target="_blank"
              >
                <button className="text-sm font-medium p-2 bg-transparent border-2 hover:bg-violet-600 rounded-md flex my-4 mx-auto items-center gap-2">
                  Know more <img src={arrow_icon} alt="" className="w-5" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
