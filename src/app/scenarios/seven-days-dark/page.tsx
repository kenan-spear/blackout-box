import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seven Days Dark — Field Scenarios — Blackout Box",
  description: "A hurricane takes out power and cell service. Day three, the water's questionable. No signal. No panic. Just answers from the Blackout Box.",
};

export default function SevenDaysDark() {
  return (
    <>
      <div className="bg-[#0a0a0a] border-b border-[#2e2e2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-[#6b7280]">
          <Link href="/scenarios" className="hover:text-[#f5f1ea] transition-colors uppercase tracking-wider">Field Scenarios</Link>
          <span>›</span>
          <span className="text-[#c8c3ba] uppercase tracking-wider">Seven Days Dark</span>
        </div>
      </div>

      <section className="bg-[#0a0a0a] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#e85d04] text-xs font-bold uppercase tracking-widest mb-4">Prepper / Survival Pack</p>
          <h1
            className="text-5xl md:text-6xl font-extrabold text-[#f5f1ea] uppercase mb-6"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Seven Days Dark
          </h1>
          <p className="text-[#c8c3ba] text-xl leading-relaxed">
            A hurricane takes out power and cell service across the county. Day three, the water&rsquo;s questionable and the pharmacy&rsquo;s closed. With Blackout Box running off its battery, you ask how to safely disinfect drinking water with what&rsquo;s in the garage, how long the food in a dead freezer is still good, and what a fever in a child actually warrants. No signal. No panic. Just answers.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#111111] border-t border-[#2e2e2e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-invert max-w-none">
          <div className="space-y-12 text-[#c8c3ba] leading-relaxed">
            <div>
              <h2 className="text-2xl font-extrabold text-[#f5f1ea] uppercase mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
                Day One: The Lights Go Out
              </h2>
              <p>
                The storm hit overnight. By morning, the power is gone and the cell towers are either down or overloaded — every call fails. Your neighbor checks the weather radio: widespread outage, restoration estimate unknown.
              </p>
              <p className="mt-4">
                You&rsquo;re not panicking. You have a full freezer, bottled water for four days, and the Blackout Box charged and ready. The kids are home. The nearest store is 20 minutes away and the roads are still blocked by fallen trees.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-[#f5f1ea] uppercase mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
                Day Three: The Practical Questions Start
              </h2>
              <p>
                By day three, the freezer question becomes real. You ask Blackout Box: <em>&ldquo;How long is food in a dead freezer safe to eat?&rdquo;</em> The answer comes back in about eight seconds. A fully packed freezer, it explains, stays below safe temperature for 48 hours if you keep the door shut. Partially full, less. It walks you through the smell-and-texture check and which items to prioritize cooking first.
              </p>
              <p className="mt-4">
                The water question is more serious. You&rsquo;ve heard the municipal water may be compromised. You ask: <em>&ldquo;How do I disinfect tap water with household bleach?&rdquo;</em> The Library pulls a clear answer: unscented bleach at 6–8.25% sodium hypochlorite, 8 drops per gallon of clear water, 16 drops for cloudy water. Wait 30 minutes. It also tells you what household bleach won&rsquo;t kill — Giardia, Cryptosporidium — and when boiling is better.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-[#f5f1ea] uppercase mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
                Day Four: A Fever
              </h2>
              <p>
                Your eight-year-old wakes up with a fever of 102.4°F. The pharmacy is closed. You have children&rsquo;s acetaminophen and ibuprofen in the cabinet and you ask: <em>&ldquo;What temperature fever in a child requires emergency care?&rdquo;</em>
              </p>
              <p className="mt-4">
                The device walks through it: 102–103°F in a school-age child without other concerning symptoms is typically manageable at home with fever reducers and fluids. It flags the warning signs that change that calculus — stiff neck, rash, difficulty breathing, persistent vomiting, fever above 104°F — and recommends seeking care as soon as roads are accessible.
              </p>
              <p className="mt-4">
                The device adds, clearly: <em>This is reference information. It is not a substitute for professional medical care. If you have any doubt, seek emergency services.</em> That caveat isn&rsquo;t legal boilerplate — it&rsquo;s why you trust the information that came before it.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-[#f5f1ea] uppercase mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
                What This Scenario Is and Isn&rsquo;t
              </h2>
              <p>
                This isn&rsquo;t a story about survival against the odds. It&rsquo;s a story about a real, ordinary storm that happens in the United States dozens of times a year. The Blackout Box didn&rsquo;t save the day through heroics — it gave you accurate, practical information at the moment when Google wasn&rsquo;t available.
              </p>
              <p className="mt-4">
                That&rsquo;s the product. Not magic. Not a replacement for professionals. A calm, capable source of the practical knowledge you&rsquo;d normally reach for on your phone — when your phone can&rsquo;t help.
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
                Ready-to-Run
              </h3>
              <p className="text-[#c8c3ba] text-sm mb-4">
                Fully assembled, zero setup, 10+ hour battery life. The kit built for families who want it ready without thinking about it.
              </p>
              <Link
                href="/shop/ready-to-run"
                className="text-[#e85d04] font-bold text-sm uppercase tracking-wider hover:text-[#ff6b00] transition-colors"
              >
                See the Ready-to-Run →
              </Link>
            </div>
            <div className="bg-[#1a1a1a] border border-[#2e2e2e] p-8">
              <p className="text-[#6b7280] text-xs uppercase tracking-widest mb-2">Library pack used</p>
              <h3
                className="text-2xl font-extrabold text-[#f5f1ea] uppercase mb-3"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                Prepper / Survival
              </h3>
              <p className="text-[#c8c3ba] text-sm mb-4">
                Water purification, food safety, first aid, and practical emergency reference.
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
