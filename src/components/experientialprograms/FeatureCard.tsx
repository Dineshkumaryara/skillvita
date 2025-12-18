"use client";
import React from "react";
import { Check } from "lucide-react";

interface FeatureCardProps {
  title: string;
  desc: string;
  delay?: number;
  icon?: React.ReactNode;
}

export default function FeatureCard({ title, desc, delay = 0, icon }: FeatureCardProps) {
  const delayClass = delay ? `delay-${delay}` : "";
  return (
    <div
      className={`p-8 bg-zinc-900 border border-zinc-800 group reveal section-enter-flip-up ${delayClass} js-tilt relative overflow-hidden`}
      role="listitem"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#22c55e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      <div className="js-tilt-content relative z-10">
        <div className="w-10 h-10 mb-6 bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 group-hover:border-[#22c55e] group-hover:bg-[#22c55e]/10 group-hover:text-[#4ade80] transition-colors shadow-lg">
          {icon ?? <Check size={20} />}
        </div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#bbf7d0] transition-colors">{title}</h3>
        <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
