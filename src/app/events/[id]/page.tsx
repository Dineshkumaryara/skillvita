/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import axios from "axios";

import Navbar from "@/components/navbar/Navbar";
import { RegistrationForm } from "@/app/events/_components/register";
import EventSidebarCard from "@/app/events/[id]/_components/EventSidebarCard";
import EventMainContent from "@/app/events/[id]/_components/EventMainContent";
import Preloader from "@/components/ui/PreLoader";
import UpcomingEventsSidebar from "@/app/events/[id]/_components/UpcomingEventsSidebar";

interface EventType {
  id: number;
  title: string;
  date: string;
  time?: { from: string; upto: string };
  locationName: string;
  address: string;
  isCompleted: boolean;
  youtubeLink?: string;
  about: string;
  mentors?: { name: string; photo?: string }[];
  hostedBy?: { name: string; photo?: string }[];
  category?: string;
  tracksAndHighlights?: {
    tracks: { title: string; description: string }[];
    perks: string[];
    participation: string;
    entry: string;
  };
  locationlink?: string;
  image?: string;
}

const getYoutubeVideoId = (url: string | undefined | null) => {
  if (!url) return null;
  const regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[7].length === 11 ? match[7] : null;
};

const YouTubeEmbed = ({ url }: { url: string }) => {
  const videoId = getYoutubeVideoId(url);
  if (!videoId) return null;
  return (
    <div className="aspect-video w-full rounded-xl overflow-hidden mb-6">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default function EventDetailPage() {
  const params = useParams();
  const id = params?.id;

  const [event, setEvent] = useState<EventType | null>(null);
  const [upcomingEvents, setUpcomingEvents] = useState<EventType[]>([]);
  const [loading, setLoading] = useState(true);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  useEffect(() => {
    const fetchEventData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_LINK}/api/getOneEvent/${id}`
        );
        const fetchedEvent = res.data;
        const formattedEvent = { ...fetchedEvent, id: fetchedEvent._id };
        setEvent(formattedEvent);

        const allRes = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_LINK}/api/getAllEvents`
        );
        const allEvents = allRes.data.map((e: any) => ({
          ...e,
          id: e._id,
        }));

        const upcoming = allEvents.filter(
          (e: EventType) => !e.isCompleted && e.id !== formattedEvent.id
        );
        setUpcomingEvents(upcoming);
      } catch (err) {
        console.error("Error loading event or upcoming events:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchEventData();
  }, [id]);

  if (loading) return <Preloader />;
  if (!event)
    return <div className="p-10 text-center text-red-500">Event not found</div>;

  return (
    <div className="bg-white dark:bg-black">
      <div className=" max-w-7xl mx-auto bg-white dark:bg-black -mt-8">
        <Navbar />
        <div className="max-w-[1400px] mx-auto px-8 sm:px-6 lg:px-8 py-10">
          <div className="text-sm text-gray-600 dark:text-gray-300 mb-6">
            <Link href="/">Home</Link> &gt; <Link href="/events">Events</Link>{" "}
            &gt; <span>{event.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Sidebar First (Left) */}
            <div className="lg:col-span-3">
              <div className="lg:sticky lg:top-24">
                <EventSidebarCard event={event} />
              </div>
            </div>

            {/* Main Content (Center) */}
            <div className="lg:col-span-6">
              <EventMainContent event={event} YouTubeEmbed={YouTubeEmbed} />
            </div>

            {/* Upcoming Events (Right) */}
            <div className="lg:col-span-3">
              <div className="lg:sticky lg:top-24">
                <UpcomingEventsSidebar events={upcomingEvents} />
              </div>
            </div>
          </div>

          {showRegistrationForm && (
            <RegistrationForm
              event={event}
              isWaitlist={event.isCompleted}
              onClose={() => setShowRegistrationForm(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
