import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Blackout Box — Knowledge That Doesn't Need a Signal",
  description:
    "A rugged, off-grid AI device loaded with survival, medical, and repair know-how. Runs on battery or solar with zero internet required.",
  keywords: [
    "off-grid AI",
    "offline survival reference",
    "no-internet AI device",
    "off-grid knowledge",
    "survival device",
    "prepper tech",
    "offline medical guide",
  ],
  openGraph: {
    title: "Blackout Box — Knowledge That Doesn't Need a Signal",
    description:
      "Every answer you'd ever Google — about medicine, repair, food, water, and survival — in a box that works when the grid doesn't.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${barlowCondensed.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
