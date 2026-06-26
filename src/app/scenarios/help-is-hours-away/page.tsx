import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "When Help Is Hours Away — Field Scenarios — Blackout Box",
  description: "Backcountry, no bars, nearest hospital two hours of switchbacks away. A bad fall. Blackout Box is the reference in your pack.",
};

export default function HelpIsHoursAway() {
  return (
    <>
      <div className="bg-[#0a0a0a] border-b border-[#2e2e2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-[#6b7280]">
          <Link href="/scenarios" className="hover:text-[#f5f1ea] transition-colors uppercase tracking-wider">Field Scenarios</Link>
          <span>›</span>
          <span className="text-[#c8c3ba] uppercase tracking-wider">When Help Is Hours Away</span>
        </div>
      </div>

      {/* Medical disclaimer banner */}
      <div className="bg-[#6b4c3b]/20 border-b border-[#6b4c3b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-[#a86040] text-xs text-center">
            <strong>Medical disclaimer:</strong> This content is for reference and educational purposes only. It is not medical advice and not a substitute for professional medical care or emergency services. In an emergency, call 911 or your local emergency number.
          </p>
        </div>
      </div>

      <section className="bg-[#0a0a0a] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#a86040] text-xs font-bold uppercase tracking-widest mb-4">Tactical / Medical Pack</p>
          <h1
            className="text-5xl md:text-6xl font-extrabold text-[#f5f1ea] uppercase mb-6"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            When Help Is Hours Away
          </h1>
          <p className="text-[#c8c3ba] text-xl leading-relaxed">
            Backcountry, no bars, nearest hospital two hours of switchbacks away. A bad fall, a deep cut. Blackout Box is the reference in your pack that walks through bleeding control, splinting, and what to watch for — austere-medicine knowledge in a box that survives the trip.
          </p>
          <div className="mt-6 border border-[#6b4c3b] bg-[#6b4c3b]/10 p-4 text-sm text-[#c8c3ba]">
            Reference only — not a substitute for trained care. But a powerful backstop when there&rsquo;s no one to call.
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#111111] border-t border-[#2e2e2e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 text-[#c8c3ba] leading-relaxed">
            <div>
              <h2 className="text-2xl font-extrabold text-[#f5f1ea] uppercase mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
                The Situation
              </h2>
              <p>
                Cole is three miles into a ridgeline approach, solo, in country with no cell service. A slip on a wet rock slab and a hard landing. His partner is four miles back at the truck. He&rsquo;s conscious, bleeding from a laceration on his forearm, and his left ankle won&rsquo;t take weight.
              </p>
              <p className="mt-4">
                He has a basic first aid kit, an Israeli bandage, and the Blackout Box in his pack. His first priority is the bleeding.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-[#f5f1ea] uppercase mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
                The Reference
              </h2>
              <p>
                Cole asks: <em>&ldquo;How do I control arterial bleeding from a forearm laceration?&rdquo;</em> The device responds with a structured answer: direct pressure first, using the Israeli bandage if available; tourniquet application for extremity bleeding that doesn&rsquo;t respond; the two-inch rule for tourniquet placement above the wound; and note-taking for time of application.
              </p>
              <p className="mt-4">
                It also tells him what it&rsquo;s not going to tell him: it&rsquo;s not going to assess his actual injury. It provides reference information. The assessment is his.
              </p>
              <p className="mt-4">
                He controls the bleeding with direct pressure and the compression bandage. Then he asks about the ankle — whether to attempt to move, what a fracture vs. sprain presentation looks like, and how to splint for an assisted carry. The device walks through it, noting consistently that professional evaluation is the goal.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-[#f5f1ea] uppercase mb-4" style={{ fontFamily: "var(--font-barlow)" }}>
                What the Tactical/Medical Pack Is
              </h2>
              <p>
                It&rsquo;s a field medicine reference library. It covers hemorrhage control, airway management, fracture stabilization, burns, hypothermia, allergic reactions, medication reference, and anatomy. It draws from austere and wilderness medicine literature — the same body of knowledge that trains Wilderness First Responders.
              </p>
              <p className="mt-4">
                It&rsquo;s not a replacement for WFR or TCCC training. It doesn&rsquo;t make you a medic. It is the reference you reach for when you&rsquo;re already trained and need to verify a procedure, or when you have no training and need something more than guessing.
              </p>
              <p className="mt-4">
                We recommend it for people with some medical background — EMS, military, backcountry travel — who want a deep reference, not a beginner&rsquo;s guide.
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
                Compact, 10+ hour battery, zero setup. Fits in a pack and works when you need it.
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
                Tactical / Medical
              </h3>
              <p className="text-[#c8c3ba] text-sm mb-4">
                Field medicine, trauma, anatomy, medications. The heaviest reference pack.
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
