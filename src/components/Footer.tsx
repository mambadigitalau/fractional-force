import { Link } from "react-router-dom";
import { Instagram, Linkedin, Youtube, Facebook } from "lucide-react";
import mambaLockupReverse from "@/assets/mamba-lockup-reverse.png";
import metaPartner from "@/assets/partners/meta-business-partner.png";
import klaviyoMaster from "@/assets/partners/klaviyo-master.png";
import shopifyPartners from "@/assets/partners/shopify-partners.png";
import googlePartner from "@/assets/partners/google-partner.svg";

const serviceLinks = [
  { label: "Fractional CMO", href: "/services/fractional-cmo" },
  { label: "Strategy & Consulting", href: "/services/strategy-consulting" },
  { label: "Paid Advertising", href: "/services/paid-advertising" },
  { label: "Email Marketing", href: "/services/email-marketing" },
  { label: "Content & Creative", href: "/services/content-creative" },
  { label: "eCommerce", href: "/services/ecommerce" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

const partners = [
  "Google Partner",
  "Meta Business Partner",
  "Shopify Plus Partner",
  "Klaviyo Master Partner",
];

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-6">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-6">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 3.76.92V6.69z" />
  </svg>
);

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/mambadigitalau", icon: Instagram },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/mambadigitalau", icon: Linkedin },
  { label: "YouTube", href: "https://www.youtube.com/@mambadigital", icon: Youtube },
  { label: "TikTok", href: "https://www.tiktok.com/@mambadigitalau", icon: TikTokIcon },
  { label: "Facebook", href: "https://www.facebook.com/mambadigitalau", icon: Facebook },
  { label: "X", href: "https://x.com/MambaDigital1", icon: XIcon },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16 mb-16">
          {/* Left */}
          <div>
            <Link to="/">
              <img
                src={mambaLockupReverse}
                alt="Mamba Digital"
                className="h-8 md:h-10 w-auto mb-4"
              />
            </Link>
            <p className="text-sm text-primary-foreground/60 leading-relaxed mb-2">
              Strategic marketing consultancy. Subiaco, Perth.
            </p>
            <a
              href="mailto:hello@mambadigital.au"
              className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
            >
              hello@mambadigital.au
            </a>
            <div className="flex gap-3 mt-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-primary-foreground/40 hover:text-accent transition-colors"
                >
                  <s.icon className="size-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Middle */}
          <div>
            <p className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">
              Services
            </p>
            <ul className="space-y-2">
              {serviceLinks.map((s) => (
                <li key={s.label}>
                  <Link
                    to={s.href}
                    className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div>
            <p className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">
              Navigation
            </p>
            <ul className="space-y-2">
              {navLinks.map((n) => (
                <li key={n.label}>
                  <Link
                    to={n.href}
                    className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Partner badges */}
        <div className="flex flex-wrap items-center gap-6 mb-10">
          <img src={metaPartner} alt="Meta Business Partner" className="h-10 w-auto brightness-0 invert opacity-50" />
          <img src={klaviyoMaster} alt="Klaviyo Master Partner" className="h-8 w-auto brightness-0 invert opacity-50" />
          <img src={shopifyPartners} alt="Shopify Partners" className="h-5 w-auto brightness-0 invert opacity-50" />
          <a href="https://www.google.com/partners/agency?id=6852427839" target="_blank" rel="noopener noreferrer">
            <img src={googlePartner} alt="Google Partner" className="h-12 w-auto brightness-0 invert opacity-50" />
          </a>
        </div>

        {/* Bottom row */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <p className="text-xs text-primary-foreground/40">
            &copy; 2026 Mamba Digital
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
