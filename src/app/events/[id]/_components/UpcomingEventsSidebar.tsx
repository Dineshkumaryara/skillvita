"use client";

import { useEffect, useState } from "react";
import UpcomingEventCard from "./UpcommingEventsCard";

interface EventType {
  id: number;
  title: string;
  date: string;
  locationName: string;
  image?: string;
  category?: string;
}

export default function UpcomingEventsSidebar({ events }: { events: EventType[] }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const isMobileScrollable = isClient && events.length > 2;

  return (
    <div className="sticky top-30 w-full dark:bg-[#18181B] rounded-xl  p-0">
      {/* Heading */}
      <div className=" lg:px-0">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          Upcoming Events
        </h3>
        {events.length === 0 && (
          <div className="w-full text-center text-sm italic text-gray-500 py-2">
            No upcoming events available.
          </div>
        )}
      </div>

      {/* Cards Layout */}
      {events.length > 0 && (
   <div
   className={`
     flex flex-col sm:flex-row lg:flex-col
     items-center sm:items-start lg:items-start
     justify-center sm:justify-center lg:justify-start
     gap-4
     pt-4
     lg:px-0
     ${isMobileScrollable ? "sm:overflow-x-auto sm:whitespace-nowrap" : ""}
     custom-scrollbar
     lg:overflow-y-auto
     lg:max-h-[calc(100vh-12rem)]
   `}
   style={{ WebkitOverflowScrolling: "touch" }}
 >
   {events.map((event, index) => (
     <div
       key={event.id}
       className={`
         w-full sm:w-[200px] md:w-[240px] lg:w-full
         flex-shrink-0 flex
       `}
       style={{
         marginRight: isMobileScrollable && index !== events.length - 1 ? "0.75rem" : "0",
       }}
     >
       <div className="w-full h-full flex flex-col">
         <UpcomingEventCard event={event} />
       </div>
     </div>
   ))}
 </div>
 
     
      )}
    </div>
  );
}
