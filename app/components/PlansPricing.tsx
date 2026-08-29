"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";

export interface ComparisonRow {
  name: string;
  basic: boolean;
  premium: boolean;
}

export const defaultComparisonTable: ComparisonRow[] = [
  { name: "Profile Marketing", basic: true, premium: true },
  { name: "Resume Preparation & Optimization", basic: true, premium: true },
  { name: "LinkedIn Profile Management", basic: true, premium: true },
  { name: "Daily Job Applications", basic: true, premium: true },
  { name: "Applications through Leading Job Portals", basic: true, premium: true },
  { name: "Company Career Website Applications", basic: true, premium: true },
  { name: "Background Verification (BGC) Assistance", basic: true, premium: true },
  { name: "Technical Training", basic: false, premium: true },
  { name: "Interview Support", basic: false, premium: true },
  { name: "Mock Interview Sessions", basic: false, premium: true },
  { name: "Personalized Interview Preparation", basic: false, premium: true },
  { name: "Dedicated Career Guidance", basic: false, premium: true },
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
      <section id="plans" className="py-24 border-t border-white/5 bg-[#08000d]/60 relative z-10 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div ref={plansRef} className="text-center mb-12 reveal">
            <span className="text-xs uppercase tracking-widest text-[#c19a4f] font-semibold mb-3 block">
              SUBSCRIPTION PLANS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Basic and Premium, side by side
            </h2>
          </div>

          <div className="glass-card rounded-2xl overflow-hidden shadow-2xl">
            {/* Table Navigation and Tabs */}
            <div className="p-6 bg-white/[0.01] border-b border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="text-lg font-bold text-white font-mono">Plan Features Comparison</h3>
              </div>
              <div className="tabs tabs-boxed bg-[#08000d] p-1 border border-white/5 rounded-lg">
                <button
                  onClick={() => setSelectedPlanTab("both")}
                  className={`tab tab-xs sm:tab-sm font-medium transition-all duration-300 ${
                    selectedPlanTab === "both" ? "tab-active bg-[#a020f0] text-white" : "text-neutral-400 hover:text-white"
                  }`}
                >
                  Both Plans
                </button>
                <button
                  onClick={() => setSelectedPlanTab("premium")}
                  className={`tab tab-xs sm:tab-sm font-medium transition-all duration-300 ${
                    selectedPlanTab === "premium" ? "tab-active bg-[#a020f0] text-white" : "text-neutral-400 hover:text-white"
                  }`}
                >
                  Premium Only
                </button>
                <button
                  onClick={() => setSelectedPlanTab("basic")}
                  className={`tab tab-xs sm:tab-sm font-medium transition-all duration-300 ${
                    selectedPlanTab === "basic" ? "tab-active bg-[#a020f0] text-white" : "text-neutral-400 hover:text-white"
                  }`}
                >
                  Basic Only
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="table table-zebra w-full text-left">
                <thead>
                  <tr className="bg-white/[0.02] border-b border-white/5 text-neutral-300 font-semibold font-mono uppercase tracking-wider text-xs">
                    <th className="py-4 px-6">Features</th>
                    {selectedPlanTab !== "premium" && <th className="py-4 px-6 text-center">Basic</th>}
                    {selectedPlanTab !== "basic" && <th className="py-4 px-6 text-center text-[#c19a4f]">Premium</th>}
                  </tr>
                </thead>
                <tbody className="text-neutral-300">
                  {comparisonTable.map((item, idx) => (
                    <tr key={idx} className="border-b border-white/5 hover:bg-white/[0.03] transition-colors">
                      <td className="font-medium py-4 px-6 text-white">{item.name}</td>
                      {selectedPlanTab !== "premium" && (
                        <td className="text-center py-4 px-6">
                          {item.basic ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/20">
                              <Check size={14} className="text-emerald-400" />
                            </span>
                          ) : (
                            <span className="text-neutral-600">—</span>
                          )}
                        </td>
                      )}
                      {selectedPlanTab !== "basic" && (
                        <td className="text-center py-4 px-6">
                          {item.premium ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/20">
                              <Check size={14} className="text-emerald-400" />
                            </span>
                          ) : (
                            <span className="text-neutral-600">—</span>
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
      <section className="py-24 border-t border-white/5 bg-[#08000d]/40 relative z-10 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div ref={investRef} className="text-center mb-16 reveal">
            <span className="text-xs uppercase tracking-widest text-[#c19a4f] font-semibold mb-3 block">
              INVESTMENT PLANS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
              What it costs to work with us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Basic Card */}
            <div className="glass-card rounded-2xl shadow-xl group">
              <div className="card-body p-8">
                <span className="badge bg-white/5 text-neutral-300 border-none font-bold uppercase tracking-wider text-xs px-3 py-2 mb-4">
                  Basic Plan
                </span>
                <div className="divider my-2 border-white/5"></div>
                <div className="space-y-4 my-6">
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-400">Upfront Fee</span>
                    <span className="text-2xl font-bold text-[#c19a4f]">USD $1,500</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-400">Offer Acceptance Fee</span>
                    <span className="text-lg font-semibold text-white">USD $1,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-400">Success Fee</span>
                    <span className="text-lg font-semibold text-emerald-400">12% of Year 1 pay</span>
                  </div>
                </div>
                <div className="divider my-2 border-white/5"></div>
                <ul className="text-xs text-neutral-400 space-y-2 leading-relaxed">
                  <li className="flex items-center gap-2">
                    <Check size={12} className="text-emerald-400" /> Payable after receiving your first salary.
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={12} className="text-emerald-400" /> EMI options available.
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={12} className="text-emerald-400" /> Success fee payable within 3 months.
                  </li>
                </ul>
              </div>
            </div>

            {/* Premium Card */}
            <div className="glass-card rounded-2xl relative overflow-hidden animate-border-glow !border-2 !border-[#a020f0] group">
              <div className="absolute top-0 right-0 bg-[#a020f0] text-white text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-bl-lg">
                RECOMMENDED
              </div>
              {/* Gradient glow inside */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#a020f0]/5 via-transparent to-[#a020f0]/3 pointer-events-none"></div>
              <div className="card-body p-8 relative z-10">
                <span className="badge bg-[#a020f0]/20 text-[#c68efd] border-none font-bold uppercase tracking-wider text-xs px-3 py-2 mb-4">
                  Premium Plan
                </span>
                <div className="divider my-2 border-white/5"></div>
                <div className="space-y-4 my-6">
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-400">Upfront Fee</span>
                    <span className="text-2xl font-bold text-[#c19a4f]">USD $3,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-400">Offer Acceptance Fee</span>
                    <span className="text-lg font-semibold text-white">USD $2,500</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-400">Success Fee</span>
                    <span className="text-lg font-semibold text-emerald-400">10% of Year 1 pay</span>
                  </div>
                </div>
                <div className="divider my-2 border-white/5"></div>
                <ul className="text-xs text-neutral-400 space-y-2 leading-relaxed">
                  <li className="flex items-center gap-2">
                    <Check size={12} className="text-emerald-400" /> Payable after receiving your first salary.
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={12} className="text-emerald-400" /> EMI options available.
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={12} className="text-emerald-400" /> Success fee payable within 3 months.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
