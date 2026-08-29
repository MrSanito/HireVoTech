"use client";

import React, { useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../components/About";
import Approach from "../components/Approach";
import WhyChooseUs from "../components/WhyChooseUs";
import Mission from "../components/Mission";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function AboutPage() {
  const aboutRef = useScrollReveal();
  const approachRef = useScrollReveal();
  const approachCardsRef = useScrollReveal();
  const whyUsRef = useScrollReveal();
  const reasonsRef = useScrollReveal();
  const missionRef = useScrollReveal();
  const testimonialsRef = useScrollReveal();

  const animatedStats = [
    { ref: useRef<HTMLSpanElement>(null), displayValue: "80%", label: "Placement Success Rate" },
    { ref: useRef<HTMLSpanElement>(null), displayValue: "5+", label: "Years of Industry Expertise" },
    { ref: useRef<HTMLSpanElement>(null), displayValue: "860+", label: "Successful Placements" },
    { ref: useRef<HTMLSpanElement>(null), displayValue: "60+", label: "Partnered Companies" },
  ];

  return (
    <div className="min-h-screen bg-[#08000d] text-white selection:bg-[#a020f0] selection:text-white relative overflow-hidden font-sans dot-grid">
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#a020f0]/10 blur-[150px] pointer-events-none orb-float-1"></div>
      <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#ff4fd8]/5 blur-[180px] pointer-events-none orb-float-2"></div>

      <Navbar scrolled={true} activeSection="about" />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 px-4 md:px-8 max-w-5xl mx-auto text-center z-10">
        <span className="text-xs uppercase tracking-[0.35em] text-[#ff4fd8] font-semibold mb-4 block drop-shadow-[0_0_18px_rgba(255,79,216,0.35)]">
          WHO WE ARE
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-b from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent mb-6">
          Empowering Next-Gen <br />
          <span className="text-[#ff4fd8] drop-shadow-[0_0_25px_rgba(255,79,216,0.35)]">Tech Careers & Recruitment</span>
        </h1>
        <p className="text-lg text-neutral-300 max-w-3xl mx-auto font-light leading-relaxed">
          HireVoTech bridges ambitious talent with leading enterprise employers through personalized marketing, hands-on interview preparation, and transparent career placement.
        </p>
      </section>

      {/* About Section Component */}
      <About revealRef={aboutRef} />

      {/* Approach Section */}
      <Approach headingRef={approachRef} cardsRef={approachCardsRef} />

      {/* Mission */}
      <Mission missionRef={missionRef} />

      {/* Why Choose Us */}
      <WhyChooseUs headingRef={whyUsRef} reasonsRef={reasonsRef} />

      {/* Stats */}
      <Stats stats={animatedStats} />

      {/* Testimonials */}
      <Testimonials testimonialsRef={testimonialsRef} />

      <Footer />
    </div>
  );
}
