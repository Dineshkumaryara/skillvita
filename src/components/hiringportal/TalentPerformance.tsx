"use client";
import React from "react";
import { ChevronRight, Target } from "lucide-react";

export default function TalentPerformance() {
  const criteria = [
    "Task execution ability",
    "Problem-solving",
    "Communication clarity",
    "Consistency of performance",
    "Team collaboration",
    "Documentation quality",
  ];

  return (
    <section className="py-24 bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"></div>
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Why SkillVita Talent Performs Better</h2>
              <p className="text-lg text-zinc-400 mb-8">Students are evaluated on rigorous standards to ensure they are ready for real-world challenges. This ensures candidates who can perform from Day 1.</p>
              <button className="text-green-500 font-semibold flex items-center">
                View Assessment Standards <ChevronRight className="ml-2 h-4 w-4" />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {criteria.map((c, i) => (
                <div key={i} className="flex items-center p-4 bg-black/50 border border-zinc-800 rounded-lg">
                  <Target className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-zinc-300 font-medium">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

