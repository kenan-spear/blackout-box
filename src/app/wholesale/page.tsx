"use client";

import { useState } from "react";
import type { Metadata } from "next";

// Note: can't export metadata from client component — moved to separate layout approach
// This page uses client component for the form

export default function Wholesale() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    volume: "",
    branding: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Integration: route to CRM / email
    setSubmitted(true);
  };

  return (
    <>
      <section className="bg-[#0a0a0a] py-20 border-b border-[#2e2e2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[#e85d04] text-xs font-bold uppercase tracking-widest mb-4">Wholesale & White-Label</p>
            <h1
              className="text-5xl md:text-6xl font-extrabold text-[#f5f1ea] uppercase mb-6"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Stock the device your customers are already asking for — under your brand.
            </h1>
            <p className="text-[#c8c3ba] text-lg leading-relaxed">
              We work with survival-supply retailers, outdoor gear dealers, and specialty distributors. Whether you want bulk inventory under the Blackout Box brand or a white-label build with your branding, we&rsquo;re set up for it.
            </p>
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                title: "Strong Margin",
                desc: "≥60% gross margin at retail. Room for wholesale pricing that works for both sides.",
              },
              {
                title: "White-Label Ready",
                desc: "Custom branding on device, case, and packaging. Your logo, your colors. Minimum volume applies.",
              },
              {
                title: "Low Support Burden",
                desc: "Offline, no accounts, no subscriptions. The simplicity that makes customers happy makes support tickets rare.",
              },
              {
                title: "Drop-Ship or Bulk",
                desc: "We can fulfill direct to your customers or ship bulk to your warehouse. Talk to us about volume and logistics.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-[#1a1a1a] border border-[#2e2e2e] p-6">
                <h3
                  className="text-xl font-extrabold text-[#e85d04] uppercase mb-3"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  {item.title}
                </h3>
                <p className="text-[#c8c3ba] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Who it&rsquo;s for */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2
                className="text-3xl font-extrabold text-[#f5f1ea] uppercase mb-6"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                Who We Work With
              </h2>
              <ul className="space-y-4">
                {[
                  "Survival and preparedness retailers (online and brick-and-mortar)",
                  "Outdoor gear and backcountry equipment dealers",
                  "Ham radio and communications retailers",
                  "Agricultural and farm supply stores",
                  "Military and first responder supply chains",
                  "Emergency preparedness training programs",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#c8c3ba] text-sm">
                    <span className="text-[#e85d04] mt-0.5">›</span> {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 bg-[#1a1a1a] border border-[#2e2e2e] p-6">
                <p className="text-[#6b7280] text-sm">
                  <strong className="text-[#c8c3ba]">No public wholesale pricing.</strong> Pricing is based on volume, branding requirements, and fulfillment structure. Submit the inquiry form and we&rsquo;ll respond within one business day with specifics.
                </p>
              </div>
            </div>

            {/* FORM */}
            <div className="bg-[#1a1a1a] border border-[#2e2e2e] p-8">
              {submitted ? (
                <div className="text-center py-8">
                  <p className="text-[#e85d04] text-3xl font-extrabold uppercase mb-3" style={{ fontFamily: "var(--font-barlow)" }}>
                    Inquiry received.
                  </p>
                  <p className="text-[#c8c3ba]">We&rsquo;ll be in touch within one business day.</p>
                </div>
              ) : (
                <>
                  <h3
                    className="text-2xl font-extrabold text-[#f5f1ea] uppercase mb-6"
                    style={{ fontFamily: "var(--font-barlow)" }}
                  >
                    Wholesale Inquiry
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[#6b7280] text-xs uppercase tracking-widest mb-1">Company *</label>
                        <input
                          name="company"
                          required
                          value={form.company}
                          onChange={handleChange}
                          className="w-full bg-[#111111] border border-[#2e2e2e] text-[#f5f1ea] px-3 py-2.5 text-sm focus:outline-none focus:border-[#e85d04] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-[#6b7280] text-xs uppercase tracking-widest mb-1">Your Name *</label>
                        <input
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          className="w-full bg-[#111111] border border-[#2e2e2e] text-[#f5f1ea] px-3 py-2.5 text-sm focus:outline-none focus:border-[#e85d04] transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[#6b7280] text-xs uppercase tracking-widest mb-1">Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full bg-[#111111] border border-[#2e2e2e] text-[#f5f1ea] px-3 py-2.5 text-sm focus:outline-none focus:border-[#e85d04] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[#6b7280] text-xs uppercase tracking-widest mb-1">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full bg-[#111111] border border-[#2e2e2e] text-[#f5f1ea] px-3 py-2.5 text-sm focus:outline-none focus:border-[#e85d04] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[#6b7280] text-xs uppercase tracking-widest mb-1">Estimated Annual Volume *</label>
                      <select
                        name="volume"
                        required
                        value={form.volume}
                        onChange={handleChange}
                        className="w-full bg-[#111111] border border-[#2e2e2e] text-[#f5f1ea] px-3 py-2.5 text-sm focus:outline-none focus:border-[#e85d04] transition-colors"
                      >
                        <option value="">Select range</option>
                        <option value="10-25">10–25 units</option>
                        <option value="25-100">25–100 units</option>
                        <option value="100-500">100–500 units</option>
                        <option value="500+">500+ units</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[#6b7280] text-xs uppercase tracking-widest mb-1">White-Label / Branding Needs</label>
                      <select
                        name="branding"
                        value={form.branding}
                        onChange={handleChange}
                        className="w-full bg-[#111111] border border-[#2e2e2e] text-[#f5f1ea] px-3 py-2.5 text-sm focus:outline-none focus:border-[#e85d04] transition-colors"
                      >
                        <option value="">Select option</option>
                        <option value="blackout-brand">Sell under Blackout Box brand</option>
                        <option value="white-label">White-label under my brand</option>
                        <option value="unsure">Not sure yet</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[#6b7280] text-xs uppercase tracking-widest mb-1">Additional Notes</label>
                      <textarea
                        name="message"
                        rows={3}
                        value={form.message}
                        onChange={handleChange}
                        className="w-full bg-[#111111] border border-[#2e2e2e] text-[#f5f1ea] px-3 py-2.5 text-sm focus:outline-none focus:border-[#e85d04] transition-colors resize-none"
                        placeholder="Tell us about your business and what you're looking for..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#e85d04] hover:bg-[#ff6b00] text-white font-bold text-sm uppercase tracking-wider py-4 transition-colors"
                    >
                      Submit Inquiry
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
