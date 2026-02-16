import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "UniMind – AI Powered Real-Time Academic Community Platform",
  description:
    "UniMind is an AI-powered real-time academic community platform enabling Singlish to Sinhala conversion, real-time collaboration, and intelligent learning tools. Project Proposal – SLIIT IT3040.",
  keywords: [
    "UniMind",
    "SLIIT",
    "IT3040",
    "AI",
    "Academic",
    "Community",
    "Singlish",
    "Sinhala",
    "Real-Time",
    "WebSocket",
    "Next.js",
    "NestJS",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
