const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const logoBase64 = fs.readFileSync(path.resolve('public', 'logo.png')).toString('base64');
const logoDataUri = 'data:image/png;base64,' + logoBase64;

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HireVoTech - Official Corporate Brochure</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

    @page {
      size: A4 portrait;
      margin: 0;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    body {
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      background-color: #FFFFFF;
      color: #0F172A;
      line-height: 1.55;
      font-size: 13px;
      -webkit-font-smoothing: antialiased;
    }

    .page {
      width: 210mm;
      height: 297mm;
      padding: 16mm 18mm;
      position: relative;
      background: #FFFFFF;
      page-break-after: always;
      break-after: page;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .content-wrap {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    /* Refined Top Header */
    .header-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 12px;
      border-bottom: 1px solid #E2E8F0;
    }

    .logo-img {
      height: 42px;
      width: auto;
      object-fit: contain;
    }

    .header-tag {
      font-size: 10.5px;
      font-weight: 600;
      color: #4846D4;
      background: #F8FAFC;
      padding: 5px 12px;
      border-radius: 20px;
      border: 1px solid #E2E8F0;
      text-transform: uppercase;
      letter-spacing: 0.6px;
    }

    /* Refined Bottom Footer */
    .page-footer {
      border-top: 1px solid #E2E8F0;
      padding-top: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 10.5px;
      color: #64748B;
    }

    .footer-left {
      display: flex;
      gap: 16px;
      font-weight: 500;
    }

    .footer-right {
      font-weight: 600;
      color: #4846D4;
      letter-spacing: 0.5px;
    }

    /* Refined Typography */
    .badge-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: #EEF2FF;
      color: #4846D4;
      border: 1px solid #C7D2FE;
      border-radius: 20px;
      padding: 4px 12px;
      font-size: 10.5px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.6px;
      margin-bottom: 10px;
    }

    h1.hero-title {
      font-size: 27px;
      font-weight: 700;
      line-height: 1.25;
      color: #0F172A;
      letter-spacing: -0.4px;
      margin-bottom: 8px;
    }

    h1.hero-title span {
      color: #4846D4;
    }

    h2.section-title {
      font-size: 20px;
      font-weight: 700;
      color: #0F172A;
      margin-bottom: 6px;
      letter-spacing: -0.3px;
    }

    h2.section-title span {
      color: #4846D4;
    }

    .lead-text {
      font-size: 12.5px;
      color: #475569;
      line-height: 1.6;
      margin-bottom: 16px;
      max-width: 95%;
    }

    /* Grids & Cards - Clean & Flat */
    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
    }

    .grid-3 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 12px;
    }

    .grid-4 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
    }

    .stat-card {
      background: #F8FAFC;
      border: 1px solid #E2E8F0;
      border-radius: 8px;
      padding: 14px 10px;
      text-align: center;
    }

    .stat-number {
      font-size: 24px;
      font-weight: 700;
      color: #4846D4;
      line-height: 1.1;
      margin-bottom: 2px;
    }

    .stat-label {
      font-size: 11px;
      font-weight: 700;
      color: #0F172A;
    }

    .stat-sub {
      font-size: 9.5px;
      font-weight: 500;
      color: #64748B;
      margin-top: 1px;
    }

    .feature-card {
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: 8px;
      padding: 14px 16px;
    }

    .feature-card h3 {
      font-size: 13.5px;
      font-weight: 700;
      color: #0F172A;
      margin-bottom: 4px;
    }

    .feature-card p {
      font-size: 11.5px;
      color: #475569;
      line-height: 1.5;
    }

    /* Service Block */
    .service-box {
      background: #F8FAFC;
      border: 1px solid #E2E8F0;
      border-left: 4px solid #4846D4;
      border-radius: 6px;
      padding: 14px 16px;
    }

    .service-box h3 {
      font-size: 14px;
      font-weight: 700;
      color: #0F172A;
      margin-bottom: 2px;
    }

    .service-box .service-tag {
      font-size: 10.5px;
      font-weight: 600;
      color: #4846D4;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 4px;
    }

    .service-box p {
      font-size: 11.5px;
      color: #475569;
      line-height: 1.5;
    }

    /* Steps */
    .step-box {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: 8px;
      padding: 10px 14px;
    }

    .step-num {
      width: 26px;
      height: 26px;
      border-radius: 6px;
      background: #0F172A;
      color: #FFFFFF;
      font-size: 12px;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .step-body h4 {
      font-size: 12px;
      font-weight: 700;
      color: #0F172A;
    }

    .step-body p {
      font-size: 11px;
      color: #475569;
      line-height: 1.4;
      margin-top: 2px;
    }

    /* Clean Solid Table */
    .clean-table {
      width: 100%;
      border-collapse: collapse;
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: 8px;
      overflow: hidden;
    }

    .clean-table th {
      background: #F8FAFC;
      color: #475569;
      font-size: 10.5px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.6px;
      padding: 9px 14px;
      text-align: left;
      border-bottom: 1px solid #E2E8F0;
    }

    .clean-table th.th-highlight {
      color: #4846D4;
      background: #EEF2FF;
      font-weight: 700;
    }

    .clean-table td {
      padding: 8px 14px;
      font-size: 11.5px;
      border-bottom: 1px solid #F1F5F9;
      color: #1E293B;
      font-weight: 500;
    }

    .clean-table tr:last-child td {
      border-bottom: none;
    }

    .clean-table tr:hover {
      background: #F8FAFC;
    }

    .tag-included {
      background: #F0FDF4;
      color: #166534;
      border: 1px solid #BBF7D0;
      padding: 2px 7px;
      border-radius: 4px;
      font-weight: 600;
      font-size: 10.5px;
      display: inline-block;
    }

    .tag-full {
      background: #EEF2FF;
      color: #4338CA;
      border: 1px solid #C7D2FE;
      padding: 2px 7px;
      border-radius: 4px;
      font-weight: 600;
      font-size: 10.5px;
      display: inline-block;
    }

    /* Refined Solid Banner */
    .solid-banner {
      background: #0F172A;
      color: #FFFFFF;
      border-radius: 8px;
      padding: 16px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .solid-banner h3 {
      font-size: 15px;
      font-weight: 700;
    }

    .solid-banner p {
      font-size: 11.5px;
      color: #CBD5E1;
      margin-top: 2px;
    }

    .banner-badge {
      background: #4846D4;
      color: #FFFFFF;
      font-weight: 600;
      font-size: 11px;
      padding: 6px 14px;
      border-radius: 6px;
      white-space: nowrap;
    }

    /* Refined Contact Section */
    .contact-container {
      background: #F8FAFC;
      border: 1px solid #E2E8F0;
      border-radius: 8px;
      padding: 16px 20px;
    }

    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
    }

    .contact-item {
      display: flex;
      gap: 10px;
      align-items: flex-start;
    }

    .contact-icon {
      width: 28px;
      height: 28px;
      border-radius: 6px;
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      color: #4846D4;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 13px;
      flex-shrink: 0;
      margin-top: 1px;
    }

    .contact-label {
      font-size: 10.5px;
      font-weight: 600;
      color: #64748B;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .contact-val {
      font-size: 12.5px;
      font-weight: 600;
      color: #0F172A;
      margin-top: 1px;
    }

    .contact-val-accent {
      color: #4846D4;
      font-weight: 700;
    }
  </style>
</head>
<body>

  <!-- ══════════════════════════════════════════════════════════════ -->
  <!-- PAGE 1: EXECUTIVE OVERVIEW                                  -->
  <!-- ══════════════════════════════════════════════════════════════ -->
  <div class="page">
    <div class="content-wrap">
      <div>
        <div class="header-bar">
          <img src="${logoDataUri}" alt="HireVoTech Logo" class="logo-img">
          <div class="header-tag">Corporate Profile & Services</div>
        </div>

        <div style="margin-top: 20px;">
          <div class="badge-pill">Enterprise Recruitment & Career Advisory</div>
          <h1 class="hero-title">
            Empowering Elite Technical Careers. <br>
            Scaling <span>World-Class Teams.</span>
          </h1>
          <p class="lead-text">
            HireVoTech is a premier technical career consulting and talent acquisition firm. We bridge the gap between top 1% software engineering talent and high-growth technology enterprises through proactive career marketing, dedicated interview coaching, and zero upfront risk deferred success fees.
          </p>
        </div>

        <!-- 4 Key Performance Stats -->
        <div class="grid-4" style="margin-bottom: 20px;">
          <div class="stat-card">
            <div class="stat-number">98%</div>
            <div class="stat-label">Match Alignment</div>
            <div class="stat-sub">Tech stack & team fit</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">48-72h</div>
            <div class="stat-label">Shortlist Speed</div>
            <div class="stat-sub">Pre-vetted top talent</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">500+</div>
            <div class="stat-label">Placements Made</div>
            <div class="stat-sub">Tier-1 & Fortune 500 orgs</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">$500</div>
            <div class="stat-label">Referral Reward</div>
            <div class="stat-sub">Direct wire bonus</div>
          </div>
        </div>

        <!-- 4 Core Pillars -->
        <h2 class="section-title">Why Industry Leaders Rely on <span>HireVoTech</span></h2>
        <div class="grid-2" style="margin-top: 8px;">
          <div class="feature-card">
            <h3>🎯 Precision Outbound Sourcing</h3>
            <p>
              We bypass passive job boards and actively headhunt rigorously screened candidates with proven expertise across modern stacks.
            </p>
          </div>
          <div class="feature-card">
            <h3>🤝 Success-Deferred Alignment</h3>
            <p>
              True risk-free partnerships. Candidates and employers only pay upon confirmed job offers and verified start milestones.
            </p>
          </div>
          <div class="feature-card">
            <h3>📑 Executive Decision-Maker Outreach</h3>
            <p>
              Custom-crafted cold email connection notes sent directly to hiring managers to accelerate application visibility and interview loops.
            </p>
          </div>
          <div class="feature-card">
            <h3>💡 1-on-1 Interview Mastery</h3>
            <p>
              Comprehensive preparation covering system architecture, live coding scenarios, behavioral storytelling, and offer negotiation.
            </p>
          </div>
        </div>
      </div>

      <div class="page-footer">
        <div class="footer-left">
          <span>Website: www.hirevotech.com</span>
          <span>Email: info@hirevotech.com</span>
        </div>
        <div class="footer-right">PAGE 01</div>
      </div>
    </div>
  </div>


  <!-- ══════════════════════════════════════════════════════════════ -->
  <!-- PAGE 2: SOLUTIONS & CORE DISCIPLINES                        -->
  <!-- ══════════════════════════════════════════════════════════════ -->
  <div class="page">
    <div class="content-wrap">
      <div>
        <div class="header-bar">
          <img src="${logoDataUri}" alt="HireVoTech Logo" class="logo-img">
          <div class="header-tag">Services & Capabilities</div>
        </div>

        <div style="margin-top: 18px;">
          <div class="badge-pill">Comprehensive Capabilities</div>
          <h2 class="section-title">Tailored Solutions for <span>Candidates & Employers</span></h2>
          <p class="lead-text" style="margin-bottom: 14px;">
            Whether you are expanding engineering capacity or targeting a major career advancement, our structured services ensure predictable, high-impact results.
          </p>
        </div>

        <!-- 4 Service Boxes -->
        <div class="grid-2" style="margin-bottom: 16px;">
          <div class="service-box" style="border-left-color: #4846D4;">
            <h3>1. Technical Talent Sourcing</h3>
            <div class="service-tag">Direct Sourcing · Full-Stack · Cloud · AI</div>
            <p>
              Building dedicated hiring pipelines for demanding technology stacks including React, Node.js, Python, Go, Kubernetes, AWS, and AI architectures.
            </p>
          </div>

          <div class="service-box" style="border-left-color: #059669;">
            <h3>2. Executive & Leadership Search</h3>
            <div class="service-tag">Directors · VPs of Engineering · CTOs</div>
            <p>
              Discreet, high-touch executive recruitment for leaders who build world-class engineering culture, drive technical vision, and generate revenue.
            </p>
          </div>

          <div class="service-box" style="border-left-color: #D97706;">
            <h3>3. Profile & Resume Optimization</h3>
            <div class="service-tag">ATS Algorithms · LinkedIn Branding · GitHub</div>
            <p>
              Reconstructing technical resumes and LinkedIn profiles to exceed ATS filters and capture hiring manager attention within the first 6 seconds.
            </p>
          </div>

          <div class="service-box" style="border-left-color: #7C3AED;">
            <h3>4. Corporate Employer Partnering</h3>
            <div class="service-tag">Rapid Sprints · Deferred Terms · Zero Overhead</div>
            <p>
              Guaranteed 48-to-72 hour vetted candidate shortlists for technology enterprises requiring rapid scale without agency markups.
            </p>
          </div>
        </div>

        <!-- Solid Enterprise Callout -->
        <div class="solid-banner" style="margin-bottom: 16px;">
          <div>
            <h3>Need Scalable Technical Hiring Support?</h3>
            <p>Request pre-screened technical candidate dossiers tailored to your stack.</p>
          </div>
          <div class="banner-badge">
            partner@hirevotech.com
          </div>
        </div>

        <!-- 3 Disciplines -->
        <h2 class="section-title" style="font-size: 17px; margin-bottom: 8px;">Primary Engineering Specializations</h2>
        <div class="grid-3">
          <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 6px; padding: 10px 12px;">
            <strong style="color: #0F172A; font-size: 12px; display: block; margin-bottom: 3px;">💻 Software Engineering</strong>
            <p style="font-size: 11px; color: #475569; line-height: 1.45;">Full-Stack, Backend (Java, Go, Python, Node), Frontend (React, Next.js, TypeScript).</p>
          </div>
          <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 6px; padding: 10px 12px;">
            <strong style="color: #0F172A; font-size: 12px; display: block; margin-bottom: 3px;">☁️ Cloud & DevOps</strong>
            <p style="font-size: 11px; color: #475569; line-height: 1.45;">AWS, Azure, GCP, Kubernetes, Terraform, Docker, CI/CD, SRE & Observability.</p>
          </div>
          <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 6px; padding: 10px 12px;">
            <strong style="color: #0F172A; font-size: 12px; display: block; margin-bottom: 3px;">🤖 AI, ML & Data</strong>
            <p style="font-size: 11px; color: #475569; line-height: 1.45;">LLM Engineering, ML Pipelines, Data Engineering, Snowflake, PyTorch, BI Analytics.</p>
          </div>
        </div>
      </div>

      <div class="page-footer">
        <div class="footer-left">
          <span>Website: www.hirevotech.com</span>
          <span>Email: support@hirevotech.com</span>
        </div>
        <div class="footer-right">PAGE 02</div>
      </div>
    </div>
  </div>


  <!-- ══════════════════════════════════════════════════════════════ -->
  <!-- PAGE 3: 7-STEP ROADMAP & PRICING PLANS                     -->
  <!-- ══════════════════════════════════════════════════════════════ -->
  <div class="page">
    <div class="content-wrap">
      <div>
        <div class="header-bar">
          <img src="${logoDataUri}" alt="HireVoTech Logo" class="logo-img">
          <div class="header-tag">Roadmap & Service Plans</div>
        </div>

        <div style="margin-top: 18px;">
          <div class="badge-pill">Predictable Delivery</div>
          <h2 class="section-title">Our <span>7-Step Career Roadmap</span></h2>
          <p class="lead-text" style="margin-bottom: 14px;">
            A rigorous, battle-tested execution sequence that guides candidates from technical assessment to signing top-bracket offers.
          </p>
        </div>

        <!-- 7-Step Sequence -->
        <div class="grid-2" style="gap: 8px; margin-bottom: 16px;">
          <div class="step-box">
            <div class="step-num">1</div>
            <div class="step-body">
              <h4>Initial Consultation & Profile Audit</h4>
              <p>In-depth review of your technical background, target roles, and market compensation benchmarks.</p>
            </div>
          </div>
          <div class="step-box">
            <div class="step-num">2</div>
            <div class="step-body">
              <h4>Resume & LinkedIn Rebuild</h4>
              <p>Full ATS optimization and executive LinkedIn repositioning to maximize recruiter inbound traffic.</p>
            </div>
          </div>
          <div class="step-box">
            <div class="step-num">3</div>
            <div class="step-body">
              <h4>Direct Decision-Maker Outreach</h4>
              <p>Strategic cold pitch notes delivered directly to Engineering VPs and Director-level decision makers.</p>
            </div>
          </div>
          <div class="step-box">
            <div class="step-num">4</div>
            <div class="step-body">
              <h4>Daily Verified Job Submissions</h4>
              <p>Active multi-channel daily applications with diligent tracking, follow-ups, and interview booking.</p>
            </div>
          </div>
          <div class="step-box">
            <div class="step-num">5</div>
            <div class="step-body">
              <h4>1-on-1 Technical Mock Interviews</h4>
              <p>Intensive live practice sessions covering system design, live coding, and behavioral questions.</p>
            </div>
          </div>
          <div class="step-box">
            <div class="step-num">6</div>
            <div class="step-body">
              <h4>Offer & Salary Negotiation</h4>
              <p>Expert counter-offer positioning to maximize total base salary, equity, and sign-on bonuses.</p>
            </div>
          </div>
          <div class="step-box" style="grid-column: span 2; background: #F8FAFC; border-color: #C7D2FE;">
            <div class="step-num" style="background: #4846D4;">7</div>
            <div class="step-body">
              <h4 style="color: #4846D4;">Placement Success & Deferred Fee Settlement</h4>
              <p style="color: #0F172A; font-weight: 600;">Seamless onboarding support and deferred fee settlement only after you successfully start your role.</p>
            </div>
          </div>
        </div>

        <!-- Clean Pricing Matrix -->
        <h2 class="section-title" style="font-size: 18px; margin-bottom: 8px;">Candidate <span>Service Plans Comparison</span></h2>
        <table class="clean-table">
          <thead>
            <tr>
              <th style="width: 52%;">Feature / Service Deliverable</th>
              <th style="width: 24%; text-align: center;">Basic Plan</th>
              <th style="width: 24%; text-align: center;" class="th-highlight">Premium Plan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Professional Resume & LinkedIn Rebuild</td>
              <td style="text-align: center;"><span class="tag-included">Included</span></td>
              <td style="text-align: center;"><span class="tag-full">Included</span></td>
            </tr>
            <tr>
              <td>Daily Verified Job Application Submissions</td>
              <td style="text-align: center;"><span class="tag-included">Included</span></td>
              <td style="text-align: center;"><span class="tag-full">Included</span></td>
            </tr>
            <tr>
              <td>Targeted Outreach to Engineering Decision Makers</td>
              <td style="text-align: center;"><span class="tag-included">Included</span></td>
              <td style="text-align: center;"><span class="tag-full">Included</span></td>
            </tr>
            <tr>
              <td>1-on-1 Technical & Behavioral Mock Interviews</td>
              <td style="text-align: center; color: #CBD5E1;">—</td>
              <td style="text-align: center;"><span class="tag-full">Full Access</span></td>
            </tr>
            <tr>
              <td>Executive Compensation & Salary Negotiation Advisory</td>
              <td style="text-align: center; color: #CBD5E1;">—</td>
              <td style="text-align: center;"><span class="tag-full">Full Access</span></td>
            </tr>
            <tr>
              <td>Dedicated Senior Placement Consultant</td>
              <td style="text-align: center; font-size: 11px; color: #64748B;">Standard Queue</td>
              <td style="text-align: center;"><span class="tag-full">Dedicated 1-on-1</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="page-footer">
        <div class="footer-left">
          <span>Website: www.hirevotech.com</span>
          <span>Email: info@hirevotech.com</span>
        </div>
        <div class="footer-right">PAGE 03</div>
      </div>
    </div>
  </div>


  <!-- ══════════════════════════════════════════════════════════════ -->
  <!-- PAGE 4: SUCCESS STORIES & OFFICIAL CONTACT DIRECTORY        -->
  <!-- ══════════════════════════════════════════════════════════════ -->
  <div class="page">
    <div class="content-wrap">
      <div>
        <div class="header-bar">
          <img src="${logoDataUri}" alt="HireVoTech Logo" class="logo-img">
          <div class="header-tag">Success & Contact Directory</div>
        </div>

        <!-- Success Reviews -->
        <div style="margin-top: 18px;">
          <div class="badge-pill">Proven Track Record</div>
          <h2 class="section-title">Candidate <span>Success Testimonials</span></h2>
        </div>

        <div class="grid-2" style="margin: 10px 0 16px 0;">
          <div class="feature-card" style="background: #F8FAFC; border-left: 4px solid #4846D4;">
            <p style="font-size: 11.5px; color: #334155; font-style: italic; line-height: 1.5;">
              "What sets HireVoTech apart is their tailored outreach strategy — they crafted custom connection notes directly targeted to Bloomberg decision-makers. That unique approach helped me get placed significantly faster!"
            </p>
            <div style="margin-top: 8px; font-weight: 700; font-size: 11.5px; color: #0F172A;">
              — Aniket Verma <span style="color: #4846D4; font-weight: 600;">· Software Engineer</span>
            </div>
          </div>

          <div class="feature-card" style="background: #F8FAFC; border-left: 4px solid #059669;">
            <p style="font-size: 11.5px; color: #334155; font-style: italic; line-height: 1.5;">
              "From mock technical sessions to salary framing, HireVoTech provided relentless support. Thanks to their expert team, I successfully landed my dream role in the US tech market!"
            </p>
            <div style="margin-top: 8px; font-weight: 700; font-size: 11.5px; color: #0F172A;">
              — Devanshi Patel <span style="color: #059669; font-weight: 600;">· Business & Data Analyst</span>
            </div>
          </div>
        </div>

        <!-- Referral Banner -->
        <div class="solid-banner" style="background: #4846D4; margin-bottom: 16px;">
          <div>
            <span style="font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.8px; color: #EEF2FF;">Referral Incentive Program</span>
            <h3 style="font-size: 15px; font-weight: 700; margin-top: 2px;">
              Refer a Candidate or Employer & Earn $500
            </h3>
            <p style="font-size: 11px; color: #ECECFE; margin-top: 2px;">
              Know someone looking for their next engineering role or an employer hiring tech talent? Refer them to HireVoTech and receive direct wire bonuses.
            </p>
          </div>
          <div style="font-size: 20px; font-weight: 700; color: #FFFFFF; font-family: 'Plus Jakarta Sans'; background: rgba(0,0,0,0.2); padding: 6px 14px; border-radius: 6px; white-space: nowrap;">
            $500 Reward
          </div>
        </div>

        <!-- Official Directory Card -->
        <h2 class="section-title" style="font-size: 18px; margin-bottom: 6px;">Official <span>Contact Directory</span></h2>
        <p class="lead-text" style="margin-bottom: 10px;">
          Connect directly with our recruitment and advisory specialists via phone, WhatsApp, or email.
        </p>

        <div class="contact-container">
          <div class="contact-grid">
            <div class="contact-item">
              <div class="contact-icon">📞</div>
              <div>
                <div class="contact-label">Call & WhatsApp (Available on Both)</div>
                <div class="contact-val contact-val-accent">+91 89684 47825</div>
                <div class="contact-val contact-val-accent">+91 95748 44683</div>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">✉️</div>
              <div>
                <div class="contact-label">Corporate Email Inquiries</div>
                <div class="contact-val">info@hirevotech.com</div>
                <div class="contact-val" style="font-size: 11.5px; color: #64748B;">support@hirevotech.com</div>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">💼</div>
              <div>
                <div class="contact-label">LinkedIn Official Page</div>
                <div class="contact-val contact-val-accent" style="font-size: 12px;">
                  linkedin.com/company/hirevotechllc/
                </div>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">📍</div>
              <div>
                <div class="contact-label">United States Headquarters</div>
                <div class="contact-val" style="font-size: 11px; font-weight: 500; color: #334155; line-height: 1.4;">
                  17350 STATE HWY, 249 STE 220 <br>Houston TX, USA-77064
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="page-footer">
        <div class="footer-left">
          <span>© 2026 HireVoTech Inc. All Rights Reserved.</span>
          <span>Connecting Ambition with Opportunity</span>
        </div>
        <div class="footer-right">PAGE 04</div>
      </div>
    </div>
  </div>

</body>
</html>
`;

const htmlPath = path.resolve('HireVoTech_Brochure.html');
const pdfPath = path.resolve('HireVoTech_Brochure.pdf');

fs.writeFileSync(htmlPath, htmlContent);
console.log('Refined Brochure HTML written to:', htmlPath);

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const cmd = `"${chromePath}" --headless=new --disable-gpu --no-pdf-header-footer --print-to-pdf="${pdfPath}" "file:///${htmlPath.replace(/\\/g, '/')}"`;

console.log('Rendering Refined Brochure PDF...');
execSync(cmd);

const stats = fs.statSync(pdfPath);
console.log('SUCCESS: Generated Refined Brochure PDF at:', pdfPath, 'Size:', stats.size, 'bytes');
