import type { Metadata } from "next";
import type { Internship } from "@/lib/internships";
import { getInternships } from "@/lib/internships";
import Hero from "@/components/Internships/Hero";
import Overview from "@/components/Internships/Overview";
import WhyInternships from "@/components/Internships/WhyInternships";
import WhySkillVita from "@/components/Internships/WhySkillVita";
import HowItWorks from "@/components/Internships/HowItWorks";
import OutcomesGrid from "@/components/Internships/OutcomesGrid";
import PremiumAccordion from "@/components/Internships/PremiumAccordion";
import GetStarted from "@/components/Internships/GetStarted";
import ListViewClient from "@/components/Internships/ListViewClient";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Fingerprint } from "lucide-react";
import InternshipQA from "@/components/Internships/InternshipQA";

export const metadata: Metadata = {
  title: "Internships | SkillVita",
  description:
    "Explore verified internships with details on duration, skills, eligibility, and pay.",
};

const internshipFAQs = [
  {
    question: "Are these internships paid?",
    answer: "Details on stipends and pay are listed on each specific internship opportunity. We offer both paid and unpaid learning internships."
  },
  {
    question: "Do I get a certificate?",
    answer: "Yes, upon successful completion of the internship and verified project work, you receive a recognized certificate."
  },
  {
    question: "What is the duration?",
    answer: "Durations vary from 1 to 6 months depending on the role and your availability. Most are flexible to fit academic schedules."
  },
  {
    question: "Is it remote?",
    answer: "Most of our internships are remote-first, allowing you to work from anywhere. Some hybrid options may be available."
  }
];

export default async function InternshipsPage() {
  const internships = await getInternships();

  return (
    <main className="bg-black">
      <section>
        <Hero />
      </section>



      <section className="2xl:max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12">
        <Overview />
      </section>

      <section className="2xl:max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12">
        <HowItWorks />
      </section>

      <section className="2xl:max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12">
        <OutcomesGrid />
      </section>

      <section className="2xl:max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <WhyInternships />
      </section>

      <section className="2xl:max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 mt-7">
        <WhySkillVita />
      </section>

      <section className="2xl:max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-8">
        <PremiumAccordion />
      </section>

      <section className="2xl:max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative -mt-12 z-20 mx-auto max-w-4xl overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900 p-8 shadow-2xl md:p-12">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 h-[300px] w-[300px] rounded-full bg-emerald-500/10 blur-3xl filter" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-[300px] w-[300px] rounded-full bg-green-500/10 blur-3xl filter" />

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-neutral-800 border border-neutral-700 shadow-inner">
                <Fingerprint className="h-8 w-8 text-emerald-500" />
              </div>

              <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Your <span className="text-emerald-500">Portfolio</span> Becomes Your Voice
              </h2>

              <div className="mb-8 max-w-2xl space-y-4 text-lg text-neutral-400 leading-relaxed">
                <p>
                  SkillVita’s portfolio builder helps students present a sharp and consistent professional identity. Skills, projects, certifications, and internship outcomes come together to form a verified capability record that recruiters trust.
                </p>
                <p>
                  Everything you complete on SkillVita becomes <span className="text-emerald-400 font-medium">validated proof-of-work</span>, strengthening your portfolio with every project and internship you finish.
                </p>
              </div>

              <Link href="/profile/portfolio">
                <Button size="lg" className="h-14 rounded-full bg-emerald-600 px-8 text-base font-semibold text-white shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all hover:bg-emerald-700 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:-translate-y-0.5">
                  Build Your Portfolio
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>


        </div>
      </section>

      <section id="list" className="bg-black">
        <div className="2xl:max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <ListViewClient items={internships as Internship[]} />
        </div>
      </section>

      <InternshipQA faqs={internshipFAQs} />

      <section className="2xl:max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12">
        <GetStarted />
      </section>

      {/* Structured Data */}
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Internships | SkillVita",
            "description": "Explore verified internships with details on duration, skills, eligibility, and pay.",
            "url": "https://main-revitalize.vercel.app/internships",
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
            "@type": "CollectionPage",
            "url": "https://main-revitalize.vercel.app/internships#list",
            "name": "Internship Listings",
            "description": "Browse available internships",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": internships.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "JobPosting",
                  "title": item.title,
                  "description": `<p>Internship at ${item.company} in ${item.domain}.</p><p><strong>Skills:</strong> ${item.skills.join(', ')}</p><p><strong>Duration:</strong> ${item.duration}</p><p><strong>Type:</strong> ${item.type}</p>`,
                  "hiringOrganization": {
                    "@type": "Organization",
                    "name": item.company
                  },
                  "jobLocation": item.type === 'remote' ? {
                    "@type": "Place",
                    "name": "Remote"
                  } : {
                    "@type": "Place",
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": item.location,
                      "addressCountry": "IN"
                    }
                  },
                  "jobLocationType": item.type === 'remote' ? "TELECOMMUTE" : undefined,
                  "baseSalary": item.stipend ? {
                    "@type": "MonetaryAmount",
                    "currency": "INR",
                    "value": {
                      "@type": "QuantitativeValue",
                      "value": parseInt(item.stipend.replace(/[^0-9]/g, '')) || 0,
                      "unitText": "MONTH"
                    }
                  } : undefined,
                  "employmentType": "INTERN",
                  "datePosted": new Date().toISOString().split('T')[0],
                  "url": `https://main-revitalize.vercel.app/internships#internship-${item.id}`
                }
              }))
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
            "mainEntity": internshipFAQs.map(faq => ({
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
                "name": "Internships",
                "item": "https://main-revitalize.vercel.app/internships"
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



    </main>
  );
}
