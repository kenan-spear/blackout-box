import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#2e2e2e] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#e85d04] text-2xl font-bold">▣</span>
              <span
                className="text-[#f5f1ea] font-bold tracking-wide uppercase text-sm"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                Blackout Box
              </span>
            </div>
            <p className="text-[#6b7280] text-sm leading-relaxed">
              Knowledge that doesn&rsquo;t need a signal. Built and assembled in the USA.
            </p>
          </div>

          <div>
            <h4 className="text-[#f5f1ea] text-xs font-bold uppercase tracking-widest mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link href="/shop/field-kit" className="text-[#6b7280] hover:text-[#f5f1ea] text-sm transition-colors">Field Kit — $449</Link></li>
              <li><Link href="/shop/ready-to-run" className="text-[#6b7280] hover:text-[#f5f1ea] text-sm transition-colors">Ready-to-Run — $849</Link></li>
              <li><Link href="/shop/basecamp" className="text-[#6b7280] hover:text-[#f5f1ea] text-sm transition-colors">Basecamp — $1,249</Link></li>
              <li><Link href="/library" className="text-[#6b7280] hover:text-[#f5f1ea] text-sm transition-colors">The Library</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#f5f1ea] text-xs font-bold uppercase tracking-widest mb-4">Learn</h4>
            <ul className="space-y-2">
              <li><Link href="/how-it-works" className="text-[#6b7280] hover:text-[#f5f1ea] text-sm transition-colors">How It Works</Link></li>
              <li><Link href="/scenarios" className="text-[#6b7280] hover:text-[#f5f1ea] text-sm transition-colors">Field Scenarios</Link></li>
              <li><Link href="/about" className="text-[#6b7280] hover:text-[#f5f1ea] text-sm transition-colors">About / Our Story</Link></li>
              <li><Link href="/wholesale" className="text-[#6b7280] hover:text-[#f5f1ea] text-sm transition-colors">Wholesale & White-Label</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#f5f1ea] text-xs font-bold uppercase tracking-widest mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link href="/support" className="text-[#6b7280] hover:text-[#f5f1ea] text-sm transition-colors">FAQ & Setup Guides</Link></li>
              <li><Link href="/legal/warranty" className="text-[#6b7280] hover:text-[#f5f1ea] text-sm transition-colors">Warranty & Returns</Link></li>
              <li><Link href="/legal/privacy" className="text-[#6b7280] hover:text-[#f5f1ea] text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link href="/legal/terms" className="text-[#6b7280] hover:text-[#f5f1ea] text-sm transition-colors">Terms of Service</Link></li>
              <li><Link href="/legal/disclaimer" className="text-[#6b7280] hover:text-[#f5f1ea] text-sm transition-colors">Medical Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2e2e2e] mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#6b7280] text-xs">
            &copy; {new Date().getFullYear()} Blackout Box. Assembled in the USA.
          </p>
          <p className="text-[#6b7280] text-xs text-center max-w-lg">
            <strong className="text-[#c8c3ba]">Medical disclaimer:</strong> Content is for reference only. Not a substitute for professional medical care or emergency services. Always verify critical information.
          </p>
        </div>
      </div>
    </footer>
  );
}
