"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, MessageCircle } from "lucide-react";
import Link from "next/link";
import { FAQJsonLd } from "./JsonLd";

interface FAQItem {
  q: string;
  a: string;
  category: "candidate" | "employer" | "general";
}

const faqs: FAQItem[] = [
  {
    q: "How do I create an account and start applying?",
    a: "Getting started is simple! You can apply directly through any of our listed opportunities above or submit your resume via our candidate onboarding form. Once submitted, one of our specialized career managers will review your profile within 24 hours.",
    category: "candidate"
  },
  {
    q: "How do I track the status of my application?",
    a: "After your initial consultation, you will receive a private dashboard link and direct Slack / email access to your assigned talent manager, giving you real-time visibility as your profile is submitted to partnered hiring managers.",
    category: "candidate"
  },
  {
    q: "How can I prepare for technical and behavioral job interviews?",
    a: "Candidates enrolled in our career plans receive 1-on-1 mock technical interviews, system design interview prep, portfolio reviews, and salary negotiation strategies tailored to the specific company loop.",
    category: "candidate"
  },
  {
    q: "How do employers search for and hire suitable candidates?",
    a: "Companies can partner with HireVoTech by submitting their specific role requirements. Our technical recruiters build a curated shortlist of pre-vetted top 1% candidates within 48 to 72 hours.",
    category: "employer"
  },
  {
    q: "What is your placement fee structure and when do I pay?",
    a: "We operate on a transparent, candidate-first model. For career marketing and placement, our success fees are deferred until after you have successfully landed your role and received your first paycheck. Flexible 3-month installment options are also available.",
    category: "general"
  },
  {
    q: "Can I request executive or confidential talent searches?",
    a: "Yes! We regularly conduct confidential executive searches for VP of Engineering, CTO, and Director-level roles with non-disclosure agreements and discreet candidate outreach.",
    category: "employer"
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [filter, setFilter] = useState<string>("all");

  const filteredFaqs = filter === "all" 
    ? faqs 
    : faqs.filter(f => f.category === filter);

  const jsonLdItems = faqs.map((f) => ({ question: f.q, answer: f.a }));

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-[#F2F3FC] border-y border-[#E1E2EE]">
      <FAQJsonLd items={jsonLdItems} />
      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#F0F0FF] border border-[#4846D4]/20 text-[#4846D4] rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mx-auto">
            <HelpCircle size={14} className="text-[#4846D4]" />
            <span>Any Questions?</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0D0C41] tracking-tight">
            All You Need to Know <br className="hidden sm:inline" />
            <span className="text-[#4846D4]">
              Before You Apply.
            </span>
          </h2>

          <p className="text-[#555566] text-sm md:text-base leading-relaxed">
            Get prepared with essential tips, requirements, and answers to common questions about our recruitment and placement programs.
          </p>

          {/* Filter capsules */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {[
              { id: "all", label: "All Questions" },
              { id: "candidate", label: "For Candidates" },
              { id: "employer", label: "For Employers" },
              { id: "general", label: "Fees & Process" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  filter === tab.id
                    ? "bg-[#4846D4] text-white shadow-md shadow-[#4846D4]/30"
                    : "bg-white text-[#0D0C41] border border-[#E1E2EE] hover:text-[#4846D4]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E1E2EE] overflow-hidden shadow-xs transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-[#F2F3FC] transition-colors cursor-pointer"
                >
                  <span className="text-base font-bold text-[#0D0C41] pr-2">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-[#F2F3FC] flex items-center justify-center text-[#0D0C41] flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 bg-[#4846D4] text-white" : ""}`}>
                    <ChevronDown size={16} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#555566] leading-relaxed font-normal border-t border-[#E1E2EE] animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Need more help banner */}
        <div className="mt-12 text-center p-6 bg-white rounded-2xl border border-[#E1E2EE] shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <div className="text-sm font-bold text-[#0D0C41]">Have a specific question not covered here?</div>
            <div className="text-xs text-[#555566]">Our recruitment advisors are available to help you anytime.</div>
          </div>
          <Link
            href="/contact"
            className="capsule-btn-primary !py-2.5 !px-6 !text-xs whitespace-nowrap btn-shimmer flex items-center gap-2"
          >
            <MessageCircle size={14} /> Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
}
