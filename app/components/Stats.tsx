"use client";

import React from "react";

export interface AnimatedStatItem {
  ref: React.RefObject<HTMLSpanElement | null>;
  displayValue: string;
  label: string;
}

interface StatsProps {
  statsRef?: React.RefObject<HTMLDivElement | null>;
  stats: AnimatedStatItem[];
}

export default function Stats({ statsRef, stats }: StatsProps) {
  return (
    <section className="pt-10 pb-24 border-t border-white/5 bg-[#08000d]/40 relative z-10 px-4 md:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <div ref={statsRef} className="reveal">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 text-[#c68efd] border border-purple-500/20 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider w-fit mb-4">
            Growth & Success
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-10">
            Placement Performance Overview
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl flex flex-col justify-center items-center relative overflow-hidden group cursor-default"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span
                ref={stat.ref}
                className="text-5xl font-extrabold tracking-tight bg-gradient-to-b from-white to-purple-200 bg-clip-text text-transparent mb-3 font-mono relative z-10"
              >
                {stat.displayValue}
              </span>
              <span className="text-neutral-400 text-sm font-medium leading-relaxed relative z-10">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
