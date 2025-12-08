"use client";
import { useState } from "react";

type FAQ = {
  question: string;
  answer: string;
};

type FAQsProps = {
  faqs: FAQ[];
};

export default function FAQs({ faqs }: FAQsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-[400] mb-16 sm:mb-24 text-center">
          <span>Frequently Asked {" "}</span>
          <span className="text-[#FF7262]">Questions</span>
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-[#E4E4E7] dark:border-[#27272A] rounded-lg overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center bg-gray-50 dark:bg-[#18181B] transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-gray-900 dark:text-gray-100">
                  {faq.question}
                </span>
                <span
                  className={`transform transition-transform duration-200 ease-in-out text-gray-900 dark:text-gray-100 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                  >
                    <path
                      d="M30.1543 18.0001C30.1543 24.7011 24.7008 30.1545 17.9998 30.1545C11.2989 30.1545 5.84539 24.7011 5.84539 18.0001C5.84539 11.2991 11.2988 5.84563 17.9998 5.84563C24.7008 5.84563 30.1543 11.2991 30.1543 18.0001ZM7.55628 18.0001C7.55628 23.7387 12.2256 28.4437 17.9998 28.4436C23.7741 28.4436 28.4434 23.7743 28.4434 18.0001C28.4434 12.2258 23.7741 7.55652 17.9998 7.55652C12.2256 7.55652 7.55628 12.2615 7.55628 18.0001Z"
                      fill="currentColor"
                    />
                    <path
                      d="M24.2018 15.6474C24.5226 15.9682 24.5226 16.5385 24.2018 16.8593L18.677 22.384C18.4988 22.5623 18.285 22.6335 18.0711 22.6335C17.8572 22.6335 17.6434 22.5266 17.4652 22.384L11.9404 16.8593C11.7622 16.6811 11.6909 16.4672 11.6909 16.2533C11.6909 16.0395 11.7622 15.8256 11.9404 15.6474C12.2612 15.3266 12.8315 15.3266 13.1523 15.6474L18.0711 20.5662L22.9899 15.6474C23.3107 15.291 23.8454 15.291 24.2018 15.6474Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`transition-all duration-200 ease-in-out overflow-hidden ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 py-4 bg-white dark:bg-black">
                  <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
