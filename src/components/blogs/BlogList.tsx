"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Blog } from "@/types/blog";
import Preloader from "../ui/PreLoader";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function BlogList() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categories, setCategories] = useState<string[]>(["All"]);
  const blogsPerPage = 5;

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const trendingBlogs = blogs.filter((blog) => blog.trending);

  const autoplay = useCallback(() => {
    if (!emblaApi || trendingBlogs.length === 0) return;
    if (autoplayRef.current) clearTimeout(autoplayRef.current);
    autoplayRef.current = setTimeout(() => {
      emblaApi.scrollNext();
    }, 3000);
  }, [emblaApi, trendingBlogs]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    autoplay();
  }, [emblaApi, autoplay]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    autoplay();
    return () => {
      if (autoplayRef.current) clearTimeout(autoplayRef.current);
    };
  }, [emblaApi, onSelect, autoplay]);

  // Filter blogs by category
  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.blogCategory === selectedCategory);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const getPageNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      }
    }
    return pageNumbers;
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          "https://api.coursevita.com/api/blogs/getallblogs"
        );
        const data = await response.json();
        setBlogs(data.data);

        // Extract unique categories from blogs
        const uniqueCategories = [
          "All",
          ...new Set(data.data.map((blog: Blog) => blog.blogCategory)),
        ];
        setCategories(uniqueCategories as string[]);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    autoplay();
    return () => {
      if (autoplayRef.current) clearTimeout(autoplayRef.current);
    };
  }, [emblaApi, onSelect, autoplay]);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Trending Blogs Carousel */}
        {trendingBlogs.length > 0 && (
          <section className="mb-6 relative">
            <div
              className="overflow-hidden rounded-xl relative h-[300px] sm:h-[400px] md:h-[500px]"
              ref={emblaRef}
            >
              <div className="flex h-full">
                {trendingBlogs.map((blog, index) => (
                  <div
                    key={blog._id}
                    className="relative flex-[0_0_100%] w-full h-full transition-all duration-1000 ease-in-out"
                  >
                    <Image
                      src={blog.headerImageUrl}
                      alt={blog.title}
                      fill
                      className="object-cover"
                      priority={index === selectedIndex}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                      <span className="bg-gradient-to-r from-[#5028FF] to-[#FF4B00] text-white px-4 py-1.5 rounded-md text-sm">
                        Trending
                      </span>
                    </div>
                    <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 text-white">
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">
                        {blog.title}
                      </h2>
                      <Link
                        href={`/blogs/${blog._id}`}
                        className="inline-flex items-center text-base sm:text-lg hover:underline"
                      >
                        Read blog
                        <svg
                          className="w-3 h-3 sm:w-4 sm:h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Progress Bar */}
            <div className="mt-4 flex justify-center items-center gap-4 relative z-10">
              <button
                onClick={() => emblaApi?.scrollPrev()}
                className="p-2 transition rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                aria-label="Previous blog slide"
              >
                <ArrowLeft className="w-4 h-4 text-black dark:text-white" />
              </button>

              <div className="w-20 md:w-40 h-2 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden relative">
                <div
                  className="absolute h-full bg-black dark:bg-white rounded-full transition-all duration-300"
                  style={{
                    width: `calc(100% / ${trendingBlogs.length})`,
                    left: `calc((100% / ${trendingBlogs.length}) * ${selectedIndex})`,
                  }}
                />
              </div>

              <button
                onClick={() => emblaApi?.scrollNext()}
                className="p-2 transition rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                aria-label="Next blog slide"
              >
                <ArrowRight className="w-4 h-4 text-black dark:text-white" />
              </button>
            </div>
          </section>
        )}

        {/* All Blogs Section */}
        <section>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-[400] text-center px-4 text-black dark:text-white">
            <span className="text-[#FF7262] font-[700]">Explore</span> advanced
            concepts with our blogs
          </h2>

          {/* Category Filter Buttons */}
          <div className="relative w-full py-8 sm:py-14">
            <div className="flex overflow-x-auto no-scrollbar gap-2 sm:gap-4 sm:flex-wrap sm:justify-center pb-2 sm:pb-0">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setCurrentPage(1);
                  }}
                  className={`whitespace-nowrap px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-sm sm:text-base transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-black dark:bg-white text-white dark:text-black shadow-lg"
                      : "bg-white text-gray-800 dark:text-gray-300 hover:bg-gray-50 border border-[#E4E4E7] dark:border-[#27272A] dark:bg-[#18181B]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Grid with Transition */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            {currentBlogs.map((blog) => (
              <Link href={`/blogs/${blog._id}`} key={blog._id}>
                <div
                  className="bg-white dark:bg-[#18181B] rounded-xl overflow-hidden transition-all duration-500 ease-in-out transform flex flex-col md:flex-row border border-[#E4E4E7] dark:border-[#27272A] opacity-0 animate-fadeIn hover:shadow-lg"
                  style={{
                    animation: "fadeIn 0.5s ease-in-out forwards",
                  }}
                >
                  <div className="p-4 sm:p-6 flex-1 order-2 md:order-1">
                    <h3 className="text-xl sm:text-2xl font-[700] mt-2 text-black dark:text-white">
                      {blog.title}
                    </h3>
                    <span className="text-xs sm:text-sm mt-1 text-gray-700 dark:text-gray-400">
                      {blog.date}
                    </span>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-3 sm:mt-5 line-clamp-3">
                      {blog.blogDemo}
                    </p>
                    <div className="flex items-center mt-6 sm:mt-10 text-black dark:text-white">
                      <span className="text-sm sm:text-base inline-flex items-center hover:underline">
                        Read full blog
                      </span>
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 mt-1 ml-1 animate-[slide_1s_ease-in-out_infinite]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="relative h-40 sm:h-48 md:h-auto md:w-1/3 order-1 md:order-2 bg-[#000924] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#18076e]/3 to-transparent z-10"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-full relative">
                        <Image
                          src={blog.headerImageUrl}
                          alt={blog.title}
                          fill
                          className="object-cover mix-blend-luminosity opacity-80"
                        />
                        <div className="absolute inset-0 bg-[#000924]/40"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#000924]/60 to-transparent"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination with Transition */}
          <div className="flex flex-wrap justify-center items-center mt-8 gap-2 sm:gap-3">
            {/* Prev Button */}
            <button
              onClick={() => setCurrentPage((prev) => prev - 1)}
              disabled={currentPage === 1}
              className={`p-2 sm:p-2.5 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 border ${
                currentPage === 1
                  ? "bg-gray-100 dark:bg-gray-900 text-gray-400 cursor-not-allowed border-gray-200 dark:border-gray-700"
                  : "bg-white dark:bg-black text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-sm"
              }`}
              aria-label="Previous page"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Page Numbers */}
            {getPageNumbers().map((number, index) => (
              <button
                key={index}
                onClick={() =>
                  typeof number === "number" && setCurrentPage(number)
                }
                disabled={number === "..."}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 border ${
                  number === currentPage
                    ? "bg-[#14142B] dark:bg-gray-400 text-white dark:text-black shadow-lg border-transparent"
                    : number === "..."
                    ? "cursor-default bg-transparent text-gray-500 dark:text-gray-400 border-transparent"
                    : "bg-white dark:bg-black text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 border-gray-200 dark:border-gray-700"
                }`}
              >
                {number}
              </button>
            ))}

            {/* Next Button */}
            <button
              onClick={() => setCurrentPage((prev) => prev + 1)}
              disabled={currentPage === totalPages}
              className={`p-2 sm:p-2.5 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 border ${
                currentPage === totalPages
                  ? "bg-gray-100 dark:bg-gray-900 text-gray-400 cursor-not-allowed border-gray-200 dark:border-gray-700"
                  : "bg-white dark:bg-black text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-sm"
              }`}
              aria-label="Next page"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* CTA Section */}
          <section className="relative my-10 sm:my-20 rounded-2xl overflow-hidden">
            <div className="relative h-[200px] sm:h-[250px] md:h-[300px] w-full">
              <Image
                src="/images/blogs/cta.svg"
                alt="Background"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0" />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                  Feeling inspired?
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8 max-w-2xl">
                  Explore our on demand courses achieve something extraordinary
                </p>
                <Link
                  href="/"
                  className="flex items-center justify-center gap-2 bg-white text-[#000924] px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-[500] text-sm sm:text-base
                transition-all duration-300 hover:bg-opacity-90
                transform active:scale-95"
                >
                  Start Learning
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 16 15"
                    fill="none"
                  >
                    <path
                      d="M15.5 0.999999C15.5 0.447715 15.0523 -5.74472e-07 14.5 -8.27353e-07L5.5 -2.65626e-08C4.94772 -3.63737e-07 4.5 0.447715 4.5 1C4.5 1.55228 4.94772 2 5.5 2L13.5 2L13.5 10C13.5 10.5523 13.9477 11 14.5 11C15.0523 11 15.5 10.5523 15.5 10L15.5 0.999999ZM2.20711 14.7071L15.2071 1.70711L13.7929 0.292893L0.792893 13.2929L2.20711 14.7071Z"
                      fill="#100031"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}
