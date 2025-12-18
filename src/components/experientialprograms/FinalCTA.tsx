"use client";
import React from "react";

export default function FinalCTA() {
  return (
    <section className="py-32 bg-zinc-950 relative overflow-hidden" aria-labelledby="cta-heading">
      <div className="absolute inset-0 flex items-center justify-center opacity-5 select-none pointer-events-none overflow-hidden">
        <span className="text-[20vw] font-black text-white whitespace-nowrap animate-pulse">SKILLVITA</span>
      </div>
      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
        <h2 id="cta-heading" className="text-4xl lg:text-6xl font-bold mb-8 text-white reveal section-enter-zoom">Experience real work.<br />Build <span className="text-[#22c55e]">proof-of-work</span>.</h2>
        <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto reveal section-enter-slide-up delay-100">Move closer to internship and placement opportunities with verified experience.</p>
        <button type="button" className="group relative px-10 py-5 bg-[#16a34a] text-white font-bold text-lg rounded overflow-hidden transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#4ade80] focus:ring-offset-2 focus:ring-offset-black reveal section-enter-slide-up delay-200">
          <span className="relative z-10 flex items-center gap-2">Start Your Program<svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></span>
          <div className="absolute inset-0 bg-[#22c55e] group-hover:opacity-100 transition-opacity"></div>
          <div className="absolute top-0 left-0 w-full h-[2px] bg-white opacity-0 group-hover:opacity-50"></div>
        </button>
      </div>
    </section>
  );
}

