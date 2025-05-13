import React from "react";
import { FaGithub } from "react-icons/fa";
import arrow_icon from "../../assets/arrow_icon.svg";
import menstore from "../../assets/menstore.png";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project4 from "../../assets/project4.png";
import project5 from "../../assets/project5.png";
import Eseva from "../../assets/e-seva.png";
import eration from "../../assets/eration.png";

const ProjectCard = ({ project }) => (
  <div className="flex flex-col w-full sm:w-[320px] rounded-lg border-4 hover:bg-violet-900 overflow-hidden hover:shadow-xl hover:shadow-violet-300 transition-all">
    <div className="overflow-hidden">
      <img
        src={project.img}
        alt={project.title}
        className="w-full h-48 object-cover transition-transform duration-500 transform hover:scale-110"
      />
    </div>
    <div className="flex flex-col justify-between px-6 py-4 flex-grow">
      <h2 className="font-semibold text-xl text-center mb-4">{project.title}</h2>
      <div className="flex justify-center flex-wrap gap-4">
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer">
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium border-2 rounded-md transition hover:bg-violet-600">
              Live Link <img src={arrow_icon} alt="arrow" className="w-4" />
            </button>
          </a>
        )}
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium border-2 rounded-md transition hover:bg-violet-600">
              <FaGithub /> GitHub Link
            </button>
          </a>
        )}
      </div>
    </div>
  </div>
);

const projects = [
  {
    img: eration,
    title: "SRVAN Portal",
    live: "https://major-frontend-wpbt.onrender.com/",
    github: "https://github.com/saiganesh1976/Major",
  },
  {
    img: Eseva,
    title: "E-seva Portal",
    live: "https://e-seva-1.onrender.com/",
    github: "https://github.com/saiganesh1976/e-Seva-Portal",
  },
  {
    img: menstore,
    title: "MenStore",
    live: "https://menstore-frontend.onrender.com/",
    github: "https://github.com/saiganesh1976/menstore",
  },
  {
    img: project2,
    title: "Mittinrich",
    live: "https://drive.google.com/drive/folders/1lrWnHU-pSsXKReQCiWZf_RpP7tx0yqWn?usp=sharing",
  },
  {
    img: project1,
    title: "Pet Health Monitoring System",
    github: "https://github.com/saiganesh1976/Pets-health-monitoring-system",
  },
  {
    img: project4,
    title: "Basic Banking System",
    github: "https://github.com/saiganesh1976/Ratnala-s-Bank",
  },
  {
    img: project5,
    title: "Hotstar UI Clone",
    live: "https://hotstar-clone-peach.vercel.app/",
  },
];

const Projects = () => (
  <div id="projects" className="px-6 sm:px-12 md:px-24 py-12 flex flex-col items-center">
    <h1 className="text-4xl sm:text-5xl font-semibold text-center mb-12">Projects</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  </div>
);

export default Projects;
