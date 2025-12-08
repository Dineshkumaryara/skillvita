"use client";
import React from "react";
import Image from "next/image";
import TimeIcon from "../svg_icons/time";

interface PriceCardProps {
  courseTitle: string;
  period: string;
  costPrice: string;
  sellingPrice: string;
}

const PriceCard: React.FC<PriceCardProps> = ({
  courseTitle,
  period,
  costPrice,
  sellingPrice,
}) => {
  return (
    <div className="bg-[#100031] rounded-2xl pt-10 px-6 md:pt-20 md:px-20 flex flex-col md:flex-row items-center md:items-start justify-between relative gap-8 md:gap-0">
      {/* Grid pattern with oval vignette effect */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(rgba(255, 255, 255, 0.08) 1.7px, transparent 1px), 
              linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1.7px, transparent 1px),
              /* Cross pattern - Center */
              linear-gradient(rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08)) 360px 300px / 58.3px 58.3px no-repeat,
              linear-gradient(rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08)) 600px 180px / 58.3px 58.3px no-repeat,
              linear-gradient(rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08)) 540px 240px / 58.3px 58.3px no-repeat,
              linear-gradient(rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08)) 420px 360px / 58.3px 58.3px no-repeat,
              /* Single boxes - Scattered around */
              linear-gradient(rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08)) 720px 60px / 58.3px 58.3px no-repeat,
              linear-gradient(rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08)) 660px 420px / 58.3px 58.3px no-repeat,
              linear-gradient(rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08)) 120px 360px / 58.3px 58.3px no-repeat,
              linear-gradient(rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08)) 120px 60px / 58.3px 58.3px no-repeat
            `,
            backgroundSize: "60px 60px",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(70% 80% at 50% 50%, transparent 0%, rgba(0, 0, 0, 0.2) 60%, rgba(0, 0, 0, 0.3) 100%)",
          }}
        />
      </div>
      {/* Left Content */}
      <div className="text-white space-y-6 md:space-y-8 max-w-xl md:mt-20 z-10">
        <h1 className="text-3xl md:text-[40px] font-[600] text-center md:text-left">
          Start your journey <span className="text-[#FF7262]">today!</span>
        </h1>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div>
              <Image
                src="/images/courses/live-streaming.svg"
                alt="Award"
                width={24}
                height={24}
                className="w-5 h-5 md:w-6 md:h-6"
              />
            </div>
            <span className="text-sm md:text-base">100% Live sessions</span>
          </div>

          <div className="flex items-center gap-3">
            <div>
              <Image
                src="/images/courses/game.svg"
                alt="Award"
                width={24}
                height={24}
                className="w-5 h-5 md:w-6 md:h-6"
              />
            </div>
            <span className="text-sm md:text-base">
              Gamified & Interactive learning
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div>
              <Image
                src="/images/courses/chat.svg"
                alt="Award"
                width={24}
                height={24}
                className="w-5 h-5 md:w-6 md:h-6"
              />
            </div>
            <span className="text-sm md:text-base">
              Community to up to date with trends
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div>
              <Image
                src="/images/courses/clipboard.svg"
                alt="Award"
                width={24}
                height={24}
                className="w-5 h-5 md:w-6 md:h-6"
              />
            </div>
            <span className="text-sm md:text-base">
              Industry Simulation Projects & Case Studies
            </span>
          </div>
        </div>
      </div>

      {/* Right Card */}
      <div className="bg-white dark:bg-[#18181B] rounded-t-xl w-full md:w-auto max-w-md p-4 md:p-6 z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3 md:mb-4 gap-2 md:gap-20">
          <h3 className="text-brand-500 text-xl md:text-xl font-semibold w-full md:w-auto">
            {courseTitle}
          </h3>
          <div className="flex items-center gap-1.5 md:gap-2 bg-[#772BD8]/[0.06] dark:bg-black rounded-lg px-2 md:px-3 py-1.5 md:py-2 w-fit">
            <TimeIcon className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-brand-500 dark:text-brand-300 text-xs md:text-base whitespace-nowrap">
              {period}
            </span>
          </div>
        </div>

        <div className="space-y-2 md:space-y-3 mb-4 md:mb-6 text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-1.5 md:gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 30 30"
              className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15 26.25C21.2132 26.25 26.25 21.2132 26.25 15C26.25 8.78681 21.2132 3.75 15 3.75C8.78681 3.75 3.75 8.78681 3.75 15C3.75 21.2132 8.78681 26.25 15 26.25ZM15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z"
                fill="#4EDB42"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.6693 10.1616C21.9253 10.3931 21.9451 10.7884 21.7135 11.0443L13.3661 20.2703L8.31845 15.4521C8.06876 15.2137 8.05958 14.8181 8.29789 14.5684C8.53626 14.3187 8.93189 14.3096 9.18158 14.5479L13.3006 18.4797L20.7866 10.2057C21.0181 9.94975 21.4134 9.92993 21.6693 10.1616Z"
                fill="#4EDB42"
              />
            </svg>
            <span className="text-sm md:text-base">
              5+ guided projects under a mentorship.
            </span>
          </div>
          <div className="flex items-center gap-1.5 md:gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 30 30"
              className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15 26.25C21.2132 26.25 26.25 21.2132 26.25 15C26.25 8.78681 21.2132 3.75 15 3.75C8.78681 3.75 3.75 8.78681 3.75 15C3.75 21.2132 8.78681 26.25 15 26.25ZM15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z"
                fill="#4EDB42"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.6693 10.1616C21.9253 10.3931 21.9451 10.7884 21.7135 11.0443L13.3661 20.2703L8.31845 15.4521C8.06876 15.2137 8.05958 14.8181 8.29789 14.5684C8.53626 14.3187 8.93189 14.3096 9.18158 14.5479L13.3006 18.4797L20.7866 10.2057C21.0181 9.94975 21.4134 9.92993 21.6693 10.1616Z"
                fill="#4EDB42"
              />
            </svg>
            <span className="text-sm md:text-base">
              Get a customized career roadmap.
            </span>
          </div>
          <div className="flex items-center gap-1.5 md:gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 30 30"
              className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15 26.25C21.2132 26.25 26.25 21.2132 26.25 15C26.25 8.78681 21.2132 3.75 15 3.75C8.78681 3.75 3.75 8.78681 3.75 15C3.75 21.2132 8.78681 26.25 15 26.25ZM15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z"
                fill="#4EDB42"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.6693 10.1616C21.9253 10.3931 21.9451 10.7884 21.7135 11.0443L13.3661 20.2703L8.31845 15.4521C8.06876 15.2137 8.05958 14.8181 8.29789 14.5684C8.53626 14.3187 8.93189 14.3096 9.18158 14.5479L13.3006 18.4797L20.7866 10.2057C21.0181 9.94975 21.4134 9.92993 21.6693 10.1616Z"
                fill="#4EDB42"
              />
            </svg>
            <span className="text-sm md:text-base">
              Get a free personal counseling session.
            </span>
          </div>
        </div>

        <div className="text-center space-y-3 bg-brand-500/[0.03] dark:bg-brand-800/[0.15] p-3 md:p-4 rounded-lg">
          <div className="flex items-center justify-center gap-2">
            <div className="bg-brand-500/[0.1] dark:bg-black px-3 py-1 rounded-full">
              <span className="text-xs md:text-sm font-medium text-brand-500 dark:text-brand-300">
                {Math.round(
                  ((parseInt(costPrice) - parseInt(sellingPrice)) /
                    parseInt(costPrice)) *
                    100
                )}
                % OFF
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <span className="text-sm md:text-base text-gray-400 line-through">
              ₹{costPrice}/-
            </span>
            <span className="text-2xl md:text-3xl font-bold text-brand-500">
              ₹{sellingPrice}/-
            </span>
          </div>
        </div>

        <button className="w-full bg-brand-500 text-white py-2.5 md:py-3 px-4 rounded-lg font-medium mt-4 text-sm md:text-base">
          Start Application
        </button>
        <p className="text-center text-xs md:text-sm text-gray-600 dark:text-gray-400 mt-4">
          Limited time offer • Enroll now
        </p>
      </div>
    </div>
  );
};

export default PriceCard;
