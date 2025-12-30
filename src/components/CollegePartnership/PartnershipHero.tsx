"use client";
import React, { useEffect, useState } from "react";
import { Boxes } from "../ui/background-boxes";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function PartnershipHero() {
  const [isMobile, setIsMobile] = useState(true);
  const [showBoxes, setShowBoxes] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setShowBoxes(true);
      } else {
        setTimeout(() => setShowBoxes(true), 1000);
      }
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile, { passive: true });
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("partnership-overview");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="relative w-full overflow-hidden bg-white dark:bg-black flex flex-col items-center justify-center px-4 md:px-8 min-h-screen md:-mt-2 -mt-4">
        {/* Announcement bar */}
        <div className="absolute top-0 left-0 w-full bg-gray-100/[0.9] dark:bg-[#18181B] text-black dark:text-white text-xs md:text-sm font-normal py-2 md:py-3 text-center z-30">
          <a
            href="#contact"
            className="block w-full h-full"
          >
            🎓 Bring Industry-Ready Capability to Your Campus.{" "}
            <span className="underline">Partner With Us</span>
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
        {showBoxes && <Boxes />}

        <div 
          className="relative z-20 flex flex-col items-center justify-center gap-6 md:gap-8 lg:gap-10 text-center"
          style={{ willChange: 'transform' }}
        >
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-black dark:text-white max-w-5xl">
            Bringing{" "}
            <span className="bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">
              Industry-Ready Capability
            </span>
            {" "}to the Campus
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl">
            Integrate simulations, project-based learning, CRT training, and proof-driven hiring pathways—designed to strengthen placement performance and institutional reputation
          </p>

          {/* CTA Button */}
          <button
            onClick={scrollToFeatures}
            className="flex items-center gap-2 bg-brand-500 hover:bg-brand-600 transition-all duration-300 px-6 py-3 rounded-lg text-accent-500 text-base md:text-lg font-normal shadow-lg"
          >
            Partner With SkillVita
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
      </div>
    </>
  );
}
