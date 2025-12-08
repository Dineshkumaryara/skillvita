"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import EventCard from "@/app/events/_components/EventCard";
import { ArrowRight, ArrowLeft } from "lucide-react";
import axios from "axios";

type Event = {
  id: string | number;
  title: string;
  date: string;
  locationName: string;
  image?: string;
  category?: string;
  isCompleted: boolean;
};

type TabType = "all" | "upcoming";

const Workshop = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [activeTab, setActiveTab] = useState<TabType>("all");
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(1);

  const filteredEvents =
    activeTab === "all" ? events : events.filter((event) => !event.isCompleted);

  useEffect(() => {
    const abortController = new AbortController();
    
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_LINK}/api/getAllEvents`,
          { signal: abortController.signal }
        );
        let allEvents = [];
        if (response.data && Array.isArray(response.data)) {
          allEvents = response.data.map((event: Event & { _id?: string | number }) => ({
            ...event,
            id: event._id, // map MongoDB _id to id
          }));
        } else if (response.data?.results) {
          allEvents = response.data.results;
        }
        const workshopEvents = allEvents.filter(
          (event: Event) => event.category === "workshop"
        );
        setEvents(workshopEvents);
      } catch {
        // Silently handle error - events will just not display
      }
    };
    fetchEvents();
    
    return () => {
      abortController.abort();
    };
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    const updateScrollState = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setTotalSlides(emblaApi.scrollSnapList().length);
    };

    emblaApi.on("select", updateScrollState);
    updateScrollState();
  }, [emblaApi]);

  return (
    <section className="bg-white dark:bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-xl sm:text-3xl font-normal text-black dark:text-white mb-6">
          <span>Learn from the best</span> <br />
          <span className="font-medium"> workshops</span>
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          {["all", "upcoming"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as TabType)}
              className={`px-5 py-2 rounded-lg transition-all duration-300 ${
                activeTab === tab
                  ? "bg-[#6B46FE] text-white"
                  : "bg-gray-100 dark:bg-[#18181B] text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {tab === "all" ? "All Workshops" : "Upcoming"}
            </button>
          ))}
        </div>

        {filteredEvents.length > 0 ? (
          <>
            {/* Carousel and arrows */}
            <div className="flex items-center gap-2 md:gap-4 ">
              {/* Left Arrow */}
              {filteredEvents.length > 4 && (
                <button
                  onClick={() => emblaApi?.scrollPrev()}
                  disabled={!canScrollPrev}
                  className={`hidden md:inline-flex p-2 border border-gray-300 dark:border-gray-700 rounded-full transition ${
                    canScrollPrev
                      ? "hover:bg-gray-200 dark:hover:bg-gray-700"
                      : "opacity-50 cursor-not-allowed"
                  }`}
                  title="Previous"
                >
                  <ArrowLeft className="w-5 h-5 text-black dark:text-white" />
                </button>
              )}

              {/* Carousel */}
              <div className="overflow-hidden w-full" ref={emblaRef}>
                <div
                  className={`flex gap-4 ${
                    filteredEvents.length <= 4 ? "justify-center" : ""
                  }`}
                >
                  {filteredEvents.map((event) => (
                    <div
                      key={event.id}
                      className="min-w-[240px] sm:min-w-[270px] md:min-w-[360px] flex-shrink-0"
                    >
                      <EventCard
                        id={event.id}
                        title={event.title}
                        date={event.date}
                        locationName={event.locationName}
                        image={event.image}
                        category={event.category}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Arrow */}
              {filteredEvents.length > 4 && (
                <button
                  onClick={() => emblaApi?.scrollNext()}
                  disabled={!canScrollNext}
                  className={`hidden md:inline-flex p-2 border border-gray-300 dark:border-gray-700 rounded-full transition ${
                    canScrollNext
                      ? "hover:bg-gray-200 dark:hover:bg-gray-700"
                      : "opacity-50 cursor-not-allowed"
                  }`}
                  title="Next"
                >
                  <ArrowRight className="w-5 h-5 text-black dark:text-white" />
                </button>
              )}
            </div>

            {/* Progress Bar BELOW Carousel */}
            {filteredEvents.length > 4 && (
              <div className="mt-6 flex justify-center">
                <div className="w-24 md:w-48 h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden relative">
                  <div
                    className="h-full bg-[#0F002E] dark:bg-white rounded-full transition-all duration-300"
                    style={{
                      width: `${100 / totalSlides}%`,
                      left: `${(100 / totalSlides) * selectedIndex}%`,
                      position: "absolute",
                      top: 0,
                    }}
                  />
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16 px-4">
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
              No Upcoming Workshops
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
              Stay tuned! New workshops are being planned. Check back soon or
              explore our past workshops.
            </p>
            <button
              onClick={() => setActiveTab("all")}
              className="mt-6 px-6 py-2 bg-[#6B46FE] text-white rounded-lg"
            >
              View All Workshops
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Workshop;
