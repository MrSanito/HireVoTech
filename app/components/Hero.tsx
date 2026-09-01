"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowUpRight, 
  Play, 
  TrendingUp, 
  ShieldCheck, 
  Sparkles,
  Award,
  Clock
} from "lucide-react";
import VideoModal from "./VideoModal";

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
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
                  className="capsule-btn-primary !py-3.5 !px-8 !text-base font-bold shadow-lg shadow-[#4846D4]/25 btn-shimmer flex items-center gap-2"
                >
                  <span>Explore Open Roles</span>
                  <ArrowUpRight size={18} />
                </Link>

                <button
                  onClick={() => setVideoOpen(true)}
                  className="capsule-btn-secondary !py-3.5 !px-7 !text-base font-semibold group flex items-center gap-3 cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-full bg-[#4846D4] text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
                    <Play size={14} className="translate-x-0.5 fill-white" />
                  </div>
                  <span>Watch Video</span>
                </button>
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

            {/* Right Column: Hero Visual with Interactive Floating Cards (5 cols) */}
            <div className="lg:col-span-5 relative flex justify-center">
              
              {/* Outer decorative card container */}
              <div className="relative w-full max-w-md">
                
                {/* Decorative background glow behind image */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#4846D4]/15 to-[#8482FF]/10 rounded-3xl blur-2xl transform -rotate-3 scale-105 pointer-events-none"></div>

                {/* Main Hero Card Container */}
                <div className="relative bg-white rounded-3xl p-4 sm:p-5 border border-[#E1E2EE] shadow-2xl overflow-hidden">
                  
                  {/* Hero Professional Image */}
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#F2F3FC]">
                    <img
                      src="https://mlnhaefbaoxh.i.optimole.com/w:1920/h:1280/q:mauto/f:best/https://kits.rometheme.net/projob/wp-content/uploads/sites/71/2025/06/img-2.webp"
                      alt="Tech Professional with HireVoTech"
                      className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Gradient overlay on image bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C41]/50 via-transparent to-transparent"></div>

                    {/* Candidate Badge */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md border border-[#E1E2EE] rounded-xl p-3 flex items-center justify-between shadow-lg">
                      <div>
                        <div className="text-xs font-bold text-[#0D0C41]">Senior Cloud Architect</div>
                        <div className="text-[11px] text-[#555566] font-medium">Placed at Series-B Fintech</div>
                      </div>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                        +$165k Offer
                      </span>
                    </div>
                  </div>

                  {/* Stats snippet under image */}
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="p-3 bg-[#F2F3FC] rounded-2xl border border-[#E1E2EE] text-left">
                      <div className="flex items-center gap-2 text-xs text-[#555566] mb-1 font-medium">
                        <TrendingUp size={14} className="text-emerald-600" />
                        <span>Success Rate</span>
                      </div>
                      <div className="text-xl font-bold text-[#0D0C41]">98.4%</div>
                    </div>
                    <div className="p-3 bg-[#F2F3FC] rounded-2xl border border-[#E1E2EE] text-left">
                      <div className="flex items-center gap-2 text-xs text-[#555566] mb-1 font-medium">
                        <Clock size={14} className="text-[#4846D4]" />
                        <span>Avg. Placement</span>
                      </div>
                      <div className="text-xl font-bold text-[#0D0C41]">18 Days</div>
                    </div>
                  </div>
                </div>

                {/* Floating Tooltip 1: Top Left ("300% Faster Hiring Time") with up-and-down motion */}
                <div className="absolute -top-6 -left-6 bg-white/95 backdrop-blur-xl border border-[#E1E2EE] rounded-2xl p-3.5 shadow-xl shadow-[#4846D4]/10 flex items-center gap-3 animate-float-slow z-20 cursor-default hover:scale-105 transition-transform duration-300">
                  <div className="w-10 h-10 rounded-xl bg-[#4846D4] flex items-center justify-center text-white shadow-md shadow-[#4846D4]/30">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-[#0D0C41]">300% Faster</div>
                    <div className="text-[10px] text-[#555566] font-medium">Time-to-Hire Efficiency</div>
                  </div>
                </div>

                {/* Floating Tooltip 2: Bottom Right ("Zero Upfront Fees") with up-and-down motion */}
                <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white/95 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-3.5 shadow-xl shadow-emerald-500/10 flex items-center gap-3 animate-float-slower z-20 cursor-default hover:scale-105 transition-transform duration-300">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-[#0D0C41]">Zero Upfront Fees</div>
                    <div className="text-[10px] text-emerald-600 font-semibold">Pay after your 1st salary</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal Component */}
      <VideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} />
    </>
  );
}
