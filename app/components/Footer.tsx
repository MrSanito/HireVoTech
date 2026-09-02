"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  Send, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin
} from "lucide-react";
import { LinkedinIcon, TwitterIcon, InstagramIcon, GithubIcon } from "./SocialIcons";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
      }, 3500);
    }
  };

  return (
    <footer className="relative bg-[#F2F3FC] border-t border-[#E1E2EE] pt-20 pb-12 overflow-hidden text-[#0D0C41]">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#4846D4]/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 space-y-16">
        {/* Top Newsletter & Brand statement banner */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#E1E2EE] shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-left max-w-xl space-y-2">
            <div className="inline-flex items-center gap-2 bg-[#F0F0FF] text-[#4846D4] border border-[#4846D4]/20 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider">
              <Sparkles size={13} className="text-[#4846D4]" />
              <span>Newsletter</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0D0C41]">
              Work With Purpose. Grow With Us.
            </h3>
            <p className="text-xs sm:text-sm text-[#555566] leading-relaxed font-normal">
              Subscribe to get the latest tech hiring insights, salary trends, and featured executive job alerts directly in your inbox.
            </p>
          </div>

          <div className="w-full lg:max-w-md">
            {subscribed ? (
              <div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-700 text-sm font-semibold animate-fadeIn shadow-xs">
                <CheckCircle2 size={20} className="text-emerald-600 flex-shrink-0" />
                <span>Thank you! You have successfully subscribed to our weekly newsletter.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 bg-[#F2F3FC] border border-[#E1E2EE] p-1.5 rounded-2xl sm:rounded-full shadow-inner focus-within:border-[#4846D4] focus-within:bg-white transition-all">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent px-5 py-3 text-sm text-[#0D0C41] placeholder-[#838181] focus:outline-none font-medium"
                />
                <button
                  type="submit"
                  className="capsule-btn-primary !py-3 !px-7 !text-xs whitespace-nowrap btn-shimmer flex items-center justify-center gap-2 font-bold cursor-pointer"
                >
                  <span>Subscribe</span>
                  <Send size={13} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-2xl bg-[#4846D4] flex items-center justify-center shadow-[0_0_20px_rgba(72,70,212,0.3)]">
                <Sparkles size={18} className="text-white" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-[#0D0C41] font-sans">
                Hire<span className="text-[#4846D4]">Vo</span>Tech
              </span>
            </Link>

            <p className="text-xs text-[#555566] leading-relaxed font-normal max-w-sm">
              HireVoTech bridges ambitious technical talent with world-class engineering teams. We provide personalized career marketing, interview coaching, and talent sourcing with deferred success fees.
            </p>

            <div className="space-y-2 pt-2 text-xs text-[#0D0C41] font-semibold">
              <div className="flex items-center gap-2.5">
                <Mail size={14} className="text-[#4846D4]" />
                <a href="mailto:info@hirevotech.com" className="hover:text-[#4846D4] transition-colors">info@hirevotech.com</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={14} className="text-emerald-600" />
                <span>+1 (800) 480-TECH</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin size={14} className="text-rose-500" />
                <span>17350 STATE HWY, 249 STE 220 Houston TX, USA-77064</span>
              </div>
            </div>
          </div>

          {/* Column 1: Company */}
          <div className="space-y-3 text-left">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#0D0C41]">Company</h4>
            <ul className="space-y-2 text-xs text-[#555566] font-medium">
              <li><Link href="/" className="hover:text-[#4846D4] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#4846D4] transition-colors">About Us</Link></li>
              <li><Link href="/#feedbacks" className="hover:text-[#4846D4] transition-colors">Success Stories</Link></li>
              <li><Link href="/process" className="hover:text-[#4846D4] transition-colors">7-Step Roadmap</Link></li>
              <li><Link href="/faq" className="hover:text-[#4846D4] transition-colors">Help & FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-[#4846D4] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-3 text-left">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#0D0C41]">Services</h4>
            <ul className="space-y-2 text-xs text-[#555566] font-medium">
              <li><Link href="/#services" className="hover:text-[#4846D4] transition-colors">Talent Sourcing</Link></li>
              <li><Link href="/partner-company" className="hover:text-[#4846D4] transition-colors">Executive Search</Link></li>
              <li><Link href="/#jobs" className="hover:text-[#4846D4] transition-colors">Job Matching</Link></li>
              <li><Link href="/partner-company" className="hover:text-[#4846D4] transition-colors">Employer Branding</Link></li>
              <li><Link href="/plans" className="hover:text-[#4846D4] transition-colors">Career Coaching</Link></li>
              <li><Link href="/partner-company" className="hover:text-[#4846D4] transition-colors">Contract Hiring</Link></li>
            </ul>
          </div>

          {/* Column 3: Quick Links & Legal */}
          <div className="space-y-3 text-left">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#0D0C41]">Resources</h4>
            <ul className="space-y-2 text-xs text-[#555566] font-medium">
              <li><Link href="/plans" className="hover:text-[#4846D4] transition-colors">Pricing & Plans</Link></li>
              <li><Link href="/refer-and-earn" className="hover:text-[#4846D4] transition-colors">Refer & Earn ($500)</Link></li>
              <li><Link href="/partner-company" className="hover:text-[#4846D4] transition-colors">For Employers</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-[#4846D4] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:text-[#4846D4] transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & Socials */}
        <div className="pt-8 border-t border-[#E1E2EE] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#555566]">
          <div>
            © {new Date().getFullYear()} HireVoTech Inc. All rights reserved. Connecting ambition with opportunity.
          </div>

          <div className="flex items-center gap-3">
            <a href="#" className="w-8 h-8 rounded-full bg-white border border-[#E1E2EE] hover:bg-[#4846D4] hover:border-[#4846D4] text-[#0D0C41] hover:text-white flex items-center justify-center transition-all shadow-xs" aria-label="LinkedIn">
              <LinkedinIcon size={14} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white border border-[#E1E2EE] hover:bg-[#4846D4] hover:border-[#4846D4] text-[#0D0C41] hover:text-white flex items-center justify-center transition-all shadow-xs" aria-label="Twitter">
              <TwitterIcon size={14} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white border border-[#E1E2EE] hover:bg-[#4846D4] hover:border-[#4846D4] text-[#0D0C41] hover:text-white flex items-center justify-center transition-all shadow-xs" aria-label="Instagram">
              <InstagramIcon size={14} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white border border-[#E1E2EE] hover:bg-[#4846D4] hover:border-[#4846D4] text-[#0D0C41] hover:text-white flex items-center justify-center transition-all shadow-xs" aria-label="GitHub">
              <GithubIcon size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
