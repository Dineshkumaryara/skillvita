"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Boxes } from "../ui/background-boxes";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { InfiniteMovingLogos } from "../ui/InfiniteMovingLogos";

const phrases = [
  "DevOps with AWS",
  "DevOps with Azure",
  "Data Science",
  "Data Analytics",
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(true);
  const [showBoxes, setShowBoxes] = useState(false);

  // Defer Boxes rendering on mobile to improve initial load performance
  useEffect(() => {
    const checkIsMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // Only show boxes on desktop, defer on mobile
      if (!mobile) {
        setShowBoxes(true);
      } else {
        // Defer boxes on mobile after initial render
        setTimeout(() => setShowBoxes(true), 1000);
      }
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile, { passive: true });
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const scrollToCourses = () => {
    const coursesSection = document.getElementById("learning-journey");
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="relative w-full overflow-hidden bg-white dark:bg-black flex flex-col items-center justify-center px-4 md:px-8 min-h-screen md:-mt-2 -mt-4">
        {/* Announcement bar */}
        <div className="absolute top-0 left-0 w-full bg-gray-100/[0.9] dark:bg-[#18181B] text-black dark:text-white text-xs md:text-sm font-normal py-2 md:py-3 text-center z-30">
          <a
            href="https://forms.gle/NVshHp4bFqFfsyQGA"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full"
          >
            🎉 Skillvita registrations opened.{" "}
            <span className="underline">Click Here</span> to register
          </a>
        </div>

        {/* Radial fade mask */}
        <div
          className="absolute inset-0 w-full h-full bg-white dark:bg-black z-20 pointer-events-none"
          style={{
            WebkitMaskImage:
              "radial-gradient(ellipse at center, transparent 20%, white 80%)",
            maskImage:
              "radial-gradient(ellipse at center, transparent 20%, white 80%)",
          }}
        />
        {/* Conditionally render Boxes, hidden on mobile initially */}
        {showBoxes && <Boxes />}

        <div 
          className="relative z-20 flex flex-col items-center justify-center gap-6 md:gap-8 lg:gap-10 text-center"
          style={{ willChange: 'transform' }}
        >
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-black dark:text-white">
            It&apos;s never too late to upskill.
          </h1>

          {/* Rotating phrases + subtitle */}
          <div className="flex flex-col items-center text-2xl md:text-3xl lg:text-4xl">
            <div className="flex flex-col md:flex-row items-center">
              <div className="relative h-[44px] overflow-hidden min-w-[220px] md:min-w-[280px]">
                <div
                  className="flex flex-col transition-transform duration-700 ease-in-out items-center md:items-end"
                  style={{ transform: `translateY(-${index * 44}px)` }}
                >
                  {phrases.map((text, i) => (
                    <div
                      key={i}
                      className="h-[44px] flex items-center justify-center md:justify-end pb-1 w-full font-medium bg-gradient-to-r from-[#7234F7] to-[#FF4B00] bg-clip-text text-transparent"
                    >
                      {text}
                    </div>
                  ))}
                </div>
              </div>
              <span className="mt-2 md:mt-0 md:ml-4 text-xl md:text-2xl lg:text-3xl text-black dark:text-white">
                mentored by top industry experts
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToCourses}
            className="flex items-center gap-2 bg-brand-500 hover:opacity-90 transition-all duration-300 px-6 py-3 rounded-lg text-white text-base md:text-lg font-normal shadow-lg"
          >
            Start Learning
            {!isMobile ? (
              <motion.div
                className="flex flex-col leading-none"
                animate={{ y: [0, -4, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.2,
                  ease: "easeInOut",
                }}
              >
                <ChevronDown className="m-0 p-0" size={18} />
                <ChevronDown className="m-0 p-0 -mt-[12px]" size={18} />
              </motion.div>
            ) : (
              <div className="flex flex-col leading-none">
                <ChevronDown className="m-0 p-0" size={18} />
                <ChevronDown className="m-0 p-0 -mt-[12px]" size={18} />
              </div>
            )}
          </button>
        </div>

        {/* Featured In & Placed In Sections */}
        <div className="relative z-20 w-full mt-16 md:mt-20">
          <div className="max-w-7xl mx-auto flex flex-col items-center gap-12 md:gap-16">
            {/* Featured In Section */}
            <div className="w-full flex flex-col items-center gap-6 md:gap-8">
              <p className="text-center text-gray-600 dark:text-gray-400 text-sm md:text-base">
  Featured In
</p>

              <div className="grid grid-cols-3 md:grid-cols-6 gap-x-6 gap-y-8 md:gap-x-8 md:gap-y-10 items-center justify-items-center w-full max-w-5xl">
                <a
                  href="https://www.hindustanmetro.com/..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-5 md:h-7 w-auto group"
                >
                  <Image
                    src="/images/landing/Hindustan.png"
                    alt="Hindustan Metro"
                    height={28}
                    width={100}
                    loading="lazy"
                    className="object-contain h-full w-auto grayscale opacity-80 transition-all duration-200 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                </a>

                <a
                  href="https://m.dailyhunt.in/..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-5 md:h-7 w-auto group"
                >
                  <Image
                    src="/images/landing/dailyhunt.svg"
                    alt="Dailyhunt"
                    height={28}
                    width={100}
                    loading="lazy"
                    className="object-contain h-full w-auto block dark:hidden grayscale opacity-80 transition-all duration-200 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                  <Image
                    src="/images/landing/dailyhunt_white.png"
                    alt="Dailyhunt"
                    height={28}
                    width={100}
                    loading="lazy"
                    className="object-contain h-full w-auto hidden dark:block grayscale opacity-80 transition-all duration-200 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                </a>

                <a
                  href="https://republicnewsindia.com/..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-5 md:h-7 w-auto group"
                >
                  <Image
                    src="/images/landing/republic.png"
                    alt="Republic News"
                    height={28}
                    width={100}
                    loading="lazy"
                    className="object-contain h-full w-auto block dark:hidden grayscale opacity-80 transition-all duration-200 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                  <Image
                    src="/images/landing/Republic_white.png"
                    alt="Republic News"
                    height={28}
                    width={100}
                    loading="lazy"
                    className="object-contain h-full w-auto hidden dark:block grayscale opacity-80 transition-all duration-200 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                </a>

                <a
                  href="https://flipboard.com/..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-5 md:h-7 w-auto group"
                >
                  <Image
                    src="/images/landing/flipboard.svg"
                    alt="Flipboard"
                    height={28}
                    width={100}
                    loading="lazy"
                    className="object-contain h-full w-auto block dark:hidden grayscale opacity-80 transition-all duration-200 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                  <Image
                    src="/images/landing/flipboard_white.png"
                    alt="Flipboard"
                    height={28}
                    width={100}
                    loading="lazy"
                    className="object-contain h-full w-auto hidden dark:block grayscale opacity-80 transition-all duration-200 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                </a>

                <a
                  href="https://medium.com/..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-5 md:h-7 w-auto group"
                >
                  <Image
                    src="/images/landing/Medium.svg"
                    alt="Medium"
                    height={28}
                    width={100}
                    loading="lazy"
                    className="object-contain h-full w-auto block dark:hidden grayscale opacity-80 transition-all duration-200 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                  <Image
                    src="/images/landing/Medium_white.svg"
                    alt="Medium"
                    height={28}
                    width={100}
                    loading="lazy"
                    className="object-contain h-full w-auto hidden dark:block grayscale opacity-80 transition-all duration-200 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                </a>

                <a
                  href="https://republicnewsindia.quora.com/..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-5 md:h-7 w-auto group"
                >
                  <Image
                    src="/images/landing/Quora.svg"
                    alt="Quora"
                    height={28}
                    width={100}
                    loading="lazy"
                    className="object-contain h-full w-auto grayscale opacity-80 transition-all duration-200 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                </a>
              </div>
            </div>

            {/* Get placed in leading MNCs Section */}
            <div className="w-full flex flex-col items-center gap-6 md:gap-8">
              <p className="text-center text-gray-600 dark:text-gray-400 text-sm md:text-base">
  Get placed in leading MNCs
</p>
              <InfiniteMovingLogos />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
