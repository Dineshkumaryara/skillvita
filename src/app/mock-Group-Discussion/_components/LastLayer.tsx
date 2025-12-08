'use client'
import { useState } from "react"
import Image from "next/image"
import FormModal from './FormModal'

const girlImage = '/images/mockGroupDiscussion/lastLayer/girl.png'
const boyImage = '/images/mockGroupDiscussion/lastLayer/boy.png'
const av1 = '/images/mockGroupDiscussion/lastLayer/av1.png'
const av2 = '/images/mockGroupDiscussion/lastLayer/av2.png'
const av3 = '/images/mockGroupDiscussion/lastLayer/av3.png'
const av4 = '/images/mockGroupDiscussion/lastLayer/av4.png'
const rightWing = '/images/mockGroupDiscussion/lastLayer/rightWing.svg'
const leftWing = '/images/mockGroupDiscussion/lastLayer/leftWing.svg'

export default function Last() {
  const [isIframeVisible, setIsIframeVisible] = useState(false)

  return (
    <div className="flex flex-col lg:flex-row w-full bg-gradient-to-b from-white to-[#a56cff15] dark:from-[#18142b] dark:to-[#391e58] px-2 py-8 relative overflow-hidden min-h-[80vh]">
      {/* --- Main Visuals Section --- */}
      <div className="flex-1 relative flex items-center justify-center min-h-[420px] md:min-h-[520px]">
        {/* Black Card Top Right */}
        <div className="absolute right-2 top-4 sm:right-[5%] sm:top-[12%] z-20 bg-[#111] dark:bg-[#23193c] border border-black/10 rounded-lg w-[160px] h-[58px] sm:w-[200px] sm:h-[70px] px-2 flex flex-col justify-center items-center shadow-lg">
          <div className="w-[80%] h-[3px] bg-[#2c2c2c] mb-1 rounded"></div>
          <div className="flex flex-col gap-1 items-start w-full pl-2">
            <div className="flex -space-x-2">
              {[av1, av2, av3, av4].map((src, i) => (
                <Image key={i} src={src} alt={`av${i+1}`} width={18} height={18}
                  className="rounded-full border border-white w-[12px] h-[12px] sm:w-[15px] sm:h-[15px]" />
              ))}
            </div>
            <div className="text-[9px] sm:text-[10px] text-white font-poppins font-light leading-[11px] mt-1">Your not the only among them!!</div>
          </div>
        </div>

        {/* Girl with Wings - always centered */}
        <div className="relative mt-2 sm:mt-4 flex items-center justify-center w-[220px] h-[170px] sm:w-[400px] sm:h-[320px] mx-auto">
          <Image
            src={leftWing}
            alt="left wing"
            width={180}
            height={220}
            className="absolute left-[-95px] top-[32%] -translate-y-1/2 z-0 pointer-events-none sm:left-[-180px] sm:top-[35%] sm:w-[340px] sm:h-[420px]"
            style={{ zIndex: 0 }}
            draggable={false}
          />
          <Image
            src={rightWing}
            alt="right wing"
            width={180}
            height={220}
            className="absolute right-[-80px] top-[32%] -translate-y-1/2 z-0 pointer-events-none sm:right-[-180px] sm:top-[35%] sm:w-[340px] sm:h-[420px]"
            style={{ zIndex: 0 }}
            draggable={false}
          />
          {/* Girl image (high z-index) */}
          <Image
            src={girlImage}
            alt="girl"
            width={90}
            height={120}
            className="relative z-10 rounded-2xl object-cover w-[90px] h-[120px] sm:w-[180px] sm:h-[250px] shadow-lg"
            draggable={false}
          />
        </div>

        {/* Boy at bottom left */}
        <div className="absolute left-2 bottom-2 w-[38px] h-[50px] sm:left-[10%] sm:w-[70px] sm:h-[90px]">
          <Image
            src={boyImage}
            alt="boy"
            width={70}
            height={90}
            className="w-full h-full rounded-xl object-cover"
            draggable={false}
          />
        </div>
      </div>

      {/* --- Text + Button Section --- */}
      <div className="flex-1 flex flex-col justify-center items-center gap-2 px-2 mt-6 lg:mt-0">
        <h2 className="text-[#fe7465] dark:text-[#ff9681] text-center font-outfit text-[24px] sm:text-[36px] font-semibold mb-1">
          You’re <span className="text-black dark:text-white">Not Alone</span>
        </h2>
        <p className="text-black dark:text-white text-center font-poppins text-[13px] sm:text-[14px] font-normal mb-2 max-w-[340px] sm:max-w-full">
          In group discussions, you’re part of a supportive community. Share your thoughts, gain new insights, and stay motivated as we help each other to reach their goals.
        </p>
        <button
          className="rounded-md bg-brand-500 text-white font-outfit text-[14px] sm:text-[16px] font-semibold px-6 py-2 sm:px-8 sm:py-2 mt-2 transition hover:bg-brand-600"
          onClick={() => setIsIframeVisible(true)}
        >
          Get Started
        </button>
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
    </div>
  )
}
