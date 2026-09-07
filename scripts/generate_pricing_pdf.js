const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const logoBase64 = fs.readFileSync(path.resolve('public', 'logo.png')).toString('base64');
const logoDataUri = 'data:image/png;base64,' + logoBase64;

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HireVoTech - Pricing & Investment Plans</title>
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

    /* Refined Pricing Cards */
    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }

    .pricing-card {
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: 12px;
      padding: 20px 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
    }

    .pricing-card-featured {
      border: 1.5px solid #4846D4;
      background: #FAF5FF;
      background: linear-gradient(180deg, #FAF8FF 0%, #FFFFFF 100%);
    }

    .featured-badge {
      position: absolute;
      top: -1px;
      right: 18px;
      background: #4846D4;
      color: #FFFFFF;
      font-size: 9.5px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.6px;
      padding: 3px 10px;
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
    }

    .plan-header {
      margin-bottom: 12px;
    }

    .plan-name {
      font-size: 16px;
      font-weight: 700;
      color: #0F172A;
    }

    .plan-desc {
      font-size: 11px;
      color: #64748B;
      margin-top: 2px;
    }

    .fee-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8.5px 0;
      border-bottom: 1px solid #F1F5F9;
    }

    .fee-name {
      font-size: 11.5px;
      color: #64748B;
      font-weight: 500;
    }

    .fee-val {
      font-size: 15px;
      font-weight: 700;
      color: #0F172A;
    }

    .fee-val-accent {
      color: #4846D4;
      font-weight: 700;
    }

    .plan-features {
      list-style: none;
      margin-top: 14px;
      font-size: 11.5px;
      color: #334155;
      line-height: 1.6;
    }

    .plan-features li {
      margin-bottom: 6px;
      display: flex;
      align-items: flex-start;
      gap: 8px;
    }

    .check-icon {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #EEF2FF;
      color: #4846D4;
      font-size: 10px;
      font-weight: 700;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-top: 2px;
      flex-shrink: 0;
    }

    /* Refined Terms Callout Box */
    .terms-box {
      background: #F8FAFC;
      border: 1px solid #E2E8F0;
      border-radius: 10px;
      padding: 14px 18px;
      margin-top: 14px;
    }

    .terms-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 14px;
      text-align: left;
    }

    .term-item h4 {
      font-size: 11.5px;
      font-weight: 700;
      color: #0F172A;
      margin-bottom: 2px;
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .term-item p {
      font-size: 10.5px;
      color: #64748B;
      line-height: 1.45;
    }

    /* Refined Matrix Table */
    .clean-table {
      width: 100%;
      border-collapse: collapse;
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: 10px;
      overflow: hidden;
      margin-bottom: 16px;
    }

    .clean-table th {
      background: #F8FAFC;
      color: #475569;
      font-size: 10.5px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.6px;
      padding: 9.5px 14px;
      text-align: left;
      border-bottom: 1px solid #E2E8F0;
    }

    .clean-table th.th-highlight {
      color: #4846D4;
      background: #EEF2FF;
      font-weight: 700;
    }

    .clean-table td {
      padding: 8.5px 14px;
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
      padding: 2.5px 8px;
      border-radius: 4px;
      font-weight: 600;
      font-size: 10.5px;
      display: inline-block;
    }

    .tag-full {
      background: #EEF2FF;
      color: #4338CA;
      border: 1px solid #C7D2FE;
      padding: 2.5px 8px;
      border-radius: 4px;
      font-weight: 600;
      font-size: 10.5px;
      display: inline-block;
    }

    /* Refined Contact Box */
    .contact-container {
      background: #F8FAFC;
      border: 1px solid #E2E8F0;
      border-radius: 10px;
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
  <!-- PAGE 1: INVESTMENT PLANS & BREAKDOWN                        -->
  <!-- ══════════════════════════════════════════════════════════════ -->
  <div class="page">
    <div class="content-wrap">
      <div>
        <div class="header-bar">
          <img src="${logoDataUri}" alt="HireVoTech Logo" class="logo-img">
          <div class="header-tag">Investment & Pricing Guide</div>
        </div>

        <div style="margin-top: 20px;">
          <div class="badge-pill">Transparent Career Marketing</div>
          <h1 class="hero-title">
            Investment Plans & <span>Deferred Success Fees</span>
          </h1>
          <p class="lead-text">
            Straightforward and outcome-focused pricing. Choose between our Basic Career Marketing plan or our flagship Premium Full-Coaching plan with 1-on-1 FAANG mock interviews and post-placement salary installments.
          </p>
        </div>

        <!-- 2 Clean Pricing Cards -->
        <div class="grid-2">
          <!-- Basic Card -->
          <div class="pricing-card">
            <div>
              <div class="plan-header">
                <div class="plan-name">Basic Career Marketing</div>
                <div class="plan-desc">Profile overhaul & daily submissions</div>
              </div>
              
              <div class="fee-row">
                <span class="fee-name">Upfront Enrollment Fee</span>
                <span class="fee-val">USD $1,500</span>
              </div>
              <div class="fee-row">
                <span class="fee-name">Offer Acceptance Milestone</span>
                <span class="fee-val">USD $1,000</span>
              </div>
              <div class="fee-row" style="border-bottom: 1.5px solid #E2E8F0;">
                <span class="fee-name">Deferred Success Fee</span>
                <span class="fee-val fee-val-accent">12% of Year 1 pay</span>
              </div>

              <ul class="plan-features">
                <li><span class="check-icon">✓</span> Full Resume Preparation & ATS Score Optimization</li>
                <li><span class="check-icon">✓</span> Executive LinkedIn Profile Branding Overhaul</li>
                <li><span class="check-icon">✓</span> Daily Targeted Submissions across Top Portals</li>
                <li><span class="check-icon">✓</span> Direct Employer Career Page Submissions</li>
                <li><span class="check-icon">✓</span> Background Verification (BGC) Support</li>
                <li><span class="check-icon">✓</span> Success fee payable strictly after 1st salary</li>
              </ul>
            </div>
          </div>

          <!-- Premium Card -->
          <div class="pricing-card pricing-card-featured">
            <div class="featured-badge">MOST POPULAR</div>
            <div>
              <div class="plan-header">
                <div class="plan-name">Premium Full-Coaching</div>
                <div class="plan-desc">End-to-end technical training & 1-on-1 prep</div>
              </div>
              
              <div class="fee-row">
                <span class="fee-name">Upfront Enrollment Fee</span>
                <span class="fee-val">USD $3,000</span>
              </div>
              <div class="fee-row">
                <span class="fee-name">Offer Acceptance Milestone</span>
                <span class="fee-val">USD $2,500</span>
              </div>
              <div class="fee-row" style="border-bottom: 1.5px solid #4846D4;">
                <span class="fee-name">Deferred Success Fee</span>
                <span class="fee-val fee-val-accent" style="color: #4846D4;">10% of Year 1 pay</span>
              </div>

              <ul class="plan-features">
                <li><span class="check-icon">✓</span> <strong>Everything in Basic Plan included</strong></li>
                <li><span class="check-icon">✓</span> Live System Architecture & Technical Training</li>
                <li><span class="check-icon">✓</span> 1-on-1 Mock Interview Drills with Senior Mentors</li>
                <li><span class="check-icon">✓</span> Personalized Behavioral & Leadership Prep</li>
                <li><span class="check-icon">✓</span> Executive Salary & Counter-Offer Negotiation</li>
                <li><span class="check-icon">✓</span> Dedicated 1-on-1 Senior Placement Consultant</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Terms Highlight -->
        <div class="terms-box">
          <div class="terms-grid">
            <div class="term-item">
              <h4>💵 Zero Risk Milestone</h4>
              <p>Success fees are payable strictly after receiving your first official monthly paycheck.</p>
            </div>
            <div class="term-item">
              <h4>📅 3-Month Installments</h4>
              <p>Spread deferred placement success payments over flexible 3-month installment schedules.</p>
            </div>
            <div class="term-item">
              <h4>🎯 Offer Guarantee</h4>
              <p>Continuous daily application submissions and outreach until your target offer is secured.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="page-footer">
        <div class="footer-left">
          <span>Website: www.hirevotech.com</span>
          <span>Email: info@hirevotech.com</span>
        </div>
        <div class="footer-right">PRICING GUIDE · PAGE 01</div>
      </div>
    </div>
  </div>


  <!-- ══════════════════════════════════════════════════════════════ -->
  <!-- PAGE 2: COMPARISON MATRIX & OFFICIAL DIRECTORY              -->
  <!-- ══════════════════════════════════════════════════════════════ -->
  <div class="page">
    <div class="content-wrap">
      <div>
        <div class="header-bar">
          <img src="${logoDataUri}" alt="HireVoTech Logo" class="logo-img">
          <div class="header-tag">Feature Comparison & Contact</div>
        </div>

        <div style="margin-top: 18px;">
          <h2 class="section-title">Detailed <span>Plan Features Matrix</span></h2>
          <p class="lead-text" style="margin-bottom: 12px;">
            Full side-by-side feature breakdown to help you choose the right level of career marketing and technical coaching.
          </p>
        </div>

        <!-- Refined Matrix Table -->
        <table class="clean-table">
          <thead>
            <tr>
              <th style="width: 52%;">Feature / Deliverable</th>
              <th style="width: 24%; text-align: center;">Basic Plan</th>
              <th style="width: 24%; text-align: center;" class="th-highlight">Premium Plan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Profile Marketing & Positioning Strategy</td>
              <td style="text-align: center;"><span class="tag-included">Included</span></td>
              <td style="text-align: center;"><span class="tag-full">Included</span></td>
            </tr>
            <tr>
              <td>Resume Preparation & ATS Optimization</td>
              <td style="text-align: center;"><span class="tag-included">Included</span></td>
              <td style="text-align: center;"><span class="tag-full">Included</span></td>
            </tr>
            <tr>
              <td>LinkedIn Profile Branding & Inbound Overhaul</td>
              <td style="text-align: center;"><span class="tag-included">Included</span></td>
              <td style="text-align: center;"><span class="tag-full">Included</span></td>
            </tr>
            <tr>
              <td>Daily Targeted Job Submissions Across Top Portals</td>
              <td style="text-align: center;"><span class="tag-included">Included</span></td>
              <td style="text-align: center;"><span class="tag-full">Included</span></td>
            </tr>
            <tr>
              <td>Direct Outreach to Engineering Decision Makers</td>
              <td style="text-align: center;"><span class="tag-included">Included</span></td>
              <td style="text-align: center;"><span class="tag-full">Included</span></td>
            </tr>
            <tr>
              <td>Background Verification (BGC) Support</td>
              <td style="text-align: center;"><span class="tag-included">Included</span></td>
              <td style="text-align: center;"><span class="tag-full">Included</span></td>
            </tr>
            <tr>
              <td>Live Technical Training & System Design Coaching</td>
              <td style="text-align: center; color: #CBD5E1;">—</td>
              <td style="text-align: center;"><span class="tag-full">Full Access</span></td>
            </tr>
            <tr>
              <td>1-on-1 Interview Support & Coaching Drills</td>
              <td style="text-align: center; color: #CBD5E1;">—</td>
              <td style="text-align: center;"><span class="tag-full">Full Access</span></td>
            </tr>
            <tr>
              <td>Mock Interview Drills with Senior Engineering Leads</td>
              <td style="text-align: center; color: #CBD5E1;">—</td>
              <td style="text-align: center;"><span class="tag-full">Full Access</span></td>
            </tr>
            <tr>
              <td>Personalized Behavioral & Leadership Interview Prep</td>
              <td style="text-align: center; color: #CBD5E1;">—</td>
              <td style="text-align: center;"><span class="tag-full">Full Access</span></td>
            </tr>
            <tr>
              <td>Executive Salary & Total Comp Negotiation Advisory</td>
              <td style="text-align: center; color: #CBD5E1;">—</td>
              <td style="text-align: center;"><span class="tag-full">Full Access</span></td>
            </tr>
            <tr>
              <td>Dedicated Placement Consultant Assignment</td>
              <td style="text-align: center; font-size: 11px; color: #64748B;">Standard Queue</td>
              <td style="text-align: center;"><span class="tag-full">Dedicated 1-on-1</span></td>
            </tr>
          </tbody>
        </table>

        <!-- Refined Official Directory Card -->
        <h2 class="section-title" style="font-size: 18px; margin-bottom: 6px;">Enrollment & <span>Advisory Contact</span></h2>
        <p class="lead-text" style="margin-bottom: 10px;">
          Speak directly with our senior talent consultants to select your plan and start your placement sprint.
        </p>

        <div class="contact-container">
          <div class="contact-grid">
            <div class="contact-item">
              <div class="contact-icon">📞</div>
              <div>
                <div class="contact-label">Call & WhatsApp Support (Both Numbers)</div>
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
        <div class="footer-right">PRICING GUIDE · PAGE 02</div>
      </div>
    </div>
  </div>

</body>
</html>
`;

const htmlPath = path.resolve('HireVoTech_Pricing_Plans.html');
const pdfPath = path.resolve('HireVoTech_Pricing_Plans.pdf');

fs.writeFileSync(htmlPath, htmlContent);
console.log('Refined Pricing HTML written to:', htmlPath);

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const cmd = `"${chromePath}" --headless=new --disable-gpu --no-pdf-header-footer --print-to-pdf="${pdfPath}" "file:///${htmlPath.replace(/\\/g, '/')}"`;

console.log('Rendering Refined Pricing PDF...');
execSync(cmd);

const stats = fs.statSync(pdfPath);
console.log('SUCCESS: Generated Refined Pricing PDF at:', pdfPath, 'Size:', stats.size, 'bytes');
