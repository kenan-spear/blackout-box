import type { Metadata } from "next";
import ProductPage from "@/components/ProductPage";

export const metadata: Metadata = {
  title: "Field Kit — Blackout Box",
  description: "The entry-level off-grid AI kit. $449. Core board + your Library pack. Light setup required.",
};

export default function FieldKit() {
  return (
    <ProductPage
      name="Field Kit"
      subtitle="DIY / Entry Level"
      price={449}
      tagline="The lowest-cost path into off-grid AI. Light setup, full capability."
      description="The Field Kit gives you the core Raspberry Pi 5 board with your Library pack pre-loaded on fast microSD storage. Some light setup is required — connecting to the device's hotspot and configuring your display preference. If you're comfortable with basic tech, this is the most cost-effective route."
      specs={[
        { label: "Board", value: "Raspberry Pi 5 (4GB RAM)" },
        { label: "Storage", value: "64GB fast microSD" },
        { label: "AI Model", value: "GPT4All (Phi-2 or equivalent)" },
        { label: "Power", value: "USB-C (power bank not included)" },
        { label: "Display", value: "Headless — use your phone/laptop" },
        { label: "Network", value: "Local Wi-Fi hotspot (no internet)" },
        { label: "Case", value: "None — user-supplied or add-on" },
        { label: "Setup required", value: "Yes — ~30 min" },
        { label: "Dimensions", value: "85mm × 56mm × 20mm (board only)" },
        { label: "Weight", value: "~50g (board only)" },
      ]}
      inBox={[
        "Raspberry Pi 5 (4GB RAM)",
        "64GB fast microSD with OS + Library",
        "USB-C power cable",
        "Quick-start guide",
        "Library pack of your choice pre-loaded",
      ]}
      highlights={[
        "Lowest entry price — same off-grid AI capability as higher tiers, fewer accessories.",
        "Repair-friendly. The Raspberry Pi platform is open, documented, and globally available. If it breaks, you can fix it.",
        "Upgrade path. Add a power bank, case, or solar panel later. The board is the core — everything else is modular.",
        "A modest setup requirement — roughly 30 minutes following the included guide. If you can install a printer, you can do this.",
      ]}
      otherKits={[
        { name: "Ready-to-Run", href: "/shop/ready-to-run", price: 849 },
        { name: "Basecamp", href: "/shop/basecamp", price: 1249 },
      ]}
    />
  );
}
