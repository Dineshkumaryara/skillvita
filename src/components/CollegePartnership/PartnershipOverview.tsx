"use client";
import React from "react";

export function PartnershipOverview() {
  return (
    <section id="partnership-overview" className="py-20 md:py-32 px-4 bg-gradient-to-b from-white to-gray-50/50 dark:from-black dark:to-gray-950/50">
      <div className="max-w-4xl mx-auto">
        <div className="group relative">
          {/* Hover gradient effect */}
          <div className="absolute -inset-[1px] bg-gradient-to-br from-brand-500 via-accent-500 to-brand-600 rounded-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 blur-sm"></div>
          
          <div className="relative bg-card rounded-3xl p-8 md:p-12 border border-border shadow-xl hover:shadow-2xl transition-all duration-300">
            {/* Content */}
            <div className="space-y-8">
              {/* Overview */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 bg-gradient-to-r from-brand-600 to-accent-600 dark:from-brand-400 dark:to-accent-400 bg-clip-text text-transparent">
                  Overview
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  SkillVita partners with colleges to strengthen placement outcomes by bringing industry-aligned simulations, project-based learning, CRT training, and proof-of-work portfolios directly into the campus ecosystem. Instead of theory-driven preparation, students experience real execution, structured mentoring, and capability-based hiring pathways. This enables institutions to deliver job-ready graduates, improve recruiter confidence, and elevate overall placement performance.
                </p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-brand-500/10 to-transparent rounded-tl-3xl"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-accent-500/10 to-transparent rounded-br-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
