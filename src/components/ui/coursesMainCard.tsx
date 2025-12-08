"use client";

import React, { useState } from "react";
import DownloadIcon from "../svg_icons/download";
import Link from "next/link";
import Image from "next/image";
import brochures from "../../global/brochurs.json";
import BrochureDownloadDialog from "./BrochureDownloadDialog";

interface CourseMainCardProps {
  image: string;
  title: string;
  time: string;
  coursePath: string;
}

const CourseMainCard: React.FC<CourseMainCardProps> = ({
  image,
  title,
  time,
  coursePath,
}) => {
  const [showDialog, setShowDialog] = useState(false);
  const brochureUrl =
    brochures[coursePath as keyof typeof brochures] || brochures.commonBrochure;

  const handleDownload = () => {
    setShowDialog(true);
  };

  return (
    <>
      <div className="h-full flex flex-col justify-between rounded-[16px] overflow-hidden bg-white dark:bg-[#18181B] p-4 border border-[#E4E4E7] dark:border-[#27272A]">
        {/* Card Image with Live Badge */}
        <div className="relative mb-4 w-full h-[160px] rounded-xl overflow-hidden">
          <div className="absolute top-3 left-3 z-10 rounded-[4px] border border-[#A6A6A6] bg-gradient-to-r from-[rgba(255,255,255,0.09)] to-[rgba(153,153,153,0)] backdrop-blur-[6px] text-white px-2 py-0.5 flex items-center gap-1.5 text-sm">
            <div className="relative w-4 h-4">
              <div className="absolute inset-0 border-[1.5px] border-green-500 rounded-full animate-ping"></div>
              <div className="absolute w-[6px] h-[6px] bg-green-500 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
            </div>
            <span className="text-green-200">Live</span>
          </div>

          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Placement Text */}
        <div className="mb-2">
          <span className="bg-gradient-to-r from-[#5028FF] to-[#FF4B00] text-transparent bg-clip-text text-base font-[500]">
            100% Placement Assistance
          </span>
        </div>

        <h2 className="text-2xl font-bold text-black dark:text-white mb-4 truncate whitespace-nowrap overflow-hidden">
          {title}
        </h2>

        {/* Features List */}
        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M6.66699 1.66699V5.00033"
                  stroke="#644DFF"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.333 1.66699V5.00033"
                  stroke="#644DFF"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.8333 3.33301H4.16667C3.24619 3.33301 2.5 4.0792 2.5 4.99967V16.6663C2.5 17.5868 3.24619 18.333 4.16667 18.333H15.8333C16.7538 18.333 17.5 17.5868 17.5 16.6663V4.99967C17.5 4.0792 16.7538 3.33301 15.8333 3.33301Z"
                  stroke="#644DFF"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.5 8.33301H17.5"
                  stroke="#644DFF"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-base">{time}</span>
          </div>

          <div className="flex items-center gap-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M17.4455 4.85906L12.7581 0.17168C12.6487 0.0622266 12.4994 0 12.3438 0H4.14062C3.17137 0 2.38281 0.788555 2.38281 1.75781V18.2422C2.38281 19.2114 3.17137 20 4.14062 20H15.8594C16.8286 20 17.6172 19.2114 17.6172 18.2422V5.27344C17.6172 5.11367 17.5501 4.96363 17.4455 4.85906ZM12.9297 2.00051L15.6167 4.6875H13.5156C13.1925 4.6875 12.9297 4.42465 12.9297 4.10156V2.00051ZM15.8594 18.8281H4.14062C3.81754 18.8281 3.55469 18.5653 3.55469 18.2422V1.75781C3.55469 1.43473 3.81754 1.17188 4.14062 1.17188H11.7578V4.10156C11.7578 5.07082 12.5464 5.85938 13.5156 5.85938H16.4453V18.2422C16.4453 18.5653 16.1825 18.8281 15.8594 18.8281Z"
                  fill="#644DFF"
                />
                <path
                  d="M13.5156 8.28125H6.48438C6.16078 8.28125 5.89844 8.54359 5.89844 8.86719C5.89844 9.19078 6.16078 9.45312 6.48438 9.45312H13.5156C13.8392 9.45312 14.1016 9.19078 14.1016 8.86719C14.1016 8.54359 13.8392 8.28125 13.5156 8.28125Z"
                  fill="#644DFF"
                />
                <path
                  d="M13.5156 10.625H6.48438C6.16078 10.625 5.89844 10.8873 5.89844 11.2109C5.89844 11.5345 6.16078 11.7969 6.48438 11.7969H13.5156C13.8392 11.7969 14.1016 11.5345 14.1016 11.2109C14.1016 10.8873 13.8392 10.625 13.5156 10.625Z"
                  fill="#644DFF"
                />
                <path
                  d="M13.5156 12.9688H6.48438C6.16078 12.9688 5.89844 13.2311 5.89844 13.5547C5.89844 13.8783 6.16078 14.1406 6.48438 14.1406H13.5156C13.8392 14.1406 14.1016 13.8783 14.1016 13.5547C14.1016 13.2311 13.8392 12.9688 13.5156 12.9688Z"
                  fill="#644DFF"
                />
              </svg>
            </div>
            <span className="text-base">Guided Projects</span>
          </div>
        </div>

        {/* Learn More Button */}
        <div className="flex gap-2">
          <Link href={`/courses/${coursePath}`} className="flex-1">
            <button className="w-full py-2.5 px-4 rounded-lg hover:bg-[#6B46FE] hover:text-white transition-all duration-300 border border-[#6B46FE] text-[#6B46FE] text-base font-medium text-center cursor-pointer">
              Learn more
            </button>
          </Link>
          <button
            onClick={handleDownload}
            className="p-2.5 rounded-lg bg-[#6B46FE] transition-all duration-300 group flex items-center gap-2 cursor-pointer"
            title="Download Brochure"
          >
            <DownloadIcon />
          </button>
        </div>
      </div>

      {showDialog && (
        <BrochureDownloadDialog
          handleCloseDialog={() => setShowDialog(false)}
          courseTitle={title}
          brochureUrl={brochureUrl}
        />
      )}
    </>
  );
};

export default CourseMainCard;
