import Link from "next/link";
import Image from "next/image";

interface EventType {
  id: number;
  title: string;
  date: string;
  locationName: string;
  image?: string;
  category?: string;
}

export default function UpcomingEventCard({ event }: { event: EventType }) {
  return (
    <div
      className="
      bg-white 
      rounded-lg 
      border 
      border-gray-200 
      dark:border-zinc-700 
      overflow-hidden 
      text-[10px] sm:text-xs md:text-sm 
      mx-auto 
      w-full
    "
    >
      {/* Image Section with Responsive Aspect Ratio */}
      <div className="relative w-full aspect-[16/9]">
        {event.category === "workshop" && (
          <div className="absolute top-1 left-1 bg-black/70 text-white text-[9px] px-1.5 py-0.5 rounded-full flex items-center gap-1 z-10">
            <Image
              src="/images/events/mic.svg"
              alt="mic"
              width={16}
              height={16}
            />
            Recorded
          </div>
        )}

        <Image
          src={event.image || "/api/placeholder/300x120"}
          alt={event.title}
          fill
          className="object-cover"
          sizes="w-full h-full object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="p-2 sm:p-2.5 md:p-3 break-words">
        <h3 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-1 leading-tight whitespace-normal">
          {event.title}
        </h3>

        <div className="text-gray-600 dark:text-gray-400 flex items-start gap-1 mb-1 whitespace-normal">
          <Image
            src="/images/events/calender.svg"
            alt="calendar"
            width={20}
            height={20}
            className="mt-0.5"
          />
          <span className="leading-tight break-words">{event.date}</span>
        </div>

        <div className="text-gray-600 dark:text-gray-400 flex items-start gap-1 mb-2 whitespace-normal">
          <Image
            src="/images/events/location.svg"
            alt="location"
            width={20}
            height={20}
            className="mt-0.5"
          />
          <span className="leading-tight break-words">
            {event.locationName}
          </span>
        </div>

        <Link
          href={`/events/${event.id}`}
          className="block text-center bg-brand-500 text-white text-[11px] sm:text-[12px] py-2 rounded-md transition font-medium"
        >
          Register
        </Link>
      </div>
    </div>
  );
}
