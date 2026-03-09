import { useEffect, useState } from "react";

const line1 = "You're not bad at marketing. ";
const line2 = "You just don't have anyone good at it.";

const Hero = () => {
  const [charIndex, setCharIndex] = useState(0);
  const fullText = line1 + line2;
  const totalChars = fullText.length;

  useEffect(() => {
    if (charIndex >= totalChars) return;
    const timeout = setTimeout(() => setCharIndex((prev) => prev + 1), 40);
    return () => clearTimeout(timeout);
  }, [charIndex, totalChars]);

  const showCursor = charIndex < totalChars;

  const visibleLine1 = fullText.slice(0, Math.min(charIndex, line1.length));
  const visibleLine2 = charIndex > line1.length ? fullText.slice(line1.length, charIndex) : "";

  return (
    <section className="section-dark min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32">
        <div className="max-w-4xl">
          <h1 className="headline-lg mb-8 md:mb-10">
            {visibleLine1}
            {charIndex <= line1.length && showCursor && (
              <span className="inline-block w-[3px] h-[0.9em] bg-accent ml-1 align-middle animate-[pulse_0.8s_ease-in-out_infinite]" />
            )}
            {visibleLine2 && (
              <span className="text-accent">
                {visibleLine2}
                {showCursor && (
                  <span className="inline-block w-[3px] h-[0.9em] bg-accent ml-1 align-middle animate-[pulse_0.8s_ease-in-out_infinite]" />
                )}
              </span>
            )}
          </h1>
          <p className="body-lg text-primary-foreground/70 max-w-2xl mb-12 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Mamba Digital. Strategic marketing leadership and a full execution team. One consultancy. No handoffs.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <a href="/contact" className="btn-primary">
              Book a Conversation
            </a>
            <a
              href="#problem"
              className="text-primary-foreground/60 hover:text-accent font-medium flex items-center gap-2 transition-colors duration-200 py-4"
            >
              See how we work
              <span className="text-xl leading-none">&#8595;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
