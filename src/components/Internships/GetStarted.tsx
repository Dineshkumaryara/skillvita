"use client";

import React from "react";
import { Rocket, ArrowRight } from "lucide-react";

export default function GetStarted() {
  const scrollToInternships = () => {
    const element = document.getElementById("list");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      onClick={scrollToInternships}
      className="flex flex-col items-center justify-center text-center h-full rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8 hover:border-emerald-500/50 transition-all duration-300 group cursor-pointer"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          scrollToInternships();
        }
      }}
    >
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-900/30 text-emerald-500 border border-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
        <Rocket className="h-6 w-6" />
      </div>
      <h3 className="mb-4 text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">Get Started</h3>
      <p className="text-neutral-400 leading-relaxed mb-6 flex-grow">Explore verified internships aligned with your skills.</p>
      <div className="flex items-center text-emerald-500 font-semibold group-hover:translate-x-2 transition-transform duration-300">
        Start Now <ArrowRight className="ml-2 h-4 w-4" />
      </div>
    </div>
  );
}
