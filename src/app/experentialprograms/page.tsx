"use client";
import React, { useEffect } from "react";
import HeroSection from "@/components/experentialprograms/HeroSection";
import OverviewSection from "@/components/experentialprograms/OverviewSection";
import WhyExperiential from "@/components/experentialprograms/WhyExperiential";
import Highlights from "@/components/experentialprograms/Highlights";
import ExperienceFlow from "@/components/experentialprograms/ExperienceFlow";
import ValueProposition from "@/components/experentialprograms/ValueProposition";
import Audience from "@/components/experentialprograms/Audience";
import FinalCTA from "@/components/experentialprograms/FinalCTA";
import ExperientialQA from "@/components/experentialprograms/ExperientialQA";

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
      <Audience />

      {/* Community Q&A Section */}
      <section className="py-16 bg-black relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-outfit text-white">
              Community Q&A
            </h2>
            <p className="text-lg text-gray-400">
              Common technical questions discussed by our community
            </p>
          </div>

          <div className="bg-[#18181B] rounded-2xl p-8 border border-[#27272A] shadow-lg">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-10 h-10 rounded-full bg-green-900/30 flex items-center justify-center text-green-400 font-bold text-xl">
                  Q
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  How does Redis help JWT authentication?
                </h3>
                <p className="text-gray-400 mb-6">
                  Why is Redis used with JWT tokens?
                </p>

                <div className="bg-black/40 rounded-xl p-6 border border-gray-800">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-green-900/30 flex items-center justify-center text-green-400 font-bold text-sm">
                        A
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-300">
                        Redis helps by storing token blacklists and session metadata.
                        <span className="block mt-2 text-sm text-green-400 font-medium">
                          ✓ Accepted Answer
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-800 flex justify-between items-center text-sm text-gray-400">
              <span>Asked by Community Member</span>
              <span>1 Answer</span>
            </div>
          </div>
        </div>
      </section>



      {/* Structured Data */}
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

