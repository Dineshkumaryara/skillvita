"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Categories() {
  const cats = [
    "Product & Engineering",
    "Business & Management",
    "Marketing & Communication",
    "Creative & Design",
    "Research & Analysis",
    "Operations & Finance",
  ];

  return (
    <section id="talent" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0 pointer-events-none opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-green-900/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-green-500/5 rounded-full blur-[120px]"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Talent Categories Available</h2>
          <p className="text-zinc-400 text-lg">Find job-ready candidates across key domains.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {cats.map((cat, i) => (
            <div key={i} className={cn("group p-6 border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm rounded-xl transition-all duration-300 cursor-pointer flex items-center justify-between", "hover:border-green-500/50 hover:bg-zinc-900 hover:shadow-lg hover:shadow-green-900/10 hover:-translate-y-1")}> 
              <span className="font-semibold text-zinc-300 group-hover:text-green-400 text-lg">{cat}</span>
              <div className="h-8 w-8 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-all duration-300 shadow-inner">
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
        <div className={cn("bg-zinc-900 rounded-3xl p-8 md:p-20 text-center text-white relative overflow-hidden shadow-2xl mx-auto max-w-5xl", "border border-zinc-800")}> 
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-900/20 rounded-full blur-3xl -ml-16 -mb-16"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Hiring Job-Ready Talent</h2>
            <p className="text-lg text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">List jobs, explore portfolios, and source candidates with confidence. Join the teams hiring smarter with SkillVita.</p>
            <button className="px-12 py-5 bg-green-600 text-white font-bold rounded-xl hover:bg-green-500 transition shadow-[0_0_30px_-5px_rgba(22,163,74,0.5)] text-lg">Start Hiring on SkillVita</button>
          </div>
        </div>
      </div>
    </section>
  );
}

