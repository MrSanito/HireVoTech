"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, MessageSquare } from "lucide-react";

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
    <div className="min-h-screen bg-[#FCFCFC] text-[#0D0C41] selection:bg-[#4846D4] selection:text-white relative overflow-hidden font-sans dot-grid">
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#4846D4]/5 blur-[150px] pointer-events-none orb-float-1"></div>
      <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#F0F0FF] blur-[180px] pointer-events-none orb-float-2"></div>

      <Navbar scrolled={true} activeSection="contact" />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 px-4 md:px-8 max-w-5xl mx-auto text-center z-10 space-y-4">
        <div className="inline-flex items-center gap-2 bg-[#F0F0FF] border border-[#4846D4]/20 text-[#4846D4] rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mx-auto">
          <MessageSquare size={14} className="text-[#4846D4]" />
          <span>Get In Touch</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#0D0C41]">
          Let&apos;s Build Your Tech Career Path. <br />
          <span className="text-[#4846D4]">
            Contact HireVoTech.
          </span>
        </h1>
        <p className="text-base sm:text-lg text-[#555566] max-w-2xl mx-auto font-normal leading-relaxed">
          Have questions about our talent sourcing, career plans, interview prep, or corporate recruitment solutions? We are here to help.
        </p>
      </section>

      {/* Main Grid */}
      <section className="py-8 px-4 md:px-8 max-w-6xl mx-auto z-10 relative mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Contact Details Card */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 space-y-6 border border-[#E1E2EE] shadow-md">
              <h3 className="text-2xl font-bold text-[#0D0C41]">Direct Advisory Contacts</h3>
              <p className="text-xs text-[#555566] leading-relaxed font-normal">
                Reach out directly to our recruitment specialists or schedule a 1-on-1 strategic consultation.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-4 p-4 bg-[#F2F3FC] rounded-2xl border border-[#E1E2EE]">
                  <div className="w-10 h-10 rounded-xl bg-[#F0F0FF] border border-[#4846D4]/20 flex items-center justify-center text-[#4846D4] flex-shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D0C41]">United States Office</h4>
                    <p className="text-xs text-[#555566] mt-1">17350 STATE HWY, 249 STE 220 Houston TX, USA-77064</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[#F2F3FC] rounded-2xl border border-[#E1E2EE]">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D0C41]">Email Address</h4>
                    <a href="mailto:info@hirevotech.com" className="text-xs text-[#4846D4] hover:underline mt-1 block font-semibold">
                      info@hirevotech.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[#F2F3FC] rounded-2xl border border-[#E1E2EE]">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 flex-shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D0C41]">Call & WhatsApp (Available on Both)</h4>
                    <p className="text-xs text-[#555566] mt-0.5 mb-1.5">Direct advisory and candidate support line</p>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <a href="tel:+918968447825" className="text-xs text-[#0D0C41] font-bold hover:text-[#4846D4] transition-colors">
                        +91 89684 47825
                      </a>
                      <span className="text-[#555566]/40">|</span>
                      <a href="tel:+919574844683" className="text-xs text-[#0D0C41] font-bold hover:text-[#4846D4] transition-colors">
                        +91 95748 44683
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[#F2F3FC] rounded-2xl border border-[#E1E2EE]">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 flex-shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D0C41]">Operating Hours</h4>
                    <p className="text-xs text-[#555566] mt-1">Monday – Friday: 9:00 AM – 6:00 PM EST (24/7 Candidate Support)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl p-8 md:p-10 relative overflow-hidden border border-[#E1E2EE] shadow-xl">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#4846D4]"></div>

            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-bold text-[#0D0C41]">Message Sent!</h3>
                <p className="text-sm text-[#555566] max-w-md mx-auto leading-relaxed">
                  Thank you for contacting HireVoTech. An assigned recruitment manager will reach out within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-[#0D0C41] mb-1">Send Us a Message</h3>
                  <p className="text-xs text-[#555566]">Fill out the form below and we will respond within 24 hours.</p>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#0D0C41] uppercase tracking-wider block mb-1.5">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Alex Morgan"
                    className="w-full bg-white border border-[#E1E2EE] text-[#0D0C41] rounded-xl px-4 py-2.5 text-sm focus:border-[#4846D4] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-[#0D0C41] uppercase tracking-wider block mb-1.5">Your Email *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="alex@domain.com"
                    className="w-full bg-white border border-[#E1E2EE] text-[#0D0C41] rounded-xl px-4 py-2.5 text-sm focus:border-[#4846D4] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-[#0D0C41] uppercase tracking-wider block mb-1.5">Inquiry Subject</label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full bg-white border border-[#E1E2EE] text-[#0D0C41] rounded-xl px-4 py-2.5 text-sm focus:border-[#4846D4] focus:outline-none transition-colors"
                  >
                    <option value="Career Support & Consultation">Candidate Placement & Career Coaching</option>
                    <option value="Basic & Premium Plans Question">Pricing Plans & Deferred Fees</option>
                    <option value="Employer Staffing Inquiry">Employer Tech Hiring & Sourcing</option>
                    <option value="Referral Program">Refer & Earn Program ($500 Bonus)</option>
                    <option value="Other / General">Other General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#0D0C41] uppercase tracking-wider block mb-1.5">Your Message *</label>
                  <textarea
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="How can we assist you with your career or engineering hiring requirements?"
                    className="w-full bg-white border border-[#E1E2EE] text-[#0D0C41] rounded-xl px-4 py-2.5 text-sm focus:border-[#4846D4] focus:outline-none transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="capsule-btn-primary w-full !py-3.5 !text-sm mt-2 btn-shimmer flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send size={15} /> Send Message
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
