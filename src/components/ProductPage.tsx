"use client";

import Link from "next/link";
import { useState } from "react";

type Spec = { label: string; value: string };
type LibraryPack = "prepper" | "homesteading" | "tactical";

interface ProductPageProps {
  name: string;
  subtitle: string;
  price: number;
  tagline: string;
  description: string;
  specs: Spec[];
  inBox: string[];
  highlights: string[];
  otherKits: { name: string; href: string; price: number }[];
  fullLibraryIncluded?: boolean;
}

const packLabels: Record<LibraryPack, string> = {
  prepper: "Prepper / Survival",
  homesteading: "Homesteading",
  tactical: "Tactical / Medical",
};

export default function ProductPage({
  name,
  subtitle,
  price,
  tagline,
  description,
  specs,
  inBox,
  highlights,
  otherKits,
  fullLibraryIncluded = false,
}: ProductPageProps) {
  const [selectedPack, setSelectedPack] = useState<LibraryPack>("prepper");
  const [fullLibrary, setFullLibrary] = useState(fullLibraryIncluded);
  const [qty, setQty] = useState(1);

  const total = (price + (fullLibrary && !fullLibraryIncluded ? 150 : 0)) * qty;

  return (
    <>
      {/* BREADCRUMB */}
      <div className="bg-[#0a0a0a] border-b border-[#2e2e2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-[#6b7280]">
          <Link href="/shop" className="hover:text-[#f5f1ea] transition-colors uppercase tracking-wider">Shop</Link>
          <span>›</span>
          <span className="text-[#c8c3ba] uppercase tracking-wider">{name}</span>
        </div>
      </div>

      {/* PRODUCT HERO */}
      <section className="bg-[#0a0a0a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Gallery */}
            <div className="space-y-4">
              <div className="bg-[#1a1a1a] border border-[#2e2e2e] aspect-square flex items-center justify-center">
                <span className="text-[#2e2e2e] text-xs uppercase tracking-widest">Product Image</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-[#1a1a1a] border border-[#2e2e2e] aspect-square flex items-center justify-center">
                    <span className="text-[#2e2e2e] text-xs">Alt {i}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Configurator */}
            <div>
              <p className="text-[#6b7280] text-xs uppercase tracking-widest mb-1">{subtitle}</p>
              <h1
                className="text-5xl font-extrabold text-[#f5f1ea] uppercase mb-2"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                {name}
              </h1>
              <p className="text-[#c8c3ba] mb-6">{tagline}</p>

              <div
                className="text-4xl font-extrabold text-[#f5f1ea] mb-8"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                ${total.toLocaleString()}
              </div>

              <p className="text-[#c8c3ba] text-sm leading-relaxed mb-8">{description}</p>

              {/* Library Pack */}
              <div className="mb-6">
                <p className="text-[#f5f1ea] text-xs font-bold uppercase tracking-widest mb-3">Choose Your Library Pack</p>
                <div className="space-y-2">
                  {(Object.keys(packLabels) as LibraryPack[]).map((pack) => (
                    <label
                      key={pack}
                      className="flex items-center gap-3 cursor-pointer p-3 border border-transparent hover:border-[#2e2e2e] transition-colors"
                    >
                      <div
                        onClick={() => setSelectedPack(pack)}
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center cursor-pointer ${
                          selectedPack === pack ? "border-[#e85d04]" : "border-[#2e2e2e]"
                        }`}
                      >
                        {selectedPack === pack && <div className="w-2.5 h-2.5 rounded-full bg-[#e85d04]" />}
                      </div>
                      <span className="text-[#c8c3ba] text-sm">{packLabels[pack]}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Full Library upsell */}
              <label className="flex items-start gap-3 cursor-pointer mb-6 bg-[#1a1a1a] border border-[#2e2e2e] p-4">
                <input
                  type="checkbox"
                  checked={fullLibrary}
                  disabled={fullLibraryIncluded}
                  onChange={(e) => setFullLibrary(e.target.checked)}
                  className="mt-0.5 accent-[#e85d04]"
                />
                <div>
                  <p className="text-[#f5f1ea] text-sm font-bold">
                    Full Library — All 3 Packs
                    {fullLibraryIncluded ? (
                      <span className="text-[#e85d04] ml-2 font-normal">Included</span>
                    ) : (
                      <span className="text-[#e85d04] ml-2">+$150</span>
                    )}
                  </p>
                  <p className="text-[#6b7280] text-xs mt-1">
                    Adds Homesteading + Tactical/Medical packs alongside your chosen pack.
                  </p>
                </div>
              </label>

              {/* Qty + Add to Cart */}
              <div className="flex gap-3 mb-6">
                <div className="flex items-center border border-[#2e2e2e] bg-[#1a1a1a]">
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="px-4 py-3 text-[#c8c3ba] hover:text-[#f5f1ea] transition-colors"
                  >
                    −
                  </button>
                  <span className="px-4 text-[#f5f1ea] font-bold">{qty}</span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="px-4 py-3 text-[#c8c3ba] hover:text-[#f5f1ea] transition-colors"
                  >
                    +
                  </button>
                </div>
                <button className="flex-1 bg-[#e85d04] hover:bg-[#ff6b00] text-white font-bold text-sm uppercase tracking-wider py-4 transition-colors">
                  Add to Cart — ${total.toLocaleString()}
                </button>
              </div>

              {/* HONESTY BOX */}
              <div className="border border-[#2e2e2e] bg-[#111111] p-5 text-sm text-[#6b7280] leading-relaxed">
                <p className="text-[#c8c3ba] font-bold mb-1">Performance note:</p>
                The AI runs locally on the device and responds in seconds — not instantly. Like any AI, it can occasionally produce incorrect output. Always verify life-critical decisions with other sources or a professional. We tell you this because honesty is a feature.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPEC TABLE */}
      <section className="py-20 bg-[#111111]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-extrabold text-[#f5f1ea] uppercase mb-8"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Specifications
          </h2>
          <div className="border border-[#2e2e2e] overflow-hidden">
            {specs.map((s, i) => (
              <div
                key={s.label}
                className={`grid grid-cols-2 gap-4 px-6 py-4 ${i % 2 === 0 ? "bg-[#1a1a1a]" : "bg-[#111111]"}`}
              >
                <span className="text-[#6b7280] text-sm">{s.label}</span>
                <span className="text-[#c8c3ba] text-sm font-medium">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT&rsquo;S IN THE BOX */}
      <section className="py-20 bg-[#0a0a0a] border-y border-[#2e2e2e]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-extrabold text-[#f5f1ea] uppercase mb-8"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            What&rsquo;s in the Box
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {inBox.map((item) => (
              <div key={item} className="flex items-center gap-3 text-[#c8c3ba] text-sm">
                <span className="text-[#e85d04]">✓</span> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY HIGHLIGHTS */}
      <section className="py-20 bg-[#111111]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-extrabold text-[#f5f1ea] uppercase mb-8"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Why This Kit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((h) => (
              <div key={h} className="bg-[#1a1a1a] border border-[#2e2e2e] p-6 text-[#c8c3ba] text-sm leading-relaxed">
                {h}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARE */}
      <section className="py-16 bg-[#0a0a0a] border-t border-[#2e2e2e]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl font-extrabold text-[#f5f1ea] uppercase mb-6"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Compare Kits
          </h2>
          <div className="flex flex-wrap gap-4">
            {otherKits.map((kit) => (
              <Link
                key={kit.href}
                href={kit.href}
                className="border border-[#2e2e2e] hover:border-[#e85d04] bg-[#1a1a1a] px-6 py-4 transition-colors"
              >
                <p className="text-[#f5f1ea] font-bold text-sm">{kit.name}</p>
                <p className="text-[#6b7280] text-xs mt-1">${kit.price.toLocaleString()}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
