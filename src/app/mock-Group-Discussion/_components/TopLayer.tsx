'use client'
import Image from 'next/image'
import { useState } from 'react'
import FormModal from './FormModal'


export default function TopLayer() {
  const [isIframeVisible, setIsIframeVisible] = useState(false)

  return (
    <div className="relative w-full h-[88vh] overflow-hidden bg-gradient-to-t from-[#7944bd4d] via-[#7944bd33] to-transparent">
      <Image
        src="/images/mockGroupDiscussion/MockGroupHeroImage.png"
        alt="Hero"
        fill
        className="object-cover object-[40%] absolute top-0 left-0 -z-10"
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <div className="flex flex-row gap-2 items-center justify-center mb-3
          max-md:flex-col max-md:gap-3">
          <span className="text-[34px] font-semibold max-md:text-[24px] font-outfit">Join Our</span>
          <span className="text-[30px] font-semibold rounded-[60px] bg-white/10 backdrop-blur-lg px-4 py-2 max-md:text-[22px] font-outfit">
            Mock Group Discussions
          </span>
          <span className="text-[34px] font-semibold max-md:text-[24px] font-outfit">Speak Up, Fear Less!</span>
        </div>
        <div className="text-center text-white font-poppins text-[24px] font-normal w-[724px] mt-1 max-md:text-[20px] max-md:w-auto max-md:px-4 max-md:font-light">
          Discover the joy of sharing your thoughts and overcoming speaking anxiety.
        </div>
        <button
          onClick={() => setIsIframeVisible(true)}
          className="mt-4 px-9 py-2 rounded-md bg-gradient-to-r from-brand-400 to-[#fe7465] font-outfit text-[20px] font-semibold"
        >
          Join Now
        </button>
      </div>

      {/* Gradient bottom overlay */}
      <div className="absolute bottom-0 w-full h-[30%] bg-gradient-to-t from-[#7944bd4d] via-[#7944bd33] to-transparent pointer-events-none" />

      {/* Popup Form Modal */}
      {isIframeVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="relative w-[90vw] max-w-md h-auto bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-brand-300 p-8 flex flex-col items-center">
            <button
              className="absolute top-2 right-3 text-3xl font-bold text-gray-400 hover:text-brand-500 z-10"
              onClick={() => setIsIframeVisible(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <FormModal setIsIframeVisible={setIsIframeVisible} />
          </div>
        </div>
      )}
    </div>
  )
}
