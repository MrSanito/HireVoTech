"use client";

import React, { useState } from "react";
import { BookOpen, Calendar, Clock, ArrowUpRight, X } from "lucide-react";

interface ArticleItem {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  summary: string;
  fullText: string;
}

const articles: ArticleItem[] = [
  {
    id: "art-1",
    title: "Why Soft Skills Matter More Than Ever",
    category: "Recruitment Trends",
    date: "June 17, 2026",
    readTime: "5 min read",
    image: "/images/article-1.jpg",
    summary: "Employers are shifting focus from pure technical qualifications to communication, adaptability, and cross-functional leadership in the AI-accelerated engineering era.",
    fullText: "In today's fast-moving software ecosystem, code proficiency alone is no longer the sole differentiator. Modern engineering orgs prioritize developers who can articulate complex architectural trade-offs, collaborate asynchronously across global time zones, and adapt rapidly to new frameworks. At HireVoTech, we coach our candidates to highlight these high-leverage traits throughout the entire interview cycle."
  },
  {
    id: "art-2",
    title: "How Companies Are Battling Talent Shortages",
    category: "Hiring Strategy",
    date: "June 17, 2026",
    readTime: "4 min read",
    image: "/images/article-2.jpg",
    summary: "With fewer applicants on traditional job boards, businesses are leveraging proactive candidate marketing, specialized headhunters, and streamlined interview loops.",
    fullText: "The traditional approach of 'post and pray' on public job portals is failing enterprise hiring managers. Leading tech enterprises are adopting outbound talent sourcing, customized candidate engagement, and transparent compensation banding to secure top 1% engineers before competitors do. Learn how HireVoTech builds custom candidate pipelines tailored to your stack."
  }
];

export default function ArticlesSection() {
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  return (
    <>
      <section className="py-24 relative overflow-hidden bg-[#FCFCFC]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#F0F0FF] border border-[#4846D4]/20 text-[#4846D4] rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mx-auto">
              <BookOpen size={14} className="text-[#4846D4]" />
              <span>Latest News & Insights</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0D0C41] tracking-tight">
              Connecting Ambition with <br className="hidden sm:inline" />
              <span className="text-[#4846D4]">
                Industry Insights.
              </span>
            </h2>

            <p className="text-[#555566] text-sm md:text-base leading-relaxed">
              Stay informed with the latest updates, hiring trends, and career insights from the world of modern recruitment.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((art) => (
              <div
                key={art.id}
                className="group bg-white rounded-3xl overflow-hidden border border-[#E1E2EE] shadow-md hover:shadow-xl hover:border-[#4846D4]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Article Image */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#F2F3FC]">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C41]/80 via-transparent to-transparent"></div>

                    {/* Category badge */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md border border-[#E1E2EE] rounded-full px-3.5 py-1 text-xs font-bold text-[#0D0C41]">
                      {art.category}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 space-y-3 text-left">
                    <div className="flex items-center gap-4 text-xs text-[#555566]">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} className="text-[#4846D4]" /> {art.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={13} className="text-neutral-400" /> {art.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#0D0C41] group-hover:text-[#4846D4] transition-colors leading-snug">
                      {art.title}
                    </h3>

                    <p className="text-sm text-[#555566] leading-relaxed font-normal line-clamp-3">
                      {art.summary}
                    </p>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="p-6 sm:p-8 pt-0 border-t border-[#E1E2EE] mt-auto flex items-center justify-between">
                  <button
                    onClick={() => setSelectedArticle(art)}
                    className="text-xs font-bold uppercase tracking-wider text-[#4846D4] hover:text-[#3735B8] flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <span>Read Full Article</span>
                    <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                  <span className="text-xs text-[#555566]">HireVoTech Editorial</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0D0C41]/50 backdrop-blur-md animate-fadeIn">
          <div className="absolute inset-0" onClick={() => setSelectedArticle(null)}></div>
          <div className="relative w-full max-w-2xl bg-white border border-[#E1E2EE] rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col text-[#0D0C41]">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#E1E2EE] bg-[#F2F3FC]">
              <span className="text-xs font-bold text-[#4846D4] uppercase tracking-wider">
                {selectedArticle.category}
              </span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="w-8 h-8 rounded-full bg-white hover:bg-[#4846D4] text-[#0D0C41] hover:text-white border border-[#E1E2EE] flex items-center justify-center transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-5 text-left">
              <div className="rounded-2xl overflow-hidden aspect-[16/9] mb-4">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center gap-4 text-xs text-[#555566]">
                <span>{selectedArticle.date}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
              </div>

              <h3 className="text-2xl font-bold text-[#0D0C41]">
                {selectedArticle.title}
              </h3>

              <p className="text-[#555566] text-sm leading-relaxed">
                {selectedArticle.summary}
              </p>

              <div className="p-4 bg-[#F2F3FC] border-l-4 border-[#4846D4] rounded-r-xl text-xs text-[#0D0C41] italic leading-relaxed">
                {selectedArticle.fullText}
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-[#F2F3FC] border-t border-[#E1E2EE] flex items-center justify-between">
              <span className="text-xs text-[#555566]">HireVoTech Talent Research</span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="capsule-btn-primary !py-2 !px-6 !text-xs cursor-pointer"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
