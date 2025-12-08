"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const features = [
  {
    title: "Learn From Top Industry Experts",
    desc: "Our Expert Instructors Bring Real-World Experience To Every Course",
    icon: "/images/landing/lecture.png",
    gif: "/images/landing/gifs/lecturer.gif",
  },
  {
    title: "Personalised Doubts Clearing Window",
    desc: "Get Your Questions Answered Quickly For Better Understanding.",
    icon: "/images/landing/book.png",
    gif: "/images/landing/gifs/book.gif",
  },
  {
    title: "Prepare With Mock Interview Sessions.",
    desc: "Practice Real-World Scenarios To Boost Your Confidence.",
    icon: "/images/landing/search.png",
    gif: "/images/landing/gifs/curriculam.gif",
  },
  {
    title: "No Data Prior Knowledge Required",
    desc: "Accessible For Beginners, No Previous Experience Needed.",
    icon: "/images/landing/blocks.png",
    gif: "/images/landing/gifs/gaming.gif",
  },
  {
    title: "Get Industry Recognised Certification",
    desc: "Earn Credentials That Are Valued By Employers Worldwide.",
    icon: "/images/landing/certificate.png",
    gif: "/images/landing/gifs/certificate.gif",
  },
  {
    title: "Benefit From Expert Job Assistance",
    desc: "Receive Guidance From Industry Professionals To Secure Your Ideal Job.",
    icon: "/images/landing/suitcase.png",
    gif: "/images/landing/gifs/portfolio.gif",
  },
];

const WhyCoursevita = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const router = useRouter();

  return (
    <div className="bg-white dark:bg-black">
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="max-w-7xl mx-auto text-center md:py-6 md:pb-6">
          <h2 className="text-center text-black dark:text-white mb-6 relative inline-block">
            <span className="text-xl md:text-3xl font-normal block">
              Why Coursevita?
            </span>
            <span className="text-xl md:text-3xl font-medium block mt-1 relative">
              Because{" "}
              <span className="text-xl md:text-3xl font-medium relative inline-block">
                Your Success Matters
                <div className="relative w-full h-6 md:-mt-2 -mt-3 ml-0.5">
                  <Image
                    src="/images/landing/line.png"
                    alt="underline"
                    fill
                    loading="lazy"
                    className="object-contain dark:hidden"
                  />
                  <Image
                    src="/images/landing/line-white.png"
                    alt="underline dark"
                    fill
                    loading="lazy"
                    className="object-contain hidden dark:block"
                  />
                  <div className="absolute md:-right-17 md:-top-16 w-10 h-10 -right-8.5 -top-6.5 md:w-20 md:h-20 rotate-[7deg]">
                    <Image
                      src="/images/landing/pencil.png"
                      alt="pencil"
                      fill
                      loading="lazy"
                      className="object-contain dark:hidden"
                    />
                    <Image
                      src="/images/landing/pencil-white.png"
                      alt="pencil dark"
                      fill
                      loading="lazy"
                      className="object-contain hidden dark:block"
                    />
                  </div>
                </div>
              </span>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {features.slice(0, 3).map((item, i) => (
              <div
                key={i}
                className="relative border border-[#E4E4E7] dark:border-[#27272A] dark:bg-[#18181B] rounded-2xl p-6 pt-4 flex flex-col gap-3 overflow-hidden transition-all duration-300"
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative w-[60px] h-[60px]">
                  <Image
                    src={hoveredCard === i ? item.gif : item.icon}
                    alt="icon"
                    fill
                    loading="lazy"
                    className="object-contain"
                  />
                </div>
                {/* was: h4 → p (keep same styling) */}
                <p className="font-semibold text-black dark:text-white text-base">
                  {item.title}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm -mt-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-[#0F002E] dark:bg-[#0F002E]/[0.8] text-white rounded-3xl flex flex-col justify-start text-center overflow-hidden relative">
            {/* Top content */}
            <div className="px-6 pt-8 pb-4 z-10">
              <h3 className="text-lg md:text-[22px] font-bold text-[#BD89FF] mb-2">
                Want to upskill?
              </h3>
              <p className="text-[16px] font-light mb-5">
                Start your <span className="font-bold">learning journey</span>{" "}
                today!
              </p>
              <button
                onClick={() => {
                  router.push("/skill-assessment");
                }}
                className="bg-white text-black px-6 py-2 rounded-md text-[16px] font-semibold hover:opacity-90 transition"
              >
                Skill Assessment
              </button>
            </div>

            {/* Bottom-anchored image */}
            <div className="w-full p-0 h-[240px] md:h-[280px] lg:h-[320px] relative mt-auto">
              <Image
                src="/images/landing/stairs.png"
                alt="stairs"
                fill
                loading="lazy"
                className="object-bottom object-fill"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {features.slice(3).map((item, i) => (
              <div
                key={i}
                className="relative border border-[#E4E4E7] dark:border-[#27272A] dark:bg-[#18181B] rounded-2xl p-6 pt-4 flex flex-col gap-3 overflow-hidden transition-all duration-300"
                onMouseEnter={() => setHoveredCard(i + 3)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative w-[60px] h-[60px]">
                  <Image
                    src={hoveredCard === i + 3 ? item.gif : item.icon}
                    alt="icon"
                    fill
                    loading="lazy"
                    className="object-contain"
                  />
                </div>
                {/* was: h4 → p (keep same styling) */}
                <p className="font-semibold text-black dark:text-white text-base">
                  {item.title}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm -mt-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyCoursevita;
