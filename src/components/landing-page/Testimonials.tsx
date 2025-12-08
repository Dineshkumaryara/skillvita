"use client";

import React, { useEffect, useCallback, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const testimonials = [
  {
    name: "Gauthami Kulkarni",
    title: "Fresher - Full Stack Developer Course",
    message:
      "I didn't know anything about coding before I joined CourseVita's Full Stack Developer course. But they taught me everything step by step. The projects and help from the teachers made it easy to learn. Now, I feel ready to get my dream job as a Full Stack Developer.",
    avatar: "/images/landing/testimonials/gouthami.png",
  },
  {
    name: "Sai Kiran",
    title: "Final Year Undergrad Student - Data Analytics Course",
    message:
      "Taking Coursevita's Data Analytics course was a smart move for me. It helped me understand data better, which is important for many jobs. The teachers were helpful, and the course fit well with my studies. Now, I feel ready to work as a data analyst.",
    avatar: "/images/landing/testimonials/saikiran.png",
  },
  {
    name: "Aparna Ch",
    title: "Early Career Professional - Data Science Course",
    message:
      "After completing Coursevita's Data Science course, I feel well-prepared and knowledgeable. The curriculum was practical and engaging, tailored to real-world scenarios. Thanks to Coursevita, I'm now proficient in data analysis and advanced techniques.",
    avatar: "/images/landing/testimonials/aparna.jpg",
  },
  {
    name: "Sheetal S",
    title: "Early Career Professional - Python Course",
    message:
      "I learned a lot about artificial intelligence in Coursevita's Gen AI course. The mentors were smart, and the course was interesting. The projects helped me understand things better. Coursevita is great for anyone who wants to learn about AI and stay ahead in their job.",
    avatar: "/images/landing/testimonials/sheetal.png",
  },
];

const TestimonialSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
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

  const handleArrowClick = () => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  };

  const handleBackClick = () => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  };

  return (
    <div className="bg-white dark:bg-black">
      <section className="max-w-7xl mx-auto px-6 py-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 h-full w-12 z-20 pointer-events-none">
          <div className="h-full w-full bg-gradient-to-r from-white/90 dark:from-black/90 to-transparent" />
        </div>

        {/* Right Edge Blur */}
        <div className="absolute top-0 right-0 h-full w-12 z-20 pointer-events-none">
          <div className="h-full w-full bg-gradient-to-l from-white/90 dark:from-black/90 to-transparent" />
        </div>
        {/* Background lines */}
        {/* <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 z-0">
          <Image
            src="/images/landing/testimonials/testimonial-lines.png"
            alt="testimonial lines"
            width={700}
            height={500}
            className="object-contain"
          />
        </div>
        <div className="absolute top-1/2 right-1/2 transform -translate-y-1/2 -scale-x-100 z-0">
          <Image
            src="/images/landing/testimonials/testimonial-lines.png"
            alt="testimonial lines"
            width={700}
            height={500}
            className="object-contain"
          />
        </div> */}

        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center relative z-10 mb-8">
          <h2 className="text-xl md:text-3xl text-black dark:text-white font-normal">
            Learners adore Coursevita,
            <br />
            <span className="font-medium text-xl md:text-3xl">
              <span className="text-black dark:text-white">And </span>we cherish
              them dearly!
            </span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative z-10" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="min-w-sm md:min-w-3xl lg:min-w-4xl xl:min-w-6xl px-4 md:px-8 box-border"
              >
                <div className="bg-brand-50 dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] p-6 md:p-8 rounded-2xl
                text-gray-800 dark:text-gray-100">
                  <div className="flex items-start gap-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover w-12 h-12"
                    />
                    <div>
                      <h3 className="text-black dark:text-white font-bold text-lg lg:text-xl">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 font-normal text-xs lg:text-sm mb-4">
                        {testimonial.title}
                      </p>
                      <p className="text-gray-800 dark:text-gray-300 font-normal text-sm lg:text-[16px]">
                        {testimonial.message}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Bar with Arrow */}
        <div className="mt-4 flex justify-center items-center gap-4 relative z-10">
          <button
  type="button" //  good practice
  onClick={handleBackClick}
  aria-label="Go back" //  accessible name
  className="p-2 transition rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
>
  <ArrowLeft
    className="w-4 h-4 text-black dark:text-white"
    aria-hidden="true" // hides the decorative icon
  />
</button>

          <div className="w-20 md:w-40 h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden relative">
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
  type="button" // ✅ good habit
  onClick={handleArrowClick}
  aria-label="Go forward" // ✅ or "Next" / "Next slide" / "Next section" based on context
  className="ml-2 p-2 transition rounded-full hover:bg-gray-100 dark:hover:bg-gray-900"
>
  <ArrowRight
    className="w-4 h-4 text-black dark:text-white"
    aria-hidden="true" // ✅ hides decorative icon
  />
</button>

        </div>
      </section>
    </div>
  );
};

export default TestimonialSection;
