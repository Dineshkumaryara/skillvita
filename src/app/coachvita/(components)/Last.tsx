import React, { MutableRefObject } from 'react'

interface LastProps {
  targetJoinNow: MutableRefObject<HTMLElement | null>
}

const Last: React.FC<LastProps> = ({ targetJoinNow }) => {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 sm:px-6 bg-white dark:bg-black">
      <h2 className="text-4xl sm:text-3xl font-outfit font-semibold text-[#fe7465] text-center">
        Join the Leading Career Coaching Network!
      </h2>
      <p className="mt-5 max-w-[80vw] sm:max-w-md text-xl sm:text-lg font-outfit font-normal text-black dark:text-white text-center">
        Coachvita is the ultimate platform for industry professionals to mentor, earn, and make a difference.
      </p>
      <button
        onClick={() => targetJoinNow.current?.scrollIntoView({ behavior: 'smooth' })}
        className="mt-10 w-[234px] sm:w-auto rounded-md bg-brand-500 py-2.5 px-9 text-white hover:bg-[#5a1d9b] transition"
      >
        Start Your Journey
      </button>
    </div>
  )
}

export default Last
