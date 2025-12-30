"use client";
import React from "react";
import { BarChart, Briefcase, FileCheck, Monitor, TrendingUp, Users } from "lucide-react";
import { cn } from "@/lib/utils";

export default function WhySkillVita() {
  const features = [
    { icon: Monitor, title: "Simulated Experience", description: "Job-ready candidates trained through real-world simulations and role-aligned execution samples." },
    { icon: FileCheck, title: "Verified Portfolios", description: "Demonstrable work with real evidence, not just claimed skills on a resume." },
    { icon: BarChart, title: "Capability Scores", description: "Assessments mapped to industry expectations with mentor-reviewed outcomes." },
    { icon: TrendingUp, title: "Faster Shortlisting", description: "Use proof-of-work to filter talent quickly, reducing uncertainty in early-career hiring." },
    { icon: Users, title: "Pre-filtered Pools", description: "Access a curated pipeline of candidates who have already proven their capabilities." },
    { icon: Briefcase, title: "Role-Aligned", description: "Candidates evaluated on execution, problem-solving, and communication clarity." }
  ];

  return (
    <section id="why" className="pt-24 pb-24 bg-black relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-3 py-1 bg-green-900/30 border border-green-500/20 rounded-full text-green-400 text-xs font-semibold tracking-wider uppercase">
            Recruiter Benefits
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Hire Through SkillVita</h2>
          <p className="text-lg text-zinc-400">
            SkillVita reduces uncertainty in early-career hiring by providing recruiters with a 360° view of job-readiness.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {features.map((f, i) => (
            <div key={i} className={cn(
              "relative flex flex-col justify-between rounded-xl border-2 border-dashed border-zinc-800 bg-zinc-900/20 p-6 transition-all duration-500 overflow-hidden",
              "hover:-translate-y-2 hover:border-green-500/50 hover:bg-zinc-900 hover:shadow-xl hover:shadow-green-900/10"
            )}>
              <div className="absolute inset-0 opacity-0"></div>
              <div className="relative z-10">
                <div className="h-12 w-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-6">
                  <f.icon className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

