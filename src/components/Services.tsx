const services = [
  {
    title: "Fractional CMO",
    desc: "Part-time marketing leadership that actually answers for results.",
    num: "01",
  },
  {
    title: "Strategy & Consulting",
    desc: "Audits, go-to-market, channel planning. Built from your numbers.",
    num: "02",
  },
  {
    title: "Paid Advertising",
    desc: "Google, Meta, TikTok, LinkedIn. Managed around your margins.",
    num: "03",
  },
  {
    title: "Email Marketing",
    desc: "Klaviyo flows, campaigns, database growth. The channel you own.",
    num: "04",
  },
  {
    title: "Content & Creative",
    desc: "Social, content production, brand creative. Connected to strategy.",
    num: "05",
  },
  {
    title: "eCommerce",
    desc: "Shopify, product feeds, CRO. Built on unit economics.",
    num: "06",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-36">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-20 gap-6">
          <h2 className="headline">What we do.</h2>
          <a href="/contact" className="btn-primary self-start md:self-auto">
            Work with us
          </a>
        </div>

        <div className="space-y-0">
          {services.map((s, i) => (
            <a
              key={i}
              href="#"
              className="group flex items-center gap-6 md:gap-10 py-7 md:py-9 border-t border-primary-foreground/15 last:border-b hover:pl-4 transition-all duration-300"
            >
              <span className="text-accent font-heading text-sm font-semibold w-8 shrink-0">
                {s.num}
              </span>
              <h3 className="font-heading text-2xl md:text-4xl font-bold text-primary-foreground group-hover:text-accent transition-colors duration-300 flex-1">
                {s.title}
              </h3>
              <p className="hidden md:block text-primary-foreground/50 text-base max-w-xs group-hover:text-primary-foreground/70 transition-colors duration-300">
                {s.desc}
              </p>
              <span className="text-primary-foreground/30 group-hover:text-accent text-2xl transition-all duration-300 group-hover:translate-x-1">
                &#8594;
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
