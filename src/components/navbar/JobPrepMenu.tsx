"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Scroll from "../ui/scroll/scroll";
import Link from "next/link";

export default function JobPrepMenu({
  isMobile = false,
  onItemClick,
}: {
  isMobile?: boolean;
  onItemClick?: () => void;
}) {

  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      title: "Job simulation",
      desc: "Gain practical experience, and be prepared for dream job",
      image: "/images/navbar/js.svg",
      href: "https://simulation.coursevita.com/",
    },
    {
      title: "Skill Assessment",
      desc: "Find out your strengths and what career fits you best.",
      image: "/images/navbar/skill.svg",
      href: "/skill-assessment",
    },
    {
      title: "Build your Portfolio",
      desc: "Build your portfolio easily, no design or code needed.",
      image: "/images/navbar/portfolio1.svg",
      href: "https://portfolio.coursevita.com/",
    },
    {
      title: "Build Interesting Projects",
      desc: "Make cool projects that show what you can do.",
      image: "/images/navbar/circles.svg",
      href: "/projects",
    },
    {
      title: "Mock Interview",
      desc: "Practice interviews so you feel ready and confident.",
      video: "/images/navbar/mock-interview.mp4",
      href: "/mock-interviews",
    },
    {
      title: "Play Learn Earn",
      desc: "Practice quizzes daily and get ready for any competitive exam.",
      image: "/images/navbar/quizvita.svg",
      href: "https://play.google.com/store/apps/details?id=com.coursevita.quizvita",
    },
    {
      title: "Prepare Group Discussion",
      desc: "Learn how to talk clearly and confidently in a group.",
      video: "/images/navbar/group-discussion.mp4",
      href: "/mock-Group-Discussion",
    },
  ];

  const cardAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.1, ease: "easeOut" },
  };

  return isMobile ? (
    <div className="relative">
      <div
        className="flex overflow-x-auto space-x-4 px-4 snap-x snap-mandatory scrollbar-hide"
        onScroll={(e) => {
          const scrollLeft = e.currentTarget.scrollLeft;
          const cardWidth = e.currentTarget.children[0]?.clientWidth || 300;
          const index = Math.round(scrollLeft / (cardWidth + 16)); // 16px is approx the gap between cards
          setActiveIndex(index);
        }}
      >
        {cards.map((card, index) => (
  <motion.div
    key={index}
    {...cardAnimation}
    className="snap-start shrink-0 bg-gray-50 dark:bg-[#18181B] rounded-xl p-4 relative"
    style={{ maxWidth: "70%", height: "200px" }}
  >
    <a
      href={card.href}
      className="absolute inset-0 z-20"
      target={card.href.startsWith("http") ? "_blank" : "_self"}
      rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
    />
    <div className="z-10 relative">
      <h3 className="text-lg font-semibold mb-1 text-black dark:text-white">
        {card.title}
      </h3>
      <p className="text-sm text-gray-700 dark:text-gray-400">
        {card.desc}
      </p>

      {card.title === "Build Interesting Projects" && (
        <div className="mt-5">
          <Scroll
            images={[
              "/images/navbar/Blinkit_logo.svg",
              "/images/navbar/myntra_logo.svg",
              "/images/navbar/cred_logo.png",
              "/images/navbar/netflix.svg",
              "/images/navbar/slack_logo.svg",
              "/images/navbar/swiggy_logo.svg",
              "/images/navbar/Uber_logo.svg",
              "/images/navbar/Zomato_logo.svg",
            ]}
            direction="horizontal"
            imageBgColors={[
              "#ffe24b",
              "#ffff",
              "#ffff",
              "#000000",
              "#ffff",
              "#fc8019",
              "#000000",
              "#e23844",
            ]}
            speed="15s"
          />
        </div>
      )}
    </div>

    {card.image && (
      <Image
        src={card.image}
        alt={card.title}
        width={120}
        height={80}
        className="absolute bottom-0 right-0"
      />
    )}
    {card.video && (
      <video
        src={card.video}
        autoPlay
        muted
        loop
        playsInline
        className="absolute bottom-2 right-2 w-[100px] h-[60px] object-cover rounded-lg"
      />
    )}
  </motion.div>
))}

      </div>

      {/* Pagination dots */}
      <div className="flex justify-center my-4">
        <div className="inline-flex items-center space-x-1.5 px-2 py-1 rounded-full bg-brand-950">
          {cards.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? "bg-[#BD89FF] w-4" : "bg-white w-1.5"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div className="grid grid-cols-3 gap-4">
      {/* Column 1 */}
      <div className="flex flex-col space-y-4">
        <Link href="https://simulation.coursevita.com/" onClick={onItemClick} passHref>
          <motion.div
            {...cardAnimation}
            className="group min-h-1/3 bg-[#F9F8FA] dark:bg-[#18181B] rounded-xl p-5 relative overflow-hidden cursor-pointer border border-white dark:border-black hover:border-[#8A80FF4a] dark:hover:border-[#8A80FF4a] transition-all duration-300"
          >
            <h3 className="text-lg font-medium">
              <span className="inline-block text-black dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#7234F7] group-hover:to-[#FF4B00] dark:group-hover:text-transparent dark:group-hover:bg-clip-text dark:group-hover:bg-gradient-to-r dark:group-hover:from-[#7234F7] dark:group-hover:to-[#FF4B00]">
                Job simulation
              </span>
            </h3>

            <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
              Gain practical experience, and <br /> be prepared for dream job
            </p>
            <Image
              src="/images/navbar/js.svg"
              alt="Job Simulation Icon"
              width={120}
              height={80}
              className="absolute bottom-0 right-0 md:w-30 lg:w-30"
            />
          </motion.div>
        </Link>
        
        <motion.div
          {...cardAnimation}
          className="group h-2/3 bg-[#F9F8FA] dark:bg-[#18181B] rounded-xl p-5 relative overflow-hidden group cursor-pointer border border-white dark:border-black hover:border-[#8A80FF4a] dark:hover:border-[#8A80FF4a] transition-all duration-300"
        >
          <Link href="https://portfolio.coursevita.com/" onClick={onItemClick} passHref>
          <h3 className="text-lg font-medium text-black dark:text-white">
            <span className="inline-block text-black dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#7234F7] group-hover:to-[#FF4B00] dark:group-hover:text-transparent dark:group-hover:bg-clip-text dark:group-hover:bg-gradient-to-r dark:group-hover:from-[#7234F7] dark:group-hover:to-[#FF4B00]">
              Build your Portfolio
            </span>
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-400 mt-2">
            Build your portfolio easily no design or code needed.
          </p>

          <div className="absolute -bottom-2 right-2 w-full h-40">
            {/* Back Image */}
            <Image
              src="/images/navbar/portfolio2.svg" 
              alt="Portfolio Card Back"
              fill
              className="absolute object-contain ml-8 z-0 transition duration-300 ease-out group-hover:rotate-2"
            />

            {/* Front Image */}
            <Image
              src="/images/navbar/portfolio1.svg"
              alt="Portfolio Card Front"
              fill
              className="absolute object-contain mt-5 z-10 transition duration-300 ease-out group-hover:scale-105"
            />
          </div>
          </Link>
        </motion.div>
        
      </div>

      {/* Column 2 */}
      <div className="flex flex-col space-y-4">
        <Link href="/skill-assessment" onClick={onItemClick} passHref>
          <motion.div
            {...cardAnimation}
            className="group min-h-1/3 bg-[#F9F8FA] dark:bg-[#18181B] rounded-xl p-5 relative overflow-hidden cursor-pointer border border-white dark:border-black hover:border-[#8A80FF4a] dark:hover:border-[#8A80FF4a] transition-all duration-300"
          >
            <h3 className="text-lg font-medium text-black dark:text-white">
              <span className="inline-block text-black dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#7234F7] group-hover:to-[#FF4B00] dark:group-hover:text-transparent dark:group-hover:bg-clip-text dark:group-hover:bg-gradient-to-r dark:group-hover:from-[#7234F7] dark:group-hover:to-[#FF4B00]">
                Skill Assessment
              </span>
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-400 mt-2">
              Find out your strengths and what <br /> career fits you best.
            </p>
            <Image
              src="/images/navbar/skill.svg"
              alt="Job Simulation Icon"
              width={130}
              height={80}
              className="absolute bottom-0 right-0 md:w-25 lg:w-40"
            />
          </motion.div>
        </Link>

        <motion.div
          {...cardAnimation}
          className="group h-1/3 bg-[#F9F8FA] dark:bg-[#18181B] rounded-xl p-5 relative overflow-hidden cursor-pointer border border-white dark:border-black hover:border-[#8A80FF4a] dark:hover:border-[#8A80FF4a] transition-all duration-300"
        >
          <Link href="/projects" onClick={onItemClick} passHref>
          <Image
            src="/images/navbar/circles.svg"
            alt="Background Circles"
            width={200}
            height={150}
            className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          />
          <h3 className="text-lg font-medium relative z-10 text-black dark:text-white">
            <span className="inline-block text-black md:w-1/2  dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#7234F7] group-hover:to-[#FF4B00] dark:group-hover:text-transparent dark:group-hover:bg-clip-text dark:group-hover:bg-gradient-to-r dark:group-hover:from-[#7234F7] dark:group-hover:to-[#FF4B00]">
              Build Interesting Projects
            </span>
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-400 mt-2 md:w-1/2 relative z-10">
            Make cool projects that show what you can do.
          </p>
          <div className="absolute inset-y-0 right-2 md:w-30 flex items-center h-full z-0">
            <Scroll
              images={[
                "/images/navbar/Blinkit_logo.svg",
                "/images/navbar/myntra_logo.svg",
                "/images/navbar/cred_logo.png",
                "/images/navbar/netflix.svg",
                "/images/navbar/slack_logo.svg",
                "/images/navbar/swiggy_logo.svg",
                "/images/navbar/Uber_logo.svg",
                "/images/navbar/Zomato_logo.svg",
              ]}
              direction="vertical"
              imageBgColors={[
                "#ffe24b",
                "#ffff",
                "#ffff",
                "#000000",
                "#ffff",
                "#fc8019",
                "#000000",
                "#e23844",
              ]}
              speed="15s"
            />
          </div>
          </Link>
        </motion.div>

        <motion.div
          {...cardAnimation}
          className="group h-1/3 bg-[#F9F8FA] dark:bg-[#18181B] rounded-xl p-5 cursor-pointer relative overflow-hidden flex items-start border border-white dark:border-black hover:border-[#8A80FF4a] dark:hover:border-[#8A80FF4a] transition-all duration-300"
        >
         <Link href="/mock-interviews" onClick={onItemClick} passHref>
          <div className="flex-1">
             
            <h3 className="text-lg font-medium text-black dark:text-white">
              <span className="inline-block text-black dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#7234F7] group-hover:to-[#FF4B00] dark:group-hover:text-transparent dark:group-hover:bg-clip-text dark:group-hover:bg-gradient-to-r dark:group-hover:from-[#7234F7] dark:group-hover:to-[#FF4B00]">
                Mock Interview
              </span>
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-400 mt-2">
              Practice interviews so you <br /> feel ready and confident.
            </p>
          </div>
          <div className="absolute bottom-3 right-3 w-[140px] h-[100px] md:w-1/3 md:h-auto rounded-lg overflow-hidden">
            <video
              src="/images/navbar/mock-interview.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
         
          </div>
         </Link>
        </motion.div>
      </div>

      {/* Column 3 */}
      <div className="flex flex-col space-y-4">
        
        <motion.div
          {...cardAnimation}
          className="group min-h-2/3 bg-[#F9F8FA] dark:bg-[#18181B] rounded-xl p-5 cursor-pointer relative overflow-hidden flex flex-col justify-between border border-white dark:border-black hover:border-[#8A80FF4a] dark:hover:border-[#8A80FF4a] transition-all duration-300"
        >
          
          <div>
            <h3 className="text-lg font-medium text-black dark:text-white">
              <span className="inline-block text-black dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#7234F7] group-hover:to-[#FF4B00] dark:group-hover:text-transparent dark:group-hover:bg-clip-text dark:group-hover:bg-gradient-to-r dark:group-hover:from-[#7234F7] dark:group-hover:to-[#FF4B00]">
                Play Learn Earn
              </span>
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-400 mt-2">
              Practice quizzes daily <br /> and get ready for any competitive{" "}
              <br /> exam.
            </p>
          </div>
          <div className="absolute bottom-3 left-4 text-left text-xs">
            <p className="font-normal text-black dark:text-white">
              Quizvita for Mobile
            </p>
            <p className="text-gray-500 text-[10px] dark:text-gray-400">
              Available at Play Store
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=com.coursevita.quizvita"
              target="_blank"
              className="block"
              aria-label="Get the CourseVita app on Google Play (opens in a new tab)"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/navbar/play-store.svg"
                alt="Google Play Badge"
                width={80}
                height={30}
                className="mt-3"
              />
            </a>
          </div>
          <Image
            src="/images/navbar/quizvita.svg"
            alt="QuizVita App UI"
            width={240}
            height={200}
            className="absolute bottom-0 right-2"
          />
         
        </motion.div>
       

        <motion.div
          {...cardAnimation}
          className="group h-1/3 bg-[#F9F8FA] dark:bg-[#18181B] rounded-xl p-5 cursor-pointer relative overflow-hidden border border-white dark:border-black hover:border-[#8A80FF4a] dark:hover:border-[#8A80FF4a] transition-all duration-300"
        >
           <Link href="/mock-Group-Discussion" onClick={onItemClick} passHref>
          <div>
            <h3 className="text-lg font-medium text-black dark:text-white">
              <span className="inline-block text-black dark:text-white md:w-1/2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#7234F7] group-hover:to-[#FF4B00] dark:group-hover:text-transparent dark:group-hover:bg-clip-text dark:group-hover:bg-gradient-to-r dark:group-hover:from-[#7234F7] dark:group-hover:to-[#FF4B00]">
                Group Discussion
              </span>
            </h3>
            <p className="text-sm text-gray-700 md:w-1/2 md:h-full dark:text-gray-400 mt-2">
              Learn how to talk clearly and <br /> confidently in a group.
            </p>
          </div>
          <div className="absolute bottom-3 right-3 w-[140px] h-[100px] md:w-1/3 md:h-auto rounded-lg overflow-hidden">
            <video
              src="/images/navbar/group-discussion.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
