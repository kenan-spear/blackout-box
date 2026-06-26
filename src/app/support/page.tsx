import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support & FAQ — Blackout Box",
  description: "Setup guides, troubleshooting, warranty info, and FAQ for Blackout Box off-grid AI kits.",
};

const faqs = [
  {
    q: "Do I need internet to set up the device?",
    a: "No. The device comes pre-loaded with the OS, AI model, and your Library pack. Setup for the Ready-to-Run and Basecamp is zero-step: power on, connect your phone to the device's Wi-Fi, open a browser. The Field Kit requires a short initial configuration (~30 minutes) using the included guide — no internet required.",
  },
  {
    q: "How fast does the AI respond?",
    a: "The AI runs locally on the device, so response time depends on the question complexity and the model in use. Typical responses take 3–20 seconds. The Ready-to-Run and Basecamp use a larger model (8GB RAM) with faster response times. The Field Kit uses a smaller model. This is a tradeoff we're transparent about — local AI is slower but more capable than nothing when offline.",
  },
  {
    q: "Can the AI be wrong?",
    a: "Yes. Like any AI, the local model can produce inaccurate, incomplete, or outdated output. Always verify life-critical decisions with other sources or a professional. We say this prominently and repeatedly — not as legal cover, but because we mean it. The Library's reference texts are accurate; the AI's interpretation of them may not always be.",
  },
  {
    q: "What's my phone's role? Do I need it?",
    a: "The Field Kit and Ready-to-Run are 'headless' — the device creates a local Wi-Fi hotspot and you connect your phone, tablet, or laptop to it. You then open a browser and use the interface there. The Basecamp has a built-in touchscreen so no external device is required.",
  },
  {
    q: "How long does the battery last?",
    a: "The Field Kit ships without a power bank (add your own or use any USB-C source). The Ready-to-Run includes a 10,000mAh bank: approximately 10–14 hours of continuous use. The Basecamp includes a 20,000mAh bank: approximately 18–24 hours. The Basecamp also supports direct solar charging via the included foldable panel.",
  },
  {
    q: "Can I update the Library or the AI model?",
    a: "Yes. We periodically release Library updates. You load them from a USB drive — no internet required on the device. AI model updates work the same way. Instructions are in the Support section when updates are available.",
  },
  {
    q: "Is this a Raspberry Pi? Do I need to know how to use Linux?",
    a: "Yes, it runs on a Raspberry Pi 5. No, you don't need to know Linux. The interface is a web browser. The Ready-to-Run and Basecamp are completely turnkey — just power on and connect. The Field Kit requires a short initial setup that's documented step by step, but even that requires no command-line experience.",
  },
  {
    q: "What's your warranty?",
    a: "One year from the date of shipment against manufacturing defects. If it fails under normal use, we fix or replace it. Physical damage from drops, water, or modification is not covered under warranty (though we build the Basecamp in a waterproof case). See the Warranty page for full terms.",
  },
  {
    q: "What's your return policy?",
    a: "30-day returns. If you're not satisfied with your purchase, contact us within 30 days of receipt. Device must be in original condition. We'll cover return shipping if the return is due to a defect or an error on our end.",
  },
  {
    q: "Can I use this as a regular computer or for internet browsing?",
    a: "No. The device is designed and optimized for a single purpose: offline AI with the Library. It doesn't have internet access and isn't set up for general computing. That's intentional — it keeps the device simple, focused, and reliable.",
  },
];

