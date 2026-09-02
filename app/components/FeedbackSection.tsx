"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Star, 
  CheckCircle2, 
  TrendingUp, 
  Sparkles, 
  ArrowUpRight,
  ChevronRight,
  ShieldCheck,
  Zap,
  Award
} from "lucide-react";

export interface CandidateFeedback {
  id: string;
  name: string;
  role: string;
  company: string;
  placedTime: string;
  offer: string;
  avatar: string;
  color: string;
  strategyTag: string;
  stars: number;
  highlight: string;
  review: string;
  date: string;
}

const candidateFeedbacks: CandidateFeedback[] = [
  {
    id: "1",
    name: "Udhayan K.",
    role: "Senior Software Engineer",
    company: "Series-B Fintech",
    placedTime: "Placed in 14 days",
    offer: "+$145,000",
    avatar: "UK",
    color: "from-[#4846D4] to-[#8482FF]",
    strategyTag: "Reverse Headhunting & Marketing",
    stars: 5,
    highlight: "Transformative collaboration & expert marketing",
    review: "I am writing to let you know how thankful I am for the exceptional service I received. The professionalism and expertise demonstrated by your team have been truly exemplary. A special thanks to Nilam Chauhan, our marketing specialist, whose efforts in connecting us with relevant companies resulted in significant success. Her approach and commitment to excellence were invaluable. Additionally, my career advisor Riya provided incredible guidance throughout my journey.",
    date: "August 2026"
  },
  {
    id: "2",
    name: "Shreya Shinde",
    role: "Business Analyst",
    company: "Enterprise Cloud Solutions",
    placedTime: "Placed in 19 days",
    offer: "+$98,000",
    avatar: "SS",
    color: "from-emerald-500 to-teal-400",
    strategyTag: "Mock Interviews & Strategy",
    stars: 5,
    highlight: "Landed business analyst role with full support",
    review: "I cannot thank you enough for all the guidance and support provided throughout my job search. From helping me prepare for interviews with mock sessions to guiding me on strategic questions, your insights were invaluable. More than that, the continuous encouragement kept me motivated through tough moments. Landing my Business Analyst role wouldn't have been possible without HireVoTech!",
    date: "July 2026"
  },
  {
    id: "3",
    name: "Prasham Parekh",
    role: "Cloud Architect",
    company: "US Tech Corp",
    placedTime: "Placed in 16 days",
    offer: "+$165,000",
    avatar: "PP",
    color: "from-purple-500 to-pink-400",
    strategyTag: "1st Job in USA & Direct Outreach",
    stars: 5,
    highlight: "First US tech placement achieved smoothly",
    review: "I wanted to take a moment to express my heartfelt gratitude for the incredible support I received throughout my job search journey. Thanks to expert advice and tireless efforts, I successfully landed my first job in the United States — a milestone that feels deeply meaningful. Nilam went above and beyond to understand my strengths, communicate clearly, and act as both a motivator and strategist.",
    date: "July 2026"
  },
  {
    id: "4",
    name: "Anonymous Candidate",
    role: "Finance & Tech Professional",
    company: "Bloomberg LP",
    placedTime: "Placed in 12 days",
    offer: "+$175,000",
    avatar: "AC",
    color: "from-amber-500 to-orange-400",
    strategyTag: "Cold Email Note to Bloomberg",
    stars: 5,
    highlight: "Targeted cold email note bypassed application queues",
    review: "I took this service and they helped me a lot. What sets them apart is their completely different strategy from normal agencies — they used custom cold email connection notes directly targeted to Bloomberg decision-makers to boost my application visibility and ensure it was selected. That unique approach helped me get placed significantly faster.",
    date: "August 2026"
  },
  {
    id: "5",
    name: "Divya Sharma",
    role: "Lead DevOps Engineer",
    company: "Global Scale Cloud",
    placedTime: "Placed in 21 days",
    offer: "+$170,000",
    avatar: "DS",
    color: "from-teal-500 to-emerald-400",
    strategyTag: "Salary Negotiation (+$25k Bump)",
    stars: 5,
    highlight: "Negotiated $25k higher compensation",
    review: "Not only did they connect me with incredible cloud infrastructure teams, but the salary negotiation coaching alone was worth every bit. They guided me through competing counter-offers and negotiated an extra $25,000 in base pay before signing.",
    date: "May 2026"
  },
  {
    id: "6",
    name: "Rohan Mehta",
    role: "Full-Stack Engineer",
    company: "AI Infrastructure Co.",
    placedTime: "Placed in 11 days",
    offer: "+$155,000",
    avatar: "RM",
    color: "from-blue-600 to-indigo-400",
    strategyTag: "Direct VP Outreach & Speed",
    stars: 5,
    highlight: "In front of Engineering VPs within 2 weeks",
    review: "The resume transformation and reverse-headhunting strategy put my profile directly in front of Engineering VPs. I skipped automated applicant tracking screeners and had 4 hiring manager rounds scheduled within 10 days. The deferred fee model gave me total peace of mind.",
    date: "June 2026"
  }
];

