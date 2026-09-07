import React from "react";
import type { Metadata } from "next";
import ReferAndEarnClient from "./ReferAndEarnClient";
import { BreadcrumbJsonLd } from "../components/JsonLd";

export const metadata: Metadata = {
  title: "Refer & Earn Program | Up to $1,500 Cash Referral Bonus",
  description:
    "Earn up to $500 for candidate referrals and up to $1,500 for enterprise employer referrals with HireVoTech. Direct wire bonuses with transparent tracking.",
  alternates: {
    canonical: "/refer-and-earn",
  },
  openGraph: {
    title: "Refer Talent & Employers, Earn Up to $1,500 | HireVoTech",
    description:
      "Refer software engineers or technology employers seeking staff augmentation to earn direct wire rewards.",
    url: "https://www.hirevotech.com/refer-and-earn",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "HireVoTech Referral Program" }],
  },
};

export default function ReferAndEarnPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.hirevotech.com" },
          { name: "Refer and Earn", url: "https://www.hirevotech.com/refer-and-earn" },
        ]}
      />
      <ReferAndEarnClient />
    </>
  );
}
