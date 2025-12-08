"use client";

import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
type ResultProps = {
  submitCount: number;
  isResult2: boolean;
};

export const Result = ({ submitCount, isResult2 }: ResultProps) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      {submitCount === 2 && isResult2 && (
        <div
          className={`flex flex-col items-center w-full max-w-[640px] px-4 sm:px-6 py-8 sm:py-12 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          <Image
            src="/images/skillAssessment/medal.svg"
            alt="Medal"
            width={60}
            height={70}
            className="mb-4"
          />

          <h2 className="text-[20px] sm:text-[24px] font-semibold mb-6">
            Skill Report
          </h2>

          <div className="w-full space-y-4">
            {[
              { skill: "Communication Skills", level: 75 },
              { skill: "Technical Knowledge", level: 70 },
              { skill: "Analytical Thinking", level: 60 },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between px-2">
                <div className="w-2/5">
                  <p className="text-sm font-medium">{item.skill}</p>
                </div>

                <div className="w-2/5">
                  <div
                    className={`h-1.5 rounded-full overflow-hidden ${
                      isDark ? "bg-[#2D2A3A]" : "bg-gray-200"
                    }`}
                  >
                    <div
                      className="h-full bg-[#BD89FF] rounded-full transition-all duration-500"
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </div>

                <div className="w-1/5 text-right">
                  <p className="text-sm font-medium">{item.level}%</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-center">
            You are at{" "}
            <span className="text-[#BD89FF] font-semibold">
              Intermediate level
            </span>
          </p>

          <p className="text-sm text-center mt-2 max-w-[440px]">
            Based on your answers, we can recommend you the perfect upskilling
            course.
          </p>
        </div>
      )}
    </>
  );
};
