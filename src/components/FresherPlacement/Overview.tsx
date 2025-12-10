"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { highlightKeywords } from "@/components/FresherPlacement/utils";

const fadeIn: Variants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
const staggerContainer: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } } };
const cardVariants: Variants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }, hover: { y: -8, boxShadow: "0 20px 30px -10px rgba(34, 197, 94, 0.2)", borderColor: "#22c55e", transition: { duration: 0.3 } } };

export default function Overview() {
  return (
    <section className="py-24 bg-black relative border-t border-zinc-900">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <motion.h2 variants={fadeIn} className="text-sm font-bold uppercase tracking-widest mb-3 flex items-center gap-2 text-[#22c55e]">
              <span className="w-8 h-[2px] bg-[#22c55e]"></span> The Context
            </motion.h2>
            <motion.h3 variants={fadeIn} className="text-3xl md:text-4xl font-display font-bold text-white mb-8 leading-tight">
              Don&apos;t let the {highlightKeywords("placement")} season catch you unprepared.
            </motion.h3>
            <div className="prose prose-lg text-zinc-400">
              <motion.p variants={fadeIn} className="mb-6">
                {highlightKeywords("Freshers often begin their placement journey late and lose valuable time deciding where to start. SkillVita provides structure, clarity, and guided execution—helping you build relevant capability and a professional identity that stands out.")}
              </motion.p>
              <motion.p variants={fadeIn}>
                {highlightKeywords("Through real projects, job simulations, team workflows, and mentor-reviewed outcomes, you develop practical experience aligned with industry expectations. The earlier you begin, the stronger your visibility becomes during placements.")}
              </motion.p>
            </div>
          </motion.div>
          <motion.div className="grid grid-cols-2 gap-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={cardVariants} whileHover="hover" className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 h-full group cursor-default shadow-lg">
              <div className="w-12 h-12 bg-zinc-800 text-[#22c55e] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#22c55e] group-hover:text-black transition-colors border border-zinc-700 group-hover:border-[#22c55e] shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
              </div>
              <h4 className="font-bold text-white mb-2">Structured Labs</h4>
              <p className="text-sm text-zinc-500">Guided execution environments.</p>
            </motion.div>
            <motion.div variants={cardVariants} whileHover="hover" className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 h-full mt-8 group cursor-default shadow-lg">
              <div className="w-12 h-12 bg-zinc-800 text-[#22c55e] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#22c55e] group-hover:text-black transition-colors border border-zinc-700 group-hover:border-[#22c55e] shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h4 className="font-bold text-white mb-2">Verified Proof</h4>
              <p className="text-sm text-zinc-500">Outcomes that recruiters trust.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

