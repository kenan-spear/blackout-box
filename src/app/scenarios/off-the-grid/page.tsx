import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Off the Grid by Choice — Field Scenarios — Blackout Box",
  description: "Ray's homestead sits in a cell dead zone. Blackout Box is how he runs the place — troubleshooting, canning, livestock, and repair.",
};

export default function OffTheGrid() {
  return (
    <>
      <div className="bg-[#0a0a0a] border-b border-[#2e2e2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-[#6b7280]">
          <Link href="/scenarios" className="hover:text-[#f5f1ea] transition-colors uppercase tracking-wider">Field Scenarios</Link>
          <span>›</span>
          <span className="text-[#c8c3ba] uppercase tracking-wider">Off the Grid by Choice</span>
        </div>
      </div>

      <section className="bg-[#0a0a0a] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#e85d04] text-xs font-bold uppercase tracking-widest mb-4">Homesteading Pack</p>
          <h1
            className="text-5xl md:text-6xl font-extrabold text-[#f5f1ea] uppercase mb-6"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Off the Grid by Choice
          </h1>
          <p className="text-[#c8c3ba] text-xl leading-relaxed">
            Ray&rsquo;s place sits in a cell dead zone twenty minutes past the last paved road. The internet was never the plan. Day to day, Blackout Box is how he troubleshoots the well pump, diagnoses a sick goat, dials in a canning recipe, and figures out why the small engine won&rsquo;t turn over — all from a device that charges off the same solar that runs the cabin.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#111111] border-t border-[#2e2e2e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 text-[#c8c3ba] leading-relaxed">
            <div>
              <h2 className="text-2xl font-extrabold text-[#f5f1ea] uppercase mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
                The Dead Zone
              </h2>
              <p>
                Ray doesn&rsquo;t have a broadband line and doesn&rsquo;t want one. But that means when the Kubota won&rsquo;t start or the doe is off her feed, there&rsquo;s no quick search available. He used to drive to town to use the library computer — or rely on a battered set of Storey&rsquo;s manuals and whatever he remembered.
              </p>
              <p className="mt-4">
                The Blackout Box changed that. Not because it&rsquo;s magical — it&rsquo;s a computer that runs a language model against a library of curated references. But it&rsquo;s <em>practical</em>. He can ask in plain English and get an answer that sounds like a knowledgeable neighbor, not a search result.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-[#f5f1ea] uppercase mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
                A Typical Day
              </h2>
              <p>
                <strong className="text-[#f5f1ea]">Morning:</strong> The well pump is cycling but not building pressure. Ray asks the Blackout Box: <em>&ldquo;My well pump is running but I&rsquo;m losing pressure slowly. What should I check first?&rdquo;</em> It walks him through the likely suspects in order: pressure tank waterlogging, check valve failure, foot valve problems, and pump wear. He rules out two before finding the waterlogged pressure tank — a fixable problem without a service call.
              </p>
              <p className="mt-4">
                <strong className="text-[#f5f1ea]">Afternoon:</strong> Tomatoes are coming in heavy. He asks for the tested safe processing time for crushed tomatoes at his altitude for quart jars. The Library returns the USDA Ball guidelines — acidification requirements included. Follows it exactly.
              </p>
              <p className="mt-4">
                <strong className="text-[#f5f1ea]">Evening:</strong> One of the goats is off feed, standing hunched. He describes the symptoms and the device walks through common possibilities — bloat, urinary calculi in wethers, enterotoxemia — and what signs to look for to differentiate. It&rsquo;s not a vet, and it says so. But it gives him a framework to assess and a clearer picture of when to make the call for emergency help.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-[#f5f1ea] uppercase mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
                Solar-Powered from End to End
              </h2>
              <p>
                Ray&rsquo;s cabin runs on a 400W solar array. His Basecamp kit charges from the same bank. He doesn&rsquo;t think about it — it&rsquo;s always charged. In the depths of winter when solar production is low, the internal battery lasts all day regardless. The device and the homestead are on the same power system, which feels right.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0a0a0a] border-t border-[#2e2e2e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1a1a1a] border border-[#e85d04]/30 p-8">
              <p className="text-[#e85d04] text-xs font-bold uppercase tracking-widest mb-2">Built for this scenario</p>
              <h3
                className="text-2xl font-extrabold text-[#f5f1ea] uppercase mb-3"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                Basecamp
              </h3>
              <p className="text-[#c8c3ba] text-sm mb-4">
                Built-in touchscreen, foldable solar, hard case. The self-contained station for daily use off-grid.
              </p>
              <Link
                href="/shop/basecamp"
                className="text-[#e85d04] font-bold text-sm uppercase tracking-wider hover:text-[#ff6b00] transition-colors"
              >
                See the Basecamp →
              </Link>
            </div>
            <div className="bg-[#1a1a1a] border border-[#2e2e2e] p-8">
              <p className="text-[#6b7280] text-xs uppercase tracking-widest mb-2">Library pack used</p>
              <h3
                className="text-2xl font-extrabold text-[#f5f1ea] uppercase mb-3"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                Homesteading
              </h3>
              <p className="text-[#c8c3ba] text-sm mb-4">
                Canning, livestock, equipment repair, well systems, and more.
              </p>
              <Link
                href="/library"
                className="text-[#c8c3ba] font-bold text-sm uppercase tracking-wider hover:text-[#f5f1ea] transition-colors"
              >
                View Library Contents →
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link href="/scenarios" className="text-[#6b7280] text-sm hover:text-[#c8c3ba] transition-colors uppercase tracking-wider">
              ← All Field Scenarios
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
