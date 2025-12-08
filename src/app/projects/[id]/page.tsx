"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Image from "next/image";


import ProjectsForm from "@/app/projects/_components/form";
import ProjectCard from "@/components/projects/ProjectCard";
import Preloader from "@/components/ui/PreLoader";

interface Project {
  _id: string;
  title: string;
  category: string;
  usersJoined: number;
  objective: string;
  difficulty: "begineer" | "Intermediate" | "Hard";
  skill: string[];
}

export default function ProjectDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const [projectData, setProjectData] = useState<Project | null>(null);
  const [recommendedProjects, setRecommendedProjects] = useState<Project[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const projectRes = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_LINK}/projects/${id}`
        );
        setProjectData(projectRes.data.projectData);

        const allProjectsRes = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_LINK}/projects`
        );
        const filtered = allProjectsRes.data.projectsData
          .filter((proj: Project) => proj._id !== id)
          .slice(0, 2);

        setRecommendedProjects(filtered);
      } catch (error) {
        console.error("Failed to fetch project data", error);
      }
    };

    if (id) fetchProjectDetails();
  }, [id]);

  if (!projectData) {
    return (
      <Preloader/>
    );
  }

  return (
    <div className="bg-white dark:bg-black text-gray-100 md:-mt-8 -mt-4">
      <div className="max-w-6xl mx-auto px-4 py-4 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-y-12 gap-x-8">
          {/* Left Panel */}
          <div className="md:col-span-4">
            <div className="inline-block bg-brand-200/30 dark:bg-brand-700/[0.3] text-brand-500 dark:text-brand-200 font-medium px-3 py-1 text-xs md:text-sm rounded-full mb-2">
              {projectData.category}
            </div>
            <h1 className="text-lg md:text-4xl font-bold mb-3 text-black dark:text-white">
              {projectData.title}
            </h1>

            {/* <div className="flex items-center mb-6">
              <Image src={user1} alt="users" width={18} height={18} />
              <Image
                src={user2}
                alt="users"
                width={18}
                height={18}
                className="-ml-2"
              />
              <Image
                src="/images/ProjectsPage/user3.svg"
                alt="users"
                width={18}
                height={18}
                className="-ml-2"
              />
              <Image
                src="/images/ProjectsPage/user4.svg"
                alt="users"
                width={18}
                height={18}
                className="-ml-2"
              />
              <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm ml-3">
                {projectData.usersJoined}+ users have joined this project
              </p>
            </div> */}

            <div className="p-6 rounded-xl mb-8 bg-brand-100 dark:bg-[#18181B] border border-brand-100 dark:border-[#27272A] text-gray-900 dark:text-gray-200">
              <div className="grid grid-cols-2 gap-4">
                {["ic1", "ic2", "ic3", "ic4"].map((iconName, i) => (
                  <div key={iconName} className="flex items-center gap-2">
                    <Image
                      src={`/images/ProjectsPage/${iconName}.svg`}
                      alt={iconName}
                      width={20}
                      height={20}
                    />
                    <p className="text-xs md:text-sm">
                      {
                        [
                          "Collaborative Learning",
                          "Mentorship Guidance",
                          "Realtime Project Experience",
                          "Gain hands-on Experience",
                        ][i]
                      }
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-md md:text-xl font-semibold mb-2 text-gray-900 dark:text-gray-200">
              Project Overview
            </h2>
            <p className="text-xs md:text-[16px] text-gray-600 dark:text-gray-300 mb-6">
              {projectData.objective}
            </p>

            <h2 className="text-md md:text-xl font-semibold mb-2 text-gray-900 dark:text-gray-200">
              Difficulty Level
            </h2>
            <div className="flex items-center gap-3 md:mb-10">
              <Image
                src={
                  projectData.difficulty === "begineer"
                    ? "/images/projectsPage/beginner.svg"
                    : projectData.difficulty === "Intermediate"
                    ? "/images/projectsPage/intermediate.svg"
                    : "/images/projectsPage/hard.svg"
                }
                alt={projectData.difficulty}
                width={24}
                height={24}
              />

              <p className="capitalize text-gray-600 dark:text-gray-300 text-xs md:text-[16px]">
                {projectData.difficulty}
              </p>
            </div>
          </div>

          {/* Right Panel */}
          <div className="md:col-span-3">
            <button
              className="w-full bg-brand-500 text-white text-lg py-3 rounded-lg mb-8"
              onClick={() => setOpen(true)}
            >
              Start Project
            </button>

            {open && (
              <div className="fixed inset-0 backdrop-blur-sm bg-white/10 flex justify-center items-center z-50">
                <div className="bg-white dark:bg-black rounded-xl p-6 w-full max-w-md relative shadow-lg">
                  <ProjectsForm
                    handleCloseDialog={() => setOpen(false)}
                    title={projectData.title}
                  />
                </div>
              </div>
            )}

            <h2 className="text-md md:text-xl font-semibold mb-2 text-gray-900 dark:text-gray-200">Required Skills</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {projectData.skill.length > 0 ? (
                projectData.skill.map((skill, index) => (
                  <span
                    key={index}
                    className="border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 px-3 py-1 text-xs rounded-full"
                  >
                    {skill}
                  </span>
                ))
              ) : (
                <p className="text-sm text-gray-500">No skills listed.</p>
              )}
            </div>

            <h2 className="text-md md:text-xl font-semibold mb-2 text-gray-900 dark:text-gray-200">Mentor By</h2>
            <div className="flex items-center gap-4 mb-6">
              <div>
                <p className="text-xs md:text-sm font-semibold text-gray-600 dark:text-gray-300">Atharv Bhute</p>
                <p className="text-xs md:text-sm text-gray-500">
                  Software Engineer @Coursevita
                </p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm mb-10 md:mb-0">
              Develop a real-time data processing system using Python and Flask,
              and implement features such as natural language processing,
              machine learning, and data visualization.
            </p>
          </div>
        </div>
        <div className="">
          <h2 className="text-lg md:text-2xl font-bold text-center mb-6 text-black dark:text-white">
            Interested in this project?
          </h2>
          <div className="flex justify-center">
            <button
              className="w-100 h-15 bg-brand-500 text-white text-[16px] py-3 rounded-lg mb-8"
              onClick={() => setOpen(true)}
            >
              Start Project
            </button>
          </div>
        </div>

        {/* Recommended Projects */}
        <div className="mt-6">
          <h2 className="text-lg md:text-2xl font-bold text-center mb-6 text-black dark:text-white">
            Recommended projects
          </h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 max-w-4xl w-full">
              {recommendedProjects.length > 0 ? (
                recommendedProjects.map((project) => (
                  <ProjectCard key={project._id} project={project} />
                ))
              ) : (
                <p className="text-center text-sm text-gray-500 col-span-full">
                  No recommended projects available.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
