import Link from "next/link";
import EmailCapture from "@/components/EmailCapture";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#7c340040_0%,_transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#7c3400]/30 border border-[#e85d04]/30 px-3 py-1 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#e85d04] animate-pulse" />
              <span className="text-[#e85d04] text-xs font-bold uppercase tracking-widest">Offline AI Device</span>
            </div>
            <h1
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#f5f1ea] uppercase leading-none mb-6"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Knowledge that doesn&rsquo;t need a signal.
            </h1>
            <p className="text-[#c8c3ba] text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              A rugged, off-grid AI loaded with the survival, medical, and repair know-how you&rsquo;d normally have to Google — in a box that runs on battery or sun, with zero internet.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/shop"
                className="bg-[#e85d04] hover:bg-[#ff6b00] text-white font-bold px-8 py-4 uppercase tracking-wider text-sm transition-colors"
              >
                Shop the Kits
              </Link>
              <Link
                href="/how-it-works"
                className="border border-[#2e2e2e] hover:border-[#f5f1ea] text-[#c8c3ba] hover:text-[#f5f1ea] font-bold px-8 py-4 uppercase tracking-wider text-sm transition-colors"
              >
                See How It Works
              </Link>
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
