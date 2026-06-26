import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Library — Blackout Box",
  description: "What's inside each Library pack. Prepper/Survival, Homesteading, and Tactical/Medical — curated, licensed, offline reference.",
};

export default function Library() {
  return (
    <>
      <section className="bg-[#0a0a0a] py-20 border-b border-[#2e2e2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#e85d04] text-xs font-bold uppercase tracking-widest mb-4">The Library</p>
          <h1
            className="text-5xl md:text-6xl font-extrabold text-[#f5f1ea] uppercase mb-6"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            What&rsquo;s on the Device.
          </h1>
          <p className="text-[#c8c3ba] text-lg max-w-2xl mx-auto">
            Every Blackout Box ships with one Library pack. The Full Library upgrade adds all three. Here&rsquo;s exactly what each pack contains — no vague claims, no marketing fluff.
          </p>
        </div>
      </section>

      {/* PACKS */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {[
            {
              name: "Prepper / Survival",
              size: "~32GB",
              refs: "1,200+ references",
              color: "border-[#e85d04]",
              tagColor: "text-[#e85d04]",
              description: "The general emergency reference. Built for households, suburban preppers, and anyone who wants to stay capable when normal infrastructure fails.",
              topics: [
                { heading: "Water & Food Safety", items: ["Water purification methods (chemical, filter, boil)", "Safe water storage and rotation", "Food safety in power outages", "Emergency food preservation", "Foraging basics and plant identification"] },
                { heading: "Medical Reference", items: ["First aid and basic triage", "Wound care and infection prevention", "Burns, fractures, sprains", "Fever management in adults and children", "CPR and AED basics", "Common medications reference"] },
                { heading: "Shelter & Safety", items: ["Emergency shelter construction", "Heating and fire safety", "Structural damage assessment", "Generator safety", "Fuel storage and rotation"] },
                { heading: "Navigation & Communication", items: ["Map and compass basics", "GPS backup skills", "Amateur radio primer (no license required for reading)", "Emergency signaling methods"] },
                { heading: "Knowledge Base", items: ["Curated offline encyclopedia subset (Kiwix/Wikipedia — open license)", "Emergency planning guides", "FEMA reference materials (public domain)"] },
              ],
            },
            {
              name: "Homesteading",
              size: "~40GB",
              refs: "1,600+ references",
              color: "border-[#4a7c59]",
              tagColor: "text-[#4a7c59]",
              description: "For self-reliant households and anyone living off-grid by choice. Deep daily utility — the answer to every homesteading question you'd normally search.",
              topics: [
                { heading: "Growing & Harvesting", items: ["Vegetable and crop planning", "Soil testing and amendment", "Pest and disease identification", "Season extension (cold frames, greenhouses)", "Seed saving and variety selection"] },
                { heading: "Food Preservation", items: ["Water bath and pressure canning", "Fermentation and lacto-fermentation", "Dehydration and freeze-drying", "Root cellaring and cool storage", "Smoking and curing meats"] },
                { heading: "Livestock & Animals", items: ["Chicken, goat, cattle, pig husbandry", "Common illness identification and treatment", "Birthing assistance", "Feed requirements and rotation"] },
                { heading: "Water & Systems", items: ["Well systems and pump maintenance", "Rain catchment and filtration", "Irrigation planning", "Plumbing basics"] },
                { heading: "Equipment & Repair", items: ["Small engine maintenance and diagnosis", "Basic welding reference", "Chainsaw and tool maintenance", "Tractor implement operation", "Electrical basics (12V systems)"] },
                { heading: "Building & Construction", items: ["Basic carpentry and framing", "Concrete and masonry", "Roofing repair", "Fencing and post setting"] },
              ],
            },
            {
              name: "Tactical / Medical",
              size: "~28GB",
              refs: "900+ references",
              color: "border-[#6b4c3b]",
              tagColor: "text-[#a86040]",
              description: "Field and austere medicine reference for backcountry operators, EMS/military backgrounds, and serious outdoorsmen. Heaviest disclaimer requirements — see below.",
              topics: [
                { heading: "Austere Medicine", items: ["Hemorrhage control (tourniquets, wound packing)", "Airway management", "Tension pneumothorax basics", "Fracture stabilization", "Burns in the field", "Hypothermia and heat illness"] },
                { heading: "Anatomy & Physiology", items: ["Surface anatomy reference", "Vascular landmarks", "Organ location and function", "Nerve distributions"] },
                { heading: "Pharmacology Reference", items: ["Common medication classes and uses", "OTC medication dosing by weight", "Antibiotic reference (for discussion with providers)", "Allergic reaction and anaphylaxis management"] },
                { heading: "Communications", items: ["Ham radio basics and band reference", "Frequency plans and emergency channels", "GMRS and MURS basics", "Antenna theory fundamentals"] },
                { heading: "Advanced Topics", items: ["Wound closure options", "IV/IO access overview (reference only)", "Patient assessment (MARCH-PAWS)", "Evacuation planning and litter carry"] },
              ],
              disclaimer: true,
            },
          ].map((pack) => (
            <div key={pack.name} className={`border ${pack.color} bg-[#1a1a1a]`}>
              <div className="p-8 border-b border-[#2e2e2e]">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${pack.tagColor}`}>Library Pack</p>
                    <h2
                      className="text-4xl font-extrabold text-[#f5f1ea] uppercase"
                      style={{ fontFamily: "var(--font-barlow)" }}
                    >
                      {pack.name}
                    </h2>
                  </div>
                  <div className="flex gap-4 text-right">
                    <div>
                      <p className="text-[#6b7280] text-xs uppercase tracking-widest">Storage</p>
                      <p className="text-[#f5f1ea] font-bold">{pack.size}</p>
                    </div>
                    <div>
                      <p className="text-[#6b7280] text-xs uppercase tracking-widest">References</p>
                      <p className="text-[#f5f1ea] font-bold">{pack.refs}</p>
                    </div>
                  </div>
                </div>
                <p className="text-[#c8c3ba] leading-relaxed">{pack.description}</p>
                {pack.disclaimer && (
                  <div className="mt-4 border border-[#6b4c3b] bg-[#6b4c3b]/10 p-4 text-sm text-[#c8c3ba]">
                    <strong className="text-[#a86040]">Medical & Legal Disclaimer:</strong> This pack is for reference and educational use only. It is not a substitute for professional medical training, professional medical care, or emergency services. In an emergency, call 911 or seek professional help first. Information in this pack may not reflect current clinical guidelines.
                  </div>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
                {pack.topics.map((topic, i) => (
                  <div
                    key={topic.heading}
                    className={`p-6 ${i < pack.topics.length - 1 ? "border-b md:border-b-0 md:border-r border-[#2e2e2e]" : ""}`}
                  >
                    <h3 className="text-[#f5f1ea] font-bold text-sm uppercase tracking-wider mb-3">{topic.heading}</h3>
                    <ul className="space-y-1">
                      {topic.items.map((item) => (
                        <li key={item} className="text-[#6b7280] text-xs flex items-start gap-2">
                          <span className={`mt-1 ${pack.tagColor}`}>›</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SOURCING NOTE */}
      <section className="py-16 bg-[#0a0a0a] border-t border-[#2e2e2e]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2
            className="text-2xl font-extrabold text-[#f5f1ea] uppercase mb-4"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Sources & Licensing
          </h2>
          <div className="space-y-4 text-[#c8c3ba] text-sm leading-relaxed">
            <p>
              Library content is curated from openly licensed, public domain, and properly licensed sources. We do not bundle proprietary copyrighted material without authorization.
            </p>
            <p>
              The knowledge base includes materials from: Wikipedia/Kiwix (CC BY-SA), FEMA public domain materials, USDA public domain publications, and curated open medical and technical reference texts.
            </p>
            <p>
              AI models are sourced from GPT4All and open-weight model releases that permit commercial redistribution. Our full license stack is documented and available on request.
            </p>
            <p className="text-[#6b7280]">
              Content is for reference only. We do not guarantee accuracy, completeness, or suitability for any particular purpose. Always verify critical information with current professional guidance.
            </p>
          </div>
        </div>
      </section>

      {/* FULL LIBRARY UPSELL */}
      <section className="py-16 bg-[#111111] border-t border-[#2e2e2e]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2
            className="text-3xl font-extrabold text-[#f5f1ea] uppercase mb-4"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            The Full Library — All Three Packs
          </h2>
          <p className="text-[#c8c3ba] mb-6">
            Add +$150 at checkout to get all three packs. Standard on the Basecamp. Requires 256GB+ storage (Ready-to-Run or Basecamp).
          </p>
          <Link
            href="/shop"
            className="bg-[#e85d04] hover:bg-[#ff6b00] text-white font-bold px-8 py-4 uppercase tracking-wider text-sm transition-colors inline-block"
          >
            Shop the Kits →
          </Link>
        </div>
      </section>
    </>
  );
}
