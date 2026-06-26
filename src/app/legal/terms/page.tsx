import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Blackout Box",
};

export default function Terms() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className="text-4xl font-extrabold text-[#f5f1ea] uppercase mb-8"
          style={{ fontFamily: "var(--font-barlow)" }}
        >
          Terms of Service
        </h1>
        <div className="space-y-8 text-[#c8c3ba] text-sm leading-relaxed">
          <p>Effective date: June 2026</p>

          <div>
            <h2 className="text-[#f5f1ea] font-bold text-lg mb-3">1. Products</h2>
            <p>
              Blackout Box sells off-grid AI devices and associated Library content packs. All products are described accurately on our product pages. We reserve the right to modify product specifications, pricing, or availability at any time.
            </p>
          </div>

          <div>
            <h2 className="text-[#f5f1ea] font-bold text-lg mb-3">2. Orders & Payment</h2>
            <p>
              By placing an order, you represent that you are authorized to use the payment method provided. We reserve the right to cancel orders we suspect to be fraudulent. Payment is processed at the time of order.
            </p>
          </div>

          <div>
            <h2 className="text-[#f5f1ea] font-bold text-lg mb-3">3. Shipping</h2>
            <p>
              Orders ship within 5–10 business days. Shipping timelines are estimates. We are not responsible for delays due to carriers, weather, or customs. International orders may be subject to duties and taxes paid by the buyer.
            </p>
          </div>

          <div>
            <h2 className="text-[#f5f1ea] font-bold text-lg mb-3">4. Content & Intellectual Property</h2>
            <p className="mb-3">
              Library content is licensed for personal use on your purchased device only. You may not reproduce, redistribute, or resell Library content separately from the device. The Blackout Box name, logo, and branding are our intellectual property.
            </p>
            <p>
              Software components are subject to their respective open-source licenses, which we document and make available on request.
            </p>
          </div>

          <div>
            <h2 className="text-[#f5f1ea] font-bold text-lg mb-3">5. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Blackout Box is not liable for any indirect, incidental, special, or consequential damages arising from the use or inability to use our products or content. Our total liability for any claim shall not exceed the amount paid for the relevant product.
            </p>
          </div>

          <div>
            <h2 className="text-[#f5f1ea] font-bold text-lg mb-3">6. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the state of [State], USA, without regard to conflict of law principles.
            </p>
          </div>

          <div>
            <h2 className="text-[#f5f1ea] font-bold text-lg mb-3">7. Contact</h2>
            <p>
              Questions: <a href="mailto:legal@blackoutbox.com" className="text-[#e85d04] hover:text-[#ff6b00]">legal@blackoutbox.com</a>
            </p>
          </div>

          <p className="text-[#6b7280] text-xs">Last updated: June 2026.</p>
        </div>
      </div>
    </div>
  );
}
