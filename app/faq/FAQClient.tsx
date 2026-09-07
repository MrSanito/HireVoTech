"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTABanner from "../components/CTABanner";
import { HelpCircle, ChevronDown } from "lucide-react";
import { faqsData } from "../data/faqs";

export default function FAQClient() {
  const [activeTab, setActiveTab] = useState<"all" | "plans" | "services" | "employers">("all");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = faqsData.filter(
    (faq) => activeTab === "all" || faq.category === activeTab
  );

  return (
    <div className="min-h-screen bg-[#FCFCFC] text-[#0D0C41] selection:bg-[#4846D4] selection:text-white relative overflow-hidden font-sans dot-grid">
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#4846D4]/5 blur-[150px] pointer-events-none orb-float-1"></div>
      <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#F0F0FF] blur-[180px] pointer-events-none orb-float-2"></div>

      <Navbar scrolled={true} activeSection="faq" />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 px-4 md:px-8 max-w-5xl mx-auto text-center z-10 space-y-4">
        <div className="inline-flex items-center gap-2 bg-[#F0F0FF] border border-[#4846D4]/20 text-[#4846D4] rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mx-auto">
          <HelpCircle size={14} className="text-[#4846D4]" />
          <span>Help & FAQ</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#0D0C41]">
          Frequently Asked <br />
          <span className="text-[#4846D4]">
            Questions.
          </span>
        </h1>
        <p className="text-base sm:text-lg text-[#555566] max-w-2xl mx-auto font-normal leading-relaxed">
          Clear answers about our career management plans, pricing structure, interview prep, and corporate staffing solutions.
        </p>

        {/* Categories Tabs */}
        <div className="flex flex-wrap justify-center gap-2 pt-6">
          {[
            { id: "all", label: "All Questions" },
            { id: "plans", label: "Plans & Fees" },
            { id: "services", label: "Recruitment Services" },
            { id: "employers", label: "For Employers" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? "bg-[#4846D4] text-white shadow-md shadow-[#4846D4]/30"
                  : "bg-white border border-[#E1E2EE] text-[#0D0C41] hover:text-[#4846D4]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Accordion FAQ list */}
      <section className="py-10 px-4 md:px-8 max-w-4xl mx-auto z-10 relative mb-16">
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-[#E1E2EE] shadow-xs transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-[#F2F3FC] transition-colors cursor-pointer"
                >
                  <span className="font-bold text-base md:text-lg text-[#0D0C41]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#F2F3FC] flex items-center justify-center text-[#0D0C41] transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180 bg-[#4846D4] text-white" : ""
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#555566] leading-relaxed font-normal border-t border-[#E1E2EE] animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <CTABanner />

      <Footer />
    </div>
  );
}
