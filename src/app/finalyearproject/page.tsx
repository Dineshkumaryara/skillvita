"use client";

import { useEffect, useMemo, useState } from "react";
import Preloader from "@/components/ui/PreLoader";
import ProjectCard from "@/components/projects/ProjectCard";
import { PROJECTS } from "@/data/projectsData";

type Project = {
  _id: string;
  title: string;
  category: string;
  difficulty: "begineer" | "Intermediate" | "Hard";
  objective: string;
  skill: string[];
  type?: string;
};

const FinalYearProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;


  useEffect(() => {
    setLoading(true);
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
    setLoading(false);
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

  if (loading) return <Preloader />;

  return (
    <div className="bg-white dark:bg-black p-6 -mt-5">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden mt-6 mb-6 px-6 py-28 md:px-20">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          >
            <source src="/videos/eventsHero.mp4" type="video/mp4" />
          </video>
          

          <div className="relative z-20 text-white max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold">Final Year Projects</h1>
            <h2 className="text-4xl md:text-6xl font-medium mt-1 mb-1">Learn, Build, Showcase.</h2>
            <p className="text-lg mt-2 mb-6">
              Explore real-world projects to elevate your portfolio. Get hands-on with
              modern tools and ship outcomes you’re proud of.
            </p>
            <div className="relative max-w-lg">
              <input
                type="text"
                placeholder="Search Projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-3 px-6 pr-40 rounded-full bg-transparent bg-opacity-10 border border-white text-white placeholder-white focus:outline-none"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-700 to-red-500 text-white px-5 py-2 rounded-full font-semibold">
                Find Projects
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-[#18181B] rounded-2xl p-5 border border-[#E4E4E7] dark:border-[#27272A] mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">All Projects</h2>
          </div>

          {displayedAll.length === 0 ? (
            <div className="text-center text-gray-500 dark:text-gray-400 py-8">No projects found.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
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
      </div>
    </div>
  );
};

export default FinalYearProjectsPage;
// metadata must be exported from a server component; using global layout metadata
