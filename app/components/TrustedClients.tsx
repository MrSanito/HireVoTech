"use client";

import React from "react";
import { Building2 } from "lucide-react";

export const defaultClientLogos: { name: string; url: string }[] = [
  { name: "ProJob Tech", url: "https://mlnhaefbaoxh.i.optimole.com/w:600/h:200/q:mauto/f:best/https://kits.rometheme.net/projob/wp-content/uploads/sites/71/2025/06/Client-1.png" },
  { name: "Venture Corp", url: "https://mlnhaefbaoxh.i.optimole.com/w:600/h:200/q:mauto/f:best/https://kits.rometheme.net/projob/wp-content/uploads/sites/71/2025/06/Client-2.png" },
  { name: "Apex Labs", url: "https://mlnhaefbaoxh.i.optimole.com/w:600/h:200/q:mauto/f:best/https://kits.rometheme.net/projob/wp-content/uploads/sites/71/2025/06/Client-3.png" },
  { name: "CloudScale", url: "https://mlnhaefbaoxh.i.optimole.com/w:600/h:200/q:mauto/f:best/https://kits.rometheme.net/projob/wp-content/uploads/sites/71/2025/06/Client-4.png" },
  { name: "Global Networks", url: "https://mlnhaefbaoxh.i.optimole.com/w:600/h:200/q:mauto/f:best/https://kits.rometheme.net/projob/wp-content/uploads/sites/71/2025/06/Client-5.png" },
  { name: "Alpha Tech", url: "https://mlnhaefbaoxh.i.optimole.com/w:600/h:200/q:mauto/f:best/https://kits.rometheme.net/projob/wp-content/uploads/sites/71/2025/06/Client-6.png" },
  { name: "ScaleForce", url: "https://framerusercontent.com/images/vRlMVcd1MmicJ9t5LsWOhee9iwo.png" },
  { name: "DevCore", url: "https://framerusercontent.com/images/1wvDdiubX6xWYsZB43JXAs6Vje4.png" },
  { name: "NextGen", url: "https://framerusercontent.com/images/i4SR0kJCha6bGQOCnT5DghPE.png" },
  { name: "CyberMatrix", url: "https://framerusercontent.com/images/T6XRoD8cNpQqdJCq4NGf82RGJVQ.png" }
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

        <div className="flex gap-8 animate-marquee whitespace-nowrap min-w-full items-center">
          {defaultClientLogos.map((logo, idx) => (
            <div
              key={`logo-1-${idx}`}
              className="flex-shrink-0 w-44 h-20 flex items-center justify-center bg-white rounded-2xl p-4 border border-[#E1E2EE] shadow-xs hover:border-[#4846D4]/40 hover:shadow-md transition-all"
            >
              <img
                src={logo.url}
                alt={logo.name}
                className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}

          {/* Duplicated for seamless loop */}
          {defaultClientLogos.map((logo, idx) => (
            <div
              key={`logo-2-${idx}`}
              className="flex-shrink-0 w-44 h-20 flex items-center justify-center bg-white rounded-2xl p-4 border border-[#E1E2EE] shadow-xs hover:border-[#4846D4]/40 hover:shadow-md transition-all"
            >
              <img
                src={logo.url}
                alt={logo.name}
                className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
