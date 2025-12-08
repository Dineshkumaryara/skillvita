"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const MilestoneSection = () => {
  const milestoneRef = useRef(null);
  const isInView = useInView(milestoneRef, { once: true, margin: "-100px" });

  return (
    <div
      ref={milestoneRef}
      className="px-4 py-12 flex justify-center bg-white dark:bg-black"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0 max-w-7xl w-full overflow-hidden rounded-2xl shadow-lg">
        {/* LEFT SECTION */}
        <div className="md:col-span-5 col-span-12 bg-[#e9f2ff] dark:bg-[#e9f2ff]/[0.8] flex flex-col items-center p-6 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
          <h2 className="text-left w-full text-xl font-semibold text-[#001f5c] mb-4">
            Milestones
          </h2>

          <div className="grid grid-cols-2 gap-4 max-w-xs w-full">
            <div className="bg-white shadow-md p-4 text-center rounded-lg">
              <strong className="text-xl text-[#001f5c]">10k+</strong>
              <p className="text-sm text-gray-700">Learners</p>
            </div>

            <div className="bg-white shadow-md p-4 text-center row-span-2 rounded-lg">
              <strong className="text-xl text-[#001f5c]">3,50,000</strong>
              <p className="text-sm text-gray-700">YouTube Views</p>
              <div className="mt-2 flex justify-center">
                <Image
                  src="/images/about-us/youtube.png"
                  alt="youtube"
                  width={60}
                  height={60}
                />
              </div>
            </div>

            <div className="bg-white shadow-md p-4 text-center rounded-lg">
              <strong className="text-xl text-[#001f5c]">28k+</strong>
              <p className="text-sm text-gray-700">Strong Community</p>
            </div>

            <div className="bg-white shadow-md p-4 text-center rounded-lg">
              <strong className="text-xl text-[#001f5c]">180+</strong>
              <p className="text-sm text-gray-700">Alumni Placed</p>
            </div>

            <div className="bg-white shadow-md p-4 text-center rounded-lg">
              <strong className="text-xl text-[#001f5c]">5k+</strong>
              <p className="text-sm text-gray-700">Premium Learners</p>
            </div>

            <div className="bg-white shadow-md p-4 text-center col-span-2 rounded-lg">
              <strong className="text-xl text-[#001f5c]">15k+</strong>
              <p className="text-sm text-gray-700">Careers Counselled</p>
            </div>
          </div>

          <motion.img
            src="/images/about-us/Plus-Photoroom.png"
            alt="plus"
            className="w-24 mt-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </div>

        {/* RIGHT SECTION */}
        <div className="md:col-span-7 col-span-12 bg-[#7a34f5] dark:bg-[#7a34f5]/[0.2] text-white p-6 flex flex-col items-center justify-start rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none">
          <h2 className="text-xl font-semibold mb-4 text-center">
            How it started
          </h2>

          {/* Wrapper to align image and text */}
          <div className="flex flex-col items-start w-full max-w-[400px]">
            <Image
              src="/images/about-us/startImage.jpg"
              alt="Team"
              width={400}
              height={240}
              className="mb-4 object-cover rounded-lg shadow-md"
            />

            <p className="text-sm leading-relaxed text-justify">
              In the heart of Hyderabad – The City of Nawabs, two education
              enthusiasts determined to make a difference in the education
              sector of India, started this journey of excellence. Though they
              had diverse academic backgrounds – one was regal Oxford alumni and
              the other from ISB alumni with brilliant backgrounds, their
              purpose of enhancing education in India, thus bringing dreams of
              thousands of learners to life has brought them together – joining
              forces for this venture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MilestoneSection;
