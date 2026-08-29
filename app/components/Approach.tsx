"use client";

import React from "react";
import { Award, TrendingUp, Briefcase, Sparkles } from "lucide-react";

export interface ApproachCardItem {
  tag: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export const defaultApproachCards: ApproachCardItem[] = [
  {
    tag: "Profile",
    title: "Profile Optimization",
    desc: "We strengthen your professional presence with resume optimization and LinkedIn profile management.",
    icon: <Award className="w-5 h-5 text-[#c19a4f]" />,
  },
  {
    tag: "Marketing",
    title: "Strategic Job Marketing",
    desc: "Our recruitment experts actively market your profile and submit applications through leading job portals and company career websites.",
    icon: <TrendingUp className="w-5 h-5 text-[#c19a4f]" />,
  },
  {
    tag: "Support",
    title: "Career Support",
    desc: "From application tracking to placement assistance, we stay with you throughout your job search journey.",
    icon: <Briefcase className="w-5 h-5 text-[#c19a4f]" />,
  },
  {
    tag: "Preparation",
    title: "Interview & Technical Preparation",
    desc: "Premium members receive personalized interview coaching, mock interview sessions, and technical training to maximize their success.",
    icon: <Sparkles className="w-5 h-5 text-[#c19a4f]" />,
  },
];

interface ApproachProps {
  headingRef?: React.RefObject<HTMLDivElement | null>;
  cardsRef?: React.RefObject<HTMLDivElement | null>;
  cards?: ApproachCardItem[];
}

export default function Approach({
  headingRef,
  cardsRef,
  cards = defaultApproachCards,
}: ApproachProps) {
  return (
    <section id="approach" className="py-24 border-t border-white/5 bg-[#08000d]/60 relative z-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div ref={headingRef} className="text-center mb-16 reveal">
          <span className="text-xs uppercase tracking-widest text-[#c19a4f] font-semibold mb-3 block">
            OUR APPROACH
          </span>
          <h3 className="text-2xl md:text-4xl font-bold text-white">
            Four ways we move your search forward
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children" ref={cardsRef}>
          {cards.map((card, idx) => (
            <div key={idx} className="glass-card rounded-2xl group cursor-default">
              <div className="card-body p-8">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#c19a4f]/10 border border-[#c19a4f]/20 flex items-center justify-center group-hover:bg-[#c19a4f]/20 group-hover:scale-110 transition-all duration-300">
                      {card.icon}
                    </div>
                    <span className="badge badge-outline border-[#c19a4f] text-[#c19a4f] font-mono px-3 py-2 font-bold uppercase tracking-wider text-xs">
                      {card.tag}
                    </span>
                  </div>
                </div>
                <h4 className="card-title text-xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                  {card.title}
                </h4>
                <p className="text-neutral-400 leading-relaxed text-sm">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
