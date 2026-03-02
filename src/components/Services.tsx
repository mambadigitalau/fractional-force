import mambaLogotype from "@/assets/mamba-logotype-green.jpg";

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
    <section id="services" className="section-light relative overflow-hidden">
      {/* Background monogram - only behind header area */}
      <img
        src={mambaLogotype}
        alt=""
        aria-hidden="true"
        className="absolute -right-20 top-1/2 -translate-y-1/2 w-[600px] md:w-[800px] opacity-[0.04] pointer-events-none select-none"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16 gap-6">
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
              className="group flex items-center gap-4 md:gap-6 py-5 md:py-7 border-t border-border last:border-b hover:pl-3 transition-all duration-300"
            >
              <span className="text-accent font-heading text-sm font-semibold w-8 shrink-0">
                {s.num}
              </span>
              <h3 className="font-heading text-2xl md:text-4xl font-bold text-foreground group-hover:text-accent transition-colors duration-300 w-[45%] md:w-[40%] shrink-0">
                {s.title}
              </h3>
              <p className="hidden md:block text-muted-foreground text-base flex-1 group-hover:text-foreground/70 transition-colors duration-300">
                {s.desc}
              </p>
              <span className="text-muted-foreground/30 group-hover:text-accent text-2xl transition-all duration-300 group-hover:translate-x-1">
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
