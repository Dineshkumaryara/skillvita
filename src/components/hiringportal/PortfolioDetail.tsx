"use client";
import React from "react";
import { CheckCircle, FileCheck, Award, Layers, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import DisplayCards from "@/components/hiringportal/DisplayCards";

export default function PortfolioDetail() {
  const portfolioItems = [
    "Real projects with evidence",
    "Task outcomes tied to capabilities",
    "Simulation outputs",
    "Team workflow contributions",
    "Demo Day presentations",
    "Mentor feedback & Skill journey timeline",
  ];

  const evidenceCards = [
    { icon: <FileCheck className="size-4 text-green-400" />, title: "Project Evidence", description: "Codebase & Live Link", date: "Github", className: "[grid-area:stack] hover:-translate-y-24 bg-zinc-900 border-zinc-800 transition-all duration-700" },
    { icon: <Award className="size-4 text-green-400" />, title: "Task Outcome", description: "Evaluation Score: 92/100", date: "Mentor Review", className: "[grid-area:stack] translate-x-12 translate-y-8 hover:-translate-y-24 bg-zinc-900 border-zinc-800 transition-all duration-700" },
    { icon: <Layers className="size-4 text-green-400" />, title: "Workflow", description: "Agile Sprint Contribution", date: "Jira Logs", className: "[grid-area:stack] translate-x-24 translate-y-16 hover:-translate-y-24 bg-zinc-900 border-zinc-800 transition-all duration-700" },
  ];

  return (
    <section className="py-24 bg-black overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-green-500/20 rounded-full blur-3xl transform scale-150 opacity-50"></div>
              <div className="relative z-10 transform scale-110">
                <DisplayCards cards={evidenceCards} />
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Verified Talent. <span className="text-green-500">Real Proof.</span><br /> Clear Decisions.
            </h2>
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              Forget self-reported resumes. SkillVita portfolios give you direct access to the work that matters, ensuring candidates can perform from Day 1.
            </p>
            <div className="grid sm:grid-cols-2 gap-x-4 gap-y-6">
              {portfolioItems.map((item, i) => (
                <div key={i} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-zinc-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className={cn("mt-10 p-6 rounded-xl border border-green-500/20 bg-green-900/10 backdrop-blur-sm", "transition-all hover:bg-green-900/20 hover:border-green-500/40 hover:shadow-lg hover:shadow-green-900/20")}> 
              <div className="flex items-start gap-4">
                <Zap className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-green-400 mb-1">Reduced Screening Time</h4>
                  <p className="text-green-200/80 text-sm leading-relaxed">
                    With outcomes, evaluations, and task history readily available, you can skip the guesswork and shortlist faster.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

