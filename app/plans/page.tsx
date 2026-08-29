"use client";

import React, { useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PlansPricing from "../components/PlansPricing";
import { DollarSign, ShieldCheck, Check, Sparkles } from "lucide-react";

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

export default function PlansPage() {
  const plansRef = useScrollReveal();
  const investRef = useScrollReveal();

  return (
    <div className="min-h-screen bg-[#08000d] text-white selection:bg-[#a020f0] selection:text-white relative overflow-hidden font-sans dot-grid">
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#a020f0]/10 blur-[150px] pointer-events-none orb-float-1"></div>
      <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#ff4fd8]/5 blur-[180px] pointer-events-none orb-float-2"></div>

      <Navbar scrolled={true} activeSection="plans" />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 px-4 md:px-8 max-w-5xl mx-auto text-center z-10">
        <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 text-[#c68efd] rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-6">
          <DollarSign size={14} className="text-[#ff4fd8]" /> Clear & Transparent Pricing
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-b from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent mb-6">
          Investment Plans & <br />
          <span className="text-[#ff4fd8] drop-shadow-[0_0_25px_rgba(255,79,216,0.35)]">Career Subscriptions</span>
        </h1>
        <p className="text-lg text-neutral-300 max-w-3xl mx-auto font-light leading-relaxed">
          No hidden fees. Choose between our Basic Career Marketing plan or Premium Full-Coaching plan with interview preparation, EMI support, and post-placement payments.
        </p>
      </section>

      {/* Plans and Pricing Component */}
      <PlansPricing plansRef={plansRef} investRef={investRef} />

      {/* FAQ / Guarantee Box */}
      <section className="py-16 px-4 md:px-8 max-w-4xl mx-auto z-10 relative mb-16">
        <div className="glass-card rounded-3xl p-8 md:p-10 border border-white/10 text-center space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
            <ShieldCheck size={28} />
          </div>
          <h3 className="text-2xl font-bold text-white">Our Placement Commitment</h3>
          <p className="text-sm text-neutral-300 max-w-xl mx-auto leading-relaxed">
            Success fees are only payable after you receive your first salary paycheck. We offer 3-month installment plans so you can advance your career with complete peace of mind.
          </p>
          <a
            href="/contact"
            className="btn btn-sm bg-[#a020f0] hover:bg-[#8019c0] text-white border-none rounded-full px-6 btn-shimmer mt-2"
          >
            Speak with an Advisor
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
