/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Target,
  Laptop,
  BookOpen,
  Bookmark,
  GraduationCap,
  ChevronRight,
  Settings,
  Construction,
} from "lucide-react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import liveIndicatorAnimation from "../../../public/images/navbar/live_indicator.json";
import recIndicatorAnimation from "../../../public/images/navbar/rec_indicator.json";

export const menuItems = [
  { title: "Workshops", icon: <Settings size={18} />, path: "/events" },
  // { title: "Studyvita", icon: <BookOpen size={18} />, path: "/studyvita" },
  {
    title: "Find your career",
    icon: <Bookmark size={18} />,
    path: "/find-your-career",
  },
  { title: "Blogs", icon: <GraduationCap size={18} />, path: "/blogs" },
];

export const courseCategories = [
  {
    title: "Digital Marketing",
    icon: <Target size={18} />,
    path: "/courses/digital-marketing",
  },
  {
    title: "AI Engineering",
    icon: <Laptop size={18} />,
    path: "/courses/ai-engineering",
  },
  {
    title: "Devops with AWS",
    icon: <BookOpen size={18} />,
    path: "/courses/devops-aws",
  },
  {
    title: "Devops with Azure",
    icon: <Bookmark size={18} />,
    path: "/courses/devops-azure",
  },
  {
    title: "Data Analytics",
    icon: <GraduationCap size={18} />,
    path: "/courses/data-analytics",
  },
];

export const selfPacedCourses = [
  {
    title: "Data Visualization",
    icon: <BookOpen size={18} />,
    path: "/courses/dataVisualization",
  },
];

interface LearnMenuProps {
  onItemClick?: () => void;
}

export default function LearnMenu({ onItemClick }: LearnMenuProps) {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<"experts" | "selfpaced">(
    "experts"
  );
  const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_2fr] gap-0 md:gap-6 items-start">
      {/* Left Sidebar */}
      {/* Left Sidebar */}
      <div className="flex flex-col space-y-2">
        {/* Courses Link */}
        <Link
          onClick={onItemClick}
          href="/"
          className={`flex items-center px-4 py-4 rounded-lg transition ${
            pathname === "/"
              ? "bg-brand-100 text-brand-500 dark:bg-brand-800/[0.5] dark:text-brand-200 font-medium"
              : "text-black dark:text-white hover:bg-gray-100 dark:hover:bg-[#18181B]"
          }`}
        >
          <GraduationCap size={20} className="mr-2" />
          Courses
        </Link>

        {/* Other Menu Items */}
        {menuItems.map((item, index) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={index}
              href={item.path}
              onClick={onItemClick}
              className={`group flex items-center justify-between px-4 py-4 rounded-lg transition ${
                isActive
                  ? "bg-brand-100 text-brand-500 dark:bg-brand-800/[0.5] dark:text-brand-200 font-medium"
                  : "text-black dark:text-white hover:bg-gray-100 dark:hover:bg-[#18181B]"
              }`}
            >
              <div className="flex items-center">
                {item.icon && <span className="mr-2">{item.icon}</span>}
                {item.title}
              </div>
              <ChevronRight
                size={16}
                className={`transition-opacity ${
                  isActive
                    ? "opacity-100 text-brand-500"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              />
            </Link>
          );
        })}
      </div>

      {/* Divider */}
      <div className="hidden md:block h-full w-px mx-4 bg-gray-200 dark:bg-gray-700" />

      {/* Right Course Section */}
      <div className="flex flex-col">
        {/* Top Selector */}
        <div className="relative flex w-full bg-[#F3F5FC] dark:bg-[#18181B] p-2 mb-2 rounded-xl overflow-hidden">
          {/* Smooth Animated Indicator */}
          <motion.div
            layout
            transition={{ duration: 0.1, ease: "easeInOut" }}
            className={`absolute top-1 bottom-1 w-[calc(50%-0.25rem)] rounded-lg ${
              activeTab === "experts" ? "left-1" : "right-1"
            } bg-gray-900 dark:bg-white z-0`}
          />

          {/* Tabs */}
          <button
            onClick={() => setActiveTab("experts")}
            className={`relative z-10 w-1/2 px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-300 ${
              activeTab === "experts"
                ? "text-white dark:text-black"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            Learn with the Experts
          </button>

          <button
            onClick={() => setActiveTab("selfpaced")}
            className={`relative z-10 w-1/2 px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-300 ${
              activeTab === "selfpaced"
                ? "text-white dark:text-black"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            Learn at Your Own Speed
          </button>
        </div>

        {/* Under Construction Message */}
        <div className="mt-6 flex items-center justify-center h-32 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 text-center px-4">
          <Construction className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" />
          <p className="text-sm text-gray-600 dark:text-gray-400">
            This section is unavailable as we restructure our course offerings.
            Check back soon!
          </p>
        </div>

        {/* Animated Course Cards */}
        {/* <AnimatePresence mode="wait">
          <motion.div
            key={activeTab} // forces animation when tab changes
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex flex-col gap-2"
          >
            {(activeTab === "experts"
              ? courseCategories
              : selfPacedCourses
            ).map((category) => {
              const isCourseActive = pathname === category.path;
              return (
                <motion.div
                  key={category.path}
                  layout
                  layoutId={category.path}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`group flex items-center justify-between px-4 h-14 rounded-xl border transition ${
                    isCourseActive
                      ? "border-brand-100"
                      : "border-transparent hover:border-[#E1D3FF]"
                  }`}
                >
                  <Link
                    href={category.path}
                    onClick={onItemClick}
                    className="flex items-center flex-1 group"
                  >
                    <span className="w-6 h-6 mr-3 flex items-center justify-center transition-colors duration-300 text-gray-400 group-hover:text-brand-500 dark:group-hover:text-brand-400">
                      {category.icon}
                    </span>

                    <span className="text-sm font-medium text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-brand-500 dark:group-hover:text-brand-400">
                      {category.title}
                    </span>
                  </Link>
                  <div className="flex items-center space-x-2">
                    <span className="flex items-center mr-4 text-xs font-medium">
                      <Lottie
                        animationData={
                          activeTab === "experts"
                            ? liveIndicatorAnimation
                            : recIndicatorAnimation
                        }
                        loop
                        autoplay
                        className="w-12 h-12 mr-1"
                      />
                      <span
                        className={`${
                          activeTab === "experts"
                            ? "text-[#14C63C]"
                            : "text-[#E23744]"
                        }`}
                      >
                        {activeTab === "experts" ? "Live course" : "Self-paced"}
                      </span>
                    </span>
                    <ChevronRight
                      size={16}
                      className={`transition-opacity ${
                        isCourseActive
                          ? "opacity-100 text-brand-500"
                          : "opacity-0 group-hover:opacity-100"
                      }`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence> */}
      </div>
    </div>
  );
}
