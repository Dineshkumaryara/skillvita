"use client";
import Hero from "../../components/hiringportal/Hero";
import Overview from "../../components/hiringportal/Overview";
import WhySkillVita from "../../components/hiringportal/WhySkillVita";
import PortfolioDetail from "../../components/hiringportal/PortfolioDetail";
import Steps from "../../components/hiringportal/Steps";
import TalentPerformance from "../../components/hiringportal/TalentPerformance";
import Categories from "../../components/hiringportal/Categories";

export default function HiringPortalPage() {
  return (
    <main className="min-h-screen font-sans text-white bg-black selection:bg-green-500/30 selection:text-green-200 overflow-x-hidden">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Hiring Portal | SkillVita",
            "description": "Access a curated pipeline of job-ready students with portfolios built through real simulations, projects, team workflows, and capability assessments.",
            "url": "https://main-revitalize.vercel.app/hiringportal",
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
            "@type": "SoftwareApplication",
            "name": "SkillVita Hiring Portal",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "A hiring platform based on execution and verified proof-of-work rather than resumes. Discover candidates through real projects and role-based simulations.",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "INR"
            },
            "featureList": [
              "Post Jobs",
              "Source Profiles",
              "Evaluate Portfolios",
              "Simulated Experience Assessments",
              "Capability Scores"
            ],
            "provider": {
              "@type": "Organization",
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
                "name": "Hiring Portal",
                "item": "https://main-revitalize.vercel.app/hiringportal"
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
      <Hero
        eyebrow=""
        title={(
          <>
            Hire <span className="text-green-500 relative inline-block">
              Better
              <span className="absolute bottom-0 left-0 w-full h-1 bg-green-500/20 rounded-full blur-sm"></span>
            </span>. <span className="text-green-500 relative inline-block">
              Faster
              <span className="absolute bottom-0 left-0 w-full h-1 bg-green-500/20 rounded-full blur-sm"></span>
            </span>. <br className="hidden lg:block" />
            With <span className="text-white relative inline-block">Verified</span>{" "}
            <span className="text-green-500 relative inline-block">
              Proof-of-Work
              <span className="absolute bottom-0 left-0 w-full h-1 bg-green-500/20 rounded-full blur-sm"></span>
            </span>.
          </>
        )}
        subtitle="Access a curated pipeline of job-ready students with portfolios built through real simulations, projects, team workflows, and capability assessments."
        ctaLabel="Start Hiring"
        ctaHref="#"
      />
      <Overview />
      <WhySkillVita />
      <PortfolioDetail />
      <Steps />
      <TalentPerformance />
      <Categories />

    </main>
  );
}
