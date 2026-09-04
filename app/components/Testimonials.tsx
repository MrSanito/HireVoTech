"use client";

import React, { useState, useEffect, useCallback } from "react";

export interface TestimonialItem {
  name: string;
  text: string;
}

export const defaultTestimonials: TestimonialItem[] = [
  {
    name: "Udhayan Krishnan",
    text: "I am writing to let you know how thankful I am for the exceptional service I have received. The professionalism and expertise demonstrated by your team have been truly exemplary. I want to extend a special thanks to Nilam Chauhan, our marketing specialist, whose efforts in connecting us with relevant companies have resulted in significant success. Her approach and commitment to excellence have been invaluable to me. Additionally, I want to express my appreciation to Riya Soni, my career advisor, for her invaluable guidance. Her personalized support has greatly facilitated my journey. This collaboration has been transformative. Thank you once again for your dedication and service.",
  },
  {
    name: "Shreya Shinde",
    text: "I cannot thank you enough for all the guidance and support you provided throughout my job search. From helping me prepare for interviews with mock sessions to guiding me on possible questions and strategies, your insights were invaluable. More than that, your encouragement and motivation kept me going, even during challenging moments. I am incredibly grateful to have landed a business analyst role, and I truly believe that your support played a huge role in making this happen. Your mentorship and generosity in sharing your knowledge made a real difference, and I appreciate it more than words can express. Thank you again for everything—you have been a key part of my success, and I am so lucky to have had your guidance!",
  },
  {
    name: "Prasham Parekh",
    text: "I wanted to take a moment to express my heartfelt gratitude for the incredible support and guidance I received throughout my job search journey with HireVoTech. Thanks to your expert advice and tireless efforts, I have successfully landed my first job in the United States—a milestone that feels both exciting and deeply meaningful. A special thanks to Nilam whose dedication and persistence stood out remarkably. She went above and beyond to understand my strengths, communicate clearly, and follow up diligently—often acting as both a motivator and a strategist. It made a significant difference to have someone so invested in my journey. I am genuinely thankful to have partnered with your consultancy, and I look forward to recommending your services to others seeking career support.",
  },
  {
    name: "Aniket Verma",
    text: "I took this service and they helped me a lot. What sets HireVoTech apart is their completely tailored strategy from normal agencies — they used custom cold email connection notes directly targeted to Bloomberg decision-makers to boost my application visibility and ensure it was selected. That unique approach helped me get placed significantly faster.",
  },
  {
    name: "Divya Sharma",
    text: "Not only did they connect me with incredible cloud infrastructure teams, but the salary negotiation coaching alone was worth every bit. They guided me through competing counter-offers and negotiated an extra $25,000 in base pay before signing.",
  },
  {
    name: "Rohan Mehta",
    text: "The resume transformation and reverse-headhunting strategy put my profile directly in front of Engineering VPs. I skipped automated applicant tracking screeners and had 4 hiring manager rounds scheduled within 10 days. The structured mentorship and guidance gave me total peace of mind.",
  },
];

interface TestimonialsProps {
  testimonialsRef?: React.RefObject<HTMLDivElement | null>;
  testimonials?: TestimonialItem[];
}

export default function Testimonials({
  testimonialsRef,
  testimonials = defaultTestimonials,
}: TestimonialsProps) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [testimonialFading, setTestimonialFading] = useState(false);

  const changeTestimonial = useCallback(
    (next: number) => {
      setTestimonialFading(true);
      setTimeout(() => {
        setActiveTestimonial(next);
        setTestimonialFading(false);
      }, 300);
    },
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      changeTestimonial((activeTestimonial + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [activeTestimonial, testimonials.length, changeTestimonial]);

  return (
    <section className="py-24 border-t border-white/5 bg-[#08000d]/50 relative z-10 px-4 md:px-8">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        <div ref={testimonialsRef} className="reveal w-full flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 text-[#c68efd] border border-purple-500/20 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider w-fit mb-4">
            Testimonial
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Client Success Stories</h2>
          <p className="text-neutral-400 text-base max-w-2xl font-light mb-16">
            Discover what our clients say about their experiences and success working with us.
          </p>
        </div>

        <div className="w-full max-w-3xl glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden min-h-[300px] flex flex-col justify-between shadow-2xl">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#a020f0] to-transparent"></div>

          <div className="mb-8 relative">
            <span className="text-7xl font-serif text-[#a020f0]/30 select-none absolute top-[-8px] left-0 leading-none animate-quote-float">
              &ldquo;
            </span>
            <div
              className={`transition-all duration-300 ${
                testimonialFading ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
              }`}
            >
              <p className="text-neutral-200 text-base md:text-lg leading-relaxed relative z-10 italic font-light pt-6 px-4">
                {testimonials[activeTestimonial].text}
              </p>
            </div>
          </div>

          <div
            className={`flex flex-col items-center gap-4 mt-auto transition-all duration-300 ${
              testimonialFading ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#a020f0]/10 flex items-center justify-center border border-[#a020f0]/20 font-bold text-white font-mono uppercase text-sm">
                {testimonials[activeTestimonial].name[0]}
              </div>
              <div className="text-left">
                <h4 className="font-bold text-white text-base">{testimonials[activeTestimonial].name}</h4>
                <span className="text-xs text-neutral-400">Warm regards</span>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => changeTestimonial(idx)}
                  className={`h-3 rounded-full transition-all duration-500 ${
                    activeTestimonial === idx ? "bg-[#a020f0] w-8" : "bg-neutral-700 hover:bg-neutral-500 w-3"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
