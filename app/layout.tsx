import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "HireVoTech | Recruitment & Career Partners",
  description: "Whether you're searching for your next opportunity or aiming to advance your career, HireVoTech provides personalized recruitment and career support to help you achieve your professional goals.",
  verification: {
    google: "google7e30e21abcbf888f",
  },
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
      <body className="min-h-full flex flex-col bg-[#08000d] text-[#f4f5f4]">{children}</body>
    </html>
  );
}

