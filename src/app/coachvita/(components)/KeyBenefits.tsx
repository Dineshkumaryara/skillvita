// components/KeyBenefits.tsx
import React from "react";
import Image from "next/image";

const benefits = [
  "Enhance your interview confidence",
  "Get Hired Fast",
  "Fast-track your career & increase your earnings.",
  "Achieve your dream job.",
];

const KeyBenefits: React.FC = () => {
  return (
    <section className="py-[50px] px-[10px] bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-[#fe7465] font-outfit font-semibold text-2xl md:text-4xl mb-[56px]">
          Key <span className="text-black dark:text-white">Benefits</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
          {benefits.map((text, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 w-full min-h-sm p-6
                         rounded-[10px] border border-brand-200 dark:border-[#27272A]
                         bg-white dark:bg-[#18181B]"
            >
              <Image
                src="/images/mock-interview/correct.svg"
                alt="Check icon"
                width={28}
                height={28}
                className="flex-shrink-0 mt-1 "
              />
              <p className="text-black dark:text-white font-poppins text-base font-normal leading-normal">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;
