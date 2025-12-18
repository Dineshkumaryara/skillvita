"use client";
import React from "react";

export default function HeroSection() {
  return (
    <header className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden" aria-label="Hero Section">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 -z-20"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#22c55e]/10 rounded-full blur-[100px] animate-float -z-10"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#84cc16]/5 rounded-full blur-[120px] animate-pulse -z-10"></div>
      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 reveal section-enter-slide-right relative z-10">
          
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-none text-white">
            Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] to-[#a3e635]">Real Work.</span><br />
            Build <span className="text-white relative inline-block">
              Real Proof.
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#16a34a] opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" /></svg>
            </span><br />
            Get Placement Ready.
          </h1>
          <div className="max-w-xl">
            <p className="text-lg text-zinc-400 leading-relaxed font-light">
              Practice real job roles through simulations, projects, team workflows, and mentor-backed execution to build proof recruiters trust.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            <button type="button" className="group relative px-8 py-4 bg-white text-black font-bold text-lg rounded-none skew-x-[-10deg] border border-white hover:bg-[#4ade80] hover:border-[#4ade80] transition-all hover:scale-105 active:scale-95">
              <span className="block skew-x-[10deg]">Explore Programs</span>
              <div className="absolute -inset-1 bg-[#4ade80] blur-lg opacity-0 group-hover:opacity-40 transition-opacity"></div>
            </button>
          </div>
        </div>
        <div className="relative lg:h-[600px] w-full flex items-center justify-center reveal section-enter-slide-left delay-200 perspective-1000">
          <div className="relative w-full max-w-lg preserve-3d group transition-transform duration-700 ease-out js-tilt">
            <div className="absolute -inset-1 bg-gradient-to-tr from-[#22c55e] to-transparent opacity-30 blur-sm rounded-lg group-hover:opacity-60 transition-opacity"></div>
            <div className="relative w-full overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow-2xl js-tilt-content">
              <div className="absolute inset-0 bg-[#22c55e]/10 mix-blend-overlay z-10 pointer-events-none"></div>
              <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Futuristic Tech Workspace" className="w-full h-auto object-cover img-matrix group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent z-20">
                <div className="flex items-center justify-between border-t border-zinc-800 pt-4">
                  <div className="font-mono text-xs text-[#4ade80]">&gt; SYSTEM.READY<br />&gt; PROOF_VERIFIED</div>
                  <div className="h-2 w-24 bg-zinc-800 rounded-full overflow-hidden"><div className="h-full bg-[#22c55e] w-[80%] animate-pulse"></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

