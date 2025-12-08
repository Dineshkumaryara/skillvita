"use client";

import React, { useState } from "react";
import { Share2, Check, Calendar, MapPin, IndianRupee } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

interface CourseCardProps {
  course: {
    _id: string;
    title: string;
    instituteName: string;
    courseDescription?: string;
    modeOfStudy?: string;
    logoUrl?: string;
    courseLevel?: string;
    duration?: string;
    location?: string;
    totalFee?: string;
    tags?: string[];
    url?: string;
  };
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const [shareDialogOpen, setShareDialogOpen] = useState(false);

  // Function to create a URL-friendly slug

  // Function to create a slug for the institution name
  const createInstitutionSlug = (name?: string) => {
    if (!name) return "unknown";
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  };

  const handleShare = async () => {
    const shareData = {
      title: course.title,
      text: `Check out this course: ${course.title} at ${course.instituteName}`,
      url: `${window.location.origin}/findyourcareer/${course._id}`,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error("Error sharing:", err);
        setShareDialogOpen(true);
      }
    } else {
      setShareDialogOpen(true);
    }
  };

  // Labels for the course details
  const labels = [
    {
      icon: <Check className="h-4 w-4 text-gray-500" />,
      tag: "Eligibility",
      value: course.courseLevel || "N/A",
    },
    {
      icon: <Calendar className="h-4 w-4 text-gray-500" />,
      tag: "Duration",
      value: course.duration || "N/A",
    },
    {
      icon: <MapPin className="h-4 w-4 text-gray-500" />,
      tag: "Location",
      value: course.location || "N/A",
    },
    {
      icon: <IndianRupee className="h-4 w-4 text-gray-500" />,
      tag: "Price",
      value: course.totalFee || "N/A",
    },
  ];

  const [imgError, setImgError] = useState(false);
  return (
    // Update the main container padding and gap
    <div className="bg-white dark:bg-[#18181B] rounded-lg p-3 xs:p-4 sm:p-5 border border-[#E4E4E7] dark:border-[#27272A]">
      <div className="flex flex-col sm:flex-row gap-3 xs:gap-4 sm:gap-5">
        {/* Logo */}
        <div className="hidden sm:flex shrink-0">
          <div className="p-2 xs:p-3 dark:border-gray-700 rounded-lg h-[60px] xs:h-[76px] w-[60px] xs:w-[76px] flex items-center justify-center">
            {course.logoUrl ? (
              <div className="h-12 w-12 flex items-center justify-center">
                <Image
                  src={
                    imgError
                      ? "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2z'/%3E%3Cpolyline points='8 9 12 5 16 9'/%3E%3Cline x1='12' y1='5' x2='12' y2='19'/%3E%3C/svg%3E"
                      : course.logoUrl || ""
                  }
                  alt={course.instituteName || "Institute Logo"}
                  width={100}
                  height={100}
                  className="max-h-full max-w-full object-contain"
                  onError={() => setImgError(true)}
                  unoptimized
                />
              </div>
            ) : (
              <div className="h-12 w-12 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {course.instituteName?.charAt(0) || "?"}
                </span>
              </div>
            )}
          </div>
        </div>
    
        {/* Content */}
        <div className="flex-1 min-w-0"> {/* Added min-w-0 to prevent overflow */}
          <div className="flex items-start justify-between gap-2 xs:gap-4">
            <div className="flex gap-2 xs:gap-4 flex-1 min-w-0"> {/* Added min-w-0 and flex-1 */}
              {/* Mobile logo - update sizes */}
              <div className="sm:hidden p-2 border border-gray-200 dark:border-gray-700 rounded-lg h-[50px] xs:h-[62px] w-[50px] xs:w-[62px] flex items-center justify-center shrink-0">
                {course.logoUrl ? (
                  <div className="h-10 w-12 flex items-center justify-center">
                    <Image
                      src={
                        imgError
                          ? "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2z'/%3E%3Cpolyline points='8 9 12 5 16 9'/%3E%3Cline x1='12' y1='5' x2='12' y2='19'/%3E%3C/svg%3E"
                          : course.logoUrl || ""
                      }
                      alt={course.instituteName || "Institute Logo"}
                      width={80} // adjust as needed
                      height={80} // adjust as needed
                      className="max-h-full max-w-full object-contain"
                      onError={() => setImgError(true)}
                      unoptimized // use if image is from external domain and not in next.config.js
                    />
                  </div>
                ) : (
                  <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {course.instituteName?.charAt(0) || "?"}
                    </span>
                  </div>
                )}
              </div>
    
              {/* Title and Institution - improve text wrapping */}
              <div className="flex-1 min-w-0 overflow-hidden">
                <h3 className="text-base xs:text-lg sm:text-xl font-medium text-gray-900 dark:text-gray-100 truncate">
                  {course.title}
                </h3>
                <Link
                  href={`/career/college/${createInstitutionSlug(
                    course.instituteName
                  )}`}
                  className="text-xs xs:text-sm text-gray-800 dark:text-gray-200 hover:underline truncate block"
                >
                  {course.instituteName}
                </Link>
              </div>
            </div>
    
            {/* Share button - adjust size */}
            <button
              onClick={handleShare}
              className="hidden sm:flex items-center justify-center w-10 xs:w-12 h-10 xs:h-12 rounded-full border border-gray-200 dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-black transition-colors shrink-0"
              type="button"
              aria-label="Share course"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                className="text-gray-500 dark:text-gray-400"
              >
                <path
                  d="M18.6115 10.1776C18.3029 10.1776 18.0972 10.3833 18.0972 10.6919V14.7033C18.0972 16.6576 16.5029 18.2004 14.6 18.2004H6.9886C5.03432 18.2004 3.49146 16.6576 3.49146 14.7033V7.09188C3.49146 5.13759 5.08575 3.59473 6.9886 3.59473H10.8457C11.1543 3.59473 11.36 3.38902 11.36 3.08045C11.36 2.77188 11.1543 2.56616 10.8457 2.56616H6.9886C4.4686 2.56616 2.46289 4.6233 2.46289 7.09188V14.7033C2.46289 17.2233 4.52003 19.229 6.9886 19.229H14.6C17.12 19.229 19.1257 17.2233 19.1257 14.7033V10.6919C19.1257 10.4347 18.92 10.1776 18.6115 10.1776Z"
                  fill="currentColor"
                />
                <path
                  d="M8.78808 11.6176C8.68522 11.8747 8.83951 12.1833 9.09665 12.2861H9.25093C9.45665 12.2861 9.66236 12.1318 9.76522 11.9261C11.0509 8.58327 14.0338 6.1147 17.5824 5.54899L16.3481 7.70899C16.1938 7.96613 16.2966 8.2747 16.5538 8.42899C16.6052 8.48042 16.7081 8.48042 16.8109 8.48042C17.0166 8.48042 17.1709 8.37756 17.2738 8.22327L19.0738 4.98327C19.2281 4.72613 19.1252 4.41756 18.8681 4.26327L15.5252 2.41185C15.2681 2.25756 14.9595 2.36042 14.8052 2.61756C14.6509 2.8747 14.7538 3.18327 15.0109 3.33756L17.2224 4.57185C13.3652 5.24042 10.1766 7.9147 8.78808 11.6176Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
    
          {/* Course details - improve wrapping and spacing */}
          <div className="flex flex-wrap gap-2 xs:gap-4 sm:gap-6 md:gap-10 mt-4 xs:mt-6">
            {labels.map((item, index) => (
              <div key={index} className="flex flex-col min-w-[80px] xs:min-w-0">
                <div className="flex items-center gap-1">
                  {item.icon}
                  <span className="text-xs text-gray-600 dark:text-gray-400">
                    {item.tag}
                  </span>
                </div>
                <div className="text-sm text-gray-800 dark:text-gray-200 font-medium mt-1">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
    
          {/* Tags and actions - improve mobile layout */}
          <div className="mt-4 xs:mt-6 flex flex-col xs:flex-row xs:items-center justify-between gap-3 xs:gap-5">
            <div className="flex flex-wrap gap-1.5 xs:gap-2 max-w-full overflow-x-auto pb-1">
              {course.tags && course.tags.length > 0 ? (
                course.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    className="h-[24px] xs:h-[27px] px-[8px] xs:px-[10px] text-xs xs:text-sm rounded-full bg-brand-200/30 dark:bg-brand-700/[0.3] text-brand-500 dark:text-brand-200 border-0 font-normal whitespace-nowrap"
                  >
                    {tag}
                  </Badge>
                ))
              ) : (
                <span className="text-xs text-gray-500">No tags available</span>
              )}
            </div>
    
            <div className="flex gap-3 xs:gap-4 self-end xs:self-auto">
              {/* Share button (mobile) */}
              <Button
                variant="outline"
                size="sm"
                className="sm:hidden flex items-center gap-2 h-[32px] xs:h-[36px] text-xs xs:text-sm"
                onClick={handleShare}
                type="button"
              >
                <Share2 className="h-3.5 w-3.5 xs:h-4 xs:w-4" />
                <span>Share</span>
              </Button>
    
              {/* Know more button */}
              <Link
                href={`find-your-career/${course._id}`}
                className="h-[32px] xs:h-[36px] px-4 xs:px-6 flex justify-center items-center rounded-md border border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-white transition-all text-xs xs:text-sm whitespace-nowrap"
              >
                Know more
              </Link>
            </div>
          </div>
        </div>
      </div>
    
      {/* Share Dialog - make it responsive */}
      <Dialog open={shareDialogOpen} onOpenChange={setShareDialogOpen}>
        <DialogContent className="w-[90vw] max-w-[400px] p-4 xs:p-6">
          <DialogHeader>
            <DialogTitle>Share this course</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="border rounded-md p-2">
              <p className="text-sm font-medium">{course.title}</p>
              <p className="text-xs text-gray-500">{course.instituteName}</p>
            </div>
            <div className="flex justify-center gap-4">
              <Button
                variant="outline"
                onClick={() => {
                  navigator.clipboard.writeText(
                    `${window.location.origin}/findyourcareer/${course._id}`
                  );
                  alert("Link copied to clipboard!");
                }}
              >
                Copy Link
              </Button>
              <DialogClose asChild>
                <Button variant="ghost">Close</Button>
              </DialogClose>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CourseCard;
