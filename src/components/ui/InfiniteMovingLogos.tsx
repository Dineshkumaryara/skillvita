"use client";
import React from "react";

const logos = [
  { src: "/images/landing/companies/logo1.png", alt: "logo1", darkSrc: "/images/landing/companies/logo1.png" },
  { src: "/images/landing/companies/logo2.png", alt: "logo2", darkSrc: "/images/landing/companies/logo2_w.png" },
  { src: "/images/landing/companies/logo3.svg", alt: "logo3", darkSrc: "/images/landing/companies/logo3_w.webp" },
  { src: "/images/landing/companies/logo4.png", alt: "logo4", darkSrc: "/images/landing/companies/logo4.png" },
  { src: "/images/landing/companies/logo5.webp", alt: "logo5", darkSrc: "/images/landing/companies/logo5.webp" },
  { src: "/images/landing/companies/logo6.png", alt: "logo6", darkSrc: "/images/landing/companies/logo6_w.png" },
  { src: "/images/landing/companies/logo7.svg", alt: "logo7", darkSrc: "/images/landing/companies/logo7_w.webp" },
  { src: "/images/landing/companies/logo8.svg", alt: "logo8", darkSrc: "/images/landing/companies/logo8.svg" },
  { src: "/images/landing/companies/logo9.png", alt: "logo9", darkSrc: "/images/landing/companies/logo9_w.png" },
  { src: "/images/landing/companies/logo10.png", alt: "logo10", darkSrc: "/images/landing/companies/logo10_w.png" },
];

export const InfiniteMovingLogos = () => {
  const extendedLogos = [...logos, ...logos];

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {extendedLogos.map((logo, index) => (
          <li key={index} className="group"> {/* <-- Add group here */}
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-10 object-contain transition-all duration-200 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 block dark:hidden"
            />
            <img
              src={logo.darkSrc || logo.src}
              alt={logo.alt}
              className="h-10 object-contain transition-all duration-200 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 hidden dark:block"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
