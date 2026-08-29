"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Gift, Building2, HelpCircle, PhoneCall } from "lucide-react";

interface NavbarProps {
  scrolled: boolean;
  activeSection?: string;
}

const mainNavItems = [
  { href: "/#about", label: "About", id: "about" },
  { href: "/#plans", label: "Plans & Pricing", id: "plans" },
  { href: "/#process", label: "Process", id: "process" },
  { href: "/partner-company", label: "Hire Talent", id: "partner-company", isRoute: true },
  { href: "/refer-and-earn", label: "Refer & Earn", id: "refer-and-earn", badge: "Reward", isRoute: true },
  { href: "/faq", label: "FAQ", id: "faq", isRoute: true },
  { href: "/contact", label: "Contact", id: "contact", isRoute: true },
];

export default function Navbar({ scrolled, activeSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header
        className={`navbar sticky top-0 z-50 border-b px-4 md:px-8 py-3 transition-all duration-500 ${
          scrolled
            ? "bg-[#08000d]/95 backdrop-blur-xl border-white/10 shadow-lg shadow-black/20"
            : "bg-[#08000d]/80 backdrop-blur-lg border-white/5"
        }`}
      >
        <div className="flex-1">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl font-bold tracking-wider bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent group-hover:opacity-90 transition-opacity">
              Hire<span className="text-[#a020f0]">Vo</span>Tech
            </span>
          </Link>
        </div>
        <div className="flex-none gap-3 hidden lg:flex items-center">
          <ul className="menu menu-horizontal px-1 font-medium gap-1 text-neutral-300 text-sm">
            {mainNavItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={`nav-link hover:text-white transition-colors flex items-center gap-1.5 ${
                    activeSection === item.id ? "text-white active font-semibold" : ""
                  }`}
                >
                  {item.label}
                  {item.badge && (
                    <span className="badge badge-xs bg-[#ff4fd8]/20 text-[#ff4fd8] border border-[#ff4fd8]/40 font-mono text-[10px] uppercase px-1.5 py-0.5 rounded-full font-bold">
                      {item.badge}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/#plans"
            className="btn btn-sm bg-[#a020f0] hover:bg-[#8019c0] text-white border-none font-semibold px-5 rounded-full transition-all hover:scale-105 btn-shimmer ml-1"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="flex-none lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn btn-square btn-ghost text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-x-0 top-[60px] bg-[#08000d]/98 backdrop-blur-2xl z-40 border-b border-white/10 p-6 flex flex-col gap-3 shadow-2xl max-h-[calc(100vh-60px)] overflow-y-auto"
          style={{ animation: "hero-fade-in 0.3s ease forwards" }}
        >
          {mainNavItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-neutral-300 hover:text-white py-2 flex items-center justify-between border-b border-white/5"
            >
              <span>{item.label}</span>
              {item.badge && (
                <span className="badge badge-sm bg-[#ff4fd8]/20 text-[#ff4fd8] border border-[#ff4fd8]/40 font-mono text-xs uppercase px-2 py-0.5 rounded-full font-bold">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}
          <Link
            href="/#plans"
            onClick={() => setMobileMenuOpen(false)}
            className="btn bg-[#a020f0] hover:bg-[#8019c0] text-white border-none font-semibold w-full mt-3 rounded-full btn-shimmer"
          >
            Get Started
          </Link>
        </div>
      )}
    </>
  );
}
