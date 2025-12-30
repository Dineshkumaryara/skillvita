"use client";
import React from "react";
import { CheckCircle2 } from "lucide-react";

const collegeNeeds = [
  "Role clarity",
  "Execution capability",
  "Real project experience",
  "Communication readiness",
  "Portfolios with proof-of-work",
];

export function ModernCollegeNeeds() {
  return (
    <section className="py-20 md:py-32 px-4 bg-gray-50 dark:bg-[#09090B]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black dark:text-white">
            What <span className="text-brand-500 dark:text-accent-500">Modern Colleges</span> Need
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Recruiters now look for students who can demonstrate capability—not just clear exams.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] rounded-xl p-8 md:p-12">
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Colleges are expected to provide:
            </p>
            
            <div className="space-y-4 mb-8">
              {collegeNeeds.map((need, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-500 dark:text-accent-500 flex-shrink-0 mt-0.5" />
                  <span className="text-base md:text-lg text-black dark:text-white">
                    {need}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-[#E4E4E7] dark:border-[#27272A]">
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
                SkillVita helps institutions upgrade their placement ecosystem with{" "}
                <span className="font-semibold text-brand-600 dark:text-accent-500">
                  structured, execution-driven learning
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
