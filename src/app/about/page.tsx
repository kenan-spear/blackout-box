import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About / Our Story — Blackout Box",
  description: "Founder-built, hand-assembled in the USA. Why we built an off-grid AI device and what we stand for.",
};

export default function About() {
  return (
    <>
      <section className="bg-[#0a0a0a] py-20 border-b border-[#2e2e2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[#e85d04] text-xs font-bold uppercase tracking-widest mb-4">About</p>
            <h1
              className="text-5xl md:text-6xl font-extrabold text-[#f5f1ea] uppercase mb-6"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Built for the day you actually need it.
            </h1>
            <p className="text-[#c8c3ba] text-xl leading-relaxed">
              Blackout Box started with a simple, frustrating observation: the information that could save your life in a crisis is the same information that disappears the moment the crisis knocks out your internet.
            </p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-20 bg-[#111111]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
            <div className="space-y-6 text-[#c8c3ba] leading-relaxed">
              <h2
                className="text-3xl font-extrabold text-[#f5f1ea] uppercase"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                The Origin
              </h2>
              <p>
                It started after a hurricane. Three days without power. Cell towers overloaded. Family trying to figure out whether the water was safe, how long the food in the freezer was still good, and what a fever warranted without a quick search.
              </p>
              <p>
                A printed binder helped. A binder is static. It can&rsquo;t answer a question you didn&rsquo;t know to include. The idea that a local language model — running on low-power hardware, from a battery, with no internet — could do what the binder couldn&rsquo;t kept coming back.
              </p>
              <p>
                Two years of evenings and weekends later, the first prototype was in a plastic bin on a workbench. Raspberry Pi. Open-weight language model. A curated library of practical references, properly licensed. A hotspot so any phone could connect. No cloud. No account. No internet.
              </p>
              <p>
                It worked. And the people I showed it to — homesteaders, preppers, backcountry hikers, families with kids — all had the same reaction: where do I get one?
              </p>
            </div>
            <div className="bg-[#1a1a1a] border border-[#2e2e2e] aspect-square flex items-center justify-center">
              <span className="text-[#2e2e2e] text-xs uppercase tracking-widest">Workshop / Build Photo</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="bg-[#1a1a1a] border border-[#2e2e2e] aspect-video flex items-center justify-center order-2 lg:order-1">
              <span className="text-[#2e2e2e] text-xs uppercase tracking-widest">Assembly / Build Process</span>
            </div>
            <div className="space-y-6 text-[#c8c3ba] leading-relaxed order-1 lg:order-2">
              <h2
                className="text-3xl font-extrabold text-[#f5f1ea] uppercase"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                How We Build Them
              </h2>
              <p>
                Every Blackout Box is hand-assembled in our shop. We source Raspberry Pi 5 boards, configure them with our hardened build of the OS, load the AI model and Library content, test every unit before it ships, and pack it ourselves.
              </p>
              <p>
                We are not a big operation. That&rsquo;s intentional. Small means we can control quality, respond to customers directly, and build something we&rsquo;re proud of rather than something we can scale fast. We&rsquo;ll grow — but not by cutting corners on what we ship.
              </p>
              <p>
                The platform we chose — Raspberry Pi — is open, documented, globally available, and repairable. We could have built on something proprietary and locked down. We didn&rsquo;t. The people who buy from us value repairability. We do too.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 bg-[#0a0a0a] border-y border-[#2e2e2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl md:text-4xl font-extrabold text-[#f5f1ea] uppercase mb-12 text-center"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Honesty over hype",
                desc: "We tell you the AI can be wrong. We tell you it's slow. We tell you it's not a doctor. That honesty is a competitive advantage with an audience that can smell marketing BS from a mile away.",
              },
              {
                title: "Calm competence",
                desc: "We don't sell fear. We sell preparedness as confidence. There's a version of this product that leans on apocalyptic imagery and manufactured urgency — we want no part of it.",
              },
              {
                title: "Practical capability",
                desc: "Every Library pack is built around the questions real people actually need answered in real situations — not hypothetical threats, not doomsday scenarios. Useful, practical, verified.",
              },
              {
                title: "Repairability",
                desc: "We use standard, documented, globally-available hardware. If something breaks, it can be fixed. That's a feature, not a limitation.",
              },
              {
                title: "Real support",
                desc: "We answer our support email. We are a small team, but that means when you have a problem, you reach a human who knows the product.",
              },
              {
                title: "Made in the USA",
                desc: "Assembled by hand in our shop. We don't outsource the build — it's how we maintain quality and stand behind what we ship.",
              },
            ].map((v) => (
              <div key={v.title} className="bg-[#1a1a1a] border border-[#2e2e2e] p-6">
                <h3
                  className="text-lg font-extrabold text-[#e85d04] uppercase mb-3"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  {v.title}
                </h3>
                <p className="text-[#c8c3ba] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#111111]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2
            className="text-3xl font-extrabold text-[#f5f1ea] uppercase mb-4"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Questions? We answer them.
          </h2>
          <p className="text-[#6b7280] mb-8">
            Reach out directly. We&rsquo;re a small operation and we respond to every message.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/support"
              className="border border-[#2e2e2e] hover:border-[#f5f1ea] text-[#c8c3ba] hover:text-[#f5f1ea] font-bold px-6 py-3 uppercase tracking-wider text-sm transition-colors"
            >
              FAQ & Support
            </Link>
            <Link
              href="/shop"
              className="bg-[#e85d04] hover:bg-[#ff6b00] text-white font-bold px-6 py-3 uppercase tracking-wider text-sm transition-colors"
            >
              Shop the Kits
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
