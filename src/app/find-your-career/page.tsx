"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import HeroSection from "@/components/find-your-career/HeroSection";
import FiltersSection from "@/components/find-your-career/FiltersSection";
import CourseCard from "@/components/find-your-career/CourseCard";
import Pagination from "@/components/find-your-career/Pagination";
import CourseCardSkeleton from "@/components/find-your-career/CourseCardSkeleton";

interface Course {
  _id: string;
  title: string;
  instituteName: string;
  courseDescription?: string;
  modeOfStudy?: string;
  logoUrl?: string;
  courseLevel?: string;
  duration?: string;
  location?: string;
  totalFee?: string;
  tags?: string[];
  url?: string;
  credential?: string;
  eligibilityCriteria?: string;
  courseDurationInMonths?: number;
  courseFeeInRupees?: number;
  category?: string;
}

interface FilterData {
  fieldId: string;
  options: string[];
  label?: string;
  icon?: React.ReactNode;
}

export default function CareerPage() {
  // State for all courses and pagination
  const [allCourses, setAllCourses] = useState<Course[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filters, setFilters] = useState<Record<string, FilterData>>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filterOptions, setFilterOptions] = useState<Record<string, string[]>>(
    {}
  );
  const [, setStickyActive] = useState<boolean>(false);
  const [, setScrollPosition] = useState<number>(0);

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const filtersRef = useRef<HTMLDivElement>(null);

  const itemsPerPage = 6; // Number of cards per page

  // Handle scroll to detect when to make filters sticky
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroBottom = heroRef.current.getBoundingClientRect().bottom;
        // Make sticky when hero section is scrolled past
        setStickyActive(heroBottom <= 0);
        setScrollPosition(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fetch all courses data once on mount
  useEffect(() => {
    const fetchAllCourses = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_LINK}/api/careers`);

        if (response.data && response.data.results) {
          const courses = response.data.results;
          setAllCourses(courses);
          setFilteredCourses(courses);

          // Extract filter options from all courses
          const extractedOptions = extractFilterOptions(courses);
          setFilterOptions(extractedOptions);
        } else {
          throw new Error("Invalid response format");
        }
      } catch (err) {
        console.error("Failed to fetch courses:", err);
        setError("Failed to load courses. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchAllCourses();
  }, []);

  // Extract filter options from data
  const extractFilterOptions = (data: Course[]) => {
    const options: Record<string, Set<string>> = {
      category: new Set(),
      courseLevel: new Set(),
      duration: new Set(),
      totalFee: new Set(),
      location: new Set(),
      modeOfStudy: new Set(),
    };

    data.forEach((course) => {
      if (course.category) options.category.add(course.category);
      if (course.courseLevel) options.courseLevel.add(course.courseLevel);
      if (course.duration) options.duration.add(course.duration);
      if (course.totalFee) options.totalFee.add(course.totalFee);
      if (course.location) options.location.add(course.location);
      if (course.modeOfStudy) options.modeOfStudy.add(course.modeOfStudy);
    });

    const result: Record<string, string[]> = {};
    Object.entries(options).forEach(([key, values]) => {
      result[key] = Array.from(values).filter(Boolean).sort();
    });

    return result;
  };

  // Handle search - now entirely client-side
  const handleSearch = (query: string, location?: string) => {
    setSearchQuery(query);
    setCurrentPage(1);

    // If both are empty, show all courses
    if (!query && !location) {
      setFilteredCourses(allCourses);
      return;
    }

    const lowercaseQuery = query?.toLowerCase() || "";
    const lowercaseLocation = location?.toLowerCase() || "";

    const filtered = allCourses.filter((course) => {
      const matchesQuery =
        !lowercaseQuery ||
        course.title?.toLowerCase().includes(lowercaseQuery) ||
        course.instituteName?.toLowerCase().includes(lowercaseQuery) ||
        course.courseDescription?.toLowerCase().includes(lowercaseQuery) ||
        (course.tags && course.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery)));

      const matchesLocation =
        !lowercaseLocation ||
        course.location?.toLowerCase().includes(lowercaseLocation);

      return matchesQuery && matchesLocation;
    });
    setFilteredCourses(filtered);
  };

  // Handle filter changes
  const handleFilterChange = (newFilters: Record<string, FilterData>) => {
    setFilters(newFilters);
    applyFilters(newFilters); // <-- apply immediately on checkbox toggle
  };

  const applyFilters = (filtersToApply: Record<string, FilterData>) => {
    setCurrentPage(1);

    if (Object.keys(filtersToApply).length === 0) {
      if (searchQuery) {
        handleSearch(searchQuery);
      } else {
        setFilteredCourses(allCourses);
      }
      return;
    }

    const filtered = allCourses.filter((course) => {
      return Object.entries(filtersToApply).every(([fieldId, filterData]) => {
        const courseValue = course[fieldId as keyof Course];

        if (filterData.options.length === 0) return true;

        if (Array.isArray(courseValue)) {
          return courseValue.some((value) =>
            filterData.options.includes(value)
          );
        }

        return filterData.options.includes(courseValue as string);
      });
    });

    setFilteredCourses(filtered);
  };

  // Apply filters - now entirely client-side
  const handleApplyFilters = () => {
    applyFilters(filters);
  };

  // Clear filters - client-side
  const handleClearFilters = () => {
    setFilters({});
    setCurrentPage(1);

    // If there's a search query, re-apply it; otherwise show all courses
    if (searchQuery) {
      handleSearch(searchQuery);
    } else {
      setFilteredCourses(allCourses);
    }
  };

  // Handle page change for pagination
  const handlePageChange = (page: number) => {
    setCurrentPage(page);

    // Scroll to top of course list
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Calculate paginated courses based on current page - memoized for performance
  const paginatedCourses = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredCourses.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredCourses, currentPage, itemsPerPage]);

  // Calculate total number of pages
  const totalPages = Math.max(
    1,
    Math.ceil(filteredCourses.length / itemsPerPage)
  );

  return (
    <div className="bg-white dark:bg-black p-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div ref={heroRef}>
          <HeroSection 
            onSearch={handleSearch}
            onPillSelect={(courseLevel) => {
              if (!courseLevel) {
                // If empty, clear the courseLevel filter and show all courses
                const newFilters = { ...filters };
                delete newFilters.courseLevel;
                setFilters(newFilters);
                applyFilters(newFilters);
              } else {
                const newFilters = {
                  ...filters,
                  courseLevel: {
                    fieldId: 'courseLevel',
                    options: [courseLevel],
                    label: 'Course level',
                  },
                };
                setFilters(newFilters);
                applyFilters(newFilters);
              }
            }}
            courseLevelOptions={filterOptions.courseLevel || []}
          />
        </div>

        {/* Content section */}
        <div className="container py-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters */}
            <div ref={filtersRef} className="w-full md:w-auto">
              {/* Desktop Sticky Filters */}
              <div className="hidden md:block sticky top-[110px] z-10">
                <FiltersSection
                  config={filterOptions}
                  handleFilterChange={handleFilterChange}
                  handleApplyFilters={handleApplyFilters}
                  handleClearAllFilters={handleClearFilters}
                />
              </div>

              {/* Mobile Filters */}
              <div className="md:hidden block mt-4">
                <FiltersSection
                  config={filterOptions}
                  handleFilterChange={handleFilterChange}
                  handleApplyFilters={handleApplyFilters}
                  handleClearAllFilters={handleClearFilters}
                />
              </div>
            </div>

            {/* Courses */}
            <div className="flex-1">
              <div ref={contentRef} className="overflow-y-auto relative">
                {/* Loading */}
                {loading ? (
                  <div className="space-y-6">
                    {[...Array(6)].map((_, i) => (
                      <CourseCardSkeleton key={i} />
                    ))}
                  </div>
                ) : error ? (
                  // Error Message
                  <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <p className="text-red-500 dark:text-red-400 mb-4">
                      {error}
                    </p>
                    <button
                      className="text-violet-600 hover:text-violet-800 dark:text-violet-400 dark:hover:text-violet-300 font-medium"
                      onClick={() => {
                        setError(null);
                        const fetchData = async () => {
                          try {
                            setLoading(true);
                            const response = await axios.get(
                              `${process.env.NEXT_PUBLIC_BACKEND_LINK}/api/careers`
                            );
                            setAllCourses(response.data.results);
                            setFilteredCourses(response.data.results);
                          } catch (err) {
                            console.error("Error retrying fetch:", err);
                            setError(
                              "Failed to load courses. Please try refreshing the page."
                            );
                          } finally {
                            setLoading(false);
                          }
                        };
                        fetchData();
                      }}
                    >
                      Try Again
                    </button>
                  </div>
                ) : filteredCourses.length > 0 ? (
                  <div>
                    <div className="mb-4">
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Showing{" "}
                        {Math.min(paginatedCourses.length, itemsPerPage)} of{" "}
                        {filteredCourses.length} courses
                      </p>
                    </div>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentPage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-6"
                      >
                        {paginatedCourses.map((course) => (
                          <motion.div
                            key={course._id}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            <CourseCard course={course} />
                          </motion.div>
                        ))}
                      </motion.div>
                    </AnimatePresence>

                    {/* Pagination */}
                    <div>
                      <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                      />
                    </div>
                  </div>
                ) : (
                  // No Results
                  <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                      No courses found matching your criteria
                    </p>
                    <button
                      className="text-violet-600 hover:text-violet-800 dark:text-violet-400 dark:hover:text-violet-300 font-medium"
                      onClick={handleClearFilters}
                    >
                      Clear filters and try again
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
