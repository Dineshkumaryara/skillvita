"use client";

import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const boardMembers = [
  {
    name: "Revanth Guthala",
    role: "Sr. Data Analyst, Experienced Data Mentor",
    image: "/images/about-us/revanth.jpeg",
    linkedin: "https://www.linkedin.com/in/revanth-guthala-7a0b3abb/",
  },
  {
    name: "Samyak Jain",
    role: "Organizer, Rethinking Economics India Network",
    image: "/images/about-us/samyak.jpg",
    linkedin: "https://www.linkedin.com/in/samyak-jain1/",
  },
];

const BoardOfMembers = () => {
  return (
    <section className="py-10 px-6 sm:px-10 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold for_font1">
          Our <span className="text-[#FE7465]">Board of Members</span>
        </h2>
        <div className="w-20 h-0.5 bg-black dark:bg-white mx-auto mb-10" />

        {/* Flex Grid */}
        <div className="flex flex-wrap justify-center gap-8 sm:gap-10 items-stretch">
          {boardMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] 
              rounded-2xl px-4 py-6 flex flex-col items-center text-center w-[260px] sm:w-[280px] h-full"
            >
              <div className="relative w-40 h-48 mb-4 rounded-xl overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="object-cover"
                  fill
                />
              </div>
              <h3 className="text-base font-semibold text-black dark:text-white">{member.name}</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 for_font2 min-h-[40px]">
                {member.role}
              </p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto pt-4 inline-flex items-center text-[#0072b1] text-xs hover:underline"
              >
                <LinkedInIcon className="text-[#0072b1] w-5 h-5" />
                <span className="ml-1 leading-none">View LinkedIn Profile</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoardOfMembers;
