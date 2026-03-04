import { useState } from "react";
import { Play, X } from "lucide-react";
import mambamark from "@/assets/mamba-mark.png";

const services = [
  {
    title: "Fractional CMO",
    desc: "Part-time marketing leadership that actually answers for results.",
    num: "01",
    href: "/services/fractional-cmo",
  },
  {
    title: "Strategy & Consulting",
    desc: "Audits, go-to-market, channel planning. Built from your numbers.",
    num: "02",
  },
  {
    title: "Paid Advertising",
    desc: "Google, Meta, TikTok, LinkedIn. Managed around your margins.",
    num: "03",
  },
  {
    title: "Email Marketing",
    desc: "Klaviyo flows, campaigns, database growth. The channel you own.",
    num: "04",
  },
  {
    title: "Content & Creative",
    desc: "Social, content production, brand creative. Connected to strategy.",
    num: "05",
  },
  {
    title: "eCommerce",
    desc: "Shopify, product feeds, CRO. Built on unit economics.",
    num: "06",
  },
];

const Services = () => {
  const [showReel, setShowReel] = useState(false);

  return (
    <>
      <section id="services" className="section-light">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-14 gap-6">
            <div>
              <h2 className="headline">What we do.</h2>
            </div>
            <div className="flex items-center gap-4 self-start md:self-auto">
              <button
                onClick={() => setShowReel(true)}
                className="flex items-center gap-2 font-heading font-semibold text-base text-muted-foreground hover:text-accent transition-colors duration-200 cursor-pointer py-4 px-2"
              >
                <Play className="w-4 h-4" />
                Watch our showreel
              </button>
              <a href="/contact" className="btn-primary whitespace-nowrap">
                Work with us
              </a>
            </div>
          </div>

          <div className="space-y-0">
            {services.map((s, i) => (
              <a
                key={i}
                href={s.href || "#"}
                className="group flex items-center gap-4 md:gap-6 py-4 md:py-6 border-t border-border last:border-b hover:pl-3 transition-all duration-300"
              >
                <span className="text-accent font-heading text-sm font-semibold w-6 md:w-8 shrink-0">
                  {s.num}
                </span>
                <h3 className="font-heading text-2xl md:text-4xl font-bold text-foreground group-hover:text-accent transition-colors duration-300 flex-1 md:flex-none md:w-[40%] md:shrink-0">
                  {s.title}
                </h3>
                <p className="hidden md:block text-muted-foreground text-base flex-1 group-hover:text-foreground/70 transition-colors duration-300">
                  {s.desc}
                </p>
                <span className="text-muted-foreground/30 group-hover:text-accent text-2xl transition-all duration-300 group-hover:translate-x-1">
                  &#8594;
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Showreel Lightbox */}
      {showReel && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center animate-fade-in cursor-pointer"
          onClick={() => setShowReel(false)}
        >
          <button
            onClick={() => setShowReel(false)}
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-10 cursor-pointer"
          >
            <X className="w-8 h-8" />
          </button>
          <div
            className="w-full max-w-5xl aspect-video mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src="https://www.youtube.com/embed/HuI8rTGwE3M?autoplay=1&rel=0&modestbranding=1"
              title="Mamba Digital Showreel"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Services;
