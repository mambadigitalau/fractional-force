import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import mambaLockupReverse from "@/assets/mamba-lockup-reverse.png";

const navItems = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        <div className="hidden md:flex items-center gap-10">
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
          className="md:hidden text-primary-foreground p-2"
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
        <div className="md:hidden bg-primary border-t border-primary-foreground/10 animate-fade-in">
          <div className="px-6 py-8 flex flex-col gap-6">
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
