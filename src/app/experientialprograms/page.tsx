"use client";
import React, { useEffect } from "react";
import HeroSection from "@/components/experientialprograms/HeroSection";
import OverviewSection from "@/components/experientialprograms/OverviewSection";
import WhyExperiential from "@/components/experientialprograms/WhyExperiential";
import Highlights from "@/components/experientialprograms/Highlights";
import ExperienceFlow from "@/components/experientialprograms/ExperienceFlow";
import ValueProposition from "@/components/experientialprograms/ValueProposition";
import Audience from "@/components/experientialprograms/Audience";
import FinalCTA from "@/components/experientialprograms/FinalCTA";
import ExperientialQA from "@/components/experientialprograms/ExperientialQA";

const experientialFAQs = [
  {
    question: "How is this different from an internship?",
    answer: "Experiential programs focus on specific skill acquisition through guided projects and mentorship, whereas internships are role-based work experiences. These programs are designed to build your portfolio before you apply for internships."
  },
  {
    question: "Do I get a certificate?",
    answer: "Yes, you receive a certificate of completion that validates the specific skills and projects you've mastered during the program."
  },
  {
    question: "What is the duration?",
    answer: "Programs typically run for 4-8 weeks, with flexible schedules designed for students and working professionals."
  },
  {
    question: "Is mentorship included?",
    answer: "Absolutely. You get 1:1 mentorship from industry experts who review your code and guide your project implementation."
  }
];

export default function ExperentialProgramsPage() {
  useEffect(() => {
    const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("active");
      });
    }, observerOptions);

    document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => observer.observe(el));

    const timelineContainer = document.querySelector<HTMLElement>(".timeline-container");
    const timelineProgress = document.getElementById("timelineProgress");
    const timelineSteps = Array.from(document.querySelectorAll<HTMLElement>(".timeline-step"));

    const onScroll = () => {
      if (!timelineContainer || !timelineProgress) return;
      const rect = timelineContainer.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight && rect.bottom > 0) {
        const totalHeight = rect.height;
        const visibleHeight = Math.min(totalHeight, Math.max(0, windowHeight - rect.top - windowHeight / 2 + 200));
        const percentage = (visibleHeight / totalHeight) * 100;
        timelineProgress.style.height = `${Math.min(100, Math.max(0, percentage))}%`;
        timelineSteps.forEach((step) => {
          const stepRect = step.getBoundingClientRect();
          if (stepRect.top < windowHeight / 2 + 100) step.classList.add("active");
          else step.classList.remove("active");
        });
      }
    };
    window.addEventListener("scroll", onScroll);

    const tiltElements = document.querySelectorAll<HTMLElement>(".js-tilt");
    const handleMove = (el: HTMLElement, e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`;
    };
    const handleLeave = (el: HTMLElement) => {
      el.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1,1,1)";
    };
    tiltElements.forEach((el) => {
      el.addEventListener("mousemove", (e) => handleMove(el, e as MouseEvent));
      el.addEventListener("mouseleave", () => handleLeave(el));
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
      tiltElements.forEach((el) => {
        el.removeEventListener("mousemove", (e) => handleMove(el, e as MouseEvent));
        el.removeEventListener("mouseleave", () => handleLeave(el));
      });
    };
  }, []);

  return (
    <main className="antialiased text-white bg-black selection:bg-[#22c55e] selection:text-black">
      <HeroSection />
      <OverviewSection />
      <WhyExperiential />
      <Highlights />
      <ExperienceFlow />
      <ValueProposition />
      <Audience />
      <ExperientialQA faqs={experientialFAQs} />






      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Experiential Programs | SkillVita",
            "description": "Hands-on experiential programs that simulate real job workflows, bridging the gap between learning and internships.",
            "url": "https://main-revitalize.vercel.app/experientialprograms",
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
            "name": "Experiential Programs",
            "description": "Structured experiential learning programs designed to build portfolio-ready proof of work through role-based simulations and guided projects.",
            "provider": {
              "@type": "Organization",
              "name": "SkillVita",
              "url": "https://main-revitalize.vercel.app"
            },
            "timeToComplete": "P4W",
            "educationalCredentialAwarded": "Certificate of Completion",
            "occupationalCategory": "Career Skills, Technology, Business, Design",
            "hasCourse": {
              "@type": "Course",
              "name": "Experiential Learning Track",
              "description": "A 4-8 week program focusing on role-based simulations, capability tasks, and mentor-guided projects."
            },
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
            "@type": "FAQPage",
            "mainEntity": experientialFAQs.map(faq => ({
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
                "name": "Experiential Programs",
                "item": "https://main-revitalize.vercel.app/experientialprograms"
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

      <FinalCTA />
      <style jsx global>{`
        .bg-grid-pattern { background-image: linear-gradient(to right, #18181b 1px, transparent 1px), linear-gradient(to bottom, #18181b 1px, transparent 1px); background-size: 40px 40px; mask-image: radial-gradient(circle at center, black, transparent 80%); }
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .js-tilt { transform-style: preserve-3d; transform: perspective(1000px); }
        .js-tilt-content { transform: translateZ(20px); }
        .img-matrix { filter: grayscale(100%) contrast(1.2) brightness(0.9); transition: all 0.5s ease; }
        .group:hover .img-matrix { filter: grayscale(0%) contrast(1) brightness(1); }
        .reveal { opacity: 0; transition: opacity 0.3s; }
        .reveal.active { opacity: 1; }
        .section-enter-fade.active { animation: fadeInUp 0.8s ease-out forwards; }
        .section-enter-slide-up { transform: translateY(40px); }
        .section-enter-slide-up.active { animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .section-enter-zoom { transform: scale(0.9); }
        .section-enter-zoom.active { animation: zoomIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        .section-enter-pop { transform: scale(0.95); }
        .section-enter-pop.active { animation: popIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        .section-enter-flip-up { transform: rotateX(8deg); transform-origin: bottom; }
        .section-enter-flip-up.active { animation: flipUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .section-enter-slide-left { transform: translateX(-50px); }
        .section-enter-slide-left.active { animation: slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .section-enter-slide-right { transform: translateX(50px); }
        .section-enter-slide-right.active { animation: slideInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes fadeInUp { 0% { opacity: 0; transform: translateY(30px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes zoomIn { 0% { opacity: 0; transform: scale(0.8); } 100% { opacity: 1; transform: scale(1); } }
        @keyframes slideInLeft { 0% { opacity: 0; transform: translateX(-50px); } 100% { opacity: 1; transform: translateX(0); } }
        @keyframes slideInRight { 0% { opacity: 0; transform: translateX(50px); } 100% { opacity: 1; transform: translateX(0); } }
        @keyframes popIn { 0% { opacity: 0; transform: scale(0.9); } 100% { opacity: 1; transform: scale(1); } }
        @keyframes flipUp { 0% { opacity: 0; transform: rotateX(15deg) translateY(10px); } 100% { opacity: 1; transform: rotateX(0deg) translateY(0); } }
        @keyframes float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-20px) } }
        @keyframes pulseNeon { 0%,100% { box-shadow: 0 0 5px rgba(34, 197, 94, 0.2), 0 0 10px rgba(34, 197, 94, 0.1) } 50% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.6), 0 0 30px rgba(34, 197, 94, 0.3) } }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-pulse-neon { animation: pulseNeon 3s infinite; }
      `}</style>
    </main>
  );
}

