import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Field Scenarios — Blackout Box",
  description: "Real-world use cases for the Blackout Box. See how it performs in a power outage, off the grid, and in backcountry medical situations.",
};

const scenarios = [
  {
    title: "Seven Days Dark",
    pack: "Prepper / Survival Pack",
    href: "/scenarios/seven-days-dark",
    summary: "A hurricane takes out power and cell service across the county. Day three, the water's questionable and the pharmacy's closed. No signal. No panic. Just answers.",
    persona: "The Prepared Family",
    kit: "Ready-to-Run",
    kitHref: "/shop/ready-to-run",
  },
  {
    title: "Off the Grid by Choice",
    pack: "Homesteading Pack",
    href: "/scenarios/off-the-grid",
    summary: "Ray's place sits in a cell dead zone twenty minutes past the last paved road. Day to day, Blackout Box is how he troubleshoots the well pump, diagnoses a sick goat, and dials in a canning recipe.",
    persona: "The Homesteader",
    kit: "Basecamp",
    kitHref: "/shop/basecamp",
  },
  {
    title: "When Help Is Hours Away",
    pack: "Tactical / Medical Pack",
    href: "/scenarios/help-is-hours-away",
    summary: "Backcountry, no bars, nearest hospital two hours of switchbacks away. A bad fall. Blackout Box is the reference in your pack that walks through bleeding control and what to watch for.",
    persona: "The Operator / Outdoorsman",
    kit: "Ready-to-Run",
    kitHref: "/shop/ready-to-run",
  },
];

export default function Scenarios() {
  return (
    <>
      <section className="bg-[#0a0a0a] py-20 border-b border-[#2e2e2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#e85d04] text-xs font-bold uppercase tracking-widest mb-4">Field Scenarios</p>
          <h1
            className="text-5xl md:text-6xl font-extrabold text-[#f5f1ea] uppercase mb-6"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            See It in the Field.
          </h1>
          <p className="text-[#c8c3ba] text-lg max-w-2xl mx-auto">
            Not hypothetical doom. Real, ordinary situations where the internet isn&rsquo;t there — and Blackout Box is.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#111111]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {scenarios.map((s) => (
            <div key={s.title} className="border border-[#2e2e2e] hover:border-[#e85d04]/40 bg-[#1a1a1a] transition-colors">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                <div className="lg:col-span-2 p-8">
                  <p className="text-[#e85d04] text-xs font-bold uppercase tracking-widest mb-2">{s.pack}</p>
                  <h2
                    className="text-3xl font-extrabold text-[#f5f1ea] uppercase mb-4"
                    style={{ fontFamily: "var(--font-barlow)" }}
                  >
                    {s.title}
                  </h2>
                  <p className="text-[#c8c3ba] leading-relaxed mb-6">{s.summary}</p>
                  <Link
                    href={s.href}
                    className="text-[#e85d04] font-bold text-sm uppercase tracking-wider hover:text-[#ff6b00] transition-colors"
                  >
                    Read Full Scenario →
                  </Link>
                </div>
                <div className="p-8 border-t lg:border-t-0 lg:border-l border-[#2e2e2e] flex flex-col justify-between">
                  <div>
                    <p className="text-[#6b7280] text-xs uppercase tracking-widest mb-1">Built for</p>
                    <p className="text-[#c8c3ba] font-bold text-sm mb-6">{s.persona}</p>
                    <p className="text-[#6b7280] text-xs uppercase tracking-widest mb-1">Recommended kit</p>
                    <p className="text-[#f5f1ea] font-bold text-sm">{s.kit}</p>
                  </div>
                  <Link
                    href={s.kitHref}
                    className="mt-6 border border-[#2e2e2e] hover:border-[#e85d04] text-[#c8c3ba] hover:text-[#f5f1ea] font-bold text-xs uppercase tracking-wider px-4 py-3 text-center transition-colors block"
                  >
                    View {s.kit} →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY SCENARIOS SECTION */}
      <section className="py-16 bg-[#0a0a0a] border-t border-[#2e2e2e]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2
            className="text-2xl font-extrabold text-[#f5f1ea] uppercase mb-4"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Why scenarios matter
          </h2>
          <p className="text-[#6b7280] leading-relaxed">
            You insure your house, your truck, your life. This insures your ability to <em className="text-[#c8c3ba]">act</em> when you&rsquo;re cut off from the answers you normally take for granted. One device. One time. Knowledge that doesn&rsquo;t expire when the signal does.
          </p>
          <div className="mt-8">
            <Link
              href="/shop"
              className="bg-[#e85d04] hover:bg-[#ff6b00] text-white font-bold px-8 py-4 uppercase tracking-wider text-sm transition-colors inline-block"
            >
              Shop the Kits →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
