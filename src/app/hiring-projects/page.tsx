"use client";
import React, { useRef } from "react";
import PlacementHero from "@/app/student-placements/(components)/PlacementHero";
import WhyPlacementSection from "@/app/student-placements/(components)/WhyPlacementSection";
import StudentOpportunities from "@/app/student-placements/(components)/StudentOpportunities";
import HiringWorkflow from "@/components/HiringProjects/HiringWorkflow";
import RecruiterBenefits from "@/components/HiringProjects/RecruiterBenefits";
import HiringDomains from "@/components/HiringProjects/HiringDomains";
import Testimonials from "@/components/landing-page/Testimonials";
import Last from "@/app/mock-interviews/(components)/Last";
import FAQs from "@/components/course-overview/faqs";
import ProjectsList from "@/components/HiringProjects/ProjectsList";

const heroContent = {
  badge: "SkillVita Hiring Projects",
  headline: {
    line1: "Hire Talent That Proves",
    highlight: "Their Skills",
    line2: "With Real Projects"
  },
  subheadline: "Explore student projects, track progress, and post your own problem statements to evaluate candidates through meaningful, real-world work.",
  ctaPrimary: "View Hiring Projects",
  ctaSecondary: "Post a Problem Statement"
};

const whyContent = {
  earlyUpskilling: {
    title: "Why Hiring Through SkillVita Projects Works",
    description: "SkillVita Hiring Projects is a dedicated space for recruiters to discover, evaluate, and hire emerging talent based on actual project performance — not just resumes. Every project on SkillVita is designed, reviewed, and monitored by our expert team, ensuring that recruiters see authentic skills, real capabilities, and verified proof-of-work."
  },
  whySkillvita: {
    title: "Post Your Own Problem Statements",
    description: "If you have your own problem statement, simply submit it — our students will work on it under SkillVita mentorship, enabling you to assess their talent on your terms, using your real challenges. SkillVita manages the entire process: onboarding students, guiding them, mentoring them, and delivering high-quality outputs."
  }
};

const opportunitiesContent = {
  title: "Why Recruiters Choose SkillVita",
  description: "SkillVita provides unmatched transparency into student capability:",
  opportunities: [
    { title: "Real Skills, Proven Through Work", icon: "🎯", gradient: "from-blue-500 to-cyan-500" },
    { title: "Visibility Into Progress", icon: "📊", gradient: "from-purple-500 to-pink-500" },
    { title: "Custom Problem Statements", icon: "✏️", gradient: "from-orange-500 to-red-500" },
    { title: "Zero Guesswork in Hiring", icon: "🔍", gradient: "from-green-500 to-emerald-500" },
    { title: "Verified Proof-of-Work", icon: "✅", gradient: "from-indigo-500 to-purple-500" },
    { title: "Transparent Evaluation", icon: "👁️", gradient: "from-pink-500 to-rose-500" },
    { title: "Access to Mentored Talent", icon: "🤝", gradient: "from-amber-500 to-orange-500" }
  ]
};

const hiringFAQs = [
  {
    question: "What is SkillVita Hiring Projects?",
    answer: "A dedicated platform for recruiters to discover, evaluate, and hire emerging talent based on actual project performance and verified proof-of-work."
  },
  {
    question: "How can I post a custom problem statement?",
    answer: "Simply submit your problem statement through our platform. SkillVita will convert it into a structured, mentor-led project and assign it to the right students for execution."
  },
  {
    question: "What kind of projects can I view?",
    answer: "Browse ongoing and completed projects across tech, business, design, research, and more. View deliverables, timelines, and performance metrics for each project."
  },
  {
    question: "How do I track student progress?",
    answer: "You get access to a smart dashboard showing task completions, milestones, mentor feedback, skill assessments, work quality, and project submissions in real-time."
  },
  {
    question: "Are the projects verified?",
    answer: "Yes! Every completed project is evaluated and validated by SkillVita, ensuring the work you review is authentic, structured, and reliable."
  },
  {
    question: "What domains are covered?",
    answer: "Projects span across Technology & Engineering, Product & UI/UX Design, Business & Operations, Marketing & Growth, Creative & Content, Data & Research, Finance & Analytics, and Startup & Innovation."
  }
];

export default function HiringProjectsPage() {
  const joinRef = useRef<HTMLElement>(null!);

  const scrollToProjects = () => {
    if (joinRef.current) {
      joinRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white dark:bg-black">
      <PlacementHero
        {...heroContent}
        onStartLearning={scrollToProjects}
      />

      <WhyPlacementSection
        earlyUpskilling={whyContent.earlyUpskilling}
        whySkillvita={whyContent.whySkillvita}
      />

      <StudentOpportunities
        {...opportunitiesContent}
      />

      <HiringWorkflow />

      <ProjectsList />

      <RecruiterBenefits />

      <HiringDomains />

      <Testimonials />

      <Last targetJoinNow={joinRef} />

      <FAQs faqs={hiringFAQs} />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": "https://skillvita.in/hiring-projects/#webpage",
              "url": "https://skillvita.in/hiring-projects",
              "name": "SkillVita Hiring Projects | Hire Talent Through Real-World Work",
              "description": "Discover, evaluate, and hire emerging talent based on actual project performance and verified proof-of-work. Browse tech, design, and business projects.",
              "breadcrumb": { "@id": "https://skillvita.in/hiring-projects/#breadcrumb" },
              "publisher": { "@id": "https://skillvita.in/#organization" }
            },
            {
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "SkillVita Student Hiring Projects",
              "description": "A collection of verified student projects across multiple domains for recruiter evaluation.",
              "mainEntity": {
                "@type": "ItemList",
                "itemListElement": [] // Currently no project cards visible on UI (placeholder only)
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": hiringFAQs.map(faq => ({
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
              "@id": "https://skillvita.in/hiring-projects/#breadcrumb",
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
                  "name": "Hiring",
                  "item": "https://skillvita.in/hiring-simulation" // Closest relevant parent page
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Hiring Projects",
                  "item": "https://skillvita.in/hiring-projects"
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
            }
          ])
        }}
      />
    </div>
  );
}
