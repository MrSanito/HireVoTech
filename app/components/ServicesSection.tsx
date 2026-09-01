"use client";

import React from "react";
import Link from "next/link";
import { 
  Users, 
  Layers, 
  Award, 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles,
  Target
} from "lucide-react";

const services = [
  {
    id: "talent-sourcing",
    title: "Talent Sourcing",
    tagline: "Active Headhunting of the Top 1%",
    desc: "We deploy AI-assisted search and direct headhunting across proprietary developer networks to locate specialized engineering talent before they enter the open market.",
    icon: Target,
    accentColor: "bg-[#4846D4]",
    points: [
      "Custom candidate pipeline building",
      "Rigorous technical & behavioral vetting",
      "72-hour shortlist turnaround"
    ],
    linkText: "Explore Sourcing",
    href: "/partner-company"
  },
  {
    id: "executive-search",
    title: "Executive Search",
    tagline: "Leadership & Senior Tech Roles",
    desc: "Finding leaders who can scale engineering orgs from Seed to IPO. We recruit VP of Engineering, CTO, Lead Architect, and Director-level talent.",
    icon: Users,
    accentColor: "bg-[#0D0C41]",
    points: [
      "Confidential executive recruitment",
      "In-depth leadership track record audit",
      "Executive compensation benchmarking"
    ],
    linkText: "Executive Solutions",
    href: "/partner-company"
  },
  {
    id: "job-matching",
    title: "Job Matching",
    tagline: "Precision Role Alignment",
    desc: "For job seekers: We market your technical profile directly to hiring managers, skipping the ATS black hole and guaranteeing high-visibility interviews.",
    icon: Layers,
    accentColor: "bg-[#4846D4]",
    points: [
      "Resume & portfolio overhaul",
      "Direct submission to hiring directors",
      "Salary negotiation advisory"
    ],
    linkText: "Candidate Matching",
    href: "/plans"
  },
  {
    id: "employer-branding",
    title: "Employer Branding",
    tagline: "Positioning You as Top Destination",
    desc: "Helping growing tech companies articulate their culture, benefits, and tech stack to attract elite engineers who receive dozens of recruiter inboxes weekly.",
    icon: Award,
    accentColor: "bg-[#0D0C41]",
    points: [
      "Employer value proposition (EVP)",
      "Technical job description optimization",
      "Candidate journey audit"
    ],
    linkText: "Brand Acceleration",
    href: "/partner-company"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#F2F3FC] border-y border-[#E1E2EE]">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 right-[-5%] w-[600px] h-[400px] bg-[#4846D4]/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#F0F0FF] border border-[#4846D4]/20 text-[#4846D4] rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mx-auto">
            <Sparkles size={14} className="text-[#4846D4]" />
            <span>Services</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0D0C41] tracking-tight">
            Connecting Ambition with <br className="hidden sm:inline" />
            <span className="text-[#4846D4]">
              Opportunity.
            </span>
          </h2>

          <p className="text-[#555566] text-sm md:text-base leading-relaxed">
            We match driven individuals with roles that align with their goals. Turn your ambition into action with our specialized tech recruitment services.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((srv, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-3xl p-8 border border-[#E1E2EE] shadow-md hover:shadow-xl hover:border-[#4846D4]/40 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Card top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#4846D4] opacity-80 group-hover:opacity-100 transition-opacity"></div>

              <div className="space-y-5">
                {/* Icon & Tag */}
                <div className="flex items-center justify-between">
                  <div className={`w-14 h-14 rounded-2xl ${srv.accentColor} flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform`}>
                    <srv.icon size={26} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#4846D4] bg-[#F0F0FF] border border-[#4846D4]/20 rounded-full px-3 py-1">
                    Pillar 0{idx + 1}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-2xl font-bold text-[#0D0C41] group-hover:text-[#4846D4] transition-colors">
                    {srv.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#555566] mt-1">
                    {srv.tagline}
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#555566] text-sm leading-relaxed font-normal">
                  {srv.desc}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2.5 pt-2 border-t border-[#E1E2EE]">
                  {srv.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-2.5 text-xs text-[#555566]">
                      <CheckCircle2 size={15} className="text-[#4846D4] flex-shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-[#E1E2EE] flex items-center justify-between">
                <Link
                  href={srv.href}
                  className="text-xs font-bold uppercase tracking-wider text-[#0D0C41] group-hover:text-[#4846D4] flex items-center gap-2 transition-colors"
                >
                  <span>{srv.linkText}</span>
                  <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-[#4846D4]" />
                </Link>

                <div className="w-8 h-8 rounded-full bg-[#F2F3FC] flex items-center justify-center text-[#0D0C41] group-hover:bg-[#4846D4] group-hover:text-white transition-all">
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
