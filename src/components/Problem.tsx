import { useEffect, useRef, useState } from "react";
import mambaMark from "@/assets/mamba-mark.png";
const line1 = "You don't need more marketing.";
const line2 = "You need to understand the marketing you've already got.";

const Problem = () => {
  const quoteRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  const fullText = line1 + "\n" + line2;
  const totalChars = fullText.length;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.6 }
    );
    if (quoteRef.current) observer.observe(quoteRef.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    if (charIndex >= totalChars) return;
    const timeout = setTimeout(() => {
      setCharIndex((prev) => prev + 1);
    }, 35);
    return () => clearTimeout(timeout);
  }, [started, charIndex, totalChars]);

  const visibleText = fullText.slice(0, charIndex);
  const [visibleLine1, visibleLine2] = (() => {
    const splitPoint = line1.length;
    if (charIndex <= splitPoint) {
      return [visibleText, ""];
    }
    return [line1, fullText.slice(splitPoint + 1, charIndex)];
  })();

  const showCursor = started && charIndex < totalChars;

  return (
    <section id="problem" className="section-light relative overflow-hidden">
      {/* Top-left brand mark */}
      <img
        src={mambaMark}
        alt=""
        aria-hidden="true"
        className="absolute -top-16 -left-16 md:-top-20 md:-left-20 w-[20rem] md:w-[28rem] opacity-[0.06] pointer-events-none select-none"
      />
      {/* Bottom-right brand mark */}
      <img
        src={mambaMark}
        alt=""
        aria-hidden="true"
        className="absolute -bottom-16 -right-16 md:-bottom-20 md:-right-20 w-[20rem] md:w-[28rem] opacity-[0.06] pointer-events-none select-none"
      />
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="headline mb-8">
            Confusion is expensive. Clarity pays for itself.
          </h2>

          <div className="space-y-5 mb-14">
            <p className="body-lg text-muted-foreground">
              The ads are running. Content's going out. Someone's managing something on at least three platforms. There are dashboards.
            </p>
            <p className="body-lg text-muted-foreground">
              Ask what's actually working and watch the room fill with jargon designed to sound like an answer.
            </p>
            <p className="body-lg text-muted-foreground">
              That's not a marketing problem. That's a leadership gap. And every month it stays open, assumptions harden into habits and bad data shapes your next decisions.
            </p>
          </div>
        </div>

        {/* Typewriter pull quote */}
        <div
          ref={quoteRef}
          className="max-w-5xl mx-auto text-center py-10 border-t border-b border-border min-h-[10rem] md:min-h-[8rem] flex flex-col items-center justify-center"
        >
          <p
            className="font-heading font-bold tracking-tight leading-[1.15] text-foreground"
            style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.5rem)" }}
          >
            {visibleLine1}
            {charIndex <= line1.length && showCursor && (
              <span className="inline-block w-[3px] h-[1em] bg-accent ml-1 align-middle animate-[pulse_0.8s_ease-in-out_infinite]" />
            )}
          </p>
          {visibleLine2 && (
            <p
              className="font-heading font-bold tracking-tight leading-[1.15] text-accent mt-2"
              style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.5rem)" }}
            >
              {visibleLine2}
              {showCursor && charIndex > line1.length && (
                <span className="inline-block w-[3px] h-[1em] bg-accent ml-1 align-middle animate-[pulse_0.8s_ease-in-out_infinite]" />
              )}
            </p>
          )}
          {!started && (
            <span className="inline-block w-[3px] h-8 bg-accent animate-[pulse_0.8s_ease-in-out_infinite]" />
          )}
        </div>
      </div>
    </section>
  );
};

export default Problem;
