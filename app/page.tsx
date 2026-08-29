"use client";

import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedClients from "./components/TrustedClients";
import Approach from "./components/Approach";
import Process from "./components/Process";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
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
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll reveal refs
  const approachRef = useScrollReveal();
  const approachCardsRef = useScrollReveal();
  const processRef = useScrollReveal();
  const logosRef = useScrollReveal();
  const statsRef = useScrollReveal();
  const testimonialsRef = useScrollReveal();

  // Animated stat counters
  const stat1 = useAnimatedCounter(80, 2000, "%");
  const stat2 = useAnimatedCounter(5, 1500, "+");
  const stat3 = useAnimatedCounter(860, 2500, "+");
  const stat4 = useAnimatedCounter(60, 2000, "+");
  const animatedStats = [
    { ...stat1, label: "Placement Success Rate" },
    { ...stat2, label: "Years of Industry Expertise" },
    { ...stat3, label: "Successful Placements" },
    { ...stat4, label: "Partnered Companies" },
  ];

  return (
    <div className="min-h-screen bg-[#08000d] text-white selection:bg-[#a020f0] selection:text-white relative overflow-hidden font-sans dot-grid">
      {/* Floating decorative orbs */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#a020f0]/10 blur-[150px] pointer-events-none orb-float-1"></div>
      <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#c68efd]/5 blur-[180px] pointer-events-none orb-float-2"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#8482ff]/5 blur-[160px] pointer-events-none orb-float-3"></div>

      {/* ═══ 1. Navbar ═══ */}
      <Navbar scrolled={scrolled} />

      {/* ═══ 2. Hero Section (Cleaned & Focused) ═══ */}
      <Hero />

      {/* ═══ 3. Trusted Clients Logo Slider (Immediate Social Proof) ═══ */}
      <TrustedClients logosRef={logosRef} />

      {/* ═══ 4. Our Approach (4 Core Pillars) ═══ */}
      <Approach headingRef={approachRef} cardsRef={approachCardsRef} />

      {/* ═══ 5. Our 7-Step Process (Roadmap) ═══ */}
      <Process processRef={processRef} />

      {/* ═══ 6. Placement Performance Stats ═══ */}
      <Stats statsRef={statsRef} stats={animatedStats} />

      {/* ═══ 7. Testimonials & Client Success Stories ═══ */}
      <Testimonials testimonialsRef={testimonialsRef} />

      {/* ═══ 8. Footer ═══ */}
      <Footer />
    </div>
  );
}