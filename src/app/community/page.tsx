"use client";
import React, { useRef } from "react";
import CommunityHero from "@/components/Community/Hero";
import WhyCommunities from "@/components/Community/WhyCommunities";
import LearningSpaces from "@/components/Community/LearningSpaces";
import CampusCommunities from "@/components/Community/CampusCommunities";
import PointsRewards from "@/components/Community/PointsRewards";
import ProgramsEvents from "@/components/Community/ProgramsEvents";
import StudentOutcomes from "@/components/Community/StudentOutcomes";
import CommunityCTA from "@/components/Community/CommunityCTA";
import Testimonials from "@/components/landing-page/Testimonials";
import FAQs from "@/components/course-overview/faqs";

const communityFAQs = [
  {
    question: "What is SkillVita Student Community?",
    answer: "SkillVita Student Community is a vibrant, skill-based ecosystem where students come together to learn, collaborate on projects, build portfolios, and unlock real-world opportunities. It's powered by peer learning, mentorship, and hands-on execution."
  },
  {
    question: "How do Campus Communities work?",
    answer: "Campus Communities are student-led innovation ecosystems structured like modern tech organizations. Each campus has a Node (leadership core) that sets goals and coordinates, and Squads (execution teams) that work on projects, design, content, research, and events."
  },
  {
    question: "What are VitaCoins and how do I earn them?",
    answer: "VitaCoins are rewards you earn by participating in community activities, completing projects, attending workshops, and contributing value. You can redeem VitaCoins for courses, certifications, mock interviews, mentorship sessions, and premium access."
  },
  {
    question: "What kind of events and programs are conducted?",
    answer: "We conduct hackathons across all domains, bootcamps, upskilling programs, real-world project simulations, mentor-led learning tracks, skill challenges, tech talks, fireside sessions, and creative jams — all designed to help you become industry-ready."
  },
  {
    question: "How does the portfolio system work?",
    answer: "Every activity you complete — projects, tasks, events, workshops, leadership roles — is automatically added to your verified SkillVita portfolio. This becomes tangible proof-of-work that recruiters can see and trust."
  },
  {
    question: "Can I join if my college doesn't have a SkillVita Campus Community?",
    answer: "Yes! You can join our physical learning spaces or participate in our online community programs. You can also help start a SkillVita Campus Community at your college by reaching out to us."
  },
  {
    question: "What opportunities are available through the community?",
    answer: "Members gain access to internships, freelancing opportunities, priority hiring from our partners, skill challenges, mentorship hours, leadership roles, and exclusive learning resources. Your contributions translate directly into opportunities."
  },
  {
    question: "Is there a fee to join the community?",
    answer: "SkillVita Community membership is open to all students. While basic participation is free, some premium programs, certifications, and exclusive resources may require VitaCoins or enrollment fees."
  }
];

function CommunityPage() {
  const faqRef = useRef<HTMLDivElement>(null);

  return (
    <main className="font-sans antialiased bg-black selection:bg-[#22c55e] selection:text-black overflow-x-hidden">
      {/* Hero Section */}
      <CommunityHero />

      {/* Why SkillVita Communities */}
      <WhyCommunities />

      {/* Learning Spaces */}
      <LearningSpaces />

      {/* Campus Communities Structure */}
      <CampusCommunities />

      {/* Points, Rewards & Governance */}
      <PointsRewards />

      {/* Programs & Events */}
      <ProgramsEvents />

      {/* Student Outcomes */}
      <StudentOutcomes />

      {/* Testimonials - Reused */}
      <Testimonials />

      {/* Final CTA */}
      <CommunityCTA />

      {/* FAQs */}
      <div ref={faqRef} className="bg-black">
        <FAQs faqs={communityFAQs} />
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": "https://skillvita.in/community/#webpage",
              "url": "https://skillvita.in/community",
              "name": "Community | SkillVita",
              "description": "Join a fast-growing skill-based student ecosystem designed for future-ready learners. Learn with peers, work on projects, earn credentials, and unlock real opportunities.",
              "breadcrumb": { "@id": "https://skillvita.in/community/#breadcrumb" },
              "publisher": { "@id": "https://skillvita.in/#organization" }
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": communityFAQs.map(faq => ({
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
              "@id": "https://skillvita.in/community/#breadcrumb",
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
                  "name": "Community",
                  "item": "https://skillvita.in/community"
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
    </main>
  );
}

export default CommunityPage;
