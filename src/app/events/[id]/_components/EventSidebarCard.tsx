"use client";

import Image from "next/image";

interface EventSidebarCardProps {
  event: {
    title: string;
    date: string;
    time?: { from: string; upto: string };
    locationName: string;
    address: string;
    mentors?: { name: string; photo?: string }[];
    hostedBy?: { name: string; photo?: string }[];
  };
}

export default function EventSidebarCard({ event }: EventSidebarCardProps) {
  return (
    <aside className="rounded-xl overflow-hidden shadow-lg border border-[#E4E4E7] dark:border-[#27272A] lg:col-span-3 bg-white dark:bg-gray-900">
      {/* Top Header */}
      <div className="bg-[#0d1442] dark:bg-[#18181B] px-5 py-4">
        <p className="text-xs text-white mb-2">Hosted By</p>
        <Image src="/images/events/cv1.svg" alt="Coursevita" width={120} height={50} />
      </div>

      {/* Event Info */}
      <div className="bg-[#1a237e] dark:bg-[#1a237e]/10 text-white px-5 py-6 space-y-3">
        <h2 className="text-xl font-bold leading-snug">{event.title}</h2>

        <div className="text-sm space-y-1">
          <p>{event.date}</p>
          {event.time?.from && event.time?.upto && (
            <p>
              {event.time.from} - {event.time.upto}
            </p>
          )}
        </div>

        <div className="text-sm space-y-1">
          <p>{event.locationName}</p>
          <p className="text-xs text-gray-200">{event.address}</p>
        </div>

        {/* Mentors */}
        {event.mentors?.length ? (
          <div className="pt-4">
            <h4 className="text-sm font-semibold mb-2 text-white">Mentors</h4>
            <div className="flex flex-wrap gap-2">
              {event.mentors.map((m, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full overflow-hidden border-2 border-white hover:-translate-y-1 transition-transform"
                >
                  <Image
                    src={m.photo || "/api/placeholder/50/50"}
                    alt={m.name}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      {/* Registration Button */}

      {/* Hosted By People */}
      {event.hostedBy?.length ? (
        <div className="bg-gray-50 dark:bg-[#18181B] p-4 pb-2 border-t">
          <p className="text-sm font-medium text-brand-500 mb-3">Hosted By</p>
          {event.hostedBy.map((h, i) => (
            <div key={i} className="flex items-center gap-3 mb-3">
              <Image
                src={h.photo || "/api/placeholder/40/40"}
                alt={h.name}
                width={36}
                height={36}
                className="rounded-full"
              />
              <p className="text-sm font-medium text-gray-800 dark:text-white">
                {h.name}
              </p>
            </div>
          ))}
        </div>
      ) : null}
    </aside>
  );
}
