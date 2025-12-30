"use client";
import React from "react";
import HighlightItem from "@/components/experientialprograms/HighlightItem";
import { Layers, ClipboardList, CheckCircle, Users, MessageSquare, Play, TrendingUp, Folder } from "lucide-react";

export default function Highlights() {
  const items = [
    "Role-Based Simulations",
    "Guided Projects",
    "Capability Tasks",
    "Team Workflows",
    "Mentor Feedback",
    "Demo Days",
    "Skill Tracking",
    "Portfolio Outcomes",
  ];

  return (
    <section className="py-24 bg-zinc-950 border-y border-zinc-900 relative overflow-hidden" aria-labelledby="highlights-heading">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_rgba(34,197,94,0.05),_transparent_60%)] pointer-events-none"></div>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-12 reveal section-enter-fade">
          <span className="text-[#22c55e] font-mono text-sm tracking-wider uppercase">Features</span>
          <h2 id="highlights-heading" className="text-3xl font-bold text-white mt-2">Program Highlights</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4" role="list">
          {items.map((label, i) => {
            const icons: Record<string, React.ReactNode> = {
              "Role-Based Simulations": <Layers size={24} />,
              "Guided Projects": <ClipboardList size={24} />,
              "Capability Tasks": <CheckCircle size={24} />,
              "Team Workflows": <Users size={24} />,
              "Mentor Feedback": <MessageSquare size={24} />,
              "Demo Days": <Play size={24} />,
              "Skill Tracking": <TrendingUp size={24} />,
              "Portfolio Outcomes": <Folder size={24} />,
            };
            return (
              <HighlightItem key={label} label={label} delay={(i + 1) * 100} icon={icons[label]} />
            );
          })}
        </div>
      </div>
    </section>
  );
}
