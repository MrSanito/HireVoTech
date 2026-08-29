"use client";

import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Approach from "./components/Approach";
import WhyChooseUs from "./components/WhyChooseUs";
import PlansPricing from "./components/PlansPricing";
import Process from "./components/Process";
import Mission from "./components/Mission";
import TrustedClients from "./components/TrustedClients";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import ReferralBanner from "./components/ReferralBanner";
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
  const [activeSection, setActiveSection] = useState("");

  // Scroll-aware navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["about", "approach", "why-us", "plans", "process"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll reveal refs
  const aboutRef = useScrollReveal();
  const approachRef = useScrollReveal();
  const approachCardsRef = useScrollReveal();
  const whyUsRef = useScrollReveal();
  const reasonsRef = useScrollReveal();
  const plansRef = useScrollReveal();
  const investRef = useScrollReveal();
  const processRef = useScrollReveal();
  const missionRef = useScrollReveal();
  const logosRef = useScrollReveal();
  const statsRef = useScrollReveal();
  const testimonialsRef = useScrollReveal();
  const referRef = useScrollReveal();

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

      {/* ═══ Navbar ═══ */}
      <Navbar scrolled={scrolled} activeSection={activeSection} />

      {/* ═══ Hero Section ═══ */}
      <Hero />

      {/* ═══ Section: About HireVoTech ═══ */}
      <About revealRef={aboutRef} />

      {/* ═══ Section: Our Approach ═══ */}
      <Approach headingRef={approachRef} cardsRef={approachCardsRef} />

      {/* ═══ Section: Why Choose Us ═══ */}
      <WhyChooseUs headingRef={whyUsRef} reasonsRef={reasonsRef} />

      {/* ═══ Section: Subscription & Investment Plans ═══ */}
      <PlansPricing plansRef={plansRef} investRef={investRef} />

      {/* ═══ Section: Our Process ═══ */}
      <Process processRef={processRef} />

      {/* ═══ Section: Mission Statement ═══ */}
      <Mission missionRef={missionRef} />

      {/* ═══ Section: Trusted Clients Logo Slider ═══ */}
      <TrustedClients logosRef={logosRef} />

      {/* ═══ Section: Placement Performance Stats ═══ */}
      <Stats statsRef={statsRef} stats={animatedStats} />

      {/* ═══ Section: Testimonials Success Stories ═══ */}
      <Testimonials testimonialsRef={testimonialsRef} />

      {/* ═══ Section: Refer & Earn Banner ═══ */}
      <ReferralBanner referRef={referRef} />

      {/* ═══ Footer ═══ */}
      <Footer />
    </div>
  );
}