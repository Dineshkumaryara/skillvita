"use client";
import React from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function Hero({
  eyebrow = "Innovate Without Limits",
  title,
  subtitle,
  ctaLabel = "Explore Now",
  ctaHref = "#",
}: HeroProps) {
  return (
    <section
      id="hero"
      className="relative mx-auto w-full pt-32 px-6 text-center md:px-8 min-h-[90vh] overflow-hidden bg-black rounded-b-xl flex flex-col items-center justify-center"
    >
      <div
        className="absolute -z-10 inset-0 opacity-20 h-[800px] w-full bg-[linear-gradient(to_right,#22c55e_1px,transparent_1px),linear-gradient(to_bottom,#22c55e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"
      />
      <div
        className="absolute left-1/2 top-[calc(100%-120px)] lg:top-[calc(100%-200px)] h-[500px] w-[700px] md:h-[500px] md:w-[1100px] lg:h-[750px] lg:w-[140%] -translate-x-1/2 rounded-[100%] border-green-500 bg-black bg-[radial-gradient(closest-side,#000_82%,#22c55e)] opacity-60"
      />
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-green-500/15 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-green-500/5 to-transparent pointer-events-none"></div>
      {eyebrow && (
        <div className="group mb-8 relative z-20">
          <span className="text-sm text-green-400 font-medium mx-auto px-5 py-2 bg-green-900/20 border border-green-500/30 rounded-3xl w-fit tracking-tight uppercase flex items-center justify-center">
            {eyebrow}
            <ChevronRight className="inline w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      )}
      <h1 className="text-white py-6 text-5xl font-extrabold leading-[1.1] tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl relative z-20">
        {title}
      </h1>
      <p className="mb-12 text-lg tracking-tight text-zinc-400 md:text-xl max-w-3xl mx-auto relative z-20">
        {subtitle}
      </p>
      {ctaLabel && (
        <div className="flex justify-center relative z-30 mt-6">
          <Button asChild className="w-fit md:w-52 tracking-tight text-lg py-6 rounded-xl shadow-[0_0_30px_-5px_rgba(34,197,94,0.6)] hover:shadow-green-500/60 hover:scale-105 transition-all duration-300 bg-green-600 hover:bg-green-500 text-white border-0">
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>
        </div>
      )}
      <div className="relative mt-32" />
    </section>
  );
}
