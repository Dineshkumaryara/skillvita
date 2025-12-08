"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const VisionCommitment = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check for mobile screen size on the client side
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return (
      <div className="bg-[#f8f4fd] dark:dark:bg-[#18181B] flex flex-col overflow-hidden">
        {/* === Vision Section === */}
        <div className="flex flex-col relative">
          <div className="w-full h-[60px] bg-[#7b2ff7] dark:bg-[#7b2ff7]/[0.2] flex items-center justify-center">
            <h2 className="text-white text-center text-xl font-semibold">
              Our <span className="text-[#FE7465]">Vision</span>
            </h2>
          </div>

          <div className="w-full flex flex-col items-center px-6 py-4 text-center">
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              To be the trusted lifelong learning partner for individuals across
              the globe, helping them achieve their career aspirations and
              succeed in their professional endeavors.
            </p>

            <Image
              src={"/images/about-us/visionImage.jpg"}
              alt="Vision"
              className="mt-4 max-w-full h-auto rounded-lg overflow-hidden"
              width={250}
              height={250}
            />
          </div>
        </div>

        {/* === Commitment Section === */}
        <div className="flex flex-col w-full relative mt-4">
          <div className="w-full h-[60px] bg-[#FE7465] dark:bg-[#FE7465]/[0.2] flex items-center justify-center">
            <h2 className="text-white text-center text-xl font-semibold">
              Our <span className="text-[#FE7465]">Commitment</span>
            </h2>
          </div>

          <div className="w-full flex flex-col items-center px-6 py-4 text-center">
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              At Coursevita, our mission is to help our learners achieve their
              desired outcomes through high-quality, interactive online courses
              designed by industry experts. We strive to create an immersive
              learning experience that combines the latest technology with
              world-class pedagogy.
            </p>

            <Image
              src={"/images/about-us/commitmentImage.jpg"}
              alt="Commitment"
              className="mt-4 max-w-full h-auto rounded-lg"
              width={250}
              height={250}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f8f4fd] dark:dark:bg-[#18181B] flex flex-col overflow-hidden">
      {/* === Vision Section === */}
      <div className="flex relative">
        <div className="w-1/3 bg-[#7b2ff7] dark:bg-[#7b2ff7]/[0.2] h-[400px]"></div>
        <div className="w-2/3 flex items-center px-16">
          <div className="w-full max-w-xl ml-32">
            <h2 className="text-black dark:text-white text-4xl font-bold">
              Our <span className="text-[#FE7465]">Vision</span>
            </h2>
            <p className="mt-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              To be the trusted lifelong learning partner for individuals across
              the globe, helping them achieve their career aspirations and
              succeed in their professional endeavors.
            </p>
          </div>
        </div>
        <div className="absolute left-[calc(33%-100px)] top-1/2 transform -translate-y-1/2">
          <Image
            src="/images/about-us/visionImage.jpg"
            alt="Vision"
            width={254}
            height={280}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* === Commitment Section === */}
      <div className="flex flex-col lg:flex-row-reverse relative">
  {/* Background section on the left for large screens only */}
  <div className="hidden lg:block w-1/3 bg-[#FE7465] dark:bg-[#FE7465]/[0.5] h-[400px]"></div>

  {/* Text section */}
  <div className="w-full lg:w-2/3 flex items-center justify-center px-6 py-10 lg:px-16">
    <div className="w-full max-w-xl text-center lg:text-left">
      <h2 className="text-black dark:text-white text-3xl sm:text-4xl font-bold">
        Our{" "}
        <span className="text-white lg:text-[#FE7465]">Commitment</span>
      </h2>
      <p className="mt-6 text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
        At Coursevita, our mission is to help our learners achieve their
        desired outcomes through high-quality, interactive online courses
        designed by industry experts. We strive to create an immersive
        learning experience that combines the latest technology with
        world-class pedagogy.
      </p>
    </div>
  </div>

  {/* Image positioning */}
  <div className="relative lg:absolute lg:right-[calc(33%-100px)] lg:top-1/2 lg:transform lg:-translate-y-1/2 flex justify-center lg:block mt-4 lg:mt-0">
    <Image
      src="/images/about-us/commitmentImage.jpg"
      alt="Commitment"
      width={254}
      height={280}
      className="rounded-lg shadow-lg"
    />
  </div>
</div>

    </div>
  );
};

export default VisionCommitment;
