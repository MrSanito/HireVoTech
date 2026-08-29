"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { HelpCircle, ChevronDown, Sparkles, MessageCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: "plans" | "services" | "employers";
}

const faqs: FAQItem[] = [
  {
    category: "plans",
    question: "What is the difference between the Basic and Premium Plan?",
    answer: "The Basic Plan focuses on complete profile marketing, resume & LinkedIn overhaul, and daily applications across top portals. The Premium Plan adds technical training, 1-on-1 interview support, personalized mock interview sessions, and dedicated career guidance.",
  },
  {
    category: "plans",
    question: "When is the Offer Acceptance Fee and Success Fee payable?",
    answer: "The Offer Acceptance Fee is due upon officially accepting a job offer. The Success Fee (12% for Basic, 10% for Premium) is payable only after you receive your first salary paycheck. Flexible EMI options are available and payable within 3 months.",
  },
  {
    category: "plans",
    question: "Are EMI payment options available?",
    answer: "Yes, we provide flexible installment and EMI structures to ensure our services remain accessible without creating financial stress before your first compensation.",
  },
  {
    category: "services",
    question: "How does the profile marketing and job application process work?",
    answer: "Our dedicated recruitment specialists optimize your resume and LinkedIn to match applicant tracking systems (ATS), then actively market your profile and submit tailored daily applications directly to verified job portals and company career pages.",
  },
  {
    category: "services",
    question: "Do you help with Background Verification (BGC)?",
    answer: "Yes, both Basic and Premium plans include dedicated background verification (BGC) guidance and documentation support to ensure smooth onboarding with client companies.",
  },
  {
    category: "employers",
    question: "How quickly can HireVoTech supply qualified candidates?",
    answer: "For common tech stacks (Full-Stack, Cloud, Data, QA, BA), we provide curated, pre-screened shortlists within 48 to 72 hours of receiving your job description.",
  },
  {
    category: "employers",
    question: "What hiring engagement models do you support?",
    answer: "We support Direct Hire (Full-Time), Contract-to-Hire, and dedicated Contract Staff Augmentation models tailored to your project timeline.",
  },
];

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState<"all" | "plans" | "services" | "employers">("all");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = faqs.filter(
    (faq) => activeTab === "all" || faq.category === activeTab
  );

  return (
    <div className="min-h-screen bg-[#08000d] text-white selection:bg-[#a020f0] selection:text-white relative overflow-hidden font-sans dot-grid">
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#a020f0]/10 blur-[150px] pointer-events-none orb-float-1"></div>
      <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#ff4fd8]/5 blur-[180px] pointer-events-none orb-float-2"></div>

      <Navbar scrolled={true} activeSection="" />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 px-4 md:px-8 max-w-5xl mx-auto text-center z-10">
        <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 text-[#c68efd] rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-6">
          <HelpCircle size={14} className="text-[#ff4fd8]" /> Got Questions?
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-b from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent mb-6">
          Frequently Asked <span className="text-[#ff4fd8] drop-shadow-[0_0_25px_rgba(255,79,216,0.35)]">Questions</span>
        </h1>
        <p className="text-lg text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed">
          Clear answers about our career management plans, pricing structure, interview prep, and corporate staffing solutions.
        </p>

        {/* Categories Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mt-10">
          <button
            onClick={() => setActiveTab("all")}
            className={`btn btn-sm rounded-full text-xs font-semibold transition-all ${
              activeTab === "all"
                ? "bg-[#a020f0] text-white border-none"
                : "bg-white/5 border-white/10 text-neutral-300 hover:text-white"
            }`}
          >
            All Questions
          </button>
          <button
            onClick={() => setActiveTab("plans")}
            className={`btn btn-sm rounded-full text-xs font-semibold transition-all ${
              activeTab === "plans"
                ? "bg-[#a020f0] text-white border-none"
                : "bg-white/5 border-white/10 text-neutral-300 hover:text-white"
            }`}
          >
            Plans & Fees
          </button>
          <button
            onClick={() => setActiveTab("services")}
            className={`btn btn-sm rounded-full text-xs font-semibold transition-all ${
              activeTab === "services"
                ? "bg-[#a020f0] text-white border-none"
                : "bg-white/5 border-white/10 text-neutral-300 hover:text-white"
            }`}
          >
            Recruitment Services
          </button>
          <button
            onClick={() => setActiveTab("employers")}
            className={`btn btn-sm rounded-full text-xs font-semibold transition-all ${
              activeTab === "employers"
                ? "bg-[#a020f0] text-white border-none"
                : "bg-white/5 border-white/10 text-neutral-300 hover:text-white"
            }`}
          >
            For Employers
          </button>
        </div>
      </section>

      {/* Accordion FAQ list */}
      <section className="py-12 px-4 md:px-8 max-w-4xl mx-auto z-10 relative mb-24">
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl overflow-hidden border border-white/10 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-white/[0.02] transition-colors"
                >
                  <span className="font-semibold text-base md:text-lg text-white font-mono">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-neutral-300 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180 bg-[#a020f0]/30 text-white" : ""
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-neutral-300 leading-relaxed border-t border-white/5">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-16 text-center glass-card rounded-3xl p-8 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-2">Have a specific question not listed here?</h3>
          <p className="text-sm text-neutral-400 mb-6">Our career advisors are available to talk you through every detail.</p>
          <a
            href="./contact"
            className="btn bg-[#a020f0] hover:bg-[#8019c0] text-white border-none rounded-full px-8 font-semibold btn-shimmer"
          >
            <MessageCircle size={16} /> Talk with an Advisor
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
