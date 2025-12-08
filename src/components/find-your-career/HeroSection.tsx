/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";


interface HeroSectionProps {
  onSearch: (query: string, location?: string) => void;
  onPillSelect: (courseLevel: string) => void;
  courseLevelOptions: string[];
}

const pillToCourseLevelLabel: Record<string, string[]> = {
  "After 10th Courses": ["10th"],
  "After 12th Courses": ["12th"],
  "PG Certification Courses": ["Post Graduate", "PG", "Postgraduate"],
  "UG Certification Courses": ["Graduate", "UG", "Undergraduate"],
};

const HeroSection: React.FC<HeroSectionProps> = ({ onSearch, onPillSelect, courseLevelOptions }) => {
  const [input, setInput] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [prompts, setPrompts] = useState<string[]>([]);
  const [showPrompts, setShowPrompts] = useState<boolean>(false);
  const [isPromptsLoading, setIsPromptsLoading] = useState<boolean>(false);
  const [activePill, setActivePill] = useState<string>("All Courses");
  const searchWrapperRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;

  // Handle click outside search dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchWrapperRef.current && 
        !searchWrapperRef.current.contains(event.target as Node)
      ) {
        setShowPrompts(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Fetch prompts for search (mock implementation)
  useEffect(() => {
    const fetchPrompts = async () => {
      if (!input) {
        setPrompts([]);
        return;
      }
      
      setIsPromptsLoading(true);
      
      try {
        // Mock API call - replace with actual API call
        await new Promise(resolve => setTimeout(resolve, 300));
        // Example data
        const mockPrompts = [
          `${input} courses`,
          `${input} certification`,
          `${input} diploma`,
        ];
        setPrompts(mockPrompts);
      } catch (error) {
        console.error("Error fetching prompts:", error);
      } finally {
        setIsPromptsLoading(false);
      }
    };

    const debounceTimer = setTimeout(() => {
      if (input) fetchPrompts();
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [input]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setShowPrompts(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input) {
      setShowPrompts(false);
      onSearch(input);
    }
  };

  const handlePromptClick = (prompt: string) => {
    setInput(prompt);
    setPrompts([prompt]);
    setShowPrompts(false);
    onSearch(prompt);
  };

  const handleSearch = () => {
    if (input || location) {
      setShowPrompts(false);
      onSearch(input, location);
    }
  };

  const handlePillClick = (pillName: string) => {
    setActivePill(pillName);
    if (pillName === "All Courses") {
      onPillSelect(""); // Signal to show all courses
      return;
    }
    const possibleLabels = pillToCourseLevelLabel[pillName] || [];
    // Find the first matching value in courseLevelOptions (case-insensitive, trimmed)
    const match = courseLevelOptions.find(opt =>
      possibleLabels.some(label => opt.trim().toLowerCase() === label.trim().toLowerCase())
    );
    if (match) {
      onPillSelect(match);
    }
  };

  const categoryPills = [
    "All Courses",
    "After 10th Courses",
    "After 12th Courses",
    "PG Certification Courses",
    "UG Certification Courses"
  ];

return (
  <div className="md:pb-6">
    {/* Desktop and Tablet View */}
    <div
      className="hidden md:flex w-full min-h-[320px] sm:min-h-[380px] lg:min-h-[440px] xl:min-h-[520px] rounded-2xl bg-gradient-to-br from-[#7234F7] via-[#BD89FF] to-[#FF4B00] relative overflow-hidden shadow-xl items-center justify-center"
      style={{
        backgroundImage: "url('/images/findYourCareer/career.webp')",
        backgroundBlendMode: "overlay",
        backgroundPosition: "center 25%",
        backgroundSize: "cover",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex w-full justify-center items-center"
      >
        <div className="bg-black/70 border border-white/30 dark:border-white/10 w-full max-w-3xl sm:max-w-4xl lg:max-w-5xl p-2 sm:p-4 lg:p-10 rounded-2xl text-center shadow-2xl backdrop-blur-sm m-6">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 lg:mb-6 drop-shadow-lg"
          >
            Find Your Perfect Career Path
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-white/90 mb-5 sm:mb-6 lg:mb-8 max-w-2xl mx-auto drop-shadow"
          >
            Discover certifications and diploma courses from top institutions, tailored for your ambitions.
          </motion.p>

          <div className="flex justify-center">
            <div className="w-full max-w-xl">
              <SearchComponent
                input={input}
                handleSearchChange={handleSearchChange}
                handleKeyDown={handleKeyDown}
                handleSearch={handleSearch}
                searchWrapperRef={searchWrapperRef}
                showPrompts={showPrompts}
                isPromptsLoading={isPromptsLoading}
                prompts={prompts}
                handlePromptClick={handlePromptClick}
                setShowPrompts={setShowPrompts}
                isMobile={false}
                location={location}
                setLocation={setLocation}
              />
            </div>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4 justify-center mt-6"
          >
            {categoryPills.map((pill) => (
              <button
                key={pill}
                onClick={() => handlePillClick(pill)}
                className={`
                  flex justify-center items-center px-4 py-2 rounded-full
                  border-2 border-white/60 cursor-pointer text-white text-sm font-medium
                  transition-all duration-300 hover:scale-105 hover:bg-white/20
                  shadow-md
                  ${activePill === pill
                    ? "bg-white/20 border-white/80 scale-105 text-white font-semibold shadow-lg"
                    : "bg-black/10 border-white/40 text-white/80"
                  }
                `}
                aria-pressed={activePill === pill}
              >
                {pill}
              </button>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>

    {/* Mobile View */}
    <div className="md:hidden w-full bg-gradient-to-br from-[#7234F7] via-[#BD89FF] to-[#FF4B00] p-4 rounded-2xl shadow-xl">
      <div className="mb-6">
        <div className="bg-white/80 dark:bg-black/40 rounded-xl shadow-lg p-4">
          <h1 className="text-xl font-bold text-[#7234F7] dark:text-white mb-2 text-center">Find Your Perfect Career Path</h1>
          <p className="text-sm text-gray-700 dark:text-gray-200 mb-4 text-center">Discover certifications and diploma courses from top institutions, tailored for your ambitions.</p>
          <SearchComponent
            input={input}
            handleSearchChange={handleSearchChange}
            handleKeyDown={handleKeyDown}
            handleSearch={handleSearch}
            searchWrapperRef={searchWrapperRef}
            showPrompts={showPrompts}
            isPromptsLoading={isPromptsLoading}
            prompts={prompts}
            handlePromptClick={handlePromptClick}
            setShowPrompts={setShowPrompts}
            isMobile={true}
            location={location}
            setLocation={setLocation}
          />
        </div>
      </div>

      <div className="flex overflow-x-auto pb-4 space-x-2 no-scrollbar px-2 mt-4">
        {categoryPills.map((pill) => (
          <button
            key={pill}
            onClick={() => handlePillClick(pill)}
            className={`
              flex-shrink-0 flex justify-center items-center px-4 py-2 rounded-full
              border-2 ${activePill === pill ? "border-white bg-white/30 text-white font-semibold" : "border-white/40 bg-white/10 text-white/80"}
              cursor-pointer text-sm whitespace-nowrap transition-all duration-300
              shadow-md
            `}
            aria-pressed={activePill === pill}
          >
            {pill}
          </button>
        ))}
      </div>

      <div className="mt-4 px-2">
        <h3 className="text-white text-lg font-semibold truncate text-center">{activePill}</h3>
      </div>
    </div>
  </div>
);

};

interface SearchComponentProps {
  input: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
  searchWrapperRef: React.RefObject<HTMLDivElement>;
  showPrompts: boolean;
  isPromptsLoading: boolean;
  prompts: string[];
  handlePromptClick: (prompt: string) => void;
  setShowPrompts: React.Dispatch<React.SetStateAction<boolean>>;
  isMobile: boolean;
  location: string;
  setLocation: (val: string) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({
  input,
  handleSearchChange,
  handleKeyDown,
  handleSearch,
  searchWrapperRef,
  setShowPrompts,
  isMobile,
  location,
  setLocation
}) => {
  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="relative" 
      ref={searchWrapperRef}
    >
      <div className={`flex items-center bg-white dark:bg-[#18181B] overflow-hidden ${isMobile ? 'rounded-xl shadow-sm' : 'rounded-xl'} border border-black/80 dark:border-[#27272A]`}>
        <input
          type="text"
          placeholder="What to study?"
          className={`flex-1 py-3 px-4 outline-none text-gray-700 dark:text-white bg-transparent ${isMobile ? 'text-sm' : ''} ${!isMobile ? 'border-r dark:border-[#27272A]' : 'border-r border-gray-200 dark:border-[#27272A]'}`}
          value={input}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setShowPrompts(true)}
        />
        <input
          type="text"
          placeholder="Where to study?"
          className={`${isMobile ? 'flex-1 text-sm' : 'flex-1 hidden md:block'} py-3 px-4 outline-none text-gray-700 dark:text-white bg-transparent`}
          value={location}
          onChange={e => setLocation(e.target.value)}
        />
        <button 
          className="w-[65px] h-[50px] flex justify-center items-center bg-gradient-to-b from-brand-500 to-brand-600 rounded-r-lg"
          onClick={handleSearch}
        >
          <Search className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Search Prompts Dropdown
      {showPrompts && (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 rounded-b-lg shadow-lg mt-0 z-50 max-h-48 overflow-y-auto border border-gray-200 dark:border-gray-700 border-t-0">
          {isPromptsLoading ? (
            <div className="p-3 flex justify-center">
              <div className="w-5 h-5 border-2 border-violet-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <>
              {prompts.length > 0 ? (
                prompts.map((prompt, index) => (
                  <div 
                    key={index} 
                    className="p-3 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer text-left"
                    onClick={() => handlePromptClick(prompt)}
                  >
                    <p className="text-sm text-gray-700 dark:text-gray-200">{prompt}</p>
                  </div>
                ))
              ) : (
                input && (
                  <div className="p-3 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer text-left">
                    <p className="text-sm text-gray-700 dark:text-gray-200">{input}...</p>
                  </div>
                )
              )}
            </>
          )}
        </div>
      )} */}
    </motion.div>
  );
};

export default HeroSection;