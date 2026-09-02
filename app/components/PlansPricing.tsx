"use client";

import React, { useState } from "react";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export interface ComparisonRow {
  name: string;
  basic: boolean;
  premium: boolean;
}

export const defaultComparisonTable: ComparisonRow[] = [
  { name: "Profile Marketing & Strategy", basic: true, premium: true },
  { name: "Resume Preparation & ATS Optimization", basic: true, premium: true },
  { name: "LinkedIn Profile Branding Overhaul", basic: true, premium: true },
  { name: "Daily Targeted Job Submissions", basic: true, premium: true },
  { name: "Applications Across Top Tier Portals", basic: true, premium: true },
  { name: "Direct Company Career Portal Submissions", basic: true, premium: true },
  { name: "Background Verification (BGC) Support", basic: true, premium: true },
  { name: "Live Technical Training & System Design", basic: false, premium: true },
  { name: "1-on-1 Interview Support & Coaching", basic: false, premium: true },
  { name: "Full Mock Interview Drills with Leads", basic: false, premium: true },
  { name: "Personalized Behavioral Interview Prep", basic: false, premium: true },
  { name: "Dedicated Executive Career Guidance", basic: false, premium: true },
];

interface PlansPricingProps {
  plansRef?: React.RefObject<HTMLDivElement | null>;
  investRef?: React.RefObject<HTMLDivElement | null>;
  comparisonTable?: ComparisonRow[];
}

