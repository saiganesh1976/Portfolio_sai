import React from "react";

const Experience = () => {
  return (
    <div
      id="Experience"
      className="flex flex-col items-center justify-center gap-8 m-4 sm:m-8 md:m-16 lg:m-24"
    >
      <h1 className="text-5xl text-center font-semibold">Experience</h1>

      <ol className="flex flex-row overflow-x-auto space-x-10 p-4">
        {[
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
        ].map((item, index) => (
          <li key={index} className="relative min-w-[280px] max-w-xs">
            <div className="flex items-center justify-center mb-2">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center ring-4 ring-white dark:bg-blue-900 dark:ring-gray-900">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
            </div>
            <div className="text-left px-2">
              <h3 className="text-lg font-semibold text-violet-500">
                {item.role}
              </h3>
              <p className="text-sm text-gray-400 dark:text-gray-500">{item.org}</p>
              <time className="text-sm text-gray-400 dark:text-gray-500 block my-1">
                {item.time}
              </time>
              <p className="text-base text-gray-500 dark:text-gray-400">{item.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Experience;
