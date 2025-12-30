"use client";
import React, { useMemo, useState } from "react";

export type Item = {
  category: "tech" | "design" | "business";
  title: string;
  subtitle: string;
  image: string;
};

export const ITEMS: Item[] = [
  {
    category: "tech",
    title: "E-Commerce Microservices",
    subtitle: "Architecture & Deployment",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=800",
  },
  {
    category: "design",
    title: "HealthTracker App UI",
    subtitle: "Product Design Simulation",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800",
  },
  {
    category: "business",
    title: "Market Entry Strategy",
    subtitle: "Case Study & Analysis",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
  },
  {
    category: "tech",
    title: "AI Chat Integration",
    subtitle: "Full Stack Development",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800",
  },
  {
    category: "design",
    title: "Eco-Brand Identity",
    subtitle: "Branding & Visual Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800",
  },
  {
    category: "business",
    title: "Financial Modeling",
    subtitle: "Excel & Forecasting",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800",
  },
];

type Filter = "all" | Item["category"];

export default function PortfolioWall({ onOpenModal }: { onOpenModal: () => void }) {
  const [filter, setFilter] = useState<Filter>("all");
  const filtered = useMemo(() => {
    return filter === "all" ? ITEMS : ITEMS.filter((i) => i.category === filter);
  }, [filter]);

  return (
    <section id="wall-section" className="py-20 bg-zinc-900 border-t border-zinc-800" aria-label="Portfolio Gallery">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 md:mb-0 border-l-4 border-[#22c55e] pl-4">Featured Student Portfolios</h3>
          <div className="flex gap-3 overflow-x-auto pb-4 md:pb-0 w-full md:w-auto">
            {[
              { key: "all", label: "All" },
              { key: "tech", label: "Technology" },
              { key: "design", label: "Design" },
              { key: "business", label: "Business" },
            ].map((btn) => {
              const active = filter === btn.key;
              return (
                <button key={btn.key}
                  onClick={() => setFilter(btn.key as Filter)}
                  className={active ? "px-5 py-2 rounded-full text-sm font-bold bg-[#22c55e] text.black shadow-lg" : "px-5 py-2 rounded-full text-sm font-medium bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 border border-zinc-700"}
                >
                  {btn.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item, idx) => (
            <article key={idx} className="group rounded-xl">
              <div className="bg-zinc-950 rounded-xl border border-zinc-800 overflow-hidden shadow-xl h-full flex flex-col">
                <div className="relative h-56 overflow-hidden bg-zinc-900">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale contrast-95 brightness-90 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from.black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 flex-grow flex flex-col relative">
                  <h4 className="text-xl font-bold text-white mb-1 group-hover:text-[#4ade80] transition-colors">{item.title}</h4>
                  <p className="text-sm text-zinc-500 mb-4">{item.subtitle}</p>
                  <div className="flex gap-2 mb-6 mt-auto">
                    <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse"></span>
                    <span className="text-xs text-[#86efac] font-medium">Verified Outcome</span>
                  </div>
                  <button onClick={onOpenModal} className="w-full py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-sm font-bold text-white hover:bg-[#22c55e] hover:text-black hover:border-[#22c55e] transition-all">
                    View Portfolio
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
