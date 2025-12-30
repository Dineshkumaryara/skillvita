"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

export interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
  titleClassName?: string;
}

function DisplayCard({
  className,
  icon = <Sparkles className="size-4 text-green-300" />,
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  titleClassName = "text-green-500",
}: DisplayCardProps) {
  return (
    <div
      className={cn(
        "relative flex h-40 w-[20rem] -skew-y-[8deg] select-none flex-col justify-between rounded-xl border-2 bg-zinc-900/90 backdrop-blur-sm px-4 py-3 transition-all duration-700 hover:border-green-500 hover:bg-zinc-800 hover:shadow-xl hover:shadow-green-900/20 [&>*]:flex [&>*]:items-center [&>*]:gap-2",
        "after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[20rem] after:bg-gradient-to-l after:from-black/50 after:to-transparent after:content-[''] border-zinc-800",
        className
      )}
    >
      <div>
        <span className="relative inline-block rounded-full bg-zinc-800 p-1 border border-zinc-700">
          {icon}
        </span>
        <p className={cn("text-lg font-medium text-green-400", titleClassName)}>{title}</p>
      </div>
      <p className="whitespace-nowrap text-lg text-white">{description}</p>
      <p className="text-zinc-500 text-sm">{date}</p>
    </div>
  );
}

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  const defaultCards = [
    { className: "[grid-area:stack] hover:-translate-y-24 bg-zinc-900 border-zinc-800" },
    { className: "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 bg-zinc-900 border-zinc-800" },
    { className: "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10 bg-zinc-900 border-zinc-800" },
  ];

  const displayCards = cards || defaultCards;

  return (
    <div className="grid [grid-template-areas:'stack'] place-items-center opacity-100">
      {displayCards.map((cardProps, index) => (
        <DisplayCard key={index} {...cardProps} />
      ))}
    </div>
  );
}
