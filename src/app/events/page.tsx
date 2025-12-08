/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import EventsBentoGrid from "@/app/events/_components/eventsBentoGrid";
import EventCard from "./_components/EventCard";
import UpcomingEventCard from "./[id]/_components/UpcommingEventsCard";
import Preloader from "@/components/ui/PreLoader";

type Event = {
  id: string | number;
  title: string;
  date: string;
  locationName: string;
  image?: string;
  category?: string;
  isCompleted: boolean;
};

const EventsPage = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAllCompleted, setShowAllCompleted] = useState(false);
  const [showAllUpcoming, setShowAllUpcoming] = useState(false);
  const [loading, setLoading] = useState(false);
  const initialCount = 3;

  useEffect(() => {
  const fetchEvents = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_LINK}/api/getAllEvents`);
      

      if (response.data && Array.isArray(response.data)) {
       setEvents(
  response.data.map((event: any) => ({
    ...event,
    id: event._id, // map MongoDB _id to id
  }))
);
      } else if (response.data?.results) {
        // Optional: fallback in case data is nested
        setEvents(response.data.results);
      }
    } catch (err) {
      console.error("Failed to load events:", err);
    } finally {
      setLoading(false);
    }
  };

  fetchEvents();
}, []);


  const completedEvents = events.filter((e) => e.isCompleted);
  const upcomingEvents = events.filter((e) => !e.isCompleted);

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filteredCompletedEvents = filteredEvents.filter((e) => e.isCompleted);
  const filteredUpcomingEvents = filteredEvents.filter((e) => !e.isCompleted);

  const displayedCompletedEvents = showAllCompleted
    ? searchQuery
      ? filteredCompletedEvents
      : completedEvents
    : searchQuery
    ? filteredCompletedEvents.slice(0, initialCount)
    : completedEvents.slice(0, initialCount);

  const displayedUpcomingEvents = showAllUpcoming
    ? searchQuery
      ? filteredUpcomingEvents
      : upcomingEvents
    : searchQuery
    ? filteredUpcomingEvents.slice(0, initialCount)
    : upcomingEvents.slice(0, initialCount);

  const hasMoreCompletedEvents =
    (searchQuery ? filteredCompletedEvents.length : completedEvents.length) >
    initialCount;

  const hasMoreUpcomingEvents =
    (searchQuery ? filteredUpcomingEvents.length : upcomingEvents.length) >
    initialCount;

  return (
    loading ? (
      <Preloader />
    ) : (
      <div className="bg-white dark:bg-black p-6 -mt-5">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden mt-6 mb-6 px-6 py-28 md:px-20">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover"
            >
              <source src="/videos/eventsHero.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-opacity-30 z-0"></div>

            <div className="relative z-10 text-white max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold">
                Coursevita Events
              </h1>
              <h2 className="text-4xl md:text-6xl font-medium mt-1 mb-1">
                Learn, Network, Succeed.
              </h2>
              <p className="text-lg mt-2 mb-6">
                Explore New Opportunities With Free Live Sessions Where You Can
                Develop Your Skills And Dive Into Your Passions. Learn Directly
                From Industry Experts With Years Of Experience.
              </p>
              <div className="relative max-w-lg">
                <input
                  type="text"
                  placeholder="Search Events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-3 px-6 pr-40 rounded-full bg-transparent bg-opacity-10 border border-white text-white placeholder-white focus:outline-none"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-700 to-red-500 text-white px-5 py-2 rounded-full font-semibold">
                  Find My Event
                </button>
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white dark:bg-[#18181B] rounded-2xl p-5 border border-[#E4E4E7] dark:border-[#27272A] mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Upcoming Events</h2>
              {hasMoreUpcomingEvents && (
                <Link
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    setShowAllUpcoming(!showAllUpcoming);
                  }}
                  className="text-brand-500 hover:underline font-medium"
                >
                  {showAllUpcoming ? "View less" : "View more"}
                </Link>
              )}
            </div>

            {displayedUpcomingEvents.length === 0 ? (
              <div className="text-center text-gray-500 dark:text-gray-400 py-8">
                No upcoming events.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {displayedUpcomingEvents.map((event) => (
                  <UpcomingEventCard
                    key={
                      typeof event.id === "number" ? event.id : Number(event.id)
                    }
                    event={{
                      ...event,
                      id:
                        typeof event.id === "number"
                          ? event.id
                          : Number(event.id),
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* All Events */}
          <div className="bg-white dark:bg-[#18181B] rounded-2xl p-5 border border-[#E4E4E7] dark:border-[#27272A] mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">All Events</h2>
              {hasMoreCompletedEvents && (
                <Link
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    setShowAllCompleted(!showAllCompleted);
                  }}
                  className="text-brand-500 hover:underline font-medium"
                >
                  {showAllCompleted ? "View less" : "View more"}
                </Link>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
              {displayedCompletedEvents.map((event) => (
                <EventCard
                  key={event.id}
                  id={event.id}
                  title={event.title}
                  date={event.date}
                  locationName={event.locationName}
                  image={event.image}
                  category={event.category}
                />
              ))}
            </div>
          </div>

          <EventsBentoGrid />
        </div>
      </div>
    )
  );
};

export default EventsPage;