export default function FeedbackSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className="py-24 relative overflow-hidden bg-white" id="feedbacks">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#4846D4]/3 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#F0F0FF] border border-[#4846D4]/20 text-[#4846D4] rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mx-auto">
            <Sparkles size={14} className="text-[#4846D4]" />
            <span>Candidate Success Stories</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0D0C41] tracking-tight">
            Real Stories. Real Offers. <br className="hidden sm:inline" />
            <span className="text-[#4846D4]">
              Proven Strategies.
            </span>
          </h2>

          <p className="text-[#555566] text-sm md:text-base leading-relaxed">
            Read authentic feedback from candidates who used our custom outreach, cold connection notes, and interview coaching to accelerate their careers.
          </p>
        </div>

        {/* Live Trust Metrics Bar */}
        <div className="bg-[#F2F3FC] border border-[#E1E2EE] rounded-3xl p-5 sm:p-8 mb-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center shadow-xs">
          <div className="space-y-1">
            <div className="flex items-center justify-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} className="fill-amber-400" />
              ))}
            </div>
            <div className="text-xl sm:text-2xl font-black text-[#0D0C41]">4.9 / 5.0</div>
            <div className="text-[11px] sm:text-xs text-[#555566] font-medium">Candidate Satisfaction</div>
          </div>

          <div className="space-y-1">
            <div className="text-[11px] sm:text-xs font-bold text-[#4846D4] flex items-center justify-center gap-1">
              <Zap size={13} />
              <span>Speed to Placement</span>
            </div>
            <div className="text-xl sm:text-2xl font-black text-[#0D0C41]">18 Days</div>
            <div className="text-[11px] sm:text-xs text-[#555566] font-medium">Average Time to Offer</div>
          </div>

          <div className="space-y-1">
            <div className="text-[11px] sm:text-xs font-bold text-emerald-600 flex items-center justify-center gap-1">
              <TrendingUp size={13} />
              <span>Comp Growth</span>
            </div>
            <div className="text-xl sm:text-2xl font-black text-[#0D0C41]">+$38k</div>
            <div className="text-[11px] sm:text-xs text-[#555566] font-medium">Avg. Salary Increase</div>
          </div>

          <div className="space-y-1">
            <div className="text-[11px] sm:text-xs font-bold text-purple-600 flex items-center justify-center gap-1">
              <ShieldCheck size={13} />
              <span>Guaranteed</span>
            </div>
            <div className="text-xl sm:text-2xl font-black text-[#0D0C41]">100%</div>
            <div className="text-[11px] sm:text-xs text-[#555566] font-medium">Pay Only When Placed</div>
          </div>
        </div>

        {/* Clean 6-Card Grid (3 cols x 2 rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {candidateFeedbacks.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div
                key={item.id}
                className="group bg-white rounded-3xl border border-[#E1E2EE] p-5 sm:p-6 shadow-md hover:shadow-xl hover:border-[#4846D4]/40 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Top color accent stripe */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`}></div>

                <div>
                  {/* Strategy Badge & Offer Tag */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1 bg-[#F0F0FF] text-[#4846D4] border border-[#4846D4]/20 rounded-full px-2.5 py-0.5 text-[10px] sm:text-[10.5px] font-bold truncate max-w-[170px] sm:max-w-[210px]">
                      <Zap size={10} className="flex-shrink-0" />
                      <span className="truncate">{item.strategyTag}</span>
                    </span>
                    <span className="text-[11px] sm:text-xs font-extrabold text-[#4846D4] bg-[#F2F3FC] border border-[#E1E2EE] px-2.5 py-1 rounded-lg flex-shrink-0">
                      {item.offer}
                    </span>
                  </div>

                  {/* Candidate Header */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-black text-base shadow-md flex-shrink-0`}>
                      {item.avatar}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base font-bold text-[#0D0C41] group-hover:text-[#4846D4] transition-colors truncate">
                        {item.name}
                      </h3>
                      <p className="text-xs text-[#555566] font-medium truncate">
                        {item.role}
                      </p>
                      <div className="mt-1 flex items-center gap-1.5 text-[11px] font-bold text-emerald-700">
                        <CheckCircle2 size={11} className="text-emerald-600 flex-shrink-0" />
                        <span className="truncate">Placed at {item.company}</span>
                      </div>
                    </div>
                  </div>

                  {/* Star Rating & Highlight */}
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} size={13} className="text-amber-400 fill-amber-400" />
                    ))}
                    <span className="text-[10px] font-bold text-[#555566] ml-1.5">{item.placedTime}</span>
                  </div>

                  <div className="text-xs font-bold text-[#0D0C41] mb-2">
                    &ldquo;{item.highlight}&rdquo;
                  </div>

                  {/* Review Text */}
                  <div className="relative text-xs text-[#555566] leading-relaxed font-normal">
                    <p className={isExpanded ? "" : "line-clamp-4"}>
                      {item.review}
                    </p>
                  </div>
                </div>

                {/* Footer Controls: Read More / Date */}
                <div className="pt-4 mt-4 border-t border-[#E1E2EE] flex items-center justify-between text-xs">
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : item.id)}
                    className="text-[11px] font-bold text-[#4846D4] hover:text-[#3735B8] hover:underline cursor-pointer flex items-center gap-0.5"
                  >
                    <span>{isExpanded ? "Show Less" : "Read Full Story"}</span>
                    <ChevronRight size={12} className={isExpanded ? "rotate-90 transition-transform" : ""} />
                  </button>

                  <span className="text-[10.5px] text-[#888899] font-medium">
                    {item.date}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#0D0C41] via-[#1E1B6E] to-[#4846D4] rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-radial from-white/10 to-transparent pointer-events-none"></div>

          <div className="space-y-3 text-left max-w-xl relative z-10">
            <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs font-semibold">
              <Award size={13} className="text-amber-400" />
              <span>Ready for your own success story?</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Let&apos;s Accelerate Your Tech Career Today.
            </h3>
            <p className="text-xs sm:text-sm text-[#D1D3F8] leading-relaxed">
              Zero upfront fees. 1-on-1 interview preparation, executive marketing, and deferred placement fees.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto relative z-10">
            <Link
              href="/plans"
              className="w-full sm:w-auto bg-white text-[#4846D4] hover:bg-[#F2F3FC] px-8 py-3.5 rounded-full text-sm font-bold shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <span>View Plans & Pricing</span>
              <ArrowUpRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/30 text-white px-7 py-3.5 rounded-full text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <span>Talk to an Advisor</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
