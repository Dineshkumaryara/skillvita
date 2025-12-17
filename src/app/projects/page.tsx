"use client";

import Script from "next/script";
import Header from "@/components/projects/header";
import { useRef, useEffect, useMemo, useState } from "react";

import ProjectCard from "@/components/projects/ProjectCard";
import { PROJECTS } from "@/data/projectsData";
import ProjectsLowerSection from "@/app/projects/_components/lower";
import Preend from "./_components/preend";
import End from "./_components/end";
import ProjectQA from "@/components/projects/ProjectQA";

type Project = {
  _id: string;
  title: string;
  category: string;
  difficulty: "begineer" | "Intermediate" | "Hard";
  objective: string;
  skill: string[];
  type?: string;
};

const projectFAQs = [
  {
    question: "What types of projects are available?",
    answer:
      "We offer a diverse range of projects including web development, mobile apps, data science, machine learning, blockchain, IoT, and cross-domain projects. All projects are designed to give you hands-on experience with real-world applications and emerging technologies.",
  },
  {
    question: "Do I need prior experience to start a project?",
    answer:
      "No prior experience is required for beginner-level projects. We offer projects categorized by difficulty levels - Beginner, Intermediate, and Hard.",
  },
  {
    question: "Will I receive mentorship during the project?",
    answer:
      "Yes! Every project comes with expert mentorship and guidance from experienced mentors.",
  },
  {
    question: "Can I work on projects in a team?",
    answer:
      "Yes, you can work individually or as part of a team based on your preference.",
  },
  {
    question: "Will I get a certificate upon project completion?",
    answer:
      "Yes, upon successful completion of your project, you'll receive a certificate of completion.",
  },
];

export default function Projects() {
  const targetFeaturedProjects = useRef(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    const mapped = PROJECTS.map<Project>((p) => ({
      _id: p.id,
      title: p.name,
      category: "Projects",
      difficulty: "Intermediate",
      objective: p.description,
      skill: p.skills,
      type: "real",
    }));
    setProjects(mapped);
  }, []);

  const filteredProjects = useMemo(() => {
    if (!searchQuery) return projects;
    const q = searchQuery.toLowerCase();
    return projects.filter(
      (p) => (p.title + (p.objective || "")).toLowerCase().includes(q)
    );
  }, [projects, searchQuery]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProjects.length / itemsPerPage)
  );

  const displayedProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      {/* ========= Structured Data: /projects page ========= */}
      <Script
        id="projects-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: PROJECTS.map((project, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "SoftwareApplication",
                name: project.name,
                description: project.description,
                applicationCategory: "DeveloperApplication",
                operatingSystem: "Web",
                url: `https://skillvita.coursevita.com/projects/${project.id}`,
                author: {
                  "@type": "Organization",
                  name: "SkillVita",
                },
              },
            })),
          }),
        }}
      />

      {/* ========= Existing UI ========= */}
      <div className="bg-white dark:bg-black md:-mt-8 -mt-4">
        <Header targetFeaturedProjects={targetFeaturedProjects} />

        <div id="mid" className="px-4 max-w-6xl mx-auto">
          <h2 className="text-center text-2xl font-bold mt-10 mb-2">
            <span className="text-black dark:text-white">All </span>
            <span className="text-accent-500">Projects</span>
          </h2>

          <p className="text-center text-gray-500 dark:text-gray-400 mb-6">
            Browse all projects and get started with an execution plan
          </p>

          <div className="max-w-xl mx-auto mb-6 relative">
            <input
              type="text"
              placeholder="Search Projects..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full py-3 px-6 rounded-full bg-white dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A]"
            />
          </div>

          {displayedProjects.length === 0 ? (
            <div className="text-center text-gray-500 py-8">
              No projects found.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {displayedProjects.map((project) => (
                <ProjectCard key={project._id} project={project} />
              ))}
            </div>
          )}

          {filteredProjects.length > itemsPerPage && (
            <div
              className="flex justify-center mt-8 gap-2 flex-wrap"
              role="navigation"
              aria-label="Pagination"
            >
              <button
                className="px-4 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentPage === 1}
                onClick={() => {
                  setCurrentPage((p) => Math.max(1, p - 1));
                  document
                    .getElementById("mid")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                aria-label="Previous page"
              >
                Prev
              </button>
              {[...Array(totalPages)].map((_, i) => {
                const page = i + 1;
                const isActive = page === currentPage;
                return (
                  <button
                    key={page}
                    onClick={() => {
                      setCurrentPage(page);
                      document
                        .getElementById("mid")
                        ?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    aria-current={isActive ? "page" : undefined}
                    className={
                      isActive
                        ? "px-4 py-2 rounded-md bg-brand-500 text-white shadow-sm"
                        : "px-4 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-700"
                    }
                    aria-label={`Go to page ${page}`}
                  >
                    {page}
                  </button>
                );
              })}
              <button
                className="px-4 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentPage === totalPages}
                onClick={() => {
                  setCurrentPage((p) => Math.min(totalPages, p + 1));
                  document
                    .getElementById("mid")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                aria-label="Next page"
              >
                Next
              </button>
            </div>
          )}
        </div>

        <ProjectsLowerSection />
        <Preend />

        {/* Community Q&A Section */}
        <div className="max-w-4xl mx-auto my-16 px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-outfit text-black dark:text-white">
              Community Q&A
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Common technical questions discussed by our community
            </p>
          </div>

          <div className="bg-white dark:bg-[#18181B] rounded-2xl p-8 border border-[#E4E4E7] dark:border-[#27272A] shadow-lg">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-10 h-10 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-400 font-bold text-xl">
                  Q
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                  How does Redis help JWT authentication?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Why is Redis used with JWT tokens?
                </p>

                <div className="bg-gray-50 dark:bg-black/40 rounded-xl p-6 border border-gray-100 dark:border-gray-800">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 font-bold text-sm">
                        A
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-700 dark:text-gray-300">
                        Redis helps by storing token blacklists and session metadata.
                        <span className="block mt-2 text-sm text-green-600 dark:text-green-400 font-medium">
                          ✓ Accepted Answer
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
              <span>Asked by Community Member</span>
              <span>1 Answer</span>
            </div>
          </div>
        </div>



        {/* Helper Scripts for FAQ and QAPage */}
        <Script
          id="faq-structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": projectFAQs.map(faq => ({
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
        <Script
          id="qa-structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
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
        <End />
      </div>
    </>
  );
}
