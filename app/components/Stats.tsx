"use client";

import React from "react";
import { TrendingUp, Award, Users, Building } from "lucide-react";

export interface AnimatedStatItem {
  ref?: React.RefObject<HTMLSpanElement | null>;
  displayValue: string;
  label: string;
}

interface StatsProps {
  statsRef?: React.RefObject<HTMLDivElement | null>;
  stats?: AnimatedStatItem[];
}

export default function Stats({ statsRef, stats }: StatsProps) {
  const defaultStats = stats || [
    { displayValue: "80%", label: "Placement Success Rate" },
    { displayValue: "5+", label: "Years of Industry Expertise" },
    { displayValue: "4.5K+", label: "Candidates Placed" },
    { displayValue: "60+", label: "Partnered Tech Companies" },
  ];

  const icons = [TrendingUp, Award, Users, Building];

  return (
    <section className="py-20 border-y border-[#E1E2EE] bg-[#F2F3FC] relative z-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div ref={statsRef} className="max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#F0F0FF] border border-[#4846D4]/20 text-[#4846D4] rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider mx-auto">
            <TrendingUp size={13} className="text-[#4846D4]" />
            <span>Placement Performance</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#0D0C41]">
            Measurable Results. <br className="hidden sm:inline" />
            <span className="text-[#4846D4]">
              Real Career Acceleration.
            </span>
          </h2>
          <p className="text-[#555566] text-sm max-w-xl mx-auto">
            Our data-backed recruitment model consistently delivers faster hires, higher salaries, and long-term career growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {defaultStats.map((stat, index) => {
            const IconComp = icons[index % icons.length];
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl flex flex-col justify-center items-center relative overflow-hidden group border border-[#E1E2EE] shadow-md hover:shadow-xl hover:border-[#4846D4]/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#F0F0FF] border border-[#4846D4]/20 flex items-center justify-center text-[#4846D4] mb-4 group-hover:scale-110 transition-transform">
                  <IconComp size={22} />
                </div>
                <span
                  ref={stat.ref}
                  className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0D0C41] mb-2 font-mono"
                >
                  {stat.displayValue}
                </span>
                <span className="text-[#555566] text-xs sm:text-sm font-semibold leading-relaxed">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
