"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const JoinSection = () => {
  const handRef = useRef(null);
  const isInView = useInView(handRef, { once: true, margin: "-100px" });

  return (
    <div
      ref={handRef}
      className="relative flex justify-center text-center px-2 min-h-[45vh] md:min-h-[50vh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/images/about-us/bottom.svg)" }}
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-white font-normal text-xl md:text-4xl mt-6">
          Be a part of our extended family
        </h1>
        <p className="text-white text-sm md:text-lg mb-4">
          {` Join us, and let's build something amazing together.`}
        </p>
        <button
          className="bg-white text-black font-medium px-8 py-2 text-base rounded-full 
                    transition-all duration-300 ease-in-out
                    hover:bg-brand-500 hover:text-white"
        >
          Join us
        </button>
      </div>

      {/* Scroll-triggered Animated Hand */}
      <motion.div
        className="absolute justify-center bottom-0 z-10 left-1/2 transform -translate-x-1/2"
        initial={{ y: 100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Image
          src="/images/about-us/raiseHand.png"
          alt="Raised hand"
          width={200}
          height={200}
          className="max-h-[136px] md:max-h-[200px] w-auto"
        />
      </motion.div>
    </div>
  );
};

export default JoinSection;
