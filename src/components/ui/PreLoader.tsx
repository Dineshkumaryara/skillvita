"use client";
import React from "react";
import Image from "next/image";

const Preloader = () => {
  return (
    <div className="flex justify-center items-center h-screen transition-colors duration-300">
      <div className="relative w-24 h-24">
        <svg 
          className="w-24 h-24" 
          viewBox="0 0 100 100"
          style={{
            animation: "rotate 2s linear infinite"
          }}
        >
          <circle
            cx="50"
            cy="50"
            r="35"
            stroke="#ddd"
            strokeWidth="7"
            fill="none"
            className="dark:stroke-gray-700"
          />
          <circle
            cx="50"
            cy="50"
            r="35"
            stroke="#32FE6B"
            strokeWidth="7"
            strokeDasharray="40, 157"
            strokeDashoffset="0"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/images/logo/loader.svg"
            width={30}
            height={30}
            alt="Logo"
            priority
          />
        </div>
      </div>
      
      {/* Inline styles for the animation */}
      <style jsx global>{`
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Preloader;