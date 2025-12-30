import React from "react";

const benefits = [
  "Higher placement conversions",
  "Strong recruiter confidence",
  "Repeat hiring cycles",
  "Reduced placement pressure",
  "Stronger institutional reputation"
];

export function WhyShiftMattersSection() {
  return (
    <section className="py-16 md:py-20 px-4 bg-white dark:bg-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-black dark:text-white mb-6 text-center">
          Why This Shift Matters <span className="text-brand-500">Now</span>
        </h2>

        <div className="space-y-6 text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
          <p className="text-center">
            Recruiters shortlist students who show execution, clarity, and real projects—not marks.
          </p>
          
          <p className="text-lg font-semibold text-center">
            Colleges adopting experiential learning early see:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-gray-50 dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] rounded-xl p-4"
            >
              <div className="flex-shrink-0 w-6 h-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="12" className="fill-brand-100 dark:fill-brand-900/30" />
                  <path d="M7.5 12L10.5 15L16.5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-brand-500" />
                </svg>
              </div>
              <span className="text-base text-black dark:text-white font-medium">
                {benefit}
              </span>
            </div>
          ))}
        </div>

        <div className="bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-900/50 rounded-2xl p-6 md:p-8 text-center">
          <p className="text-base md:text-lg text-red-900 dark:text-red-100 mb-3">
            Colleges that delay face lower selections and rising competition.
          </p>
          <p className="text-lg md:text-xl font-bold text-red-900 dark:text-red-100">
            Early adopters gain a measurable advantage.
          </p>
        </div>
      </div>
    </section>
  );
}
