"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Shield } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#FCFCFC] text-[#0D0C41] selection:bg-[#4846D4] selection:text-white relative overflow-hidden font-sans dot-grid">
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#4846D4]/5 blur-[150px] pointer-events-none orb-float-1"></div>

      <Navbar scrolled={true} activeSection="" />

      <section className="relative pt-32 pb-16 px-4 md:px-8 max-w-4xl mx-auto z-10">
        <div className="inline-flex items-center gap-2 bg-[#F0F0FF] border border-[#4846D4]/20 text-[#4846D4] rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6">
          <Shield size={14} className="text-[#4846D4]" /> Legal & Compliance
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0D0C41] mb-6">
          Privacy Policy
        </h1>
        <p className="text-sm text-[#555566] mb-12">Last Updated: August 2026</p>

        <div className="bg-white rounded-3xl p-8 md:p-12 space-y-8 text-[#555566] text-sm md:text-base leading-relaxed border border-[#E1E2EE] shadow-md">
          <section>
            <h2 className="text-xl font-bold text-[#0D0C41] mb-3">1. Information We Collect</h2>
            <p>
              HireVoTech collects information you provide directly, such as your full name, email address, phone number, resume/CV details, employment history, and career preferences when you apply for our career management services, fill out consultation forms, or submit a referral.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0D0C41] mb-3">2. How We Use Your Information</h2>
            <p>We use the collected information to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Optimize and market your professional profile and resume to potential employers.</li>
              <li>Submit job applications on your behalf through verified career portals and partner networks.</li>
              <li>Provide personalized interview preparation, coaching, and background check assistance.</li>
              <li>Communicate status updates, interviews, and service notices.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0D0C41] mb-3">3. Information Sharing & Confidentiality</h2>
            <p>
              We do not sell, rent, or trade your personal information. Candidate information is only shared with verified hiring employers, job platforms, and trusted recruitment partners for the explicit purpose of job placement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0D0C41] mb-3">4. Data Security</h2>
            <p>
              We employ industry-standard encryption, SSL transmission protocols, and access control policies to safeguard your confidential career data against unauthorized access or alteration.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0D0C41] mb-3">5. Contact Us</h2>
            <p>
              If you have any questions or data removal requests regarding this Privacy Policy, contact us at: <br />
              <a href="mailto:info@hirevotech.com" className="text-[#4846D4] font-semibold underline">info@hirevotech.com</a>
            </p>
          </section>
        </div>
      </section>

      <Footer />
    </div>
  );
}
