"use client";
import React from "react";
import { CheckCircle2 } from "lucide-react";

const trainingComponents = [
  "Launch Job Simulations",
  "Boost Simulations (industry workflows)",
  "Project-Based Learning Tracks",
  "Project Certificates",
  "Verified Proof-of-Work Portfolios",
  "Full CRT Program",
  "Hiring Pathways & Recruiter Visibility",
];

export function NewStandard() {
  return (
    <section className="py-20 md:py-32 px-4 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black dark:text-white">
            The New Standard of{" "}
            <span className="text-brand-500 dark:text-accent-500">Campus Training</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            SkillVita delivers a complete learning + doing + hiring system
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {trainingComponents.map((component, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-gray-50 dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] rounded-xl p-6 hover:border-brand-500 dark:hover:border-accent-500 transition-all duration-300"
              >
                <CheckCircle2 className="w-6 h-6 text-brand-500 dark:text-accent-500 flex-shrink-0 mt-0.5" />
                <span className="text-base md:text-lg text-black dark:text-white font-medium">
                  {component}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-brand-500 to-accent-500 p-1 rounded-2xl">
              <div className="bg-white dark:bg-black px-8 py-6 rounded-xl">
                <p className="text-lg md:text-xl text-black dark:text-white font-semibold">
                  Students leave with{" "}
                  <span className="text-brand-600 dark:text-accent-500">
                    documented capability
                  </span>
                  —not just theoretical preparation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
