"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/shop", label: "Shop" },
  { href: "/library", label: "The Library" },
  { href: "/scenarios", label: "Field Scenarios" },
  { href: "/wholesale", label: "Wholesale" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur border-b border-[#2e2e2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-[#e85d04] text-2xl font-bold">▣</span>
          <span
            className="text-[#f5f1ea] font-bold tracking-wide uppercase text-sm"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Blackout Box
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[#c8c3ba] hover:text-[#f5f1ea] text-sm transition-colors uppercase tracking-wider"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/shop"
            className="bg-[#e85d04] hover:bg-[#ff6b00] text-white text-sm font-bold px-5 py-2 uppercase tracking-wider transition-colors"
          >
            Shop the Kits
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#f5f1ea] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-[#2e2e2e] px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[#c8c3ba] hover:text-[#f5f1ea] text-sm uppercase tracking-wider"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/shop"
            className="bg-[#e85d04] hover:bg-[#ff6b00] text-white text-sm font-bold px-5 py-3 uppercase tracking-wider text-center transition-colors"
            onClick={() => setOpen(false)}
          >
            Shop the Kits
          </Link>
        </div>
      )}
    </header>
  );
}
