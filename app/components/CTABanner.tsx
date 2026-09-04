"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-20 relative overflow-hidden bg-[#FCFCFC]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 md:p-16 border border-[#3C3AB8] shadow-2xl bg-gradient-to-br from-[#4846D4] via-[#413EB8] to-[#33319E] text-center">
          {/* Crisp background pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-[#8482FF]/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 text-white rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mx-auto backdrop-blur-md shadow-xs">
              <Sparkles size={14} className="text-amber-300" />
              <span>Take the Next Step in Your Career</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Connect With <br className="hidden sm:inline" />
              Top Employers?
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto font-normal">
              Explore new opportunities, connect with innovative tech teams, and turn your career goals into high-impact reality.
            </p>

            {/* Benefits row */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-white pt-2 font-medium">
              <span className="flex items-center gap-1.5 bg-black/15 border border-white/20 rounded-full px-4 py-1.5 shadow-xs">
                <CheckCircle2 size={14} className="text-emerald-300" /> Guaranteed Placements
              </span>
              <span className="flex items-center gap-1.5 bg-black/15 border border-white/20 rounded-full px-4 py-1.5 shadow-xs">
                <ShieldCheck size={14} className="text-amber-300" /> Transparent Pricing
              </span>
              <span className="flex items-center gap-1.5 bg-black/15 border border-white/20 rounded-full px-4 py-1.5 shadow-xs">
                <Sparkles size={14} className="text-white" /> 1-on-1 Interview Coaching
              </span>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/plans"
                className="bg-white text-[#0D0C41] hover:bg-[#F2F3FC] px-8 py-3.5 rounded-full font-bold text-sm sm:text-base shadow-xl flex items-center gap-2 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                Apply Now <ArrowUpRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="bg-white/15 text-white hover:bg-white/25 border border-white/30 px-8 py-3.5 rounded-full font-semibold text-sm sm:text-base backdrop-blur-md transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
