import { useState } from "react";
import { Play, X } from "lucide-react";
import mambaLockupReverse from "@/assets/mamba-lockup-reverse.png";

const Hero = () => {
  const [showReel, setShowReel] = useState(false);

  return (
    <>
      <section className="section-dark min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32">
          <div className="max-w-4xl">
            <h1 className="headline-lg mb-8 md:mb-10 animate-fade-up">
              You're not bad at marketing.{" "}
              <span className="text-accent">You just don't have anyone good at it.</span>
            </h1>
            <p className="body-lg text-primary-foreground/70 max-w-2xl mb-12 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Mamba Digital. Strategic marketing leadership and a full execution team. One consultancy. No handoffs.
            </p>
            <div className="flex flex-row items-center gap-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <a href="/contact" className="btn-primary shrink-0">
                Book a Conversation
              </a>

              {/* Showreel Preview */}
              <div
                className="relative cursor-pointer group w-48 md:w-56 shrink-0"
                onClick={() => setShowReel(true)}
              >
                <img
                  src="https://img.youtube.com/vi/HuI8rTGwE3M/maxresdefault.jpg"
                  alt="Mamba Digital Showreel"
                  className="w-full aspect-video object-cover brightness-50 group-hover:brightness-75 transition-all duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center gap-2">
                  <span className="w-10 h-10 rounded-full bg-accent/90 group-hover:bg-accent flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <Play className="w-4 h-4 text-accent-foreground ml-0.5" />
                  </span>
                </div>
                <p className="absolute bottom-2 left-2 text-primary-foreground/50 text-[10px] font-heading font-medium tracking-wider uppercase">
                  Showreel
                </p>
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

export default Hero;
