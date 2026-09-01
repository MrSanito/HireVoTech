"use client";

import React, { useState } from "react";
import { 
  Briefcase, 
  MapPin, 
  DollarSign, 
  Clock, 
  ArrowUpRight, 
  Sparkles
} from "lucide-react";
import ApplyModal from "./ApplyModal";

interface JobItem {
  id: string;
  title: string;
  category: string;
  department: string;
  salary: string;
  location: string;
  type: string;
  desc: string;
  urgent?: boolean;
}

const allJobs: JobItem[] = [
  {
    id: "job-1",
    title: "Data Analyst",
    category: "technology",
    department: "Business Intelligence",
    salary: "$90,000 - $115,000 / yr",
    location: "Remote (US / EU)",
    type: "Full-Time",
    desc: "Analyze large datasets to extract actionable insights. Build executive reporting dashboards in Tableau/Looker and support growth decisions.",
    urgent: true
  },
  {
    id: "job-2",
    title: "Product Designer (UX/UI)",
    category: "design",
    department: "Design Systems & Apps",
    salary: "$105,000 - $135,000 / yr",
    location: "Remote / Hybrid",
    type: "Full-Time",
    desc: "Design intuitive, delightful web and mobile application experiences by combining Figma design tokens, user research, and interactive prototyping."
  },
  {
    id: "job-3",
    title: "Digital Marketing Manager",
    category: "marketing",
    department: "Growth & Acquisition",
    salary: "$85,000 - $110,000 / yr",
    location: "New York / Remote",
    type: "Full-Time",
    desc: "Plan and execute multi-channel digital marketing campaigns. Manage performance ads, conversion funnel optimization, and partner acquisitions."
  },
  {
    id: "job-4",
    title: "Full-Stack Software Engineer",
    category: "technology",
    department: "Core Platform",
    salary: "$130,000 - $165,000 / yr",
    location: "San Francisco / Remote",
    type: "Full-Time",
    desc: "Architect scalable Next.js and Node.js microservices. Build responsive customer-facing interfaces and high-performance backend pipelines.",
    urgent: true
  },
  {
    id: "job-5",
    title: "Content Strategist",
    category: "marketing",
    department: "Brand & Communications",
    salary: "$75,000 - $95,000 / yr",
    location: "Remote",
    type: "Full-Time",
    desc: "Develop authoritative technical storytelling, developer documentation, thought leadership articles, and content marketing calendars."
  },
  {
    id: "job-6",
    title: "Financial Analyst",
    category: "finance",
    department: "Corporate Finance",
    salary: "$95,000 - $125,000 / yr",
    location: "London / Remote",
    type: "Full-Time",
    desc: "Analyze complex financial models, cash-flow projections, and assist tech leadership with strategic budgeting and investor reporting."
  },
  {
    id: "job-7",
    title: "Legal Officer (Tech & IP)",
    category: "finance",
    department: "Legal & Compliance",
    salary: "$120,000 - $150,000 / yr",
    location: "Remote",
    type: "Full-Time",
    desc: "Draft, review, and negotiate enterprise SaaS contracts, vendor agreements, and data privacy governance protocols."
  },
  {
    id: "job-8",
    title: "SEO & Growth Specialist",
    category: "marketing",
    department: "Search Optimization",
    salary: "$70,000 - $90,000 / yr",
    location: "Remote",
    type: "Full-Time",
    desc: "Optimize web architecture, perform keyword landscape mapping, and run programmatic SEO strategies to maximize organic search dominance."
  },
  {
    id: "job-9",
    title: "Graphic & Brand Designer",
    category: "design",
    department: "Creative Studio",
    salary: "$75,000 - $98,000 / yr",
    location: "Remote",
    type: "Full-Time",
    desc: "Develop brand visual assets for digital campaigns, landing pages, and interactive presentation decks with distinctive modern polish."
  }
];

