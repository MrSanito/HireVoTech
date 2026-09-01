"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TrustedClients from "../components/TrustedClients";
import CTABanner from "../components/CTABanner";
import { Building2, CheckCircle2, ShieldCheck, Zap, Clock, Send } from "lucide-react";

export default function PartnerCompany() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    companyName: "",
    contactName: "",
    workEmail: "",
    phone: "",
    hiringNeeds: "",
    timeline: "Immediate (1-2 weeks)",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FCFCFC] text-[#0D0C41] selection:bg-[#4846D4] selection:text-white relative overflow-hidden font-sans dot-grid">
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#4846D4]/5 blur-[150px] pointer-events-none orb-float-1"></div>
      <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#F0F0FF] blur-[180px] pointer-events-none orb-float-2"></div>

      <Navbar scrolled={true} activeSection="partner-company" />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 px-4 md:px-8 max-w-5xl mx-auto text-center z-10 space-y-4">
        <div className="inline-flex items-center gap-2 bg-[#F0F0FF] border border-[#4846D4]/20 text-[#4846D4] rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mx-auto">
          <Building2 size={14} className="text-[#4846D4]" />
          <span>For Employers & Enterprises</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#0D0C41]">
          Hire Pre-Vetted Tech Talent <br />
          <span className="text-[#4846D4]">
            In Days, Not Months.
          </span>
        </h1>
        <p className="text-base sm:text-lg text-[#555566] max-w-3xl mx-auto font-normal leading-relaxed">
          Scale your engineering, cloud, data, and product teams with HireVoTech. We deliver rigorously vetted, market-ready candidates aligned with your stack and culture.
        </p>
      </section>

      {/* Value Pillars */}
      <section className="py-12 px-4 md:px-8 max-w-6xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-8 border border-[#E1E2EE] shadow-md hover:border-[#4846D4]/40 hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#F0F0FF] border border-[#4846D4]/20 flex items-center justify-center mb-6 text-[#4846D4]">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold text-[#0D0C41] mb-2">48-Hour Shortlist</h3>
            <p className="text-xs text-[#555566] leading-relaxed font-normal">
              Receive curated candidate profiles within 48 hours of sharing your role requirements, eliminating hiring delays.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-[#E1E2EE] shadow-md hover:border-purple-500/40 hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center mb-6 text-purple-600">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-bold text-[#0D0C41] mb-2">Pre-Screened & BGC Ready</h3>
            <p className="text-xs text-[#555566] leading-relaxed font-normal">
              Every candidate undergoes technical interviews, communication checks, and background verification readiness.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-[#E1E2EE] shadow-md hover:border-emerald-500/40 hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-6 text-emerald-600">
              <Clock size={24} />
            </div>
            <h3 className="text-xl font-bold text-[#0D0C41] mb-2">Flexible Engagement</h3>
            <p className="text-xs text-[#555566] leading-relaxed font-normal">
              Direct hire, contract-to-hire, or dedicated project teams tailored to your company&apos;s growth milestones.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <TrustedClients />

      {/* Form Section */}
      <section className="py-16 px-4 md:px-8 max-w-4xl mx-auto z-10 relative mb-16">
        <div className="bg-white rounded-3xl p-8 md:p-12 relative overflow-hidden border border-[#E1E2EE] shadow-2xl">
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#4846D4]"></div>

          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-2xl font-bold text-[#0D0C41]">Inquiry Received!</h3>
              <p className="text-sm text-[#555566] max-w-md mx-auto leading-relaxed">
                Thank you. Our talent acquisition specialist will review your requirements and follow up within 24 business hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#0D0C41]">Request Tech Talent & Consultation</h3>
                <p className="text-xs text-[#555566] mt-2">Tell us about your open roles and target start date.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-[#0D0C41] uppercase tracking-wider block mb-1.5">Company Name *</label>
                  <input
                    type="text"
                    required
                    value={form.companyName}
                    onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                    placeholder="Acme Corp"
                    className="w-full bg-white border border-[#E1E2EE] text-[#0D0C41] rounded-xl px-4 py-2.5 text-sm focus:border-[#4846D4] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-[#0D0C41] uppercase tracking-wider block mb-1.5">Contact Name *</label>
                  <input
                    type="text"
                    required
                    value={form.contactName}
                    onChange={(e) => setForm({ ...form, contactName: e.target.value })}
                    placeholder="Sarah Jenkins"
                    className="w-full bg-white border border-[#E1E2EE] text-[#0D0C41] rounded-xl px-4 py-2.5 text-sm focus:border-[#4846D4] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-[#0D0C41] uppercase tracking-wider block mb-1.5">Work Email *</label>
                  <input
                    type="email"
                    required
                    value={form.workEmail}
                    onChange={(e) => setForm({ ...form, workEmail: e.target.value })}
                    placeholder="s.jenkins@acme.com"
                    className="w-full bg-white border border-[#E1E2EE] text-[#0D0C41] rounded-xl px-4 py-2.5 text-sm focus:border-[#4846D4] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-[#0D0C41] uppercase tracking-wider block mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-white border border-[#E1E2EE] text-[#0D0C41] rounded-xl px-4 py-2.5 text-sm focus:border-[#4846D4] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-[#0D0C41] uppercase tracking-wider block mb-1.5">Estimated Timeline</label>
                <select
                  value={form.timeline}
                  onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                  className="w-full bg-white border border-[#E1E2EE] text-[#0D0C41] rounded-xl px-4 py-2.5 text-sm focus:border-[#4846D4] focus:outline-none transition-colors"
                >
                  <option value="Immediate (1-2 weeks)">Immediate (1-2 weeks)</option>
                  <option value="1 month">Next 30 days</option>
                  <option value="Pipeline / Future">Building candidate pipeline</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-[#0D0C41] uppercase tracking-wider block mb-1.5">Open Positions & Stack Needed *</label>
                <textarea
                  rows={4}
                  required
                  value={form.hiringNeeds}
                  onChange={(e) => setForm({ ...form, hiringNeeds: e.target.value })}
                  placeholder="e.g. 2 Full-Stack Next.js/Node Engineers, 1 AWS DevOps Architect, 1 Product Designer..."
                  className="w-full bg-white border border-[#E1E2EE] text-[#0D0C41] rounded-xl px-4 py-2.5 text-sm focus:border-[#4846D4] focus:outline-none transition-colors"
                ></textarea>
              </div>

              <button
                type="submit"
                className="capsule-btn-primary w-full !py-3.5 !text-sm btn-shimmer flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send size={15} /> Submit Hiring Request
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
