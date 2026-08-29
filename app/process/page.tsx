"use client";

import React, { useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Process from "../components/Process";
import { GitCommit, CheckCircle2, ArrowRight } from "lucide-react";

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

export default function ProcessPage() {
  const processRef = useScrollReveal();

  return (
    <div className="min-h-screen bg-[#08000d] text-white selection:bg-[#a020f0] selection:text-white relative overflow-hidden font-sans dot-grid">
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#a020f0]/10 blur-[150px] pointer-events-none orb-float-1"></div>
      <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#ff4fd8]/5 blur-[180px] pointer-events-none orb-float-2"></div>

      <Navbar scrolled={true} activeSection="process" />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 px-4 md:px-8 max-w-5xl mx-auto text-center z-10">
        <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 text-[#c68efd] rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-6">
          <GitCommit size={14} className="text-[#ff4fd8]" /> Proven Career Roadmap
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-b from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent mb-6">
          Our 7-Step <br />
          <span className="text-[#ff4fd8] drop-shadow-[0_0_25px_rgba(255,79,216,0.35)]">Placement Process</span>
        </h1>
        <p className="text-lg text-neutral-300 max-w-3xl mx-auto font-light leading-relaxed">
          From initial consultation and resume overhaul to technical mock interviews, offer negotiation, and ongoing career advancement.
        </p>
      </section>

      {/* Process Component */}
      <Process processRef={processRef} />

      {/* Deep-Dive Explanation Cards */}
      <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto z-10 relative mb-16">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-[#c19a4f] font-semibold mb-3 block">
            HOW WE SUPPORT YOU
          </span>
          <h2 className="text-3xl font-bold text-white">What Happens at Each Phase</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card rounded-2xl p-6 border border-white/10">
            <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#a020f0]/30 text-white font-mono text-xs flex items-center justify-center">1-2</span>
              Profile Optimization & Assessment
            </h4>
            <p className="text-sm text-neutral-400 leading-relaxed">
              We analyze your skill set, reconstruct your resume to pass ATS filters with high scores, and optimize your LinkedIn profile for maximum recruiter visibility.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-white/10">
            <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#a020f0]/30 text-white font-mono text-xs flex items-center justify-center">3-4</span>
              Active Marketing & Daily Applications
            </h4>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Dedicated recruitment specialists target matching roles across LinkedIn, Indeed, Dice, and direct corporate career portals daily, maintaining full visibility for you.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-white/10">
            <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#a020f0]/30 text-white font-mono text-xs flex items-center justify-center">5</span>
              Interview Coaching & Mock Sessions
            </h4>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Premium candidates undergo comprehensive technical drills, behavioral Q&A prep, and role-specific mock sessions with seasoned industry mentors.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-white/10">
            <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-500/30 text-emerald-400 font-mono text-xs flex items-center justify-center">6-7</span>
              Offer Negotiation & Placement
            </h4>
            <p className="text-sm text-neutral-400 leading-relaxed">
              We guide compensation negotiation, offer letters, and BGC verification, ensuring smooth transitions into your new career role.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="/plans"
            className="btn bg-[#a020f0] hover:bg-[#8019c0] text-white border-none rounded-full px-8 font-semibold btn-shimmer inline-flex items-center gap-2"
          >
            Explore Plans & Get Started <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
