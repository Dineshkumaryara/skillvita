// components/Mid.tsx
import React from "react";
import Image from "next/image";

const logos = [
  "/images/mock-interview/c1.png",
  "/images/mock-interview/c2.svg",
  "/images/mock-interview/c3.svg",
  "/images/mock-interview/c4.png",
  "/images/mock-interview/c5.png",
  "/images/mock-interview/c6.png",
  "/images/mock-interview/c7.svg",
  "/images/mock-interview/c8.svg",
  "/images/mock-interview/c9.svg",
];
const logosRepeated = Array(4).fill(logos).flat();

const steps = [
  {
    numIcon: "/images/mock-interview/1stNum.svg",
    actionIcon: "/images/mock-interview/r1.svg",
    label: "Register",
    desc: "Fill the corresponding details & check your availability",
  },
  {
    numIcon: "/images/mock-interview/2ndNum.svg",
    actionIcon: "/images/mock-interview/r2.svg",
    label: "Schedule",
    desc: "Set a date and time for your mock interview and one-on-one career counseling session.",
  },
  {
    numIcon: "/images/mock-interview/3rdNum.svg",
    actionIcon: "/images/mock-interview/r3.svg",
    label: "Confirm",
    desc: "Confirm your Registration",
  },
];

const Mid: React.FC = () => {
  return (
    <section className="bg-white dark:bg-black">
      {/* Headings */}
      <div className="py-12">
        <h2 className="text-2xl lg:text-4xl font-outfit font-semibold text-[#fe7465] text-center">
          Our Interviewers And Mentors
        </h2>
        <h2 className="text-2xl lg:text-4xl font-outfit font-semibold text-black dark:text-white text-center mt-2">
          Have Worked At
        </h2>
      </div>

      {/* Marquee logos */}
      <div className="relative overflow-hidden w-full max-w-7xl my-6 mx-auto">
        {/* Left Blur */}
        <div className="absolute top-0 left-0 h-full w-12 z-10 pointer-events-none">
          <div className="h-full w-full bg-gradient-to-r from-white/90 dark:from-black/90 to-transparent" />
        </div>

        {/* Right Blur */}
        <div className="absolute top-0 right-0 h-full w-12 z-10 pointer-events-none">
          <div className="h-full w-full bg-gradient-to-l from-white/90 dark:from-black/90 to-transparent" />
        </div>

        {/* Marquee Content */}
        <div
          className="flex items-center space-x-[95px] min-w-full"
          style={{ animation: "marquee 20s linear infinite" }}
        >
          {logosRepeated.map((src, i) => (
            <div key={i} className="flex-shrink-0">
              <Image src={src} alt={`Logo ${i + 1}`} width={100} height={40} />
            </div>
          ))}
        </div>
      </div>

      {/* Steps to register */}
      <div className="mt-24 bg-gradient-to-b from-transparent via-transparent to-[#EB00FF]/[0.05] dark:to-[#EB00FF]/[0.1] py-8">
        <h2 className="text-2xl lg:text-4xl font-outfit font-semibold text-[#fe7465] text-center">
          Steps <span className="text-black dark:text-white">to Register</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-2.5 p-[50px] px-[10px]">
          {steps.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2.5 w-[350px]"
            >
              <Image
                src={s.numIcon}
                alt={`Step ${i + 1}`}
                width={80}
                height={80}
                className="flex-shrink-0"
              />
              <div className="flex flex-col items-center gap-[5px]">
                <div className="flex items-center gap-[10px] mt-[15px]">
                  <Image
                    src={s.actionIcon}
                    alt={s.label}
                    width={24}
                    height={24}
                  />
                  <span className="text-2xl lg:text-[24px] font-outfit font-semibold">
                    {s.label}
                  </span>
                </div>
                <p className="text-center text-base font-poppins font-normal leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Keyframes for marquee */}
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </section>
  );
};

export default Mid;
