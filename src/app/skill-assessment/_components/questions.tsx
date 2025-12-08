"use client";

import React, { useEffect, useState } from "react";
import {
  personaAssesment,
  technicalExpert,
  creativeInnovator,
  analyticalThinker,
  teamLeader,
  entrepreneur,
} from "./AllQuestion";
import HorizontalSlider from "./HorizontalSlider";
import { Result } from "./result";
import Image from "next/image";
interface QuestionsProps {
  setIsLanding: (val: boolean) => void;
}

export type Question = {
  id: number;
  question: string;
  options: Partial<Record<"A" | "B" | "C" | "D" | "E", string>>;
};

export default function Questions({}: QuestionsProps) {
  const [questionList, setQuestionList] =
    useState<Question[]>(personaAssesment);
  const [questionNo, setQuestionNo] = useState(1);
  const [selectedAns, setSelectedAns] = useState<number[]>(
    Array(personaAssesment.length).fill(null)
  );
  const [isResult, setIsResult] = useState(false);
  const [persona, setPersona] = useState("");
  const [message, setMessage] = useState(false);
  const [isResult2, setIsResult2] = useState(false);
  const [submitCount, setSubmitCount] = useState(0);

  const determinePersona = (answers: number[]) => {
    const letterAnswers = answers.map((num) => String.fromCharCode(65 + num));
    const counts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };

    letterAnswers.forEach((ans) => {
      if (counts[ans] !== undefined) counts[ans]++;
    });

    let max = 0;
    let dominant = "Technical Expert";
    for (const [key, val] of Object.entries(counts)) {
      if (val > max) {
        max = val;
        dominant =
          {
            A: "Technical Expert",
            B: "Creative Innovator",
            C: "Analytical Thinker",
            D: "Team Leader",
            E: "Entrepreneur",
          }[key] || "Technical Expert";
      }
    }
    return dominant;
  };

  useEffect(() => {
    const count = selectedAns.filter((v) => v !== null).length;
    if (count === 9) {
      setPersona(determinePersona(selectedAns));
    }
  }, [selectedAns]);

  const beginSkillAssessment = () => {
    switch (persona) {
      case "Technical Expert":
        setQuestionList(technicalExpert);
        break;
      case "Creative Innovator":
        setQuestionList(creativeInnovator);
        break;
      case "Analytical Thinker":
        setQuestionList(analyticalThinker);
        break;
      case "Team Leader":
        setQuestionList(teamLeader);
        break;
      case "Entrepreneur":
        setQuestionList(entrepreneur);
        break;
      default:
        setQuestionList(technicalExpert);
    }
    setQuestionNo(1);
    setSelectedAns(Array(5).fill(null));
    setIsResult(false);
  };

  const currentQ = questionList.find((q) => q.id === questionNo);

  const steps = ["Persona Assessment", "Skill Assessment", "Results"];
  const activeStep = isResult ? 2 : questionList === personaAssesment ? 0 : 1;

  function handlePrevious(): void {
    setMessage(false);
    if (questionNo > 1) {
      setQuestionNo(questionNo - 1);
    }
  }
  return (
    <div className="bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto min-h-[calc(100vh-64px)] 2xl:min-h-0 2xl:h-auto 2xl:pb-12 md:-mt-8 -mt-4 flex flex-col items-center justify-start px-2 font-outfit text-black relative">
        {/* Horizontal Progress Bar */}
        <div className="w-full flex justify-center mt-4 sm:mt-6 px-2 overflow-x-auto">
          <div className="w-full max-w-full px-0 sm:px-2">
            <HorizontalSlider
              currentSection={activeStep}
              setCurrentSection={(stepIndex) => {
                if (stepIndex === 0) {
                  setQuestionNo(1);
                  setIsResult(false);
                  setSelectedAns(Array(personaAssesment.length).fill(null));
                } else if (stepIndex === 1) {
                  if (persona) {
                    beginSkillAssessment();
                  }
                } else if (stepIndex === 2) {
                  const answered = selectedAns.filter((v) => v !== null).length;
                  if (answered === questionList.length) setIsResult(true);
                }
              }}
              steps={steps}
              questionNo={questionNo}
              questionsPerSection={[
                personaAssesment.length,
                questionList.length,
                1,
              ]}
            />
          </div>
        </div>

        {/* Main Card Container */}
        <div className="w-full max-w-[960px] min-h-[553px] flex flex-col justify-center items-center rounded-2xl px-6 sm:px-8 md:px-10 py-6 bg-white dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] text-gray-900">
          {submitCount === 2 ? (
            <Result submitCount={submitCount} isResult2={isResult2} />
          ) : (
            <>
              <div className="w-full h-full text-gray-900 dark:text-gray-200">
                {!isResult && currentQ && (
                  <div className="w-full flex flex-col justify-between items-start min-h-[500px]">
                    <p className="text-lg font-semibold mb-4">
                      {currentQ.id}. {currentQ.question}
                    </p>

                    {message && (
                      <p className="bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-200 p-2 px-4 rounded mb-4">
                        Please select an option before proceeding.
                      </p>
                    )}

                    <div className="flex flex-col gap-4 w-full md:w-1/2">
                      {Object.entries(currentQ.options).map(
                        ([key, value], i) => {
                          const isSelected = selectedAns[currentQ.id - 1] === i;
                          return (
                            <button
                              key={key}
                              onClick={() => {
                                const updated = [...selectedAns];
                                updated[currentQ.id - 1] = i;
                                setSelectedAns(updated);
                                setMessage(false);
                              }}
                              className={`
  text-left px-4 py-3 border border-[#E4E4E7] dark:border-[#27272A] rounded-lg font-medium transition-none
  ${
    isSelected
      ? "bg-brand-500 text-white"
      : "bg-white dark:bg-black text-gray-900 dark:text-gray-200"
  }
`}
                            >
                              <span className="mr-2 font-semibold">{key}</span>{" "}
                              {value}
                            </button>
                          );
                        }
                      )}
                    </div>

                    <div className="flex justify-end items-center gap-4 mt-6 mb-4 w-full">
                      <button
                        onClick={handlePrevious}
                        className="border border-[#644DFF] text-[#644DFF] px-[75px] py-4 w-[234px] h-[55px] rounded-[10px] font-bold text-sm"
                      >
                        Previous
                      </button>

                      <button
                        onClick={() => {
                          const isLast = questionNo === questionList.length;
                          const isAnswered =
                            selectedAns[currentQ.id - 1] !== null;
                          const allAnswered =
                            selectedAns.filter((v) => v !== null).length ===
                            questionList.length;

                          if (isLast) {
                            if (!allAnswered) {
                              setMessage(true);
                            } else {
                              if (submitCount === 0) {
                                setIsResult(true);
                                setSubmitCount(1);
                              } else if (submitCount === 1) {
                                setIsResult2(true);
                                setIsResult(false);
                                setSubmitCount(2);
                              }
                            }
                          } else {
                            if (isAnswered) {
                              setQuestionNo(questionNo + 1);
                            } else {
                              setMessage(true);
                            }
                          }
                        }}
                        className="bg-[#644DFF] text-white font-semibold rounded-md w-full sm:w-[234px] h-[55px] px-5 py-3"
                      >
                        {questionNo === questionList.length
                          ? submitCount === 1
                            ? "Finish"
                            : "Submit"
                          : "Next"}
                      </button>
                    </div>
                  </div>
                )}

                {isResult && !isResult2 && (
                  <div className="text-center flex flex-col items-center gap-4">
                    <p className="text-2xl font-semibold">
                      Awesome! You&apos;re a {persona}! 🚀
                    </p>
                    <p className="max-w-sm text-base">
                      Based on your responses, we&apos;ve identified your
                      persona. Let&apos;s find out your skill level to recommend
                      the perfect courses for you.
                    </p>

                    <button
                      onClick={() => {
                        setIsResult(false);
                        beginSkillAssessment();
                      }}
                      className="bg-gradient-to-r from-brand-700 to-[#fe7465] text-white px-6 py-3 rounded-lg font-semibold"
                    >
                      Begin Skill Assessment
                    </button>

                    <div className="flex items-center gap-2">
                      <Image
                        src="/images/skillAssessment/clock.svg"
                        alt="clock"
                        width={20}
                        height={20}
                      />

                      <p className="text-sm">Takes 5 min</p>
                    </div>
                  </div>
                )}

                <Result submitCount={submitCount} isResult2={isResult2} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
