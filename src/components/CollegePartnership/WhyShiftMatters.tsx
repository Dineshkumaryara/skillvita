"use client";
import React from "react";
import { TrendingUp, Users, RefreshCw, AlertCircle, Award } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Higher placement conversions",
  },
  {
    icon: Users,
    title: "Strong recruiter confidence",
  },
  {
    icon: RefreshCw,
    title: "Repeat hiring cycles",
  },
  {
    icon: AlertCircle,
    title: "Reduced placement pressure",
  },
  {
    icon: Award,
    title: "Stronger institutional reputation",
  },
];

export function WhyShiftMatters() {
  return (
    <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-[#09090B] dark:to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black dark:text-white">
            Why This Shift Matters{" "}
            <span className="text-brand-500 dark:text-accent-500">Now</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Recruiters shortlist students who show execution, clarity, and real projects—not marks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-4 bg-white dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] rounded-xl p-6 hover:shadow-lg hover:border-brand-500 dark:hover:border-accent-500 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-brand-100 dark:bg-brand-900/30 rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-brand-600 dark:text-accent-500" />
                </div>
                <span className="text-base md:text-lg text-black dark:text-white font-medium">
                  {benefit.title}
                </span>
              </div>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-900/50 rounded-2xl p-8">
            <p className="text-base md:text-lg text-red-900 dark:text-red-100 mb-4">
              Colleges that delay face lower selections and rising competition.
            </p>
            <p className="text-lg md:text-xl font-bold text-red-900 dark:text-red-100">
              Early adopters gain a measurable advantage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
