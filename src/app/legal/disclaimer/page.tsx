import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical & AI Disclaimer — Blackout Box",
};

export default function Disclaimer() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className="text-4xl font-extrabold text-[#f5f1ea] uppercase mb-8"
          style={{ fontFamily: "var(--font-barlow)" }}
        >
          Medical & AI Disclaimer
        </h1>
        <div className="space-y-6 text-[#c8c3ba] text-sm leading-relaxed">
          <div className="border border-[#6b4c3b] bg-[#6b4c3b]/10 p-6">
            <p className="text-[#a86040] font-bold text-base mb-3">IMPORTANT — READ BEFORE USE</p>
            <p>The content provided by Blackout Box devices and Library packs is for reference and educational purposes only. It is not medical advice. It is not a substitute for professional medical care, professional medical training, or emergency services.</p>
          </div>

          <div>
            <h2 className="text-[#f5f1ea] font-bold text-lg mb-3">Medical Content</h2>
            <ul className="space-y-3">
              <li>All medical and health-related content in the Library is for reference only and does not constitute medical advice.</li>
              <li>Content may not reflect the most current medical guidelines, standards of care, or clinical recommendations.</li>
              <li>In any medical emergency, call 911 (or your local emergency number) and seek professional medical care immediately.</li>
              <li>Do not use Library content to diagnose or treat any medical condition without professional evaluation.</li>
              <li>Information about medications, dosing, and treatments is provided for general reference only and should not be followed without professional guidance.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[#f5f1ea] font-bold text-lg mb-3">AI Model Limitations</h2>
            <ul className="space-y-3">
              <li>The AI model running on your Blackout Box is a local language model. It can and will produce incorrect, incomplete, or misleading output.</li>
              <li>The AI does not have access to real-time information or current data.</li>
              <li>Always verify critical information — especially information that affects health, safety, or life — with authoritative, current sources or qualified professionals.</li>
              <li>The AI's responses are not endorsed by medical professionals, are not reviewed by medical professionals, and should not be treated as professional guidance.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[#f5f1ea] font-bold text-lg mb-3">No Warranty of Content Accuracy</h2>
            <p>
              Blackout Box makes no warranty, express or implied, regarding the accuracy, completeness, or suitability of any content provided by the device or Library packs for any particular purpose. Use of any content is at your sole risk.
            </p>
          </div>

          <p className="text-[#6b7280] text-xs">
            Last updated: June 2026. Questions? Email legal@blackoutbox.com
          </p>
        </div>
      </div>
    </div>
  );
}
