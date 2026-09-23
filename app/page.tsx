import React from "react";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedClients from "./components/TrustedClients";
import MissionQuote from "./components/MissionQuote";
import RunningMarquee from "./components/RunningMarquee";
import ServicesSection from "./components/ServicesSection";
import JobListingsSection from "./components/JobListingsSection";
import FeedbackSection from "./components/FeedbackSection";
import Stats from "./components/Stats";
import FAQSection from "./components/FAQSection";
import CTABanner from "./components/CTABanner";
import ArticlesSection from "./components/ArticlesSection";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "HireVoTech | Technical Recruitment & Career Advisory Firm",
  description:
    "HireVoTech connects ambitious software engineering talent with high-growth technology enterprises through proactive career marketing, 1-on-1 interview preparation, and deferred success fees.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "HireVoTech | Technical Recruitment & Career Advisory Firm",
    description:
      "Connecting top software engineering talent with high-growth technology enterprises through proactive career marketing, 1-on-1 interview preparation, and deferred success fees.",
    url: "https://www.hirevotech.com",
    siteName: "HireVoTech",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HireVoTech - Technical Recruitment & Career Advisory",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FCFCFC] text-[#0D0C41] selection:bg-[#4846D4] selection:text-white relative overflow-hidden font-sans dot-grid">
      {/* Subtle background ambient glow */}
      <div className="absolute top-[-10%] left-[-5%] w-[550px] h-[550px] rounded-full bg-[#4846D4]/5 blur-[160px] pointer-events-none orb-float-1"></div>
      <div className="absolute top-[35%] right-[-10%] w-[650px] h-[650px] rounded-full bg-[#F0F0FF] blur-[180px] pointer-events-none orb-float-2"></div>

      {/* ═══ 1. Navbar & Capsule Header ═══ */}
      <Navbar activeSection="home" />

      {/* ═══ 2. Hero Section ═══ */}
      <Hero />

      {/* ═══ 3. Trusted Clients Logo Marquee ═══ */}
      <TrustedClients />

      {/* ═══ 4. Leadership / Mission Quote Card ═══ */}
      <MissionQuote />

      {/* ═══ 5. Dual Tilted Running Text Ticker Banner (-3deg & +3deg) ═══ */}
      <RunningMarquee />

      {/* ═══ 6. Core Services Grid (4 Pillars) ═══ */}
      <ServicesSection />

      {/* ═══ 7. Job Listings & Career Categories Tabs ═══ */}
      <JobListingsSection />

      {/* ═══ 8. Candidate Success Stories & Verified Feedback ═══ */}
      <FeedbackSection />

      {/* ═══ 9. Placement Performance Stats ═══ */}
      <Stats />

      {/* ═══ 10. FAQ Accordion ═══ */}
      <FAQSection />

      {/* ═══ 11. High-Impact CTA Banner ═══ */}
      <CTABanner />

      {/* ═══ 12. Latest Articles & Industry Insights ═══ */}
      <ArticlesSection />

      {/* ═══ 13. Modern Footer & Newsletter ═══ */}
      <Footer />
    </div>
  );
}