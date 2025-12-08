import React from "react";
import { Download, Users, Clock, BookMarked, Video } from "lucide-react";
import Button from "../ui/button/Button";
import Image from "next/image";

interface ProgramCardProps {
  image: string;
  leftTag?: string;
  rightTag?: string;
  title: string;
  skills: string[]; // array of image URLs
  skillsText?: string;
  members: string;
  duration: string;
  info1: string;
  info2: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  image,
  leftTag,
  rightTag,
  title,
  skills,
  skillsText = skills.length > 3 ? `+${skills.length - 3} More` : "",
  members,
  duration,
  info1,
  info2,
}) => {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-200 bg-[#7234f71a] w-[385px]">
      {/* Top Image Section */}
      <div className="relative h-[200px] w-full p-3">
        <div className="relative w-full h-full rounded-xl overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover" />

          {leftTag && (
            <div className="absolute top-4 left-4 bg-[#000000cf] text-white font-medium text-[10px] px-3 py-2 rounded-full">
              {leftTag}
            </div>
          )}
          {rightTag && (
            <div className="absolute top-4 right-4 bg-white text-brand-500 font-medium text-[10px] px-3 py-2 rounded-full">
              {rightTag}
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 pt-0">
        {/* Title */}
        <h3 className="text-lg font-semibold mb-2 text-left">{title}</h3>

        {/* Skills */}
        <div className="flex items-center mb-3">
          <div className="flex -space-x-3">
            {skills.slice(0, 3).map((skill, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full overflow-hidden border-[2px] border-white bg-[#F3F4FD]"
              >
                <Image
                  src={skill}
                  alt={`Skill ${i}`}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <span className="text-gray-500 text-sm ml-3">{skillsText}</span>
        </div>
        {/* Info List */}
        <ul className="text-sm text-black space-y-2 mb-4">
          <li className="flex items-center gap-2">
            <span>
              <Users size={16} />
            </span>{" "}
            {members}
          </li>
          <li className="flex items-center gap-2">
            <span>
              <Clock size={16} />
            </span>{" "}
            {duration}
          </li>
          <li className="flex items-center gap-2">
            <span>
              <BookMarked size={16} />
            </span>{" "}
            {info1}
          </li>
          <li className="flex items-center gap-2">
            <span>
              <Video size={16} />
            </span>{" "}
            {info2}
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex gap-3">
          <div className="w-1/2">
            <button className="w-full bg-none border border-brand-500 text-black py-[11px] rounded-lg font-medium text-[16px]">
              Learn more
            </button>
          </div>
          <div className="w-1/2">
            <Button variant="primary" className="w-full">
              <Download size={16} /> Syllabus
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
