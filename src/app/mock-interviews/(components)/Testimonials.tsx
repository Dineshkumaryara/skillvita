"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Sangana Venkata Jahnavi",
    image: "/images/mock-interview/testmonial-1.jpeg",
    company: "/images/mock-interview/Deloitte.jpg",
    tag: "Deloitte – ADMM Analyst",
    text: `I didn't expect to learn so much in CourseVita's Data Science course. The teachers were really good and made hard things easy to understand. The projects they gave us made me feel confident. Thanks to CourseVita, I'm ready to start working in Data Science.`,
  },
  {
    name: "A.Laxmi Soumya",
    image: "/images/mock-interview/testmonial-2.jpeg",
    company: "/images/mock-interview/Capgemini.webp",
    tag: "Capgemini – Senior Analyst",
    text: `Taking CourseVita's Data Analytics course was a smart move for me. It helped me understand data better, which is important for many jobs. The teachers were helpful, and the course fit well with my studies. Now, I feel ready to work as a data analyst after I graduate.`,
  },
  {
    name: "Pranav Kumar",
    image: "/images/mock-interview/testmonial-3.jpeg",
    company: "/images/mock-interview/onix.png",
    tag: "OnIx PVT LTD – Cloud Engineer",
    text: `After completing CourseVita's Data Science course, I feel well-prepared and knowledgeable. The curriculum was practical and engaging, tailored to real-world scenarios. Thanks to CourseVita, I'm now proficient in data analysis and advanced techniques.`,
  },
  {
    name: "Vinay",
    image: "/images/mock-interview/testmonial-4.jpg",
    company: "/images/mock-interview/gridlex.webp",
    tag: "Gridlexl – Business analyst",
    text: `I learned a lot about artificial intelligence in CourseVita's Gen AI course. The mentors were smart, and the course was interesting. The projects helped me understand things better. CourseVita is great for anyone who wants to learn about AI and stay ahead in their job.`,
  },
];

export default function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
    align: "center",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const autoplay = useCallback(() => {
    if (!emblaApi) return;
    if (autoplayRef.current) clearTimeout(autoplayRef.current);
    autoplayRef.current = setTimeout(() => {
      emblaApi.scrollNext();
    }, 5000);
  }, [emblaApi]);

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

  const handleNext = () => emblaApi && emblaApi.scrollNext();
  const handlePrev = () => emblaApi && emblaApi.scrollPrev();

  return (
    <div className="bg-white dark:bg-black py-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold text-[#FE7465]">Testimonials</h2>
        <p className="text-gray-700 dark:text-gray-300 mt-2 px-4">
          Thousands of candidates using CourseVita&apos;s career counseling and
          mock interviews to practice and land their dream jobs.
        </p>
      </div>
      

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Gradient blur overlays */}
        <div className="absolute top-0 left-0 h-full w-12 z-20 pointer-events-none">
          <div className="h-full w-full bg-gradient-to-r from-white dark:from-black via-white dark:via-black to-transparent" />
        </div>
        <div className="absolute top-0 right-0 h-full w-12 z-20 pointer-events-none">
          <div className="h-full w-full bg-gradient-to-l from-white/90 dark:from-black/90 via-white dark:via-black to-transparent" />
        </div>
        
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t, i) => (
              <div key={i} className="w-full md:w-[90%] px-4 flex-shrink-0 box-border">
                <div className="bg-white dark:bg-[#18181B] border border-gray-200 dark:border-[#27272A] rounded-2xl p-6 mb-6 h-full relative">
                  <div className="absolute top-5 right-5">
                    <Image
                      src={t.company}
                      alt="Company logo"
                      width={50}
                      height={30}
                      className="object-contain h-[30px] w-auto"
                    />
                  </div>
                  <div className="flex items-start gap-4">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={56}
                      height={56}
                      className="rounded-full object-cover w-14 h-14"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-black dark:text-white">
                        {t.name}
                      </h3>
                      <p className="text-sm text-gray-500 mb-2">{t.tag}</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {t.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="mt-4 flex justify-center items-center gap-4">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <ArrowLeft className="w-5 h-5 text-black dark:text-white" />
          </button>

          <div className="w-40 h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden relative">
            <div
              className="h-full bg-[#0F002E] dark:bg-white rounded-full transition-all duration-300"
              style={{
                width: `${100 / testimonials.length}%`,
                left: `${(100 / testimonials.length) * selectedIndex}%`,
                position: "absolute",
                top: 0,
              }}
            />
          </div>

          <button
            onClick={handleNext}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <ArrowRight className="w-5 h-5 text-black dark:text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
