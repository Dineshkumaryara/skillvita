"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const getCurrentMonthYear = () => {
  const now = new Date();
  return now.toLocaleString("default", { month: "long", year: "numeric" });
};

const data = [
  {
    date: "January - March 2023",
    title: "Starting Strong",
    description:
      "In early 2023, Coursevita started offering courses in data science, machine learning, and software development, marking the beginning of our growth journey.",
    color: "bg-[#F4F7F5] dark:bg-[#F4F7F5]/[0.1]",
    icon: "/images/about-us/icon1.svg",
  },
  {
    date: "March - April 2023",
    title: "Building Momentum",
    description:
      "By mid-2023, we partnered with a tech company to offer recognized certifications, attracting more learners and reaching 10,000 active users.",
    color: "bg-[#FFFDEF] dark:bg-[#FFFDEF]/[0.1]",
    icon: "/images/about-us/icon2.svg",
  },
  {
    date: "July - September 2023",
    title: "Expanding Reach",
    description:
      "We added new courses in cybersecurity and AI. We also built a community of educators and learners.",
    color: "bg-[#EDFBFD] dark:bg-[#EDFBFD]/[0.1]",
    icon: "/images/about-us/icon3.svg",
  },
  {
    date: "October - December 2023",
    title: "Achieving Milestones",
    description:
      "We integrated with global platforms and launched our mobile app, increasing accessibility.",
    color: "bg-[#F8FFF4] dark:bg-[#F8FFF4]/[0.1]",
    icon: "/images/about-us/icon4.svg",
  },
  {
    date: "January - March 2024",
    title: "Growing Knowledge",
    description:
      "Our early 2024 saw further collaborations with institutions and addition of internship pipelines.",
    color: "bg-[#F4F4F4] dark:bg-[#F4F4F4]/[0.1]",
    icon: "/images/about-us/icon5.svg",
  },
  {
    date: "April - June 2024",
    title: "Reaching New Heights",
    description:
      "By mid-2024, Coursevita hosted its first online summit and reached 50,000 learners.",
    color: "bg-[#F9FFF6] dark:bg-[#F9FFF6]/[0.1]",
    icon: "/images/about-us/icon6.svg",
  },
  {
    date: "July - December 2024",
    title: "Advancing Ahead",
    description:
      "The second half of 2024 focused on international expansion and AI-powered learning tools.",
    color: "bg-[#F9F7FF] dark:bg-[#F9F7FF]/[0.1]",
    icon: "/images/about-us/icon7.svg",
  },
  {
    date: `${getCurrentMonthYear()}`,
    title: "Onboarded 6000+ Learners",
    description:
      "The first half of 2025 focused on enhancing user experience and expanding course offerings.",
    color: "bg-[#F9F7FF] dark:bg-[#F9F7FF]/[0.1]",
    icon: "/images/about-us/icon5.svg",
  },
];

const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [reachedArr, setReachedArr] = useState<boolean[]>(
    data.map(() => false)
  );

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((v) => {
      const container = containerRef.current;
      if (!container) return;

      const containerRect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const progressPx = v * containerHeight;

      const newReached = data.map((_, index) => {
        const circle = circleRefs.current[index];
        if (!circle) return false;
        const circleRect = circle.getBoundingClientRect();
        const relativeTop = circleRect.top - containerRect.top;
        return progressPx >= relativeTop;
      });

      setReachedArr(newReached);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className="bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto py-10 px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-12">
          How <span className="text-[#FE7465]">We Started</span>
        </h2>

        <div ref={containerRef} className="relative">
          {/* Static vertical line */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-gray-200 z-10"
            style={{
              left: isMobile ? "24px" : "50%",
              transform: isMobile ? "none" : "translateX(-50%)",
            }}
          />

          {/* Animated scroll progress line */}
          <motion.div
            style={{
              position: "absolute",
              top: 0,
              left: isMobile ? "24px" : "50%",
              width: "2px",
              background: "#644DFF",
              transform: isMobile ? "none" : "translateX(-50%)",
              zIndex: 20,
              height: progressHeight,
            }}
          />

          {data.map((item, index) => {
            const isLeft = index % 2 === 0;
            const reached = reachedArr[index];

            return (
              <div
                key={index}
                className={`flex ${isMobile ? "mb-8" : "mb-12"}`}
              >
                {isMobile ? (
                  <div className="grid grid-cols-12 items-center gap-4">
                    <div className="col-span-2 flex justify-center">
                      <div
                        ref={(el) => {
                          circleRefs.current[index] = el;
                        }}
                        className={`w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md z-30 transition-colors duration-300 ${
                          reached
                            ? "border-2 border-[#644DFF]"
                            : "border-2 border-gray-300"
                        }`}
                      >
                        <Image
                          src={item.icon}
                          alt={item.title}
                          width={16}
                          height={16}
                          className="object-contain sm:w-[20px] sm:h-[20px]"
                        />
                      </div>
                    </div>
                    <div className="col-span-10">
                      <span
                        className={`${item.color} px-3 py-1 rounded-lg text-sm font-semibold inline-block`}
                      >
                        {item.date}
                      </span>
                      <h3 className="text-lg font-semibold mt-2 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-11 w-full items-center">
                    <div
                      className={`col-span-5 ${
                        isLeft ? "text-right pr-8" : "text-left pl-8"
                      }`}
                    >
                      {isLeft ? (
                        <span
                          className={`${item.color} px-3 py-1 rounded-lg text-sm font-semibold inline-block`}
                        >
                          {item.date}
                        </span>
                      ) : (
                        <div>
                          <h3 className="text-lg font-semibold mb-1">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">
                            {item.description}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="col-span-1 flex justify-center">
                      <div
                        ref={(el) => {
                          circleRefs.current[index] = el;
                        }}
                        className={`w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md z-30 transition-colors duration-300 ${
                          reached
                            ? "border-2 border-[#644DFF]"
                            : "border-2 border-gray-300"
                        }`}
                      >
                        <Image
                          src={item.icon}
                          alt={item.title}
                          width={20}
                          height={20}
                          className="object-contain md:w-[24px] md:h-[24px]"
                        />
                      </div>
                    </div>

                    <div
                      className={`col-span-5 ${
                        isLeft ? "text-left pl-8" : "text-right pr-8"
                      }`}
                    >
                      {isLeft ? (
                        <div>
                          <h3 className="text-lg font-semibold mb-1">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">
                            {item.description}
                          </p>
                        </div>
                      ) : (
                        <span
                          className={`${item.color} px-3 py-1 rounded-lg text-sm font-semibold inline-block`}
                        >
                          {item.date}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
