"use client";
import React from "react";
import { CheckCircle2, TrendingUp, Users, Target, Database } from "lucide-react";

const journeySteps = [
  {
    step: "1",
    title: "Role Understanding",
    description: "Through Launch simulations.",
  },
  {
    step: "2",
    title: "Skilling Through Doing",
    description: "Guided tasks & structured execution.",
  },
  {
    step: "3",
    title: "Build Proof-of-Work",
    description: "Projects, simulations, certificates.",
  },
  {
    step: "4",
    title: "Placement Readiness",
    description: "CRT + communication + clarity.",
  },
  {
    step: "5",
    title: "Recruiter Visibility",
    description: "Portfolios become discoverable.",
  },
];

const outcomes = [
  {
    icon: TrendingUp,
    title: "Higher placement & internship conversions",
  },
  {
    icon: Users,
    title: "Stronger recruiter engagement",
  },
  {
    icon: Target,
    title: "Measurable skill improvement",
  },
  {
    icon: CheckCircle2,
    title: "Consistent hiring cycles",
  },
  {
    icon: Database,
    title: "Improved institutional reputation",
  },
  {
    icon: Target,
    title: "Data-driven dashboards",
  },
];

export function StudentJourney() {
  return (
    <>
      {/* How Students Become Job-Ready */}
      <section className="py-20 md:py-32 px-4 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black dark:text-white">
              How Students Become{" "}
              <span className="text-brand-500 dark:text-accent-500">Job-Ready</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {journeySteps.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-6 bg-gray-50 dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] rounded-xl p-6 hover:shadow-lg hover:border-brand-500 dark:hover:border-accent-500 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-brand-500 dark:bg-accent-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-black dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-brand-500 to-accent-500 p-1 rounded-2xl">
              <div className="bg-white dark:bg-black px-8 py-6 rounded-xl">
                <p className="text-lg md:text-xl text-black dark:text-white font-semibold">
                  Students graduate with{" "}
                  <span className="text-brand-600 dark:text-accent-500">
                    capability, clarity, and confidence
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clear Outcomes for Institutions */}
      <section className="py-20 md:py-32 px-4 bg-gray-50 dark:bg-[#09090B]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black dark:text-white">
              Clear Outcomes for{" "}
              <span className="text-brand-500 dark:text-accent-500">Institutions</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outcomes.map((outcome, index) => {
              const Icon = outcome.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-white dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] rounded-xl p-6 hover:shadow-lg hover:border-brand-500 dark:hover:border-accent-500 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-brand-100 dark:bg-brand-900/30 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-brand-600 dark:text-accent-500" />
                  </div>
                  <span className="text-base md:text-lg text-black dark:text-white font-medium">
                    {outcome.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
