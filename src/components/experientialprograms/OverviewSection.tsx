"use client";
import React from "react";
import { Info, Compass, Target } from "lucide-react";

export default function OverviewSection() {
  const points = [
    {
      title: "What It Is",
      desc: "Hands-on experiential programs that simulate real job workflows.",
      icon: <Info size={20} />,
    },
    {
      title: "How It Works",
      desc: "Practice capability tasks, guided projects, and role simulations.",
      icon: <Compass size={20} />,
    },
    {
      title: "Outcome",
      desc: "Build proof-of-work and a portfolio recruiters can evaluate.",
      icon: <Target size={20} />,
    },
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden" aria-labelledby="overview-heading">
      <div className="absolute inset-0 pointer-events-none opacity-25 bg-[radial-gradient(circle_at_center,_rgba(34,197,94,0.12),_transparent_65%)]" />
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-12 reveal section-enter-fade">
          <span className="text-[#22c55e] font-mono text-sm tracking-wider uppercase">Overview</span>
          <h2 id="overview-heading" className="text-3xl md:text-4xl font-bold text-white mt-2">Experiential Programs</h2>
          <div className="h-1 w-24 bg-[#22c55e] mx-auto mt-3" />
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            Learn by doing in a structured environment designed to mirror real roles, workflows, and expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6" role="list">
          {points.map((p, i) => (
            <div
              key={p.title}
              className={`group relative p-8 bg-zinc-900 border border-zinc-800 rounded-lg reveal section-enter-slide-up delay-${(i + 1) * 100} js-tilt hover:border-[#22c55e]/50 hover:shadow-[0_0_28px_rgba(34,197,94,0.25)] transition-all duration-300`}
              role="listitem"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#22c55e]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
              <div className="js-tilt-content relative z-10">
                <div className="w-10 h-10 mb-4 bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 group-hover:border-[#22c55e] group-hover:bg-[#22c55e]/10 group-hover:text-[#4ade80] transition-colors animate-pulse-neon rounded">
                  {p.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-zinc-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
