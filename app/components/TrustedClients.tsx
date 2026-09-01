"use client";

import React from "react";
import { Building2, Cpu, Cloud, Database, Network, Shield, Zap, Globe, Server, Code } from "lucide-react";

export const clientCompanies = [
  { name: "ProJob Tech", icon: Cpu, desc: "AI Infrastructure" },
  { name: "CloudScale Systems", icon: Cloud, desc: "Cloud & DevOps" },
  { name: "Apex Labs", icon: Zap, desc: "FinTech Platform" },
  { name: "DevCore Global", icon: Code, desc: "Enterprise SaaS" },
  { name: "DataMatrix Corp", icon: Database, desc: "Big Data & ML" },
  { name: "CyberVenture", icon: Shield, desc: "Cybersecurity" },
  { name: "Global Networks", icon: Globe, desc: "Telecom & IoT" },
  { name: "ServerStack", icon: Server, desc: "High Perf Computing" },
  { name: "Alpha Edge", icon: Network, desc: "Edge Computing" },
];

interface TrustedClientsProps {
  logosRef?: React.RefObject<HTMLDivElement | null>;
}

export default function TrustedClients({ logosRef }: TrustedClientsProps) {
  return (
    <section className="py-16 border-y border-[#E1E2EE] bg-[#F2F3FC] relative z-10 overflow-hidden">
      <div ref={logosRef} className="max-w-6xl mx-auto px-4 md:px-8 text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-[#F0F0FF] border border-[#4846D4]/20 text-[#4846D4] rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider mx-auto mb-3">
          <Building2 size={13} className="text-[#4846D4]" />
          <span>Our Partner Network</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0D0C41] tracking-tight">
          Trusted by 60+ Fast-Growing Tech Enterprises & Startups
        </h2>
      </div>

      {/* Infinite scrolling logo track */}
      <div className="w-full relative overflow-hidden py-2">
        <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-[#F2F3FC] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-[#F2F3FC] to-transparent z-10 pointer-events-none"></div>

        <div className="flex gap-6 animate-marquee whitespace-nowrap min-w-full items-center">
          {clientCompanies.map((client, idx) => {
            const IconComponent = client.icon;
            return (
              <div
                key={`logo-1-${idx}`}
                className="flex-shrink-0 px-5 py-3.5 flex items-center gap-3 bg-white rounded-2xl border border-[#E1E2EE] shadow-xs hover:border-[#4846D4]/40 hover:shadow-md transition-all group cursor-default"
              >
                <div className="w-9 h-9 rounded-xl bg-[#F0F0FF] text-[#4846D4] flex items-center justify-center group-hover:bg-[#4846D4] group-hover:text-white transition-colors flex-shrink-0">
                  <IconComponent size={18} />
                </div>
                <div className="text-left">
                  <div className="text-sm font-extrabold text-[#0D0C41] group-hover:text-[#4846D4] transition-colors font-sans">
                    {client.name}
                  </div>
                  <div className="text-[10px] text-[#555566] font-medium">
                    {client.desc}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Duplicated for seamless infinite loop */}
          {clientCompanies.map((client, idx) => {
            const IconComponent = client.icon;
            return (
              <div
                key={`logo-2-${idx}`}
                className="flex-shrink-0 px-5 py-3.5 flex items-center gap-3 bg-white rounded-2xl border border-[#E1E2EE] shadow-xs hover:border-[#4846D4]/40 hover:shadow-md transition-all group cursor-default"
              >
                <div className="w-9 h-9 rounded-xl bg-[#F0F0FF] text-[#4846D4] flex items-center justify-center group-hover:bg-[#4846D4] group-hover:text-white transition-colors flex-shrink-0">
                  <IconComponent size={18} />
                </div>
                <div className="text-left">
                  <div className="text-sm font-extrabold text-[#0D0C41] group-hover:text-[#4846D4] transition-colors font-sans">
                    {client.name}
                  </div>
                  <div className="text-[10px] text-[#555566] font-medium">
                    {client.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
