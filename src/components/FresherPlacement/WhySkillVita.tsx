"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { highlightKeywords } from "@/components/FresherPlacement/utils";

const fadeIn: Variants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
const staggerContainer: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } } };

export default function WhySkillVita() {
  return (
    <section className="py-24 bg-black border-t border-zinc-900">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Why {highlightKeywords("SkillVita")}</h2>
          <p className="text-zinc-500">The {highlightKeywords("SkillVita")} advantage for {highlightKeywords("freshers")}.</p>
        </motion.div>
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          {["Job simulations reflecting real responsibilities","Team-based workflows replicating workplace environments","Mentor guidance for support","Skill journey tracking for clarity","Demo Days for presentation and visibility","Portfolio-first outcomes demonstrating job-readiness"].map((text, idx) => (
            <motion.div key={idx} variants={fadeIn} whileHover={{ y: -5, borderColor: "#22c55e", backgroundColor: "#09090b", boxShadow: "0 10px 20px -5px rgba(34, 197, 94, 0.1)" }} className="group p-6 rounded-2xl bg-zinc-900 border border-zinc-800 transition-all duration-300 cursor-default">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-[#22c55e] border border-zinc-700 group-hover:border-[#22c55e] group-hover:bg-[#22c55e] group-hover:text-black transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h4 className="font-bold text-zinc-200 group-hover:text-white transition-colors">{highlightKeywords(text)}</h4>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

