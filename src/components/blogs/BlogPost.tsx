"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Blog } from "@/types/blog";
import Preloader from "../ui/PreLoader";
import PageBreadcrumb from "../ui/PageBreadCrumb";

export default function BlogPost({ id }: { id: string }) {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [, setAllBlogs] = useState<Blog[]>([]);
  const [randomBlogs, setRandomBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(
          `https://api.coursevita.com/api/blogs/getallblogs`
        );
        const data = await response.json();
        const foundBlog = data.data.find((blog: Blog) => blog._id === id);
        setBlog(foundBlog || null);
        setAllBlogs(data.data);

        // Get 3 random blogs excluding the current blog
        const otherBlogs = data.data.filter((b: Blog) => b._id !== id);
        const shuffled = [...otherBlogs].sort(() => 0.5 - Math.random());
        setRandomBlogs(shuffled.slice(0, 3));
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return <Preloader />;
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl">Blog post not found</h1>
      </div>
    );
  }

  return (
    <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl ">
      <PageBreadcrumb
        mainPage={{ name: "Home", path: "/" }}
        secondPage={{ name: "Blogs", path: "/blogs" }}
        thirdPage={{ name: blog.title, path: `/blogs/${blog._id}` }}
      />

      <div className="relative h-[250px] sm:h-[300px] md:h-[400px] mb-4 sm:mb-8 rounded-lg overflow-hidden">
        <Image
          src={blog.headerImageUrl}
          alt={blog.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
        <span className="bg-gradient-to-r from-[#5028FF] to-[#FF4B00] text-transparent bg-clip-text font-semibold text-sm sm:text-base">
          {blog.blogCategory}
        </span>
        <span className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
          {blog.date}
        </span>
        <span className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
          {blog.views} views
        </span>
      </div>

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 text-black dark:text-white">
        {blog.title}
      </h1>
      <h2 className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-4 sm:mb-8">
        {blog.subTitle}
      </h2>

      <div
        className="prose prose-sm sm:prose lg:prose-lg max-w-none text-black dark:text-white"
        dangerouslySetInnerHTML={{ __html: blog.blogDescription }}
      />

      {/* Related Blogs Section */}
      <section className="my-10 sm:my-20">
        <h2 className="text-2xl sm:text-3xl dark:text-white font-bold mb-4 sm:mb-8">
          You might also like
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:gap-6">
          {randomBlogs.map((relatedBlog) => (
            <Link href={`/blogs/${relatedBlog._id}`} key={relatedBlog._id}>
              <div className="bg-white dark:bg-[#18181B] rounded-xl overflow-hidden transition-all duration-500 ease-in-out transform flex flex-col md:flex-row border border-[#E4E4E7] dark:border-[#27272A] hover:shadow-lg">
                <div className="p-4 sm:p-6 flex-1 order-2 md:order-1">
                  <h3 className="text-xl sm:text-2xl font-[700] mt-2 text-black dark:text-white">
                    {relatedBlog.title}
                  </h3>
                  <span className="text-xs sm:text-sm mt-1 text-gray-700 dark:text-gray-400">
                    {relatedBlog.date}
                  </span>
                  <p className="text-gray-600 dark:text-gray-300 mt-3 sm:mt-5 text-sm sm:text-base line-clamp-3">
                    {relatedBlog.blogDemo}
                  </p>
                  <div className="flex items-center mt-6 sm:mt-10 text-black dark:text-white">
                    <span className="text-sm sm:text-md inline-flex items-center hover:underline">
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
                        src={relatedBlog.headerImageUrl}
                        alt={relatedBlog.title}
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
      </section>

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
              className="flex items-center justify-center gap-2 bg-white text-[#000924] px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-[500] 
              transition-all duration-300 hover:bg-opacity-90
              transform active:scale-95 text-sm sm:text-base"
            >
              Start Learning
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 16 15"
                fill="none"
                className="w-3 h-3 sm:w-3.5 sm:h-3.5"
              >
                <path
                  d="M15.5 0.999999C15.5 0.447715 15.0523 -5.74472e-07 14.5 -8.27353e-07L5.5 -2.65626e-8C4.94772 -3.63737e-07 4.5 0.447715 4.5 1C4.5 1.55228 4.94772 2 5.5 2L13.5 2L13.5 10C13.5 10.5523 13.9477 11 14.5 11C15.0523 11 15.5 10.5523 15.5 10L15.5 0.999999ZM2.20711 14.7071L15.2071 1.70711L13.7929 0.292893L0.792893 13.2929L2.20711 14.7071Z"
                  fill="#100031"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
