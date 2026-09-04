"use client";

import React from "react";
import { Sparkles, Zap } from "lucide-react";

interface RunningMarqueeProps {
  phrases1?: string[];
  phrases2?: string[];
}

export default function RunningMarquee({
  phrases1 = [
    "Hire Smarter.",
    "Work Better.",
    "Scale Faster.",
    "Top 1% Talent.",
    "Hire Smarter.",
    "Work Better.",
    "Career Acceleration.",
    "Seamless Matching.",
  ],
  phrases2 = [
    "Work Better.",
    "Hire Smarter.",
    "300% Faster Hiring.",
    "Top Tech Placements.",
    "Work Better.",
    "Hire Smarter.",
    "Guaranteed Placement.",
    "Dedicated Mentorship.",
  ],
}: RunningMarqueeProps) {
  return (
    <section className="py-24 relative overflow-hidden bg-[#FCFCFC]">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[250px] bg-[#4846D4]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative w-full space-y-6">
        {/* ─── Strip 1: Tilted -3deg (Forward Scroll) ─── */}
        <div className="w-[120%] -ml-[10%] transform -rotate-3 overflow-hidden py-4 bg-[#0D0C41] shadow-2xl border-y border-[#2A2868]">
          <div className="flex animate-marquee whitespace-nowrap gap-12 items-center">
            {/* Repeated sets for seamless infinite loop */}
            {[...phrases1, ...phrases1, ...phrases1].map((text, idx) => (
              <div key={`s1-${idx}`} className="flex items-center gap-6 group cursor-default">
                <span className="text-2xl md:text-4xl font-extrabold tracking-tight text-white uppercase font-sans flex items-center gap-4">
                  {text}
                </span>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/15 text-white">
                  <Sparkles size={16} className="text-amber-300 animate-pulse" />
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Strip 2: Tilted +3deg (Reverse Scroll) ─── */}
        <div className="w-[120%] -ml-[10%] transform rotate-3 overflow-hidden py-4 bg-[#4846D4] shadow-2xl border-y border-white/20 -mt-2">
          <div className="flex animate-marquee-reverse whitespace-nowrap gap-12 items-center">
            {/* Repeated sets for seamless infinite loop */}
            {[...phrases2, ...phrases2, ...phrases2].map((text, idx) => (
              <div key={`s2-${idx}`} className="flex items-center gap-6 group cursor-default">
                <span className="text-2xl md:text-4xl font-extrabold tracking-tight text-white uppercase font-sans flex items-center gap-4">
                  {text}
                </span>
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/20 text-white">
                  <Zap size={14} className="text-white" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
