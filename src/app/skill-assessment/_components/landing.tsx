"use client";

import React from "react";
import Image from "next/image";

interface Props {
  setIsLanding: (value: boolean) => void;
}

export default function Landing({ setIsLanding }: Props) {
  return (
    <div className="w-screen min-h-[calc(100vh-64px)] bg-white dark:bg-black relative overflow-hidden md:-mt-8 -mt-4 flex flex-col justify-center items-center">
      {/* Main Content Centered Vertically */}
      <div className="w-full sm:w-[75vw] max-w-3xl rounded-3xl p-8 flex flex-col items-center text-center">
        <h1 className="text-black dark:text-white text-2xl sm:text-4xl font-bold">
          Step into choosing right path with
        </h1>
        <h2 className="text-2xl sm:text-4xl font-medium bg-gradient-to-r from-[#7234F7] to-[#FF4B00] text-transparent bg-clip-text mt-2">
          Coursevita
        </h2>

        <p className="text-black dark:text-white text-base sm:text-xl mt-6">
          Take our quiz and find the perfect fit for you!
        </p>

        <button
          onClick={() => setIsLanding(false)}
          className="mt-6 bg-brand-500 px-8 py-2 rounded-md text-white font-medium text-lg"
        >
          Start
        </button>

        <div className="flex items-center gap-2 mt-4">
          <p className="text-black dark:text-white text-sm">Takes 1 Min</p>
          <Image
            src="/images/skillAssessment/clock.svg"
            alt="Clock"
            width={16}
            height={16}
            className="invert dark:invert-0"
          />
        </div>
      </div>

      {/* Footer Always at Bottom Center */}
      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 mb-4 text-black dark:text-white text-xs">
        Powered by <span className="font-light">Coursevita</span>
      </p>
    </div>
  );
}
