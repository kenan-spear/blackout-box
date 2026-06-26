import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works — Blackout Box",
  description: "Three steps: power it on, ask it anything, get answers from the Library — completely offline.",
};

export default function HowItWorks() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#0a0a0a] py-20 border-b border-[#2e2e2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#e85d04] text-xs font-bold uppercase tracking-widest mb-4">How It Works</p>
          <h1
            className="text-5xl md:text-6xl font-extrabold text-[#f5f1ea] uppercase mb-6"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Three Steps. Zero Internet.
          </h1>
          <p className="text-[#c8c3ba] text-lg max-w-2xl mx-auto">
            No app. No account. No signal required. Blackout Box is designed to work the moment you need it — not the moment you set it up.
          </p>
        </div>
      </section>

      {/* THREE STEPS */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {[
              {
                step: "01",
                title: "Power It On",
                desc: "Plug in the included power bank, unfold the solar panel, or connect any USB-C source. The Blackout Box boots in under 90 seconds — no setup, no login, no configuration. Battery-backed and solar-ready out of the box.",
                detail: "The device runs on a hardened Raspberry Pi platform — field-proven, low-power, and repairable. It draws less power than a phone charger.",
                image: "/power-it-on.png",
                imageAlt: "Blackout Box rugged case sitting in a truck bed at golden hour",
              },
              {
                step: "02",
                title: "Ask It Anything",
                desc: "Connect your phone or laptop to the Blackout Box Wi-Fi hotspot (no internet — it's local). Open a browser, type your question in plain English. Ask how to stop a bleed, purify water, diagnose a generator, or preserve a harvest.",
                detail: "The Field Kit and Ready-to-Run are headless — you use your own device as the display. The Basecamp has a built-in touchscreen.",
                image: null,
                imageAlt: "",
              },
              {
                step: "03",
                title: "Get Answers from the Library",
                desc: "The on-device AI reads your question and pulls answers from your Library pack — hundreds of curated reference texts, all stored on-device. Answers appear in plain language, in seconds.",
                detail: "Important: the AI runs locally, so responses take seconds, not milliseconds. Like any AI, it can occasionally be wrong — always verify life-critical decisions. We tell you this because honesty is how we earn your trust.",
                image: null,
                imageAlt: "",
              },
            ].map((item, i) => (
              <div key={item.step} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className="flex gap-6">
                  <div
                    className="text-6xl font-extrabold text-[#e85d04]/20 leading-none pt-1 shrink-0"
                    style={{ fontFamily: "var(--font-barlow)" }}
                  >
                    {item.step}
                  </div>
                  <div>
                    <h2
                      className="text-3xl font-extrabold text-[#f5f1ea] uppercase mb-4"
                      style={{ fontFamily: "var(--font-barlow)" }}
                    >
                      {item.title}
                    </h2>
                    <p className="text-[#c8c3ba] leading-relaxed mb-4">{item.desc}</p>
                    <p className="text-[#6b7280] text-sm leading-relaxed border-l-2 border-[#2e2e2e] pl-4">{item.detail}</p>
                  </div>
                </div>
                {item.image ? (
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={i === 0}
                    />
                  </div>
                ) : (
                  <div className="bg-[#1a1a1a] border border-[#2e2e2e] aspect-video flex items-center justify-center">
                    <span className="text-[#2e2e2e] text-xs uppercase tracking-widest">Product Image / Demo</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL AI EXPLAINER */}
      <section className="py-20 bg-[#0a0a0a] border-y border-[#2e2e2e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl md:text-4xl font-extrabold text-[#f5f1ea] uppercase mb-8 text-center"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            What is &ldquo;Local AI&rdquo;?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1a1a1a] border border-[#2e2e2e] p-8">
              <h3 className="text-[#e85d04] font-bold text-sm uppercase tracking-widest mb-3">Cloud AI (ChatGPT, etc.)</h3>
              <ul className="space-y-2 text-[#6b7280] text-sm">
                <li>Runs on massive servers far away</li>
                <li>Requires internet — no signal, no answers</li>
                <li>Fast because it uses enormous compute</li>
                <li>Your questions leave your device</li>
                <li>Server goes down, it stops working</li>
              </ul>
            </div>
            <div className="bg-[#1a1a1a] border border-[#e85d04]/30 p-8">
              <h3 className="text-[#e85d04] font-bold text-sm uppercase tracking-widest mb-3">Local AI (Blackout Box)</h3>
              <ul className="space-y-2 text-[#c8c3ba] text-sm">
                <li>Runs entirely on the device in your hand</li>
                <li>Requires zero internet — ever</li>
                <li>Slower (seconds) because it uses modest local compute</li>
                <li>Your questions never leave the device</li>
                <li>Works when everything else has failed</li>
              </ul>
            </div>
          </div>
          <p className="text-[#6b7280] text-sm text-center mt-8 max-w-2xl mx-auto">
            We use GPT4All and open-weight language models sized to run efficiently on the Raspberry Pi platform. They are genuinely capable at practical question-answering — not a toy, not a cloud model. Just honest about the tradeoff.
          </p>
        </div>
      </section>

      {/* WHAT&rsquo;S IN THE LIBRARY */}
      <section className="py-20 bg-[#111111]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl font-extrabold text-[#f5f1ea] uppercase mb-4"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            The Library: What&rsquo;s on the Device
          </h2>
          <p className="text-[#6b7280] mb-12 max-w-xl mx-auto">
            Every Blackout Box ships with a Library pack. You choose at checkout. Here&rsquo;s what each pack covers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              {
                name: "Prepper / Survival",
                topics: ["Water purification", "Food safety & storage", "First aid & triage", "Shelter building", "Navigation", "Emergency comms", "Offline encyclopedia"],
              },
              {
                name: "Homesteading",
                topics: ["Gardening & crop planning", "Food preservation", "Livestock care", "Well & water systems", "Small-engine repair", "Building & construction", "Tool maintenance"],
              },
              {
                name: "Tactical / Medical",
                topics: ["Field & austere medicine", "Trauma & bleeding control", "Anatomy reference", "Medication references", "Comms & ham radio", "Splinting & wound care", "Hypothermia & heat"],
              },
            ].map((pack) => (
              <div key={pack.name} className="bg-[#1a1a1a] border border-[#2e2e2e] p-8">
                <h3
                  className="text-lg font-extrabold text-[#e85d04] uppercase mb-4"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  {pack.name}
                </h3>
                <ul className="space-y-2">
                  {pack.topics.map((t) => (
                    <li key={t} className="text-[#c8c3ba] text-sm flex items-center gap-2">
                      <span className="text-[#e85d04]">›</span> {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/library"
              className="text-[#e85d04] font-bold text-sm uppercase tracking-wider hover:text-[#ff6b00] transition-colors"
            >
              Full Library Details →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2
            className="text-3xl font-extrabold text-[#f5f1ea] uppercase mb-4"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Ready to own one?
          </h2>
          <p className="text-[#6b7280] mb-8">Three kits. All offline. One clear purpose.</p>
          <Link
            href="/shop"
            className="bg-[#e85d04] hover:bg-[#ff6b00] text-white font-bold px-10 py-4 uppercase tracking-wider text-sm transition-colors inline-block"
          >
            Shop the Kits
          </Link>
        </div>
      </section>
    </>
  );
}
