import React from "react";

const timeline = [
  {
    title: "Joint Secretary - The Robotics Club",
    time: "Jul 2023 - Jul 2024",
    desc: "Led the Web Development team and managed the club’s official handles with a focus on outreach and automation.",
  },
  {
    title: "Marketing Deputy - The Robotics Club",
    time: "Sep 2023 - Nov 2023",
    desc: "Headed a marketing team and played a key role in securing multiple sponsorships for Roboveda’23.",
  },
  {
    title: "Designing Team Member - The Robotics Club",
    time: "Oct 2022 - Nov 2023",
    desc: "Created festival creatives, magazine designs, and digital assets including posters and GIFs.",
  },
  {
    title: "Student Mentor - The Robotics Club",
    time: "Feb 2023 - Jul 2023",
    desc: "Guided a 9-member team in developing a Pet Health Monitoring System using IoT sensors and microcontrollers.",
  },
];

const Experience = () => {
  return (
    <section className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300">
      <div className="container max-w-5xl px-4 py-16 mx-auto">
        <div className="grid gap-4 sm:grid-cols-12">
          
          {/* Section Heading */}
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-1 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-violet-600 transition-all duration-500">
              <h3 className="text-3xl font-semibold text-violet-600 dark:text-violet-500">
                Leadership & Responsibilities
              </h3>
              <span className="text-sm font-bold tracking-wider uppercase text-gray-500 dark:text-gray-400">
                Club & Community Contributions
              </span>
            </div>
          </div>

          {/* Timeline Content */}
          <div className="relative col-span-12 sm:col-span-9 px-4 space-y-12 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:left-3 sm:before:w-0.5 sm:before:bg-violet-600 sm:before:rounded-full before:transition-all before:duration-700">
            {timeline.map((item, index) => (
              <div key={index} className="flex flex-col sm:pl-8 sm:relative group">
                <span className="sm:absolute sm:left-[-2px] sm:top-1 sm:w-4 sm:h-4 rounded-full bg-violet-600 border-4 border-white dark:border-gray-900 shadow-lg transition-transform duration-300 group-hover:scale-110 z-[1]"></span>
                <h3 className="text-xl font-semibold text-violet-700 dark:text-violet-400">
                  {item.title}
                </h3>
                <time className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  {item.time}
                </time>
                <p className="mt-3 text-gray-700 dark:text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
