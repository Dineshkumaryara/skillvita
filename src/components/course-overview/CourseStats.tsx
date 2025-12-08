import React from "react";
import Image from "next/image";

interface CourseStatsProps {
  mode: string;
  skillLevel: string;
  efforts: string;
  guidedProjects: string;
}

const CourseStats: React.FC<CourseStatsProps> = ({
  mode,
  skillLevel,
  efforts,
  guidedProjects,
}) => {
  const stats = [
    {
      title: "Mode",
      value: mode,
      icon: "/images/courses/mode.svg",
    },
    {
      title: "Skill level",
      value: skillLevel,
      icon: "/images/courses/level.svg",
    },
    {
      title: "Efforts",
      value: efforts,
      icon: "/images/courses/effort.svg",
    },
    {
      title: "Guided projects",
      value: guidedProjects,
      icon: "/images/courses/suitcase1.svg",
    },
  ];

  return (
    <div className="bg-white dark:bg-[#18181B] rounded-2xl max-w-7xl mx-auto p-6 mb-8 border border-[#E4E4E7] dark:border-[#27272A]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="relative flex justify-center items-center"
          >
            <div className="flex items-center gap-3 w-max">
              <div className="w-12 h-12 bg-[rgba(114,52,247,0.08)] rounded-lg flex items-center justify-center">
                <Image
                  src={stat.icon}
                  alt={stat.title}
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.title}
                </h3>
                <p className="text-base font-semibold text-black dark:text-white">
                  {stat.value}
                </p>
              </div>
            </div>

            {/* Vertical Divider */}
            {index < stats.length - 1 && (
              <div className="hidden md:block absolute right-[-12px] top-1/2 transform -translate-y-1/2 h-12 w-px bg-[#E5E7EB] dark:bg-[#333]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseStats;
