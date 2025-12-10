"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { highlightKeywords } from "@/components/FresherPlacement/utils";

const fadeIn: Variants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };

export default function PortfolioAdvantage() {
  return (
    <section className="py-24 bg-gradient-to-br from-black to-zinc-900 text-white overflow-hidden relative border-t border-zinc-900">
      <motion.div animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-600 rounded-full blur-[150px] pointer-events-none opacity-20"></motion.div>
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        <motion.div className="lg:w-1/2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">The Portfolio Advantage</h2>
          <div className="prose prose-lg prose-invert text-zinc-400">
            <p className="mb-6">
              {highlightKeywords("SkillVita’s portfolio builder helps freshers present a structured, verified record of their capability. Skills, projects, assessments, and task outcomes combine to form a professional identity that recruiters trust.")}
            </p>
            <p className="text-[#22c55e] font-semibold text-xl">
              {highlightKeywords("Every experience you complete contributes to a living portfolio that grows with you and strengthens your visibility.")}
            </p>
          </div>
        </motion.div>
        <motion.div className="lg:w-1/2 w-full" initial={{ opacity: 0, x: 50, rotate: 5 }} whileInView={{ opacity: 1, x: 0, rotate: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, type: "spring" }}>
          <motion.div whileHover={{ rotate: 0, scale: 1.02 }} className="relative bg-black/60 backdrop-blur-xl border border-zinc-700 rounded-2xl p-6 shadow-2xl group">
            <div className="flex items-center gap-4 mb-6 border-b border-zinc-800 pb-6">
              <div className="w-16 h-16 rounded-full bg-zinc-800 overflow-hidden relative border border-zinc-700 group-hover:border-[#22c55e] transition-colors">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Profile" />
              </div>
              <div>
                <div className="h-4 w-40 bg-zinc-700 rounded mb-2 group-hover:bg-zinc-600 transition-colors"></div>
                <div className="h-3 w-24 bg-brand-900/50 rounded border border-brand-900 text-[#22c55e] text-[10px] flex items-center px-1 font-mono">SKILLVITA_ID</div>
              </div>
              <div className="ml-auto flex gap-2">
                <div className="w-8 h-8 rounded bg-zinc-800 border border-zinc-700"></div>
                <div className="w-8 h-8 rounded bg-zinc-800 border border-zinc-700"></div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-32 bg-zinc-900/50 rounded-xl border border-zinc-800 flex items-center justify-center group-hover:border-[#22c55e]/30 transition-colors">
                <span className="text-zinc-600 text-sm group-hover:text-[#22c55e] transition-colors">Project Showcase</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="h-20 bg-zinc-800/50 rounded-lg border border-zinc-800 hover:bg-zinc-800 transition-colors"></div>
                <div className="h-20 bg-zinc-800/50 rounded-lg border border-zinc-800 hover:bg-zinc-800 transition-colors"></div>
                <div className="h-20 bg-zinc-800/50 rounded-lg border border-zinc-800 hover:bg-zinc-800 transition-colors"></div>
              </div>
            </div>
            <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }} className="absolute -top-4 -right-4 bg-[#22c55e] text-black text-xs font-bold px-3 py-1 rounded-full shadow-[0_0_15px_#22c55e]">VERIFIED</motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
