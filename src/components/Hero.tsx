import { useState } from "react";
import { Play, X } from "lucide-react";
import mambaLockupReverse from "@/assets/mamba-lockup-reverse.png";

const Hero = () => {
  const [showReel, setShowReel] = useState(false);

  return (
    <>
      <section className="section-dark min-h-screen flex items-center pt-20 relative overflow-hidden">
        {/* Background video — muted ambient loop */}
        <div className="absolute inset-0 z-0">
          <iframe
            src="https://www.youtube.com/embed/HuI8rTGwE3M?autoplay=1&mute=1&loop=1&playlist=HuI8rTGwE3M&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&disablekb=1"
            title="Background showreel"
            allow="autoplay; encrypted-media"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] md:w-[120%] aspect-video pointer-events-none"
            style={{ minHeight: "100%", minWidth: "100%" }}
          />
          {/* Dark overlay to keep text readable */}
          <div className="absolute inset-0 bg-primary/80" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32 relative z-10">
          <div className="max-w-4xl">
            <h1 className="headline-lg mb-8 md:mb-10 animate-fade-up">
              You're not bad at marketing.{" "}
              <span className="text-accent">You just don't have anyone good at it.</span>
            </h1>
            <p className="body-lg text-primary-foreground/70 max-w-2xl mb-12 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Mamba Digital. Strategic marketing leadership and a full execution team. One consultancy. No handoffs.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <a href="/contact" className="btn-primary">
                Book a Conversation
              </a>
              <button
                onClick={() => setShowReel(true)}
                className="flex items-center gap-3 text-primary-foreground/60 hover:text-accent font-medium transition-colors duration-200 py-4 group cursor-pointer"
              >
                <span className="w-10 h-10 rounded-full border border-primary-foreground/30 group-hover:border-accent flex items-center justify-center transition-all duration-300">
                  <Play className="w-4 h-4 text-primary-foreground/60 group-hover:text-accent ml-0.5" />
                </span>
                Watch with sound
              </button>
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

export default Hero;
