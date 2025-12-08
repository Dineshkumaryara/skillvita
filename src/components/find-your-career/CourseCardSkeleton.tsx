"use client";
import React from "react";

const shimmer = "animate-pulse bg-gray-200 dark:bg-gray-700";

const CourseCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white dark:bg-[#18181B] rounded-lg p-3 xs:p-4 sm:p-5 border border-[#E4E4E7] dark:border-[#27272A]">
      <div className="flex flex-col sm:flex-row gap-3 xs:gap-4 sm:gap-5">
        {/* Logo Skeleton */}
        <div className="hidden sm:flex shrink-0">
          <div className={`p-2 xs:p-3 rounded-lg h-[60px] xs:h-[76px] w-[60px] xs:w-[76px] flex items-center justify-center ${shimmer}`}></div>
        </div>
        {/* Content Skeleton */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 xs:gap-4">
            <div className="flex gap-2 xs:gap-4 flex-1 min-w-0">
              {/* Mobile logo skeleton */}
              <div className={`sm:hidden p-2 border border-gray-200 dark:border-gray-700 rounded-lg h-[50px] xs:h-[62px] w-[50px] xs:w-[62px] flex items-center justify-center shrink-0 ${shimmer}`}></div>
              {/* Title and Institution skeleton */}
              <div className="flex-1 min-w-0 overflow-hidden">
                <div className={`h-5 xs:h-6 sm:h-7 w-3/4 mb-2 rounded ${shimmer}`}></div>
                <div className={`h-4 w-1/2 rounded ${shimmer}`}></div>
              </div>
            </div>
            {/* Share button skeleton */}
            <div className={`hidden sm:flex items-center justify-center w-10 xs:w-12 h-10 xs:h-12 rounded-full border border-gray-200 dark:border-gray-500 ${shimmer}`}></div>
          </div>
          {/* Course details skeleton */}
          <div className="flex flex-wrap gap-2 xs:gap-4 sm:gap-6 md:gap-10 mt-4 xs:mt-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex flex-col min-w-[80px] xs:min-w-0">
                <div className={`h-4 w-16 rounded ${shimmer}`}></div>
                <div className={`h-5 w-20 mt-1 rounded ${shimmer}`}></div>
              </div>
            ))}
          </div>
          {/* Tags and actions skeleton */}
          <div className="mt-4 xs:mt-6 flex flex-col xs:flex-row xs:items-center justify-between gap-3 xs:gap-5">
            <div className="flex flex-wrap gap-1.5 xs:gap-2 max-w-full overflow-x-auto pb-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className={`h-[24px] xs:h-[27px] w-16 rounded-full ${shimmer}`}></div>
              ))}
            </div>
            <div className="flex gap-3 xs:gap-4 self-end xs:self-auto">
              <div className={`h-[32px] xs:h-[36px] w-20 rounded-md border ${shimmer}`}></div>
              <div className={`h-[32px] xs:h-[36px] w-24 rounded-md border ${shimmer}`}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCardSkeleton; 