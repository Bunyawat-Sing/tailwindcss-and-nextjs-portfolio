import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import petsitter from "@/public/petsitter.png";
import blog from "@/public/blog.png";
import SlideUp from "./SlideUp"; // Ensure this is correctly imported

const projects = [
  {
    name: "Pet Sitter App",
    description:
      "ThankfulThoughts is a web app that generates an appreciative sentence of something or someone you are thankful for.",
    image: petsitter,
    github: "https://github.com/werapolJa/pet-sitter",
    link: "https://pet-sitter-two.vercel.app/",
    skills: [
      "Tailwind CSS",
      "TypeScript",
      "Next.js",
      "PostgresSQL",
      "Supabase Auth",
    ],
  },
  {
    name: "Personal Blog",
    description: "Personal Blog is a platform to share thoughts and ideas.",
    image: blog,
    github: "https://github.com/Bunyawat-Sing/personal-blog-project",
    link: "https://personal-blog-project-three.vercel.app/",
    skills: [
      "Tailwind CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>

      <div className="flex flex-col space-y-28 md:pb-24">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              {/* Temporarily remove SlideUp to debug */}
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col md:flex-row md:space-x-12">
                  <div>
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70 w-[500px] h-[250px]"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <div className="flex flex-wrap flex-row justify-center md:justify-start pb-3">
                      {project.skills.map((skill, idx) => (
                        <p
                          key={idx}
                          className="bg-gray-200 px-2 py-1 mr-2 mt-2 text-gray-500 rounded font-semibold"
                        >
                          {skill}
                        </p>
                      ))}
                    </div>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
