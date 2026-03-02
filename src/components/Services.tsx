const services = [
  {
    title: "Fractional CMO",
    desc: "Part-time marketing leadership. Strategy, budget oversight, team direction, and someone who actually answers for the results.",
  },
  {
    title: "Strategy & Consulting",
    desc: "Audits, go-to-market strategy, channel planning, budget allocation. Built from your numbers. Executed by the people who wrote it.",
  },
  {
    title: "Paid Advertising",
    desc: "Google, Meta, TikTok, LinkedIn. Managed around your margins, not your impressions.",
  },
  {
    title: "Email Marketing",
    desc: "Klaviyo strategy, automated flows, campaigns, database growth. The only channel you actually own.",
  },
  {
    title: "Content & Creative",
    desc: "Social media, content production, brand creative. Connected to a strategy. Not just filling a feed.",
  },
  {
    title: "eCommerce",
    desc: "Shopify development, product feeds, conversion optimisation. Built on unit economics, not just traffic.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-light">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-36">
        <h2 className="headline mb-16 md:mb-20">What we do.</h2>
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {services.map((s, i) => (
            <div key={i} className="bg-background p-8 md:p-10 group">
              <h3 className="font-heading text-xl md:text-2xl font-bold mb-4 text-foreground">
                {s.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 text-base md:text-lg">
                {s.desc}
              </p>
              <a
                href="#"
                className="text-foreground font-medium text-sm inline-flex items-center gap-2 group-hover:text-accent group-hover:gap-3 transition-all duration-300"
              >
                Learn more <span>&#8594;</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
