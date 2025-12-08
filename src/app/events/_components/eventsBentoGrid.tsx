"use client";

import Image from "next/image";

const EventsBentoGrid = () => {
  return (
    <div className="max-w-[1400px] mx-auto mt-7">
      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-11 gap-x-5 gap-y-5 auto-rows-min">
        <div className="group relative col-span-3 row-span-3  rounded-xl overflow-hidden shadow-sm transition-transform duration-300">
          <Image
            src="/images/events/pairHack1.png"
            alt="Pair Programming Hackathon"
            width={600}
            height={660}
             className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-indigo-900/80 to-transparent  text-white text-center">
            <h3 className="text-xl font-semibold text-shadow">
              Pair Programming Hackathon
            </h3>
            <h5 className="mb-2"> 19-Feb-2025</h5>
          </div>
        </div>

        <div className="group relative col-span-8 h-[320px] rounded-xl overflow-hidden shadow-sm transition-transform duration-300">
          <div className="w-full h-full flex items-center justify-center">
            <Image
              src="/images/events/snist.JPG"
              alt="SNIST Hackathon"
              width={900}
              height={600}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-indigo-900/80 to-transparent  text-white text-center">
            <h3 className="text-xl font-semibold text-shadow">
              SNIST Hackathon 
            </h3>
            <h5 className="mb-2">1-Nov-2024</h5>
          </div>
        </div>

        <div
          className="col-span-3 bg-[#7234F7] h-[145px] rounded-xl text-white flex items-center justify-center text-center relative transition-transform duration-300"
          style={{
            backgroundImage: "url(/images/events/circle.png)",
            backgroundPosition: "right bottom",
            backgroundSize: "55%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex gap-4 items-center">
            <h2 className="text-5xl font-bold">20+</h2>
            <p className="text-lg">
              Meetups
              <br />
              in different cities
            </p>
          </div>
        </div>

        <div className="group relative col-span-5 row-span-2 h-[317px] rounded-xl overflow-hidden shadow-sm transition-transform duration-300">
          <Image
            src="/images/events/klu.JPG"
            alt="KLU Hackathon"
            width={1000}
            height={317}
             className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-indigo-900/80 to-transparent  text-white text-center">
            <h3 className="text-xl font-semibold text-shadow">KLU Hackathon </h3>
            <h5 className="mb-2">29-Sep-2024</h5>
          </div>
        </div>

        <div className="group relative col-span-3 h-[152px] rounded-xl overflow-hidden shadow-sm transition-transform duration-300">
          <Image
            src="/images/events/student.JPG"
            alt="Student Interactions"
            width={600}
            height={152}
             className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-indigo-900/80 to-transparent  text-white text-center">
            <h3 className="text-xl font-semibold text-shadow">
              Student Interactions 
            </h3>
            <h5 className="mb-2"> 18-Nov-2024</h5>
          </div>
        </div>
      </div>

      {/* Mobile Grid */}
      <div className="flex flex-col md:hidden gap-5 px-4">
        <div className="relative h-[240px] rounded-xl overflow-hidden shadow-sm transition-transform duration-300">
          <Image
            src="/images/events/pairHackathon.JPG"
            alt="Pair Programming Hackathon"
            width={400}
            height={240}
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent  text-white text-center">
            <h3 className="text-lg font-semibold text-shadow">
              Pair Programming Hackathon
            </h3>
            <h5 className="mb-2"> 19-Feb-2025</h5>
          </div>
        </div>

        <div
          className="bg-[#7234F7] h-[150px] rounded-xl text-white flex items-center justify-center text-center relative transition-transform duration-300"
          style={{
            backgroundImage: "url(/images/events/circle.png)",
            backgroundPosition: "right bottom",
            backgroundSize: "55%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex gap-4 items-center">
            <h2 className="text-4xl font-bold">20+</h2>
            <p className="text-base">
              Meetups
              <br />
              in different cities
            </p>
          </div>
        </div>

        <div className="relative h-[240px] rounded-xl overflow-hidden shadow-sm transition-transform duration-300">
          <Image
            src="/images/events/snist.JPG"
            alt="SNIST Hackathon"
            width={400}
            height={240}
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent  text-white text-center">
            <h3 className="text-lg font-semibold text-shadow">
              SNIST Hackathon
            </h3>
            <h5 className="mb-2">1-Nov-2024</h5>
          </div>
        </div>

        <div className="relative h-[240px] rounded-xl overflow-hidden shadow-sm transition-transform duration-300">
          <Image
            src="/images/events/klu.JPG"
            alt="KLU Hackathon"
            width={400}
            height={240}
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent  text-white text-center">
            <h3 className="text-lg font-semibold text-shadow">KLU Hackathon  </h3>
            <h5 className="mb-2"> 29-Sep-2024</h5>
          </div>
        </div>

        <div className="relative h-[240px] rounded-xl overflow-hidden shadow-sm transition-transform duration-300">
          <Image
            src="/images/events/student.JPG"
            alt="Student Interactions"
            width={400}
            height={240}
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent  text-white text-center">
            <h3 className="text-lg font-semibold text-shadow">
              Student Interactions 
            </h3>
            <h5 className="mb-2">18-Nov-2024</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsBentoGrid;
