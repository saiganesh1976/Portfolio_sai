import React from "react";

const timeline = [
  {
    role: "Joint Secretary",
    org: "The Robotics Club-SNIST",
    time: "Jul 2023 - Present",
    desc: "Web Development Lead and managed official handles of Club.",
  },
  {
    role: "Marketing Deputy",
    org: "The Robotics Club-SNIST",
    time: "Sep 2023 - Nov 2023",
    desc: "Led a team to secure sponsorships for ROBOVEDA'23.",
  },
  {
    role: "Designing Team",
    org: "The Robotics Club-SNIST",
    time: "Oct 2022 - Nov 2023",
    desc: "Designed festival GIFs, posters, and the annual club magazine.",
  },
  {
    role: "Student Mentor",
    org: "The Robotics Club-SNIST",
    time: "Feb 2023 - Jul 2023",
    desc: "Led a 9-member team for the Pets Health Monitoring System project.",
  },
];

const Experience = () => {
  return (
    <section
      id="Experience"
      className="flex flex-col items-center justify-center px-4 sm:px-10 py-12"
    >
      <h2 className="text-4xl font-bold mb-10 text-center">Experience</h2>
      <div className="relative w-full overflow-x-auto">
        <ol className="flex space-x-8 sm:space-x-12 min-w-max px-2">
          {timeline.map((item, i) => (
            <li key={i} className="relative flex flex-col items-center w-72">
              {/* Connector line */}
              {i !== timeline.length - 1 && (
                <div className="absolute top-3 left-full w-8 sm:w-12 h-0.5 bg-blue-500 animate-pulse"></div>
              )}
              {/* Dot */}
              <div className="w-6 h-6 bg-blue-200 dark:bg-blue-900 border-4 border-white dark:border-gray-900 rounded-full flex items-center justify-center z-10">
                <svg
                  className="w-3 h-3 text-blue-800 dark:text-blue-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>

              {/* Content */}
              <div className="mt-6 text-center">
                <h3 className="text-lg font-semibold text-violet-600">
                  {item.role}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{item.org}</p>
                <p className="text-sm text-gray-400 mb-1">{item.time}</p>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
