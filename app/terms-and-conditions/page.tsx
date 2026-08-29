"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FileText } from "lucide-react";

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-[#08000d] text-white selection:bg-[#a020f0] selection:text-white relative overflow-hidden font-sans dot-grid">
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#a020f0]/10 blur-[150px] pointer-events-none orb-float-1"></div>

      <Navbar scrolled={true} activeSection="" />

      <section className="relative pt-32 pb-16 px-4 md:px-8 max-w-4xl mx-auto z-10">
        <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 text-[#c68efd] rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-6">
          <FileText size={14} className="text-[#ff4fd8]" /> Agreement
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
          Terms & Conditions
        </h1>
        <p className="text-sm text-neutral-400 mb-12">Last Updated: August 2026</p>

        <div className="glass-card rounded-3xl p-8 md:p-12 space-y-8 text-neutral-300 text-sm md:text-base leading-relaxed border border-white/10">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Service Scope</h2>
            <p>
              HireVoTech provides candidate career consulting, resume and LinkedIn profile optimization, daily job application submission, and interview preparation coaching under the Basic and Premium subscription plans.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Investment Plans & Fees</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Basic Plan:</strong> Upfront Fee of USD $1,500, Offer Acceptance Fee of USD $1,000, and a Success Fee of 12% of Year 1 compensation.
              </li>
              <li>
                <strong>Premium Plan:</strong> Upfront Fee of USD $3,000, Offer Acceptance Fee of USD $2,500, and a Success Fee of 10% of Year 1 compensation.
              </li>
              <li>
                <strong>Payment Schedule:</strong> Success Fees are due after the candidate receives their first salary disbursement, with flexible EMI terms payable within 3 months.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Candidate Commitments</h2>
            <p>
              Candidates agree to provide accurate career histories, attend scheduled mock interview coaching sessions, and promptly notify HireVoTech of interview requests and written offers received.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Limitation of Liability</h2>
            <p>
              While HireVoTech makes dedicated efforts to maximize interview calls and placement rates, final hiring determinations rest solely with client employers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Governing Law</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of the State of Texas, United States.
            </p>
          </section>
        </div>
      </section>

      <Footer />
    </div>
  );
}
