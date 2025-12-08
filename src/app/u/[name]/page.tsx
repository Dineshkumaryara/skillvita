import React from "react";
import Image from "next/image";
import { Star, MessageCircle } from "lucide-react";
import { MedalIcon } from "@/icons/profile/Medal";
import { StarIcon } from "@/icons/profile/Star";
import { Metadata } from "next";

interface UserPageProps {
  params: Promise<{
    name: string;
  }>;
}

export async function generateMetadata({
  params,
}: UserPageProps): Promise<Metadata> {
  const { name } = await params;
  const capitalizedName =
    name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

  return {
    title: `${capitalizedName}'s Profile - Coursevita`,
    description: `Welcome to ${capitalizedName}'s personalized profile on Coursevita.`,
    openGraph: {
      title: `${capitalizedName}'s Profile - Coursevita`,
      description: `Welcome to ${capitalizedName}'s personalized profile on Coursevita.`,
    },
    twitter: {
      title: `${capitalizedName}'s Profile - Coursevita`,
      description: `Welcome to ${capitalizedName}'s personalized profile on Coursevita.`,
    },
  };
}

export default async function UserPage({ params }: UserPageProps) {
  const { name } = await params;
  const capitalizedName =
    name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

  return (
    <div className="p-4 bg-white dark:bg-black md:-mt-2 -mt-4">
      <div className="max-w-7xl mx-auto bg-white dark:bg-[#18181B] rounded-3xl border border-[#E4E4E7] dark:border-[#27272A] overflow-hidden">
        {/* Header */}
        <div className="h-48 relative overflow-hidden">
          <video
            src="/images/user-banner.mp4"
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        {/* Profile content */}
        <div className="relative px-8 pb-8">
          {/* Profile image overlapping header */}
          <div className="absolute -top-16 left-8">
            <div className="w-32 h-32 rounded-full border-4 border-white dark:border-[#18181B] overflow-hidden">
              <Image
                src="/images/landing/testimonials/aparna.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
                width={128}
                height={128}
              />
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex justify-end gap-3 pt-4 mb-8">
            <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-black transition-colors">
              <MessageCircle
                size={20}
                className="text-gray-600 dark:text-gray-400"
              />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                Message
              </span>
            </button>
            <button className="px-8 py-3 bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition-colors duration-300 font-medium">
              Connect
            </button>
          </div>

          {/* Profile info */}
          <div className="flex items-center gap-6">
            <h1 className="text-2xl font-medium text-gray-900 dark:text-gray-100">
              {capitalizedName}
            </h1>
            <div className="flex items-center gap-1 px-3 py-2 bg-white dark:bg-black border border-[#E4E4E7] dark:border-[#27272A] rounded-full">
              <MedalIcon />
              <span className="text-black dark:text-white text-sm font-medium">
                Star Performer
              </span>
            </div>
          </div>

          <p className="font-normal text-[16px] text-gray-600 dark:text-gray-400 mb-6">
            UX Designer
          </p>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Whether you&apos;re looking to transition into the world of UX
              design, elevate your visual design skills to industry standards,
              or build a rock-solid portfolio with compelling case studies,
              let&apos;s team up and achieve these goals together.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              I&apos;m here to supp...
              <button className="text-indigo-600 hover:text-indigo-800 font-medium">
                Read more
              </button>
            </p>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <StarIcon />
              <span className="font-semibold text-gray-900 dark:text-gray-100">
                4.8
              </span>
              <span className="text-gray-600 dark:text-gray-400">
                (20 Reviews)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/images/Play.svg"
                alt="Profile"
                className="w-6 h-6 rounded-full"
                width={24}
                height={24}
              />
              <span className="text-gray-700 dark:text-gray-300 font-normal text-sm">
                20 Playlists created
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto bg-white dark:bg-[#18181B] rounded-3xl border border-[#E4E4E7] dark:border-[#27272A] overflow-hidden p-8 mt-10">
        <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-6">
          Technical Skills
        </h2>
        <div className="flex flex-wrap gap-3 mb-8">
          {[
            "Design Thinking",
            "User Research",
            "User Persona",
            "Empathy Mapping",
            "Site Mapping",
            "Information Architectures",
            "Wireframming",
            "Visual Design",
            "Prototyping",
            "Usability Testing",
          ].map((skill) => (
            <div
              key={skill}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-transparent text-sm font-medium text-gray-800 dark:text-gray-100"
            >
              <Star
                className="text-white dark:text-black fill-white dark:fill-black bg-gray-600 dark:bg-gray-400 rounded-full p-1"
                size={20}
              />

              {skill}
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 my-6"></div>

        <h2 className="text-[16px] font-medium text-gray-900 dark:text-gray-100 mb-4">
          Tools
        </h2>
        <div className="flex flex-wrap gap-4">
          {[
            { name: "Figma", logo: "/images/tools/figma.png" },
            { name: "Adobe Creative suite", logo: "/images/tools/adobe.png" },
            { name: "Framer", logo: "/images/tools/framer.png" },
            { name: "Miro", logo: "/images/tools/miro.png" },
            { name: "Web flow", logo: "/images/tools/webflow.png" },
          ].map((tool) => (
            <div
              key={tool.name}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-transparent text-sm font-medium text-gray-800 dark:text-gray-100"
            >
              {/* <Image src={tool.logo} alt={tool.name} width={20} height={20} /> */}
              {tool.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
