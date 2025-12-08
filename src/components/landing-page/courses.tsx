"use client";
import React, { useState, useEffect } from "react";
import CourseMainCard from "../ui/coursesMainCard";
import coursesData from "../../global/courses.json";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight, ArrowLeft } from "lucide-react";

const courses = coursesData.map((course) => ({
  image: course.image,
  title: course.courseTitle,
  time: course.period,
  coursePath: course.coursePath,
}));

const Courses: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(1);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateScrollState = () => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setTotalSlides(emblaApi.scrollSnapList().length);
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  };

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", updateScrollState);
    updateScrollState(); // Initial update
  }, [emblaApi]);

  return (
    <div className="bg-white dark:bg-black">
      <section id="courses" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-center text-3xl sm:text-4xl font-normal text-black dark:text-white mb-10">
            <span className="text-[#FE7465] font-medium">Explore</span>
            <br /> Our future ready
            <span className="font-medium"> courses !</span>
          </h2>

          {/* Arrows + Slider */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Left Arrow */}
            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className={`hidden md:inline-flex p-2 border border-gray-300 dark:border-gray-700 rounded-full transition ${
                canScrollPrev
                  ? "hover:bg-gray-200 dark:hover:bg-gray-700"
                  : "opacity-50 cursor-not-allowed"
              }`}
              title="Previous"
            >
              <ArrowLeft className="w-5 h-5 text-black dark:text-white" />
            </button>

            {/* Slider */}
            <div className="overflow-hidden w-full" ref={emblaRef}>
              <div className="flex gap-4">
                {courses.map((course, index) => (
                  <div
                    className="min-w-[280px] md:min-w-[300px] flex-shrink-0"
                    key={index}
                  >
                    <div className="h-full flex flex-col">
                      <CourseMainCard
                        image={course.image}
                        title={course.title}
                        time={course.time}
                        coursePath={course.coursePath}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canScrollNext}
              className={`hidden md:inline-flex p-2 border border-gray-300 dark:border-gray-700 rounded-full transition ${
                canScrollNext
                  ? "hover:bg-gray-200 dark:hover:bg-gray-700"
                  : "opacity-50 cursor-not-allowed"
              }`}
              title="Next"
            >
              <ArrowRight className="w-5 h-5 text-black dark:text-white" />
            </button>
          </div>

          {/* Progress bar */}
          <div className="mt-6 flex justify-center">
            <div className="w-24 md:w-48 h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden relative">
              <div
                className="h-full bg-[#0F002E] dark:bg-white rounded-full transition-all duration-300"
                style={{
                  width: `${100 / totalSlides}%`,
                  left: `${(100 / totalSlides) * selectedIndex}%`,
                  position: "absolute",
                  top: 0,
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
