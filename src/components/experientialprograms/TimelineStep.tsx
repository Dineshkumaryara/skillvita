"use client";
import React from "react";

type Dir = "left" | "right";

interface TimelineStepProps {
  title: string;
  desc: string;
  dir: Dir;
}

export default function TimelineStep({ title, desc, dir }: TimelineStepProps) {
  return (
    <div
      className={`relative flex lg:items-center lg:justify-between group reveal section-enter-slide-${dir} timeline-step`}
      role="listitem"
    >
      {dir === "right" ? <div className="hidden lg:block lg:w-5/12 lg:pr-12 order-1" aria-hidden="true"></div> : null}
      <div className="node-indicator absolute left-0 lg:left-1/2 w-6 h-6 rounded-full border-4 border-black bg-zinc-800 lg:-translate-x-1/2 z-10 transition-all duration-300" aria-hidden="true"></div>
      <div className={`${dir === "right" ? "lg:w-5/12 text-left lg:pl-16 order-2 pl-12" : "lg:w-5/12 text-left lg:text-right order-2 lg:order-1 lg:pr-16"}`}>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#4ade80] transition-colors">{title}</h3>
        <p className="text-zinc-500">{desc}</p>
      </div>
      {dir === "left" ? <div className="lg:w-5/12 lg:pl-12 order-3 hidden lg:block" aria-hidden="true"></div> : null}
    </div>
  );
}

