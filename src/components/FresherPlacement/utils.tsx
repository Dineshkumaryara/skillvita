"use client";
import React from "react";

export const highlightKeywords = (text: string) => {
  const keywords = [
    "SkillVita",
    "skillvita",
    "upskilling",
    "Upskilling",
    "outcomes",
    "Outcomes",
    "domain",
    "Domain",
    "placements",
    "Placements",
    "Placement",
    "placement",
    "freshers",
    "Freshers",
    "skills",
    "Skills"
  ];
  const parts = text.split(new RegExp(`(${keywords.join("|")})`, "gi"));
  return (
    <>
      {parts.map((part, i) =>
        keywords.some((k) => k.toLowerCase() === part.toLowerCase()) ? (
          <span key={i} className="text-[#22c55e] font-semibold drop-shadow-[0_0_8px_rgba(34,197,94,0.3)]">{part}</span>
        ) : (
          part
        )
      )}
    </>
  );
};

