"use client";
import React from "react";
import { cn } from "@/lib/utils";

export default function Steps() {
  const steps = [
    { title: "Create Account", desc: "Recruiter Account" },
    { title: "Post Job", desc: "Define Requirements" },
    { title: "Get Matched", desc: "Curated Candidates" },
    { title: "Evaluate", desc: "Review Portfolios" },
    { title: "Shortlist", desc: "Save Profiles" },
    { title: "Interview", desc: "Request & Connect" },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-zinc-950 text-white relative border-t border-zinc-900 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-green-900/5 blur-3xl pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at center, rgba(34,197,94,0.1), transparent 60%)" }}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">How it Works</h2>
        <p className="text-zinc-400 max-w-2xl mx-auto mb-20 text-lg">A streamlined flow designed to improve hiring speed and selection accuracy.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center group">
              <div className="relative h-20 w-20 mx-auto mb-6 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-zinc-700 group-hover:border-green-500/50 group-hover:animate-spin transition-colors duration-500"></div>
                <div className="absolute inset-[-4px] rounded-full border border-dashed border-zinc-800 opacity-0 group-hover:opacity-100 group-hover:animate-spin transition-opacity duration-500" style={{ animationDirection: "reverse" }}></div>
                <div className="absolute inset-1 rounded-full bg-zinc-900 group-hover:bg-green-500/10 transition-colors duration-300"></div>
                <div className={cn("absolute inset-0 flex items-center justify-center font-bold text-2xl text-zinc-500 transition-all duration-300","group-hover:text-green-400 group-hover:scale-110")}>{i + 1}</div>
                <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              {i !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-zinc-900 -z-10 overflow-hidden">
                  <div className="w-full h-full bg-green-500/20"></div>
                </div>
              )}
              <h3 className="font-bold text-lg mb-2 text-white group-hover:text-green-400 transition-colors">{step.title}</h3>
              <p className="text-sm text-zinc-500 max-w-[120px] mx-auto leading-tight group-hover:text-zinc-400 transition-colors">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
