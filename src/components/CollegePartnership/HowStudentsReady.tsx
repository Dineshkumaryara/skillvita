import React from "react";

const steps = [
  { number: "1", title: "Role Understanding", description: "Through Launch simulations." },
  { number: "2", title: "Skilling Through Doing", description: "Guided tasks & structured execution." },
  { number: "3", title: "Build Proof-of-Work", description: "Projects, simulations, certificates." },
  { number: "4", title: "Placement Readiness", description: "CRT + communication + clarity." },
  { number: "5", title: "Recruiter Visibility", description: "Portfolios become discoverable." }
];

export function HowStudentsReady() {
  return (
    <section className="py-16 md:py-20 px-4 bg-gray-50 dark:bg-[#09090B]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-black dark:text-white mb-12 text-center">
          How Students Become <span className="text-brand-500">Job-Ready</span>
        </h2>

        <div className="space-y-4 mb-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 bg-white dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] rounded-xl p-6"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-brand-500 dark:bg-accent-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {step.number}
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-semibold text-black dark:text-white mb-1">
                  {step.title}
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
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
  );
}
