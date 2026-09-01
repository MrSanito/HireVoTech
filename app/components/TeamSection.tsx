"use client";

import React from "react";
import Link from "next/link";
import { Users, Mail, ArrowUpRight } from "lucide-react";
import { LinkedinIcon, TwitterIcon } from "./SocialIcons";

const teamMembers = [
  {
    name: "Emily Carter",
    role: "Senior Tech Recruiter",
    dept: "Software & Cloud Engineering",
    image: "https://mlnhaefbaoxh.i.optimole.com/w:600/h:600/q:mauto/f:best/https://kits.rometheme.net/projob/wp-content/uploads/sites/71/2025/06/Team-1.webp",
    bio: "Specializing in full-stack, DevOps, and cloud systems placements across Silicon Valley and European tech hubs.",
    linkedin: "#",
    twitter: "#",
    email: "emily@hirevotech.com"
  },
  {
    name: "Jason Lee",
    role: "Head of Executive Search",
    dept: "Leadership & VP Recruitment",
    image: "https://mlnhaefbaoxh.i.optimole.com/w:600/h:600/q:mauto/f:best/https://kits.rometheme.net/projob/wp-content/uploads/sites/71/2025/06/Team-2.webp",
    bio: "Ex-Google talent architect with 10+ years placing CTOs, Principal Architects, and Engineering Directors.",
    linkedin: "#",
    twitter: "#",
    email: "jason@hirevotech.com"
  },
  {
    name: "Amira Patel",
    role: "Lead Career Strategist",
    dept: "Candidate Coaching & AI Talent",
    image: "https://mlnhaefbaoxh.i.optimole.com/w:600/h:600/q:mauto/f:best/https://kits.rometheme.net/projob/wp-content/uploads/sites/71/2025/06/Team-3.webp",
    bio: "Certified interview coach who has guided 400+ candidates through FAANG and high-growth startup hiring loops.",
    linkedin: "#",
    twitter: "#",
    email: "amira@hirevotech.com"
  }
];

export default function TeamSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#F0F0FF] border border-[#4846D4]/20 text-[#4846D4] rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mx-auto">
            <Users size={14} className="text-[#4846D4]" />
            <span>Our Team</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0D0C41] tracking-tight">
            Meet the People Behind <br className="hidden sm:inline" />
            <span className="text-[#4846D4]">
              the Mission.
            </span>
          </h2>

          <p className="text-[#555566] text-sm md:text-base leading-relaxed">
            We’re more than just recruiters — we’re collaborators, innovators, and career architects dedicated to closing the global tech talent gap.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-3xl overflow-hidden border border-[#E1E2EE] p-5 shadow-md hover:shadow-xl hover:border-[#4846D4]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Member Photo */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/4.2] mb-5 bg-[#F2F3FC]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C41]/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

                  {/* Department Badge */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md border border-[#E1E2EE] rounded-full px-3 py-1 text-[11px] font-semibold text-[#0D0C41]">
                    {member.dept}
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-2 text-left">
                  <h3 className="text-xl font-bold text-[#0D0C41] group-hover:text-[#4846D4] transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-xs font-bold text-[#4846D4] uppercase tracking-wider">
                    {member.role}
                  </div>
                  <p className="text-xs text-[#555566] leading-relaxed pt-1 font-normal">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Social links & contact */}
              <div className="pt-5 mt-5 border-t border-[#E1E2EE] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <a
                    href={member.linkedin}
                    className="w-8 h-8 rounded-full bg-[#F2F3FC] hover:bg-[#4846D4] text-[#0D0C41] hover:text-white flex items-center justify-center transition-colors"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon size={14} />
                  </a>
                  <a
                    href={member.twitter}
                    className="w-8 h-8 rounded-full bg-[#F2F3FC] hover:bg-[#4846D4] text-[#0D0C41] hover:text-white flex items-center justify-center transition-colors"
                    aria-label="Twitter"
                  >
                    <TwitterIcon size={14} />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="w-8 h-8 rounded-full bg-[#F2F3FC] hover:bg-[#4846D4] text-[#0D0C41] hover:text-white flex items-center justify-center transition-colors"
                    aria-label="Email"
                  >
                    <Mail size={14} />
                  </a>
                </div>

                <Link
                  href="/about"
                  className="text-xs font-bold text-[#4846D4] hover:text-[#3735B8] flex items-center gap-1 hover:underline"
                >
                  View Profile <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Action */}
        <div className="text-center mt-12">
          <Link
            href="/about"
            className="capsule-btn-secondary !py-3 !px-8 !text-sm"
          >
            View Full Leadership Team <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
