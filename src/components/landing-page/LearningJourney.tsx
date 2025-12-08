"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";


const LearningJourney = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [slideDirection, setSlideDirection] = useState('forward'); // 'forward' or 'backward'
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragOffset, setDragOffset] = useState(0);
  const [dragVelocity, setDragVelocity] = useState(0);
  const [lastMoveTime, setLastMoveTime] = useState(0);
  const [lastMoveX, setLastMoveX] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Detect mobile for performance optimizations
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const cards = [
    {
      id: 1,
      title: "Studyvita",
      description:
        "AI Curated learning playlists from top open-source tutorials for fast, effective concept mastery.",
      image: "/images/grid_section/1.png",
      gradient: "from-purple-600 via-pink-600 to-red-500",
      bgGradient:
        "bg-[linear-gradient(180deg,#7233F7_-50.79%,#000000_132.22%)]",
      link: "/studyvita",
    },
    {
      id: 2,
      title: "Quizvita",
      description:
        "Instant quizzes & flashcards to boost accuracy, speed, and exam confidence.",
      image: "/images/grid_section/2.png",
      gradient: "from-green-400 via-blue-500 to-purple-600",
      bgGradient:
        "bg-gradient-to-b from-[#644DFF] to-[#D2D2FF]",
      link: "https://quizvita.in/",
    },
    {
      id: 3,
      title: "Skillvita",
      description:
        "Mentored internships on cross-domain projects to build your portfolio.",
      image: "/images/grid_section/3.png",
      gradient: "from-yellow-400 via-orange-500 to-red-500",
      bgGradient:
        "bg-gradient-to-r from-[#FF7262] to-[#B1AEFF]",
      link: "https://skillvita.coursevita.com/",
    },
    {
      id: 4,
      title: "Job simulation",
      description:
        "Simulated job tasks, crafted by experts, for real-world experience before your first job.",
      image: "/images/grid_section/4.png",
      gradient: "from-pink-400 via-purple-500 to-indigo-600",
      bgGradient:
        "bg-gradient-to-r from-[#FF650A] to-[#B1AEFF]",
      link: "https://simulation.coursevita.com/",
    },
    // {
    //   id: 5,
    //   title: "Portfolio Builder",
    //   description:
    //     "Your dream portfolio is just minutes away — not days, not hours. Coding required",
    //   image: "/images/grid_section/4.png",
    //   gradient: "from-teal-400 via-cyan-500 to-blue-600",
    //   bgGradient:
    //     "from-teal-50 to-cyan-100 dark:from-teal-950 dark:to-cyan-900",
    // },
  ];

  // Intersection Observer to detect when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only show navigation when section is significantly visible
        const isSignificantlyVisible = entry.intersectionRatio > 0.5;
        setIsVisible(isSignificantlyVisible);
      },
      {
        threshold: [0.1, 0.5, 0.8], // Multiple thresholds for better control
        rootMargin: "0px 0px -300px 0px", // Larger margin to close earlier
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Additional scroll-based visibility check for more precise control
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Show navigation only when section is in the middle portion of the viewport
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;

      // Navigation appears when section is 40% visible and disappears when it's 60% hidden
      const isVisible =
        sectionTop < windowHeight * 0.6 && sectionBottom > windowHeight * 0.4;

      setIsVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      // Update less frequently on mobile for better performance
      const updateInterval = isMobile ? 100 : 50;
      const progressIncrement = isMobile ? 1 : 0.5;
      
      const interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + progressIncrement;
          if (newProgress >= 100) {
            // Add a small delay before advancing to next card
            setTimeout(() => {
              const nextCardIndex = (currentCard + 1) % cards.length;
              setSlideDirection('forward');
              setCurrentCard(nextCardIndex);
              setProgress(0);
            }, 200);
            return 100; // Keep at 100% during the delay
          }
          return newProgress;
        });
      }, updateInterval);
      return () => clearInterval(interval);
    }
  }, [isPlaying, cards.length, currentCard, isMobile]);

  const goToCard = (index: number) => {
    const direction = index > currentCard ? 'forward' : 'backward';
    setSlideDirection(direction);
    setCurrentCard(index);
    setProgress(0);
    setIsPlaying(false);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Touch and mouse event handlers
  const handleStart = (clientX: number, clientY: number) => {
    setIsDragging(true);
    setDragStart({ x: clientX, y: clientY });
    setDragOffset(0);
    setDragVelocity(0);
    setLastMoveTime(Date.now());
    setLastMoveX(clientX);
    setIsPlaying(false); // Pause auto-play when user starts interacting
  };

  const handleMove = (clientX: number) => {
    if (!isDragging) return;
    
    const deltaX = clientX - dragStart.x;
    setDragOffset(deltaX);
    
    // Calculate velocity for momentum-based swiping
    const currentTime = Date.now();
    const timeDelta = currentTime - lastMoveTime;
    if (timeDelta > 0) {
      const velocity = (clientX - lastMoveX) / timeDelta;
      setDragVelocity(velocity);
    }
    setLastMoveTime(currentTime);
    setLastMoveX(clientX);
  };

  const handleEnd = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    const cardWidth = carouselRef.current?.offsetWidth || 0;
    const swipeThreshold = cardWidth * 0.3; // 30% of card width
    const velocityThreshold = 0.5; // pixels per millisecond
    
    // Determine if swipe was significant enough to change cards
    const shouldSwipe = Math.abs(dragOffset) > swipeThreshold || Math.abs(dragVelocity) > velocityThreshold;
    
    if (shouldSwipe) {
      if (dragOffset > 0 || dragVelocity > 0) {
        // Swipe right - go to previous card
        const prevCardIndex = currentCard === 0 ? cards.length - 1 : currentCard - 1;
        setSlideDirection('backward');
        setCurrentCard(prevCardIndex);
      } else {
        // Swipe left - go to next card
        const nextCardIndex = (currentCard + 1) % cards.length;
        setSlideDirection('forward');
        setCurrentCard(nextCardIndex);
      }
    }
    
    setDragOffset(0);
    setDragVelocity(0);
    setProgress(0);
  };

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    handleStart(touch.clientX, touch.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    handleMove(touch.clientX);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  // Mouse event handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    handleStart(e.clientX, e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleEnd();
    }
  };

  return (
    <div
      id="learning-journey"
      ref={sectionRef}
      className="bg-white dark:bg-black relative"
    >
      <section className="max-w-7xl mx-auto sm:px-6 py-6 pb-20">
        <h2 className="text-center text-xl sm:text-3xl font-normal text-black dark:text-white mb-10">
          Why we are <br />
          <span className="font-medium">Best part of</span>{" "}
          <span className="font-medium">your learning journey</span>
        </h2>

        {/* Carousel Container */}
        <div 
          className={`relative overflow-hidden cursor-grab active:cursor-grabbing select-none ${
            isDragging ? 'cursor-grabbing' : ''
          }`}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          style={{ 
            touchAction: 'none', // Disable all default touch actions
            WebkitUserSelect: 'none',
            userSelect: 'none'
          }}
        >
          {/* Cards */}
          <div
            ref={carouselRef}
            className={`flex ${
              isDragging ? 'transition-none' : 'transition-transform duration-500 ease-in-out'
            }`}
            style={{ 
              transform: `translateX(calc(-${currentCard * 100}% + ${dragOffset}px))` 
            }}
          >
            {cards.map((card, index) => (
              <div key={card.id} className="w-full flex-shrink-0 px-4">
                <div
                  className={`relative h-[600px] rounded-3xl overflow-hidden ${card.bgGradient} p-8 flex flex-col justify-between`}
                >
                  {/* Content */}
                  <div className="text-left z-10 relative">
                    <h3
                      className={`text-3xl font-bold mb-4 text-white transition-all duration-700 ease-out ${
                        index === currentCard 
                          ? 'opacity-100 translate-x-0' 
                          : slideDirection === 'forward'
                            ? 'opacity-0 translate-x-8' // Moving forward: start from right
                            : 'opacity-0 -translate-x-8' // Moving backward: start from left
                      }`}
                      style={{
                        transitionDelay: index === currentCard ? '500ms' : '0ms'
                      }}
                    >
                      {card.title}
                    </h3>
                    <p 
                      className={`text-lg text-white leading-relaxed max-w-2xl transition-all duration-700 ease-out ${
                        index === currentCard 
                          ? 'opacity-100 translate-x-0' 
                          : slideDirection === 'forward'
                            ? 'opacity-0 translate-x-8' // Moving forward: start from right
                            : 'opacity-0 -translate-x-8' // Moving backward: start from left
                      }`}
                      style={{
                        transitionDelay: index === currentCard ? '600ms' : '0ms'
                      }}
                    >
                      {card.description}
                    </p>
                  </div>

                  {/* Bottom Image */}
                  <div className="relative z-10 flex justify-center items-end">
                    <div className="w-full max-w-[600px] h-[490px] overflow-hidden">
                      <Image
                        src={card.image}
                        alt={card.title}
                        width={600}
                        height={490}
                        loading="lazy"
                        quality={75}
                        sizes="(max-width: 768px) 100vw, 600px"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Arrow Icon - Bottom Left - Clickable */}
                  <div className="absolute bottom-6 left-6 z-20">
                    <a
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                      aria-label={`${card.title ?? "Open link"} (opens in a new tab)`}
                      onClick={(e) => {
                        // Prevent event bubbling to avoid triggering swipe
                        e.stopPropagation();
                      }}
                    >
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 17L17 7M17 7H7M17 7V17"
                            stroke="#1D1D1F"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </a>
                  </div>

                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-10`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Navigation Controls - Fixed at bottom of section */}
      <div
        className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-700 ease-out ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8 pointer-events-none"
        }`}
      >
        <div className="flex items-center space-x-4 ">
          {/* Play/Pause Button */}
          <button
            onClick={togglePlayPause}
            aria-label={isPlaying ? "Pause video" : "Play video"}
            className="w-12 h-12 rounded-full bg-white/20 dark:bg-gray-800/80 backdrop-blur-md shadow-2xl border border-white/30 dark:border-gray-600/50 flex items-center justify-center transition-transform duration-200 hover:bg-white/30 dark:hover:bg-gray-700/80"
          >
            {isPlaying ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 28 28"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M7.7 3C6.2078 3 5 3.61508 5 4.375L5 23.625C5 24.3849 6.2078 25 7.7 25C9.1922 25 10.4 24.3849 10.4 23.625L10.4 4.375C10.4 3.61508 9.1922 3 7.7 3ZM17.6 23.625L17.6 4.375C17.6 3.61508 18.8078 3 20.3 3C21.7922 3 23 3.61508 23 4.375L23 23.625C23 24.3849 21.7922 25 20.3 25C18.8078 25 17.6 24.3849 17.6 23.625Z"
                  fill="black"
                  className="dark:fill-white"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="15"
                viewBox="0 0 14 18"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1.7555 17.6236C2.2033 17.6236 2.6153 17.4893 3.1796 17.1668L14.0974 10.8346C14.9572 10.333 15.4588 9.81363 15.4588 8.99854C15.4588 8.19244 14.9572 7.67303 14.0974 7.17143L3.1796 0.839235C2.6153 0.507835 2.2034 0.373535 1.7555 0.373535C0.824001 0.373535 0 1.09004 0 2.31704V15.6799C0 16.9069 0.824001 17.6236 1.7555 17.6236Z"
                  fill="#1D1D1F"
                  className="dark:fill-white"
                />
              </svg>
            )}
          </button>

          {/* Progress Dots - Integrated progress bar within dots */}
          <div className="flex items-center space-x-2 bg-white/20 dark:bg-gray-800/80 backdrop-blur-md rounded-full px-6 py-5 shadow-2xl border border-white/20 dark:border-gray-600/50">
            {cards.map((_, index) => (
              <button
  key={index}
  type="button"
  onClick={() => goToCard(index)}
  aria-label={
    index === currentCard
      ? `Current card ${index + 1}`
      : `Go to card ${index + 1}`
  } //  adds accessible name
  className={`relative transition-all duration-500 ease-in-out overflow-hidden ${
    index === currentCard
      ? "bg-gray-300 dark:bg-gray-500"
      : index < currentCard
      ? "bg-[#1D1D1F99] dark:bg-gray-600"
      : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
  }`}
  style={{
    width: index === currentCard ? "48px" : "8px",
    height: "8px",
    borderRadius: "6px",
  }}
>
  {index === currentCard && (
    <div
      className="absolute left-0 top-0 h-full bg-[#1D1D1F99] dark:bg-gray-400 transition-all duration-100 ease-linear"
      style={{
        width: `${progress}%`,
        borderRadius:
          progress === 0
            ? "0px"
            : progress === 100
            ? "6px"
            : "6px 0 0 6px",
        minWidth: progress === 0 ? "0px" : "1px",
      }}
      aria-hidden="true" //  purely visual element
    />
  )}
</button>

            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningJourney;
