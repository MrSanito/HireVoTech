"use client";

import React from "react";
import { X, Play, ShieldCheck, CheckCircle2 } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="relative w-full max-w-4xl bg-[#0d0c41] border border-white/20 rounded-3xl overflow-hidden shadow-2xl z-10">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/30">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#4846d4]/30 flex items-center justify-center text-[#c68efd]">
              <Play size={16} fill="currentColor" />
            </div>
            <div>
              <h3 className="text-white font-bold text-base">How HireVoTech Works</h3>
              <p className="text-xs text-neutral-400">Guaranteed placements & candidate matching</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Video / Interactive Player Body */}
        <div className="relative aspect-video w-full bg-black/60 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#08000d] via-[#4846d4]/20 to-transparent"></div>

          {/* Interactive Preview Canvas */}
          <div className="relative text-center p-8 max-w-lg mx-auto space-y-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#4846d4] to-[#a020f0] flex items-center justify-center mx-auto shadow-[0_0_40px_rgba(72,70,212,0.6)] cursor-pointer transform hover:scale-110 transition-transform">
              <Play size={32} fill="white" className="text-white ml-1" />
            </div>

            <div>
              <h4 className="text-2xl font-bold text-white mb-2">Connecting Ambition with Opportunity</h4>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Watch how our 7-step recruitment pipeline delivers 300% faster hiring times and guaranteed career placement.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-300">
              <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                <CheckCircle2 size={14} className="text-emerald-400" /> 80%+ Placement Rate
              </span>
              <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                <ShieldCheck size={14} className="text-[#c68efd]" /> Dedicated Mentorship
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-black/40 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-400">Ready to accelerate your career or hire top engineers?</p>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2 text-xs font-semibold text-neutral-300 hover:text-white rounded-full transition-colors"
            >
              Close
            </button>
            <a
              href="/contact"
              className="capsule-btn-primary !text-xs !py-2 !px-6"
            >
              Get Started Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
