import React from "react";

const timeline = [
  {
    role: "Joint Secretary",
    org: "The Robotics Club - SNIST",
    time: "Jul 2023 - Jul 2024",
    desc: "Led the Web Development team and managed the club's official handles.",
  },
  {
    role: "Marketing Deputy",
    org: "The Robotics Club - SNIST",
    time: "Sep 2023 - Nov 2023",
    desc: "Led a marketing team and successfully secured sponsorships for ROBOVEDA'23.",
  },
  {
    role: "Designing Team Member",
    org: "The Robotics Club - SNIST",
    time: "Oct 2022 - Nov 2023",
    desc: "Designed festival creatives, GIFs, posters, and the annual club magazine.",
  },
  {
    role: "Student Mentor",
    org: "The Robotics Club - SNIST",
    time: "Feb 2023 - Jul 2023",
    desc: "Mentored a 9-member team in building a Pet Health Monitoring System using IoT.",
  },
];

const Experience = () => {
  return (
    <section id="Experience" className="py-16 bg-white dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">
        Leadership & Responsibilities
      </h2>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:grid grid-cols-9 text-blue-50">
          {timeline.map((item, i) => (
            <div
              key={i}
              className={`flex ${i % 2 === 0 ? "flex-row-reverse md:contents" : "md:contents"}`}
            >
              {/* Card */}
              <div
                className={`bg-blue-500 p-4 rounded-xl my-4 shadow-md ${
                  i % 2 === 0
                    ? "col-start-1 col-end-5 ml-auto"
                    : "col-start-6 col-end-10 mr-auto"
                }`}
              >
                <h3 className="font-semibold text-lg mb-1">{item.role}</h3>
                <p className="text-sm text-white font-medium mb-1">
                  {item.org}
                </p>
                <p className="text-xs text-blue-200 mb-2">{item.time}</p>
                <p className="leading-tight text-justify">{item.desc}</p>
              </div>

              {/* Line and Dot */}
              <div
                className={`col-start-5 col-end-6 md:mx-auto relative ${
                  i % 2 === 0 ? "mr-10" : "ml-10"
                }`}
              >
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
