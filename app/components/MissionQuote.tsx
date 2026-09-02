"use client";

import React from "react";
import Link from "next/link";
import { Quote, ArrowUpRight, Sparkles, Target, ShieldCheck, Zap } from "lucide-react";

export default function MissionQuote() {
  return (
    <section className="py-20 relative overflow-hidden bg-[#FCFCFC]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="relative bg-[#F2F3FC] rounded-3xl p-8 md:p-14 border border-[#E1E2EE] overflow-hidden shadow-xl">
          {/* Background Decorative Gradient */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#4846D4]/10 via-[#F0F0FF] to-transparent rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Graphic Feature Card (Replacing person image) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl bg-white p-7 sm:p-8 border border-[#E1E2EE] shadow-lg overflow-hidden space-y-5 text-left">
                {/* Top Accent Gradient */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#4846D4] to-[#8482FF]"></div>

                {/* Brand Badge & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#4846D4] flex items-center justify-center text-white shadow-md shadow-[#4846D4]/30">
                    <Quote size={22} className="rotate-180" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#4846D4] bg-[#F0F0FF] border border-[#4846D4]/20 px-3 py-1 rounded-full">
                    HireVoTech Mission
                  </span>
                </div>

                {/* Key Mission Pillars */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 p-3 bg-[#F2F3FC] rounded-2xl border border-[#E1E2EE]">
                    <div className="w-8 h-8 rounded-xl bg-[#F0F0FF] text-[#4846D4] flex items-center justify-center flex-shrink-0">
                      <Target size={16} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#0D0C41]">Precision Matching</div>
                      <div className="text-[10.5px] text-[#555566]">Targeted direct manager outreach</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-[#F2F3FC] rounded-2xl border border-[#E1E2EE]">
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck size={16} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#0D0C41]">Zero Upfront Risk</div>
                      <div className="text-[10.5px] text-[#555566]">Pay only after landing your job</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-[#F2F3FC] rounded-2xl border border-[#E1E2EE]">
                    <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
                      <Zap size={16} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#0D0C41]">Fast-Track Placement</div>
                      <div className="text-[10.5px] text-[#555566]">18-day average hiring turnaround</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#E1E2EE] flex items-center justify-between text-xs text-[#555566] font-medium">
                  <span>Talent Advisory Board</span>
                  <span className="text-[#4846D4] font-bold">Guaranteed Placement</span>
                </div>
              </div>
            </div>

            {/* Right Quote Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 bg-[#F0F0FF] border border-[#4846D4]/20 text-[#4846D4] rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider">
                <Sparkles size={12} className="text-[#4846D4]" />
                <span>Our Leadership Vision</span>
              </div>

              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#0D0C41] leading-tight font-sans">
                “Your next great hire could be reading this right now — <span className="text-[#4846D4]">we’ll help you find them.</span>”
              </blockquote>

              <p className="text-[#555566] text-sm md:text-base leading-relaxed max-w-2xl font-normal">
                We believe work should be more than just a job — it should inspire you. We specialize in matching candidates with roles where they can truly thrive. Whether you’re a fast-growing startup or an established enterprise, our tailored recruitment strategies deliver top 1% technical matches.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/plans"
                  className="capsule-btn-primary !py-3 !px-7 !text-sm btn-shimmer"
                >
                  Get Started <ArrowUpRight size={16} />
                </Link>
                <Link
                  href="/about"
                  className="capsule-btn-secondary !py-3 !px-6 !text-sm"
                >
                  Learn About Our Mission
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
