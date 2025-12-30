"use client";
import React from "react";
import { SimulationHero } from "@/components/HiringSimulation/SimulationHero";
import { SimulationIntro } from "@/components/HiringSimulation/SimulationIntro";
import { WhySimulationTalent } from "@/components/HiringSimulation/WhySimulationTalent";
import { SimulationFeatures } from "@/components/HiringSimulation/SimulationFeatures";
import RecruiterReceives from "@/components/HiringSimulation/RecruiterReceives";
import { SimulationStats } from "@/components/HiringSimulation/SimulationStats";
import { EnterpriseBenefits } from "@/components/HiringSimulation/EnterpriseBenefits";
import PlacementTestimonialsEditorial from "@/components/placement/PlacementTestimonialsEditorial";
import { PlacementCta } from "@/components/placement/PlacementCta";
import FAQs from "@/components/course-overview/faqs";

const simulationFAQs = [
  {
    question: "What are role simulations?",
    answer: "Role simulations are structured, mentor-evaluated tasks that mirror real job responsibilities. Students work through scenarios that test execution, communication, problem-solving, and role understanding."
  },
  {
    question: "How are simulations evaluated?",
    answer: "Each simulation deliverable is reviewed by experienced mentors for clarity, execution quality, and impact. Students receive detailed feedback and performance scores across multiple dimensions."
  },
  {
    question: "What roles are covered?",
    answer: "Simulations are built for Software Engineering, Product Management, Design, Marketing, and Operations roles. Each track is aligned with real-world responsibilities and industry expectations."
  },
  {
    question: "How do I access candidate portfolios?",
    answer: "Every simulation-trained candidate has a verified SkillVita portfolio containing all their work, evaluations, mentor feedback, and performance data. You receive direct access during the hiring process."
  },
  {
    question: "Why hire simulation-trained candidates?",
    answer: "They enter the job with practiced capability, not just theoretical knowledge. They understand real workflows, communicate decisively, and require less orientation during onboarding."
  },
  {
    question: "What makes SkillVita simulations different?",
    answer: "Our simulations are mentor-led, structured around real responsibilities, and produce verifiable deliverables. Every candidate's work is evaluated consistently, giving you objective, comparable data."
  }
];

export default function HiringSimulationPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black -mt-5">
      <SimulationHero />
      <SimulationIntro />
      <WhySimulationTalent />
      <SimulationFeatures />
      <RecruiterReceives />
      <SimulationStats />
      <EnterpriseBenefits />
      <PlacementTestimonialsEditorial />
      <PlacementCta />
      <FAQs faqs={simulationFAQs} />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": "https://skillvita.in/hiring-simulation/#webpage",
              "url": "https://skillvita.in/hiring-simulation",
              "name": "SkillVita Hiring Simulation | Hire Role-Trained Talent",
              "description": "Assess execution, clarity, and role understanding through structured, mentor-evaluated simulations. Hire talent trained in real-world scenarios.",
              "breadcrumb": { "@id": "https://skillvita.in/hiring-simulation/#breadcrumb" },
              "publisher": { "@id": "https://skillvita.in/#organization" },
              "mainEntity": { "@id": "https://skillvita.in/hiring-simulation/#software" }
            },
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "@id": "https://skillvita.in/hiring-simulation/#software",
              "name": "SkillVita Hiring Simulation",
              "operatingSystem": "Web",
              "applicationCategory": "BusinessApplication",
              "description": "A web-based testing system and hiring workflow platform that evaluates candidates through role-specific simulations, mentor feedback, and verified portfolios.",
              "provider": { "@id": "https://skillvita.in/#organization" },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "INR"
              },
              "sameAs": [
                "https://www.linkedin.com/company/skillvita/",
                "https://www.instagram.com/skillvita.in/"
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              "name": "SkillVita Simulation Framework Workflow",
              "description": "How the SkillVita hiring simulation identifies and verifies job-ready talent.",
              "step": [
                {
                  "@type": "HowToStep",
                  "name": "Role-Aligned Tracks",
                  "text": "Simulations built for Software, Product, Design, Marketing, and Operations roles—mirroring real job responsibilities.",
                  "url": "https://skillvita.in/hiring-simulation#simulation-features"
                },
                {
                  "@type": "HowToStep",
                  "name": "Mentor Evaluation",
                  "text": "Each deliverable reviewed for clarity, execution, and impact by experienced mentors with detailed feedback.",
                  "url": "https://skillvita.in/hiring-simulation#simulation-features"
                },
                {
                  "@type": "HowToStep",
                  "name": "Capability Scorecards",
                  "text": "Performance scores, insights, and progression data—complete visibility into strengths, weaknesses, and growth.",
                  "url": "https://skillvita.in/hiring-simulation#simulation-features"
                },
                {
                  "@type": "HowToStep",
                  "name": "Verified Portfolio Proof",
                  "text": "All work consolidated into verified SkillVita portfolios with direct access to deliverables and performance data.",
                  "url": "https://skillvita.in/hiring-simulation#simulation-features"
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": simulationFAQs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "@id": "https://skillvita.in/hiring-simulation/#breadcrumb",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://skillvita.in/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Hiring Simulation",
                  "item": "https://skillvita.in/hiring-simulation"
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://skillvita.in/#organization",
              "name": "SkillVita",
              "url": "https://skillvita.in",
              "logo": "https://skillvita.in/icon.svg",
              "sameAs": [
                "https://www.linkedin.com/company/skillvita/",
                "https://www.instagram.com/skillvita.in/"
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "Review",
              "itemReviewed": {
                "@type": "SoftwareApplication",
                "@id": "https://skillvita.in/hiring-simulation/#software"
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "author": {
                "@type": "Person",
                "name": "Dr. Rajesh Kumar"
              },
              "reviewBody": "SkillVita Placement Tech transformed how we manage our placement cell. The automated workflows save us countless hours, and the intelligent matching ensures our students get opportunities that truly fit their skills."
            }
          ])
        }}
      />
    </div>
  );
}
