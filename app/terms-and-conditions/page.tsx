import React from "react";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BreadcrumbJsonLd } from "../components/JsonLd";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | Service Agreements & Payment Terms",
  description:
    "Terms and conditions for HireVoTech's recruitment and career consulting services, covering service scopes, upfront fees, deferred success fees, and EMI structures.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-[#FCFCFC] text-[#0D0C41] selection:bg-[#4846D4] selection:text-white relative overflow-hidden font-sans dot-grid">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.hirevotech.com" },
          { name: "Terms & Conditions", url: "https://www.hirevotech.com/terms-and-conditions" },
        ]}
      />
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#4846D4]/5 blur-[150px] pointer-events-none orb-float-1"></div>

      <Navbar scrolled={true} activeSection="" />

      <section className="relative pt-32 pb-16 px-4 md:px-8 max-w-4xl mx-auto z-10">
        <div className="inline-flex items-center gap-2 bg-[#F0F0FF] border border-[#4846D4]/20 text-[#4846D4] rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6">
          <FileText size={14} className="text-[#4846D4]" /> Agreement
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0D0C41] mb-6">
          Terms & Conditions
        </h1>
        <p className="text-sm text-[#555566] mb-12">Last Updated: August 2026</p>

        <div className="bg-white rounded-3xl p-8 md:p-12 space-y-8 text-[#555566] text-sm md:text-base leading-relaxed border border-[#E1E2EE] shadow-md">
          <section>
            <h2 className="text-xl font-bold text-[#0D0C41] mb-3">1. Service Scope</h2>
            <p>
              HireVoTech provides candidate career consulting, resume and LinkedIn profile optimization, daily job application submission, and interview preparation coaching under the Basic and Premium subscription plans.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0D0C41] mb-3">2. Investment Plans & Fees</h2>
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
            <h2 className="text-xl font-bold text-[#0D0C41] mb-3">3. Candidate Commitments</h2>
            <p>
              Candidates agree to provide accurate career histories, attend scheduled mock interview coaching sessions, and promptly notify HireVoTech of interview requests and written offers received.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0D0C41] mb-3">4. Limitation of Liability</h2>
            <p>
              While HireVoTech makes dedicated efforts to maximize interview calls and placement rates, final hiring determinations rest solely with client employers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0D0C41] mb-3">5. Governing Law</h2>
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
