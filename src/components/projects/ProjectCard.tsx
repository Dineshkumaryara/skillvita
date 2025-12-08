import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

type Project = {
  _id: string;
  title: string;
  category: string;
  difficulty: "begineer" | "Intermediate" | "Hard";
  objective: string;
  skill: string[];
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const router = useRouter();
  const maxVisibleSkills = 3;
  const extraSkills = project.skill.length - maxVisibleSkills;

  const handleViewProject = () => {
    const externalIds = new Set([
      "CV-P01",
      "CV-P02",
      "CV-P03",
      "CV-P04",
      "CV-P05",
      "CV-P06",
      "CV-P07",
      "CV-P08",
      "CV-P09",
      "CV-P10",
      "CV-P11",
      "CV-P12",
      "CV-P13",
      "CV-P14",
      "CV-P15",
      "CV-P16",
      "CV-P17",
      "CV-P18",
      "CV-P19",
      "CV-P20",
      "CV-P21",
      "CV-P22",
      "CV-P23",
      "CV-P24",
      "CV-P25",
      "CV-P26",
      "CV-P27",
      "CV-P28",
      "CV-P29",
      "CV-P30",
      "CV-P31",
      "CV-P32",
      "CV-P33",
    ]);
    if (externalIds.has(project._id)) {
      window.location.href = `https://skillvita.coursevita.com/projects/${project._id}`;
      return;
    }
    router.push(`/projects/${project._id}`);
  };

  return (
    <div
      id="mid"
      className="w-full max-w-full sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rounded-2xl p-4 sm:p-5 md:p-6 flex flex-col justify-between min-h-[370px] bg-white dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A]"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <span className="text-xs sm:text-sm px-3 py-1 rounded-full font-poppins font-medium bg-brand-200/30 dark:bg-brand-700/[0.3] text-brand-500 dark:text-brand-200">
          {project.category}
        </span>
        <div className="flex items-center gap-1">
          <Image
            src={
              project.difficulty === "begineer"
                ? "/images/projectsPage/beginner.svg"
                : project.difficulty === "Intermediate"
                ? "/images/projectsPage/intermediate.svg"
                : "/images/projectsPage/hard.svg"
            }
            alt={project.difficulty}
            width={14}
            height={14}
          />
          <span className="text-xs sm:text-sm font-medium font-outfit text-gray-800 dark:text-gray-200">
            {project.difficulty}
          </span>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-base sm:text-lg font-semibold font-outfit line-clamp-2 mb-2 text-black dark:text-white">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-sm font-poppins leading-snug line-clamp-3 mb-4 text-gray-600 dark:text-gray-400">
        {project.objective}
      </p>

      {/* Tools */}
      <div>
        <p className="text-sm font-semibold font-outfit mb-2 text-gray-900 dark:text-gray-200">
          Tools
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.skill.slice(0, maxVisibleSkills).map((skill, idx) => (
            <span
              key={idx}
              className="text-xs font-medium font-poppins px-3 py-1 rounded-full max-w-[70px] truncate bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300"
            >
              {skill}
            </span>
          ))}
          {extraSkills > 0 && (
            <span className="text-xs font-medium font-poppins px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300">
              +{extraSkills}
            </span>
          )}
        </div>
      </div>

      {/* Button */}
      <button
        onClick={handleViewProject}
        className="w-full py-3 rounded-lg text-sm font-poppins border border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-white transition"
      >
        View Project
      </button>
    </div>
  );
};

export default ProjectCard;
