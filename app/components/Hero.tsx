"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Play, 
  Sparkles, 
  ArrowUpRight, 
  ShieldCheck, 
  TrendingUp, 
  Star,
  Clock
} from "lucide-react";
import VideoModal from "./VideoModal";

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-[#FCFCFC] dot-grid">
        {/* Background Radial Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-br from-[#4846D4]/10 via-[#F0F0FF]/60 to-transparent rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#F0F0FF] border border-[#4846D4]/20 text-[#4846D4] rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider shadow-xs">
                <Sparkles size={14} className="text-[#4846D4] animate-pulse" />
                <span>Connecting Ambition with Opportunity</span>
              </div>

              {/* Huge Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-[#0D0C41] leading-[1.08]">
                The Fastest Way to Your Next{" "}
                <span className="text-[#4846D4]">
                  Tech Role.
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-[#555566] max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                We specialize in matching top-tier tech talent with ambitious companies where they can truly thrive. From interview coaching to post-placement mentorship, we make hiring seamless.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/plans"
                  className="capsule-btn-primary !py-3.5 !px-8 !text-base btn-shimmer"
                >
                  Get Started <ArrowUpRight size={18} />
                </Link>

                <button
                  onClick={() => setVideoOpen(true)}
                  className="capsule-btn-secondary !py-3.5 !px-7 !text-base flex items-center gap-3 group cursor-pointer"
                >
                  <span className="w-8 h-8 rounded-full bg-[#4846D4] text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-md shadow-[#4846D4]/30">
                    <Play size={14} fill="currentColor" className="ml-0.5" />
                  </span>
                  <span className="text-[#0D0C41] font-semibold">Play Video</span>
                </button>
              </div>

              {/* Candidate Avatar Stack & Social Proof */}
              <div className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 border-t border-[#E1E2EE]">
                <div className="flex -space-x-3 items-center">
                  <img
                    src="https://mlnhaefbaoxh.i.optimole.com/w:600/h:600/q:mauto/f:best/https://kits.rometheme.net/projob/wp-content/uploads/sites/71/2025/06/Team-1.webp"
                    alt="Placed Candidate"
                    className="w-12 h-12 rounded-full border-2 border-white object-cover ring-2 ring-[#4846D4]/20 shadow-md"
                  />
                  <img
                    src="https://mlnhaefbaoxh.i.optimole.com/w:600/h:600/q:mauto/f:best/https://kits.rometheme.net/projob/wp-content/uploads/sites/71/2025/06/Team-2.webp"
                    alt="Placed Candidate"
                    className="w-12 h-12 rounded-full border-2 border-white object-cover ring-2 ring-[#4846D4]/20 shadow-md"
                  />
                  <img
                    src="https://mlnhaefbaoxh.i.optimole.com/w:600/h:600/q:mauto/f:best/https://kits.rometheme.net/projob/wp-content/uploads/sites/71/2025/06/Team-3.webp"
                    alt="Placed Candidate"
                    className="w-12 h-12 rounded-full border-2 border-white object-cover ring-2 ring-[#4846D4]/20 shadow-md"
                  />
                  <div className="w-12 h-12 rounded-full bg-[#4846D4] border-2 border-white flex items-center justify-center text-xs font-bold text-white shadow-md">
                    +4.5K
                  </div>
                </div>

                <div className="text-left">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                    <span className="text-xs font-bold text-[#0D0C41] ml-1.5">4.9 / 5.0</span>
                  </div>
                  <p className="text-xs text-[#555566] mt-0.5">
                    Trusted by 860+ professionals placed globally
                  </p>
                </div>
              </div>
            </div>

            {/* Right Interactive Visual Collage */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Hero Card Container */}
                <div className="relative rounded-3xl overflow-hidden glass-card p-4 border border-[#E1E2EE] shadow-2xl">
                  {/* Hero Showcase Image */}
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#0D0C41]">
                    <img
                      src="https://mlnhaefbaoxh.i.optimole.com/w:1920/h:1280/q:mauto/f:best/https://kits.rometheme.net/projob/wp-content/uploads/sites/71/2025/06/img-4.webp"
                      alt="Tech Professional Collaboration"
                      className="w-full h-full object-cover filter brightness-95 hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C41]/80 via-transparent to-transparent"></div>

                    {/* Badge on top of image */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md border border-[#E1E2EE] rounded-full px-3 py-1 text-xs text-[#0D0C41] font-semibold flex items-center gap-1.5 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                      <span>Actively Placing Tech Leads</span>
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

                {/* Floating Tooltip 1: Top Left ("300% Faster Hiring Time") */}
                <div className="absolute -top-6 -left-6 bg-white/95 backdrop-blur-xl border border-[#E1E2EE] rounded-2xl p-3.5 shadow-xl flex items-center gap-3 animate-float-slow">
                  <div className="w-10 h-10 rounded-xl bg-[#4846D4] flex items-center justify-center text-white shadow-md shadow-[#4846D4]/30">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0D0C41]">300% Faster</div>
                    <div className="text-[10px] text-[#555566]">Time-to-Hire Efficiency</div>
                  </div>
                </div>

                {/* Floating Tooltip 2: Bottom Right ("Zero Upfront Fees") */}
                <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white/95 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-3.5 shadow-xl flex items-center gap-3 animate-float-slower">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0D0C41]">Zero Upfront Fees</div>
                    <div className="text-[10px] text-emerald-600 font-medium">Pay after your 1st salary</div>
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
