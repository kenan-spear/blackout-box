"use client";

import Link from "next/link";

export default function Cart() {
  // Cart state would be managed via context/zustand in a full implementation
  // This is the empty cart state — replace with real cart state management
  const isEmpty = true;

  return (
    <>
      <section className="bg-[#0a0a0a] py-20 border-b border-[#2e2e2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="text-4xl font-extrabold text-[#f5f1ea] uppercase mb-2"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Your Cart
          </h1>
        </div>
      </section>

      <section className="py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isEmpty ? (
            <div className="text-center py-20">
              <p className="text-[#6b7280] text-lg mb-6">Your cart is empty.</p>
              <Link
                href="/shop"
                className="bg-[#e85d04] hover:bg-[#ff6b00] text-white font-bold px-8 py-4 uppercase tracking-wider text-sm transition-colors inline-block"
              >
                Shop the Kits
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Cart items */}
              <div className="lg:col-span-2 space-y-4">
                <p className="text-[#6b7280] text-sm">Cart items would render here.</p>
              </div>

              {/* Order summary */}
              <div className="bg-[#1a1a1a] border border-[#2e2e2e] p-8 h-fit">
                <h2
                  className="text-xl font-extrabold text-[#f5f1ea] uppercase mb-6"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  Order Summary
                </h2>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-[#c8c3ba] text-sm">
                    <span>Subtotal</span>
                    <span>—</span>
                  </div>
                  <div className="flex justify-between text-[#c8c3ba] text-sm">
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="border-t border-[#2e2e2e] pt-3 flex justify-between text-[#f5f1ea] font-bold">
                    <span>Total</span>
                    <span>—</span>
                  </div>
                </div>
                <button className="w-full bg-[#e85d04] hover:bg-[#ff6b00] text-white font-bold text-sm uppercase tracking-wider py-4 transition-colors">
                  Proceed to Checkout
                </button>
                <div className="mt-6 text-center">
                  <div className="text-[#6b7280] text-xs space-y-1">
                    <p>🔒 Secure checkout</p>
                    <p>30-day money-back guarantee</p>
                    <p>Ships within 5–10 business days</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FULL LIBRARY UPSELL */}
      {!isEmpty && (
        <section className="py-12 bg-[#0a0a0a] border-t border-[#2e2e2e]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#1a1a1a] border border-[#e85d04]/30 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-[#e85d04] text-xs font-bold uppercase tracking-widest mb-1">Upgrade</p>
                <h3 className="text-[#f5f1ea] font-bold">Add the Full Library — all three packs for +$150</h3>
                <p className="text-[#6b7280] text-sm mt-1">Prepper, Homesteading, and Tactical/Medical. One device for every situation.</p>
              </div>
              <button className="shrink-0 border border-[#e85d04] text-[#e85d04] hover:bg-[#e85d04] hover:text-white font-bold text-sm uppercase tracking-wider px-6 py-3 transition-colors">
                Add +$150
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
