"use client";

import React from "react";

interface MissionProps {
  missionRef?: React.RefObject<HTMLDivElement | null>;
}

export default function Mission({ missionRef }: MissionProps) {
  return (
    <section className="py-16 border-t border-white/5 bg-[#08000d]/40 relative z-10 px-4">
      <div ref={missionRef} className="glass-card rounded-2xl p-8 max-w-4xl mx-auto text-center relative overflow-hidden reveal-scale">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c19a4f] to-transparent"></div>
        <span className="text-xs uppercase tracking-widest text-[#c19a4f] font-bold mb-3 block">
          OUR MISSION
        </span>
        <p className="text-xl md:text-2xl font-serif italic text-neutral-200 leading-relaxed max-w-3xl mx-auto">
          To empower professionals by providing strategic recruitment solutions, expert career guidance,
          and personalized support that leads to meaningful employment and long-term career success.
        </p>
      </div>
    </section>
  );
}
