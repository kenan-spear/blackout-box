import type { Metadata } from "next";
import ProductPage from "@/components/ProductPage";

export const metadata: Metadata = {
  title: "Basecamp — Blackout Box",
  description: "The premium off-grid AI station. $1,249. Built-in touchscreen, foldable solar, hard case, Full Library included.",
};

export default function Basecamp() {
  return (
    <ProductPage
      name="Basecamp"
      subtitle="Premium — Full Station"
      price={1249}
      tagline="The complete off-grid AI station. Built-in screen, solar-ready, built to last."
      description={'The Basecamp is everything in one package. Built-in 7" touchscreen means no phone needed. Foldable 30W solar panel means no outlet needed. Premium waterproof hard case means no worrying about conditions. Full Library pre-loaded means no choosing — you get all three packs.'}
      specs={[
        { label: "Board", value: "Raspberry Pi 5 (8GB RAM)" },
        { label: "Storage", value: "512GB NVMe SSD" },
        { label: "AI Model", value: "GPT4All (Llama 3.1 8B or equivalent)" },
        { label: "Display", value: '7" IPS touchscreen (built-in)' },
        { label: "Solar", value: "Foldable 30W solar panel (included)" },
        { label: "Power bank", value: "20,000mAh USB-C (included)" },
        { label: "Battery life", value: "~18–24 hours continuous" },
        { label: "Solar input", value: "USB-C PD compatible" },
        { label: "Case", value: "IP67 waterproof hard case" },
        { label: "Library", value: "Full Library — all 3 packs included" },
        { label: "Dimensions", value: "350mm × 250mm × 120mm (cased)" },
        { label: "Weight", value: "~2.8kg complete" },
      ]}
      inBox={[
        "Raspberry Pi 5 (8GB RAM) — fully assembled",
        "512GB NVMe SSD with OS + Full Library",
        '7" IPS touchscreen (built-in)',
        "Foldable 30W solar panel",
        "20,000mAh USB-C power bank",
        "USB-C charging cables (×2)",
        "IP67 waterproof premium hard case",
        "Full Library — all 3 packs pre-loaded",
        "Quick-reference card + extended guide",
        "Tested and quality-checked before shipment",
      ]}
      highlights={[
        "No phone, no laptop needed. The built-in touchscreen is your interface. Ask questions, read answers, navigate the library — entirely self-contained.",
        "Foldable 30W solar panel. Run it indefinitely in the field. Charges the power bank directly — sun-to-AI in one chain.",
        "IP67 waterproof hard case. It survives being dropped, rained on, and jostled in a truck bed. Built for the conditions you're in when you need it.",
        "Full Library — all three packs included. Prepper, Homesteading, and Tactical/Medical. One device for every situation.",
      ]}
      otherKits={[
        { name: "Field Kit", href: "/shop/field-kit", price: 449 },
        { name: "Ready-to-Run", href: "/shop/ready-to-run", price: 849 },
      ]}
      fullLibraryIncluded
    />
  );
}
