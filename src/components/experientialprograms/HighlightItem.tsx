"use client";
import React from "react";
import { Star } from "lucide-react";

interface HighlightItemProps {
  label: string;
  delay?: number;
  icon?: React.ReactNode;
}

export default function HighlightItem({ label, delay = 0, icon }: HighlightItemProps) {
  const delayClass = delay ? `delay-${delay}` : "";
  return (
    <div
      className={`p-6 bg-black border border-zinc-800 rounded text-center group reveal section-enter-pop ${delayClass} cursor-pointer hover:shadow-[0_0_20px_rgba(34,197,94,0.15)] hover:border-[#22c55e]/50 transition-all duration-300 transform hover:-translate-y-2`}
      role="listitem"
    >
      <div className="w-14 h-14 mx-auto mb-4 bg-zinc-900 rounded-full flex items-center justify-center text-zinc-500 group-hover:text-[#4ade80] transition-all group-hover:scale-110 group-hover:rotate-12 group-hover:bg-zinc-800 shadow-lg border border-zinc-800 group-hover:border-[#22c55e]/30">
        {icon ?? <Star size={24} />}
      </div>
      <h3 className="font-bold text-zinc-300 group-hover:text-white text-sm tracking-wide">{label}</h3>
    </div>
  );
}
