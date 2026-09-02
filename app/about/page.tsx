"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MissionQuote from "../components/MissionQuote";
import Stats from "../components/Stats";
import FeedbackSection from "../components/FeedbackSection";
import CTABanner from "../components/CTABanner";
import TrustedClients from "../components/TrustedClients";
import { Users, Sparkles, Target, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FCFCFC] text-[#0D0C41] selection:bg-[#4846D4] selection:text-white relative overflow-hidden font-sans dot-grid">
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#4846D4]/5 blur-[150px] pointer-events-none orb-float-1"></div>
      <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#F0F0FF] blur-[180px] pointer-events-none orb-float-2"></div>

      <Navbar scrolled={true} activeSection="about" />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 px-4 md:px-8 max-w-5xl mx-auto text-center z-10 space-y-4">
        <div className="inline-flex items-center gap-2 bg-[#F0F0FF] border border-[#4846D4]/20 text-[#4846D4] rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mx-auto">
          <Users size={14} className="text-[#4846D4]" />
          <span>About HireVoTech</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#0D0C41]">
          Empowering Next-Gen <br />
          <span className="text-[#4846D4]">
            Tech Careers & Recruitment.
          </span>
        </h1>
        <p className="text-base sm:text-lg text-[#555566] max-w-3xl mx-auto font-normal leading-relaxed">
          HireVoTech bridges ambitious talent with leading enterprise employers through personalized marketing, hands-on interview preparation, and transparent deferred success fees.
        </p>
      </section>

      {/* Leadership Mission Quote */}
      <MissionQuote />

      {/* Values & Pillars */}
      <section className="py-20 max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-[#E1E2EE] shadow-md hover:shadow-xl hover:border-[#4846D4]/40 transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#F0F0FF] text-[#4846D4] flex items-center justify-center">
              <Target size={24} />
            </div>
            <h3 className="text-xl font-bold text-[#0D0C41]">Precision Alignment</h3>
            <p className="text-xs text-[#555566] leading-relaxed font-normal">
              We reject spray-and-pray applications. Every candidate is individually coached and mapped directly to hiring managers who need their exact technical strengths.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-[#E1E2EE] shadow-md hover:shadow-xl hover:border-[#4846D4]/40 transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Award size={24} />
            </div>
            <h3 className="text-xl font-bold text-[#0D0C41]">Zero Upfront Risk</h3>
            <p className="text-xs text-[#555566] leading-relaxed font-normal">
              Our career marketing success fee is tied to your success. You only pay after landing your offer and receiving your first paycheck.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-[#E1E2EE] shadow-md hover:shadow-xl hover:border-[#4846D4]/40 transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Sparkles size={24} />
            </div>
            <h3 className="text-xl font-bold text-[#0D0C41]">Long-term Career Growth</h3>
            <p className="text-xs text-[#555566] leading-relaxed font-normal">
              We assist through salary negotiation, onboarding, and ongoing professional mentorship to ensure continuous upward career trajectory.
            </p>
          </div>
        </div>
      </section>

      {/* Candidate Success Stories & Reviews */}
      <FeedbackSection />

      {/* Stats Overview */}
      <Stats />

      {/* Partner Logos */}
      <TrustedClients />

      {/* CTA */}
      <CTABanner />

      <Footer />
    </div>
  );
}
