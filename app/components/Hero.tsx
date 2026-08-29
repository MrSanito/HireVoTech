"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export interface HeroFeatureCard {
  img: string;
  title: string;
  desc: string;
}

const defaultFeatureCards: HeroFeatureCard[] = [
  {
    img: "https://framerusercontent.com/images/k0aZSS1SJs2LleqVwNznKWtiFA.png",
    title: "Professional Resume Preparation",
    desc: "Create a professional resume aligned with current industry standards.",
  },
  {
    img: "https://framerusercontent.com/images/PkhRYJ5u5eslClg3ilBjF3akW4.png",
    title: "Consultation and Marketing",
    desc: "Exceed Expectations with dedicated Team working on your Job search",
  },
  {
    img: "https://framerusercontent.com/images/tR6qj9WQxQ4wrAZHo3UTh2X44Y.png",
    title: "Training and Interview Preparation",
    desc: "Empower your career journey through professional interview preparation training.",
  },
];

interface HeroProps {
  featureCards?: HeroFeatureCard[];
}

export default function Hero({ featureCards = defaultFeatureCards }: HeroProps) {
  return (
    <section className="relative pt-12 pb-16 md:pt-24 md:pb-24 px-4 md:px-8 w-full min-h-auto md:min-h-[90vh] flex flex-col items-center justify-start md:justify-center text-center z-10 overflow-hidden">
      {/* Full-width Hero Background Image */}
      <div className="absolute inset-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <img
          src="/Hero.png"
          alt="HireVoTech Hero Background"
          className="w-full h-full object-cover object-top md:object-center opacity-40 md:opacity-45 filter contrast-105"
        />
        {/* Subtle edge fade transitions */}
        <div className="absolute inset-x-0 bottom-0 h-24 md:h-32 bg-gradient-to-t from-[#08000d] to-transparent"></div>
        <div className="absolute inset-x-0 top-0 h-16 md:h-24 bg-gradient-to-b from-[#08000d] to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col items-center w-full">
        {/* Hero Tag */}
        <div className="hero-animate inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#ff4fd8]/40 transition-all rounded-full p-1 pl-3 md:pl-4 pr-1 mb-5 md:mb-8 max-w-full shadow-lg shadow-purple-950/20">
          <span className="text-[11px] md:text-xs text-neutral-300 font-medium truncate max-w-[210px] sm:max-w-xs md:max-w-none">
            Save time and effort with our expert-driven solutions.
          </span>
          <a
            href="#plans"
            className="btn btn-xs bg-[#a020f0] hover:bg-[#8019c0] text-white border-none rounded-full flex items-center gap-1 font-semibold px-2.5 md:px-3 btn-shimmer text-[11px]"
          >
            Get Started <ArrowRight size={11} />
          </a>
        </div>

        {/* Eyebrow */}
        <span className="hero-animate-delay-1 text-[11px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.35em] text-[#ff4fd8] font-semibold mb-3 md:mb-4 block drop-shadow-[0_0_18px_rgba(255,79,216,0.35)]">
          RECRUITMENT & CAREER PARTNERS
        </span>

        {/* Headline */}
        <h1 className="hero-animate-delay-2 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-gradient-to-b from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent max-w-4xl leading-[1.15] md:leading-[1.1] mb-3 md:mb-4 animate-gradient-text drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] px-2">
          Where Passion Meets Next-Gen Technologies
        </h1>

        {/* Subheading */}
        <h2 className="hero-animate-delay-3 text-base sm:text-lg md:text-2xl font-semibold text-[#ff4fd8] mb-4 md:mb-6 drop-shadow-[0_0_20px_rgba(255,79,216,0.4)] px-2">
          Your Career. Our Commitment.
        </h2>

        {/* Description */}
        <p className="hero-animate-delay-4 text-sm sm:text-base md:text-xl text-neutral-300 max-w-3xl font-light mb-8 md:mb-12 leading-relaxed drop-shadow px-2">
          Whether you&apos;re searching for your next opportunity or aiming to advance your career,
          HireVoTech provides personalized recruitment and career support to help you achieve your professional goals.
        </p>

        {/* Talent & Opportunity Connector */}
        <div className="hero-animate-delay-5 w-full max-w-3xl glass-card rounded-2xl p-5 sm:p-6 md:p-8 relative mb-10 md:mb-20 shadow-2xl backdrop-blur-xl border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 relative z-10">
            {/* Talent node */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-2.5 mb-1.5 md:mb-2">
                <span className="w-3.5 h-3.5 md:w-4 md:h-4 rounded-full border-4 border-[#c19a4f] bg-[#08000d] animate-pulse-ring"></span>
                <h3 className="text-base sm:text-lg md:text-xl font-bold tracking-widest uppercase text-white font-mono">TALENT</h3>
              </div>
              <p className="text-xs md:text-sm text-neutral-400">Skills, ambition, experience</p>
            </div>

            {/* Opportunity node */}
            <div className="flex flex-col items-center md:items-end text-center md:text-right">
              <div className="flex items-center gap-2.5 mb-1.5 md:mb-2 justify-end">
                <h3 className="text-base sm:text-lg md:text-xl font-bold tracking-widest uppercase text-white font-mono">OPPORTUNITY</h3>
                <span className="w-3.5 h-3.5 md:w-4 md:h-4 rounded-full border-4 border-emerald-500 bg-[#08000d] animate-pulse-ring"></span>
              </div>
              <p className="text-xs md:text-sm text-neutral-400">The right role, right employer</p>
            </div>
          </div>

          {/* Animated Connector Line — desktop only */}
          <div className="absolute top-1/2 left-8 right-8 hidden md:block -translate-y-1/2 overflow-hidden">
            <div className="h-[2px] bg-gradient-to-r from-[#c19a4f] via-[#ff4fd8] to-emerald-500 animate-draw-line"></div>
          </div>
        </div>

        {/* 3 Core feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full text-left">
          {featureCards.map((card, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl shadow-xl group cursor-default hover:shadow-[0_0_30px_-8px_rgba(255,79,216,0.25)] transition-shadow duration-500"
              style={{ animationDelay: `${0.8 + idx * 0.15}s` }}
            >
              <div className="card-body p-5 sm:p-6 md:p-8 flex flex-col gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 group-hover:bg-[#ff4fd8]/10 group-hover:border-[#ff4fd8]/40 transition-all duration-300 group-hover:scale-110">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-6 h-6 md:w-7 md:h-7 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-white mb-1.5 md:mb-2 font-mono group-hover:text-[#ff9fe6] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">{card.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
