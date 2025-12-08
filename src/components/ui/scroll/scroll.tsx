"use client";
import React, { useRef } from 'react';

interface ScrollProps {
  images: string[];
  direction: 'vertical' | 'horizontal';
  speed?: string; 
  imageClassName?: string; 
  containerClassName?: string; 
  imageBgColors?: string[]; // New prop for background colors
}

const Scroll: React.FC<ScrollProps> = ({
  images,
  direction,
  speed = '20s',
  imageClassName = '',
  containerClassName = '',
  imageBgColors = []
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  if (!images || images.length === 0) {
    return <div className="p-4 text-center text-gray-500">No images to display.</div>;
  }

  // Duplicate the images array for seamless looping
  const duplicatedImages = [...images, ...images];

  const animationStyle = { animationDuration: speed };

  // Helper to get bg color by image src
  const getBgColor = (src: string) => {
    const idx = images.indexOf(src);
    return idx !== -1 && imageBgColors[idx] ? imageBgColors[idx] : 'transparent';
  };

  if (direction === 'horizontal') {
    return (
      <div ref={containerRef} className={`overflow-hidden w-full flex flex-col gap-4 ${containerClassName}`}>
        {/* Row 1: scroll left */}
        <div className="overflow-hidden w-full">
          <div
            className="flex min-w-full infinite-scroll-x hover:animate-paused [will-change:transform]"
            style={animationStyle}
          >
            {duplicatedImages.map((src, index) => (
              <div
                key={`h-row1-img-bg-${index}`}
                style={{ backgroundColor: getBgColor(src) }}
                className={`rounded-lg flex-shrink-0 flex items-center justify-center px-3 py-1${index !== duplicatedImages.length - 1 ? ' mr-3' : ''}`}
              >
                <img
                  src={src}
                  alt={`scroll-row1-img-${index}`}
                  className={`w-7 h-7 object-contain rounded-lg flex-shrink-0 ${imageClassName}`}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Row 2: scroll right (reverse) */}
        <div className="overflow-hidden w-full">
          <div
            className="flex min-w-full infinite-scroll-x-reverse hover:animate-paused [will-change:transform]"
            style={animationStyle}
          >
            {duplicatedImages.slice().reverse().map((src, index) => (
              <div
                key={`h-row2-img-bg-${index}`}
                style={{ backgroundColor: getBgColor(src) }}
                className={`rounded-lg flex-shrink-0 flex items-center justify-center px-3 py-1${index !== duplicatedImages.length - 1 ? ' mr-3' : ''}`}
              >
                <img
                  src={src}
                  alt={`scroll-row2-img-${index}`}
                  className={`w-7 h-7 object-contain rounded-lg flex-shrink-0 ${imageClassName}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (direction === 'vertical') {
    // Calculate offset for the second column to avoid same image side by side
    const offset = Math.floor(images.length / 2);
    const duplicatedImagesCol2 = [
      ...images.slice(offset),
      ...images.slice(0, offset),
      ...images.slice(offset),
      ...images.slice(0, offset)
    ];

    // Helper to get bg color by image src
    const getBgColor = (src: string) => {
      const idx = images.indexOf(src);
      return idx !== -1 && imageBgColors[idx] ? imageBgColors[idx] : 'transparent';
    };

    return (
      <div ref={containerRef} className={`flex gap-4 h-[500px] overflow-hidden w-full ${containerClassName}`}>
        {/* Column 1: scroll up */}
        <div className="flex-1 overflow-hidden">
          <div
            className="flex flex-col gap-4 min-h-full infinite-scroll-y-up hover:animate-paused [will-change:transform]"
            style={animationStyle}
          >
            {duplicatedImages.map((src, index) => (
              <div
                key={`col1-bg-${index}`}
                style={{ backgroundColor: getBgColor(src) }}
                className="rounded-lg flex items-center justify-center px-3 py-1"
              >
                <img
                  src={src}
                  alt={`col1-img-${index}`}
                  className={`w-7 h-7 object-contain rounded-lg ${imageClassName}`}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Column 2: scroll down (reverse), with offset */}
        <div className="flex-1 overflow-hidden">
          <div
            className="flex flex-col gap-4 min-h-full infinite-scroll-y-down hover:animate-paused [will-change:transform]"
            style={animationStyle}
          >
            {duplicatedImagesCol2.map((src, index) => (
              <div
                key={`col2-bg-${index}`}
                style={{ backgroundColor: getBgColor(src) }}
                className="rounded-lg flex items-center justify-center px-3 py-1"
              >
                <img
                  src={src}
                  alt={`col2-img-${index}`}
                  className={`w-7 h-7 object-contain rounded-lg ${imageClassName}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return <div className="p-4 text-center text-red-500">Invalid direction provided.</div>;
};

export default Scroll;