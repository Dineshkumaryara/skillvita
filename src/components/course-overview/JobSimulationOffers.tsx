"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Button from "../ui/button/Button";
import Link from "next/link";
import TimeIcon from "@/components/svg_icons/time";

interface Skill {
  name: string;
}

interface Program {
  title: string;
  skills: Skill[];
  domain: string;
  description: string;
  duration: string;
  m_name: string;
  m_profession: string;
  overview: string;
  image?: string;
  _id?: string;
}

interface JobSimulationOffersProps {
  courseTitle: string;
}

export default function JobSimulationOffers({
  courseTitle,
}: JobSimulationOffersProps) {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        setLoading(true);
        setError(null);

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);

        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_LINK}/programs`,
          {
            signal: controller.signal,
          }
        );

        clearTimeout(timeoutId);
        const data = await response.data;

        console.log("All programs:", data.data);

        const courseKeywords = courseTitle.toLowerCase().split(/\s+/);
        const filteredPrograms = data.data.filter((program: Program) => {
          const programDomain = program.domain.toLowerCase();
          const domainMatch = courseKeywords.some(
            (keyword) => programDomain.includes(keyword) && keyword.length > 2
          );
          return domainMatch;
        });

        console.log("Filtered programs:", filteredPrograms);
        setPrograms(filteredPrograms.slice(0, 4));
      } catch (error) {
        console.error("Error fetching programs:", error);
        setError(
          error instanceof Error ? error.message : "Failed to fetch programs"
        );
      } finally {
        setLoading(false);
      }
    };

    if (courseTitle) {
      fetchPrograms();
    } else {
      setPrograms([]);
      setLoading(false);
    }

    return () => {
      setPrograms([]);
      setError(null);
    };
  }, [courseTitle]);

  if (loading) {
    return (
      <div className="mt-8">
        <div className="flex items-center justify-center p-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-8">
        <div className="p-4 text-red-500 bg-red-50 rounded-lg">{error}</div>
      </div>
    );
  }

  if (!courseTitle) {
    return (
      <div className="mt-8">
        <div className="p-4 text-gray-500 bg-gray-50 rounded-lg">
          No course title provided.
        </div>
      </div>
    );
  }

  if (programs.length === 0) {
    return null;
  }

  return (
    <div className="my-8">
      <h2 className="text-xl md:text-3xl font-[500] mb-6 md:mb-10 text-center">
        Our Job <span className="text-[#FF7262]">Simulations Offerings</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {programs.map((program, index) => (
          <div
            key={index}
            className="rounded-[20px] overflow-hidden bg-white dark:bg-[#18181B] w-full max-w-[320px] border border-[#E4E4E7] dark:border-[#27272A] text-black dark:text-white"
          >
            <div className="relative p-4">
              <div className="rounded-[10px] overflow-hidden border-1 border-gray-200 dark:border-gray-800">
                <Image
                  src={program.image || "/images/default-simulation.jpg"}
                  alt={program.title}
                  className="w-full object-cover"
                  width={400}
                  height={220}
                  style={{ height: "140px" }}
                  priority
                />
              </div>
            </div>
            <div className="px-4 pb-4">
              <div className="h-[50px] mb-2 flex flex-col justify-start">
                <h3 className="text-[16px] font-bold line-clamp-2 overflow-hidden">
                  {program.title}
                </h3>
              </div>
              <div className="text-[12px] font-normal mb-3 text-gray-700 dark:text-gray-300">
                <p>Mentored by</p>
                <p className="font-medium text-[16px] text-gray-800 dark:text-gray-200">{program.m_name}</p>
              </div>
              <div className="flex items-center text-[14px] font-normal text-gray-800 dark:text-gray-200 mb-4">
                <TimeIcon />
                <span className="ml-2">{program.duration}</span>
              </div>
              <Link
                href={`https://simulation.coursevita.com/course/${program._id}`}
                target="_blank"
                rel="noopener noreferrer"
                passHref
              >
                <Button className="w-full">View Details</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
