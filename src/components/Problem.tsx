import { useEffect, useRef, useState } from "react";

const Problem = () => {
  const quoteRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.5 }
    );
    if (quoteRef.current) observer.observe(quoteRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="problem" className="section-light">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20">
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

        {/* Animated pull quote */}
        <div ref={quoteRef} className="max-w-5xl mx-auto text-center py-10 border-t border-b border-border overflow-hidden">
          <p
            className="font-heading font-bold tracking-tight leading-[1.1] text-foreground transition-all duration-700 ease-out"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
            }}
          >
            You don't need more marketing.
          </p>
          <p
            className="font-heading font-bold tracking-tight leading-[1.1] text-accent mt-2 transition-all duration-700 ease-out delay-300"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transitionDelay: "300ms",
            }}
          >
            You need to understand the marketing you've already got.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
