import React from "react";
import type { Metadata } from "next";
import PlansClient from "./PlansClient";
import { BreadcrumbJsonLd } from "../components/JsonLd";

export const metadata: Metadata = {
  title: "Career Investment Plans & Success-Deferred Pricing",
  description:
    "Explore transparent pricing for HireVoTech's Basic and Premium technical career management plans. Zero upfront risk, 1-on-1 interview prep, flexible EMIs, and post-placement fees.",
  alternates: {
    canonical: "/plans",
  },
  openGraph: {
    title: "Investment Plans & Career Subscriptions | HireVoTech",
    description:
      "Choose between Basic Career Marketing or Premium Full-Coaching with 1-on-1 mock interviews, ATS resume revamp, and deferred success fee models.",
    url: "https://www.hirevotech.com/plans",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "HireVoTech Career Plans" }],
  },
};

export default function PlansPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.hirevotech.com" },
          { name: "Plans & Pricing", url: "https://www.hirevotech.com/plans" },
        ]}
      />
      <PlansClient />
    </>
  );
}