export default function Support() {
  return (
    <>
      <section className="bg-[#0a0a0a] py-20 border-b border-[#2e2e2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#e85d04] text-xs font-bold uppercase tracking-widest mb-4">Support</p>
          <h1
            className="text-5xl md:text-6xl font-extrabold text-[#f5f1ea] uppercase mb-6"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            We Don&rsquo;t Abandon You.
          </h1>
          <p className="text-[#c8c3ba] text-lg max-w-2xl mx-auto">
            Real human support. We answer every message. That&rsquo;s part of the promise at this price point.
          </p>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="py-12 bg-[#1a1a1a] border-b border-[#2e2e2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Setup Guide — Field Kit", href: "#setup-field-kit" },
              { label: "Setup Guide — Ready-to-Run", href: "#setup-rtr" },
              { label: "Setup Guide — Basecamp", href: "#setup-basecamp" },
              { label: "Library Updates", href: "#library-updates" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="border border-[#2e2e2e] hover:border-[#e85d04] bg-[#111111] p-4 text-[#c8c3ba] hover:text-[#f5f1ea] text-sm font-medium transition-colors text-center"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#111111]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-extrabold text-[#f5f1ea] uppercase mb-12"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-[#2e2e2e] bg-[#1a1a1a] p-6">
                <h3 className="text-[#f5f1ea] font-bold mb-3">{faq.q}</h3>
                <p className="text-[#c8c3ba] text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SETUP GUIDES */}
      <section id="setup-field-kit" className="py-20 bg-[#0a0a0a] border-t border-[#2e2e2e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-extrabold text-[#f5f1ea] uppercase mb-8"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Setup Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                id: "setup-field-kit",
                name: "Field Kit",
                steps: ["Insert the pre-loaded microSD into the Pi 5 slot", "Connect to power via USB-C", "Wait 90 seconds for boot", "Connect your phone to 'BlackoutBox' Wi-Fi (password in box)", "Open browser → blackoutbox.local", "Begin setup wizard (10 minutes)"],
              },
              {
                id: "setup-rtr",
                name: "Ready-to-Run",
                steps: ["Connect power bank to device via USB-C", "Wait 90 seconds for boot", "Connect your phone to 'BlackoutBox' Wi-Fi (password on label)", "Open browser → blackoutbox.local", "You're done. Ask a question."],
              },
              {
                id: "setup-basecamp",
                name: "Basecamp",
                steps: ["Open the hard case", "Connect power bank or solar panel to device", "Wait 90 seconds for boot", "Use the built-in touchscreen directly", "Optionally: connect phone or laptop via the device Wi-Fi"],
              },
            ].map((guide) => (
              <div key={guide.id} id={guide.id} className="bg-[#1a1a1a] border border-[#2e2e2e] p-6">
                <h3
                  className="text-xl font-extrabold text-[#e85d04] uppercase mb-4"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  {guide.name}
                </h3>
                <ol className="space-y-2">
                  {guide.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#c8c3ba] text-sm">
                      <span className="text-[#e85d04] font-bold shrink-0">{i + 1}.</span> {step}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIBRARY UPDATES */}
      <section id="library-updates" className="py-20 bg-[#111111] border-t border-[#2e2e2e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-extrabold text-[#f5f1ea] uppercase mb-6"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Updating Your Library
          </h2>
          <div className="bg-[#1a1a1a] border border-[#2e2e2e] p-8 space-y-4 text-[#c8c3ba] text-sm leading-relaxed">
            <p>When Library updates are released, we notify registered customers by email. Updates are distributed as USB-loadable files.</p>
            <ol className="space-y-2">
              {[
                "Download the update package from the email link (requires internet on your computer, not the device)",
                "Copy the package to a USB drive (FAT32 format)",
                "Insert the USB drive into the Blackout Box",
                "Follow the on-screen or browser-based update prompt",
                "Process takes 5–20 minutes depending on update size",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#e85d04] font-bold shrink-0">{i + 1}.</span> {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-16 bg-[#0a0a0a] border-t border-[#2e2e2e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-2xl font-extrabold text-[#f5f1ea] uppercase mb-4"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Still need help?
          </h2>
          <p className="text-[#6b7280] mb-6">
            Email us. We respond to every message, typically within one business day.
          </p>
          <a
            href="mailto:support@blackoutbox.com"
            className="text-[#e85d04] font-bold text-lg hover:text-[#ff6b00] transition-colors"
          >
            support@blackoutbox.com
          </a>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/legal/warranty" className="text-[#6b7280] text-sm hover:text-[#c8c3ba] transition-colors uppercase tracking-wider">
              Warranty Terms
            </Link>
            <span className="text-[#2e2e2e]">|</span>
            <Link href="/legal/terms" className="text-[#6b7280] text-sm hover:text-[#c8c3ba] transition-colors uppercase tracking-wider">
              Terms of Service
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
