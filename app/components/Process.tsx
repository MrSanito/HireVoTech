"use client";

import React from "react";

export interface ProcessStep {
  number: string;
  title: string;
  desc: string;
}

export const defaultSteps: ProcessStep[] = [
  { number: "1", title: "Career Consultation", desc: "Initial assessment" },
  { number: "2", title: "Resume & LinkedIn Optimization", desc: "Profile overhaul" },
  { number: "3", title: "Profile Marketing", desc: "Strategic outreach" },
  { number: "4", title: "Daily Applications", desc: "Consistent effort" },
  { number: "5", title: "Interview Prep (Premium)", desc: "Mock sessions" },
  { number: "6", title: "Offer Acceptance", desc: "Negotiation support" },
  { number: "7", title: "Career Success", desc: "Ongoing guidance" },
];

interface ProcessProps {
  processRef?: React.RefObject<HTMLDivElement | null>;
  steps?: ProcessStep[];
}

export default function Process({
  processRef,
  steps = defaultSteps,
}: ProcessProps) {
  return (
    <section id="process" className="py-24 border-t border-white/5 bg-[#08000d]/60 relative z-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div ref={processRef} className="text-center mb-16 reveal">
          <span className="text-xs uppercase tracking-widest text-[#c19a4f] font-semibold mb-3 block">
            OUR PROCESS
          </span>
          <h3 className="text-2xl md:text-4xl font-bold text-white">
            Seven steps from consultation to career success
          </h3>
        </div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connector line */}
            <div className="absolute top-6 left-0 right-0 h-[2px] bg-gradient-to-r from-[#a020f0]/20 via-[#a020f0]/50 to-[#a020f0]/20"></div>

            <div className="grid grid-cols-7 gap-2">
              {steps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group cursor-default">
                  <div className="w-12 h-12 rounded-full bg-[#a020f0]/10 border-2 border-[#a020f0]/40 flex items-center justify-center font-bold text-white font-mono text-sm relative z-10 group-hover:bg-[#a020f0]/30 group-hover:border-[#a020f0] group-hover:scale-110 transition-all duration-300">
                    {step.number}
                  </div>
                  <div className="mt-3 min-h-[48px] flex items-start justify-center w-full">
                    <span className="text-sm font-semibold text-white max-w-[120px] mx-auto leading-relaxed group-hover:text-purple-200 transition-colors">
                      {step.title}
                    </span>
                  </div>
                  <span className="text-xs text-neutral-500 mt-1">{step.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="md:hidden flex flex-col gap-0">
          {steps.map((step, idx) => (
            <div key={idx} className="flex gap-4 group">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#a020f0]/10 border-2 border-[#a020f0]/40 flex items-center justify-center font-bold text-white font-mono text-sm flex-shrink-0 group-hover:bg-[#a020f0]/30 transition-all duration-300">
                  {step.number}
                </div>
                {idx < steps.length - 1 && (
                  <div className="w-[2px] h-12 bg-gradient-to-b from-[#a020f0]/40 to-[#a020f0]/10"></div>
                )}
              </div>
              <div className="pb-8">
                <h4 className="font-semibold text-white text-base group-hover:text-purple-200 transition-colors">
                  {step.title}
                </h4>
                <p className="text-xs text-neutral-500 mt-1">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
