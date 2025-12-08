import React from "react";
import Image from "next/image";
import mentorImages from "./mentorsPhotos";

interface MentorSectionProps {
  mentors: Array<{
    name: string;
    tagLine: string;
    linkedIn: string;
    profileImg: string;
  }>;
}

const MentorSection: React.FC<MentorSectionProps> = ({ mentors }) => {
  return (
    <div className="relative p-4 md:p-8">
     <svg
        className="absolute top-10 right-10 h-[80%] -z-10"
        xmlns="http://www.w3.org/2000/svg"
        width="1260"
        height="646"
        viewBox="0 0 1260 646"
        fill="none"
        style={{ width: 'auto' }}
      >
        <path
          d="M509.466 0.306641C511.003 0.216558 512.597 0.248332 514.167 0.303711C515.733 0.358945 517.281 0.437482 518.707 0.4375H1006.58L1006.99 0.442383C1011.23 0.546432 1015.29 2.23322 1018.32 5.16602V5.16504L1232.99 214.667V214.668L1234.09 215.748V215.749L1242.91 224.467L1242.91 224.468L1254.83 236.092C1257.17 238.369 1258.77 241.278 1259.42 244.447C1260.07 247.617 1259.75 250.906 1258.49 253.895C1257.23 256.883 1255.1 259.438 1252.36 261.234C1249.61 263.031 1246.39 263.986 1243.09 263.979H766.921V630.238C766.554 634.229 764.771 637.968 761.882 640.803C758.992 643.638 755.18 645.388 751.108 645.749H253.021C251.297 645.728 249.592 645.394 247.991 644.764C246.39 644.133 244.924 643.218 243.664 642.065L243.415 641.831L30.292 431.452L27.7783 428.952L14.208 415.436L4.08301 405.299C2.2153 403.359 0.96275 400.929 0.476562 398.305C-0.00979467 395.679 0.291341 392.971 1.34473 390.511C2.39814 388.05 4.15814 385.942 6.41113 384.443C8.5234 383.039 10.9839 382.226 13.5264 382.09L14.0361 382.072H498.292V18.6035C498.292 15.749 498.164 12.8371 498.527 10.1348C498.889 7.44072 499.736 4.99201 501.663 3.06836C503.577 1.15822 506.383 0.487281 509.466 0.306641ZM101.373 431.808L268.209 596.471L268.282 596.543H663.564L663.124 596.113L494.359 431.451L494.287 431.38H100.939L101.373 431.808ZM599.746 50.0381L766.686 214.701L766.758 214.773H1161.94L1161.5 214.345L992.732 49.6816L992.66 49.6104H599.312L599.746 50.0381Z"
          stroke="#FF7262"
          strokeOpacity="0.2"
          strokeWidth="0.5"
        />
      </svg>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl md:text-3xl font-[500] mb-6 md:mb-10 text-center">
          Meet our{" "}
          <span className="text-[#FF7262]">
            {mentors.length === 1 ? "Mentor" : "Mentors"}
          </span>
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#18181B] rounded-2xl p-4 w-full max-w-[300px] border border-[#E4E4E7] dark:border-[#27272A]"
            >
              <div className="relative w-full aspect-square mb-4 rounded-xl overflow-hidden">
                <Image
                  src={
                    mentorImages[
                      mentor.profileImg as keyof typeof mentorImages
                    ] || mentorImages.default
                  }
                  alt={mentor.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">{mentor.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 h-[40px] line-clamp-2">
                {mentor.tagLine}
              </p>
              <a
                href={mentor.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#0077B5] hover:text-[#005885] transition-colors"
              >
                <Image
                  src={mentorImages.linkedin}
                  alt="LinkedIn"
                  width={20}
                  height={20}
                />
                <span className="text-sm">View Profile</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentorSection;
