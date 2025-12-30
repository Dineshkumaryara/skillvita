import React from "react";

const outcomes = [
  "Higher placement & internship conversions",
  "Stronger recruiter engagement",
  "Measurable skill improvement",
  "Consistent hiring cycles",
  "Improved institutional reputation",
  "Data-driven dashboards"
];

export function InstitutionOutcomes() {
  return (
    <section className="py-16 md:py-20 px-4 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-black dark:text-white mb-12">
          Clear Outcomes for <span className="text-accent-500">Institutions</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((outcome, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 bg-gray-50 dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] rounded-xl p-6 hover:shadow-lg hover:border-brand-500 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-8 h-8 mt-1">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="16" className="fill-brand-100 dark:fill-brand-900/30" />
                  <path d="M10 16L14 20L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-brand-500" />
                </svg>
              </div>
              <div>
                <p className="text-base md:text-lg text-black dark:text-white font-medium">
                  {outcome}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
