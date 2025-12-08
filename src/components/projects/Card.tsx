/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectCard from "./ProjectCard";
import ProjectFilters from "./ProjectFilters";

const labels = ["All Projects", "Academic Projects", "Skill Projects"];
const itemsPerPage = 6;

export default function Card({
  targetFeaturedProjects,
}: {
  targetFeaturedProjects: any;
}) {
  const [projects, setProjects] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTab, setSelectedTab] = useState(0);
  const [filters, setFilters] = useState({
    searchQuery: "",
    category: "",
    skill: "",
    difficulty: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const noofpages = Math.ceil(filteredData.length / itemsPerPage);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_LINK}/projects`,
          {
            withCredentials: true,
          }
        );
        setProjects(res.data.projectsData);
        setFilteredData(res.data.projectsData);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const filterProjects = (currentFilters: any, currentTab: number) => {
    let filtered = projects;

    if (currentTab === 1)
      filtered = filtered.filter((p: any) => p.type === "mock");
    else if (currentTab === 2)
      filtered = filtered.filter((p: any) => p.type === "real");

    if (currentFilters.searchQuery)
      filtered = filtered.filter((p: any) =>
        (p.title + p.objective)
          .toLowerCase()
          .includes(currentFilters.searchQuery.toLowerCase())
      );

    if (currentFilters.category)
      filtered = filtered.filter((p: any) =>
        p.category.toLowerCase().includes(currentFilters.category.toLowerCase())
      );

    if (currentFilters.skill)
      filtered = filtered.filter((p: any) =>
        p.skill.some((s: string) =>
          s.toLowerCase().includes(currentFilters.skill.toLowerCase())
        )
      );

    if (currentFilters.difficulty)
      filtered = filtered.filter(
        (p: any) =>
          p.difficulty.toLowerCase() === currentFilters.difficulty.toLowerCase()
      );

    setFilteredData(filtered);
  };

  const handleTabChange = (index: number) => {
    setSelectedTab(index);
    setCurrentPage(1);
    filterProjects(filters, index);
  };

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
    setCurrentPage(1);
    filterProjects(newFilters, selectedTab);
  };

  return (
  <div className="px-4 max-w-6xl mx-auto">
    <h2
      ref={targetFeaturedProjects}
      className="text-center text-2xl font-bold mt-10 mb-2"
    >
      <span className="text-black dark:text-white">Featured </span>
      <span className="text-[#FE7465]">Projects</span>
    </h2>
    <p className="text-center text-gray-500 dark:text-gray-400 mb-6">
      Find interesting projects and get started with an execution plan
    </p>

    {/* Tabs */}
    <div className="flex gap-4 mb-4 border-b border-gray-200 dark:border-gray-700 ml-1">
      {labels.map((label, i) => (
        <button
          key={i}
          onClick={() => handleTabChange(i)}
          className={`py-2 px-4 text-sm font-medium rounded-t-lg ${
            selectedTab === i
              ? "text-[#FE7465] border-b-2 border-[#FE7465]"
              : "text-gray-500 dark:text-gray-400 hover:text-[#FE7465]"
          }`}
        >
          {label}
        </button>
      ))}
    </div>

    {/* Filters */}
    <ProjectFilters onFilterChange={handleFilterChange} />

    {/* Project Grid */}
    {loading ? (
      <div className="flex justify-center items-center min-h-[738px]">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(itemsPerPage)].map((_, i) => (
            <div
              key={i}
              className="bg-gray-200 dark:bg-gray-700 h-96 w-full rounded animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    ) : error ? (
      <p className="text-[#FE7465] text-center my-4">
        Error fetching projects: {error.message}
      </p>
    ) : currentProjects.length === 0 ? (
      <p className="text-center text-gray-500 dark:text-gray-400 my-4">No Projects Found</p>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentProjects.map((project: any) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    )}

    {/* Pagination */}
    {noofpages > 1 && (
      <div className="flex justify-center mt-6">
        {[...Array(noofpages)].map((_, i) => (
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
      </div>
    )}
  </div>
);

}
