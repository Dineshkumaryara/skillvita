import React from "react";
import Image from "next/image";
import ToolsImages from "./tools";
import BookIcon from "../svg_icons/book";

interface ToolsAndSkillsProps {
  tools: string[];
  skills: string[];
}

const ToolsAndSkills: React.FC<ToolsAndSkillsProps> = ({ tools, skills }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="space-y-8">
        <div className="p-6 sm:p-8 lg:p-12 rounded-2xl relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-cover bg-center bg-[url('/images/courses/tools_bg.svg')] dark:bg-none dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A]"/>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-[400] mb-8 sm:mb-12 text-center">
              <span className="text-[#FF7262]">Tools</span>
              <span className="text-white"> you will master</span>
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-[rgba(85,72,113,0.47)] dark:bg-black backdrop-blur-[25px] p-4 sm:p-5 flex flex-col items-center justify-center gap-3 hover:bg-[rgba(85,72,113,0.6)] transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  {ToolsImages[tool as keyof typeof ToolsImages] && (
                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                      <Image
                        src={ToolsImages[tool as keyof typeof ToolsImages]}
                        alt={tool}
                        width={40}
                        height={40}
                        className="object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <span className="text-white text-sm sm:text-base text-center font-medium">
                    {tool}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills section with improved responsive design */}
        <div className=" pb-6 md:pb-10">
          <div className="bg-white dark:bg-[#18181B] rounded-2xl relative text-center border border-[#E4E4E7] dark:border-[#27272A]">
            {/* Title Section */}
            <h2 className="py-12 md:py-[50px] px-4 md:px-5 text-[24px] sm:text-[30px] lg:text-[36px] font-[400] leading-normal">
              <span className="text-[#FF7262]">Skills</span> You&apos;ll Learn
            </h2>

            {/* Skills Grid */}
            <div className="px-4 sm:px-6 md:px-[100px] grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-4">
              {skills?.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center bg-[#7234f70a] dark:bg-black rounded-lg py-2.5 md:py-3.5 px-2 md:px-6"
                >
                  <Image
                    src="/images/courses/cvPattern.svg"
                    alt="skill pattern"
                    width={24}
                    height={24}
                    className="mr-4"
                  />
                  <span className="text-left text-base font-medium font-outfit">
                    {skill}
                  </span>
                </div>
              ))}
            </div>

            {/* Decorative Images */}
            <div className="flex justify-center pt-[100px] md:pt-4 pb-6">
              <BookIcon />
            </div>

            {/* Decorative Elements */}
            <Image
              src="/images/courses/triangle.svg"
              alt="triangle"
              width={50}
              height={50}
              className="absolute top-3.5 md:top-7 right-4 md:right-4.5"
            />

            <Image
              src="/images/courses/group.svg"
              alt="group"
              width={60}
              height={60}
              className="absolute bottom-24 md:bottom-8 left-4 md:left-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsAndSkills;
