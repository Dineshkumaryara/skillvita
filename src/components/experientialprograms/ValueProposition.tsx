"use client";
import React from "react";

export default function ValueProposition() {
  const bullets = [
    "Show exactly how you work",
    "Demonstrate job readiness",
    "Move beyond theoretical understanding",
    "Communicate capability through proof",
    "Earn trust from recruiters faster",
  ];

  return (
    <section className="py-24 bg-zinc-950" aria-labelledby="value-heading">
      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal preserve-3d group perspective-1000 section-enter-zoom">
          <div className="relative rounded overflow-hidden shadow-2xl group border border-zinc-800 bg-zinc-900 rotate-y-12 group-hover:rotate-y-0 transition-transform duration-700 js-tilt">
            <div className="absolute inset-0 bg-[#22c55e]/10 z-10 mix-blend-overlay"></div>
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Team collaboration" className="w-full h-auto img-matrix js-tilt-content" />
            <div className="absolute top-4 left-4 flex gap-2"><div className="w-3 h-3 rounded-full bg-red-500"></div><div className="w-3 h-3 rounded-full bg-yellow-500"></div><div className="w-3 h-3 rounded-full bg-green-500"></div></div>
          </div>
        </div>
        <div className="space-y-8 reveal section-enter-slide-left">
          <h2 id="value-heading" className="text-3xl font-bold text-white">How Experiential Programs Improve Internship Chances</h2>
          <ul className="space-y-4">
            {bullets.map((txt) => (
              <li key={txt} className="flex items-start gap-4 text-zinc-400 group cursor-default"><span className="text-[#22c55e] font-mono group-hover:translate-x-1 transition-transform">&gt;</span>{txt}</li>
            ))}
          </ul>
          <div className="p-6 bg-black border border-[#22c55e]/30 rounded relative overflow-hidden group hover:border-[#22c55e] transition-colors">
            <div className="absolute top-0 right-0 p-2 opacity-50"><svg className="w-8 h-8 text-[#22c55e] animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></div>
            <p className="text-[#bbf7d0] font-medium relative z-10">This directly increases visibility among companies looking for skilled interns.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

