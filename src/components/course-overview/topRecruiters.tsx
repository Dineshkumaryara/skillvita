import React from "react";
import Image from "next/image";
import Recruiters from "./companyLogos/index";

interface TopRecruitersProps {
  recruiters?: string[];
  courseTitle?: string;
}

const TopRecruiters: React.FC<TopRecruitersProps> = ({ courseTitle, recruiters = [] }) => { 
    if (!recruiters || recruiters.length === 0) {
      return null; 
    }

  const recruiterData = recruiters.map((company) => ({
    label: company,
    icon: Recruiters[company as keyof typeof Recruiters],
  }));

  const mid = Math.ceil(recruiterData.length / 2);
  const firstRow = recruiterData.slice(0, mid);
  const secondRow = recruiterData.slice(mid);

  return (
    <div className="rounded-[20px] p-4 sm:p-6 md:p-10 max-w-7xl mx-auto md:px-0">
      <h2 
        className="mb-6 md:mb-10 scroll-mt-[80px] text-center text-[20px] md:text-[28px] font-bold"
      >
        Top Recruiters for <span className="text-[#FF6B6B]">{courseTitle}</span>
      </h2>

      <div className="flex flex-col gap-4 md:gap-8 overflow-hidden">
        {/* Top row: scrolls left */}
        <div className="relative">
          <div className="absolute left-0 top-0 z-10 h-full w-[50px] md:w-[100px] bg-gradient-to-r from-white dark:from-black to-transparent pointer-events-none"></div>
          <div className="flex w-max gap-3 md:gap-6 animate-[scrollLeft_35s_linear_infinite]">
            {[...firstRow, ...firstRow].map((r, i) => (
              <div
                key={`top-${i}`}
                className="flex h-[70px] md:h-[100px] min-w-[90px] md:min-w-[130px] items-center justify-center bg-white dark:bg-[#18181B] rounded-xl border border-[#E4E4E7] dark:border-[#27272A] p-2 md:p-4 px-4 md:px-8"
              >
                {r.icon && (
                  <Image
                    src={r.icon}
                    alt={r.label}
                    width={130}
                    height={50}
                    className="h-[35px] md:h-[50px] w-auto object-contain"
                  />
                )}
              </div>
            ))}
          </div>
          <div className="absolute right-0 top-0 z-10 h-full w-[50px] md:w-[100px] bg-gradient-to-l from-white dark:from-black to-transparent pointer-events-none"></div>
        </div>

        {/* Bottom row: scrolls right */}
        <div className="relative">
          <div className="absolute left-0 top-0 z-10 h-full w-[50px] md:w-[100px] bg-gradient-to-r from-white dark:from-black to-transparent pointer-events-none"></div>
          <div className="flex w-max gap-3 md:gap-6 animate-[scrollRight_35s_linear_infinite]">
            {[...secondRow, ...secondRow].map((r, i) => (
              <div
                key={`bottom-${i}`}
                className="flex h-[70px] md:h-[100px] min-w-[90px] md:min-w-[130px] items-center justify-center bg-white dark:bg-[#18181B] rounded-xl border border-[#E4E4E7] dark:border-[#27272A] p-2 md:p-4 px-4 md:px-8"
              >
                {r.icon && (
                  <Image
                    src={r.icon}
                    alt={r.label}
                    width={130}
                    height={50}
                    className="h-[35px] md:h-[50px] w-auto object-contain"
                  />
                )}
              </div>
            ))}
          </div>
          <div className="absolute right-0 top-0 z-10 h-full w-[50px] md:w-[100px] bg-gradient-to-l from-white dark:from-black to-transparent pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default TopRecruiters;