"use client";
import React, { useEffect, useState } from 'react';

interface Props {
  to: number;
  duration?: number; // ms
}

const AnimatedTypography: React.FC<Props> = ({ to, duration = 1000 }) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / to));
    const timer = setInterval(() => {
      start += 1;
      setValue(start);
      if (start === to) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [to, duration]);
  return <tspan>{value}</tspan>;
};

export default AnimatedTypography;
