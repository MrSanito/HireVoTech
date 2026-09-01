"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Quote, ArrowUpRight, Sparkles } from "lucide-react";

export default function MissionQuote() {
  const [imgSrc, setImgSrc] = useState("/images/testimonial-ceo.jpg");

  return (
    <section className="py-20 relative overflow-hidden bg-[#FCFCFC]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="relative bg-[#F2F3FC] rounded-3xl p-8 md:p-14 border border-[#E1E2EE] overflow-hidden shadow-xl">
          {/* Background Decorative Gradient */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#4846D4]/10 via-[#F0F0FF] to-transparent rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Image & Avatar Card */}
            <div className="lg:col-span-4 relative">
              <div className="relative rounded-2xl overflow-hidden aspect-square max-w-xs mx-auto lg:max-w-none shadow-md border border-[#E1E2EE] bg-white">
                <img
                  src={imgSrc}
                  onError={() => setImgSrc("/images/hero-tech.jpg")}
                  alt="Michael Chen - Head of Talent Acquisition"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C41]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <div className="text-white font-bold text-lg">Michael Chen</div>
                  <div className="text-xs text-[#F0F0FF]">Head of Talent Acquisition & Partnerships</div>
                </div>
              </div>

              {/* Floating quote bubble icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl bg-[#4846D4] flex items-center justify-center text-white shadow-md shadow-[#4846D4]/40">
                <Quote size={22} className="rotate-180" />
              </div>
            </div>

            {/* Right Quote Content */}
            <div className="lg:col-span-8 space-y-6 text-left">
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
