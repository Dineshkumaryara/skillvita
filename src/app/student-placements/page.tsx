"use client";
import React, { useRef } from "react";
import PlacementHero from "./(components)/PlacementHero";
import WhyPlacementSection from "./(components)/WhyPlacementSection";
import StudentOpportunities from "./(components)/StudentOpportunities";
import SkillingJourney from "./(components)/SkillingJourney";
import StudentOutcomes from "./(components)/StudentOutcomes";
import UpskillDomains from "./(components)/UpskillDomains";
import PortfolioSection from "./(components)/PortfolioSection";
import Testimonials from "@/components/landing-page/Testimonials";
import Last from "@/app/mock-interviews/(components)/Last";
// import Sessions from "@/app/mock-interviews/(components)/Session";
import FAQs from "@/components/course-overview/faqs";

// Page Content
const heroContent = {
  badge: "SkillVita — Upskill & Placements for Students",
  headline: {
    line1: "Grow Faster.",
    highlight: "Stand Taller",
    line2: "in Placements"
  },
  subheadline: "Create a portfolio that moves you closer to your first job.",
  ctaPrimary: "Start Learning",
  ctaSecondary: "View Demo"
};

const whyContent = {
  earlyUpskilling: {
    title: "Why Early Upskilling",
    description: "Starting early helps students understand their strengths, gain practical exposure, and build confidence. Upskilling creates long-term advantages and helps students stay ahead in a competitive placement environment. Students who begin building skills earlier develop sharper clarity, stronger portfolios, and better interview readiness."
  },
  whySkillvita: {
    title: "Why SkillVita",
    description: "SkillVita turns your preparation into real capability with experienced mentors, simulated job roles, and team-based execution that feels like actual work. Demo Days make your progress visible, skill-journey tracking shows how fast you're growing, and top performers may unlock paid internship opportunities. With a focus on doing over theory, every task you complete becomes tangible proof of what you can achieve."
  }
};

const opportunitiesContent = {
  title: "Student Opportunities",
  description: "SkillVita provides structured opportunities that help students build, demonstrate, and present capability:",
  opportunities: [
    { title: "Skill-Based Projects", icon: "💼", gradient: "from-blue-500 to-cyan-500" },
    { title: "Certification Challenges", icon: "🎓", gradient: "from-purple-500 to-pink-500" },
    { title: "Industry Tasks", icon: "🎯", gradient: "from-orange-500 to-red-500" },
    { title: "Team workflows & simulations", icon: "👥", gradient: "from-green-500 to-emerald-500" },
    { title: "Mentorship Support", icon: "🤝", gradient: "from-indigo-500 to-purple-500" },
    { title: "Capability Assessments", icon: "📊", gradient: "from-pink-500 to-rose-500" },
    { title: "Demo Day showcases", icon: "🎤", gradient: "from-amber-500 to-orange-500" }
  ],
  footerText: "These experiences help students stand out during internships and placements."
};

const studentPlacementFAQs = [
  {
    question: "What is SkillVita's Student Placement Program?",
    answer: "A structured upskilling journey that helps students build placement-ready portfolios through real projects, simulations, and mentor-backed feedback."
  },
  {
    question: "When should I start preparing for placements?",
    answer: "The earlier the better! Starting in your 2nd or 3rd year gives you time to build strong skills, complete multiple projects, and gain confidence before placement season."
  },
  {
    question: "What kind of projects will I work on?",
    answer: "You'll work on skill-based projects, certification challenges, industry tasks, and team simulations that mirror real job scenarios."
  },
  {
    question: "Do I get mentorship support?",
    answer: "Yes! You'll get guidance from experienced mentors who provide feedback, direction, and help you strengthen your placement readiness."
  },
  {
    question: "How does the portfolio builder work?",
    answer: "Every project, task, and learning outcome you complete on SkillVita is automatically added to your portfolio as verified proof-of-work, creating a growing record of your capabilities."
  },
  {
    question: "Are there opportunities for paid internships?",
    answer: "Top performers may unlock paid internship opportunities based on their skill journey, project quality, and demo day performances."
  }
];

function StudentPlacementsPage() {
  const joinRef = useRef<HTMLElement>(null!);

  const scrollToSessions = () => {
    if (joinRef.current) {
      joinRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white dark:bg-black">
      {/* Hero Section with Placement-specific content */}
      <PlacementHero
        {...heroContent}
        onStartLearning={scrollToSessions}
      />

      {/* Why Early Upskilling & Why SkillVita */}
      <WhyPlacementSection
        earlyUpskilling={whyContent.earlyUpskilling}
        whySkillvita={whyContent.whySkillvita}
      />

      {/* Student Opportunities */}
      <StudentOpportunities
        {...opportunitiesContent}
      />

      {/* How It Works - Structured Skilling Journey */}
      <SkillingJourney />

      {/* Student Outcomes */}
      <StudentOutcomes />

      {/* Upskill Domains */}
      <UpskillDomains />

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Join Sessions for Career Guidance - Reused */}
      {/* <Sessions ref={joinRef} /> */}

      {/* Testimonials - Reused */}
      <Testimonials />

      {/* CTA Section - Reused */}
      <Last targetJoinNow={joinRef} />

      {/* FAQs - Reused */}
      <FAQs faqs={studentPlacementFAQs} />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Student Placements & Success Stories | SkillVita",
            "description": "Create a portfolio that moves you closer to your first job. Real placement outcomes and student success stories from SkillVita's upskilling journey.",
            "url": "https://main-revitalize.vercel.app/student-placements",
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
            "@type": "ItemList",
            "name": "Student Success Stories",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@type": "Person",
                  "name": "Gauthami Kulkarni",
                  "jobTitle": "Full Stack Developer",
                  "description": "Learned coding step by step through projects and mentorship. Ready for dream job."
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@type": "Person",
                  "name": "Sai Kiran",
                  "jobTitle": "Data Analyst",
                  "description": "Smart move to take Data Analytics course. Ready to work as a data analyst."
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@type": "Person",
                  "name": "Aparna Ch",
                  "jobTitle": "Data Scientist",
                  "description": "Well-prepared and knowledgeable through practical curriculum tailored to real-world scenarios."
                }
              },
              {
                "@type": "ListItem",
                "position": 4,
                "item": {
                  "@type": "Person",
                  "name": "Sheetal S",
                  "jobTitle": "AI Professional",
                  "description": "Learned artificial intelligence through interesting projects and smart mentors."
                }
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
            "mainEntity": studentPlacementFAQs.map(faq => ({
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
                "name": "Student Placements",
                "item": "https://main-revitalize.vercel.app/student-placements"
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

export default StudentPlacementsPage;
