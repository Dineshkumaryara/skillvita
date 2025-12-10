"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { highlightKeywords } from "@/components/FresherPlacement/utils";

const fadeIn: Variants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
const staggerContainer: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } } };
const cardVariants: Variants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }, hover: { y: -8, boxShadow: "0 20px 30px -10px rgba(34, 197, 94, 0.2)", borderColor: "#22c55e", transition: { duration: 0.3 } } };

export default function Pathways() {
  return (
    <section className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div className="text-center max-w-3xl mx-auto mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Internship & {highlightKeywords("Placement")} Pathways</h2>
          <div className="w-24 h-1 bg-[#22c55e] mx-auto rounded-full shadow-[0_0_10px_#22c55e]"></div>
        </motion.div>
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          {[
            { title: "Opportunities", desc: "Skill-based internships and early placement pathways are available across domains including Technology, Product & Engineering, Business, Marketing, and Creative & Design.", icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
            { title: "How Opportunities Open", desc: "Through job-role simulations, structured projects, mentor feedback, capability assessments, and Demo Day visibility.", icon: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" },
            { title: "Paid Internship Pathways", desc: "High-performing learners may qualify for paid internships based on portfolio strength and demonstrated capability.", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
            { title: "Eligibility", desc: "Open to freshers who are consistent and committed to completing guided tasks and projects.", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }
          ].map((item, idx) => (
            <motion.div key={idx} variants={cardVariants} whileHover="hover" className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-[#22c55e]/50 cursor-default transition-colors group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <motion.div className="relative z-10 w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center text-[#22c55e] mb-6 border border-zinc-700" whileHover={{ rotate: 10, scale: 1.1, backgroundColor: "#064e3b", borderColor: "#22c55e" }}>
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path></svg>
              </motion.div>
              <h3 className="relative z-10 text-lg font-bold text-white mb-3">{item.title}</h3>
              <p className="relative z-10 text-zinc-400 text-sm leading-relaxed">{highlightKeywords(item.desc)}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

