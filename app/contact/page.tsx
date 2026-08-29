"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, Phone, MapPin, Globe, Send, CheckCircle2, Clock, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "Career Support & Consultation",
    message: "",
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
          <MessageSquare size={14} className="text-[#ff4fd8]" /> Get In Touch
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-b from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent mb-6">
          Let&apos;s Build Your Career Path. <br />
          <span className="text-[#ff4fd8] drop-shadow-[0_0_25px_rgba(255,79,216,0.35)]">Contact HireVoTech.</span>
        </h1>
        <p className="text-lg text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed">
          Have questions about our career marketing plans, interview prep training, or corporate staffing solutions? We are here to help.
        </p>
      </section>

      {/* Main Grid */}
      <section className="py-12 px-4 md:px-8 max-w-6xl mx-auto z-10 relative mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Details Card */}
          <div className="space-y-6">
            <div className="glass-card rounded-3xl p-8 space-y-6 border border-white/10">
              <h3 className="text-2xl font-bold text-white">Direct Contacts</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Reach out directly to our Houston recruitment headquarters or our global advisory team.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4 p-4 glass-card rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-[#a020f0] flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">United States Office</h4>
                    <p className="text-xs text-neutral-400 mt-1">17350 STATE HWY, 249 STE 220 Houston TX, USA-77064</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 glass-card rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-[#a020f0] flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Email Address</h4>
                    <a href="mailto:info@hirevotech.com" className="text-xs text-[#c68efd] hover:underline mt-1 block">
                      info@hirevotech.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 glass-card rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-[#a020f0] flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Call / WhatsApp</h4>
                    <p className="text-xs text-neutral-400 mt-1">+91 95748 44683</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 glass-card rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-[#a020f0] flex-shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Operating Hours</h4>
                    <p className="text-xs text-neutral-400 mt-1">Monday – Friday: 9:00 AM – 6:00 PM CST</p>
                  </div>
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
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                <p className="text-sm text-neutral-300 max-w-md mx-auto">
                  Thank you for contacting HireVoTech. An advisor will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-2xl font-bold text-white mb-2">Send Us a Message</h3>
                <p className="text-sm text-neutral-400 mb-6">Fill out the form below and we will respond within 24 hours.</p>

                <div>
                  <label className="text-xs text-neutral-400 block mb-1 font-medium">Your Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Full Name"
                    className="input input-sm w-full bg-white/5 border-white/10 text-white rounded-xl focus:border-[#ff4fd8] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs text-neutral-400 block mb-1 font-medium">Your Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@domain.com"
                    className="input input-sm w-full bg-white/5 border-white/10 text-white rounded-xl focus:border-[#ff4fd8] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs text-neutral-400 block mb-1 font-medium">Topic / Subject</label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="select select-sm w-full bg-white/5 border-white/10 text-white rounded-xl focus:border-[#ff4fd8] focus:outline-none"
                  >
                    <option value="Career Support & Consultation" className="bg-[#08000d]">Career Support & Consultation</option>
                    <option value="Basic & Premium Plans Question" className="bg-[#08000d]">Basic & Premium Plans Question</option>
                    <option value="Employer Staffing Inquiry" className="bg-[#08000d]">Employer Staffing Inquiry</option>
                    <option value="Other / General" className="bg-[#08000d]">Other / General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs text-neutral-400 block mb-1 font-medium">Your Message</label>
                  <textarea
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="How can we assist you with your career or hiring requirements?"
                    className="textarea textarea-sm w-full bg-white/5 border-white/10 text-white rounded-xl focus:border-[#ff4fd8] focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn bg-[#a020f0] hover:bg-[#8019c0] text-white border-none w-full rounded-full font-semibold mt-4 btn-shimmer flex items-center justify-center gap-2"
                >
                  <Send size={16} /> Send Message
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
