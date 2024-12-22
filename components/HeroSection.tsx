"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaLine } from "react-icons/fa";
import { AiOutlineMedium } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import ProfileB from "@/public/ProfileB.jpg";

const HeroSection = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDocumentClick = (event: MouseEvent) => {
    const dropdown = document.getElementById("contact-dropdown");
    if (dropdown && !dropdown.contains(event.target as Node)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (dropdownOpen) {
      document.addEventListener("click", handleDocumentClick);
    } else {
      document.removeEventListener("click", handleDocumentClick);
    }

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [dropdownOpen]);

  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src={ProfileB}
            alt=""
            width={300}
            height={300}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            Hi, I&#39;m Bunyawat!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m seeking opportunities as a{" "}
            <span className="font-semibold text-teal-600">
              Full-Stack, Frontend, or Backend Developer{" "}
            </span>
            to build impactful and efficient software solutions.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
              >
                Contact
              </button>
              {dropdownOpen && (
                <div
                  id="contact-dropdown"
                  className="absolute mt-2 w-24 bg-white rounded-md shadow-lg z-10"
                >
                  <a
                    href="https://line.me/ti/p/c0Wla-nm6e"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-teal-500 hover:rounded-md hover:text-white"
                  >
                    <FaLine className="mr-2" />
                    Line
                  </a>
                  <a
                    href="mailto:pupahero@gmail.com"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-teal-500 hover:rounded-md hover:text-white"
                  >
                    <MdEmail className="mr-2" />
                    Email
                  </a>
                </div>
              )}
            </div>
            <a
              href="https://www.canva.com/design/DAGXwEUsZyY/rupqNquSLnt4GsrdiJ47tg/view?utm_content=DAGXwEUsZyY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h7b3b93ef2c"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            >
              Resume
            </a>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Bunyawat-Sing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-teal-600"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/bunyawat-singkiporn-747826252"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-teal-600"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://medium.com/@bunyawat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-teal-600"
              >
                <AiOutlineMedium size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
