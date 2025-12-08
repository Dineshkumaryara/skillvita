"use client";
import Header from "@/components/projects/header";
import { useRef, useEffect, useMemo, useState } from "react";
 
import ProjectCard from "@/components/projects/ProjectCard";
import { PROJECTS } from "@/data/projectsData";
import ProjectsLowerSection from "@/app/projects/_components/lower";
import Preend from "./_components/preend";
import End from "./_components/end";

type Project = {
  _id: string;
  title: string;
  category: string;
  difficulty: "begineer" | "Intermediate" | "Hard";
  objective: string;
  skill: string[];
  type?: string;
};

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
      category: "Final Year",
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

  const allProjects = filteredProjects;
  const totalPages = Math.max(1, Math.ceil(allProjects.length / itemsPerPage));
  const displayedAll = allProjects.slice(
    (currentPage - 1) * itemsPerPage,
    (currentPage - 1) * itemsPerPage + itemsPerPage
  );

  return (
    <div className="bg-white dark:bg-black md:-mt-8 -mt-4">
      <Header targetFeaturedProjects={targetFeaturedProjects} />

      <div id="mid" className="px-4 max-w-6xl mx-auto">
        <h2 className="text-center text-2xl font-bold mt-10 mb-2">
          <span className="text-black dark:text-white">All </span>
          <span className="text-[#FE7465]">Projects</span>
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
            className="w-full py-3 px-6 pr-40 rounded-full bg-white dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#FE7465] text-white px-5 py-2 rounded-full font-semibold">
            Find Projects
          </button>
        </div>

        {displayedAll.length === 0 ? (
          <div className="text-center text-gray-500 dark:text-gray-400 py-8">No projects found.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayedAll.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        )}

        {allProjects.length > itemsPerPage && (
          <div className="flex justify-center mt-6 gap-1 flex-wrap">
            <button
              className="mx-1 px-3 py-1 rounded bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 disabled:opacity-50"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                className={`mx-1 px-3 py-1 rounded ${
                  currentPage === i + 1
                    ? "bg-[#FE7465] text-white"
                    : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
                }`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              className="mx-1 px-3 py-1 rounded bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 disabled:opacity-50"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </div>

      <ProjectsLowerSection />
      <Preend />
      <End />
    </div>
  );
}
// metadata must be exported from a server component; using global layout metadata
