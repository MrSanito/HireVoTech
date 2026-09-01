"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Briefcase, DollarSign, MapPin, Send } from "lucide-react";

interface JobInfo {
  title: string;
  category: string;
  salary: string;
  location: string;
  type: string;
}

interface ApplyModalProps {
  job: JobInfo | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ApplyModal({ job, isOpen, onClose }: ApplyModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [experience, setExperience] = useState("1-3 years");
  const [notes, setNotes] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName("");
    setEmail("");
    setPhone("");
    setNotes("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0D0C41]/50 backdrop-blur-md animate-fadeIn">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={handleReset}></div>

      <div className="relative w-full max-w-xl bg-white border border-[#E1E2EE] rounded-3xl overflow-hidden shadow-2xl z-10 text-[#0D0C41]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E1E2EE] bg-[#F2F3FC]">
          <div>
            <span className="text-[11px] font-bold tracking-wider text-[#4846D4] uppercase">
              {job?.category || "Career Opportunity"}
            </span>
            <h3 className="text-xl font-extrabold text-[#0D0C41]">Apply for {job?.title || "Role"}</h3>
          </div>
          <button
            onClick={handleReset}
            className="w-9 h-9 rounded-full bg-white hover:bg-[#4846D4] text-[#0D0C41] hover:text-white border border-[#E1E2EE] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {submitted ? (
          <div className="p-10 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 size={36} />
            </div>
            <h4 className="text-2xl font-bold text-[#0D0C41]">Application Received!</h4>
            <p className="text-sm text-[#555566] max-w-md mx-auto leading-relaxed">
              Thank you for applying for <span className="text-[#0D0C41] font-bold">{job?.title}</span>. Our recruitment specialist will review your profile and contact you within 24 hours.
            </p>
            <button
              onClick={handleReset}
              className="capsule-btn-primary !px-8 !py-2.5 mt-4"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-4">
            {/* Job Summary Banner */}
            {job && (
              <div className="flex flex-wrap items-center gap-3 p-3.5 bg-[#F2F3FC] border border-[#E1E2EE] rounded-2xl text-xs text-[#555566]">
                <span className="flex items-center gap-1.5 text-[#0D0C41] font-bold">
                  <Briefcase size={14} className="text-[#4846D4]" /> {job.type}
                </span>
                <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
                  <DollarSign size={14} /> {job.salary}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-rose-500" /> {job.location}
                </span>
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#0D0C41] uppercase tracking-wider mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Alex Morgan"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-white border border-[#E1E2EE] rounded-xl px-4 py-2.5 text-sm text-[#0D0C41] placeholder-neutral-400 focus:outline-none focus:border-[#4846D4] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#0D0C41] uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border border-[#E1E2EE] rounded-xl px-4 py-2.5 text-sm text-[#0D0C41] placeholder-neutral-400 focus:outline-none focus:border-[#4846D4] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0D0C41] uppercase tracking-wider mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white border border-[#E1E2EE] rounded-xl px-4 py-2.5 text-sm text-[#0D0C41] placeholder-neutral-400 focus:outline-none focus:border-[#4846D4] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0D0C41] uppercase tracking-wider mb-1.5">
                  Years of Relevant Experience
                </label>
                <select
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full bg-white border border-[#E1E2EE] rounded-xl px-4 py-2.5 text-sm text-[#0D0C41] focus:outline-none focus:border-[#4846D4] transition-colors"
                >
                  <option value="Entry Level (0-1 yr)">Entry Level (0-1 yr)</option>
                  <option value="1-3 years">1-3 years</option>
                  <option value="3-5 years">3-5 years</option>
                  <option value="5-8 years">5-8 years</option>
                  <option value="8+ years (Senior/Lead)">8+ years (Senior/Lead)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0D0C41] uppercase tracking-wider mb-1.5">
                  Resume / Portfolio Link or Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Paste your LinkedIn URL, portfolio link, or a brief note about your background..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-white border border-[#E1E2EE] rounded-xl px-4 py-2.5 text-sm text-[#0D0C41] placeholder-neutral-400 focus:outline-none focus:border-[#4846D4] transition-colors"
                ></textarea>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={handleReset}
                className="px-5 py-2.5 text-sm font-semibold text-[#555566] hover:text-[#0D0C41] transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="capsule-btn-primary !py-2.5 !px-6 btn-shimmer cursor-pointer"
              >
                Submit Application <Send size={16} />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
