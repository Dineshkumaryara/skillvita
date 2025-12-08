"use client";

import React from "react";
import Image from "next/image";

const SubscribeBanner = () => {
  return (
    <div className="bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Newsletter Subscribe Section */}
        <section className="bg-[#0F002E] dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] text-white rounded-3xl px-6 py-10 md:py-14 md:px-12 lg:px-32 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 w-full text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-6">
              Your passport to success <br className="md:hidden" />
              subscribe to <span className="text-[#FE7465]">
                coursevita
              </span>{" "}
              today!
            </h2>
            <form className="flex items-center justify-center md:justify-start gap-3 max-w-md mx-auto md:mx-0 w-full">
              <input
                type="email"
                placeholder="Email Address"
                className="w-3/5 px-4 py-2 bg-gray-100 rounded-md text-black placeholder-gray-600 focus:outline-none border"
              />
              <button
                type="submit"
                className="w-2/5 bg-[#FE7465] text-white font-normal text-[16px] px-4 py-2 rounded-md hover:opacity-90 transition whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/images/landing/news-book.png"
              alt="Subscribe Illustration"
              width={260}
              height={180}
              className="object-contain"
            />
          </div>
        </section>

        {/* Demo Booking Section */}
        <div className="mt-16 text-center mx-auto mb-10">
          <h2 className="text-xl md:text-3xl font-bold text-black dark:text-white">
            <span className="text-[#FE7465]">Try before you join!</span> Take up
            our free demo session today!
          </h2>
          <p className="text-gray-700 dark:text-gray-400 mt-3">
            Have a chance to experience our immersive & interactive learning
            session with industry experts.
          </p>
        </div>

        <section className="lg:bg-[#123644] rounded-3xl relative overflow-hidden">
          <div className="relative w-full max-w-7xl mx-auto flex flex-col lg:block">
            {/* Image (always on top on small, side-by-side on md+) */}
            <div className="relative lg:w-3/5 w-full">
              <Image
                src="/images/landing/demo-image.svg"
                alt="Student attending demo"
                width={1200}
                height={600}
                className="w-full h-auto object-cover rounded-b-none"
              />

              {/* Right-edge blur effect */}
              <div className="hidden lg:block absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-[#123644] via-[#123644]/60 to-transparent dark:bg-gradient-to-l dark:from-[#123644] dark:via-[#123644]/60 dark:to-transparent z-10 pointer-events-none" />
            </div>

            {/* Form - stacked below on small, overlaid on tablet and up */}
            <div className="relative lg:absolute lg:bottom-0 lg:right-6 w-full lg:max-w-md bg-[#F3F5FC] dark:bg-[#18181B] backdrop-blur-md p-6 lg:rounded-2xl lg:rounded-b-none z-10 lg:mt-0 lg:mx-0">
              <h3 className="text-xl font-bold mb-2 text-center text-black dark:text-white">
                Book your demo
              </h3>
              <div className="flex justify-center mb-6">
                <Image
                  src="/images/landing/underline.png"
                  alt="underline"
                  width={150}
                  height={20}
                  className="object-contain"
                />
              </div>

              <form className="space-y-4 text-gray-800 dark:text-gray-200">
                <div className="flex flex-col lg:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="Full name*"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Mobile Number*"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email ID*"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none"
                />
                <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none text-gray-800 dark:text-gray-200">
                  <option>Select your qualification</option>
                  <option>10th / 12th</option>
                  <option>UG Student</option>
                  <option>PG Student</option>
                  <option>Working Professional</option>
                </select>
                <button
                  type="submit"
                  className="w-full bg-brand-500 text-white py-3 rounded-md font-semibold hover:opacity-90 transition"
                >
                  Contact now
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SubscribeBanner;
