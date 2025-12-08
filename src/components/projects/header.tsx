/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import Button from "../ui/button/Button";
export default function Header({
  targetFeaturedProjects,
}: {
  targetFeaturedProjects: any;
}) {
  const params = useParams();
  const project_type = params?.project_type;

  const mainRouteData = {
    title: "Are you a final-year student ready to build next-level projects?",
    description:
      "Yes! You are in the right place! Tackle real-world challenges, boost your portfolio, and gain hands-on experience with emerging tech.",
  };

  return (
    <div className="pt-2">
      <div className="bg-[#F3F5FC] dark:bg-[#18181B] rounded-2xl md:p-12 m-5 md:m-9">
        {/* Title and Description */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start gap-4">
          <div className="md:w-3/5 text-center md:text-left">
            <h1 className="text-[24px] md:text-[36px] font-semibold font-poppins text-black dark:text-white">
              {mainRouteData.title}
            </h1>
            <div className="mt-5 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start text-sm gap-2">
              {[
                "Real-Time Project Experience",
                "Expert Guidance",
                "Collaborative Environment",
              ].map((item, idx) => (
                <p
                  key={idx}
                  className="flex items-center gap-2 text-black dark:text-gray-200"
                >
                  <Image
                    src="/images/projects/smallcheckcircle.svg"
                    alt="tick"
                    width={16}
                    height={16}
                  />
                  {item}
                </p>
              ))}
            </div>
            <div className="mt-5 flex items-center justify-start">
              <Image
                src="/images/projects/small_image.svg"
                alt="stats"
                width={80}
                height={80}
              />
              <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300 ml-3">
                More than 2,000 people successfully completed their projects.
              </p>
            </div>
          </div>

          {/* Description + Button */}
          <div className="md:w-2/5 flex flex-col items-center md:items-start">
            <p className="text-sm md:text-lg font-outfit text-center md:text-left text-black dark:text-gray-200">
              {mainRouteData.description}
            </p>
            <Button
              className="btn-top-project mt-4 bg-[#7234F7] text-white text-base px-6 py-3 rounded-md hover:brightness-110"
              onClick={() => {
                const targetSection = document.getElementById("mid");
                targetSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Start your project
            </Button>
          </div>
        </div>

        {/* Image and Cards Section */}
        <div className="mt-10 flex flex-col md:grid md:grid-cols-3 gap-6">
          {/* Left Image */}
          <div className="relative w-full h-[355px] rounded-xl overflow-hidden">
            <Image
              src="/images/projects/left_image.svg"
              alt="left"
              fill
              className="object-cover"
            />
          </div>

          {/* Center Cards */}
          <div className="flex flex-col gap-6 w-full h-[355px]">
            <div className="bg-[#dee1fd] dark:bg-[#2f2f44] rounded-xl p-4 h-1/2 flex flex-col justify-between">
              <Image
                src="/images/ProjectsPage/logov1.svg"
                alt="logo1"
                width={36}
                height={36}
              />
              <p className="text-xl font-bold text-[#414141] dark:text-white">
                75%
              </p>
              <p className="text-sm text-black dark:text-gray-300 w-[200px]">
                Projects published in Portfolios.
              </p>
            </div>
            <div className="bg-[rgba(218,96,82,0.16)] dark:bg-[#402d2d] rounded-xl p-4 h-1/2 flex flex-col justify-between">
              <Image
                src="/images/projects/logov2.svg"
                alt="logo2"
                width={36}
                height={36}
              />
              <p className="text-xl font-bold text-[#414141] dark:text-white">
                80%
              </p>
              <p className="text-sm text-black dark:text-gray-300 w-[200px]">
                Learners report increased Confidence.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full h-[355px] rounded-xl overflow-hidden">
            <Image
              src="/images/projects/right_image.svg"
              alt="right"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
