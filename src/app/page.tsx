import Link from "next/link";
import Image from "next/image";
import EmailCapture from "@/components/EmailCapture";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-[#0a0a0a] overflow-hidden min-h-[90vh] flex flex-col">
        {/* Background photo */}
        <div className="absolute inset-0">
          <Image
            src="/hero.png"
            alt="Blackout Box rugged case with solar panel on a mountain ridge at sunset"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          {/* Dark gradient left-to-right so text is legible */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/10" />
          {/* Bottom fade for topic strip */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative flex-1 flex flex-col justify-between max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {/* Main text + icons — left column */}
          <div className="max-w-xl">
            {/* Headline */}
            <h1
              className="font-extrabold uppercase leading-none mb-6"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              <span className="block text-6xl sm:text-7xl md:text-8xl text-white">KNOWLEDGE</span>
              <span className="flex items-center gap-3 text-3xl sm:text-4xl md:text-5xl text-[#e85d04] my-1">
                <span className="flex-1 h-[3px] bg-[#e85d04]" />
                <span>THAT DOESN&rsquo;T</span>
                <span className="flex-1 h-[3px] bg-[#e85d04]" />
              </span>
              <span className="block text-6xl sm:text-7xl md:text-8xl text-[#e85d04]">NEED A SIGNAL.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-white/90 text-base md:text-lg leading-relaxed mb-10 max-w-md">
              A rugged, off-grid AI loaded with the survival, medical, and repair know-how you&rsquo;d normally have to Google — in a box that runs on battery or sun, with zero internet.
            </p>

            {/* Icons row */}
            <div className="flex flex-wrap gap-5 mb-10">
              {[
                {
                  label: "ZERO\nINTERNET",
                  icon: (
                    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" stroke="#e85d04" strokeWidth="2.5" strokeLinecap="round">
                      <circle cx="20" cy="20" r="18" />
                      <path d="M5 5L35 35" />
                      <path d="M20 28a2 2 0 100 4 2 2 0 000-4z" fill="#e85d04" stroke="none" />
                      <path d="M8 16c3.2-3.2 7.4-5 12-5s8.8 1.8 12 5" />
                      <path d="M13 21c1.8-1.8 4.3-3 7-3s5.2 1.2 7 3" />
                    </svg>
                  ),
                },
                {
                  label: "BATTERY\nPOWERED",
                  icon: (
                    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" stroke="#e85d04" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="4" y="10" width="30" height="20" rx="3" />
                      <path d="M34 16v8" strokeWidth="4" />
                      <path d="M18 14l-4 6h8l-4 6" />
                    </svg>
                  ),
                },
                {
                  label: "SOLAR\nREADY",
                  icon: (
                    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" stroke="#e85d04" strokeWidth="2.5" strokeLinecap="round">
                      <circle cx="20" cy="20" r="7" />
                      <path d="M20 3v4M20 33v4M3 20h4M33 20h4M7.6 7.6l2.8 2.8M29.6 29.6l2.8 2.8M32.4 7.6l-2.8 2.8M10.4 29.6l-2.8 2.8" />
                    </svg>
                  ),
                },
                {
                  label: "OFF-GRID AI\nKNOWLEDGE",
                  icon: (
                    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" stroke="#e85d04" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 8c0-3.3 2.7-6 6-6s6 2.7 6 6c0 2-1 3.8-2.5 4.9" />
                      <path d="M26 12.9C28.3 14 30 16.3 30 19c0 1.5-.5 2.9-1.4 4" />
                      <path d="M14 8C11.7 9.1 10 11.4 10 14c0 2.5 1.4 4.6 3.5 5.7" />
                      <circle cx="20" cy="22" r="5" />
                      <path d="M15 30h10M17 34h6" />
                      <circle cx="20" cy="22" r="2" fill="#e85d04" stroke="none" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-2 min-w-[70px]">
                  <div className="border border-[#e85d04]/60 bg-black/40 p-3 rounded-sm">
                    {item.icon}
                  </div>
                  <span className="text-white text-[10px] font-bold uppercase tracking-widest text-center whitespace-pre-line leading-tight">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/shop"
                className="bg-[#e85d04] hover:bg-[#ff6b00] text-white font-bold px-8 py-4 uppercase tracking-wider text-sm transition-colors"
              >
                Shop the Kits
              </Link>
              <Link
                href="/how-it-works"
                className="border border-white/40 hover:border-white text-white font-bold px-8 py-4 uppercase tracking-wider text-sm transition-colors"
              >
                See How It Works
              </Link>
            </div>
          </div>

          {/* Topic strip — bottom */}
          <div className="mt-16">
            <div className="inline-flex items-center border border-[#e85d04]/60 px-6 py-3 gap-0">
              {["SURVIVAL", "MEDICAL", "REPAIR", "EMERGENCY", "HOMESTEADING", "AND MORE"].map((topic, i, arr) => (
                <span key={topic} className="flex items-center">
                  <span className="text-white text-xs font-bold uppercase tracking-widest">{topic}</span>
                  {i < arr.length - 1 && <span className="text-[#e85d04] mx-3 font-bold">•</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-[#1a1a1a] border-y border-[#2e2e2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "🇺🇸", text: "Assembled in the USA" },
              { icon: "📡", text: "Works with zero internet" },
              { icon: "↩", text: "30-day guarantee" },
              { icon: "☎", text: "Real human support" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3">
                <span className="text-xl">{item.icon}</span>
                <span className="text-[#c8c3ba] text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS — 3-UP */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-extrabold text-[#f5f1ea] uppercase"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Three Kits. One Mission.
            </h2>
            <p className="text-[#6b7280] mt-4 max-w-xl mx-auto">
              Pick the kit that matches how you operate. Every kit ships with a Library pack of your choice.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Field Kit",
                subtitle: "DIY / Entry Level",
                price: "$449",
                href: "/shop/field-kit",
                desc: "Core board + content on storage, light self-setup, lower-cost build.",
                highlight: false,
              },
              {
                name: "Ready-to-Run",
                subtitle: "Most Popular",
                price: "$849",
                href: "/shop/ready-to-run",
                desc: "Fully assembled, 8GB RAM, fast storage, power bank, headless — use your phone.",
                highlight: true,
              },
              {
                name: "Basecamp",
                subtitle: "Premium",
                price: "$1,249",
                href: "/shop/basecamp",
                desc: "Everything + built-in touchscreen, foldable solar, and premium hard case.",
                highlight: false,
              },
            ].map((product) => (
              <div
                key={product.name}
                className={`relative flex flex-col p-8 border transition-colors ${
                  product.highlight
                    ? "border-[#e85d04] bg-[#1a1a1a]"
                    : "border-[#2e2e2e] bg-[#1a1a1a] hover:border-[#3e3e3e]"
                }`}
              >
                {product.highlight && (
                  <div className="absolute -top-3 left-8 bg-[#e85d04] text-white text-xs font-bold uppercase tracking-widest px-3 py-1">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <p className="text-[#6b7280] text-xs uppercase tracking-widest mb-1">{product.subtitle}</p>
                  <h3
                    className="text-3xl font-extrabold text-[#f5f1ea] uppercase"
                    style={{ fontFamily: "var(--font-barlow)" }}
                  >
                    {product.name}
                  </h3>
                </div>
                <p className="text-[#c8c3ba] text-sm leading-relaxed mb-8 flex-1">{product.desc}</p>
                <div className="flex items-end justify-between">
                  <span
                    className="text-4xl font-extrabold text-[#f5f1ea]"
                    style={{ fontFamily: "var(--font-barlow)" }}
                  >
                    {product.price}
                  </span>
                  <Link
                    href={product.href}
                    className={`text-sm font-bold uppercase tracking-wider px-5 py-3 transition-colors ${
                      product.highlight
                        ? "bg-[#e85d04] hover:bg-[#ff6b00] text-white"
                        : "border border-[#2e2e2e] hover:border-[#f5f1ea] text-[#c8c3ba] hover:text-[#f5f1ea]"
                    }`}
                  >
                    View Kit →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY OFFLINE */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#e85d04] text-xs font-bold uppercase tracking-widest mb-4">Why offline?</p>
              <h2
                className="text-4xl md:text-5xl font-extrabold text-[#f5f1ea] uppercase mb-6"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                When the signal dies, the answers don&rsquo;t.
              </h2>
              <p className="text-[#c8c3ba] text-lg leading-relaxed">
                You rely on the internet for almost everything you know how to do — until the moment you can&rsquo;t reach it. A storm, an outage, a dead zone, a disaster. Blackout Box puts a capable AI assistant and a deep library of practical knowledge into a single rugged device that runs entirely offline, on battery or solar.
              </p>
              <p className="text-[#c8c3ba] text-lg leading-relaxed mt-4">
                Ask it how to purify water, stop a bleed, restart a generator, or preserve a harvest — and get an answer when it matters most.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Water Purification", icon: "💧" },
                { label: "Medical Reference", icon: "🩺" },
                { label: "Equipment Repair", icon: "🔧" },
                { label: "Food Preservation", icon: "🥫" },
                { label: "Navigation", icon: "🧭" },
                { label: "Shelter & Safety", icon: "🏕️" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-[#1a1a1a] border border-[#2e2e2e] p-5 flex items-center gap-3"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-[#c8c3ba] text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FIELD SCENARIOS TEASER */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="text-[#e85d04] text-xs font-bold uppercase tracking-widest mb-2">Field Scenarios</p>
              <h2
                className="text-4xl font-extrabold text-[#f5f1ea] uppercase"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                See it in the field.
              </h2>
            </div>
            <Link href="/scenarios" className="text-[#e85d04] text-sm font-bold uppercase tracking-wider hover:text-[#ff6b00] transition-colors">
              All Scenarios →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Seven Days Dark",
                pack: "Prepper / Survival Pack",
                href: "/scenarios/seven-days-dark",
                teaser:
                  "A hurricane takes out power and cell service. Day three, the water's questionable. You ask — and get answers. No signal. No panic.",
              },
              {
                title: "Off the Grid by Choice",
                pack: "Homesteading Pack",
                href: "/scenarios/off-the-grid",
                teaser:
                  "In a dead zone twenty minutes past the last paved road, Blackout Box handles troubleshooting, canning, sick livestock, and small-engine diagnosis.",
              },
              {
                title: "When Help Is Hours Away",
                pack: "Tactical / Medical Pack",
                href: "/scenarios/help-is-hours-away",
                teaser:
                  "Backcountry, no bars, nearest hospital two hours of switchbacks away. A bad fall. This is the reference in your pack.",
              },
            ].map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group bg-[#1a1a1a] border border-[#2e2e2e] hover:border-[#e85d04]/50 p-8 transition-colors block"
              >
                <p className="text-[#e85d04] text-xs font-bold uppercase tracking-widest mb-3">{s.pack}</p>
                <h3
                  className="text-2xl font-extrabold text-[#f5f1ea] uppercase mb-4 group-hover:text-[#e85d04] transition-colors"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  {s.title}
                </h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">{s.teaser}</p>
                <span className="inline-block mt-6 text-[#e85d04] text-xs font-bold uppercase tracking-wider">
                  Read Scenario →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HONESTY BAND */}
      <section className="py-20 bg-[#0a0a0a] border-y border-[#2e2e2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-extrabold text-[#f5f1ea] uppercase mb-4"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              What It Is. What It Isn&rsquo;t.
            </h2>
            <p className="text-[#6b7280]">
              We&rsquo;d rather tell you the truth than oversell you. That&rsquo;s how we build trust with people who can tell the difference.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-[#1a1a1a] border border-[#2e2e2e] p-8">
              <h3
                className="text-xl font-extrabold text-[#e85d04] uppercase mb-4"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                ✓ It is
              </h3>
              <ul className="space-y-3 text-[#c8c3ba] text-sm leading-relaxed">
                <li>A self-contained offline AI assistant and reference library</li>
                <li>Built to work with no power grid and no internet</li>
                <li>A calm, capable source of practical knowledge when you&rsquo;re cut off</li>
                <li>Powered by battery or solar — built to last</li>
                <li>A real tool, hand-assembled, backed by real support</li>
              </ul>
            </div>
            <div className="bg-[#1a1a1a] border border-[#2e2e2e] p-8">
              <h3
                className="text-xl font-extrabold text-[#c8c3ba] uppercase mb-4"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                ✗ It isn&rsquo;t
              </h3>
              <ul className="space-y-3 text-[#6b7280] text-sm leading-relaxed">
                <li>A replacement for a doctor or emergency services</li>
                <li>A magic oracle — the AI can occasionally be wrong</li>
                <li>Instant — local AI responds in seconds, not milliseconds</li>
                <li>A connected supercomputer — it&rsquo;s a rugged Pi with a purpose</li>
                <li>Fear-based — we sell preparedness as confidence, not panic</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* EMAIL CAPTURE */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#e85d04] text-xs font-bold uppercase tracking-widest mb-3">Free Download</p>
          <h2
            className="text-4xl font-extrabold text-[#f5f1ea] uppercase mb-4"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Get the Preparedness Field Guide
          </h2>
          <p className="text-[#6b7280] mb-8">
            A practical PDF covering the essential skills and checklists every household should have — no purchase necessary.
          </p>
          <EmailCapture />
        </div>
      </section>
    </>
  );
}
