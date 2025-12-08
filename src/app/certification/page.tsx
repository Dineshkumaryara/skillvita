"use client";
import React, { Suspense } from "react";
import ExploreHero from "./explore";
import ProgramsList from "@/app/certification/programs";
import Career from "./career";

// metadata must be exported from a server component; using global layout metadata

export default function CertificationPage() {
  return (
    <div>
      <ExploreHero />
      <Suspense fallback={<div className="text-center py-10">Loading programs...</div>}>
        <ProgramsList />
      </Suspense>
      <Career />
    </div>
  );
}
