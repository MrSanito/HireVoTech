import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { OrganizationJsonLd, WebSiteJsonLd } from "./components/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteTitle = "HireVoTech | Technical Recruitment & Career Advisory";
const siteDescription =
  "HireVoTech is a premier technical career consulting and talent acquisition firm. We connect top software engineering talent with high-growth technology enterprises through proactive career marketing, 1-on-1 interview preparation, and zero upfront risk deferred success fees.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hirevotech.com"),
  title: {
    default: siteTitle,
    template: "%s | HireVoTech",
  },
  description: siteDescription,
  applicationName: "HireVoTech",
  authors: [{ name: "HireVoTech LLC", url: "https://www.hirevotech.com" }],
  creator: "HireVoTech LLC",
  publisher: "HireVoTech LLC",
  keywords: [
    "Technical Recruitment",
    "Software Engineering Jobs",
    "IT Staffing Firm",
    "Career Consulting",
    "Deferred Placement Fee",
    "ATS Resume Optimization",
    "Technical Interview Preparation",
    "Executive Tech Search",
    "Full-Stack Developer Jobs",
    "Cloud DevOps Recruitment",
    "AI ML Engineer Hiring",
    "Houston TX Technical Recruiter",
    "Tech Career Advisory",
  ],
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://www.hirevotech.com",
    siteName: "HireVoTech",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HireVoTech - Technical Recruitment & Career Advisory",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google7e30e21abcbf888f",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
      data-theme="dark"
    >
      <head>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
      </head>
      <body className="min-h-full flex flex-col bg-[#08000d] text-[#f4f5f4]">{children}</body>
    </html>
  );
}


