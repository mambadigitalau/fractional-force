const pillars = [
  {
    num: "01",
    title: "Fractional CMO leadership.",
    body: "A senior marketing leader in your business, part-time. Setting direction. Managing budget. Holding everything accountable. Not someone who hands you a strategy document and disappears. Someone who stays and makes it work. Senior marketing leadership without the $200K salary.",
  },
  {
    num: "02",
    title: "Commercial thinking first.",
    body: "Founded by someone who started in accounting, not marketing. We read your P&L before your brand guidelines. Every recommendation ties back to revenue. If the maths doesn't work, we don't suggest it.",
  },
  {
    num: "03",
    title: "The execution team is already here.",
    body: "Most consultants leave you to find someone to do the work. Most agencies do the work without asking if it's the right work. Same team that wrote the strategy runs the ads, the email, and the content. One invoice. One point of accountability.",
  },
];

const Pillars = () => {
  return (
    <section className="section-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20">
        <h2 className="headline mb-10 md:mb-14">What makes this different.</h2>
        <div className="space-y-0">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="flex items-start gap-6 md:gap-10 py-6 md:py-8 border-t border-primary-foreground/10 last:border-b"
            >
              <span className="text-accent font-heading text-sm font-semibold w-8 shrink-0 pt-1">
                {pillar.num}
              </span>
              <div className="flex-1 grid md:grid-cols-[1fr_1.5fr] gap-4 md:gap-12">
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-accent">
                  {pillar.title}
                </h3>
                <p className="text-primary-foreground/70 leading-relaxed text-base md:text-lg">
                  {pillar.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
