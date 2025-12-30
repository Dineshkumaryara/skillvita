"use client";
import { useRef } from "react";
import { PartnershipHero } from "@/components/CollegePartnership/PartnershipHero";
import WhyPlacementSection from "../student-placements/(components)/WhyPlacementSection";
import StudentOpportunities from "../student-placements/(components)/StudentOpportunities";
import { WhyShiftMattersSection } from "@/components/CollegePartnership/WhyShiftMattersSection";
import { HowStudentsReady } from "@/components/CollegePartnership/HowStudentsReady";
import { InstitutionOutcomes } from "@/components/CollegePartnership/InstitutionOutcomes";
import { PartnershipDelivers } from "@/components/CollegePartnership/PartnershipDelivers";
import Testimonials from "@/components/landing-page/Testimonials";
import Last from "@/app/mock-interviews/(components)/Last";
import FAQs from "@/components/course-overview/faqs";

// Content for student-placements components
const whyContent = {
  earlyUpskilling: {
    title: "What Modern Colleges Need",
    description: "Recruiters now look for students who can demonstrate capability—not just clear exams. Colleges are expected to provide: Role clarity, Execution capability, Real project experience, Communication readiness, and Portfolios with proof-of-work. SkillVita helps institutions upgrade their placement ecosystem with structured, execution-driven learning."
  },
  whySkillvita: {
    title: "The New Standard of Campus Training",
    description: "SkillVita delivers a complete learning + doing + hiring system: Launch Job Simulations, Boost Simulations (industry workflows), Project-Based Learning Tracks, Project Certificates, Verified Proof-of-Work Portfolios, Full CRT Program, and Hiring Pathways & Recruiter Visibility. Students leave with documented capability—not just theoretical preparation."
  }
};

const opportunitiesContent = {
  title: "CRT That Actually Works",
  description: "CRT becomes more powerful when combined with real execution. Includes:",
  opportunities: [
    { title: "Aptitude (Quant, LR, DI)", icon: "📊", gradient: "from-blue-500 to-cyan-500" },
    { title: "Communication Training", icon: "💬", gradient: "from-purple-500 to-pink-500" },
    { title: "Technical Foundations", icon: "💻", gradient: "from-orange-500 to-red-500" },
    { title: "Mock Interviews", icon: "🎤", gradient: "from-green-500 to-emerald-500" },
    { title: "Resume & Portfolio Structuring", icon: "📝", gradient: "from-indigo-500 to-purple-500" },
    { title: "Simulation-Based Practice", icon: "🎯", gradient: "from-pink-500 to-rose-500" }
  ],
  footerText: "Students practice skills through real tasks—building confidence and readiness."
};

const partnershipFAQs = [
  {
    question: "What is SkillVita's College Partnership Program?",
    answer: "A comprehensive partnership that brings industry-aligned simulations, project-based learning, CRT training, and proof-of-work portfolios directly into your campus ecosystem to strengthen placement outcomes."
  },
  {
    question: "Why should our college partner with SkillVita now?",
    answer: "Recruiters now shortlist students who show execution, clarity, and real projects—not marks. Early adopters gain higher placement conversions, strong recruiter confidence, repeat hiring cycles, and stronger institutional reputation."
  },
  {
    question: "What does the partnership workflow look like?",
    answer: "We follow a 6-step process: Onboarding & Setup, CRT + Simulations Launch, Project Execution & Certifications, Portfolio Development, Recruiter Engagement, and Insights & Performance Reports."
  },
  {
    question: "How does the CRT program work?",
    answer: "Our CRT program includes Aptitude (Quant, LR, DI), Communication Training, Technical Foundations, Mock Interviews, Resume & Portfolio Structuring, and Simulation-Based Practice—all combined with real execution."
  },
  {
    question: "What outcomes can our institution expect?",
    answer: "Higher placement & internship conversions, stronger recruiter engagement, measurable skill improvement, consistent hiring cycles, improved institutional reputation, and data-driven dashboards for tracking progress."
  },
  {
    question: "How do students build their portfolios?",
    answer: "Every project, simulation, and certification students complete becomes verified proof-of-work in their growing portfolio, making them discoverable to recruiters who evaluate portfolios, not just marks."
  }
];

