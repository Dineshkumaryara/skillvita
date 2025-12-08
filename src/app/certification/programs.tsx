"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import TimeIcon from "@/components/svg_icons/time";
import { ChevronDown, Search } from "lucide-react";

interface ProgramData {
  C_id?: {
    name?: string;
    logo?: string;
  } | null;
  title: string;
  image: string;
  duration: string;
  m_name: string;
  m_profession: string;
  _id: string;
  visibility: boolean;
  domain: string;
}

const ProgramsList: React.FC = () => {
  const [programs, setPrograms] = useState<ProgramData[]>([]);
  const [filteredPrograms, setFilteredPrograms] = useState<ProgramData[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [domain, setDomain] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>(
    'desktop'
  );
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 640) {
        setScreenSize('mobile');
      } else if (width <= 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchPrograms = async () => {
      setLoading(true);
      try {
        setError(null);
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 7000);
        const base = process.env.NEXT_PUBLIC_BACKEND_URL ?? process.env.NEXT_PUBLIC_BACKEND_LINK;
        const response = await axios.get(`${base}/programs`, { signal: controller.signal });
        clearTimeout(timeoutId);
        const data = await response.data;
        const items: ProgramData[] = data?.data ?? [];
        setPrograms(items);
        setFilteredPrograms(items);
      } catch (err) {
        console.error("Failed to fetch programs", err);
        setError("Failed to load programs from backend.");
      } finally {
        setLoading(false);
      }
    };
    fetchPrograms();
  }, []);

  useEffect(() => {
    if (!programs) return;
    let filtered = [...programs];

    if (searchTerm) {
      filtered = filtered.filter((program) =>
        program.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (category) filtered = filtered.filter((p) => p.C_id?.name === category);
    if (domain) filtered = filtered.filter((p) => p.domain === domain);
    setFilteredPrograms(filtered);
  }, [searchTerm, category, domain, programs]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, category, domain]);

  const clearFilters = () => {
    setSearchTerm("");
    setCategory(null);
    setDomain(null);
  };

  return (
    <div className="mx-auto px-4 sm:px-8 md:px-16 lg:px-32 py-6 dark:bg-gray-900">
      <div className="flex flex-wrap md:flex-nowrap gap-4 mb-6">
        <div className="relative flex-1 min-w-[220px]">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-500 dark:text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search simulations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#7234F7] dark:focus:ring-[#B57BEE] text-gray-900 dark:text-white bg-white dark:bg-[#212121]"
          />
        </div>

        <div className="relative flex-1 min-w-[180px]">
          <select
            value={category || ""}
            onChange={(e) => setCategory(e.target.value || null)}
            className="w-full px-4 py-3 pr-10 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#212121] text-gray-900 dark:text-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#7234F7] dark:focus:ring-[#B57BEE]"
          >
            <option value="">All Companies</option>
            {programs && (Array.from(
              new Set(programs.map((p) => p.C_id?.name).filter((n) => !!n))
            ) as string[]).map((categoryName) => (
              <option key={categoryName} value={categoryName}>
                {categoryName}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none w-4 h-4" />
        </div>

        <div className="relative flex-1 min-w-[180px]">
          <select
            value={domain || ""}
            onChange={(e) => setDomain(e.target.value || null)}
            className="w-full px-4 py-3 pr-10 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#212121] text-gray-900 dark:text-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#7234F7] dark:focus:ring-[#B57BEE]"
          >
            <option value="">All Domains</option>
            {programs && Array.from(
              new Set(programs.filter((p) => p.visibility === true).map((p) => p.domain))
            ).map((domainName) => (
              <option key={domainName} value={domainName}>
                {domainName}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none w-4 h-4" />
        </div>

        <button
          onClick={clearFilters}
          className="w-full md:w-auto px-6 py-3 text-[#7234F7] dark:text-[#B57BEE] border border-[#7234F7] dark:border-[#B57BEE] bg-white dark:bg-transparent rounded-md hover:bg-[#f4f0ff] dark:hover:bg-[#1a1433] transition-all duration-200"
        >
          Clear Filters
        </button>
      </div>

      {error ? (
        <div className="text-red-600 bg-red-50 border border-red-200 rounded-md p-3 mb-4">
          {error}
        </div>
      ) : (
        <p className="text-gray-600 dark:text-gray-400 pb-4">
          {filteredPrograms.length} result{filteredPrograms.length !== 1 && "s"} found
        </p>
      )}

      <div className={`grid gap-3 sm:gap-4 ${
        screenSize === 'mobile' ? 'grid-cols-1' : screenSize === 'tablet' ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
      }`}>
        {loading ? (
          Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="flex flex-col rounded-xl bg-gray-200 dark:bg-gray-700 animate-pulse overflow-hidden h-full">
              <div className="p-3 sm:p-4 lg:p-5 flex flex-col items-start text-left grow">
                <div className="relative w-full bg-gray-300 dark:bg-gray-600 rounded-[12px]" style={{ paddingTop: "56.25%" }} />
                <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded mt-4 w-3/4" />
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mt-2 w-1/2" />
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mt-2 w-1/3" />
                <div className="h-10 bg-gray-300 dark:bg-gray-600 rounded mt-auto w-full" />
              </div>
            </div>
          ))
        ) : (
          filteredPrograms
            .slice((currentPage - 1) * itemsPerPage, (currentPage - 1) * itemsPerPage + itemsPerPage)
            .map((program, index) => (
            <div key={index} className="flex flex-col rounded-xl overflow-hidden h-full bg-white dark:bg-transparent dark:border dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="p-3 sm:p-4 lg:p-5 flex flex-col items-start text-left grow">
                <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                  <Image src={program.image} alt={program.title} fill className="object-cover rounded-[12px]" />
                  {program.C_id?.logo && (
                    <div className={`absolute top-2 right-2 bg-white dark:bg-gray-800 rounded-md p-1 sm:p-2 border dark:border-gray-700 ${screenSize === 'mobile' ? 'w-24 h-10' : 'w-28 h-10'} flex items-center justify-center overflow-hidden`}>
                      <Image src={program.C_id.logo} alt={program.C_id?.name || ''} width={screenSize === 'mobile' ? 100 : 120} height={screenSize === 'mobile' ? 10 : 12} className="object-contain" />
                    </div>
                  )}
                </div>
                <p className="text-sm sm:text-base lg:text-lg font-bold text-black dark:text-white mt-3 sm:mt-4 mb-2" style={{ display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 2, overflow: "hidden", minHeight: screenSize === 'mobile' ? "2.5rem" : "3.5rem" }}>
                  {program.title}
                </p>
                <p className="font-normal text-xs text-black dark:text-gray-300 mt-1 sm:mt-2">Mentored by</p>
                <p className="font-normal text-xs sm:text-sm text-black dark:text-white"><span className="font-semibold">{program.m_name}</span></p>
                <p className="flex items-center text-xs sm:text-sm text-[#5B5B5B] dark:text-gray-300 mt-1 sm:mt-2">
                  <TimeIcon />
                  <span className="font-semibold ml-1">{program.duration}</span>
                </p>
                <div className="grow" />
                <Link href={`https://simulation.coursevita.com/course/${program._id}`} target="_blank" rel="noopener noreferrer" className="w-full">
                  <button className="w-full px-3 py-2 sm:px-4 sm:py-3 text-[#7234F7] dark:text-[#B57BEE] border border-[#7234F7] dark:border-[#B57BEE] hover:bg-[#7234F7] hover:text-white dark:hover:bg-[#7234F7] dark:hover:text-white transition ease-in-out duration-300 text-xs font-bold rounded-md mt-3 sm:mt-4 text-center">
                    Know More
                  </button>
                </Link>
              </div>
            </div>
          ))
        )}
      </div>

      {filteredPrograms.length > itemsPerPage && (
        <div className="flex justify-center mt-6 gap-1 flex-wrap">
          <button
            className="mx-1 px-3 py-1 rounded bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 disabled:opacity-50"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          {Array.from({ length: Math.max(1, Math.ceil(filteredPrograms.length / itemsPerPage)) }).map((_, i) => (
            <button
              key={i}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === i + 1
                  ? "bg-[#FE7465] text-white"
                  : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="mx-1 px-3 py-1 rounded bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 disabled:opacity-50"
            onClick={() => setCurrentPage((p) => Math.min(Math.max(1, Math.ceil(filteredPrograms.length / itemsPerPage)), p + 1))}
            disabled={currentPage === Math.max(1, Math.ceil(filteredPrograms.length / itemsPerPage))}
          >
            Next
          </button>
        </div>
      )}

      <style jsx global>{`
        .dark [class*="flex-col rounded-xl"],
        .dark [class*="flex-col rounded-[22px]"] {
          background: rgba(30, 30, 30, 0.8) !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          backdrop-filter: blur(10px);
        }
        .dark select option { background-color: #1a1a1a; color: white; }
      `}</style>
    </div>
  );
};

export default ProgramsList;
