const services = [
  {
    title: "Fractional CMO",
    desc: "Part-time marketing leadership. Strategy, budget oversight, team direction — and someone who answers for the results.",
    icon: "📊",
  },
  {
    title: "Strategy & Consulting",
    desc: "Audits, go-to-market strategy, channel planning, budget allocation. Built from your numbers.",
    icon: "🧭",
  },
  {
    title: "Paid Advertising",
    desc: "Google, Meta, TikTok, LinkedIn. Managed around your margins, not your impressions.",
    icon: "📈",
  },
  {
    title: "Email Marketing",
    desc: "Klaviyo strategy, automated flows, campaigns, database growth. The only channel you actually own.",
    icon: "✉️",
  },
  {
    title: "Content & Creative",
    desc: "Social media, content production, brand creative. Connected to a strategy, not just filling a feed.",
    icon: "🎨",
  },
  {
    title: "eCommerce",
    desc: "Shopify development, product feeds, conversion optimisation. Built on unit economics.",
    icon: "🛒",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-light">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-36">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-20 gap-4">
          <h2 className="headline">What we do.</h2>
          <a href="/contact" className="btn-primary self-start md:self-auto">
            Work with us
          </a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((s, i) => (
            <div key={i} className="bg-background p-8 md:p-10 group hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
              <span className="text-3xl mb-5 block">{s.icon}</span>
              <h3 className="font-heading text-xl md:text-2xl font-bold mb-3">
                {s.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-primary-foreground/70 leading-relaxed text-base transition-colors duration-300">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
