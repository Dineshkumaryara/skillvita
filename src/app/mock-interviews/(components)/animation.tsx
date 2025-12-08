// components/GaugeSpeedometer.tsx
"use client"

import React from 'react'
import AnimatedTypography from './AnimatedTypography'

interface GaugeProps {
  percent?: number
}

const GaugeSpeedometer: React.FC<GaugeProps> = ({ percent = 75 }) => {
  const radius = 35
  const circumference = 2 * Math.PI * radius

  return (
    <div className="w-[160px] h-[100px] relative mx-auto">
      <svg viewBox="0 0 160 100" className="w-full h-full">
        <defs>
          <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7234f7" />
            <stop offset="100%" stopColor="#7234f7" />
          </linearGradient>
        </defs>

        {/* background arc */}
        <path
          d="M 25 80 A 35 35 0 0 1 135 80"
          stroke="#E6E6E6"
          strokeWidth={14}
          fill="none"
          strokeLinecap="round"
        />

        {/* animated fill arc */}
        <path
          d="M 25 80 A 35 35 0 0 1 135 80"
          stroke="url(#gaugeGradient)"
          strokeWidth={14}
          fill="none"
          strokeLinecap="round"
          className="transform origin-center animate-fillGauge"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: circumference,
          }}
        />

        {/* percentage text */}
        <text
          x="80"
          y="85"
          textAnchor="middle"
          className="font-poppins font-semibold text-[24px] fill-[#7234f7] opacity-0 animate-fadeIn"
          style={{ animationDelay: '1.2s' }}
        >
          <AnimatedTypography to={percent} duration={1200} />%
        </text>
      </svg>

      <style jsx>{`
        @keyframes fillGauge {
          to {
            stroke-dashoffset: ${circumference - (percent / 120) * circumference};
          }
        }
        .animate-fillGauge {
          animation: fillGauge 1.5s ease-out forwards;
        }
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

export default GaugeSpeedometer
