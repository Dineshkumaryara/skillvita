"use client";
import React from "react";
import Hero from "@/components/FresherPlacement/Hero";
import Overview from "@/components/FresherPlacement/Overview";
import Pathways from "@/components/FresherPlacement/Pathways";
import WhyEarly from "@/components/FresherPlacement/WhyEarly";
import WhySkillVita from "@/components/FresherPlacement/WhySkillVita";
import Roadmap from "@/components/FresherPlacement/Roadmap";
import OutcomesDomains from "@/components/FresherPlacement/OutcomesDomains";
import PortfolioAdvantage from "@/components/FresherPlacement/PortfolioAdvantage";
import FinalCTA from "@/components/FresherPlacement/FinalCTA";

export default function FresherPlacementPage() {
  return (
    <main className="font-sans antialiased text-white bg-black selection:bg-[#22c55e] selection:text-black overflow-x-hidden">
      <Hero />
      <Overview />
      <Pathways />
      <WhyEarly />
      <WhySkillVita />
      <Roadmap />
      <OutcomesDomains />
      <PortfolioAdvantage />
      <FinalCTA />
    </main>
  );
}
