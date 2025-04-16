import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { uncutSans, uncutPlan8 } from "@/styles/fonts";

export const metadata: Metadata = {
  title: "Abhishek Shankar",
  description: "Personal website of Abhishek Shankar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${uncutSans.variable} ${uncutPlan8.variable}`}>
      <body className="font-sans">
        <Navbar />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
