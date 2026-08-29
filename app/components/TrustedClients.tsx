"use client";

import React from "react";

export const defaultClientLogos: string[] = [
  "https://framerusercontent.com/images/vRlMVcd1MmicJ9t5LsWOhee9iwo.png",
  "https://framerusercontent.com/images/1wvDdiubX6xWYsZB43JXAs6Vje4.png",
  "https://framerusercontent.com/images/i4SR0kJCha6bGQOCnT5DghPE.png",
  "https://framerusercontent.com/images/T6XRoD8cNpQqdJCq4NGf82RGJVQ.png",
  "https://framerusercontent.com/images/6fzKPiSTFaZLMY9pxIS6bZqCnI.png",
  "https://framerusercontent.com/images/LrB7SG6Pf0Qyo8nQt2vHGZgAg.png",
  "https://framerusercontent.com/images/KiHBaaTse93OTRmlSzGNpbuxXw4.png",
  "https://framerusercontent.com/images/VYVknS3K7ZDkhzOnhUpM0OMz1X0.png",
  "https://framerusercontent.com/images/3pc3KZPsrZ4baSUfyFZJV0pvE.png",
  "https://framerusercontent.com/images/2Y7k1FKpVWgXybFiWDcWsLlVM.png",
  "https://framerusercontent.com/images/7hM6O95Tt5pJJS87R8WxXp2SQc.png",
  "https://framerusercontent.com/images/1pF5JL1ALSclLCKquPGZNY9cNQ.png",
];

interface TrustedClientsProps {
  logosRef?: React.RefObject<HTMLDivElement | null>;
  clientLogos?: string[];
}

export default function TrustedClients({
  logosRef,
  clientLogos = defaultClientLogos,
}: TrustedClientsProps) {
  return (
    <section className="py-20 border-t border-white/5 bg-[#08000d]/60 relative z-10">
      <div ref={logosRef} className="max-w-6xl mx-auto px-4 md:px-8 text-center mb-12 reveal">
        <div className="inline-flex items-center gap-2 bg-purple-500/10 text-[#c68efd] border border-purple-500/20 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider w-fit mb-4">
          Company
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Meet Our Trusted Clients</h2>
      </div>

      {/* Infinite scrolling logo track */}
      <div className="w-full relative overflow-hidden py-4 mask-gradient">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#08000d] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#08000d] to-transparent z-10 pointer-events-none"></div>

        <div className="flex gap-12 animate-marquee whitespace-nowrap min-w-full">
          {clientLogos.map((logo, idx) => (
            <div key={idx} className="flex-shrink-0 w-36 h-16 flex items-center justify-center glass-card rounded-xl p-3 !shadow-none">
              <img
                src={logo}
                alt={`Partner Logo ${idx + 1}`}
                className="max-w-full max-h-full object-contain filter opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
          {clientLogos.map((logo, idx) => (
            <div key={`dup-${idx}`} className="flex-shrink-0 w-36 h-16 flex items-center justify-center glass-card rounded-xl p-3 !shadow-none">
              <img
                src={logo}
                alt={`Partner Logo Duplicate ${idx + 1}`}
                className="max-w-full max-h-full object-contain filter opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
