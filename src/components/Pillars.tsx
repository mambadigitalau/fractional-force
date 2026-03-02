const pillars = [
  {
    title: "Fractional CMO leadership.",
    body: "A senior marketing leader in your business, part-time. Setting direction. Managing budget. Holding everything accountable. Not someone who hands you a strategy document and disappears. Someone who stays and makes it work. Senior marketing leadership without the $200K salary.",
  },
  {
    title: "Commercial thinking first.",
    body: "Founded by someone who started in accounting, not marketing. We read your P&L before your brand guidelines. Every recommendation ties back to revenue. If the maths doesn't work, we don't suggest it.",
  },
  {
    title: "The execution team is already here.",
    body: "Most consultants leave you to find someone to do the work. Most agencies do the work without asking if it's the right work. Same team that wrote the strategy runs the ads, the email, and the content. One invoice. One point of accountability.",
  },
];

const Pillars = () => {
  return (
    <section className="section-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-36">
        <h2 className="headline mb-16 md:mb-20">What makes this different.</h2>
        <div className="grid md:grid-cols-3 gap-px bg-primary-foreground/10">
          {pillars.map((pillar, i) => (
            <div key={i} className="bg-primary p-8 md:p-10">
              <h3 className="font-heading text-xl md:text-2xl font-bold text-accent mb-6">
                {pillar.title}
              </h3>
              <p className="text-primary-foreground/70 leading-relaxed text-base md:text-lg">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
