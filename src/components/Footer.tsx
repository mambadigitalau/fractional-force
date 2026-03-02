import { Link } from "react-router-dom";
import mambaLockupReverse from "@/assets/mamba-lockup-reverse.png";

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

const socials = [
  { label: "Instagram", href: "https://instagram.com/mambadigital.au" },
  { label: "LinkedIn", href: "https://linkedin.com/company/mamba-digital" },
  { label: "Facebook", href: "https://facebook.com/mambadigital.au" },
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
        <div className="flex flex-wrap gap-4 mb-10">
          {partners.map((p) => (
            <span
              key={p}
              className="text-xs text-primary-foreground/40 tracking-wide"
            >
              {p}
            </span>
          ))}
        </div>

        {/* Bottom row */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-primary-foreground/40">
            &copy; 2026 Mamba Digital
          </p>
          <div className="flex gap-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary-foreground/40 hover:text-accent transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
