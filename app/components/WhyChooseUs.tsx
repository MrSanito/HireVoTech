"use client";

import React from "react";
import { Check } from "lucide-react";

export const defaultReasons: string[] = [
  "Dedicated Recruitment Specialists",
  "Subscription-Based Career Support",
  "Daily Job Applications",
  "Resume Preparation & Optimization",
  "LinkedIn Profile Management",
  "Applications on Leading Job Portals",
  "Company Career Website Applications",
  "Background Verification (BGC) Assistance",
  "Transparent Process",
  "Personalized Career Guidance",
  "Faster Access to Career Opportunities",
];

interface WhyChooseUsProps {
  headingRef?: React.RefObject<HTMLDivElement | null>;
  reasonsRef?: React.RefObject<HTMLDivElement | null>;
  reasons?: string[];
}

export default function WhyChooseUs({
  headingRef,
  reasonsRef,
  reasons = defaultReasons,
}: WhyChooseUsProps) {
  return (
    <section id="why-us" className="py-24 border-t border-white/5 bg-[#08000d]/40 relative z-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div ref={headingRef} className="text-center mb-16 reveal">
          <span className="text-xs uppercase tracking-widest text-[#c19a4f] font-semibold mb-3 block">
            WHY CHOOSE HIREVOTECH
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Eleven reasons candidates work with us
          </h2>
        </div>

        {/* 11 Reasons — flex-wrap so the last item centers nicely */}
        <div ref={reasonsRef} className="flex flex-wrap justify-center gap-4 mb-24 stagger-children">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-center gap-3 glass-card rounded-xl p-4 group cursor-default w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]"
            >
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm group-hover:bg-emerald-500/30 group-hover:scale-110 transition-all duration-300">
                <Check size={14} />
              </span>
              <span className="text-neutral-200 font-medium text-sm md:text-base group-hover:text-white transition-colors">
                {reason}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
