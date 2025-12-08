"use client";
import { useState } from "react";
import Image from "next/image";
import ApplyNowDialog from "./ApplynowDialog";

interface Course {
  _id?: string;
  title?: string;
  instituteName?: string;
  duration?: string;
  totalFee?: string;
  modeOfStudy?: string;
  credential?: string;
  location?: string;
  category?: string;
  eligibilityCriteria?: string;
  courseDescription?: string;
  logoUrl?: string;
  url?: string;
}

interface CourseDescriptionProps {
  course: Course;
}

const CourseDescription: React.FC<CourseDescriptionProps> = ({ course }) => {
  const [, setOpenShare] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isSharing, setIsSharing] = useState(false);

  const tableContents = [
    { key: "Duration", value: course.duration },
    { key: "Total fee", value: course.totalFee },
    { key: "Mode of study", value: course.modeOfStudy },
    { key: "Credential", value: course.credential },
    { key: "Location", value: course.location },
    { key: "Category", value: course.category },
    { key: "Eligibility", value: course.eligibilityCriteria },
  ];

  const handleKnowmore = (url?: string) => {
    console.log("Course URL:", url);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => setDialogOpen(false);
  // const handleShareClose = () => setOpenShare(false);

  const handleShare = async () => {
    if (navigator.share && !isSharing) {
      setIsSharing(true);
      try {
        await navigator.share({
          title: course.title,
          text: `Check out this course: ${course.title} at ${course.instituteName}`,
          url: `${window.location.origin}/findyourcareer/${course._id}`,
        });
      } catch (error: unknown) {
        if (
          error instanceof Error &&
          error.name !== "AbortError" &&
          error.message !== "Share canceled"
        ) {
          console.error(error);
        }
      } finally {
        setIsSharing(false);
      }
    } else {
      setOpenShare(true);
    }
  };

  return (
    <div className="text-gray-900 dark:text-gray-100">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-8">
        {/* Left */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 w-full">
          <div className="border border-[#E4E4E7] dark:border-[#27272A] rounded-lg bg-[#F3F5FC] dark:bg-[#18181B] w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center">
            {course.logoUrl ? (
              <Image
                src={course.logoUrl}
                alt="Course Logo"
                width={96} // sm:w-24 = 96px
                height={96} // sm:h-24 = 96px
                className="w-16 h-16 sm:w-24 sm:h-24 object-contain"
              />
            ) : (
              <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gray-100 dark:bg-gray-700" />
            )}
          </div>
          <div className="text-center sm:text-left sm:pt-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-200">
              {course.title}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              {course.instituteName}
            </p>
          </div>
        </div>

        {/* Right Buttons */}
        <div className="flex flex-row md:flex-col gap-3 justify-end max-w-md w-full md:w-auto">
          <button
            onClick={() => handleKnowmore(course.url)}
            className="bg-brand-500 text-white font-semibold text-sm sm:text-base py-2 px-4 sm:px-6 rounded-md w-full md:w-[192px]"
          >
            Apply Now
          </button>
          <button
            onClick={handleShare}
            className="border border-[#E4E4E7] dark:border-[#27272A] flex items-center justify-center gap-2 text-gray-900 dark:text-gray-300 font-semibold text-sm sm:text-base py-2 px-4 sm:px-6 rounded-md w-full md:w-[192px] hover:bg-gray-100 dark:hover:bg-[#18181B]"
          >
            Share
            <Image
              src="/images/findYourCareer/share.svg"
              alt="share icon"
              width={20}
              height={20}
              className="w-4 h-4 sm:w-5 sm:h-5 dark:invert"
            />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-0 sm:px-2">
        <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-900 dark:text-gray-200">Overview</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          {course.courseDescription}
        </p>

        <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-900 dark:text-gray-200">
          Eligibility Criteria
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          {course.eligibilityCriteria}
        </p>

        {/* Responsive Table */}
        <div className="overflow-x-auto border border-[#E4E4E7] dark:border-[#27272A] rounded-xl p-4 sm:p-6 bg-white dark:bg-[#18181B]">
          <table className="min-w-full table-auto border-collapse">
            <tbody>
              {tableContents.map((item, idx) => (
                <tr
                  key={idx}
                  className="border-b border-[#E4E4E7] dark:border-[#27272A] last:border-b-0"
                >
                  <td className="py-3 px-4 font-medium text-gray-800 dark:text-gray-200 w-1/3 border-r border-[#E4E4E7] dark:border-[#27272A]">
                    {item.key}
                  </td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">
                    {item.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Apply Now Dialog */}
      {dialogOpen && (
        <div className="fixed inset-0 bg-opacity-30 bg-black flex items-center justify-center z-50 px-4">
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-lg max-w-lg w-full p-6 relative">
            <button
              onClick={handleCloseDialog}
              className="absolute top-3 right-4 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white font-bold text-xl"
              aria-label="Close dialog"
            >
              &times;
            </button>
            <ApplyNowDialog
              handleCloseDialog={handleCloseDialog}
              courseTitle={course.title || ""}
              courseLink={course.url || ""}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDescription;
