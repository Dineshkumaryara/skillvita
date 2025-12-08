// components/Hero.tsx
import React from "react";
import Image from "next/image";
import GaugeSpeedometer from "./animation";
import AnimatedTypography from "./AnimatedTypography";

interface HeroProps {
  targetJoinNow: React.RefObject<HTMLElement>;
}

const Hero: React.FC<HeroProps> = ({ targetJoinNow }) => (
  <div className="bg-white dark:bg-black">
    <section className="relative 2xl:max-w-7xl items-center mx-auto py-10 md:py-[70px] h-[90dvh] 2xl:h-auto bg-gradient-to-bl from-transparent via-transparent to-[#EB00FF]/[0.05] dark:to-[#EB00FF]/[0.1] overflow-hidden">
      <div className="mx-3 md:mx-5">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-4 md:gap-6 px-2 md:pl-5 flex-1 z-10 w-full lg:max-w-[45%]">
            <h1 className="text-[28px] md:text-[40px] font-[500] leading-tight md:leading-normal text-black dark:text-white">
              Coursevita
              <br />
              <span className="bg-gradient-to-r from-[#7234F7] to-[#FE7465] bg-clip-text text-transparent md:text-[40px] font-[600] leading-tight md:leading-normal">

              </span>{" "}
              Flexible Mentorship,<br />Big Earnings!{" "}
              <span className="bg-gradient-to-r from-[#F88282] to-[#7234F7] bg-clip-text text-transparent md:text-[40px] font-[700] leading-tight md:leading-normal">

              </span>
            </h1>

            {/* Benefits - Stack vertically on mobile */}
            <div className="flex flex-col gap-3 mt-1 md:mt-2 text-black dark:text-white">
              {/* First Item */}
              <div className="flex flex-row items-start gap-2">
                <Image
                  src="/images/mock-interview/2.svg"
                  alt=""
                  width={22}
                  height={22}
                  className="flex-shrink-0 mt-1"
                />
                <p className="text-[14px] leading-tight">
                  Earn up to ₹<strong>5000</strong> / week on average with just <strong>4 hours</strong> of mentoring per week
                </p>
              </div>

              {/* Second Item */}
              <div className="flex flex-row items-start gap-2">
                <Image
                  src="/images/mock-interview/3.svg"
                  alt=""
                  width={19}
                  height={19}
                  className="flex-shrink-0 mt-1"
                />
                <p className="text-[14px] leading-tight">
                  Join an exclusive community of mentors guiding learners in <strong>projects, Simulation </strong> and <strong>more</strong>
                </p>
              </div>

              {/* Third Item */}
              <div className="flex flex-row items-start gap-2">
                <Image
                  src="/images/mock-interview/1.svg"
                  alt=""
                  width={18}
                  height={18}
                  className="flex-shrink-0 mt-1"
                />
                <p className="text-[14px] leading-tight w-full">
                  Act as a <strong>Project manager, Scrum master </strong>and <strong>project mentor</strong>
                </p>
              </div>

              {/* Fourth Item */}
              <div className="flex flex-row items-start gap-2">
                <Image
                  src="/images/mock-interview/rocket.svg"
                  alt=""
                  width={19}
                  height={19}
                  className="flex-shrink-0 mt-1"
                />
                <p className="text-[14px] leading-tight">
                  Get the chance to become a <strong>coursevita</strong> live 6-Months course mentor and grow in the <strong>Edtech industry</strong>
                </p>
              </div>

              {/* Fifth Item */}
              <div className="flex flex-row items-start gap-2">
                <Image
                  src="/images/mock-interview/4.svg"
                  alt=""
                  width={19}
                  height={19}
                  className="flex-shrink-0 mt-1"
                />
                <p className="text-[14px] leading-tight">
                  Flexible work <strong>hours</strong> work from <strong>anywhere</strong>, on your own <strong>schedule!</strong>
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                if (targetJoinNow && targetJoinNow.current) {
                  targetJoinNow.current.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="flex justify-center items-center w-full sm:w-[233px] h-[45px] md:h-[50px] bg-gradient-to-r from-[rgba(114,52,247,0.89)] to-[rgba(254,116,101,0.9)] text-white rounded-md text-[16px] md:text-[18px] font-semibold z-10 mt-2 md:mt-4 hover:shadow-lg transition-shadow"
            >
              Become a mentor Now
            </button>
          </div>

          {/* Right Column Grid - Mobile responsive version */}
          <div className="w-full lg:w-1/2 xl:w-[55%] z-10">
            {/* Mobile card grid with 2x2 layout */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {/* Top row */}
              {/* Interview Image */}
              <div className="h-[156px] sm:h-[250px] rounded-[14px] overflow-hidden">
                <Image
                  src="/images/mock-interview/hero-interview.jpg"
                  alt=""
                  width={400}
                  height={250}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* 75% Progress Card */}
              <div className="h-[156px] sm:h-[250px] sm:mb-1 bg-white dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] rounded-[14px] flex flex-col items-center justify-between p-3 sm:p-4 relative">
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4 h-8 w-8 sm:h-10 sm:w-10 flex justify-center items-center rounded-full bg-[#F5F0FF]">
                  <Image
                    src="/images/mock-interview/users.svg"
                    alt="users image"
                    width={20}
                    height={20}
                  />
                </div>

                <div className="flex flex-col items-center justify-center h-full">
                  {/* The GaugeSpeedometer component should render a circular progress indicator */}
                  <div className="transform scale-90 sm:scale-100">
                    <GaugeSpeedometer percent={75} />
                  </div>

                  <p className="text-center text-[12px] sm:text-[15px] font-normal mt-1 sm:mt-2 max-w-[95%] sm:max-w-[240px]">
                    Trusted by 10,000+ mentors & learners
                  </p>
                </div>
              </div>

              {/* Bottom row */}
              {/* Stats cards column */}
              <div className="flex flex-col gap-3 sm:gap-4">
                {/* 100+ Growth Card */}
                <div className="h-[91px] sm:h-[120px] rounded-[14px] bg-gradient-to-r from-[#7234F7] to-[#BD89FF] p-3 sm:p-4">
                  <div className="flex items-center gap-2 mb-1 sm:mb-2">
                    <Image
                      src="/images/mock-interview/boost.svg"
                      alt=""
                      width={20}
                      height={20}
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                    <h3 className="text-[18px] sm:text-[22px] font-bold text-white">
                      <AnimatedTypography to={100} />+
                    </h3>
                  </div>
                  <p className="text-[11px] sm:text-[13px] text-white leading-tight">
                    successful job placements every month
                  </p>
                </div>

                {/* 85% Transition Card */}
                <div className="h-[91px] sm:h-[120px] rounded-[14px] bg-white dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] p-3 sm:p-4">
                  <div className="flex items-center gap-2 mb-1 sm:mb-2">
                    <Image
                      src="/images/mock-interview/job.svg"
                      alt=""
                      width={20}
                      height={20}
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                    <h3 className="text-[18px] sm:text-[22px] font-bold text-[#7234F7]">
                      <AnimatedTypography to={85} />%
                    </h3>
                  </div>
                  <p className="text-[11px] sm:text-[13px] leading-tight">
                    4.9/5 mentor ratings from learners
                  </p>
                </div>
              </div>

              {/* Second image */}
              <div className="h-[192px] sm:h-[250px] rounded-[14px] overflow-hidden">
                <Image
                  src="/images/mock-interview/interview2.jpg"
                  alt=""
                  width={400}
                  height={250}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Watermark SVG - Smaller size and better positioning */}
      <div className="absolute bottom-[-10px] left-[10%] w-[350px] md:w-[450px] lg:w-[500px] pointer-events-none hidden lg:block opacity-70">
        <Image
          src="/images/mock-interview/watermark.svg"
          alt=""
          width={450}
          height={250}
          style={{ objectFit: "contain" }}
        />
      </div>
    </section>
  </div>
);

export default Hero;
