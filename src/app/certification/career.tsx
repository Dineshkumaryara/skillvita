/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

export default function Career() {
  const handleButtonClick = () => {
    window.open("https://www.coursevita.com/skillAssessment", "_blank");
  };

  return (
    <section className="mx-auto px-4 sm:px-8 md:px-16 lg:px-32 py-6">
      <div className="max-w-(--breakpoint-xl) mx-auto px-4 pt-8 bg-white dark:bg-[#212121] rounded-2xl">
        <div className="flex flex-col md:flex-row items-center">
          <div className="order-1 md:order-2 w-full md:w-1/2 flex flex-col justify-center items-center text-center md:text-left md:-ml-10 mb-6 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Confused about career
            </h2>
            <p className="text-md md:text-lg font-normal text-gray-600 dark:text-gray-300 mb-6">
              Step into choosing the right path with Coursevita
            </p>
            <button className="px-6 py-3 bg-[#7234F7] text-white font-semibold rounded-lg" onClick={handleButtonClick}>
              Take Quiz
            </button>
          </div>
          <div className="order-2 md:order-1 w-full md:w-1/2 flex justify-center">
            <img src="/images/OBJECTS.svg" alt="Confused about career" className="max-w-xs h-auto rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
