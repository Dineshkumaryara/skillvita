"use client";
import React from "react";
import FeatureCard from "@/components/experientialprograms/FeatureCard";
import { Briefcase, BadgeCheck, Sparkles, FileCheck, Wrench, Rocket } from "lucide-react";

export default function WhyExperiential() {
  const features = [
    { title: "Real Role Function", desc: "Understand how real roles function beyond textbooks." },
    { title: "Job-Ready Capability", desc: "Build capability through consistent practice and execution." },
    { title: "Clarity & Confidence", desc: "Gain clarity on strengths and develop confidence." },
    { title: "Evaluate-able Proof", desc: "Create proof that recruiters can actually evaluate." },
    { title: "Practical Execution", desc: "Move beyond theory to practical execution." },
    { title: "Career Acceleration", desc: "Accelerate your career trajectory with hands-on experience." },
  ];

  return (
    <section className="py-24 bg-black" aria-labelledby="why-heading">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16 md:flex justify-between items-end reveal section-enter-fade">
          <div>
            <h2 id="why-heading" className="text-4xl font-bold mb-2 text-white">Why Experiential Learning?</h2>
            <div className="h-1 w-20 bg-[#22c55e]"></div>
          </div>
          <p className="text-[#4ade80] font-mono mt-4 md:mt-0">&gt; Your experience becomes your advantage.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-1000" role="list">
          {features.map((item, i) => {
            const icons: Record<string, React.ReactNode> = {
              "Real Role Function": <Briefcase size={20} />,
              "Job-Ready Capability": <BadgeCheck size={20} />,
              "Clarity & Confidence": <Sparkles size={20} />,
              "Evaluate-able Proof": <FileCheck size={20} />,
              "Practical Execution": <Wrench size={20} />,
              "Career Acceleration": <Rocket size={20} />,
            };
            return (
              <FeatureCard
                key={item.title}
                title={item.title}
                desc={item.desc}
                delay={(i + 1) * 100}
                icon={icons[item.title]}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
