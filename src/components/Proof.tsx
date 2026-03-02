const partners = [
  "Google Partner",
  "Meta Business Partner",
  "Shopify Plus Partner",
  "Klaviyo Master Partner",
];

const caseStudies = [
  {
    type: "eCommerce: Health & Wellness",
    metric: "+140% revenue in 6 months",
  },
  {
    type: "Hospitality: Multi-location",
    metric: "+85% qualified leads in 90 days",
  },
  {
    type: "Professional Services: B2B",
    metric: "3.2x return on ad spend",
  },
];

const Proof = () => {
  return (
    <section id="work" className="section-offwhite">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-36">
        <h2 className="headline mb-16 md:mb-20">Businesses we've grown.</h2>

        {/* Partner badges */}
        <div className="flex flex-wrap gap-6 md:gap-10 mb-20">
          {partners.map((p) => (
            <div
              key={p}
              className="border border-border px-6 py-4 font-heading text-sm md:text-base font-semibold text-foreground tracking-wide"
            >
              {p}
            </div>
          ))}
        </div>

        {/* Case studies */}
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {caseStudies.map((cs, i) => (
            <div key={i} className="bg-background p-8 md:p-10">
              <p className="text-muted-foreground text-sm font-medium mb-4 tracking-wide uppercase">
                {cs.type}
              </p>
              <p className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                {cs.metric}
              </p>
              <a
                href="#"
                className="text-foreground font-medium text-sm inline-flex items-center gap-2 hover:text-accent hover:gap-3 transition-all duration-300"
              >
                View case study <span>&#8594;</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proof;
