"use client";

import { useState } from "react";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // Integration point: wire to email provider (Mailchimp, ConvertKit, etc.)
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-[#1a1a1a] border border-[#e85d04]/40 p-8 text-center">
        <p className="text-[#e85d04] text-2xl font-extrabold uppercase mb-2" style={{ fontFamily: "var(--font-barlow)" }}>
          You&rsquo;re in.
        </p>
        <p className="text-[#c8c3ba] text-sm">
          Check your inbox — your Preparedness Field Guide is on the way.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="flex-1 bg-[#1a1a1a] border border-[#2e2e2e] text-[#f5f1ea] placeholder-[#6b7280] px-4 py-4 text-sm focus:outline-none focus:border-[#e85d04] transition-colors"
      />
      <button
        type="submit"
        className="bg-[#e85d04] hover:bg-[#ff6b00] text-white font-bold px-6 py-4 uppercase tracking-wider text-sm transition-colors whitespace-nowrap"
      >
        Get the Guide
      </button>
    </form>
  );
}
