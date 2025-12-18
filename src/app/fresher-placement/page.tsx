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
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Fresher Placement Program | SkillVita",
            "description": "Build job-ready skills, real proof-of-work, and a portfolio that helps you stand out before placement season even begins.",
            "url": "https://main-revitalize.vercel.app/fresher-placement",
            "isPartOf": {
              "@type": "Website",
              "name": "SkillVita",
              "url": "https://main-revitalize.vercel.app"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOccupationalProgram",
            "name": "Fresher Placement Program",
            "description": "A structured program providing clarity, guided execution, and mentor-reviewed outcomes to build a professional identity and portfolio for placement success.",
            "provider": {
              "@type": "Organization",
              "name": "SkillVita",
              "url": "https://main-revitalize.vercel.app"
            },
            "educationalCredentialAwarded": "Placement Readiness Profile",
            "occupationalCategory": "Career Development",
            "offers": {
              "@type": "Offer",
              "category": "Educational Program"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://main-revitalize.vercel.app"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Fresher Placement",
                "item": "https://main-revitalize.vercel.app/fresher-placement"
              }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SkillVita",
            "url": "https://main-revitalize.vercel.app",
            "logo": {
              "@type": "ImageObject",
              "url": "https://main-revitalize.vercel.app/skillvita_icon.svg"
            }
          })
        }}
      />
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