export default function PlansPricing({
  plansRef,
  investRef,
  comparisonTable = defaultComparisonTable,
}: PlansPricingProps) {
  const [selectedPlanTab, setSelectedPlanTab] = useState<"both" | "premium" | "basic">("both");

  return (
    <>
      {/* ═══ Subscription Plans Table ═══ */}
      <section id="plans" className="py-20 border-t border-[#E1E2EE] bg-[#FCFCFC] relative z-10 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div ref={plansRef} className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 bg-[#F0F0FF] border border-[#4846D4]/20 text-[#4846D4] rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mx-auto">
              <Sparkles size={14} className="text-[#4846D4]" />
              <span>Subscription Plans</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#0D0C41]">
              Basic and Premium, <br className="hidden sm:inline" />
              <span className="text-[#4846D4]">
                Side by Side.
              </span>
            </h2>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-[#E1E2EE]">
            {/* Table Navigation and Tabs */}
            <div className="p-6 bg-[#F2F3FC] border-b border-[#E1E2EE] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="text-base font-bold text-[#0D0C41]">Plan Features Comparison</h3>
                <p className="text-xs text-[#555566]">Compare full benefits between Basic and Premium tiers</p>
              </div>
              <div className="flex flex-wrap sm:flex-nowrap bg-white p-1 border border-[#E1E2EE] rounded-2xl sm:rounded-full shadow-xs w-full sm:w-auto justify-center gap-1 sm:gap-0">
                <button
                  onClick={() => setSelectedPlanTab("both")}
                  className={`flex-1 sm:flex-initial px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer text-center ${
                    selectedPlanTab === "both" ? "bg-[#4846D4] text-white shadow-md shadow-[#4846D4]/30" : "text-[#0D0C41] hover:text-[#4846D4]"
                  }`}
                >
                  Both Plans
                </button>
                <button
                  onClick={() => setSelectedPlanTab("premium")}
                  className={`flex-1 sm:flex-initial px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer text-center ${
                    selectedPlanTab === "premium" ? "bg-[#4846D4] text-white shadow-md shadow-[#4846D4]/30" : "text-[#0D0C41] hover:text-[#4846D4]"
                  }`}
                >
                  Premium Only
                </button>
                <button
                  onClick={() => setSelectedPlanTab("basic")}
                  className={`flex-1 sm:flex-initial px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer text-center ${
                    selectedPlanTab === "basic" ? "bg-[#4846D4] text-white shadow-md shadow-[#4846D4]/30" : "text-[#0D0C41] hover:text-[#4846D4]"
                  }`}
                >
                  Basic Only
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-[#F2F3FC]/50 border-b border-[#E1E2EE] text-[#0D0C41] font-bold uppercase tracking-wider text-xs">
                    <th className="py-4 px-6">Features</th>
                    {selectedPlanTab !== "premium" && <th className="py-4 px-6 text-center">Basic</th>}
                    {selectedPlanTab !== "basic" && <th className="py-4 px-6 text-center text-[#4846D4]">Premium</th>}
                  </tr>
                </thead>
                <tbody className="text-[#0D0C41] text-xs sm:text-sm">
                  {comparisonTable.map((item, idx) => (
                    <tr key={idx} className="border-b border-[#E1E2EE] hover:bg-[#F2F3FC]/40 transition-colors">
                      <td className="font-semibold py-4 px-6 text-[#0D0C41]">{item.name}</td>
                      {selectedPlanTab !== "premium" && (
                        <td className="text-center py-4 px-6">
                          {item.basic ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-50 text-emerald-600">
                              <Check size={14} />
                            </span>
                          ) : (
                            <span className="text-neutral-300">—</span>
                          )}
                        </td>
                      )}
                      {selectedPlanTab !== "basic" && (
                        <td className="text-center py-4 px-6">
                          {item.premium ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F0F0FF] text-[#4846D4]">
                              <Check size={14} />
                            </span>
                          ) : (
                            <span className="text-neutral-300">—</span>
                          )}
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Investment Plans (Cost Card Grid) ═══ */}
      <section className="py-20 border-t border-[#E1E2EE] bg-[#F2F3FC] relative z-10 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div ref={investRef} className="text-center mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 bg-[#F0F0FF] border border-[#4846D4]/20 text-[#4846D4] rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mx-auto">
              <Sparkles size={14} className="text-[#4846D4]" />
              <span>Investment Plans</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#0D0C41]">
              What it costs to work with us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Basic Card */}
            <div className="bg-white rounded-3xl p-8 border border-[#E1E2EE] shadow-md flex flex-col justify-between">
              <div>
                <span className="inline-block bg-[#F2F3FC] text-[#0D0C41] border border-[#E1E2EE] font-bold uppercase tracking-wider text-xs px-3.5 py-1.5 rounded-full mb-6">
                  Basic Plan
                </span>
                <div className="space-y-4 my-6">
                  <div className="flex justify-between items-center pb-3 border-b border-[#E1E2EE]">
                    <span className="text-xs text-[#555566]">Upfront Fee</span>
                    <span className="text-xl font-bold text-[#0D0C41]">USD $1,500</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-[#E1E2EE]">
                    <span className="text-xs text-[#555566]">Offer Acceptance Fee</span>
                    <span className="text-base font-bold text-[#0D0C41]">USD $1,000</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-[#E1E2EE]">
                    <span className="text-xs text-[#555566]">Success Fee</span>
                    <span className="text-base font-bold text-emerald-600">12% of Year 1 pay</span>
                  </div>
                </div>
                <ul className="text-xs text-[#555566] space-y-2.5 leading-relaxed pt-2">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-600 flex-shrink-0" /> Payable after receiving your first salary.
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-600 flex-shrink-0" /> Flexible 3-month EMI options available.
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-600 flex-shrink-0" /> Dedicated daily application management.
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <Link
                  href="/contact"
                  className="capsule-btn-secondary w-full !py-3 !text-xs font-bold"
                >
                  Choose Basic Plan
                </Link>
              </div>
            </div>

            {/* Premium Card */}
            <div className="bg-white rounded-3xl p-8 border-2 border-[#4846D4] relative overflow-hidden flex flex-col justify-between shadow-xl shadow-[#4846D4]/10">
              <div className="absolute top-0 right-0 bg-[#4846D4] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-bl-2xl">
                RECOMMENDED
              </div>
              <div>
                <span className="inline-block bg-[#F0F0FF] text-[#4846D4] border border-[#4846D4]/20 font-bold uppercase tracking-wider text-xs px-3.5 py-1.5 rounded-full mb-6">
                  Premium Coaching Plan
                </span>
                <div className="space-y-4 my-6">
                  <div className="flex justify-between items-center pb-3 border-b border-[#E1E2EE]">
                    <span className="text-xs text-[#555566]">Upfront Fee</span>
                    <span className="text-xl font-bold text-[#0D0C41]">USD $3,000</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-[#E1E2EE]">
                    <span className="text-xs text-[#555566]">Offer Acceptance Fee</span>
                    <span className="text-base font-bold text-[#0D0C41]">USD $2,500</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-[#E1E2EE]">
                    <span className="text-xs text-[#555566]">Success Fee</span>
                    <span className="text-base font-bold text-emerald-600">10% of Year 1 pay</span>
                  </div>
                </div>
                <ul className="text-xs text-[#555566] space-y-2.5 leading-relaxed pt-2">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-600 flex-shrink-0" /> Full technical & system design mock drills.
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-600 flex-shrink-0" /> 1-on-1 interview prep with senior FAANG mentors.
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-600 flex-shrink-0" /> Success fee payable within 3 months of 1st salary.
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <Link
                  href="/contact"
                  className="capsule-btn-primary w-full !py-3 !text-xs btn-shimmer"
                >
                  Choose Premium Plan <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
