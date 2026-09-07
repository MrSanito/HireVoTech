const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const faviconBase64 = fs.readFileSync(path.resolve('public', 'favicon.png')).toString('base64');
const faviconDataUri = 'data:image/png;base64,' + faviconBase64;

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

function renderIcon(size, outPath, bg = 'transparent', paddingPercent = 8) {
  const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: ${size}px;
    height: ${size}px;
    background: ${bg};
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  img {
    width: ${100 - (paddingPercent * 2)}%;
    height: ${100 - (paddingPercent * 2)}%;
    object-fit: contain;
  }
</style>
</head>
<body>
  <img src="${faviconDataUri}">
</body>
</html>`;

  const tempHtml = path.resolve('public', `temp_${size}.html`);
  fs.writeFileSync(tempHtml, html);

  const cmd = `"${chromePath}" --headless=new --disable-gpu --window-size=${size},${size} --screenshot="${outPath}" "file:///${tempHtml.replace(/\\/g, '/')}"`;
  execSync(cmd);
  if (fs.existsSync(tempHtml)) fs.unlinkSync(tempHtml);
  console.log(`Generated icon (${size}x${size}) -> ${outPath}`);
}

// 1. Generate app/icon.png (Next.js automatically serves this at /icon.png for browser tabs)
renderIcon(512, path.resolve('app', 'icon.png'), 'transparent', 4);

// 2. Generate app/apple-icon.png (Next.js automatically serves this at /apple-icon.png for iOS bookmarks)
renderIcon(180, path.resolve('app', 'apple-icon.png'), 'transparent', 4);

// 3. Generate public/apple-touch-icon.png
renderIcon(180, path.resolve('public', 'apple-touch-icon.png'), 'transparent', 4);

// 4. Generate public/favicon-32x32.png
renderIcon(32, path.resolve('public', 'favicon-32x32.png'), 'transparent', 2);

// 5. Generate public/favicon-16x16.png
renderIcon(16, path.resolve('public', 'favicon-16x16.png'), 'transparent', 0);

// 6. Generate optimized public/favicon.png (replacing the 2.15MB uncompressed version with crisp 512x512)
const backupOriginal = path.resolve('public', 'favicon_original.png');
if (!fs.existsSync(backupOriginal)) {
  fs.copyFileSync(path.resolve('public', 'favicon.png'), backupOriginal);
}
renderIcon(512, path.resolve('public', 'favicon.png'), 'transparent', 4);

console.log('All favicons successfully generated and optimized!');
