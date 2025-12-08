import React from "react";
import Image from "next/image";

export default function ExploreHero() {
  return (
    <section className="pt-36 md:pb-12 px-4 relative overflow-hidden dark:bg-[#050109]">
      <div className="absolute -top-8 -left-20 w-20 md:w-80">
        <Image
          src="/images/left-hex.svg"
          alt="Decorative Hex"
          width={128}
          height={128}
          className="w-[200%] h-auto opacity-100 dark:opacity-30"
          priority
        />
      </div>

      <div className="absolute bottom-0 -right-40 w-20 md:w-80 transform scale-y-[-1] rotate-180">
        <Image
          src="/images/left-hex.svg"
          alt="Decorative Hex Rotated"
          width={128}
          height={128}
          className="w-full h-auto opacity-100 dark:opacity-30"
          priority
        />
      </div>

      <div className="text-center flex flex-col items-center justify-center relative">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
          <span className="text-2xl sm:text-4xl md:text-5xl border-2 border-black dark:border-white rounded-full px-6 py-2 font-normal text-black dark:text-white">
            Explore
          </span>
          <span className="text-2xl sm:text-4xl md:text-5xl font-normal text-black dark:text-white">
            Job Simulations
          </span>
        </div>
        <p className="text-2xl sm:text-4xl md:text-5xl font-normal text-black dark:text-white md:mt-4">
          that offer real-world experience and boost your
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:mt-4">
          <p className="text-2xl sm:text-4xl md:text-5xl font-normal text-black dark:text-white">
            career prospects.
          </p>
          <div className="rounded-full overflow-hidden flex">
            <video className="w-16 h-10 md:w-28 md:h-16 object-cover" autoPlay loop muted>
              <source src="/images/person.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
