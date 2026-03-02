const Problem = () => {
  return (
    <section id="problem" className="section-light">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="headline mb-8">
            Confusion is expensive. Clarity pays for itself.
          </h2>

          <div className="space-y-5 mb-12">
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

        {/* Pull quote as visual break */}
        <div className="bg-primary py-10 md:py-14 px-8 md:px-16 text-center">
          <p className="font-heading font-bold tracking-tight leading-[1.1] text-accent" style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}>
            You don't need more marketing.
          </p>
          <p className="font-heading font-bold tracking-tight leading-[1.1] text-primary-foreground mt-2" style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}>
            You need to understand the marketing you've already got.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
