"use client";

import React, { useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Process from "../components/Process";
import CTABanner from "../components/CTABanner";
import TrustedClients from "../components/TrustedClients";
import { Compass, ArrowRight } from "lucide-react";
import Link from "next/link";

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function ProcessClient() {
  const processRef = useScrollReveal();

  return (
    <div className="min-h-screen bg-[#FCFCFC] text-[#0D0C41] selection:bg-[#4846D4] selection:text-white relative overflow-hidden font-sans dot-grid">
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#4846D4]/5 blur-[150px] pointer-events-none orb-float-1"></div>
      <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#F0F0FF] blur-[180px] pointer-events-none orb-float-2"></div>

      <Navbar scrolled={true} activeSection="process" />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 px-4 md:px-8 max-w-5xl mx-auto text-center z-10 space-y-4">
        <div className="inline-flex items-center gap-2 bg-[#F0F0FF] border border-[#4846D4]/20 text-[#4846D4] rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mx-auto">
          <Compass size={14} className="text-[#4846D4]" />
          <span>Proven Career Roadmap</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#0D0C41]">
          Our 7-Step <br />
          <span className="text-[#4846D4]">
            Placement Process.
          </span>
        </h1>
        <p className="text-base sm:text-lg text-[#555566] max-w-3xl mx-auto font-normal leading-relaxed">
          From initial consultation and resume overhaul to technical mock interviews, offer negotiation, and ongoing career advancement.
        </p>
      </section>

      {/* Process Component */}
      <Process processRef={processRef} />

      {/* Deep-Dive Explanation Cards */}
      <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto z-10 relative mb-16">
        <div className="text-center mb-12 space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#4846D4] font-bold block">
            HOW WE SUPPORT YOU
          </span>
          <h2 className="text-3xl font-extrabold text-[#0D0C41]">What Happens at Each Phase</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl p-7 border border-[#E1E2EE] shadow-md space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#F0F0FF] text-[#4846D4] font-mono text-xs font-bold flex items-center justify-center">1-2</span>
              <h4 className="text-lg font-bold text-[#0D0C41]">Profile Optimization & Assessment</h4>
            </div>
            <p className="text-xs text-[#555566] leading-relaxed font-normal">
              We analyze your skill set, reconstruct your resume to pass ATS filters with high scores, and optimize your LinkedIn profile for maximum recruiter visibility.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-7 border border-[#E1E2EE] shadow-md space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#F0F0FF] text-[#4846D4] font-mono text-xs font-bold flex items-center justify-center">3-4</span>
              <h4 className="text-lg font-bold text-[#0D0C41]">Active Marketing & Applications</h4>
            </div>
            <p className="text-xs text-[#555566] leading-relaxed font-normal">
              Dedicated recruitment specialists target matching roles across proprietary networks and direct corporate hiring portals daily, maintaining full visibility for you.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-7 border border-[#E1E2EE] shadow-md space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-purple-50 text-purple-600 font-mono text-xs font-bold flex items-center justify-center">5</span>
              <h4 className="text-lg font-bold text-[#0D0C41]">Interview Coaching & Mock Drills</h4>
            </div>
            <p className="text-xs text-[#555566] leading-relaxed font-normal">
              Candidates undergo comprehensive technical drills, behavioral Q&A prep, and role-specific mock sessions with seasoned industry mentors.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-7 border border-[#E1E2EE] shadow-md space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 font-mono text-xs font-bold flex items-center justify-center">6-7</span>
              <h4 className="text-lg font-bold text-[#0D0C41]">Offer Negotiation & Placement</h4>
            </div>
            <p className="text-xs text-[#555566] leading-relaxed font-normal">
              We guide compensation negotiation, offer letters, and BGC verification, ensuring smooth transitions into your new high-paying tech role.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/plans"
            className="capsule-btn-primary !py-3.5 !px-8 !text-sm btn-shimmer"
          >
            Explore Plans & Get Started <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Partner Logos */}
      <TrustedClients />

      {/* CTA */}
      <CTABanner />

      <Footer />
    </div>
  );
}
