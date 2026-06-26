import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop — Blackout Box",
  description: "Three off-grid AI kits. Field Kit ($449), Ready-to-Run ($849), and Basecamp ($1,249). Ships with your Library pack of choice.",
};

const products = [
  {
    name: "Field Kit",
    subtitle: "DIY / Entry Level",
    price: 449,
    href: "/shop/field-kit",
    desc: "Core board and Library on fast storage. Light setup required — designed for technically comfortable buyers who want the lowest-cost path in.",
    specs: ["Raspberry Pi 5 (4GB RAM)", "64GB fast microSD", "Library pack included", "Light assembly required", "USB-C power"],
    best: "Budget-conscious preparers, tinkerers, and builders.",
    highlight: false,
  },
  {
    name: "Ready-to-Run",
    subtitle: "Most Popular",
    price: 849,
    href: "/shop/ready-to-run",
    desc: "Fully assembled, tested, and ready to use out of the box. Connect your phone, ask a question, get an answer. No setup.",
    specs: ["Raspberry Pi 5 (8GB RAM)", "256GB NVMe SSD", "10,000mAh power bank", "Library pack included", "Headless — use your phone"],
    best: "Families and homesteaders who want plug-and-play.",
    highlight: true,
  },
  {
    name: "Basecamp",
    subtitle: "Premium",
    price: 1249,
    href: "/shop/basecamp",
    desc: "The full station. Built-in touchscreen, foldable solar, waterproof hard case, and the Full Library (all three packs) pre-loaded.",
    specs: ["Raspberry Pi 5 (8GB RAM)", "512GB NVMe SSD", "Built-in 7\" touchscreen", "Foldable 30W solar panel", "Full Library (all 3 packs)"],
    best: "Operators, homesteads, and anyone who wants everything.",
    highlight: false,
  },
];

export default function Shop() {
  return (
    <>
      <section className="bg-[#0a0a0a] py-20 border-b border-[#2e2e2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#e85d04] text-xs font-bold uppercase tracking-widest mb-4">Shop</p>
          <h1
            className="text-5xl md:text-6xl font-extrabold text-[#f5f1ea] uppercase mb-6"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Pick Your Kit.
          </h1>
          <p className="text-[#c8c3ba] text-lg max-w-xl mx-auto">
            Every kit ships with a Library pack of your choice. Upgrade to the Full Library (all three packs) at checkout for +$150.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {products.map((p) => (
              <div
                key={p.name}
                className={`grid grid-cols-1 lg:grid-cols-3 gap-0 border ${p.highlight ? "border-[#e85d04]" : "border-[#2e2e2e]"} bg-[#1a1a1a]`}
              >
                {/* LEFT: Info */}
                <div className="lg:col-span-2 p-8 lg:p-10">
                  <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                    <div>
                      {p.highlight && (
                        <span className="bg-[#e85d04] text-white text-xs font-bold uppercase tracking-widest px-2 py-0.5 mb-2 inline-block">
                          Most Popular
                        </span>
                      )}
                      <p className="text-[#6b7280] text-xs uppercase tracking-widest">{p.subtitle}</p>
                      <h2
                        className="text-4xl font-extrabold text-[#f5f1ea] uppercase"
                        style={{ fontFamily: "var(--font-barlow)" }}
                      >
                        {p.name}
                      </h2>
                    </div>
                    <div
                      className="text-5xl font-extrabold text-[#f5f1ea]"
                      style={{ fontFamily: "var(--font-barlow)" }}
                    >
                      ${p.price.toLocaleString()}
                    </div>
                  </div>
                  <p className="text-[#c8c3ba] mb-6 leading-relaxed">{p.desc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mb-6">
                    {p.specs.map((s) => (
                      <div key={s} className="flex items-center gap-2 text-sm text-[#c8c3ba]">
                        <span className="text-[#e85d04]">›</span> {s}
                      </div>
                    ))}
                  </div>
                  <p className="text-[#6b7280] text-sm">
                    <strong className="text-[#c8c3ba]">Best for:</strong> {p.best}
                  </p>
                </div>

                {/* RIGHT: CTA */}
                <div className={`p-8 lg:p-10 border-t lg:border-t-0 lg:border-l ${p.highlight ? "border-[#e85d04]/30" : "border-[#2e2e2e]"} flex flex-col justify-between`}>
                  <div>
                    <h3 className="text-[#f5f1ea] font-bold text-sm uppercase tracking-widest mb-4">Includes Library Pack</h3>
                    <div className="space-y-2 mb-8">
                      {["Prepper / Survival", "Homesteading", "Tactical / Medical"].map((pack) => (
                        <label key={pack} className="flex items-center gap-3 cursor-pointer">
                          <div className="w-4 h-4 rounded-full border border-[#2e2e2e] flex items-center justify-center">
                            {pack === "Prepper / Survival" && <div className="w-2 h-2 rounded-full bg-[#e85d04]" />}
                          </div>
                          <span className="text-[#c8c3ba] text-sm">{pack}</span>
                        </label>
                      ))}
                    </div>
                    <div className="bg-[#111111] border border-[#2e2e2e] p-3 mb-6">
                      <p className="text-[#c8c3ba] text-xs">
                        <strong className="text-[#f5f1ea]">Full Library upgrade</strong> — add all 3 packs for{" "}
                        <strong className="text-[#e85d04]">+$150</strong>
                        {p.name === "Basecamp" && " (included)"}
                      </p>
                    </div>
                  </div>
                  <Link
                    href={p.href}
                    className={`w-full text-center font-bold text-sm uppercase tracking-wider px-6 py-4 transition-colors block ${
                      p.highlight
                        ? "bg-[#e85d04] hover:bg-[#ff6b00] text-white"
                        : "border border-[#f5f1ea] hover:bg-[#f5f1ea] text-[#f5f1ea] hover:text-[#0a0a0a]"
                    }`}
                  >
                    View {p.name} Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON CALLOUT */}
      <section className="py-16 bg-[#0a0a0a] border-t border-[#2e2e2e]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#6b7280] mb-4">Not sure which kit is right for you?</p>
          <Link
            href="/how-it-works"
            className="text-[#e85d04] font-bold text-sm uppercase tracking-wider hover:text-[#ff6b00] transition-colors"
          >
            Read the How It Works guide →
          </Link>
        </div>
      </section>
    </>
  );
}
