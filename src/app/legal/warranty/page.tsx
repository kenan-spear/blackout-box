import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Warranty & Returns — Blackout Box",
};

export default function Warranty() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className="text-4xl font-extrabold text-[#f5f1ea] uppercase mb-8"
          style={{ fontFamily: "var(--font-barlow)" }}
        >
          Warranty & Returns
        </h1>
        <div className="space-y-8 text-[#c8c3ba] text-sm leading-relaxed">
          <div>
            <h2 className="text-[#f5f1ea] font-bold text-lg mb-3">1-Year Limited Warranty</h2>
            <p className="mb-3">
              Blackout Box warrants each device against manufacturing defects in materials and workmanship for one (1) year from the original date of shipment.
            </p>
            <p>
              If your device fails due to a manufacturing defect during the warranty period, we will repair or replace it at our discretion, at no charge to you.
            </p>
          </div>

          <div>
            <h2 className="text-[#f5f1ea] font-bold text-lg mb-3">What Is Not Covered</h2>
            <ul className="space-y-2">
              <li>Physical damage from drops, impacts, submersion (except Basecamp case rated IP67), or misuse</li>
              <li>Damage from use outside specified voltage/power parameters</li>
              <li>Damage from unauthorized modification</li>
              <li>Normal wear on consumables (cables, storage cards)</li>
              <li>Damage from use with third-party accessories not recommended by Blackout Box</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[#f5f1ea] font-bold text-lg mb-3">30-Day Return Policy</h2>
            <p className="mb-3">
              We offer a 30-day return window from the date of receipt. If you are not satisfied with your purchase for any reason, contact us within 30 days.
            </p>
            <ul className="space-y-2">
              <li>Device must be returned in original condition with all included accessories</li>
              <li>We cover return shipping if the return is due to a defect or our error</li>
              <li>Customer covers return shipping for returns not related to a defect</li>
              <li>Refund issued to original payment method within 5–7 business days of receipt</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[#f5f1ea] font-bold text-lg mb-3">How to Initiate a Warranty Claim or Return</h2>
            <p>
              Email <a href="mailto:support@blackoutbox.com" className="text-[#e85d04] hover:text-[#ff6b00]">support@blackoutbox.com</a> with your order number, a description of the issue, and photos if relevant. We will respond within one business day with next steps.
            </p>
          </div>

          <p className="text-[#6b7280] text-xs">Last updated: June 2026.</p>
        </div>
      </div>
    </div>
  );
}
