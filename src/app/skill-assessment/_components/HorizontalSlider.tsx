"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

interface HorizontalSliderProps {
  currentSection: number;
  setCurrentSection: (n: number) => void;
  steps: string[];
  questionNo: number; // global question number across all sections
  questionsPerSection: number[];
}

const HorizontalSlider: React.FC<HorizontalSliderProps> = ({
  currentSection,
  setCurrentSection,
  steps,
  questionNo: questionNoProp,
  questionsPerSection,
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  // Use internal questionNo state synced with prop
  const [questionNo, setQuestionNo] = useState(questionNoProp);

  // Sync local questionNo state when prop changes
  useEffect(() => {
    setQuestionNo(questionNoProp);
  }, [questionNoProp]);

  const totalSections = steps.length;
  const sectionWidthPercent = 100 / totalSections;

  const currentSectionTotalQuestions =
    questionsPerSection[currentSection] &&
    questionsPerSection[currentSection] > 0
      ? questionsPerSection[currentSection]
      : 1;

  // Since questionNo resets every section, no need to subtract anything
  const questionNoInSection = Math.min(
    Math.max(questionNo, 1),
    currentSectionTotalQuestions
  );

  const progressInSection = Math.min(
    questionNoInSection / currentSectionTotalQuestions,
    1
  );

  // Whenever currentSection changes, reset questionNo to first question in that section
  // Debug log state updates on render

  const getStepIndexFromPosition = (clientX: number) => {
    if (!sliderRef.current) return 0;
    const rect = sliderRef.current.getBoundingClientRect();
    const relativeX = clientX - rect.left;
    const stepWidth = rect.width / totalSections;
    const stepIndex = Math.min(
      totalSections - 1,
      Math.floor(relativeX / stepWidth)
    );
    console.log("getStepIndexFromPosition:", {
      clientX,
      relativeX,
      stepWidth,
      stepIndex,
    });
    return stepIndex;
  };

  const handleClick = (e: React.MouseEvent) => {
    const index = getStepIndexFromPosition(e.clientX);
    console.log("handleClick index:", index);
    setCurrentSection(index);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current?.contains(e.target as Node)) return;

    const onMouseMove = (moveEvent: MouseEvent) => {
      const index = getStepIndexFromPosition(moveEvent.clientX);
      console.log("handleMouseDown -> onMouseMove index:", index);
      setCurrentSection(index);
    };

    const onMouseUp = () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      console.log("handleMouseDown -> onMouseUp");
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    onMouseMove(e.nativeEvent);
  };

  // Calculate the left offset for the progress bar
  const progressLeft = sectionWidthPercent / 2 + currentSection * sectionWidthPercent;

  // Calculate the width, but cap it so left + width <= 100
  let progressWidth = progressInSection * sectionWidthPercent;
  if (progressLeft + progressWidth > 100) {
    progressWidth = 100 - progressLeft;
  }
  progressWidth = Math.max(progressWidth, 0.5); // keep minimum width

  return (
    <div
      ref={sliderRef}
      className="w-full overflow-x-auto px-2 mt-2 mb-4 select-none"
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onTouchStart={(e) => {
        e.preventDefault();
        handleMouseDown(e as unknown as React.MouseEvent);
      }}
    >
      <div className="relative min-w-full sm:min-w-[600px]">
        {/* Base line */}
        <div
          className="absolute top-4 h-[3px] bg-gray-300 rounded-full z-[1]"
          style={{
            left: `${sectionWidthPercent / 2}%`,
            width: `${100 - sectionWidthPercent}%`,
          }}
        />

        {/* Completed sections */}
        {currentSection > 0 && (
          <div
            className="absolute top-4 h-[3px] bg-gradient-to-r from-brand-500 to-brand-500 rounded-full z-[2]"
            style={{
              left: `${sectionWidthPercent / 2}%`,
              width: `${currentSection * sectionWidthPercent}%`,
            }}
          />
        )}

        {/* Progress within current section */}
        <div
          className="absolute top-4 h-[3px] bg-gradient-to-r from-brand-500 to-brand-500 rounded-full z-[3] transition-all duration-300"
          style={{
            left: `${progressLeft}%`,
            width: `${progressWidth}%`,
          }}
        />

        {/* Steps */}
        <div className="relative flex justify-between z-[4]">
          {steps.map((label: string, index: number) => {
            const isCompleted = index < currentSection;
            const isActive = index === currentSection;

            return (
              <div
                key={index}
                className="flex-1 text-center cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentSection(index);
                }}
              >
                <div
                  className={`w-7 h-7 rounded-full mx-auto flex items-center justify-center transition-all duration-200 ${
                    isCompleted
                      ? "bg-brand-700"
                      : isActive
                      ? "bg-brand-400"
                      : "bg-brand-100"
                  }`}
                >
                  {isCompleted ? (
                    <div className="w-7 h-7 rounded-full overflow-hidden">
                      <Image
                        src="/images/skillAssessment/tick.svg"
                        alt="tick"
                        width={28}
                        height={28}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : isActive ? (
                    <span className="text-white text-sm font-semibold">▼</span>
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-brand-500" />
                  )}
                </div>
                <div
                  className={`mt-1 text-xs ${
                    isActive ? "font-bold text-brand-500" : "text-gray-800 dark:text-gray-300"
                  }`}
                >
                  {label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HorizontalSlider;
