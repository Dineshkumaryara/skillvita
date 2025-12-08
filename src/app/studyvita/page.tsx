"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Brain, Zap, Target } from "lucide-react";

const StudyvitaComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Countdown timer - set to September 30th, 2025
  useEffect(() => {
    const targetDate = new Date('September 30, 2025 00:00:00');

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        // If countdown is complete, show zeros
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="relative">
        

        {/* Main Content */}
        <main className="px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo and Title */}
            <div className="mb-20">
              <div className="w-20 h-20 mx-auto mb-8 bg-gray-100 rounded-2xl flex items-center justify-center">
                <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                StudyVita
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                AI Curated learning playlists from top open-source tutorials for fast, effective concept mastery.
              </p>
            </div>

            {/* Coming Soon Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gray-100 border border-gray-200 rounded-full mb-16">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
              <span className="text-gray-700 font-medium">Coming Soon</span>
            </div>

            {/* Countdown Timer */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20 max-w-lg mx-auto">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                    <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{value}</div>
                    <div className="text-gray-500 text-xs uppercase tracking-wider">{unit}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-20">
              {[
                {
                  icon: Brain,
                  title: "AI-Powered Curation",
                  description: "Intelligent algorithms select the best learning resources tailored to your needs"
                },
                {
                  icon: Zap,
                  title: "Fast Learning",
                  description: "Optimized learning paths that help you master concepts in record time"
                },
                {
                  icon: Target,
                  title: "Personalized Paths",
                  description: "Custom learning journeys based on your current knowledge and goals"
                }
              ].map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="group h-full flex">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 group-hover:border-gray-300 transition-all duration-200 flex flex-col h-full items-center">
                      <div className="flex justify-center mb-3 w-full">
                        <IconComponent className="w-8 h-8 text-gray-700 mx-auto" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">{feature.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed flex-1 text-center">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            

            {/* Back to Home */}
            <div className="mt-12">
              <Link 
                href="/"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:text-gray-900 transition-all duration-200 group"
              >
                <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StudyvitaComingSoon;
