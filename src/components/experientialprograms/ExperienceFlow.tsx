"use client";
import React from "react";
import TimelineStep from "@/components/experientialprograms/TimelineStep";

export default function ExperienceFlow() {
  const steps = [
    { title: "Step 1 — Choose Your Role", desc: "Select a domain and role that aligns with your goals.", dir: "left" },
    { title: "Step 2 — Skilling Through Doing", desc: "Apply concepts immediately to small tasks.", dir: "right" },
    { title: "Step 3 — Work Inside Simulations", desc: "Execute job-like simulations mirroring workflows.", dir: "left" },
    { title: "Step 4 — Build Proof-of-Work", desc: "Compile outputs into verifiable evidence.", dir: "right" },
    { title: "Step 5 — Demo Day Presentation", desc: "Present work to mentors and peers.", dir: "left" },
    { title: "Step 6 — Portfolio Integration", desc: "Add verified projects to your portfolio.", dir: "right" },
    { title: "Step 7 — Visibility to Recruiters", desc: "Showcase job-readiness to hiring partners.", dir: "left" },
  ];

  return (
    <section className="py-24 bg-black relative" aria-labelledby="flow-heading">
      <div className="absolute inset-0 bg-[#22c55e]/5 bg-[radial-gradient(#15803d_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <h2 id="flow-heading" className="text-3xl font-bold mb-16 text-center reveal text-white section-enter-fade">Experience Flow</h2>
        <div className="relative max-w-4xl mx-auto pl-8 lg:pl-0 timeline-container">
          <div className="timeline-line hidden lg:block bg-zinc-800 w-[2px] h-full absolute left-1/2 -translate-x-1/2" aria-hidden="true"></div>
          <div className="timeline-progress hidden lg:block bg-gradient-to-b from-[#4ade80] to-[#84cc16] w-[2px] absolute left-1/2 -translate-x-1/2 top-0" id="timelineProgress" aria-hidden="true" style={{ height: 0 }}></div>
          <div className="space-y-16" role="list">
            {steps.map((step) => (
              <TimelineStep key={step.title} title={step.title} desc={step.desc} dir={step.dir as "left" | "right"} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
