"use client";
import React from "react";

export default function Audience() {
  const chips = [
    "Students starting with zero clarity",
    "Students building first projects",
    "Students preparing for placements",
    "Students exploring domains",
    "Students seeking real work experience",
  ];

  return (
    <section className="py-24 bg-black" aria-labelledby="audience-heading">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h2 id="audience-heading" className="text-3xl font-bold mb-12 reveal text-white section-enter-fade">Who These Programs Are For</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {chips.map((txt, i) => (
            <span key={txt} className={`px-6 py-3 bg-zinc-900 rounded border border-zinc-800 text-zinc-400 hover:text-[#bbf7d0] hover:border-[#22c55e] transition-all hover:scale-105 cursor-default reveal section-enter-pop delay-${(i + 1) * 100}`}>{txt}</span>
          ))}
        </div>
        <div className="mt-16 max-w-2xl mx-auto bg-gradient-to-br from-zinc-900 to-black p-10 rounded border border-zinc-800 reveal section-enter-slide-up delay-200 hover:border-[#22c55e] transition-colors group">
          <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-[#4ade80] transition-colors">Why Starting Early Helps</h3>
          <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-left max-w-sm mx-auto">
            {["Visibility", "Direction", "Shortlist chances", "Confidence"].map((txt) => (
              <div key={txt} className="flex items-center gap-3 text-zinc-300"><div className="w-1.5 h-1.5 rounded-full bg-[#22c55e] shadow-[0_0_5px_#22c55e]"></div> {txt}</div>
            ))}
          </div>
          <p className="mt-10 text-xl font-bold text-white border-t border-zinc-800 pt-6">Opportunities go to students who show work <span className="text-[#22c55e]">early</span>.</p>
        </div>
      </div>
    </section>
  );
}

