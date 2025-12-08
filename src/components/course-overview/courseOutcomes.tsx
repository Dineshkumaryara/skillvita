import Image from "next/image";
import certificate from "../../../public/images/courses/certificate2.svg";
import coding from "../../../public/images/courses/coding.svg";
import resume from "../../../public/images/courses/resume.svg";
import suitcase from "../../../public/images/courses/suitcase3.svg";

interface CourseOutcomeData {
  image: string;
  text1: string;
  text2: string;
}

const CourseOutcomes = () => {
  const data: CourseOutcomeData[] = [
    {
      image: coding,
      text1: "Become a successful professional",
      text2:
        "Learn the course in a fully immersive environment and gain knowledge at a professional level.",
    },
    {
      image: certificate,
      text1: "Get Certified",
      text2:
        "Get a certificate upon successful completion, which adds great weightage to your portfolio.",
    },
    {
      image: suitcase,
      text1: "Launch your career",
      text2: "Launch your career at a substantial velocity.",
    },
    {
      image: resume,
      text1: "Support in building CV & Portfolio",
      text2: "Coursevita's CV assistance program makes your profile stand out.",
    },
  ];

  return (
    <div className="my-4 md:my-8 md:px-0">
      <h2 className="text-center text-2xl md:text-4xl font-medium leading-normal md:leading-[60px] mb-6 md:mb-10">
        Course <span className="text-[#FF7262]">Outcomes</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-7xl mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-[#18181B] rounded-2xl p-5 md:p-8 border border-[#E4E4E7] dark:border-[#27272A]"
          >
            <div className="flex flex-col h-full">
              <Image
                src={item.image}
                alt="Course outcome icon"
                width={48}
                height={48}
                className="w-10 h-10 md:w-12 md:h-12 mb-4 md:mb-6"
              />
              <h3 className="text-lg md:text-xl font-bold leading-tight mb-2">
                {item.text1}
              </h3>
              <p className="text-sm md:text-base font-normal text-[#797979] leading-relaxed">
                {item.text2}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseOutcomes;
