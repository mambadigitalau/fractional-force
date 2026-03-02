import { useState } from "react";
import { Play, X } from "lucide-react";

const WhoWeWorkWith = () => {
  const [showReel, setShowReel] = useState(false);

  return (
    <>
      <section className="section-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left — Text */}
            <div>
              <h2 className="headline mb-10">
                Built for businesses growing faster than their marketing.
              </h2>
              <div className="body-lg text-primary-foreground/70 space-y-6 mb-14">
                <p>
                  Businesses doing $2M to $20M. Past the startup phase. Spending money on marketing but not sure it's the right money on the right things.
                </p>
                <p>
                  Childcare. Tourism. Hospitality. Professional services. Trades. eCommerce. The industry matters less than the stage. If you're growing fast enough that winging it is starting to cost you, we should talk.
                </p>
              </div>
              <p className="pull-quote text-accent">
                Later always costs more and delivers less.
              </p>
            </div>

            {/* Right — Showreel */}
            <div>
              <h3 className="font-heading font-semibold text-primary-foreground/50 text-sm tracking-[0.15em] uppercase mb-4">
                Watch our showreel
              </h3>
              <div
                className="relative cursor-pointer group overflow-hidden"
                onClick={() => setShowReel(true)}
              >
                <img
                  src="https://img.youtube.com/vi/HuI8rTGwE3M/maxresdefault.jpg"
                  alt="Mamba Digital Showreel"
                  className="w-full aspect-video object-cover brightness-[0.45] group-hover:brightness-[0.65] transition-all duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="w-16 h-16 rounded-full border-2 border-accent bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <Play className="w-6 h-6 text-accent ml-0.5" />
                  </span>
                </div>
              </div>
            </div>
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

export default WhoWeWorkWith;
