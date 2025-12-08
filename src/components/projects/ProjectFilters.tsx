/* eslint-disable @typescript-eslint/no-unsafe-function-type */
"use client";
import React, { useState } from "react";

const ProjectFilters = ({ onFilterChange }: { onFilterChange: Function }) => {
  const [filters, setFilters] = useState({
    searchQuery: "",
    category: "",
    skill: "",
    difficulty: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const applyFilters = () => {
    onFilterChange(filters);
  };

  const clearFilters = () => {
    const reset = {
      searchQuery: "",
      category: "",
      skill: "",
      difficulty: "",
    };
    setFilters(reset);
    onFilterChange(reset);
  };

return (
  <div className="w-full px-0">
    <div className="flex flex-col sm:flex-row lg:flex-row gap-2 mb-6 justify-between w-full">
      <input
        type="text"
        name="searchQuery"
        value={filters.searchQuery}
        onChange={handleChange}
        placeholder="Search projects"
        className="w-full px-4 py-2 border rounded-lg text-sm"
      />

      <select
        name="category"
        value={filters.category}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg text-sm"
      >
        <option value="">Category</option>
        {[
          "Web Development", "App Development", "AI & ML", "Data Science",
          "Cloud Computing", "Cybersecurity", "Blockchain & Cryptocurrency",
          "IoT", "AR/VR", "Game Development", "Software Development",
          "DevOps & Automation", "Data Engineering", "AI Engineer", "DevOps with AWS",
        ].map((cat) => (
          <option key={cat}>{cat}</option>
        ))}
      </select>

      <select
        name="skill"
        value={filters.skill}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg text-sm"
      >
        <option value="">Skill</option>
        {["React", "Next.js", "Tailwind", "Docker", "TensorFlow"].map((skill) => (
          <option key={skill}>{skill}</option>
        ))}
      </select>

      <select
        name="difficulty"
        value={filters.difficulty}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg text-sm"
      >
        <option value="">Difficulty</option>
        {["Beginner", "Intermediate", "Advanced"].map((d) => (
          <option key={d}>{d}</option>
        ))}
      </select>

      <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-2">
        <button
          onClick={applyFilters}
          className="w-full sm:w-auto dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] text-black dark:text-white px-4 py-2 rounded-lg text-sm"
        >
          Apply
        </button>
        <button
          onClick={clearFilters}
          className="w-full sm:w-auto dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] text-black dark:text-white px-4 py-2 rounded-lg text-sm"
        >
          Clear
        </button>
      </div>
    </div>
  </div>
);


};

export default ProjectFilters;
