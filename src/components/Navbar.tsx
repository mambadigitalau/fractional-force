import { useState } from "react";
import { Link } from "react-router-dom";
import mambaIcon from "@/assets/mamba-logo-icon.png";

const navItems = ["Services", "About", "Work", "Insights", "Contact"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary-foreground/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={mambaIcon} alt="Mamba Digital" className="h-8 md:h-10 w-auto" />
          <span className="font-heading font-bold text-xl md:text-2xl text-primary-foreground tracking-tight">
            Mamba Digital
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-primary-foreground/70 hover:text-primary-foreground text-sm font-medium tracking-wide transition-colors duration-200"
            >
              {item}
            </a>
          ))}
          <a href="/contact" className="btn-primary text-sm py-3 px-6">
            Book a Conversation
          </a>
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
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
                className="text-primary-foreground/70 hover:text-primary-foreground text-lg font-medium tracking-wide transition-colors"
              >
                {item}
              </a>
            ))}
            <a href="/contact" className="btn-primary text-center mt-2">
              Book a Conversation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
