"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { ChevronRight, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import LearnMenu from "./LearnMenu";
import JobPrepMenu from "./JobPrepMenu";
import HiringMenu from "./HiringMenu";
import { menuItems } from "./LearnMenu";
import { courseCategories } from "./LearnMenu";
import { selfPacedCourses } from "./LearnMenu";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
// import { ChevronDown } from "lucide-react";
import liveIndicatorAnimation from "../../../public/images/navbar/live_indicator.json";
import recIndicatorAnimation from "../../../public/images/navbar/rec_indicator.json";

const AnimatedMenuIcon = ({ isOpen }: { isOpen: boolean }) => (
  <motion.svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-black dark:text-white w-5 h-5"
  >
    {/* Top line - transforms to one half of the X */}
    <motion.line
      x1="3"
      y1="8"
      x2="21"
      y2="8"
      animate={
        isOpen
          ? { rotate: 45, y: 4, transformOrigin: "center" }
          : { rotate: 0, y: 0 }
      }
      transition={{ duration: 0.3 }}
    />

    {/* Bottom line - transforms to other half of the X */}
    <motion.line
      x1="3"
      y1="16"
      x2="21"
      y2="16"
      animate={
        isOpen
          ? { rotate: -45, y: -4, transformOrigin: "center" }
          : { rotate: 0, y: 0 }
      }
      transition={{ duration: 0.3 }}
    />
  </motion.svg>
);

