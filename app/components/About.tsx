"use client";

import React from "react";

interface AboutProps {
  revealRef?: React.RefObject<HTMLDivElement | null>;
}

export default function About({ revealRef }: AboutProps) {
  return (
    <section id="about" className="py-24 border-t border-white/5 bg-[#08000d]/40 relative z-10 px-4 md:px-8">
      <div ref={revealRef} className="max-w-5xl mx-auto text-center reveal">
        <span className="text-xs uppercase tracking-widest text-[#c19a4f] font-semibold mb-3 block">
          ABOUT HIREVOTECH
        </span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight max-w-3xl mx-auto">
          We help you build a stronger career — not just apply for jobs.
        </h2>
        <p className="text-lg text-neutral-300 max-w-4xl mx-auto leading-relaxed mb-12">
          HireVoTech is a career-focused recruitment and staffing company committed to helping
          professionals secure the right opportunities. Our experienced recruitment specialists
          work closely with candidates throughout their job search by optimizing their professional
          profiles, strategically marketing their skills, and connecting them with leading employers.
        </p>

        <div className="relative max-w-3xl mx-auto glass-card border-l-4 !border-l-[#c19a4f] p-8 rounded-r-xl text-left">
          <p className="text-xl md:text-2xl italic text-neutral-200 font-serif leading-relaxed">
            &quot;We don&apos;t just help you apply for jobs — we help you build a stronger career.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
