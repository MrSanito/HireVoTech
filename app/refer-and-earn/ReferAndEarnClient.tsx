"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Gift, DollarSign, Users, CheckCircle, Sparkles, Send } from "lucide-react";

export default function ReferAndEarnClient() {
  const [formData, setFormData] = useState({
    yourName: "",
    yourEmail: "",
    yourPhone: "",
    referralType: "candidate",
    refName: "",
    refEmail: "",
    refPhone: "", 
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FCFCFC] text-[#0D0C41] selection:bg-[#4846D4] selection:text-white relative overflow-hidden font-sans dot-grid">
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#4846D4]/5 blur-[150px] pointer-events-none orb-float-1"></div>
      <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#F0F0FF] blur-[180px] pointer-events-none orb-float-2"></div>

      <Navbar scrolled={true} activeSection="refer-and-earn" />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 px-4 md:px-8 max-w-5xl mx-auto text-center z-10 space-y-4">
        <div className="inline-flex items-center gap-2 bg-[#F0F0FF] border border-[#4846D4]/20 text-[#4846D4] rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mx-auto">
          <Gift size={14} className="text-[#4846D4]" />
          <span>Referral Program</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#0D0C41]">
          Refer Talent & Companies. <br />
          <span className="text-[#4846D4]">
            Earn Generous Cash Rewards.
          </span>
        </h1>
        <p className="text-base sm:text-lg text-[#555566] max-w-2xl mx-auto font-normal leading-relaxed">
          Know someone looking for their next dream role or an engineering leader searching for top tech talent? Refer them to HireVoTech and receive direct wire bonuses.
        </p>
      </section>

      {/* Rewards Tier Cards */}
      <section className="py-12 px-4 md:px-8 max-w-6xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-8 flex flex-col items-center text-center group border border-[#E1E2EE] shadow-md hover:border-[#4846D4]/40 hover:shadow-xl transition-all">
            <div className="w-14 h-14 rounded-2xl bg-[#F0F0FF] border border-[#4846D4]/20 flex items-center justify-center mb-6 text-[#4846D4] group-hover:scale-110 transition-transform">
              <Users size={28} />
            </div>
            <h3 className="text-xl font-bold text-[#0D0C41] mb-2">Refer a Candidate</h3>
            <p className="text-xs text-[#555566] leading-relaxed font-normal mb-6">Refer software engineers, data analysts, cloud architects, or tech managers.</p>
            <div className="mt-auto pt-4 border-t border-[#E1E2EE] w-full">
              <span className="text-2xl font-bold text-[#4846D4]">Up to $500</span>
              <p className="text-[11px] text-[#555566] mt-1">Per successful placement</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 flex flex-col items-center text-center group relative overflow-hidden border-2 border-[#4846D4] shadow-xl shadow-[#4846D4]/10">
            <div className="absolute top-0 right-0 bg-[#4846D4] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-bl-xl">
              POPULAR
            </div>
            <div className="w-14 h-14 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 transition-transform">
              <DollarSign size={28} />
            </div>
            <h3 className="text-xl font-bold text-[#0D0C41] mb-2">Refer an Employer</h3>
            <p className="text-xs text-[#555566] leading-relaxed font-normal mb-6">Connect us with hiring managers or CTOs seeking tech staff augmentation or full-time hires.</p>
            <div className="mt-auto pt-4 border-t border-[#E1E2EE] w-full">
              <span className="text-2xl font-bold text-[#0D0C41]">Up to $1,500</span>
              <p className="text-[11px] text-[#555566] mt-1">Per signed staffing contract</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 flex flex-col items-center text-center group border border-[#E1E2EE] shadow-md hover:border-emerald-500/40 hover:shadow-xl transition-all">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-6 text-emerald-600 group-hover:scale-110 transition-transform">
              <Sparkles size={28} />
            </div>
            <h3 className="text-xl font-bold text-[#0D0C41] mb-2">Unlimited Referrals</h3>
            <p className="text-xs text-[#555566] leading-relaxed font-normal mb-6">There is no cap on how many referrals you can submit. Track your payouts transparently.</p>
            <div className="mt-auto pt-4 border-t border-[#E1E2EE] w-full">
              <span className="text-2xl font-bold text-emerald-600">Direct Wire / ACH</span>
              <p className="text-[11px] text-[#555566] mt-1">Fast, reliable payouts</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works & Referral Form */}
      <section className="py-12 px-4 md:px-8 max-w-6xl mx-auto z-10 relative mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Steps */}
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#4846D4] font-bold block">
              SIMPLE 3-STEP PROCESS
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D0C41]">
              How the Referral Program Works
            </h2>

            <div className="space-y-4 pt-2">
              <div className="flex gap-4 items-start p-5 bg-white rounded-2xl border border-[#E1E2EE] shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#F0F0FF] border border-[#4846D4]/20 flex items-center justify-center font-bold text-[#4846D4] font-mono flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#0D0C41]">Submit Details</h4>
                  <p className="text-xs text-[#555566] mt-1 leading-relaxed font-normal">Fill out the referral form with your contact info and your friend or client details.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-5 bg-white rounded-2xl border border-[#E1E2EE] shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center font-bold text-purple-600 font-mono flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#0D0C41]">We Connect & Guide</h4>
                  <p className="text-xs text-[#555566] mt-1 leading-relaxed font-normal">Our recruitment team reaches out to evaluate opportunities and onboard them into our pipeline.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-5 bg-white rounded-2xl border border-[#E1E2EE] shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center font-bold text-emerald-600 font-mono flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#0D0C41]">Get Paid Directly</h4>
                  <p className="text-xs text-[#555566] mt-1 leading-relaxed font-normal">Once the candidate placement or hiring contract is finalized, your bonus is wired directly to you.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl p-8 md:p-10 relative overflow-hidden border border-[#E1E2EE] shadow-2xl">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#4846D4]"></div>

            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={36} />
                </div>
                <h3 className="text-2xl font-bold text-[#0D0C41]">Referral Received!</h3>
                <p className="text-sm text-[#555566] max-w-md mx-auto leading-relaxed">
                  Thank you! Our recruitment team will review the details and reach out. We will keep you updated on progress.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="capsule-btn-secondary !py-2 !px-6 !text-xs mt-4"
                >
                  Submit Another Referral
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-[#0D0C41] mb-2">Submit a Referral</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-[#0D0C41] uppercase tracking-wider block mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.yourName}
                      onChange={(e) => setFormData({ ...formData, yourName: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full bg-white border border-[#E1E2EE] text-[#0D0C41] rounded-xl px-4 py-2.5 text-sm focus:border-[#4846D4] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[#0D0C41] uppercase tracking-wider block mb-1.5">Your Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.yourEmail}
                      onChange={(e) => setFormData({ ...formData, yourEmail: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full bg-white border border-[#E1E2EE] text-[#0D0C41] rounded-xl px-4 py-2.5 text-sm focus:border-[#4846D4] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#0D0C41] uppercase tracking-wider block mb-1.5">Referral Type</label>
                  <select
                    value={formData.referralType}
                    onChange={(e) => setFormData({ ...formData, referralType: e.target.value })}
                    className="w-full bg-white border border-[#E1E2EE] text-[#0D0C41] rounded-xl px-4 py-2.5 text-sm focus:border-[#4846D4] focus:outline-none transition-colors"
                  >
                    <option value="candidate">Candidate (Job Seeker - $500 Reward)</option>
                    <option value="employer">Employer / Hiring Manager ($1,500 Reward)</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-[#0D0C41] uppercase tracking-wider block mb-1.5">Referral&apos;s Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.refName}
                      onChange={(e) => setFormData({ ...formData, refName: e.target.value })}
                      placeholder="John Smith"
                      className="w-full bg-white border border-[#E1E2EE] text-[#0D0C41] rounded-xl px-4 py-2.5 text-sm focus:border-[#4846D4] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[#0D0C41] uppercase tracking-wider block mb-1.5">Referral&apos;s Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.refEmail}
                      onChange={(e) => setFormData({ ...formData, refEmail: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full bg-white border border-[#E1E2EE] text-[#0D0C41] rounded-xl px-4 py-2.5 text-sm focus:border-[#4846D4] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#0D0C41] uppercase tracking-wider block mb-1.5">Notes / Role Info (Optional)</label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Tell us about their role, current situation, or company hiring needs..."
                    className="w-full bg-white border border-[#E1E2EE] text-[#0D0C41] rounded-xl px-4 py-2.5 text-sm focus:border-[#4846D4] focus:outline-none transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="capsule-btn-primary w-full !py-3.5 !text-sm btn-shimmer flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send size={15} /> Submit Referral & Claim Reward
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
