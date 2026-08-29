"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Building2, CheckCircle2, ShieldCheck, Zap, ArrowRight, Clock, Users, Send } from "lucide-react";

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
    <div className="min-h-screen bg-[#08000d] text-white selection:bg-[#a020f0] selection:text-white relative overflow-hidden font-sans dot-grid">
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#a020f0]/10 blur-[150px] pointer-events-none orb-float-1"></div>
      <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#ff4fd8]/5 blur-[180px] pointer-events-none orb-float-2"></div>

      <Navbar scrolled={true} activeSection="" />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 px-4 md:px-8 max-w-5xl mx-auto text-center z-10">
        <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 text-[#c68efd] rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-6">
          <Building2 size={14} className="text-[#ff4fd8]" /> For Employers & Enterprises
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-b from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent mb-6">
          Hire Pre-Vetted Tech Talent <br />
          <span className="text-[#ff4fd8] drop-shadow-[0_0_25px_rgba(255,79,216,0.35)]">In Days, Not Months.</span>
        </h1>
        <p className="text-lg text-neutral-300 max-w-3xl mx-auto font-light leading-relaxed">
          Scale your engineering, cloud, data, and product teams with HireVoTech. We deliver rigorously vetted, market-ready candidates aligned with your stack and culture.
        </p>
      </section>

      {/* Value Pillars */}
      <section className="py-12 px-4 md:px-8 max-w-6xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card rounded-2xl p-8 group hover:border-[#a020f0]/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 text-[#c68efd] group-hover:scale-110 transition-transform">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">48-Hour Shortlist</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Receive curated profiles within 48 hours of sharing your job description, eliminating recruitment bottlenecks.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 group hover:border-[#ff4fd8]/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#ff4fd8]/10 border border-[#ff4fd8]/30 flex items-center justify-center mb-6 text-[#ff4fd8] group-hover:scale-110 transition-transform">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Pre-Screened & BGC Ready</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Every candidate undergoes technical interviews, communication checks, and background verification (BGC) readiness.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 group hover:border-emerald-500/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 transition-transform">
              <Clock size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Flexible Engagement</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Direct hire, contract-to-hire, or dedicated project teams tailored to your company's growth milestones.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-4 md:px-8 max-w-4xl mx-auto z-10 relative">
        <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden border border-white/10 shadow-2xl">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#a020f0] to-transparent"></div>

          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-2xl font-bold text-white">Inquiry Received!</h3>
              <p className="text-sm text-neutral-300 max-w-md mx-auto">
                Thank you. Our talent acquisition specialist will review your requirements and follow up within 24 business hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white">Request Talent & Consultation</h3>
                <p className="text-sm text-neutral-400 mt-2">Tell us about your open roles and target start date.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-neutral-400 block mb-1 font-medium">Company Name</label>
                  <input
                    type="text"
                    required
                    value={form.companyName}
                    onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                    placeholder="Acme Corp"
                    className="input input-sm w-full bg-white/5 border-white/10 text-white rounded-xl focus:border-[#a020f0] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs text-neutral-400 block mb-1 font-medium">Your Name</label>
                  <input
                    type="text"
                    required
                    value={form.contactName}
                    onChange={(e) => setForm({ ...form, contactName: e.target.value })}
                    placeholder="Sarah Jenkins"
                    className="input input-sm w-full bg-white/5 border-white/10 text-white rounded-xl focus:border-[#a020f0] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-neutral-400 block mb-1 font-medium">Work Email</label>
                  <input
                    type="email"
                    required
                    value={form.workEmail}
                    onChange={(e) => setForm({ ...form, workEmail: e.target.value })}
                    placeholder="s.jenkins@acme.com"
                    className="input input-sm w-full bg-white/5 border-white/10 text-white rounded-xl focus:border-[#a020f0] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs text-neutral-400 block mb-1 font-medium">Phone Number</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="input input-sm w-full bg-white/5 border-white/10 text-white rounded-xl focus:border-[#a020f0] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-neutral-400 block mb-1 font-medium">Estimated Timeline</label>
                <select
                  value={form.timeline}
                  onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                  className="select select-sm w-full bg-white/5 border-white/10 text-white rounded-xl focus:border-[#a020f0] focus:outline-none"
                >
                  <option value="Immediate (1-2 weeks)" className="bg-[#08000d]">Immediate (1-2 weeks)</option>
                  <option value="1 month" className="bg-[#08000d]">Next 30 days</option>
                  <option value="Pipeline / Future" className="bg-[#08000d]">Building candidate pipeline</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-neutral-400 block mb-1 font-medium">Open Positions & Skills Needed</label>
                <textarea
                  rows={4}
                  required
                  value={form.hiringNeeds}
                  onChange={(e) => setForm({ ...form, hiringNeeds: e.target.value })}
                  placeholder="e.g. 2 Full-Stack React/Node Engineers, 1 AWS Cloud Architect, Business Analyst with healthcare experience..."
                  className="textarea textarea-sm w-full bg-white/5 border-white/10 text-white rounded-xl focus:border-[#a020f0] focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn bg-[#a020f0] hover:bg-[#8019c0] text-white border-none w-full rounded-full font-semibold btn-shimmer flex items-center justify-center gap-2"
              >
                <Send size={16} /> Submit Hiring Request
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