export default function Navbar() {
  const Lottie = dynamic(() => import("lottie-react"), { 
    ssr: false,
    loading: () => <div className="w-12 h-12" />
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const [showUpskill, setShowUpskill] = useState(true);
  const [showJobPrep, setShowJobPrep] = useState(false);
  const [showHiring, setShowHiring] = useState(false);
  const [showCourseCategories, setShowCourseCategories] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<
    "learn" | "jobprep" | "hiring" | null
  >("learn");
  const [activeTab, setActiveTab] = useState<"experts" | "selfpaced">(
    "experts"
  );

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 768);
    checkSize();
    window.addEventListener("resize", checkSize, { passive: true });
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  // useEffect(() => {
  //   if (isMobile) {
  //     document.body.style.overflow = isMegaMenuOpen ? "hidden" : "auto";
  //   }
  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, [isMegaMenuOpen, isMobile]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMegaMenuOpen &&
        megaMenuRef.current &&
        !megaMenuRef.current.contains(event.target as Node)
      ) {
        setIsMegaMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMegaMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileMenuToggle = () => {
    if (isMobile) {
      setActiveMegaMenu("learn");
      setIsMegaMenuOpen((prev) => !prev);
      setShowCourseCategories(false);
      setShowUpskill(true);
      setShowJobPrep(false);
      setShowHiring(false);
    } else {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  return (
    <AnimatePresence>
      <>
        {isMegaMenuOpen && (
          <div className="fixed inset-0 z-40 backdrop-blur-xs bg-black/1 dark:bg-white/1 transition-all duration-300" />
        )}

        <motion.div
          initial={false}
          animate={{
            width: isScrolled && isMobile ? "90%" : isScrolled ? "85%" : "100%",
            borderRadius: isMegaMenuOpen
              ? isScrolled
                ? "36px"
                : "0px 0px 36px 36px"
              : isScrolled
              ? "50px"
              : "0px",
            boxShadow:
              isScrolled || isMegaMenuOpen
                ? "0 4px 20px rgba(0, 0, 0, 0.12)"
                : "none",
            top: isScrolled ? "20px" : "0px",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`fixed z-50 mx-auto left-0 right-0 overflow-hidden ${
            isScrolled ? "border-[0.8] border-white/[0.2]" : "border-none"
          }`}
        >
          <div
            className={`${
              isMegaMenuOpen
                ? "bg-white dark:bg-black"
                : `bg-white/60 dark:bg-black/60 ${
                    isScrolled ? "backdrop-blur-sm" : ""
                  }`
            } ${
              isScrolled ? "px-4" : "px-4.5 md:px-10"
            } py-3 md:py-3.5 flex items-center justify-between transition duration-300`}
          >
            {/* Logo */}
            <Link href="/">
              {/* Light mode logo */}
              <Image
                src="/images/new-logo.svg"
                alt="Coursevita Logo"
                width={180}
                height={28}
                priority
                className="w-auto h-10 md:h-11 cursor-pointer dark:hidden"
              />

              {/* Dark mode logo */}
              <Image
                src="/images/new-logo-dark.svg"
                alt="Coursevita Logo Dark"
                width={180}
                height={28}
                priority
                className="w-auto h-10 md:h-11 cursor-pointer hidden dark:block"
              />
            </Link>

            {/* Center Navigation Links (Desktop only) */}
            <div className="hidden md:flex items-center space-x-4.5 lg:space-x-8 text-xs lg:text-sm font-normal">
              <div className="relative">
                <button
                  onClick={() => {
                    setActiveMegaMenu("learn");
                    setIsMegaMenuOpen(!isMegaMenuOpen);
                  }}
                  onMouseEnter={() => {
                    if (!isMobile) {
                      setActiveMegaMenu("learn");
                      setIsMegaMenuOpen(true);
                    }
                  }}
                  className={`${
                    pathname === "/" ||
                    (isMegaMenuOpen && activeMegaMenu === "learn")
                      ? "text-brand-500 dark:text-brand-300"
                      : "text-black dark:text-white"
                  } flex items-center space-x-1 relative z-50 transition duration-200`}
                >
                  <span>Learn</span>
                  <motion.div
                    animate={{
                      rotate:
                        isMegaMenuOpen && activeMegaMenu === "learn" ? 90 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight size={16} />
                  </motion.div>
                </button>
              </div>

              <div className="relative">
                <button
                  onClick={() => {
                    setActiveMegaMenu("jobprep");
                    setIsMegaMenuOpen(!isMegaMenuOpen);
                  }}
                  onMouseEnter={() => {
                    if (!isMobile) {
                      setActiveMegaMenu("jobprep");
                      setIsMegaMenuOpen(true);
                    }
                  }}
                  className={`${
                    isMegaMenuOpen && activeMegaMenu === "jobprep"
                      ? "text-brand-500 dark:text-brand-300"
                      : "text-black dark:text-white"
                  } flex items-center space-x-1 relative z-50 transition duration-200`}
                >
                  <span>Job Prep</span>
                  <motion.div
                    animate={{
                      rotate:
                        isMegaMenuOpen && activeMegaMenu === "jobprep" ? 90 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </button>
              </div>

              <div className="relative">
                <button
                  onClick={() => {
                    setActiveMegaMenu("hiring");
                    setIsMegaMenuOpen(!isMegaMenuOpen);
                  }}
                  onMouseEnter={() => {
                    if (!isMobile) {
                      setActiveMegaMenu("hiring");
                      setIsMegaMenuOpen(true);
                    }
                  }}
                  className={`${
                    isMegaMenuOpen && activeMegaMenu === "hiring"
                      ? "text-brand-500 dark:text-brand-300"
                      : "text-black dark:text-white"
                  } flex items-center space-x-1 relative z-50 transition duration-200`}
                >
                  <span>For Employers</span>
                </button>
              </div>

              <Link
                href="/events"
                onMouseEnter={() => {
                  if (!isMobile) setIsMegaMenuOpen(false);
                }}
                className={`transition duration-300 ${
                  pathname === "/events"
                    ? "text-brand-500 dark:text-brand-300"
                    : "text-black dark:text-white hover:text-brand-500"
                }`}
              >
                Events
              </Link>

              <Link
                href="/about-us"
                onMouseEnter={() => {
                  if (!isMobile) setIsMegaMenuOpen(false);
                }}
                className={`transition duration-300 ${
                  pathname === "/about-us"
                    ? "text-brand-500 dark:text-brand-300"
                    : "text-black dark:text-white hover:text-brand-500"
                }`}
              >
                About Us
              </Link>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-1 md:gap-4">
              {/* Learn Button - Mobile Only */}
              {/* {isMobile && (
                <button
                  onClick={() => {
                    setShowCourseCategories(true);
                    setIsMegaMenuOpen(true);
                    setShowJobPrep(false);
                    setShowUpskill(false);
                  }}
                  className="flex items-center text-[12px] font-medium text-black dark:text-white pl-3 pr-2 py-2 rounded-full border-[0.8] border-black/[0.2] dark:border-white/[0.2]"
                >
                  <span>Learn</span>
                  <motion.div
                    className="flex flex-col leading-none ml-1"
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.2,
                      ease: "easeInOut",
                    }}
                  >
                    <ChevronDown className="m-0 p-0 text-brand-300" size={14} />
                    <ChevronDown
                      className="m-0 p-0 -mt-[10px] text-[#7234f7]"
                      size={14}
                    />
                  </motion.div>
                </button>
              )} */}

              <button
  type="button"
  onClick={toggleTheme}
   aria-label={theme === "light" ? "Activate dark mode" : "Activate light mode"}
  className="w-9 h-9 lg:w-11 lg:h-11 flex items-center justify-center rounded-full border border-black/20 dark:border-white/20 hover:bg-black/10 dark:hover:bg-white/10 transition"
>
  {theme === "light" ? (
    <Moon size={18} className="text-gray-600" aria-hidden="true" />
  ) : (
    <Sun size={18} className="text-white" aria-hidden="true" />
  )}
</button>


              {/* CTA Button - Desktop Only */}
              <Link
                href="https://dashboard.coursevita.com/"
                className="hidden md:block bg-brand-500 text-white text-sm px-5 py-3 rounded-full font-medium"
              >
                Get Started
              </Link>

              {/* Hamburger - Mobile Only (below md) */}
              {isMobile && (
                <button
                  onClick={handleMobileMenuToggle}
                  aria-label="Toggle Menu"
                  className="w-9 h-9 flex items-center justify-center rounded-full border-[0.8] border-black/[0.2] dark:border-white/[0.2] transition"
                >
                  <AnimatedMenuIcon isOpen={isMegaMenuOpen} />
                </button>
              )}
            </div>
          </div>

          {/* Megamenu */}
          <AnimatePresence>
            {isMegaMenuOpen && (
              <motion.div
                ref={megaMenuRef}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                className={`bg-white dark:bg-black transition duration-300 ${
                  isMobile ? "h-auto" : ""
                }`}
                style={{
                  borderBottomLeftRadius: isScrolled ? "36px" : "0",
                  borderBottomRightRadius: isScrolled ? "36px" : "0",
                }}
                onMouseLeave={() => !isMobile && setIsMegaMenuOpen(false)}
              >
                {isMobile && !showCourseCategories && (
                  <div className="max-h-[calc(100dvh-65px)] overflow-y-auto">
                    <div className="relative flex flex-col text-md font-medium px-4">
                      {/* your content like upskill, jobprep, hiring, etc. */}
                      <div className="relative flex flex-col text-md font-medium">
                        {/* Upskill Section */}
                        <div className="mb-0">
                          <button
                            onClick={() => {
                              setShowUpskill((prev) => !prev);
                              setShowJobPrep(false);
                              setShowHiring(false);
                            }}
                            className="w-full flex items-center justify-between py-4 text-[16px] font-medium dark:text-white"
                          >
                            <span>Upskill</span>
                            <motion.div
                              animate={{ rotate: showUpskill ? 90 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronRight
                                size={18}
                                className={`transition-transform ${
                                  showUpskill
                                    ? "text-black dark:text-white"
                                    : "text-gray-400"
                                }`}
                              />
                            </motion.div>
                          </button>

                          {/* Upskill submenu (animated) */}
                          <motion.div
                            initial={false}
                            animate={{
                              height: showUpskill ? "auto" : 0,
                              opacity: showUpskill ? 1 : 0,
                            }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col space-y-1 text-[14px] mb-4">
                              {menuItems.map((item) => (
                                <Link
                                  key={item.title}
                                  href={item.path}
                                  onClick={() => setIsMegaMenuOpen(false)}
                                  className={`flex items-center justify-between rounded-lg px-4 py-3 ${
                                    pathname === item.path
                                      ? "bg-brand-50 text-brand-500"
                                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                                  }`}
                                >
                                  <div className="flex items-center space-x-2">
                                    {item.icon}
                                    <span>{item.title}</span>
                                  </div>
                                  <ChevronRight
                                    size={16}
                                    className="text-gray-400"
                                  />
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        </div>

                        {/* Divider between Upskill and Job Prep */}
                        <hr className="border-gray-200 dark:border-gray-700" />

                        {/* Main nav items */}
                        <div className="flex flex-col divide-y divide-gray-200 dark:divide-gray-700">
                          {/* Job Prep - Expandable */}
                          <div className="flex flex-col">
                            <button
                              onClick={() => {
                                setShowJobPrep((prev) => !prev);
                                setShowUpskill(false);
                                setShowHiring(false);
                              }}
                              className="w-full flex justify-between items-center py-4 text-left dark:text-white text-gray-800"
                            >
                              <span>Job Prep</span>
                              <motion.div
                                animate={{ rotate: showJobPrep ? 90 : 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <ChevronRight
                                  size={18}
                                  className={`transition-transform ${
                                    showJobPrep
                                      ? "text-black dark:text-white"
                                      : "text-gray-400"
                                  }`}
                                />
                              </motion.div>
                            </button>

                            <motion.div
                              initial={false}
                              animate={{
                                height: showJobPrep ? "auto" : 0,
                                opacity: showJobPrep ? 1 : 0,
                              }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="flex flex-col space-y-1">
                                <JobPrepMenu isMobile />
                              </div>
                            </motion.div>
                          </div>
                          <div className="flex flex-col">
                            <button
                              onClick={() => {
                                setShowHiring((prev) => !prev);
                                setShowUpskill(false);
                                setShowJobPrep(false);
                                setShowCourseCategories(false);
                              }}
                              className="w-full flex justify-between items-center py-4 text-left dark:text-white text-gray-800"
                            >
                              <span>For Employers</span>
                              <motion.div
                                animate={{ rotate: showHiring ? 90 : 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <ChevronRight
                                  size={18}
                                  className={`transition-transform ${
                                    showHiring
                                      ? "text-black dark:text-white"
                                      : "text-gray-400"
                                  }`}
                                />
                              </motion.div>
                            </button>

                            <motion.div
                              initial={false}
                              animate={{
                                height: showHiring ? "auto" : 0,
                                opacity: showHiring ? 1 : 0,
                              }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="flex flex-col space-y-1">
                                <HiringMenu isMobile />
                              </div>
                            </motion.div>
                          </div>

                          {/* Other links */}
                          {[
                            { label: "Events", href: "/events" },
                            { label: "About Us", href: "/about-us" },
                          ].map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={() => {
                                setShowUpskill(false);
                                setShowJobPrep(false);
                                setIsMegaMenuOpen(false); // Close the navbar on mobile
                              }}
                              className="w-full flex justify-between items-center py-4 text-left dark:text-white text-gray-800"
                            >
                              <span>{item.label}</span>
                              <ChevronRight
                                size={18}
                                className="text-gray-400"
                              />
                            </Link>
                          ))}
                        </div>
                        <div className="sticky bottom-0 left-0 right-0 bg-white dark:bg-black pb-4 pt-2">
                          <Link
                            href="https://dashboard.coursevita.com/"
                            className="w-full block text-center bg-brand-500 hover:bg-brand-600 text-white font-medium py-3 rounded-full shadow-md"
                          >
                            Get Started
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {isMobile && showCourseCategories && (
                  <div className="relative flex flex-col text-md font-medium px-4 pt-4">
                    {/* Toggle Buttons */}
                    <div className="relative flex w-full bg-gray-100 dark:bg-[#18181B] p-2 rounded-xl mb-4 overflow-hidden">
                      {/* Animated sliding background */}
                      <motion.div
                        layout
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className={`absolute top-1 bottom-1 w-[calc(50%-0.25rem)] rounded-lg ${
                          activeTab === "experts" ? "left-1" : "right-1"
                        } bg-gray-900 dark:bg-white z-0`}
                      />

                      {/* Expert Tab */}
                      <button
                        onClick={() => setActiveTab("experts")}
                        className={`relative z-10 w-1/2 px-3.5 py-2 md:text-sm text-[10px] font-medium text-center rounded-lg transition-colors duration-300 ${
                          activeTab === "experts"
                            ? "text-white dark:text-black"
                            : "text-gray-700 dark:text-gray-300"
                        }`}
                      >
                        Learn with the Experts
                      </button>

                      {/* Self-paced Tab */}
                      <button
                        onClick={() => setActiveTab("selfpaced")}
                        className={`relative z-10 w-1/2 px-3.5 py-2 md:text-sm text-[10px] font-medium text-center rounded-lg transition-colors duration-300 ${
                          activeTab === "selfpaced"
                            ? "text-white dark:text-black"
                            : "text-gray-700 dark:text-gray-300"
                        }`}
                      >
                        Learn at Your Own Speed
                      </button>
                    </div>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="flex flex-col space-y-1 mb-4"
                      >
                        {(activeTab === "experts"
                          ? courseCategories
                          : selfPacedCourses
                        ).map((category) => (
                          <Link
                            key={category.title}
                            href={category.path}
                            onClick={() => {
                              setIsMegaMenuOpen(false);
                              setShowCourseCategories(false);
                            }}
                            className="flex items-center justify-between rounded-lg text-xs h-10 px-1 sm:px-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                          >
                            <div className="flex items-center gap-2">
                              {category.icon}
                              <span>{category.title}</span>
                            </div>
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
                                {activeTab === "experts"
                                  ? "Live course"
                                  : "Self-paced"}
                              </span>
                            </span>
                          </Link>
                        ))}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                )}

                {!isMobile && (
                  <div className="mx-auto py-6 px-6">
                    {activeMegaMenu === "learn" && <LearnMenu onItemClick={() => setIsMegaMenuOpen(false)} />}
                    {activeMegaMenu === "jobprep" && <JobPrepMenu onItemClick={() => setIsMegaMenuOpen(false)} />}
                    {activeMegaMenu === "hiring" && <HiringMenu onItemClick={() => setIsMegaMenuOpen(false)} />}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </>
    </AnimatePresence>
  );
}
