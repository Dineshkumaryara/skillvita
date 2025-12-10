"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { highlightKeywords } from "@/components/FresherPlacement/utils";

const fadeIn: Variants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
const staggerContainer: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } } };

export default function OutcomesDomains() {
  return (
    <section className="py-24 bg-black border-t border-zinc-900">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-[#22c55e] rounded-full shadow-[0_0_10px_#22c55e]"></span>
              Key {highlightKeywords("Outcomes")}
            </h3>
            <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 shadow-card hover:border-zinc-700 transition-colors">
              <ul className="space-y-6">
                {["Role-aligned skills developed through real tasks","A portfolio that proves job-readiness","A professional recruiter-friendly identity","Clarity on strengths and skill gaps","Guided support throughout the journey"].map((item, i) => (
                  <motion.li key={i} className="flex items-start gap-4" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                    <div className="mt-1 w-5 h-5 rounded-full bg-brand-900/30 text-[#22c55e] border border-brand-900 flex items-center justify-center flex-shrink-0 shadow-[0_0_8px_rgba(34,197,94,0.2)]">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <span className="text-zinc-300 font-medium">{highlightKeywords(item)}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-white rounded-full"></span>
              {highlightKeywords("Upskill Domains")}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "💻", name: "Technology" },
                { icon: "⚙️", name: "Product & Engineering" },
                { icon: "📈", name: "Business & Management" },
                { icon: "📢", name: "Marketing & Comm" },
                { icon: "🎨", name: "Creative & Design" },
                { icon: "📊", name: "Research & Analysis" },
                { icon: "💼", name: "Operations & Finance", full: true }
              ].map((domain, i) => (
                <motion.div key={i} variants={fadeIn} whileHover={{ scale: 1.05, borderColor: "#22c55e", backgroundColor: "#09090b", boxShadow: "0 5px 15px -5px rgba(34, 197, 94, 0.2)" }} className={`p-4 rounded-xl border border-zinc-800 text-center transition-all cursor-default bg-zinc-900 group ${domain.full ? "col-span-2" : ""}`}>
                  <span className="block text-[#22c55e] text-2xl mb-2 group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]">{domain.icon}</span>
                  <span className="font-semibold text-zinc-300 group-hover:text-white">{highlightKeywords(domain.name)}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

