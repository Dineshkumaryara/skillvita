"use client";

import Image from "next/image";
export default function Preend() {
return (
  <div className="relative py-12">
    {/* Foreground content */}
    <div className="relative z-10 flex flex-wrap justify-center items-center gap-4 md:gap-8">
      {/* Innovate */}
      <h2 className="font-extrabold text-[20px] md:text-[48px] text-[#AEAEAE] dark:text-gray-300">
        Innovate
      </h2>

      <div className="mt-2">
        <Image
          src="/images/ProjectsPage/5th.png"
          alt="Innovate Image"
          width={200}
          height={59}
          className="rounded-full object-cover aspect-[4/1]"
        />
      </div>

      {/* Create (transparent stroke style) */}
      <h2 className="font-extrabold text-[20px] md:text-[48px] text-transparent stroke-text dark:stroke-text-dark">
        Create
      </h2>

      <div className="mt-2">
        <Image
          src="/images/ProjectsPage/6th.jpg"
          alt="Create Image"
          width={200}
          height={59}
          className="rounded-full object-cover aspect-[4/1]"
        />
      </div>

      {/* Shine */}
      <h2 className="font-extrabold text-[20px] md:text-[48px] text-[#AEAEAE] dark:text-gray-300">
        Shine
      </h2>
    </div>
  </div>
);

}
