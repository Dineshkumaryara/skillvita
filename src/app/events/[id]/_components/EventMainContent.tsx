"use client";

import { useState } from "react";
import { RegistrationForm } from "@/app/events/_components/register";

interface EventTime {
  from?: string;
  upto?: string;
}

interface TracksAndHighlights {
  tracks: { title: string; description: string }[];
  perks: string[];
  participation: string;
  entry: string;
}

interface EventType {
  id: number;
  title: string;
  date: string;
  time?: EventTime;
  locationName?: string;
  address?: string;
  isCompleted?: boolean;
  youtubeLink?: string;
  about?: string;
  category?: string;
  tracksAndHighlights?: TracksAndHighlights;
  locationlink?: string;
}

interface EventMainContentProps {
  event: EventType;
  YouTubeEmbed: React.ComponentType<{ url: string }>;
}

export default function EventMainContent({
  event,
  YouTubeEmbed,
}: EventMainContentProps) {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  return (
    <main className="space-y-6 lg:col-span-6 px-0  md:px-8">
      {/* Title + Time + Location */}
      <div className="pt-0">
        <h2 className="text-2xl font-bold text-black dark:text-white mb-4 leading-snug">
          {event.title}
        </h2>

        <div className="flex items-start gap-3 mb-3 text-sm text-gray-700 dark:text-gray-300">
          <img src="/images/events/cal2.svg" alt="calendar" className="w-6 h-6 mt-1" />
          <div>
            <p className="font-medium">{event.date}</p>
            {event.time?.from && event.time?.upto && (
              <p className="text-xs text-gray-500">
                {event.time.from} – {event.time.upto} GMT+5:30
              </p>
            )}
          </div>
        </div>

        {event.locationName && (
          <div className="flex items-start gap-3 mb-4 text-sm">
            <img src="/images/events/loc2.svg" alt="location" className="w-5 h-5 mt-1" />
            <div>
              <p className="font-medium text-gray-800 dark:text-white">
                {event.locationName}
              </p>
              <p className="text-xs text-gray-500 break-words max-w-xs sm:max-w-md">
                {event.address}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Registration Box */}
      <div>
        {event.isCompleted ? (
          <div className="rounded-xl overflow-hidden border border-[#E4E4E7] bg-[#f9f9ff] dark:bg-[#18181B] text-sm mb-6">
            <div className="bg-[#f1f1fb] dark:bg-[#26262f] px-4 py-2">
              <p className="text-sm font-medium text-brand-500">Event Completed</p>
            </div>
            <div className="p-4 space-y-4">
              <p className="text-base text-gray-800 dark:text-gray-200">
                To join the upcoming event, please join the waitlist below.
              </p>
              <button
                onClick={() => setShowRegistrationForm(true)}
                className="w-full bg-brand-500 hover:bg-brand-500 text-white text-sm font-semibold py-2.5 rounded-lg transition"
              >
                Join Waitlist
              </button>
            </div>
          </div>
        ) : (
          <div className="rounded-xl overflow-hidden border border-[#E4E4E7] bg-[#f9f9ff] dark:bg-[#18181B] text-sm mb-6">
            <div className="bg-[#f1f1fb] text-brand-500 font-medium px-4 py-2 dark:bg-[#26262f]">
              Registration
            </div>
            <div className="p-4 space-y-4">
              <p className="text-base text-gray-800 dark:text-gray-300">
                Welcome! To join the event, please register below.
              </p>
              <button
                onClick={() => {
                  if (event.id === 15) {
                    window.open("https://lu.ma/hlmhpqnq", "_blank");
                  } else {
                    setShowRegistrationForm(true);
                  }
                }}
                className="w-full bg-brand-500 text-white text-sm font-semibold py-2.5 rounded-lg transition"
              >
                Register Now
              </button>
            </div>
          </div>
        )}

        {showRegistrationForm && (
          <RegistrationForm
            event={event}
            isWaitlist={!!event.isCompleted}
            onClose={() => setShowRegistrationForm(false)}
          />
        )}
      </div>

      {/* About Section */}
      <div>
        <h3 className="text-xl font-semibold text-brand-500 mb-1">About Event</h3>
        {event.isCompleted && event.youtubeLink && (
          <div className="mb-4">
            <YouTubeEmbed url={event.youtubeLink} />
          </div>
        )}
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          {event.about}
        </p>
      </div>

      {/* Hackathon Details */}
      {event.category === "hackathon" && event.tracksAndHighlights && (
        <div className="rounded-lg space-y-4">
          <div>
            <h4 className="text-lg font-semibold text-brand-500">Event Tracks</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
              {event.tracksAndHighlights.tracks.map((t, idx) => (
                <li key={idx}>
                  <strong>{t.title}</strong>: {t.description}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-brand-500">Perks & Highlights</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
              {event.tracksAndHighlights.perks.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
          <p className="text-sm">
            <strong>Participation:</strong> {event.tracksAndHighlights.participation}
          </p>
          <p className="text-sm">
            <strong>Entry:</strong> {event.tracksAndHighlights.entry}
          </p>
        </div>
      )}

      {/* Location Map */}
      {event.locationlink && (
  <div className="mt-6">
    <h4 className="text-xl font-semibold text-brand-500 mb-2">Location</h4>
    <h3 className="mb-1">WeWork at Gachibowli</h3>
    <p className="text-sm font-medium text-brand-500 mb-4">
      Plot 118, 3rd floor, Spaces and more, Business Park, Lumbini Avenue, Gachibowli, Hyderabad, Telangana 500032
    </p>

    <div className="rounded overflow-hidden w-full">
      <div
        className="w-full h-[200px] sm:h-[240px] md:h-[300px] lg:h-[340px]"
        dangerouslySetInnerHTML={{ __html: event.locationlink }}
      />
    </div>
  </div>
)}

    </main>
  );
}