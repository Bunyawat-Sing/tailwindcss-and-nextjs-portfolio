import React from "react";
import Image from "next/image";
import Programming from "@/public/Programming.svg";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "Tailwind CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "Node.js" },
  { skill: "Express" },
  { skill: "Next.js" },
  { skill: "MongoDB" },
  { skill: "PostgresSQL" },
  { skill: "Git" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-24">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Bunyawat and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> developer who loves
              coding and solving complex problems.
            </p>
            <br />
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Education
            </h1>
            <div>
              <p>
                <span className="font-bold">{"University: "}</span>
                <span>King Mongkut's University of Technology Thonburi</span>
              </p>
              <p>
                <span className="font-bold">{"Degree: "}</span>
                <span>Bachelor of Engineering</span>
              </p>
              <p>
                <span className="font-bold">{"Major: "}</span>
                <span>Control System and Instrumentation Engineering</span>
              </p>
            </div>

            <br />
            <p>
              <span className="font-bold">{"Bootcamp: "}</span>
              <span className="font-bold text-teal-500">
                Techup full-stack developer bootcamp
              </span>
            </p>
            <br />
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Work Experience
            </h1>
            <div>
              <p>
                <span className="font-bold">{"Internship: "}</span>
                <span>Metropolitan Electricity Authority</span>
              </p>
              <p>
                <span className="font-bold">{"Position: "}</span>
                <span>C&I engineer</span>
              </p>
              <p>
                <span className="font-bold">{"Purpose: "}</span>
                <span>
                  Designing and programming IoT controls for monitoring the
                  temperature of pipeline systems in the factory.
                </span>
              </p>
            </div>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <Image
              src={Programming}
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0 md:pt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
