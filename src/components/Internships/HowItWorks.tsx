import React from "react";
import { UserCircle, Compass, ShieldCheck, Send, FileCheck } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: UserCircle,
      title: "Build Your Profile",
      description:
        "Create a clean, industry-ready profile and set up a portfolio that highlights your skills and projects.",
    },
    {
      icon: Compass,
      title: "Discover Your Fit",
      description:
        "SkillVita identifies your capabilities and interests to guide you toward the right internships.",
    },
    {
      icon: ShieldCheck,
      title: "Explore Verified Roles",
      description:
        "View internships that are fully verified for role clarity, legitimacy, expectations, and pay.",
    },
    {
      icon: Send,
      title: "Apply & Track Instantly",
      description:
        "Apply using your standardized profile and track every update through a simple, centralized dashboard.",
    },
    {
      icon: FileCheck,
      title: "Turn Work Into Proof",
      description:
        "Completed tasks automatically update your portfolio as verified proof-of-work.",
    },
  ];

  return (
    <section aria-labelledby="how-it-works-heading" className="bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 id="how-it-works-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
           How it <span className="text-emerald-500">Works</span>
          </h2>
          <p className="mt-4 text-lg text-neutral-400">Your seamless journey from student to professional.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flex flex-col rounded-2xl bg-neutral-900/50 p-6 shadow-sm border border-neutral-800 hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-all duration-300 group"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-900/20 text-emerald-500 border border-emerald-500/10 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                <step.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                {index + 1}. {step.title}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
