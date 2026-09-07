const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const logoBase64 = fs.readFileSync(path.resolve('public', 'logo.png')).toString('base64');
const logoDataUri = 'data:image/png;base64,' + logoBase64;

const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700;800&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: 1200px;
    height: 630px;
    background: #0D0C41;
    font-family: 'Plus Jakarta Sans', sans-serif;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 60px 70px;
    position: relative;
    overflow: hidden;
  }
  .bg-glow-1 {
    position: absolute;
    top: -100px;
    right: -100px;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(72, 70, 212, 0.45) 0%, rgba(13, 12, 65, 0) 70%);
    border-radius: 50%;
  }
  .bg-glow-2 {
    position: absolute;
    bottom: -150px;
    left: -100px;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(124, 58, 237, 0.3) 0%, rgba(13, 12, 65, 0) 70%);
    border-radius: 50%;
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 10;
  }
  .logo-box {
    background: #FFFFFF;
    padding: 10px 22px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    box-shadow: 0 4px 20px rgba(0,0,0,0.25);
  }
  .logo-box img {
    height: 48px;
    width: auto;
  }
  .badge {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #A5B4FC;
    padding: 8px 18px;
    border-radius: 30px;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.8px;
    text-transform: uppercase;
  }
  .main {
    z-index: 10;
    margin-top: -10px;
  }
  h1 {
    font-size: 50px;
    font-weight: 800;
    line-height: 1.18;
    letter-spacing: -0.5px;
    color: #FFFFFF;
    margin-bottom: 18px;
  }
  h1 span {
    background: linear-gradient(135deg, #818CF8, #C084FC);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p {
    font-size: 21px;
    color: #CBD5E1;
    max-width: 950px;
    line-height: 1.45;
    font-weight: 500;
  }
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
    padding-top: 24px;
    z-index: 10;
  }
  .tags {
    display: flex;
    gap: 14px;
  }
  .tag-item {
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.15);
    padding: 6px 14px;
    border-radius: 8px;
    font-size: 13.5px;
    color: #E2E8F0;
    font-weight: 600;
  }
  .domain {
    font-size: 18px;
    font-weight: 700;
    color: #818CF8;
    letter-spacing: 0.5px;
  }
</style>
</head>
<body>
  <div class="bg-glow-1"></div>
  <div class="bg-glow-2"></div>
  <div class="header">
    <div class="logo-box">
      <img src="${logoDataUri}" alt="HireVoTech">
    </div>
    <div class="badge">Enterprise Recruitment & Career Advisory</div>
  </div>
  <div class="main">
    <h1>
      Empowering Elite Tech Careers. <br>
      Scaling <span>World-Class Teams.</span>
    </h1>
    <p>
      Direct hiring manager outreach, 1-on-1 interview preparation, and zero upfront risk deferred success fees for top software talent and tech enterprises.
    </p>
  </div>
  <div class="footer">
    <div class="tags">
      <div class="tag-item">⚡ 48-72h Sourcing</div>
      <div class="tag-item">🎯 98% Match Alignment</div>
      <div class="tag-item">🤝 Zero Upfront Cost</div>
    </div>
    <div class="domain">www.hirevotech.com</div>
  </div>
</body>
</html>`;

const tempHtml = path.resolve('public', 'og_temp.html');
const outPng = path.resolve('public', 'og-image.png');
fs.writeFileSync(tempHtml, html);

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const cmd = `"${chromePath}" --headless=new --disable-gpu --window-size=1200,630 --screenshot="${outPng}" "file:///${tempHtml.replace(/\\/g, '/')}"`;

execSync(cmd);
if (fs.existsSync(tempHtml)) fs.unlinkSync(tempHtml);
console.log('Generated public/og-image.png at:', outPng);
