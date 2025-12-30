"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { highlightKeywords } from "@/components/FresherPlacement/utils";

const fadeIn: Variants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
const staggerContainer: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } } };

export default function Roadmap() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Start Your Fresher Placement Journey with SkillVita",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Build Your Profile",
        "text": "Create a clean, recruiter-friendly profile that highlights your strengths.",
        "position": 1
      },
      {
        "@type": "HowToStep",
        "name": "Build Skills Through Doing",
        "text": "Follow guided modules designed around real industry expectations.",
        "position": 2
      },
      {
        "@type": "HowToStep",
        "name": "Create Proof-of-Work",
        "text": "Work on tasks, projects, and challenges that reflect real responsibilities.",
        "position": 3
      },
      {
        "@type": "HowToStep",
        "name": "Strengthen Placement Readiness",
        "text": "Refine communication, improve clarity, and prepare your portfolio.",
        "position": 4
      },
      {
        "@type": "HowToStep",
        "name": "Track Your Growth",
        "text": "Your work and assessments update automatically as verified capability.",
        "position": 5
      }
    ]
  };

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <h2 className="text-sm font-bold text-[#22c55e] uppercase tracking-widest mb-3">Roadmap</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-white">How It Works — Structured {highlightKeywords("Fresher")} Journey</h3>
        </motion.div>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[15px] lg:left-1/2 top-0 bottom-0 w-1 bg-zinc-800 transform lg:-translate-x-1/2 rounded-full"></div>
          <motion.div className="space-y-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            {[
              { title: "1. Build Your Profile", desc: "Create a clean, recruiter-friendly profile that highlights your strengths." },
              { title: "2. Build Skills Through Doing", desc: "Follow guided modules designed around real industry expectations." },
              { title: "3. Create Proof-of-Work", desc: "Work on tasks, projects, and challenges that reflect real responsibilities." },
              { title: "4. Strengthen Placement Readiness", desc: "Refine communication, improve clarity, and prepare your portfolio." },
              { title: "5. Track Your Growth", desc: "Your work and assessments update automatically as verified capability." }
            ].map((step, idx) => (
              <motion.div key={idx} variants={fadeIn} className="relative lg:flex lg:justify-between items-center group">
                <div className={`lg:w-[45%] ${idx % 2 === 0 ? "lg:text-right lg:pr-12" : "order-2 lg:pl-12"} pl-12`}>
                  <h4 className="text-xl font-bold text-white group-hover:text-[#22c55e] transition-colors duration-300">{highlightKeywords(step.title)}</h4>
                  <p className="text-zinc-500 mt-2">{highlightKeywords(step.desc)}</p>
                </div>
                <motion.div whileHover={{ scale: 1.3, borderColor: "#22c55e", backgroundColor: "#22c55e", boxShadow: "0 0 20px rgba(34,197,94,0.6)" }} className="absolute left-0 lg:left-1/2 w-8 h-8 rounded-full border-4 border-black bg-zinc-800 shadow-[0_0_15px_rgba(34,197,94,0.3)] transform lg:-translate-x-1/2 z-10 transition-all duration-300"></motion.div>
                <div className={`lg:w-[45%] ${idx % 2 !== 0 ? "order-1" : ""}`}></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

