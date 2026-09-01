"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase,
  Layers,
  Users,
  Compass,
  DollarSign,
  HelpCircle,
  Award
} from "lucide-react";
import { LinkedinIcon, TwitterIcon, InstagramIcon } from "./SocialIcons";

interface NavbarProps {
  scrolled?: boolean;
  activeSection?: string;
}

export default function Navbar({ scrolled: initialScrolled = false, activeSection = "home" }: NavbarProps) {
  const [scrolled, setScrolled] = useState(initialScrolled);
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [pagesDropdown, setPagesDropdown] = useState(false);

  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pagesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleServicesEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setServicesDropdown(true);
  };

  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesDropdown(false);
    }, 150);
  };

  const handlePagesEnter = () => {
    if (pagesTimeoutRef.current) clearTimeout(pagesTimeoutRef.current);
    setPagesDropdown(true);
  };

  const handlePagesLeave = () => {
    pagesTimeoutRef.current = setTimeout(() => {
      setPagesDropdown(false);
    }, 150);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 px-4 md:px-8 py-3.5 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-[#E1E2EE] shadow-md"
            : "bg-white/90 backdrop-blur-md border-b border-[#E1E2EE]/60"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-2xl bg-[#4846D4] flex items-center justify-center shadow-md shadow-[#4846D4]/30 group-hover:scale-105 transition-transform">
              <Sparkles size={20} className="text-white" />
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-[#0D0C41] font-sans">
              Hire<span className="text-[#4846D4]">Vo</span>Tech
            </span>
          </Link>

          {/* Desktop Capsule Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#F2F3FC] border border-[#E1E2EE] rounded-full px-3 py-1.5 shadow-xs">
            <Link
              href="/"
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                activeSection === "home"
                  ? "bg-[#4846D4] text-white shadow-md shadow-[#4846D4]/30"
                  : "text-[#0D0C41] hover:text-[#4846D4] hover:bg-white"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                activeSection === "about"
                  ? "bg-[#4846D4] text-white shadow-md shadow-[#4846D4]/30"
                  : "text-[#0D0C41] hover:text-[#4846D4] hover:bg-white"
              }`}
            >
              About Us
            </Link>

            {/* Services Dropdown with hover bridge */}
            <div
              className="relative"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <button
                onClick={() => setServicesDropdown(!servicesDropdown)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                  servicesDropdown
                    ? "bg-white text-[#4846D4] shadow-xs"
                    : "text-[#0D0C41] hover:text-[#4846D4] hover:bg-white"
                }`}
              >
                <span>Services</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${servicesDropdown ? "rotate-180 text-[#4846D4]" : ""}`} />
              </button>

              {servicesDropdown && (
                <div 
                  className="absolute top-full left-0 pt-2 w-64 z-50 animate-fadeIn"
                  onMouseEnter={handleServicesEnter}
                  onMouseLeave={handleServicesLeave}
                >
                  <div className="bg-white border border-[#E1E2EE] rounded-2xl p-2 shadow-2xl">
                    <Link
                      href="/#services"
                      onClick={() => setServicesDropdown(false)}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#F2F3FC] text-[#0D0C41] transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#F0F0FF] text-[#4846D4] flex items-center justify-center">
                        <Briefcase size={16} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#0D0C41]">Talent Sourcing</div>
                        <div className="text-[11px] text-[#555566]">Direct headhunting top 1%</div>
                      </div>
                    </Link>
                    <Link
                      href="/partner-company"
                      onClick={() => setServicesDropdown(false)}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#F2F3FC] text-[#0D0C41] transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#F0F0FF] text-[#4846D4] flex items-center justify-center">
                        <Users size={16} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#0D0C41]">Executive Search</div>
                        <div className="text-[11px] text-[#555566]">VP & Director hiring</div>
                      </div>
                    </Link>
                    <Link
                      href="/#jobs"
                      onClick={() => setServicesDropdown(false)}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#F2F3FC] text-[#0D0C41] transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#F0F0FF] text-[#4846D4] flex items-center justify-center">
                        <Layers size={16} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#0D0C41]">Job Matching</div>
                        <div className="text-[11px] text-[#555566]">98% cultural alignment</div>
                      </div>
                    </Link>
                    <Link
                      href="/partner-company"
                      onClick={() => setServicesDropdown(false)}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#F2F3FC] text-[#0D0C41] transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#F0F0FF] text-[#4846D4] flex items-center justify-center">
                        <Award size={16} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#0D0C41]">Employer Branding</div>
                        <div className="text-[11px] text-[#555566]">Attract elite talent</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Pages Dropdown with hover bridge */}
            <div
              className="relative"
              onMouseEnter={handlePagesEnter}
              onMouseLeave={handlePagesLeave}
            >
              <button
                onClick={() => setPagesDropdown(!pagesDropdown)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                  pagesDropdown
                    ? "bg-white text-[#4846D4] shadow-xs"
                    : "text-[#0D0C41] hover:text-[#4846D4] hover:bg-white"
                }`}
              >
                <span>Explore</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${pagesDropdown ? "rotate-180 text-[#4846D4]" : ""}`} />
              </button>

              {pagesDropdown && (
                <div 
                  className="absolute top-full left-0 pt-2 w-56 z-50 animate-fadeIn"
                  onMouseEnter={handlePagesEnter}
                  onMouseLeave={handlePagesLeave}
                >
                  <div className="bg-white border border-[#E1E2EE] rounded-2xl p-2 shadow-2xl">
                    <Link
                      href="/process"
                      onClick={() => setPagesDropdown(false)}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#F2F3FC] text-[#0D0C41] transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#F0F0FF] text-[#4846D4] flex items-center justify-center">
                        <Compass size={16} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#0D0C41]">7-Step Roadmap</div>
                        <div className="text-[11px] text-[#555566]">Our placement cycle</div>
                      </div>
                    </Link>
                    <Link
                      href="/plans"
                      onClick={() => setPagesDropdown(false)}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#F2F3FC] text-[#0D0C41] transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#F0F0FF] text-[#4846D4] flex items-center justify-center">
                        <DollarSign size={16} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#0D0C41]">Pricing & Plans</div>
                        <div className="text-[11px] text-[#555566]">Basic vs Premium</div>
                      </div>
                    </Link>
                    <Link
                      href="/faq"
                      onClick={() => setPagesDropdown(false)}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#F2F3FC] text-[#0D0C41] transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#F0F0FF] text-[#4846D4] flex items-center justify-center">
                        <HelpCircle size={16} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#0D0C41]">Help & FAQ</div>
                        <div className="text-[11px] text-[#555566]">Questions answered</div>
                      </div>
                    </Link>
                    <Link
                      href="/refer-and-earn"
                      onClick={() => setPagesDropdown(false)}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#F2F3FC] text-[#0D0C41] transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#F0F0FF] text-[#4846D4] flex items-center justify-center">
                        <Sparkles size={16} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#0D0C41]">Refer & Earn</div>
                        <div className="text-[11px] text-[#555566]">$500 referral bonus</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/#jobs"
              className="px-4 py-2 rounded-full text-sm font-semibold text-[#0D0C41] hover:text-[#4846D4] hover:bg-white transition-all"
            >
              Job Openings
            </Link>

            <Link
              href="/plans"
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                activeSection === "plans"
                  ? "bg-[#4846D4] text-white shadow-md shadow-[#4846D4]/30"
                  : "text-[#0D0C41] hover:text-[#4846D4] hover:bg-white"
              }`}
            >
              Pricing
            </Link>

            <Link
              href="/contact"
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                activeSection === "contact"
                  ? "bg-[#4846D4] text-white shadow-md shadow-[#4846D4]/30"
                  : "text-[#0D0C41] hover:text-[#4846D4] hover:bg-white"
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Right Action & Off-Canvas Trigger */}
          <div className="flex items-center gap-3">
            <Link
              href="/plans"
              className="hidden sm:inline-flex capsule-btn-primary !py-2.5 !px-6 !text-sm btn-shimmer"
            >
              Get Started
            </Link>

            {/* Hamburger / Off-canvas Button */}
            <button
              onClick={() => setOffcanvasOpen(true)}
              className="w-10 h-10 rounded-full bg-[#F2F3FC] hover:bg-[#4846D4] hover:text-white text-[#0D0C41] flex items-center justify-center transition-all border border-[#E1E2EE] cursor-pointer"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Off-Canvas Slideout Drawer */}
      {offcanvasOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#0D0C41]/40 backdrop-blur-sm transition-opacity"
            onClick={() => setOffcanvasOpen(false)}
          ></div>

          {/* Drawer Panel */}
          <div className="relative w-full max-w-md bg-white border-l border-[#E1E2EE] h-full shadow-2xl p-8 flex flex-col justify-between overflow-y-auto z-10 animate-fadeIn text-[#0D0C41]">
            <div className="space-y-8">
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-[#E1E2EE]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-[#4846D4] flex items-center justify-center text-white">
                    <Sparkles size={16} />
                  </div>
                  <span className="text-xl font-bold tracking-tight text-[#0D0C41]">
                    Hire<span className="text-[#4846D4]">Vo</span>Tech
                  </span>
                </div>

                <button
                  onClick={() => setOffcanvasOpen(false)}
                  className="w-9 h-9 rounded-full bg-[#F2F3FC] text-[#0D0C41] hover:bg-[#4846D4] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="space-y-2">
                <div className="text-xs uppercase tracking-wider text-[#555566] font-semibold mb-2">Navigation</div>
                <Link
                  href="/"
                  onClick={() => setOffcanvasOpen(false)}
                  className="block px-4 py-3 rounded-2xl hover:bg-[#F2F3FC] text-[#0D0C41] font-semibold transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  onClick={() => setOffcanvasOpen(false)}
                  className="block px-4 py-3 rounded-2xl hover:bg-[#F2F3FC] text-[#0D0C41] font-semibold transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="/#services"
                  onClick={() => setOffcanvasOpen(false)}
                  className="block px-4 py-3 rounded-2xl hover:bg-[#F2F3FC] text-[#0D0C41] font-semibold transition-colors"
                >
                  Recruitment Services
                </Link>
                <Link
                  href="/#jobs"
                  onClick={() => setOffcanvasOpen(false)}
                  className="block px-4 py-3 rounded-2xl hover:bg-[#F2F3FC] text-[#0D0C41] font-semibold transition-colors"
                >
                  Featured Job Openings
                </Link>
                <Link
                  href="/process"
                  onClick={() => setOffcanvasOpen(false)}
                  className="block px-4 py-3 rounded-2xl hover:bg-[#F2F3FC] text-[#0D0C41] font-semibold transition-colors"
                >
                  7-Step Roadmap
                </Link>
                <Link
                  href="/plans"
                  onClick={() => setOffcanvasOpen(false)}
                  className="block px-4 py-3 rounded-2xl hover:bg-[#F2F3FC] text-[#0D0C41] font-semibold transition-colors"
                >
                  Plans & Pricing
                </Link>
                <Link
                  href="/partner-company"
                  onClick={() => setOffcanvasOpen(false)}
                  className="block px-4 py-3 rounded-2xl hover:bg-[#F2F3FC] text-[#0D0C41] font-semibold transition-colors"
                >
                  For Employers & Enterprises
                </Link>
                <Link
                  href="/refer-and-earn"
                  onClick={() => setOffcanvasOpen(false)}
                  className="block px-4 py-3 rounded-2xl hover:bg-[#F2F3FC] text-[#0D0C41] font-semibold transition-colors"
                >
                  Refer & Earn ($500 Bonus)
                </Link>
                <Link
                  href="/faq"
                  onClick={() => setOffcanvasOpen(false)}
                  className="block px-4 py-3 rounded-2xl hover:bg-[#F2F3FC] text-[#0D0C41] font-semibold transition-colors"
                >
                  Frequently Asked Questions
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setOffcanvasOpen(false)}
                  className="block px-4 py-3 rounded-2xl hover:bg-[#F2F3FC] text-[#0D0C41] font-semibold transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Drawer Footer & Contact Details */}
            <div className="pt-8 border-t border-[#E1E2EE] space-y-4">
              <div className="space-y-2 text-xs text-[#555566]">
                <div className="flex items-center gap-2.5">
                  <Mail size={14} className="text-[#4846D4]" />
                  <span>support@hirevotech.com</span>
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

              {/* Social Icons */}
              <div className="flex items-center gap-3 pt-2">
                <a href="#" className="w-9 h-9 rounded-full bg-[#F2F3FC] hover:bg-[#4846D4] text-[#0D0C41] hover:text-white flex items-center justify-center transition-colors">
                  <LinkedinIcon size={14} />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-[#F2F3FC] hover:bg-[#4846D4] text-[#0D0C41] hover:text-white flex items-center justify-center transition-colors">
                  <TwitterIcon size={14} />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-[#F2F3FC] hover:bg-[#4846D4] text-[#0D0C41] hover:text-white flex items-center justify-center transition-colors">
                  <InstagramIcon size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
