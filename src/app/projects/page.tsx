"use client";

import Script from "next/script";
import Header from "@/components/projects/header";
import { useRef, useEffect, useMemo, useState } from "react";

import ProjectCard from "@/components/projects/ProjectCard";
import { PROJECTS } from "@/data/projectsData";
import ProjectsLowerSection from "@/app/projects/_components/lower";
import Preend from "./_components/preend";
import End from "./_components/end";
import FAQs from "@/components/course-overview/faqs";

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
        <FAQs faqs={projectFAQs} />
        <End />
      </div>
    </>
  );
}
