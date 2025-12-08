"use client";
import Image from "next/image";

const jImg1 = "/images/mockGroupDiscussion/jImg1.png";
const jImg2 = "/images/mockGroupDiscussion/jImg2.png";
const jImg3 = "/images/mockGroupDiscussion/jImg3.png";
const jImg4 = "/images/mockGroupDiscussion/jImg4.png";
const jImgM1 = "/images/mockGroupDiscussion/jImgM1.png";
const jImgM2 = "/images/mockGroupDiscussion/jImgM2.png";
const jImgM3 = "/images/mockGroupDiscussion/jImgM3.png";
const jImgM4 = "/images/mockGroupDiscussion/jImgM4.png";

const sliderImages = [jImgM1, jImgM2, jImgM3, jImgM4];

export default function Join() {
  return (
    <div className="relative md:flex-row flex flex-col lg:flex-row items-center justify-center py-20 px-4 lg:px-24 min-h-[500px] w-full
      bg-gradient-to-b from-white via-[#f5ecff] to-[#a56cff15]
      dark:bg-gradient-to-b dark:from-[#18142b] dark:via-[#2a213b] dark:to-[#391e58]">

      {/* --- Left: Text --- */}
      <div className=" flex-1 flex flex-col items-center lg:items-start z-10">
        <h2 className="text-[32px] lg:text-[36px] font-outfit font-semibold text-[#fe7465] dark:text-[#ff9681] text-center lg:text-left mb-2">
          <span className="text-black dark:text-white">Why</span> Group Discussions
        </h2>
        <p className="max-w-xl text-[16px] text-black/90 dark:text-white/80 font-poppins text-center lg:text-left mb-4">
          Because we want to help you become more confident, collaborative, and thoughtful by sharing and exploring different perspectives and ideas.
        </p>
      </div>

      {/* --- Right: Images --- */}
      <div className="flex-1 flex flex-row gap-6 z-10 w-full lg:w-auto justify-end">
        {/* For large screens, show two image columns */}
        <div className="hidden md:flex flex-col gap-6">
          <Image
            src={jImg1}
            alt="Group 1"
            width={180}
            height={120}
            className="rounded-xl shadow-md bg-white dark:bg-[#23193c] transition"
          />
          <Image
            src={jImg2}
            alt="Group 2"
            width={180}
            height={120}
            className="rounded-xl shadow-md bg-white dark:bg-[#23193c] transition"
          />
        </div>
        <div className="hidden md:flex flex-col gap-6">
          <Image
            src={jImg3}
            alt="Group 3"
            width={180}
            height={120}
            className="rounded-xl shadow-md bg-white dark:bg-[#23193c] transition"
          />
          <Image
            src={jImg4}
            alt="Group 4"
            width={180}
            height={120}
            className="rounded-xl shadow-md bg-white dark:bg-[#23193c] transition"
          />
        </div>
        {/* For mobile, show horizontal slider */}
        <div className="flex md:hidden overflow-x-auto gap-4 py-2 w-full">
          {sliderImages.map((src, i) => (
            <div
              key={i}
              className="min-w-[160px] h-[100px] rounded-xl overflow-hidden shadow-md bg-white dark:bg-[#23193c] transition flex-shrink-0"
            >
              <Image
                src={src}
                alt={`Slider ${i + 1}`}
                width={160}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
