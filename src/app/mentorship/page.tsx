import { HeroSection } from '@/components/mentorship/hero-section';
import { DomainsSection } from '@/components/mentorship/domains-section';
import { WinnersSection } from '@/components/mentorship/winners-section';
import { EventsSection } from '@/components/mentorship/events-section';
import { EventCtaSection } from '@/components/events/event-cta-section';

export default function MentorshipPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black -mt-5">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Expert Mentorship & Tech Workshops | SkillVita",
            "description": "Seek industry-level mentorship and collaborations. Bridging the gap between academic learning and industry requirements through hands-on workshops and real-world projects.",
            "url": "https://main-revitalize.vercel.app/mentorship",
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
            "name": "SkillVita Mentorship Program",
            "description": "Industry-level mentorship and collaborations for the next generation of builders. Focuses on bridging the gap between academic learning and industry requirements.",
            "provider": {
              "@type": "Organization",
              "name": "SkillVita",
              "url": "https://main-revitalize.vercel.app"
            },
            "educationalCredentialAwarded": "Mentorship Certificate & Industry Exposure",
            "occupationalCategory": "Technical Mentorship",
            "offers": {
              "@type": "Offer",
              "category": "Educational Program"
            },
            "hasPart": [
              { "@type": "Syllabus", "name": "Web Development" },
              { "@type": "Syllabus", "name": "UI/UX Design" },
              { "@type": "Syllabus", "name": "Agentic AI" },
              { "@type": "Syllabus", "name": "Mobile Development" },
              { "@type": "Syllabus", "name": "Cloud Computing" },
              { "@type": "Syllabus", "name": "Data Science" },
              { "@type": "Syllabus", "name": "DevOps" },
              { "@type": "Syllabus", "name": "Cybersecurity" },
              { "@type": "Syllabus", "name": "Blockchain" },
              { "@type": "Syllabus", "name": "Game Development" },
              { "@type": "Syllabus", "name": "AR/VR" },
              { "@type": "Syllabus", "name": "IoT" }
            ]
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
                "name": "Mentorship",
                "item": "https://main-revitalize.vercel.app/mentorship"
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
      <HeroSection />
      <div className="max-w-7xl mx-auto px-6">
        <hr className="border-t border-gray-200 dark:border-gray-800" />
      </div>
      <DomainsSection />
      <WinnersSection />
      <EventsSection />
      <EventCtaSection />
    </div>
  );
}
