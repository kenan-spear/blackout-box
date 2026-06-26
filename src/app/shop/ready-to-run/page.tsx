import type { Metadata } from "next";
import ProductPage from "@/components/ProductPage";

export const metadata: Metadata = {
  title: "Ready-to-Run — Blackout Box",
  description: "Fully assembled off-grid AI kit. $849. 8GB RAM, 256GB SSD, power bank included. Zero setup.",
};

export default function ReadyToRun() {
  return (
    <ProductPage
      name="Ready-to-Run"
      subtitle="Most Popular — Zero Setup"
      price={849}
      tagline="Fully assembled, tested, and ready. Open the box. Power it on. Ask it anything."
      description="The Ready-to-Run is built and tested by hand in our shop. Connect your phone to the device's local Wi-Fi, open a browser, and start asking questions. No configuration. No setup. Just capability."
      specs={[
        { label: "Board", value: "Raspberry Pi 5 (8GB RAM)" },
        { label: "Storage", value: "256GB NVMe SSD" },
        { label: "AI Model", value: "GPT4All (Llama 3.1 8B or equivalent)" },
        { label: "Power bank", value: "10,000mAh USB-C (included)" },
        { label: "Battery life", value: "~10–14 hours continuous" },
        { label: "Display", value: "Headless — use your phone/laptop" },
        { label: "Network", value: "Local Wi-Fi hotspot (no internet)" },
        { label: "Case", value: "Protective foam-lined carry case" },
        { label: "Setup required", value: "None" },
        { label: "Dimensions", value: "220mm × 120mm × 60mm (cased)" },
        { label: "Weight", value: "~650g with power bank" },
      ]}
      inBox={[
        "Raspberry Pi 5 (8GB RAM) — fully assembled",
        "256GB NVMe SSD with OS + Library pre-loaded",
        "10,000mAh USB-C power bank",
        "USB-C charging cable",
        "Protective foam-lined carry case",
        "Library pack of your choice pre-loaded",
        "Quick-reference card",
        "Tested and quality-checked before shipment",
      ]}
      highlights={[
        "Zero setup. Assembled, tested, and pre-configured. Power it on, connect your phone — done.",
        "8GB RAM means a more capable on-device model and faster, more accurate responses.",
        "256GB NVMe SSD. Faster than microSD, and room for the Full Library upgrade plus future packs.",
        "10,000mAh power bank runs the device for 10–14 hours. Recharges via any USB-C source, including solar.",
      ]}
      otherKits={[
        { name: "Field Kit", href: "/shop/field-kit", price: 449 },
        { name: "Basecamp", href: "/shop/basecamp", price: 1249 },
      ]}
    />
  );
}
