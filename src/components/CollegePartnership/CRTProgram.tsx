"use client";
import React from "react";
import { BookOpen, MessageSquare, Code, Users, FileText, Target } from "lucide-react";

const crtComponents = [
  { icon: BookOpen, title: "Aptitude (Quant, LR, DI)" },
  { icon: MessageSquare, title: "Communication Training" },
  { icon: Code, title: "Technical Foundations" },
  { icon: Users, title: "Mock Interviews" },
  { icon: FileText, title: "Resume & Portfolio Structuring" },
  { icon: Target, title: "Simulation-Based Practice" },
];

const hiringBenefits = [
  "Internship & Job Listings",
  "Recruiter Network",
  "Domain-Specific Roles",
  "Portfolio-Based Shortlisting",
  "Priority Visibility for High Performers",
];

export function CRTProgram() {
  return (
    <>
      {/* CRT Section */}
      <section className="py-20 md:py-32 px-4 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black dark:text-white">
              CRT That <span className="text-brand-500 dark:text-accent-500">Actually Works</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              CRT becomes more powerful when combined with real execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {crtComponents.map((component, index) => {
              const Icon = component.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] rounded-xl p-6 hover:shadow-lg hover:border-brand-500 dark:hover:border-accent-500 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-100 dark:bg-brand-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-brand-600 dark:text-accent-500" />
                    </div>
                    <span className="text-base md:text-lg text-black dark:text-white font-medium">
                      {component.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-r from-brand-500 to-accent-500 p-1 rounded-2xl">
              <div className="bg-white dark:bg-black px-8 py-6 rounded-xl">
                <p className="text-lg md:text-xl text-black dark:text-white font-semibold">
                  Students practice skills through{" "}
                  <span className="text-brand-600 dark:text-accent-500">real tasks</span>
                  —building confidence and readiness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Network Section */}
      <section className="py-20 md:py-32 px-4 bg-gray-50 dark:bg-[#09090B]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black dark:text-white">
              A Hiring Network Built for{" "}
              <span className="text-brand-500 dark:text-accent-500">Colleges</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              SkillVita connects students with companies evaluating portfolios, not marks.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] rounded-xl p-8 md:p-12">
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Colleges gain access to:
              </p>
              
              <div className="space-y-4">
                {hiringBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-[#09090B] rounded-lg"
                  >
                    <div className="w-2 h-2 bg-brand-500 dark:bg-accent-500 rounded-full flex-shrink-0" />
                    <span className="text-base md:text-lg text-black dark:text-white">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