export default function CollegePartnership() {
  const joinRef = useRef<HTMLElement>(null!);

  return (
    <div className="bg-white dark:bg-black -mt-5">
      <PartnershipHero />

      {/* Why Modern Colleges Need This & New Standard */}
      <WhyPlacementSection
        earlyUpskilling={whyContent.earlyUpskilling}
        whySkillvita={whyContent.whySkillvita}
      />

      {/* CRT Program Components */}
      <StudentOpportunities
        {...opportunitiesContent}
      />

      {/* Why This Shift Matters Now */}
      <WhyShiftMattersSection />

      {/* How Students Become Job-Ready */}
      <HowStudentsReady />

      {/* Clear Outcomes for Institutions */}
      <InstitutionOutcomes />

      {/* Partnership That Delivers Results */}
      <PartnershipDelivers />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <Last targetJoinNow={joinRef} />

      {/* FAQs */}
      <FAQs faqs={partnershipFAQs} />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Campus Recruitment Training (CRT) | SkillVita",
            "description": "Upgrade your placement ecosystem with SkillVita's Campus Recruitment Training. Includes job simulations, project-based learning, and verified portfolios.",
            "url": "https://main-revitalize.vercel.app/crt",
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
            "name": "Campus Recruitment Training (CRT)",
            "description": "A complete learning + doing + hiring system integrating industry-aligned simulations, CRT training, and proof-of-work portfolios to strengthen placement performance.",
            "provider": {
              "@type": "Organization",
              "name": "SkillVita",
              "url": "https://main-revitalize.vercel.app"
            },
            "educationalCredentialAwarded": "Project Certificates & Verified Portfolio",
            "programPrerequisites": "Engineering and modern college students",
            "occupationalCategory": "Career Placement Preparation",
            "offers": {
              "@type": "Offer",
              "category": "Educational Program"
            },
            "hasPart": [
              {
                "@type": "Syllabus",
                "name": "Aptitude (Quant, LR, DI)"
              },
              {
                "@type": "Syllabus",
                "name": "Communication Training"
              },
              {
                "@type": "Syllabus",
                "name": "Technical Foundations"
              },
              {
                "@type": "Syllabus",
                "name": "Mock Interviews"
              },
              {
                "@type": "Syllabus",
                "name": "Resume & Portfolio Structuring"
              },
              {
                "@type": "Syllabus",
                "name": "Simulation-Based Practice"
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
            "@type": "HowTo",
            "name": "How Students Become Job-Ready through CRT",
            "description": "SkillVita's 5-step journey to prepare students for campus recruitment and placements.",
            "step": [
              {
                "@type": "HowToStep",
                "name": "Role Understanding",
                "itemListElement": [{ "@type": "HowToDirection", "text": "Through Launch simulations." }]
              },
              {
                "@type": "HowToStep",
                "name": "Skilling Through Doing",
                "itemListElement": [{ "@type": "HowToDirection", "text": "Guided tasks & structured execution." }]
              },
              {
                "@type": "HowToStep",
                "name": "Build Proof-of-Work",
                "itemListElement": [{ "@type": "HowToDirection", "text": "Projects, simulations, certificates." }]
              },
              {
                "@type": "HowToStep",
                "name": "Placement Readiness",
                "itemListElement": [{ "@type": "HowToDirection", "text": "CRT + communication + clarity." }]
              },
              {
                "@type": "HowToStep",
                "name": "Recruiter Visibility",
                "itemListElement": [{ "@type": "HowToDirection", "text": "Portfolios become discoverable." }]
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
            "@type": "FAQPage",
            "mainEntity": partnershipFAQs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
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
                "name": "CRT",
                "item": "https://main-revitalize.vercel.app/crt"
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
    </div>
  );
}
