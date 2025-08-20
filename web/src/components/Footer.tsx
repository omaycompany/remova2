"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  // Hide footer on members dashboard routes 
  if (pathname && pathname.startsWith('/members')) return null;
  return (
    <footer className="bg-base-200 text-base-content border-t border-base-300" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="footer w-full grid-flow-row md:grid-flow-col items-start gap-8 p-10">
          <aside>
            <Link href="/" className="inline-block mb-4">
              <Image src="/REMOVA LOGO.png" alt="Remova" width={240} height={64} className="h-16 w-auto" />
            </Link>
            <p className="text-sm opacity-70 max-w-xs">
              Commercial data protection for importers and exporters. Privacy-as-a-Service to secure your supply chain intelligence.
            </p>
          </aside>
          <nav>
        <h6 className="footer-title">Organization</h6>
        <Link href="/about" className="link link-hover">About Remova Inc.</Link>
        <Link href="/why-remova" className="link link-hover">Why Remova</Link>
        <Link href="/solution" className="link link-hover">Our Solution</Link>
        <Link href="/trust" className="link link-hover">Trust & Security</Link>
        <Link href="/responsibilities" className="link link-hover">Our Responsibilities</Link>
        <Link href="/careers" className="link link-hover">Careers</Link>
        <Link href="/affiliate" className="link link-hover">Affiliate Program</Link>
          </nav>
          <nav>
            <h6 className="footer-title">Free Resources</h6>
                    <Link href="/docs/manifest-privacy-primer.pdf" className="link link-hover">Manifest Privacy Primer</Link>
        <Link href="/docs/panjiva-removal-guide.pdf" className="link link-hover">Panjiva Removal Guide</Link>
        <Link href="/docs/importgenius-removal-guide.pdf" className="link link-hover">ImportGenius Removal Guide</Link>
            <span className="text-sm opacity-60 mt-1">Professional services available in tiers above</span>
          </nav>
          <nav>
        <h6 className="footer-title">Service Tiers</h6>
        <Link href="/become-member" className="link link-hover">Free Membership</Link>
        <Link href="/membership" className="link link-hover">Stealth Membership ($2,999/year)</Link>
        <Link href="/membership" className="link link-hover">Vanish Membership ($5,999/year)</Link>
        <Link href="/membership" className="link link-hover">Fortress Membership (Custom)</Link>
        <Link href="/membership" className="link link-hover">All Membership Details</Link>
          </nav>
          <nav>
        <h6 className="footer-title">Support & Legal</h6>
        <Link href="/help-support" className="link link-hover">Help & Support</Link>
        <Link href="/faq" className="link link-hover">FAQ</Link>
        <Link href="/data-privacy" className="link link-hover">Data Privacy</Link>
        <Link href="/privacy" className="link link-hover">Privacy Policy</Link>
        <Link href="/terms" className="link link-hover">Terms of Service</Link>
        <Link href="/dpa" className="link link-hover">Data Processing Agreement (DPA)</Link>
        <Link href="/disclosures" className="link link-hover">Disclosures</Link>
          </nav>
          <div>
        <h6 className="footer-title">Contact</h6>
        <div className="space-y-1">
          <p><strong>Remova Inc.</strong></p>
          <p className="text-sm">1111B S Governors Ave STE 39322</p>
          <p className="text-sm">Dover, DE 19904</p>
          <p className="text-sm">hello@remova.org</p>
        </div>
        <Link href="/contact" className="btn btn-primary mt-2">Contact / Intake</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

