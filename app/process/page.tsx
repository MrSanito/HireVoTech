import React from "react";
import type { Metadata } from "next";
import ProcessClient from "./ProcessClient";
import { BreadcrumbJsonLd } from "../components/JsonLd";

export const metadata: Metadata = {
  title: "Our 7-Step Career Roadmap & Placement Process",
  description:
    "Discover HireVoTech's structured 7-step engineering placement sequence — from technical profile audit and active application marketing to 1-on-1 mock interviews and salary negotiation.",
  alternates: {
    canonical: "/process",
  },
  openGraph: {
    title: "Our 7-Step Placement Process | HireVoTech",
    description:
      "A battle-tested 7-phase roadmap guiding technical candidates from initial assessment to signing top-bracket engineering offers.",
    url: "https://www.hirevotech.com/process",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "HireVoTech Placement Roadmap" }],
  },
};

export default function ProcessPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.hirevotech.com" },
          { name: "Process", url: "https://www.hirevotech.com/process" },
        ]}
      />
      <ProcessClient />
    </>
  );
}
