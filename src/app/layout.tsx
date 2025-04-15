import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FontStyles from "@/components/FontStyles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Next.js Website",
  description: "A website built with Next.js and custom fonts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <FontStyles />
      </head>
      <body className={inter.className}>
        <main className="min-h-screen bg-white">
          {children}
        </main>
      </body>
    </html>
  );
}
