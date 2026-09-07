import React from "react";
import type { Metadata } from "next";
import PartnerCompanyClient from "./PartnerCompanyClient";
import { BreadcrumbJsonLd } from "../components/JsonLd";

export const metadata: Metadata = {
  title: "Hire Technical Talent & Employer Staffing Solutions",
  description:
    "Partner with HireVoTech to scale your engineering teams. 48-hour pre-screened candidate shortlists, contract-to-hire, full-time direct placements, and zero upfront risk.",
  alternates: {
    canonical: "/partner-company",
  },
  openGraph: {
    title: "Hire Pre-Vetted Tech Talent in Days | HireVoTech Employer Solutions",
    description:
      "Scale engineering capacity with pre-screened Full-Stack, Cloud, Data, and AI developers tailored to your stack and culture.",
    url: "https://www.hirevotech.com/partner-company",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "HireVoTech Employer Solutions" }],
  },
};

export default function PartnerCompanyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.hirevotech.com" },
          { name: "Partner as Employer", url: "https://www.hirevotech.com/partner-company" },
        ]}
      />
      <PartnerCompanyClient />
    </>
  );
}
