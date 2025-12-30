import React from "react";

const steps = [
  { number: "1", title: "Onboarding & Setup" },
  { number: "2", title: "CRT + Simulations Launch" },
  { number: "3", title: "Project Execution & Certifications" },
  { number: "4", title: "Portfolio Development" },
  { number: "5", title: "Recruiter Engagement" },
  { number: "6", title: "Insights & Performance Reports" }
];

export function PartnershipDelivers() {
  return (
    <section className="py-16 md:py-20 px-4 bg-gray-50 dark:bg-[#09090B]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-black dark:text-white mb-12 text-center">
          Partnership That Delivers <span className="text-brand-500">Results</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 bg-white dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] rounded-xl p-6 hover:shadow-lg hover:border-brand-500 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-brand-500 dark:bg-accent-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {step.number}
              </div>
              <div className="flex-1">
                <h3 className="text-base md:text-lg font-semibold text-black dark:text-white">
                  {step.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
