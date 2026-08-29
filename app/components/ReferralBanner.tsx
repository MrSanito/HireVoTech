"use client";

import React from "react";

interface ReferralBannerProps {
  referRef?: React.RefObject<HTMLDivElement | null>;
}

export default function ReferralBanner({ referRef }: ReferralBannerProps) {
  return (
    <section className="py-20 border-t border-white/5 bg-[#08000d]/40 relative overflow-hidden z-10 px-4">
      <div ref={referRef} className="max-w-4xl mx-auto text-center glass-card rounded-3xl p-8 md:p-12 relative reveal-scale">
        <div className="absolute top-[-50px] left-[50%] -translate-x-1/2 w-48 h-48 rounded-full bg-[#a020f0]/10 blur-2xl pointer-events-none"></div>

        <span className="text-xs uppercase tracking-widest text-[#a020f0] font-bold mb-4 block">
          Referral Program
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6">
          Creative Tech Career Template to Launch Your Success Quickly and Easily
        </h2>
        <p className="text-neutral-400 text-sm max-w-2xl mx-auto leading-relaxed mb-8">
          Refer candidates or employers to our staffing agency and earn generous rewards. Use the link below to get started for free.
        </p>

        <a
          href="./refer-and-earn"
          className="btn bg-[#a020f0] hover:bg-[#8019c0] text-white border-none rounded-full px-8 gap-2 font-semibold transition-all hover:scale-105 btn-shimmer"
        >
          🎁 Refer & Earn — Use for Free
        </a>
      </div>
    </section>
  );
}
