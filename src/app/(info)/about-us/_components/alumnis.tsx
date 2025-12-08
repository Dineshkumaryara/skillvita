'use client';

import Image from 'next/image';

const logos = [
  '/images/about-us/image (8).png', // index 0 - big
  '/images/about-us/image (7).png',
  '/images/about-us/image (6).png',
  '/images/about-us/image (5).png',
  '/images/about-us/image (4).png',
  '/images/about-us/image (3).png',

  // Second row
  '/images/about-us/image.png',
  '/images/about-us/image-3.png',
  '/images/about-us/image (1).png',
];

const AlumniSection = () => {
  return (
    <div className="py-16 px-4 text-center bg-white dark:bg-black">
      <h2 className="pb-5 text-2xl font-semibold">
        <span className="text-[#FE7465] font-bold">Alumni</span>{' '}
        <span className="font-semibold">from</span>
      </h2>

      {/* Top Row */}
      <div className="flex flex-wrap justify-center items-center gap-6 mt-10 max-w-6xl mx-auto">
        {logos.slice(0, 6).map((src, i) => (
          <div
            key={i}
            className={`flex justify-center items-center ${
              i === 0 ? 'scale-125' : ''
            }`}
          >
            <Image
              src={src}
              alt={`logo${i + 1}`}
              width={i === 0 ? 160 : 110}
              height={i === 0 ? 160 : 110}
              className="object-contain dark:bg-[#e9f2ff]/[0.8] dark:rounded-sm p-1"
            />
          </div>
        ))}
      </div>

      {/* Bottom Row */}
      <div className="flex flex-wrap justify-center items-center gap-6 mt-8 max-w-xl mx-auto">
        {logos.slice(6).map((src, i) => (
          <div key={i + 6} className="flex justify-center items-center">
            <Image
              src={src}
              alt={`logo${i + 7}`}
              width={110}
              height={110}
              className="object-contain dark:bg-[#e9f2ff]/[0.8] dark:rounded-sm p-1"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlumniSection;
