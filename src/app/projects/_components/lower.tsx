"use client";

import Image from "next/image";
import { useState } from "react";

const logos = [
  {
    id: 1,
    src: "/images/ProjectsPage/ok.svg",
    hover: "/images/ProjectsPage/ok_white.svg",
    text: "Collaborative Community",
    image: "/images/ProjectsPage/meet1.png",
  },
  {
    id: 2,
    src: "/images/ProjectsPage/bulb.svg",
    hover: "/images/ProjectsPage/bulb_white.svg",
    text: "Expert Guidance",
    image: "/images/ProjectsPage/meet2.png",
  },
  {
    id: 3,
    src: "/images/ProjectsPage/menu.svg",
    hover: "/images/ProjectsPage/menu_white.svg",
    text: "Real-World Applications",
    image: "/images/ProjectsPage/meet3.png",
  },
  {
    id: 4,
    src: "/images/ProjectsPage/shield.svg",
    hover: "/images/ProjectsPage/shield_white.svg",
    text: "Recognition and Exposure",
    image: "/images/ProjectsPage/meet4.png",
  },
];

export default function ProjectsLowerSection() {
  const [activeId, setActiveId] = useState(1);
  const activeLogo = logos.find((logo) => logo.id === activeId);

  return (
    <div className="pt-16 pb-12 relative">
      {/* Centered Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-[24px] md:text-[32px] font-semibold font-outfit text-black dark:text-white">
          Why Choose{" "}
          <span className="text-[#FE7465]">CourseVita for Your Projects</span>
        </h2>
        <p className="text-sm md:text-lg text-gray-700 dark:text-gray-300 font-outfit mt-2">
          Find interesting projects and get started with an execution plan
        </p>
      </div>

      {/* Content Block */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch justify-center gap-10 px-2 md:px-6">
        {/* Left Menu */}
        <div className="flex flex-col w-full md:w-[45%] h-[300px] justify-between z-10 gap-3">
          {logos.map((logo) => (
            <div
              key={logo.id}
              onClick={() => setActiveId(logo.id)}
              className={`flex items-center gap-4 px-5 py-4 h-full rounded-xl cursor-pointer transition-all duration-200 ${
                activeId === logo.id
                  ? "bg-[#7234F7]"
                  : "bg-white dark:bg-[#1E1E1E]"
              }`}
            >
              <Image
                src={activeId === logo.id ? logo.hover : logo.src}
                alt={logo.text}
                width={30}
                height={30}
              />
              <span
                className={`font-outfit text-base font-medium ${
                  activeId === logo.id
                    ? "text-white"
                    : "text-black dark:text-gray-200"
                }`}
              >
                {logo.text}
              </span>
            </div>
          ))}
        </div>

        {/* Right Image */}
        <div className="w-full md:w-[55%] h-[300px] z-10">
          {activeLogo && (
            <Image
              src={activeLogo.image}
              alt={activeLogo.text}
              width={900}
              height={600}
              className="rounded-2xl w-full h-full object-cover"
            />
          )}
        </div>
      </div>
    </div>
  );
}