export default function JobListingsSection() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedJob, setSelectedJob] = useState<JobItem | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filteredJobs = activeTab === "all" 
    ? allJobs 
    : allJobs.filter(job => job.category === activeTab);

  const handleApply = (job: JobItem) => {
    setSelectedJob(job);
    setModalOpen(true);
  };

  return (
    <>
      <section id="jobs" className="py-24 relative overflow-hidden bg-[#FCFCFC]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#F0F0FF] border border-[#4846D4]/20 text-[#4846D4] rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mx-auto">
              <Briefcase size={14} className="text-[#4846D4]" />
              <span>Job Listings</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0D0C41] tracking-tight">
              Turn Your Passion into <br className="hidden sm:inline" />
              <span className="text-[#4846D4]">
                a Career.
              </span>
            </h2>

            <p className="text-[#555566] text-sm md:text-base leading-relaxed">
              Uncover opportunities that align with your purpose and potential. Filter through our currently active openings.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12 bg-[#F2F3FC] border border-[#E1E2EE] rounded-full p-1.5 max-w-2xl mx-auto shadow-xs">
            {[
              { id: "all", label: "All Roles" },
              { id: "technology", label: "Engineering & Tech" },
              { id: "design", label: "Design & UX" },
              { id: "marketing", label: "Marketing" },
              { id: "finance", label: "Finance & Legal" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-[#4846D4] text-white shadow-md shadow-[#4846D4]/30"
                    : "text-[#0D0C41] hover:text-[#4846D4] hover:bg-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Job Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="group bg-white rounded-3xl p-6 border border-[#E1E2EE] shadow-md hover:shadow-xl hover:border-[#4846D4]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top Badge and Urgent pill */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#4846D4] bg-[#F0F0FF] border border-[#4846D4]/20 px-3 py-1 rounded-full">
                      {job.department}
                    </span>
                    {job.urgent && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 bg-rose-50 border border-rose-200 px-2.5 py-0.5 rounded-full">
                        Fast-Track
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#0D0C41] group-hover:text-[#4846D4] transition-colors">
                    {job.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#555566] leading-relaxed font-normal line-clamp-3">
                    {job.desc}
                  </p>

                  {/* Pills: Salary, Location, Type */}
                  <div className="space-y-2 pt-2 border-t border-[#E1E2EE] text-xs">
                    <div className="flex items-center gap-2 font-bold text-emerald-600">
                      <DollarSign size={14} className="flex-shrink-0" />
                      <span>{job.salary}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#555566]">
                      <MapPin size={14} className="flex-shrink-0 text-rose-500" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#555566]">
                      <Clock size={14} className="flex-shrink-0 text-[#4846D4]" />
                      <span>{job.type}</span>
                    </div>
                  </div>
                </div>

                {/* Apply Button */}
                <div className="pt-6 mt-6 border-t border-[#E1E2EE]">
                  <button
                    onClick={() => handleApply(job)}
                    className="w-full capsule-btn-secondary !py-2.5 !text-xs group-hover:!bg-[#4846D4] group-hover:!border-transparent group-hover:!text-white transition-all flex items-center justify-center gap-2 font-bold cursor-pointer"
                  >
                    <span>Apply Now</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Note */}
          <div className="mt-14 p-6 bg-[#F2F3FC] rounded-3xl border border-[#E1E2EE] max-w-3xl mx-auto text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            <div className="text-left space-y-1">
              <div className="text-sm font-bold text-[#0D0C41]">Don&apos;t see the exact tech role you&apos;re looking for?</div>
              <div className="text-xs text-[#555566]">Submit your profile to our private executive talent pool.</div>
            </div>
            <button
              onClick={() => handleApply({
                id: "general-app",
                title: "General Tech Talent Pool",
                category: "general",
                department: "Candidate Matching",
                salary: "Market Competitive",
                location: "Remote / Global",
                type: "Full-Time / Contract",
                desc: "Submit your credentials for direct representation across our network of 60+ partner tech companies."
              })}
              className="capsule-btn-primary !py-2.5 !px-6 !text-xs whitespace-nowrap btn-shimmer cursor-pointer"
            >
              Submit General Profile
            </button>
          </div>
        </div>
      </section>

      {/* Apply Modal */}
      <ApplyModal
        job={selectedJob}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
