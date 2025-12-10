"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { highlightKeywords } from "@/components/FresherPlacement/utils";

const scaleUp: Variants = { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "backOut" } } };

export default function FinalCTA() {
  return (
    <section className="py-28 bg-brand-950 relative overflow-hidden text-center border-t border-brand-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-900/20 via-black to-black"></div>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleUp}>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">{highlightKeywords("Placement")} timelines move quickly.</h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto mb-4">
            {highlightKeywords("Freshers who prepare early gain more visibility, stronger confidence, and better outcomes. Your portfolio grows only when you begin building—start now.")}
          </p>
          <p className="text-zinc-500 mb-12">
            {highlightKeywords("Begin your upskilling journey with structured learning, hands-on projects, and a portfolio that shows real capability.")}
          </p>
          <motion.button whileHover={{ scale: 1.05, boxShadow: "0 0 50px -10px rgba(34, 197, 94, 0.6)" }} whileTap={{ scale: 0.95 }} className="px-12 py-5 rounded-full bg-[#22c55e] text-black font-bold text-lg shadow-glow-green transition-all">Start Learning</motion.button>
        </motion.div>
      </div>
    </section>
  );
}
