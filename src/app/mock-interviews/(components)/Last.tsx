import React, { MutableRefObject } from 'react'

interface LastProps {
  targetJoinNow: MutableRefObject<HTMLElement | null>
}

const Last: React.FC<LastProps> = ({ targetJoinNow }) => {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 sm:px-6 md:px-12 lg:px-24 bg-white dark:bg-black w-full">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-outfit font-semibold text-[#fe7465] text-center">
        What are you waiting for
      </h2>
      <p className="mt-5 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl text-base sm:text-lg md:text-xl font-outfit font-normal text-black dark:text-white text-center">
        Join our career counseling and mock interviews today and take the first
        step toward your dream career!
      </p>
      <button
        onClick={() => targetJoinNow.current?.scrollIntoView({ behavior: 'smooth' })}
        className="mt-10 w-full max-w-xs sm:max-w-[234px] rounded-md bg-brand-500 py-2.5 px-6 sm:px-9 text-base sm:text-lg text-white hover:bg-[#5a1d9b] transition"
      >
        Join Now
      </button>
    </div>
  )
}

export default Last
