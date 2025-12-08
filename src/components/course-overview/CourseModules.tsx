/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface Module {
  moduleHeading: string;
  description: string[];
}

interface CourseModulesProps {
  modules: Module[];
}

const CourseModules: React.FC<CourseModulesProps> = ({ modules }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const toggleModule = (index: number) => {
    setExpandedModule(expandedModule === index ? null : index);
  };

  const cardProgresses = modules.map((_, index) =>
    useTransform(
      scrollYProgress,
      [
        Math.max(0, (index - 0.2) / modules.length),
        Math.min(1, (index + 0.8) / modules.length),
      ],
      [0.3, 1]
    )
  );

  const yProgresses = modules.map((_, index) =>
    useTransform(
      scrollYProgress,
      [
        Math.max(0, (index - 0.2) / modules.length),
        Math.min(1, (index + 0.8) / modules.length),
      ],
      [50, 0]
    )
  );

  const dotProgresses = modules.map((_, index) =>
    useTransform(
      scrollYProgress,
      [index / modules.length, (index + 0.5) / modules.length],
      [0, 1]
    )
  );

  return (
    <div className="text-white py-20 bg-[#0F002E] relative" ref={containerRef}>
      {/* Background Grid & Vignette */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(rgba(255, 255, 255, 0.08) 1.7px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1.7px, transparent 1px)",
            backgroundSize: "50px 50px",
            opacity: 0.8,
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(70% 80% at 50% 50%, transparent 0%, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0.89) 100%)",
          }}
        />
      </div>

      <div className="container max-w-5xl mx-auto px-4 relative">
        <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-[400] mb-16 sm:mb-32 text-center">
          <span className="text-white">A Quick snapshot of </span>
          <span className="text-[#FF7262]">your journey</span>
        </h2>

        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-[20px] sm:left-1/2 transform sm:-translate-x-1/2 w-[2px] h-full">
            <div className="absolute w-full h-full bg-gray-800" />
            <motion.div
              className="absolute w-full bg-gradient-to-b from-[#7234f7] via-[#BD89FF] to-[#FF7262] origin-top"
              style={{
                scaleY: scrollYProgress,
                height: "100%",
              }}
              initial={{ scaleY: 0 }}
            />

            {/* Static & Animated Dots */}
            {modules.map((_, index) => (
              <React.Fragment key={index}>
                <div
                  className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-gray-800 rounded-full -left-[5px] sm:-left-[7px]"
                  style={{
                    top: `${(100 / (modules.length - 1)) * index}%`,
                  }}
                />
                <motion.div
                  className="absolute w-3 h-3 sm:w-4 sm:h-4 rounded-full -left-[5px] sm:-left-[7px]"
                  style={{
                    top: `${(100 / (modules.length - 1)) * index}%`,
                    opacity: dotProgresses[index],
                    background:
                      "radial-gradient(108.33% 108.33% at 50% 100%, rgba(114, 52, 247, 0.50) 0%, rgba(184, 84, 174, 0.50) 61.47%, rgba(254, 116, 101, 0.50) 100%)",
                    boxShadow:
                      "0 0 0 4px rgba(189, 137, 255, 0.3), 0 0 10px rgba(114, 52, 247, 0.5)",
                  }}
                />
              </React.Fragment>
            ))}
          </div>

          {/* Module Cards */}
          <div className="relative flex flex-col gap-16 sm:gap-32">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                className={`flex gap-8 sm:gap-40 ${
                  index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                } flex-row`}
                style={{
                  opacity: cardProgresses[index],
                  y: yProgresses[index],
                }}
                initial={{ opacity: 0.3, y: 50 }}
              >
                <div className="w-[15%] sm:w-[45%] hidden sm:block" />
                <div className="w-[85%] sm:w-[45%] ml-12 sm:ml-0 p-4 sm:p-5 bg-[#200E42] border border-[#BD89FF] rounded-lg text-left">
                  <motion.div className="text-[#fff] text-base sm:text-lg mb-1 font-[400]">
                    Module-{index + 1}
                  </motion.div>
                  <div
                    className="cursor-pointer"
                    onClick={() => toggleModule(index)}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-lg sm:text-xl">{module.moduleHeading}</h3>
                      <ChevronDownIcon
                        className={`w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform duration-200 ${
                          expandedModule === index ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>
                  {expandedModule === index && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-400 text-xs sm:text-sm list-disc list-inside space-y-2 mt-2"
                      style={{ opacity: cardProgresses[index] }}
                    >
                      {module.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </motion.ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseModules;
