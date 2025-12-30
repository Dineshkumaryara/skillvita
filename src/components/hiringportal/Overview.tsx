"use client";
import React from "react";
import { Briefcase, CheckCircle, ChevronRight, FileCheck, Search } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Overview() {
  return (
    <section className="py-20 bg-black relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(
          "relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 md:p-16 text-white shadow-2xl transition-all duration-500 hover:border-zinc-700",
          "after:absolute after:-right-20 after:-top-20 after:h-[500px] after:w-[500px] after:bg-green-500/5 after:blur-3xl after:content-['']"
        )}>
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Beyond Resumes. <br/><span className="text-green-500">Based on Execution.</span></h2>
              <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                SkillVita’s Hiring Portal helps recruiters discover candidates through verified proof-of-work instead of resumes. Every student profile includes real projects, role-based tasks, and mentor-reviewed outcomes.
              </p>
              <ul className="space-y-4">
                {["Improve hiring accuracy","Reduce screening time","Increase confidence in early-career hiring"].map((text, i) => (
                  <li key={i} className="flex items-center text-zinc-300">
                    <div className="h-6 w-6 rounded-full bg-green-500/10 flex items-center justify-center mr-3 border border-green-500/20">
                      <CheckCircle className="h-3.5 w-3.5 text-green-500" />
                    </div>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              {[
                { icon: Briefcase, title: "Post Jobs", desc: "Internships, full-time, & trainee roles" },
                { icon: Search, title: "Source Profiles", desc: "Browse structured, domain-based profiles" },
                { icon: FileCheck, title: "Evaluate Portfolios", desc: "View real work, tasks, & simulations" }
              ].map((item, i) => (
                <div key={i} className={cn(
                  "relative overflow-hidden flex p-5 rounded-xl border border-white/5 bg-black/40 backdrop-blur-sm transition-all duration-500 group",
                  "hover:bg-zinc-800 hover:border-green-500/50 hover:shadow-[0_0_20px_-5px_rgba(34,197,94,0.15)]"
                )}>
                  <div className="relative z-10 flex w-full">
                    <item.icon className="h-8 w-8 text-green-500 mt-1 flex-shrink-0 group-hover:text-green-400 transition-transform duration-300" />
                    <div className="ml-4">
                      <h4 className="font-bold text-lg text-white group-hover:text-green-400 transition-colors">{item.title}</h4>
                      <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">{item.desc}</p>
                    </div>
                    <ChevronRight className="ml-auto h-5 w-5 text-zinc-700 group-hover:text-green-500 transition-all self-center" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

