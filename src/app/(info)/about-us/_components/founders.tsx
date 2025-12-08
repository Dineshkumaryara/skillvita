"use client";

import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

// ✅ Dynamically import LinkedInIcon with SSR disabled
const LinkedInIcon = dynamic(() => import("@mui/icons-material/LinkedIn"), {
  ssr: false,
});

const founders = [
  {
    name: "Hemanth Guthala",
    title: "Ex Data Scientist, Deloitte. ISB Alumni",
    description:
      "A former Data Scientist from Deloitte and an alumnus of ISB, Hemanth brings his expertise to Coursevita. With a strong background in data science and business strategy, he is dedicated to developing innovative learning solutions that bridge the gap between academia and industry.",
    image: "/images/about-us/Hemanth.jpg",
    linkedin: "https://www.linkedin.com/in/hemanth-guthala-92430956/",
  },
  {
    name: "Arjun Vinay Kandukuri",
    title: "Entrepreneur, Oxford Alumni",
    description:
      "An Oxford alumnus with exceptional leadership skills, Arjun is committed to guiding Coursevita towards excellence. His experience in strategic planning and educational leadership ensures that Coursevita stays at the forefront of educational innovation.",
    image: "/images/about-us/arjun_edited.jpg",
    linkedin: "https://www.linkedin.com/in/arjun-vinay-1350a2307/",
  },
];

const Founders = () => {
  return (
    <section className="py-24 bg-white dark:bg-black">
      {/* Section Heading */}
      <div className="text-center pb-16">
        <h2 className="text-2xl font-semibold">
          Meet <span className="text-[#FE7465]">our Founders</span>
        </h2>
      </div>

      {/* Founders List */}
      <div className="flex flex-col items-center space-y-6">
        {founders.map((founder, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center justify-center max-w-4xl mx-auto px-6 py-8"
          >
            {/* Image + LinkedIn Button */}
            <div className="flex flex-col items-center md:w-1/3 mb-6 md:mb-0">
              <Image
                src={founder.image}
                alt={founder.name}
                width={144}
                height={144}
                className="object-cover rounded-lg mb-4"
              />
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center text-[#0072b1] text-xs hover:underline"
              >
                <LinkedInIcon className="text-[#0072b1] w-5 h-5" />
                <span className="ml-1">View LinkedIn Profile</span>
              </a>
            </div>

            {/* Text Section */}
            <div className="md:w-2/3 text-center md:text-left">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                {founder.name}
                <span className="text-sm font-normal text-gray-600 dark:text-gray-400">
                  {" "}
                  ({founder.title})
                </span>
              </h3>
              <p className="mt-4 text-gray-600 text-sm md:text-base dark:text-gray-300 text-justify">
                {founder.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Founders;
