"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Gift, DollarSign, Users, CheckCircle, ArrowRight, Sparkles, Send } from "lucide-react";

export default function ReferAndEarn() {
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
    <div className="min-h-screen bg-[#08000d] text-white selection:bg-[#a020f0] selection:text-white relative overflow-hidden font-sans dot-grid">
      {/* Floating decorative orbs */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#a020f0]/10 blur-[150px] pointer-events-none orb-float-1"></div>
      <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#ff4fd8]/5 blur-[180px] pointer-events-none orb-float-2"></div>

      <Navbar scrolled={true} activeSection="" />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 px-4 md:px-8 max-w-5xl mx-auto text-center z-10">
        <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 text-[#c68efd] rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-6">
          <Gift size={14} className="text-[#ff4fd8]" /> Referral Program
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-b from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent mb-6">
          Refer Talent & Companies. <br />
          <span className="text-[#ff4fd8] drop-shadow-[0_0_25px_rgba(255,79,216,0.35)]">Earn Generous Rewards.</span>
        </h1>
        <p className="text-lg text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed">
          Know someone looking for their next dream role or a company searching for top-tier tech talent? Refer them to HireVoTech and earn cash rewards upon successful placement.
        </p>
      </section>

      {/* Rewards Tier Cards */}
      <section className="py-12 px-4 md:px-8 max-w-6xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card rounded-2xl p-8 flex flex-col items-center text-center group hover:border-[#a020f0]/40 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 text-[#c68efd] group-hover:scale-110 transition-transform">
              <Users size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Refer a Candidate</h3>
            <p className="text-sm text-neutral-400 mb-6">Refer software engineers, data analysts, cloud architects, or business analysts.</p>
            <div className="mt-auto pt-4 border-t border-white/5 w-full">
              <span className="text-2xl font-bold text-[#c19a4f]">Up to $500</span>
              <p className="text-xs text-neutral-500 mt-1">Per successful placement</p>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8 flex flex-col items-center text-center group relative overflow-hidden border-[#ff4fd8]/30 shadow-xl shadow-purple-950/20">
            <div className="absolute top-0 right-0 bg-[#ff4fd8] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-bl-lg">
              POPULAR
            </div>
            <div className="w-14 h-14 rounded-2xl bg-[#ff4fd8]/10 border border-[#ff4fd8]/30 flex items-center justify-center mb-6 text-[#ff4fd8] group-hover:scale-110 transition-transform">
              <DollarSign size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Refer an Employer</h3>
            <p className="text-sm text-neutral-400 mb-6">Connect us with hiring managers or HR leaders seeking staff augmentation or full-time hires.</p>
            <div className="mt-auto pt-4 border-t border-white/5 w-full">
              <span className="text-2xl font-bold text-[#ff4fd8]">Up to $1,500</span>
              <p className="text-xs text-neutral-500 mt-1">Per signed contract</p>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8 flex flex-col items-center text-center group hover:border-[#a020f0]/40 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 transition-transform">
              <Sparkles size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Unlimited Referrals</h3>
            <p className="text-sm text-neutral-400 mb-6">There is no cap on how many referrals you can submit. Track your payouts transparently.</p>
            <div className="mt-auto pt-4 border-t border-white/5 w-full">
              <span className="text-2xl font-bold text-emerald-400">Direct Wire / ACH</span>
              <p className="text-xs text-neutral-500 mt-1">Fast, reliable payouts</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works & Referral Form */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Steps */}
          <div>
            <span className="text-xs uppercase tracking-widest text-[#c19a4f] font-semibold mb-3 block">
              SIMPLE 3-STEP PROCESS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              How the Referral Program Works
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-[#a020f0]/20 border border-[#a020f0]/40 flex items-center justify-center font-bold text-white font-mono flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Submit Details</h4>
                  <p className="text-sm text-neutral-400 mt-1">Fill out the referral form with your contact info and your friend or client details.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-[#a020f0]/20 border border-[#a020f0]/40 flex items-center justify-center font-bold text-white font-mono flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">We Connect & Guide</h4>
                  <p className="text-sm text-neutral-400 mt-1">Our recruitment team reaches out to evaluate opportunities and onboard them into our pipeline.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center font-bold text-emerald-400 font-mono flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Get Paid</h4>
                  <p className="text-sm text-neutral-400 mt-1">Once the placement or contract is finalized, your bonus is wired directly to you.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden border border-white/10 shadow-2xl">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff4fd8] to-transparent"></div>

            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={36} />
                </div>
                <h3 className="text-2xl font-bold text-white">Referral Received!</h3>
                <p className="text-sm text-neutral-300 max-w-md mx-auto">
                  Thank you! Our recruitment team will review the details and reach out. We will keep you updated on the progress.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-sm bg-[#a020f0] text-white border-none rounded-full px-6 mt-4"
                >
                  Submit Another Referral
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-white mb-4">Submit a Referral</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-neutral-400 block mb-1 font-medium">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.yourName}
                      onChange={(e) => setFormData({ ...formData, yourName: e.target.value })}
                      placeholder="Jane Doe"
                      className="input input-sm w-full bg-white/5 border-white/10 text-white rounded-xl focus:border-[#ff4fd8] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-neutral-400 block mb-1 font-medium">Your Email</label>
                    <input
                      type="email"
                      required
                      value={formData.yourEmail}
                      onChange={(e) => setFormData({ ...formData, yourEmail: e.target.value })}
                      placeholder="jane@example.com"
                      className="input input-sm w-full bg-white/5 border-white/10 text-white rounded-xl focus:border-[#ff4fd8] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-neutral-400 block mb-1 font-medium">Referral Type</label>
                  <select
                    value={formData.referralType}
                    onChange={(e) => setFormData({ ...formData, referralType: e.target.value })}
                    className="select select-sm w-full bg-white/5 border-white/10 text-white rounded-xl focus:border-[#ff4fd8] focus:outline-none"
                  >
                    <option value="candidate" className="bg-[#08000d]">Candidate (Job Seeker)</option>
                    <option value="employer" className="bg-[#08000d]">Employer / Hiring Manager</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-neutral-400 block mb-1 font-medium">Referral's Name</label>
                    <input
                      type="text"
                      required
                      value={formData.refName}
                      onChange={(e) => setFormData({ ...formData, refName: e.target.value })}
                      placeholder="John Smith"
                      className="input input-sm w-full bg-white/5 border-white/10 text-white rounded-xl focus:border-[#ff4fd8] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-neutral-400 block mb-1 font-medium">Referral's Email</label>
                    <input
                      type="email"
                      required
                      value={formData.refEmail}
                      onChange={(e) => setFormData({ ...formData, refEmail: e.target.value })}
                      placeholder="john@example.com"
                      className="input input-sm w-full bg-white/5 border-white/10 text-white rounded-xl focus:border-[#ff4fd8] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-neutral-400 block mb-1 font-medium">Notes / Resume Link / Roles (Optional)</label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Tell us about their role, current situation, or company hiring needs..."
                    className="textarea textarea-sm w-full bg-white/5 border-white/10 text-white rounded-xl focus:border-[#ff4fd8] focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn bg-[#a020f0] hover:bg-[#8019c0] text-white border-none w-full rounded-full font-semibold mt-4 btn-shimmer flex items-center justify-center gap-2"
                >
                  <Send size={16} /> Submit Referral & Claim Reward
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
