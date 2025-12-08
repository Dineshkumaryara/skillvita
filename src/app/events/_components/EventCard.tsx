import Image from "next/image";
import Link from "next/link";

type EventCardProps = {
  id: string | number;
  title: string;
  date: string;
  locationName: string;
  image?: string;
  category?: string;
};

const EventCard = ({ id, title, date, locationName, image, category }: EventCardProps) => {
  return (
    <div className="bg-white dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] rounded-xl overflow-hidden relative">
      {category === "workshop" && (
        <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1 z-10">
          <Image
            src="images/events/mic.svg"
            alt="mic"
            width={16}
            height={16}
          />
          Recorded session
        </div>
      )}
      <div className="h-48 overflow-hidden">
        <Image
          src={image || "/api/placeholder/400/320"}
          alt={title}
          width={400}
          height={192}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 line-clamp-1 text-ellipsis overflow-hidden whitespace-nowrap">
          {title}
        </h3>
        <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          <div className="flex items-center mb-1">
            <Image
              src="images/events/calender.svg"
              alt="Calendar"
              width={16}
              height={16}
              className="mr-2"
            />
            {date}
          </div>
          <div className="flex items-center">
            <Image
              src="images/events/location.svg"
              alt="Location"
              width={16}
              height={16}
              className="mr-2"
            />
            {locationName}
          </div>
        </div>
        <Link
          href={`/events/${id}`}
          className="block text-center bg-brand-500 text-white font-semibold py-2 rounded-md"
        >
          Know more
        </Link>
      </div>
    </div>
  );
};

export default EventCard; 