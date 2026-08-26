"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { ArrowRight, Check, Menu, X, Mail, Phone, MapPin, Globe, Award, Sparkles, Briefcase, TrendingUp, DollarSign, HelpCircle, ChevronRight } from "lucide-react";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [selectedPlanTab, setSelectedPlanTab] = useState<"both" | "premium" | "basic">("both");
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [testimonialFading, setTestimonialFading] = useState(false);

  // Scroll-aware navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      // Active section detection
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
    { ...stat4, label: "Partnered Companies" }
  ];

  const clientLogos = [
    "https://framerusercontent.com/images/vRlMVcd1MmicJ9t5LsWOhee9iwo.png",
    "https://framerusercontent.com/images/1wvDdiubX6xWYsZB43JXAs6Vje4.png",
    "https://framerusercontent.com/images/i4SR0kJCha6bGQOCnT5DghPE.png",
    "https://framerusercontent.com/images/T6XRoD8cNpQqdJCq4NGf82RGJVQ.png",
    "https://framerusercontent.com/images/6fzKPiSTFaZLMY9pxIS6bZqCnI.png",
    "https://framerusercontent.com/images/LrB7SG6Pf0Qyo8nQt2vHGZgAg.png",
    "https://framerusercontent.com/images/KiHBaaTse93OTRmlSzGNpbuxXw4.png",
    "https://framerusercontent.com/images/VYVknS3K7ZDkhzOnhUpM0OMz1X0.png",
    "https://framerusercontent.com/images/3pc3KZPsrZ4baSUfyFZJV0pvE.png",
    "https://framerusercontent.com/images/2Y7k1FKpVWgXybFiWDcWsLlVM.png",
    "https://framerusercontent.com/images/7hM6O95Tt5pJJS87R8WxXp2SQc.png",
    "https://framerusercontent.com/images/1pF5JL1ALSclLCKquPGZNY9cNQ.png"
  ];

  const testimonials = [
    {
      name: "Udhayan",
      text: "I am writing to let you know how thankful I am for the exceptional service I have received. The professionalism and expertise demonstrated by your team have been truly exemplary. I want to extend a special thanks to Nilam Chauhan, our marketing specialist, whose efforts in connecting us with relevant companies have resulted in significant success. Her approach and commitment to excellence have been invaluable to me. Additionally, I want to express my appreciation to Riya Soni, my career advisor, for her invaluable guidance. Her personalized support has greatly facilitated my journey. This collaboration has been transformative. Thank you once again for your dedication and service."
    },
    {
      name: "Shreya Shinde",
      text: "I cannot thank you enough for all the guidance and support you provided throughout my job search. From helping me prepare for interviews with mock sessions to guiding me on possible questions and strategies, your insights were invaluable. More than that, your encouragement and motivation kept me going, even during challenging moments. I am incredibly grateful to have landed a business analyst role, and I truly believe that your support played a huge role in making this happen. Your mentorship and generosity in sharing your knowledge made a real difference, and I appreciate it more than words can express. Thank you again for everything—you have been a key part of my success, and I am so lucky to have had your guidance!"
    },
    {
      name: "Prasham Parekh",
      text: "I wanted to take a moment to express my heartfelt gratitude for the incredible support and guidance I received throughout my job search journey with Zenith consultancy. Thanks to your expert advice and tireless efforts, I have successfully landed my first job in the United States—a milestone that feels both exciting and deeply meaningful. A special thanks to Nilam whose dedication and persistence stood out remarkably. She went above and beyond to understand my strengths, communicate clearly, and follow up diligently—often acting as both a motivator and a strategist. It made a significant difference to have someone so invested in my journey. I am genuinely thankful to have partnered with your consultancy, and I look forward to recommending your services to others seeking career support."
    }
  ];

  const approachCards = [
    {
      tag: "Profile",
      title: "Profile Optimization",
      desc: "We strengthen your professional presence with resume optimization and LinkedIn profile management.",
      icon: <Award className="w-5 h-5 text-[#c19a4f]" />
    },
    {
      tag: "Marketing",
      title: "Strategic Job Marketing",
      desc: "Our recruitment experts actively market your profile and submit applications through leading job portals and company career websites.",
      icon: <TrendingUp className="w-5 h-5 text-[#c19a4f]" />
    },
    {
      tag: "Support",
      title: "Career Support",
      desc: "From application tracking to placement assistance, we stay with you throughout your job search journey.",
      icon: <Briefcase className="w-5 h-5 text-[#c19a4f]" />
    },
    {
      tag: "Preparation",
      title: "Interview & Technical Preparation",
      desc: "Premium members receive personalized interview coaching, mock interview sessions, and technical training to maximize their success.",
      icon: <Sparkles className="w-5 h-5 text-[#c19a4f]" />
    }
  ];

  const reasons = [
    "Dedicated Recruitment Specialists",
    "Subscription-Based Career Support",
    "Daily Job Applications",
    "Resume Preparation & Optimization",
    "LinkedIn Profile Management",
    "Applications on Leading Job Portals",
    "Company Career Website Applications",
    "Background Verification (BGC) Assistance",
    "Transparent Process",
    "Personalized Career Guidance",
    "Faster Access to Career Opportunities"
  ];

  const comparisonTable = [
    { name: "Profile Marketing", basic: true, premium: true },
    { name: "Resume Preparation & Optimization", basic: true, premium: true },
    { name: "LinkedIn Profile Management", basic: true, premium: true },
    { name: "Daily Job Applications", basic: true, premium: true },
    { name: "Applications through Leading Job Portals", basic: true, premium: true },
    { name: "Company Career Website Applications", basic: true, premium: true },
    { name: "Background Verification (BGC) Assistance", basic: true, premium: true },
    { name: "Technical Training", basic: false, premium: true },
    { name: "Interview Support", basic: false, premium: true },
    { name: "Mock Interview Sessions", basic: false, premium: true },
    { name: "Personalized Interview Preparation", basic: false, premium: true },
    { name: "Dedicated Career Guidance", basic: false, premium: true }
  ];

  const steps = [
    { number: "1", title: "Career Consultation", desc: "Initial assessment" },
    { number: "2", title: "Resume & LinkedIn Optimization", desc: "Profile overhaul" },
    { number: "3", title: "Profile Marketing", desc: "Strategic outreach" },
    { number: "4", title: "Daily Applications", desc: "Consistent effort" },
    { number: "5", title: "Interview Prep (Premium)", desc: "Mock sessions" },
    { number: "6", title: "Offer Acceptance", desc: "Negotiation support" },
    { number: "7", title: "Career Success", desc: "Ongoing guidance" }
  ];

  // Testimonial auto-advance with crossfade
  const changeTestimonial = useCallback((next: number) => {
    setTestimonialFading(true);
    setTimeout(() => {
      setActiveTestimonial(next);
      setTestimonialFading(false);
    }, 300);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      changeTestimonial((activeTestimonial + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [activeTestimonial, testimonials.length, changeTestimonial]);

  return (
    <div className="min-h-screen bg-[#08000d] text-white selection:bg-[#a020f0] selection:text-white relative overflow-hidden font-sans dot-grid">
      {/* Floating decorative orbs */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#a020f0]/10 blur-[150px] pointer-events-none orb-float-1"></div>
      <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#c68efd]/5 blur-[180px] pointer-events-none orb-float-2"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#8482ff]/5 blur-[160px] pointer-events-none orb-float-3"></div>

      {/* ═══ Navbar ═══ */}
      <header className={`navbar sticky top-0 z-50 border-b px-4 md:px-8 py-3 transition-all duration-500 ${
        scrolled 
          ? "bg-[#08000d]/95 backdrop-blur-xl border-white/10 shadow-lg shadow-black/20" 
          : "bg-[#08000d]/80 backdrop-blur-lg border-white/5"
      }`}>
        <div className="flex-1">
          <a href="./" className="flex items-center gap-2 group">
            <span className="text-xl font-bold tracking-wider bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent group-hover:opacity-90 transition-opacity">
              Hire<span className="text-[#a020f0]">Vo</span>Tech
            </span>
          </a>
        </div>
        <div className="flex-none gap-4 hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium gap-1 text-neutral-300">
            {[
              { id: "about", label: "About" },
              { id: "approach", label: "Approach" },
              { id: "why-us", label: "Why Choose Us" },
              { id: "plans", label: "Plans & Pricing" },
              { id: "process", label: "Process" }
            ].map((item) => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`} 
                  className={`nav-link hover:text-white transition-colors ${activeSection === item.id ? "text-white active" : ""}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#plans" className="btn btn-sm bg-[#a020f0] hover:bg-[#8019c0] text-white border-none font-semibold px-5 rounded-full transition-all hover:scale-105 btn-shimmer">
            Get Started
          </a>
        </div>
        {/* Mobile toggle */}
        <div className="flex-none lg:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="btn btn-square btn-ghost text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#08000d]/95 backdrop-blur-xl z-40 border-b border-white/10 p-6 flex flex-col gap-4" style={{ animation: "hero-fade-in 0.3s ease forwards" }}>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-neutral-300 hover:text-white py-2">About</a>
          <a href="#approach" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-neutral-300 hover:text-white py-2">Approach</a>
          <a href="#why-us" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-neutral-300 hover:text-white py-2">Why Choose Us</a>
          <a href="#plans" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-neutral-300 hover:text-white py-2">Plans & Pricing</a>
          <a href="#process" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-neutral-300 hover:text-white py-2">Process</a>
          <a href="#plans" onClick={() => setMobileMenuOpen(false)} className="btn bg-[#a020f0] hover:bg-[#8019c0] text-white border-none font-semibold w-full mt-2 rounded-full btn-shimmer">
            Get Started
          </a>
        </div>
      )}

      {/* ═══ Hero Section ═══ */}
      <section className="relative pt-20 pb-20 px-4 md:px-8 max-w-6xl mx-auto text-center flex flex-col items-center z-10">
        {/* Hero Tag */}
        <div className="hero-animate inline-flex items-center gap-2 bg-white/5 border border-white/10 hover:border-[#a020f0]/30 transition-all rounded-full p-1 pl-4 pr-1 mb-8 max-w-full">
          <span className="text-xs text-neutral-300 font-medium truncate">
            Save time and effort with our expert-driven solutions.
          </span>
          <a href="#plans" className="btn btn-xs bg-[#a020f0] hover:bg-[#8019c0] text-white border-none rounded-full flex items-center gap-1 font-semibold px-3 btn-shimmer">
            Get Started <ArrowRight size={12} />
          </a>
        </div>

        <span className="hero-animate-delay-1 text-xs uppercase tracking-[0.3em] text-[#c19a4f] font-semibold mb-4 block">
          RECRUITMENT & CAREER PARTNERS
        </span>
        <h1 className="hero-animate-delay-2 text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-b from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent max-w-4xl leading-[1.1] mb-4 animate-gradient-text">
          Where Passion Meets Next-Gen Technologies
        </h1>
        <h2 className="hero-animate-delay-3 text-xl md:text-2xl font-semibold text-[#c19a4f] mb-6">
          Your Career. Our Commitment.
        </h2>

        <p className="hero-animate-delay-4 text-lg md:text-xl text-neutral-400 max-w-3xl font-light mb-12 leading-relaxed">
          Whether you&apos;re searching for your next opportunity or aiming to advance your career, 
          HireVoTech provides personalized recruitment and career support to help you achieve your professional goals.
        </p>

        {/* Talent & Opportunity Connector */}
        <div className="hero-animate-delay-5 w-full max-w-3xl glass-card rounded-2xl p-8 relative mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            {/* Talent node */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-4 h-4 rounded-full border-4 border-[#c19a4f] bg-[#08000d] animate-pulse-ring"></span>
                <h3 className="text-xl font-bold tracking-widest uppercase text-white font-mono">TALENT</h3>
              </div>
              <p className="text-sm text-neutral-400">Skills, ambition, experience</p>
            </div>
            
            {/* Opportunity node */}
            <div className="flex flex-col items-center md:items-end text-center md:text-right">
              <div className="flex items-center gap-3 mb-2 justify-end">
                <h3 className="text-xl font-bold tracking-widest uppercase text-white font-mono">OPPORTUNITY</h3>
                <span className="w-4 h-4 rounded-full border-4 border-emerald-500 bg-[#08000d] animate-pulse-ring"></span>
              </div>
              <p className="text-sm text-neutral-400">The right role, right employer</p>
            </div>
          </div>
          
          {/* Animated Connector Line */}
          <div className="absolute top-1/2 left-8 right-8 hidden md:block -translate-y-1/2 overflow-hidden">
            <div className="h-[2px] bg-gradient-to-r from-[#c19a4f] via-neutral-700 to-emerald-500 animate-draw-line"></div>
          </div>
        </div>

        {/* 3 Core feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
          {[
            { img: "https://framerusercontent.com/images/k0aZSS1SJs2LleqVwNznKWtiFA.png", title: "Professional Resume Preparation", desc: "Create a professional resume aligned with current industry standards." },
            { img: "https://framerusercontent.com/images/PkhRYJ5u5eslClg3ilBjF3akW4.png", title: "Consultation and Marketing", desc: "Exceed Expectations with dedicated Team working on your Job search" },
            { img: "https://framerusercontent.com/images/tR6qj9WQxQ4wrAZHo3UTh2X44Y.png", title: "Training and Interview Preparation", desc: "Empower your career journey through professional interview preparation training." }
          ].map((card, idx) => (
            <div 
              key={idx} 
              className="glass-card rounded-2xl shadow-xl group cursor-default"
              style={{ animationDelay: `${0.8 + idx * 0.15}s` }}
            >
              <div className="card-body p-8 flex flex-col gap-6">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 group-hover:bg-purple-500/20 group-hover:border-purple-500/40 transition-all duration-300 group-hover:scale-110">
                  <img 
                    src={card.img} 
                    alt={card.title} 
                    className="w-7 h-7 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 font-mono group-hover:text-purple-200 transition-colors">{card.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ Section: About HireVoTech ═══ */}
      <section id="about" className="py-24 border-t border-white/5 bg-[#08000d]/40 relative z-10 px-4 md:px-8">
        <div ref={aboutRef} className="max-w-5xl mx-auto text-center reveal">
          <span className="text-xs uppercase tracking-widest text-[#c19a4f] font-semibold mb-3 block">
            ABOUT HIREVOTECH
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight max-w-3xl mx-auto">
            We help you build a stronger career — not just apply for jobs.
          </h2>
          <p className="text-lg text-neutral-300 max-w-4xl mx-auto leading-relaxed mb-12">
            HireVoTech is a career-focused recruitment and staffing company committed to helping 
            professionals secure the right opportunities. Our experienced recruitment specialists 
            work closely with candidates throughout their job search by optimizing their professional 
            profiles, strategically marketing their skills, and connecting them with leading employers.
          </p>

          <div className="relative max-w-3xl mx-auto glass-card border-l-4 !border-l-[#c19a4f] p-8 rounded-r-xl text-left">
            <p className="text-xl md:text-2xl italic text-neutral-200 font-serif leading-relaxed">
              &quot;We don&apos;t just help you apply for jobs — we help you build a stronger career.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* ═══ Section: Our Approach ═══ */}
      <section id="approach" className="py-24 border-t border-white/5 bg-[#08000d]/60 relative z-10 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div ref={approachRef} className="text-center mb-16 reveal">
            <span className="text-xs uppercase tracking-widest text-[#c19a4f] font-semibold mb-3 block">
              OUR APPROACH
            </span>
            <h3 className="text-2xl md:text-4xl font-bold text-white">
              Four ways we move your search forward
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children" ref={reasonsRef}>
            {approachCards.map((card, idx) => (
              <div 
                key={idx} 
                className="glass-card rounded-2xl group cursor-default"
              >
                <div className="card-body p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#c19a4f]/10 border border-[#c19a4f]/20 flex items-center justify-center group-hover:bg-[#c19a4f]/20 group-hover:scale-110 transition-all duration-300">
                        {card.icon}
                      </div>
                      <span className="badge badge-outline border-[#c19a4f] text-[#c19a4f] font-mono px-3 py-2 font-bold uppercase tracking-wider text-xs">
                        {card.tag}
                      </span>
                    </div>
                  </div>
                  <h4 className="card-title text-xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">{card.title}</h4>
                  <p className="text-neutral-400 leading-relaxed text-sm">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Section: Why Choose Us ═══ */}
      <section id="why-us" className="py-24 border-t border-white/5 bg-[#08000d]/40 relative z-10 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div ref={whyUsRef} className="text-center mb-16 reveal">
            <span className="text-xs uppercase tracking-widest text-[#c19a4f] font-semibold mb-3 block">
              WHY CHOOSE HIREVOTECH
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Eleven reasons candidates work with us
            </h2>
          </div>

          {/* 11 Reasons Grid */}
          <div ref={reasonsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-24 stagger-children">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-center gap-3 glass-card rounded-xl p-4 group cursor-default">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm group-hover:bg-emerald-500/30 group-hover:scale-110 transition-all duration-300">
                  <Check size={14} />
                </span>
                <span className="text-neutral-200 font-medium text-sm md:text-base group-hover:text-white transition-colors">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Section: Subscription Plans Table ═══ */}
      <section id="plans" className="py-24 border-t border-white/5 bg-[#08000d]/60 relative z-10 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div ref={plansRef} className="text-center mb-12 reveal">
            <span className="text-xs uppercase tracking-widest text-[#c19a4f] font-semibold mb-3 block">
              SUBSCRIPTION PLANS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Basic and Premium, side by side
            </h2>
          </div>

          <div className="glass-card rounded-2xl overflow-hidden shadow-2xl">
            {/* Table Navigation and Tabs */}
            <div className="p-6 bg-white/[0.01] border-b border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="text-lg font-bold text-white font-mono">Plan Features Comparison</h3>
              </div>
              <div className="tabs tabs-boxed bg-[#08000d] p-1 border border-white/5 rounded-lg">
                <button 
                  onClick={() => setSelectedPlanTab("both")} 
                  className={`tab tab-xs sm:tab-sm font-medium transition-all duration-300 ${selectedPlanTab === "both" ? "tab-active bg-[#a020f0] text-white" : "text-neutral-400 hover:text-white"}`}
                >
                  Both Plans
                </button>
                <button 
                  onClick={() => setSelectedPlanTab("premium")} 
                  className={`tab tab-xs sm:tab-sm font-medium transition-all duration-300 ${selectedPlanTab === "premium" ? "tab-active bg-[#a020f0] text-white" : "text-neutral-400 hover:text-white"}`}
                >
                  Premium Only
                </button>
                <button 
                  onClick={() => setSelectedPlanTab("basic")} 
                  className={`tab tab-xs sm:tab-sm font-medium transition-all duration-300 ${selectedPlanTab === "basic" ? "tab-active bg-[#a020f0] text-white" : "text-neutral-400 hover:text-white"}`}
                >
                  Basic Only
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="table table-zebra w-full text-left">
                <thead>
                  <tr className="bg-white/[0.02] border-b border-white/5 text-neutral-300 font-semibold font-mono uppercase tracking-wider text-xs">
                    <th className="py-4 px-6">Features</th>
                    {selectedPlanTab !== "premium" && <th className="py-4 px-6 text-center">Basic</th>}
                    {selectedPlanTab !== "basic" && <th className="py-4 px-6 text-center text-[#c19a4f]">Premium</th>}
                  </tr>
                </thead>
                <tbody className="text-neutral-300">
                  {comparisonTable.map((item, idx) => (
                    <tr key={idx} className="border-b border-white/5 hover:bg-white/[0.03] transition-colors">
                      <td className="font-medium py-4 px-6 text-white">{item.name}</td>
                      {selectedPlanTab !== "premium" && (
                        <td className="text-center py-4 px-6">
                          {item.basic ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/20">
                              <Check size={14} className="text-emerald-400" />
                            </span>
                          ) : (
                            <span className="text-neutral-600">—</span>
                          )}
                        </td>
                      )}
                      {selectedPlanTab !== "basic" && (
                        <td className="text-center py-4 px-6">
                          {item.premium ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/20">
                              <Check size={14} className="text-emerald-400" />
                            </span>
                          ) : (
                            <span className="text-neutral-600">—</span>
                          )}
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Section: Investment Plans (Cost Card Grid) ═══ */}
      <section className="py-24 border-t border-white/5 bg-[#08000d]/40 relative z-10 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div ref={investRef} className="text-center mb-16 reveal">
            <span className="text-xs uppercase tracking-widest text-[#c19a4f] font-semibold mb-3 block">
              INVESTMENT PLANS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
              What it costs to work with us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Basic Card */}
            <div className="glass-card rounded-2xl shadow-xl group">
              <div className="card-body p-8">
                <span className="badge bg-white/5 text-neutral-300 border-none font-bold uppercase tracking-wider text-xs px-3 py-2 mb-4">
                  Basic Plan
                </span>
                <div className="divider my-2 border-white/5"></div>
                <div className="space-y-4 my-6">
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-400">Upfront Fee</span>
                    <span className="text-2xl font-bold text-[#c19a4f]">USD $1,500</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-400">Offer Acceptance Fee</span>
                    <span className="text-lg font-semibold text-white">USD $1,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-400">Success Fee</span>
                    <span className="text-lg font-semibold text-emerald-400">12% of Year 1 pay</span>
                  </div>
                </div>
                <div className="divider my-2 border-white/5"></div>
                <ul className="text-xs text-neutral-400 space-y-2 leading-relaxed">
                  <li className="flex items-center gap-2"><Check size={12} className="text-emerald-400" /> Payable after receiving your first salary.</li>
                  <li className="flex items-center gap-2"><Check size={12} className="text-emerald-400" /> EMI options available.</li>
                  <li className="flex items-center gap-2"><Check size={12} className="text-emerald-400" /> Success fee payable within 3 months.</li>
                </ul>
              </div>
            </div>

            {/* Premium Card */}
            <div className="glass-card rounded-2xl relative overflow-hidden animate-border-glow !border-2 !border-[#a020f0] group">
              <div className="absolute top-0 right-0 bg-[#a020f0] text-white text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-bl-lg">
                RECOMMENDED
              </div>
              {/* Gradient glow inside */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#a020f0]/5 via-transparent to-[#a020f0]/3 pointer-events-none"></div>
              <div className="card-body p-8 relative z-10">
                <span className="badge bg-[#a020f0]/20 text-[#c68efd] border-none font-bold uppercase tracking-wider text-xs px-3 py-2 mb-4">
                  Premium Plan
                </span>
                <div className="divider my-2 border-white/5"></div>
                <div className="space-y-4 my-6">
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-400">Upfront Fee</span>
                    <span className="text-2xl font-bold text-[#c19a4f]">USD $3,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-400">Offer Acceptance Fee</span>
                    <span className="text-lg font-semibold text-white">USD $2,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-400">Success Fee</span>
                    <span className="text-lg font-semibold text-emerald-400">12% of Year 1 pay</span>
                  </div>
                </div>
                <div className="divider my-2 border-white/5"></div>
                <ul className="text-xs text-neutral-400 space-y-2 leading-relaxed">
                  <li className="flex items-center gap-2"><Check size={12} className="text-emerald-400" /> Payable after receiving your first salary.</li>
                  <li className="flex items-center gap-2"><Check size={12} className="text-emerald-400" /> EMI options available.</li>
                  <li className="flex items-center gap-2"><Check size={12} className="text-emerald-400" /> Success fee payable within 3 months.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Section: Our Process (Custom Timeline) ═══ */}
      <section id="process" className="py-24 border-t border-white/5 bg-[#08000d]/60 relative z-10 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div ref={processRef} className="text-center mb-16 reveal">
            <span className="text-xs uppercase tracking-widest text-[#c19a4f] font-semibold mb-3 block">
              OUR PROCESS
            </span>
            <h3 className="text-2xl md:text-4xl font-bold text-white">
              Seven steps from consultation to career success
            </h3>
          </div>

          {/* Desktop: Horizontal Timeline */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Connector line */}
              <div className="absolute top-6 left-0 right-0 h-[2px] bg-gradient-to-r from-[#a020f0]/20 via-[#a020f0]/50 to-[#a020f0]/20"></div>
              
              <div className="grid grid-cols-7 gap-2">
                {steps.map((step, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center group cursor-default">
                    <div className="w-12 h-12 rounded-full bg-[#a020f0]/10 border-2 border-[#a020f0]/40 flex items-center justify-center font-bold text-white font-mono text-sm relative z-10 group-hover:bg-[#a020f0]/30 group-hover:border-[#a020f0] group-hover:scale-110 transition-all duration-300">
                      {step.number}
                    </div>
                    <span className="mt-3 text-sm font-semibold text-white block max-w-[120px] mx-auto leading-relaxed group-hover:text-purple-200 transition-colors">
                      {step.title}
                    </span>
                    <span className="text-xs text-neutral-500 mt-1">{step.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile: Vertical Timeline */}
          <div className="md:hidden flex flex-col gap-0">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-4 group">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#a020f0]/10 border-2 border-[#a020f0]/40 flex items-center justify-center font-bold text-white font-mono text-sm flex-shrink-0 group-hover:bg-[#a020f0]/30 transition-all duration-300">
                    {step.number}
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="w-[2px] h-12 bg-gradient-to-b from-[#a020f0]/40 to-[#a020f0]/10"></div>
                  )}
                </div>
                <div className="pb-8">
                  <h4 className="font-semibold text-white text-base group-hover:text-purple-200 transition-colors">{step.title}</h4>
                  <p className="text-xs text-neutral-500 mt-1">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Section: Mission Statement ═══ */}
      <section className="py-16 border-t border-white/5 bg-[#08000d]/40 relative z-10 px-4">
        <div ref={missionRef} className="glass-card rounded-2xl p-8 max-w-4xl mx-auto text-center relative overflow-hidden reveal-scale">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c19a4f] to-transparent"></div>
          <span className="text-xs uppercase tracking-widest text-[#c19a4f] font-bold mb-3 block">
            OUR MISSION
          </span>
          <p className="text-xl md:text-2xl font-serif italic text-neutral-200 leading-relaxed max-w-3xl mx-auto">
            To empower professionals by providing strategic recruitment solutions, expert career guidance, 
            and personalized support that leads to meaningful employment and long-term career success.
          </p>
        </div>
      </section>

      {/* ═══ Section: Trusted Clients Logo Slider ═══ */}
      <section className="py-20 border-t border-white/5 bg-[#08000d]/60 relative z-10">
        <div ref={logosRef} className="max-w-6xl mx-auto px-4 md:px-8 text-center mb-12 reveal">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 text-[#c68efd] border border-purple-500/20 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider w-fit mb-4">
            Company
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Meet Our Trusted Clients</h2>
        </div>

        {/* Infinite scrolling logo track */}
        <div className="w-full relative overflow-hidden py-4 mask-gradient">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#08000d] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#08000d] to-transparent z-10 pointer-events-none"></div>

          <div className="flex gap-12 animate-marquee whitespace-nowrap min-w-full">
            {clientLogos.map((logo, idx) => (
              <div key={idx} className="flex-shrink-0 w-36 h-16 flex items-center justify-center glass-card rounded-xl p-3 !shadow-none">
                <img 
                  src={logo} 
                  alt={`Partner Logo ${idx + 1}`} 
                  className="max-w-full max-h-full object-contain filter opacity-60 hover:opacity-100 transition-opacity duration-300" 
                />
              </div>
            ))}
            {clientLogos.map((logo, idx) => (
              <div key={`dup-${idx}`} className="flex-shrink-0 w-36 h-16 flex items-center justify-center glass-card rounded-xl p-3 !shadow-none">
                <img 
                  src={logo} 
                  alt={`Partner Logo Duplicate ${idx + 1}`} 
                  className="max-w-full max-h-full object-contain filter opacity-60 hover:opacity-100 transition-opacity duration-300" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Placement Performance Stats ═══ */}
      <section className="py-24 border-t border-white/5 bg-[#08000d]/40 relative z-10 px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div ref={statsRef} className="reveal">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 text-[#c68efd] border border-purple-500/20 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider w-fit mb-4">
              Growth & Success
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-16">
              Placement Performance Overview
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {animatedStats.map((stat, index) => (
              <div 
                key={index} 
                className="glass-card p-8 rounded-2xl flex flex-col justify-center items-center relative overflow-hidden group cursor-default"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span 
                  ref={stat.ref} 
                  className="text-5xl font-extrabold tracking-tight bg-gradient-to-b from-white to-purple-200 bg-clip-text text-transparent mb-3 font-mono relative z-10"
                >
                  {stat.displayValue}
                </span>
                <span className="text-neutral-400 text-sm font-medium leading-relaxed relative z-10">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Testimonials Success Stories ═══ */}
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
              <span className="text-7xl font-serif text-[#a020f0]/30 select-none absolute top-[-8px] left-0 leading-none animate-quote-float">&ldquo;</span>
              <div className={`transition-all duration-300 ${testimonialFading ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"}`}>
                <p className="text-neutral-200 text-base md:text-lg leading-relaxed relative z-10 italic font-light pt-6 px-4">
                  {testimonials[activeTestimonial].text}
                </p>
              </div>
            </div>

            <div className={`flex flex-col items-center gap-4 mt-auto transition-all duration-300 ${testimonialFading ? "opacity-0" : "opacity-100"}`}>
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
                    className={`h-3 rounded-full transition-all duration-500 ${activeTestimonial === idx ? "bg-[#a020f0] w-8" : "bg-neutral-700 hover:bg-neutral-500 w-3"}`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Refer & Earn Banner ═══ */}
      <section className="py-20 border-t border-white/5 bg-[#08000d]/40 relative overflow-hidden z-10 px-4">
        <div ref={referRef} className="max-w-4xl mx-auto text-center glass-card rounded-3xl p-8 md:p-12 relative reveal-scale">
          <div className="absolute top-[-50px] left-[50%] -translate-x-1/2 w-48 h-48 rounded-full bg-[#a020f0]/10 blur-2xl pointer-events-none"></div>
          
          <span className="text-xs uppercase tracking-widest text-[#a020f0] font-bold mb-4 block">
            Referral Program
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6">
            Creative Tech Career Template to Launch Your Success Quickly and Easily
          </h2>
          <p className="text-neutral-400 text-sm max-w-2xl mx-auto leading-relaxed mb-8">
            Refer candidates or employers to our staffing agency and earn generous rewards. Use the link below to get started for free.
          </p>

          <a href="./refer-and-earn" className="btn bg-[#a020f0] hover:bg-[#8019c0] text-white border-none rounded-full px-8 gap-2 font-semibold transition-all hover:scale-105 btn-shimmer">
            🎁 Refer & Earn — Use for Free
          </a>
        </div>
      </section>

      {/* ═══ Footer ═══ */}
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
              <a href="mailto:info@hirevotech.com" className="flex items-center gap-1 hover:text-white transition-colors group">
                <Mail size={14} className="text-[#a020f0] group-hover:scale-110 transition-transform" /> info@hirevotech.com
              </a>
              <a href="https://www.hirevotech.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white transition-colors group">
                <Globe size={14} className="text-[#a020f0] group-hover:scale-110 transition-transform" /> www.hirevotech.com
              </a>
            </div>
            <div className="flex items-center gap-1 text-neutral-500 mt-1">
              <Phone size={14} /> +91 95748 44683
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center lg:justify-end gap-x-6 gap-y-2 text-xs font-medium">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#approach" className="hover:text-white transition-colors">Approach</a>
            <a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a>
            <a href="#plans" className="hover:text-white transition-colors">Plans</a>
            <a href="./partner-company" className="hover:text-white transition-colors">Partner Company</a>
            <a href="./faq" className="hover:text-white transition-colors">FAQ&apos;s</a>
            <a href="./privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="./terms-and-conditions" className="hover:text-white transition-colors">Terms and Conditions</a>
            <a href="./contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>

        {/* Gradient divider */}
        <div className="w-full max-w-6xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-8"></div>

        <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600">
          <p>&copy; 2026 HireVoTech. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
