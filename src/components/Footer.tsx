const serviceLinks = [
  "Fractional CMO",
  "Paid Advertising",
  "Strategy & Consulting",
  "Content & Creative",
  "Email Marketing",
  "eCommerce",
];

const navLinks = ["Home", "Services", "Work", "About", "Insights", "Contact"];

const partners = [
  "Google Partner",
  "Meta Business Partner",
  "Shopify Plus Partner",
  "Klaviyo Master Partner",
];

const socials = ["Instagram", "LinkedIn", "Facebook", "YouTube"];

const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16 mb-16">
          {/* Left */}
          <div>
            <p className="font-heading font-bold text-xl text-primary-foreground mb-3">
              Mamba Digital
            </p>
            <p className="text-sm leading-relaxed mb-2">
              Strategic marketing consultancy. Subiaco, Perth.
            </p>
            <a
              href="mailto:hello@mambadigital.au"
              className="text-sm hover:text-accent transition-colors"
            >
              hello@mambadigital.au
            </a>
          </div>

          {/* Middle */}
          <div>
            <p className="font-heading font-semibold text-sm text-primary-foreground uppercase tracking-wider mb-4">
              Services
            </p>
            <ul className="space-y-2">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a href="#" className="text-sm hover:text-accent transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div>
            <p className="font-heading font-semibold text-sm text-primary-foreground uppercase tracking-wider mb-4">
              Navigation
            </p>
            <ul className="space-y-2">
              {navLinks.map((n) => (
                <li key={n}>
                  <a href="#" className="text-sm hover:text-accent transition-colors">
                    {n}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Partner badges */}
        <div className="flex flex-wrap gap-4 mb-10">
          {partners.map((p) => (
            <span key={p} className="text-xs text-footer-foreground/60 tracking-wide">
              {p}
            </span>
          ))}
        </div>

        {/* Bottom row */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-footer-foreground/50">
            &copy; 2026 Mamba Digital
          </p>
          <div className="flex gap-6">
            {socials.map((s) => (
              <a
                key={s}
                href="#"
                className="text-xs text-footer-foreground/50 hover:text-accent transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
