import React from "react";
import type { Metadata } from "next";
import FAQClient from "./FAQClient";
import { faqsData } from "../data/faqs";
import { BreadcrumbJsonLd, FAQJsonLd } from "../components/JsonLd";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | Plans, Sourcing & Placement",
  description:
    "Find answers to frequently asked questions about HireVoTech's candidate career plans, success fees, 1-on-1 mock interviews, employer hiring timelines, and background verification support.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "HireVoTech FAQ | Career Plans, Fees & Recruitment Support",
    description:
      "All your questions answered regarding pricing, deferred success fee models, mock interviews, and enterprise tech sourcing timelines.",
    url: "https://www.hirevotech.com/faq",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "HireVoTech FAQ" }],
  },
};

export default function FAQPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.hirevotech.com" },
          { name: "FAQ", url: "https://www.hirevotech.com/faq" },
        ]}
      />
      <FAQJsonLd items={faqsData} />
      <FAQClient />
    </>
  );
}
