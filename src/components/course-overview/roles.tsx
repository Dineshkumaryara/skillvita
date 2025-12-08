import React from "react";
import ambi from "../../../public/images/courses/ambi.svg";
import linkedin from "../../../public/images/courses/linkedin.svg";
import money from "../../../public/images/courses/money.svg";
import briefcase from "../../../public/images/courses/briefcase.svg";
import img1 from "../../../public/images/courses/1.svg";
import img2 from "../../../public/images/courses/2.svg";
import Image from "next/image";

interface JobRole {
  name: string;
  openings: string;
  avgSalary: string;
}

interface CourseContent {
  jobRoles: JobRole[];
  ambitionBoxlinks: string;
  linkedinJobRoles: string;
}

interface RolesProps {
  courseContent: CourseContent;
}

const Roles: React.FC<RolesProps> = ({ courseContent }) => {
  const data = courseContent?.jobRoles;
  const repeatedData = [...data, ...data];

  return (
    <div className="relative py-[70px] md:py-20 text-center max-w-7xl mx-auto px-4">
      <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-[400] leading-normal">
        What <span className="text-[#FE7465] font-bold">roles</span> you will be
        eligible for?
      </h2>
      <p className="mx-auto px-2 md:px-0 pt-2 md:w-[55%] text-xs md:text-lg font-normal leading-normal text-gray-600 dark:text-gray-400">
        Our dedicated Learner Success Team is committed to providing you with
        the skills needed to flourish in positions such as
      </p>

      <div className="my-8 md:my-[60px] overflow-hidden relative w-full whitespace-nowrap">
        <div className="absolute left-0 top-0 z-10 h-full w-[50px] md:w-[100px] bg-gradient-to-r from-white dark:from-black to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 z-10 h-full w-[50px] md:w-[100px] bg-gradient-to-l from-white dark:from-black to-transparent pointer-events-none"></div>
        <div className="flex gap-5 animate-[rolesScroll_30s_linear_infinite] hover:pause">
          {repeatedData?.map((data, index) => (
            <div
              key={index}
              className="relative min-w-[326px] flex-shrink-0 bg-white dark:bg-[#18181B] rounded-xl p-3 py-5 border border-[#E4E4E7] dark:border-[#27272A]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-[4px] h-[25px] rounded-full bg-[#FE7465]"></div>
                <h3 className="text-left text-base font-semibold text-gray-600 dark:text-gray-300 leading-normal">
                  {data?.name}
                </h3>
              </div>
              <div className="flex gap-1.5 pl-3 mb-2">
                <Image
                  src={briefcase}
                  alt="Briefcase icon"
                  width={20}
                  height={20}
                />
                <p className="text-sm font-light text-black dark:text-white leading-normal">
                  Number of openings{" "}
                  <span className="text-[#fe7465] text-base font-bold">
                    {data?.openings}
                  </span>
                </p>
              </div>
              <div className="flex gap-1.5 pl-3">
                <Image src={money} alt="Money icon" width={20} height={20} />
                <p className="text-sm font-light text-black dark:text-white leading-normal">
                  Average salary{" "}
                  <span className="text-[#fe7465] text-base font-bold">
                    {data?.avgSalary}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-sm md:text-base pb-3 md:pb-5 font-normal leading-normal">
        Data sourced from{" "}
      </p>
      <div className="flex justify-center w-full gap-2 px-4">
        <a
          href={courseContent?.ambitionBoxlinks}
          target="_blank"
          rel="noopener noreferrer"
          className=" bg-[rgba(86,112,251,0.1)] dark:bg-[#18181B] rounded-lg p-3 transition-shadow flex items-center justify-center"
        >
          <Image
            src={ambi}
            alt="Ambition Box"
            width={20}
            height={20}
            className="w-full h-auto dark:invert"
          />
        </a>
        <a
          href={courseContent?.linkedinJobRoles}
          target="_blank"
          rel="noopener noreferrer"
          className=" bg-[rgba(10,102,194,0.1)] dark:bg-[#18181B] rounded-lg px-5 transition-shadow flex items-center justify-center"
        >
          <Image
            src={linkedin}
            alt="LinkedIn"
            width={15}
            height={15}
            className="w-full h-auto"
          />
        </a>
      </div>

      <Image
        src={img1}
        alt="Decorative element"
        width={50}
        height={50}
        className="absolute top-10 left-[30px] hidden md:block"
      />
      <Image
        src={img2}
        alt="Decorative element"
        width={50}
        height={50}
        className="absolute bottom-10 right-[50px] hidden md:block"
      />
    </div>
  );
};

export default Roles;
