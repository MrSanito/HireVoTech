"use client";

import React, { useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PlansPricing from "../components/PlansPricing";
import CTABanner from "../components/CTABanner";
import TrustedClients from "../components/TrustedClients";
import { DollarSign, ShieldCheck } from "lucide-react";
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

export default function PlansClient() {
  const plansRef = useScrollReveal();
  const investRef = useScrollReveal();

  return (
    <div className="min-h-screen bg-[#FCFCFC] text-[#0D0C41] selection:bg-[#4846D4] selection:text-white relative overflow-hidden font-sans dot-grid">
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#4846D4]/5 blur-[150px] pointer-events-none orb-float-1"></div>
      <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#F0F0FF] blur-[180px] pointer-events-none orb-float-2"></div>

      <Navbar scrolled={true} activeSection="plans" />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 px-4 md:px-8 max-w-5xl mx-auto text-center z-10 space-y-4">
        <div className="inline-flex items-center gap-2 bg-[#F0F0FF] border border-[#4846D4]/20 text-[#4846D4] rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mx-auto">
          <DollarSign size={14} className="text-[#4846D4]" />
          <span>Clear & Transparent Pricing</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#0D0C41]">
          Investment Plans & <br />
          <span className="text-[#4846D4]">
            Career Subscriptions.
          </span>
        </h1>
        <p className="text-base sm:text-lg text-[#555566] max-w-3xl mx-auto font-normal leading-relaxed">
          Transparent investment plans. Choose between our Basic Career Marketing plan or Premium Full-Coaching plan with 1-on-1 interview preparation, EMI support, and post-placement payments.
        </p>
      </section>

      {/* Plans and Pricing Component */}
      <PlansPricing plansRef={plansRef} investRef={investRef} />

      {/* FAQ / Guarantee Box */}
      <section className="py-12 px-4 md:px-8 max-w-4xl mx-auto z-10 relative mb-16">
        <div className="bg-white rounded-3xl p-8 md:p-10 border border-[#E1E2EE] shadow-lg text-center space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
            <ShieldCheck size={28} />
          </div>
          <h3 className="text-2xl font-bold text-[#0D0C41]">Our Placement Commitment</h3>
          <p className="text-xs sm:text-sm text-[#555566] max-w-xl mx-auto leading-relaxed font-normal">
            Success fees are only payable after you receive your first salary paycheck. We offer 3-month installment plans so you can advance your career with complete peace of mind.
          </p>
          <Link
            href="/contact"
            className="capsule-btn-primary !py-2.5 !px-8 !text-xs mt-2 inline-flex btn-shimmer"
          >
            Speak with a Career Advisor
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
