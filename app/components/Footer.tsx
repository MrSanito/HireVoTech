"use client";

import React from "react";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer footer-center p-12 bg-[#050009] text-neutral-400 border-t border-white/5 relative z-10">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row justify-between items-center gap-12">
        {/* Logo */}
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start gap-2 group cursor-default">
          <span className="text-3xl font-extrabold tracking-wider bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent group-hover:drop-shadow-[0_0_20px_rgba(160,32,240,0.3)] transition-all duration-500">
            Hire<span className="text-[#a020f0]">Vo</span>Tech
          </span>
          <p className="text-sm text-neutral-500 font-light mt-1">Your Success Starts Here.</p>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col items-center gap-3 text-sm max-w-md">
          <div className="flex items-center gap-2 text-neutral-300">
            <MapPin size={16} className="text-[#a020f0]" />
            <span className="text-center">17350 STATE HWY, 249 STE 220 Houston TX, USA-77064</span>
          </div>
          <div className="flex items-center gap-6 mt-2">
            <a
              href="mailto:info@hirevotech.com"
              className="flex items-center gap-1 hover:text-white transition-colors group"
            >
              <Mail size={14} className="text-[#a020f0] group-hover:scale-110 transition-transform" /> info@hirevotech.com
            </a>
            <a
              href="https://www.hirevotech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white transition-colors group"
            >
              <Globe size={14} className="text-[#a020f0] group-hover:scale-110 transition-transform" /> www.hirevotech.com
            </a>
          </div>
          <div className="flex items-center gap-1 text-neutral-500 mt-1">
            <Phone size={14} /> +91 95748 44683
          </div>
        </div>

        {/* Nav Links */}
        <div className="flex flex-wrap justify-center lg:justify-end gap-x-6 gap-y-2 text-xs font-medium">
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#approach" className="hover:text-white transition-colors">
            Approach
          </a>
          <a href="#why-us" className="hover:text-white transition-colors">
            Why Choose Us
          </a>
          <a href="#plans" className="hover:text-white transition-colors">
            Plans
          </a>
          <a href="./partner-company" className="hover:text-white transition-colors">
            Partner Company
          </a>
          <a href="./faq" className="hover:text-white transition-colors">
            FAQ&apos;s
          </a>
          <a href="./privacy-policy" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="./terms-and-conditions" className="hover:text-white transition-colors">
            Terms and Conditions
          </a>
          <a href="./contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>
      </div>

      {/* Gradient divider */}
      <div className="w-full max-w-6xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-8"></div>

      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600">
        <p>&copy; 2026 HireVoTech. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
