"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { highlightKeywords } from "@/components/FresherPlacement/utils";

const scaleUp: Variants = { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "backOut" } } };

export default function WhyEarly() {
  return (
    <section className="py-24 bg-zinc-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-950 via-zinc-900 to-black opacity-80"></div>
      <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute top-0 right-0 w-96 h-96 bg-brand-600 rounded-full blur-[120px] opacity-10 pointer-events-none"></motion.div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-800 rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleUp}>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 text-white">Why {highlightKeywords("Upskilling")} Early Matters</h2>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed mb-12">
            {highlightKeywords("Placement cycles move quickly. Freshers who start early gain clarity, time to refine skills, stronger communication, and a portfolio prepared before opportunities arrive. Early action directly improves placement readiness.")}
          </p>
          <motion.button whileHover={{ scale: 1.05, backgroundColor: "#22c55e", color: "#000", boxShadow: "0 0 30px rgba(34,197,94,0.6)" }} whileTap={{ scale: 0.95 }} className="px-12 py-5 bg-[#22c55e] text-black font-bold rounded-full text-xl shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all">Start Learning</motion.button>
        </motion.div>
      </div>
    </section>
  );
}
