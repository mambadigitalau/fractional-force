import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import mambaLockupReverse from "@/assets/mamba-lockup-reverse.png";

const serviceItems = [
  { label: "Fractional CMO", href: "/services/fractional-cmo" },
  { label: "Strategy & Consulting", href: "/services/strategy-consulting" },
  { label: "Paid Advertising", href: "/services/paid-advertising" },
  { label: "Email Marketing", href: "/services/email-marketing" },
  { label: "Content & Creative", href: "/services/content-creative" },
  { label: "eCommerce", href: "/services/ecommerce" },
];

const navItems = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openDropdown = () => {
    clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 150);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary-foreground/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center">
          <img
            src={mambaLockupReverse}
            alt="Mamba Digital"
            className="h-7 md:h-8 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-10">
          {/* Services dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
          >
            <Link
              to="/services"
              className="text-primary-foreground hover:text-accent text-lg font-heading font-semibold tracking-wide transition-colors duration-200"
            >
              Services
            </Link>
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                <div className="bg-primary border border-primary-foreground/15 rounded-lg shadow-xl py-2 min-w-[220px] animate-fade-in">
                  {serviceItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setServicesOpen(false)}
                      className="block px-5 py-2.5 text-sm font-heading font-semibold text-primary-foreground/80 hover:text-accent hover:bg-primary-foreground/5 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="border-t border-primary-foreground/10 mt-1 pt-1">
                    <Link
                      to="/services"
                      onClick={() => setServicesOpen(false)}
                      className="block px-5 py-2.5 text-sm font-heading font-semibold text-accent hover:bg-primary-foreground/5 transition-colors"
                    >
                      View all services →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-primary-foreground hover:text-accent text-lg font-heading font-semibold tracking-wide transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary text-sm py-3 px-6">
            Book a Conversation
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-primary-foreground p-2"
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/10 animate-fade-in">
          <div className="px-6 py-8 flex flex-col gap-6">
            <Link
              to="/services"
              onClick={() => setMobileOpen(false)}
              className="text-primary-foreground hover:text-accent text-lg font-heading font-semibold tracking-wide transition-colors"
            >
              Services
            </Link>
            <div className="pl-4 flex flex-col gap-4 border-l-2 border-accent/30">
              {serviceItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-primary-foreground/70 hover:text-accent text-base font-heading font-semibold tracking-wide transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-primary-foreground hover:text-accent text-lg font-heading font-semibold tracking-wide transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary text-center mt-2" onClick={() => setMobileOpen(false)}>
              Book a Conversation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
