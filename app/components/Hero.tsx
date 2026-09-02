"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowUpRight, 
  TrendingUp, 
  ShieldCheck, 
  Sparkles,
  Award,
  Clock,
  Star,
  Quote,
  CheckCircle2,
  Zap,
  Calendar
} from "lucide-react";

const heroFeedback = {
  name: "Verified Candidate",
  role: "Finance & Tech Professional",
  company: "Bloomberg LP",
  offer: "+$175k",
  avatar: "VC",
  color: "from-[#4846D4] to-[#8482FF]",
  stars: 5,
  strategyTag: "Cold Email Note to Bloomberg",
  text: "I took this service and they helped me a lot. What sets them apart is their completely different strategy from normal agencies — using custom cold email connection notes directly targeted to Bloomberg to boost my application visibility and ensure it was selected. That unique approach helped me get placed significantly faster!",
};

export default function Hero() {
  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-[#FCFCFC]">
      {/* Subtle background ambient blur */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#4846D4]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-[#F0F0FF] border border-[#4846D4]/20 text-[#4846D4] rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider shadow-xs">
              <Sparkles size={14} className="text-[#4846D4]" />
              <span>Next-Gen Technical Recruitment</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-[#0D0C41] leading-[1.08]">
              Find Your True <br />
              <span className="text-[#4846D4]">
                Calling in Tech.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-[#555566] leading-relaxed max-w-xl font-normal">
              Discover job opportunities, connect with innovative hiring managers, and advance your engineering career with guaranteed placement support.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/plans"
                className="capsule-btn-primary !py-3.5 !px-8 !text-base font-bold shadow-lg shadow-[#4846D4]/25 btn-shimmer flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Open Roles</span>
                <ArrowUpRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="capsule-btn-secondary !py-3.5 !px-7 !text-base font-semibold flex items-center gap-2.5 cursor-pointer hover:border-[#4846D4] transition-all"
              >
                <Calendar size={16} className="text-[#4846D4]" />
                <span>Book Consultation</span>
              </Link>
            </div>

            {/* Key Value Points */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-[#E1E2EE]">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0D0C41]">
                <ShieldCheck size={16} className="text-[#4846D4]" />
                <span>Deferred Success Fee</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#0D0C41]">
                <Award size={16} className="text-emerald-600" />
                <span>1-on-1 Interview Prep</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#0D0C41]">
                <TrendingUp size={16} className="text-purple-600" />
                <span>60+ Partner Tech Orgs</span>
              </div>
            </div>
          </div>

          {/* Right Column: Feedback Card (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center py-6 sm:py-10 px-2 sm:px-0">
            
            <div className="relative w-full max-w-[calc(100vw-2.5rem)] sm:max-w-md my-6 sm:my-8">

              {/* Decorative background glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#4846D4]/15 to-[#8482FF]/10 rounded-3xl blur-2xl transform -rotate-3 scale-105 pointer-events-none"></div>

              {/* Main Feedback Card */}
              <div className="relative bg-white rounded-3xl border border-[#E1E2EE] shadow-2xl overflow-hidden z-10">

                {/* Card top accent stripe */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${heroFeedback.color}`}></div>

                <div className="p-5 sm:p-7 space-y-4 sm:space-y-5">

                  {/* Header: avatar + name + placement badge + offer */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    {/* Gradient avatar with live pulse */}
                    <div className="relative flex-shrink-0">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${heroFeedback.color} flex items-center justify-center text-white font-black text-base sm:text-lg shadow-lg`}>
                        {heroFeedback.avatar}
                      </div>
                      <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-emerald-400 border-2 border-white flex items-center justify-center">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping opacity-75"></span>
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-[#0D0C41] text-sm sm:text-base truncate">{heroFeedback.name}</div>
                      <div className="text-[11px] sm:text-xs text-[#555566] font-medium truncate">{heroFeedback.role}</div>
                      <div className="mt-1 inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-full px-2.5 py-0.5 text-[9.5px] sm:text-[10px] font-bold truncate max-w-full">
                        <CheckCircle2 size={10} className="flex-shrink-0" />
                        <span className="truncate">Placed at {heroFeedback.company}</span>
                      </div>
                    </div>

                    {/* Offer badge */}
                    <div className="flex-shrink-0 text-right">
                      <div className="text-[9px] sm:text-[10px] text-[#555566] font-medium mb-0.5">Offer</div>
                      <span className="text-xs sm:text-sm font-black text-[#4846D4] bg-[#F0F0FF] border border-[#4846D4]/20 rounded-lg px-2 sm:px-2.5 py-0.5 sm:py-1 block">
                        {heroFeedback.offer}
                      </span>
                    </div>
                  </div>

                  {/* Star rating & Strategy Tag */}
                  <div className="flex items-center justify-between gap-2 flex-wrap pt-1">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: heroFeedback.stars }).map((_, i) => (
                        <Star key={i} size={13} className="text-amber-400 fill-amber-400" />
                      ))}
                      <span className="text-[10px] font-bold text-[#555566] ml-1">5.0 · Verified Review</span>
                    </div>

                    <span className="inline-flex items-center gap-1 bg-[#F0F0FF] text-[#4846D4] border border-[#4846D4]/20 rounded-full px-2.5 py-0.5 text-[9.5px] font-bold">
                      <Zap size={10} className="flex-shrink-0" />
                      <span>{heroFeedback.strategyTag}</span>
                    </span>
                  </div>

                  {/* Quote text */}
                  <div className="relative">
                    <Quote size={24} className="text-[#4846D4]/10 absolute -top-1 -left-1" />
                    <p className="text-xs sm:text-sm text-[#444455] leading-relaxed font-normal pl-3 sm:pl-4 italic">
                      &ldquo;{heroFeedback.text}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Stats footer row */}
                <div className="border-t border-[#E1E2EE] grid grid-cols-2 divide-x divide-[#E1E2EE]">
                  <div className="p-3 sm:p-4 text-left">
                    <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-[#555566] mb-0.5 sm:mb-1 font-medium">
                      <TrendingUp size={13} className="text-emerald-600" />
                      <span>Success Rate</span>
                    </div>
                    <div className="text-lg sm:text-xl font-black text-[#0D0C41]">98.4%</div>
                  </div>
                  <div className="p-3 sm:p-4 text-left">
                    <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-[#555566] mb-0.5 sm:mb-1 font-medium">
                      <Clock size={13} className="text-[#4846D4]" />
                      <span>Avg. Placement</span>
                    </div>
                    <div className="text-lg sm:text-xl font-black text-[#0D0C41]">18 Days</div>
                  </div>
                </div>
              </div>

              {/* Floating chip: top-left */}
              <div className="absolute -top-7 -left-1 sm:-top-12 sm:-left-8 bg-white/95 backdrop-blur-xl border border-[#E1E2EE] rounded-2xl p-2.5 sm:p-3.5 shadow-xl shadow-[#4846D4]/10 flex items-center gap-2 sm:gap-3 animate-float-slow z-20 cursor-default hover:scale-105 transition-transform duration-300">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#4846D4] flex items-center justify-center text-white shadow-md shadow-[#4846D4]/30 flex-shrink-0">
                  <TrendingUp size={16} />
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs font-extrabold text-[#0D0C41]">300% Faster</div>
                  <div className="text-[9px] sm:text-[10px] text-[#555566] font-medium">Time-to-Hire</div>
                </div>
              </div>

              {/* Floating chip: bottom-right */}
              <div className="absolute -bottom-7 -right-1 sm:-bottom-12 sm:-right-8 bg-white/95 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-2.5 sm:p-3.5 shadow-xl shadow-emerald-500/10 flex items-center gap-2 sm:gap-3 animate-float-slower z-20 cursor-default hover:scale-105 transition-transform duration-300">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 flex-shrink-0">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs font-extrabold text-[#0D0C41]">Zero Upfront Fees</div>
                  <div className="text-[9px] sm:text-[10px] text-emerald-600 font-semibold">Pay after 1st salary</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
