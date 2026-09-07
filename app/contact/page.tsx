import React from "react";
import type { Metadata } from "next";
import ContactClient from "./ContactClient";
import { BreadcrumbJsonLd } from "../components/JsonLd";

export const metadata: Metadata = {
  title: "Contact Us | Houston TX Headquarters & Global Advisory",
  description:
    "Contact HireVoTech for technical recruitment, career marketing, and employer staffing. Direct Call & WhatsApp lines (+91 89684 47825, +91 95748 44683), email support, and Houston TX office.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact HireVoTech | Direct Career & Recruitment Advisory",
    description:
      "Get in touch with our recruitment specialists in Houston TX. Available via Call, WhatsApp, email, and scheduled 1-on-1 consultations.",
    url: "https://www.hirevotech.com/contact",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Contact HireVoTech" }],
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.hirevotech.com" },
          { name: "Contact Us", url: "https://www.hirevotech.com/contact" },
        ]}
      />
      <ContactClient />
    </>
  );
}
