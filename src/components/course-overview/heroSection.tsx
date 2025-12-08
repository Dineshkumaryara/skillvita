'use client';

import React, { useState } from "react";
import Image from "next/image";
import CalendarIcon from "../svg_icons/calendar";
import DownloadIcon from "../svg_icons/download";
import suitcase from "../../../public/images/courses/suitcase.svg";
import suitcase2 from "../../../public/images/courses/suitcase2.svg";
import cal from "../../../public/images/courses/Calendar.svg";
import down from "../../../public/images/courses/Download.svg";
import brochures from "../../global/brochurs.json";
import BrochureDownloadDialog from "../ui/BrochureDownloadDialog";

interface HeroSectionProps {
  courseTitle: string;
  courseDesc: string;
  period: string;
  assistance: string;
  level: string;
  image: string;
  coursePath: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  courseTitle,
  courseDesc,
  period,
  assistance,
  image,
  coursePath,
}) => {
  const [showDownloadDialog, setShowDownloadDialog] = useState(false);
  const brochureUrl = brochures[coursePath as keyof typeof brochures] || brochures.commonBrochure;

  const handleDownload = () => {
    setShowDownloadDialog(true);
  };

  return (
    <div className="py-1">
      <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden my-6">
        {/* Mobile View */}
        <div className="md:hidden">
          <div className="p-4 px-0">
            <h1 className="text-md font-[500] text-[#7234F7] mb-1">
              Become A Successful
            </h1>
            <h1 className="text-3xl font-[500] text-[#00] mb-4">
              {courseTitle}
            </h1>
            <div className="flex flex-wrap gap-3 ">
              <div className="text-[#7234F7] p-3 rounded-lg flex items-center gap-1.5 text-xs bg-[rgba(114,52,247,0.04)]">
                <Image
                  src={cal}
                  alt="suitcase"
                  width={15}
                  height={15}
                  className="object-contain"
                />
                {period}
              </div>
              <div className="text-[#7234F7] p-3 rounded-lg flex items-center gap-1.5 text-xs bg-[rgba(114,52,247,0.04)]">
                <Image
                  src={suitcase2}
                  alt="suitcase"
                  width={15}
                  height={15}
                  className="object-contain"
                />
                {assistance}
              </div>
            </div>
          </div>

          <div>
            <div
              className="w-full h-[240px] relative mb-6 rounded-lg"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>

          <div className="pb-4">
            <p className="text-[14px] font-[400] text-[#666] mb-6">
              {courseDesc}
            </p>
            <div className="flex flex-col gap-3">
              <button className="bg-[#7234F7] text-white py-3 rounded-lg font-semibold w-full">
                Apply Now
              </button>
              <button 
                onClick={handleDownload}
                className="flex gap-2 items-center justify-center text-[#7234F7] py-3 rounded-lg font-semibold border border-[#7234F7] w-full"
              >
                <Image
                  src={down}
                  alt="suitcase"
                  width={20}
                  height={20}
                  className="object-contain"
                />
                Download curriculum
              </button>
            </div>
          </div>
        </div>

        {/* Desktop View */}
        <div
          className="hidden md:flex items-center justify-between py-20 px-16 relative min-h-[400px]"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="absolute bottom-0 left-0 w-full h-full"
            style={{
              borderRadius: "16px 0px 0px 16px",
              background:
                "linear-gradient(270deg, rgba(0, 0, 0, 0.00) 0%, #000 100%)",
              opacity: 0.8,
            }}
          ></div>
          <div className="flex-1 relative z-10">
            <h1 className="text-4xl font-[500] text-[#fff] mb-4">
              {courseTitle}
            </h1>
            <div className="flex flex-wrap gap-3">
              <div
                className="text-[#fff] px-3 py-1.5 rounded-lg border border-white backdrop-blur-sm flex items-center gap-1.5 text-sm"
                style={{
                  background:
                    "linear-gradient(110deg, rgba(114, 52, 247, 0.00) -3.79%, rgba(255, 255, 255, 0.29) 102.85%)",
                }}
              >
                <CalendarIcon />
                {period}
              </div>
              <div
                className="text-[#fff] px-3 py-1.5 rounded-lg border border-white backdrop-blur-sm flex items-center gap-1.5 text-sm"
                style={{
                  background:
                    "linear-gradient(110deg, rgba(114, 52, 247, 0.00) -3.79%, rgba(255, 255, 255, 0.29) 102.85%)",
                }}
              >
                <Image
                  src={suitcase}
                  alt="suitcase"
                  width={20}
                  height={20}
                  className="object-contain"
                />
                {assistance}
              </div>
            </div>
            <p className="text-[16px] font-[400] text-[#fff] py-10 max-w-2xl">
              {courseDesc}
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-black py-3 rounded-lg font-semibold w-[235px]">
                Apply Now
              </button>
              <button 
                onClick={handleDownload}
                className="flex gap-2 items-center justify-center text-white py-3 rounded-lg font-semibold border border-white w-[235px]"
              >
                <DownloadIcon />
                Download curriculum
              </button>
            </div>
          </div>
        </div>
      </div>

      {showDownloadDialog && (
        <BrochureDownloadDialog
          handleCloseDialog={() => setShowDownloadDialog(false)}
          courseTitle={courseTitle}
          brochureUrl={brochureUrl}
        />
      )}
    </div>
  );
};

export default HeroSection;
