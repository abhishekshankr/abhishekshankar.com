import type { Metadata } from "next";
import "./globals.css";
import FontStyles from "@/components/FontStyles";

export const metadata: Metadata = {
  title: "abhishekshankar.com",
  description: "Personal website of Abhishek Shankar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <FontStyles />
        {children}
      </body>
    </html>
  );
}
