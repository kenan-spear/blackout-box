import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Blackout Box",
};

export default function Privacy() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className="text-4xl font-extrabold text-[#f5f1ea] uppercase mb-8"
          style={{ fontFamily: "var(--font-barlow)" }}
        >
          Privacy Policy
        </h1>
        <div className="space-y-8 text-[#c8c3ba] text-sm leading-relaxed">
          <p>Effective date: June 2026</p>

          <div>
            <h2 className="text-[#f5f1ea] font-bold text-lg mb-3">What We Collect</h2>
            <p className="mb-3">When you purchase from us or submit an inquiry, we collect:</p>
            <ul className="space-y-2">
              <li>Name, email address, shipping address, and phone number (for order fulfillment)</li>
              <li>Payment information (processed by our payment provider — we do not store card data)</li>
              <li>Order history</li>
              <li>Email address if you sign up for our mailing list</li>
              <li>Information you provide in support requests or wholesale inquiries</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[#f5f1ea] font-bold text-lg mb-3">What We Do Not Collect</h2>
            <p>
              <strong className="text-[#f5f1ea]">Your questions to the device are never collected.</strong> The Blackout Box device operates entirely offline. Your questions, the AI's responses, and your Library usage never leave the device and are never transmitted to us or anyone else.
            </p>
          </div>

          <div>
            <h2 className="text-[#f5f1ea] font-bold text-lg mb-3">How We Use Your Information</h2>
            <ul className="space-y-2">
              <li>To fulfill and ship your order</li>
              <li>To provide customer support</li>
              <li>To send order confirmations and shipping notifications</li>
              <li>To send Library update notifications and product information (if you opt in)</li>
              <li>To respond to wholesale and support inquiries</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[#f5f1ea] font-bold text-lg mb-3">Sharing</h2>
            <p>
              We do not sell your personal information. We share it only with service providers necessary to fulfill your order (shipping carriers, payment processors) and only as required.
            </p>
          </div>

          <div>
            <h2 className="text-[#f5f1ea] font-bold text-lg mb-3">Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of your personal information at any time by emailing <a href="mailto:privacy@blackoutbox.com" className="text-[#e85d04] hover:text-[#ff6b00]">privacy@blackoutbox.com</a>. We will respond within 30 days.
            </p>
          </div>

          <div>
            <h2 className="text-[#f5f1ea] font-bold text-lg mb-3">Contact</h2>
            <p>
              Questions about this policy: <a href="mailto:privacy@blackoutbox.com" className="text-[#e85d04] hover:text-[#ff6b00]">privacy@blackoutbox.com</a>
            </p>
          </div>

          <p className="text-[#6b7280] text-xs">Last updated: June 2026.</p>
        </div>
      </div>
    </div>
  );
}
