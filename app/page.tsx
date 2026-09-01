"use client";

import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedClients from "./components/TrustedClients";
import MissionQuote from "./components/MissionQuote";
import TeamSection from "./components/TeamSection";
import RunningMarquee from "./components/RunningMarquee";
import ServicesSection from "./components/ServicesSection";
import JobListingsSection from "./components/JobListingsSection";
import Stats from "./components/Stats";
import FAQSection from "./components/FAQSection";
import CTABanner from "./components/CTABanner";
import ArticlesSection from "./components/ArticlesSection";
import Footer from "./components/Footer";

/* ─── Custom Hook: Scroll Reveal ─── */
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

/* ─── Custom Hook: Animated Counter ─── */
function useAnimatedCounter(target: number, duration: number = 2000, suffix: string = "") {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [hasStarted, target, duration]);

  return { ref, displayValue: `${count}${suffix}` };
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll reveal refs
  const logosRef = useScrollReveal();
  const statsRef = useScrollReveal();

  // Animated stat counters
  const stat1 = useAnimatedCounter(80, 2000, "%");
  const stat2 = useAnimatedCounter(5, 1500, "+");
  const stat3 = useAnimatedCounter(860, 2500, "+");
  const stat4 = useAnimatedCounter(60, 2000, "+");

  const animatedStats = [
    { ...stat1, label: "Placement Success Rate" },
    { ...stat2, label: "Years of Industry Expertise" },
    { ...stat3, label: "Successful Placements" },
    { ...stat4, label: "Partnered Tech Companies" },
  ];

  return (
    <div className="min-h-screen bg-[#FCFCFC] text-[#0D0C41] selection:bg-[#4846D4] selection:text-white relative overflow-hidden font-sans dot-grid">
      {/* Subtle background ambient glow */}
      <div className="absolute top-[-10%] left-[-5%] w-[550px] h-[550px] rounded-full bg-[#4846D4]/5 blur-[160px] pointer-events-none orb-float-1"></div>
      <div className="absolute top-[35%] right-[-10%] w-[650px] h-[650px] rounded-full bg-[#F0F0FF] blur-[180px] pointer-events-none orb-float-2"></div>

      {/* ═══ 1. Navbar & Capsule Header ═══ */}
      <Navbar scrolled={scrolled} activeSection="home" />

      {/* ═══ 2. Hero Section ═══ */}
      <Hero />

      {/* ═══ 3. Trusted Clients Logo Marquee ═══ */}
      <TrustedClients logosRef={logosRef} />

      {/* ═══ 4. Leadership / Mission Quote Card ═══ */}
      <MissionQuote />

      {/* ═══ 5. Meet the People Behind the Mission (Team) ═══ */}
      <TeamSection />

      {/* ═══ 6. Dual Tilted Running Text Ticker Banner (-3deg & +3deg) ═══ */}
      <RunningMarquee />

      {/* ═══ 7. Core Services Grid (4 Pillars) ═══ */}
      <ServicesSection />

      {/* ═══ 8. Job Listings & Career Categories Tabs ═══ */}
      <JobListingsSection />

      {/* ═══ 9. Placement Performance Stats ═══ */}
      <Stats statsRef={statsRef} stats={animatedStats} />

      {/* ═══ 10. FAQ Accordion ═══ */}
      <FAQSection />

      {/* ═══ 11. High-Impact CTA Banner ═══ */}
      <CTABanner />

      {/* ═══ 12. Latest Articles & Industry Insights ═══ */}
      <ArticlesSection />

      {/* ═══ 13. Modern Footer & Newsletter ═══ */}
      <Footer />
    </div>
  );
}