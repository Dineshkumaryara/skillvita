"use client";
import React, { useState } from "react";
import Hero from "../../components/WallOfPortfolios/Hero";
import WhyMatter from "../../components/WallOfPortfolios/WhyMatter";
import WhatShow from "../../components/WallOfPortfolios/WhatShow";
import PortfolioWall from "../../components/WallOfPortfolios/PortfolioWall";
import WhatReveals from "../../components/WallOfPortfolios/WhatReveals";
import RecruitersStart from "../../components/WallOfPortfolios/RecruitersStart";
import FinalCTA from "../../components/WallOfPortfolios/FinalCTA";
import Modal from "../../components/WallOfPortfolios/Modal";
import WallQA from "../../components/WallOfPortfolios/WallQA";

const wallFAQs = [
  {
    question: "How do I get featured on the Wall?",
    answer: "Complete your projects and internships with distinction. Top performers are selected weekly to be featured on the Wall of Portfolios."
  },
  {
    question: "Who views these portfolios?",
    answer: "Our network of hiring partners, recruiters, and industry mentors regularly browse the Wall to identify top talent."
  },
  {
    question: "Can I share my portfolio link?",
    answer: "Yes! Your portfolio has a unique public URL that you can share on LinkedIn, resume, and social media."
  },
  {
    question: "Is it free to create a portfolio?",
    answer: "Every student builds a basic portfolio. Premium features like verified badges and video introductions are available in our advanced programs."
  }
];

export default function WallOfPortfoliosPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="antialiased text-white bg-black selection:bg-[#22c55e] selection:text-black">
      <Hero />
      <WhyMatter />
      <WhatShow />
      <PortfolioWall onOpenModal={() => setModalOpen(true)} />
      <WhatReveals />
      <RecruitersStart />

      <WallQA faqs={wallFAQs} />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": wallFAQs.map(faq => ({
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
            "@type": "QAPage",
            "mainEntity": {
              "@type": "Question",
              "name": "How does Redis help JWT authentication?",
              "text": "Why is Redis used with JWT tokens?",
              "answerCount": 1,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Redis helps by storing token blacklists and session metadata."
              }
            }
          })
        }}
      />

      <FinalCTA />
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
