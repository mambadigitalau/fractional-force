import { caseStudies } from "@/lib/caseStudies";

const Proof = () => {
  return (
    <section id="work" className="section-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-14 gap-6">
          <h2 className="headline">Businesses we've grown.</h2>
          <a href="/work" className="btn-primary self-start md:self-auto">
            All Case Studies
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {caseStudies.map((cs, i) => (
            <a
              key={i}
              href={cs.sections ? `/work/${cs.slug}` : (cs.externalLink || "#")}
              target={cs.sections ? undefined : "_blank"}
              rel={cs.sections ? undefined : "noopener noreferrer"}
              className="group relative block aspect-[3/4] overflow-hidden"
            >
              <img
                src={cs.image}
                alt={cs.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col justify-end h-[55%]">
                <p className="text-primary-foreground/50 text-xs font-heading font-semibold tracking-wider uppercase mb-2">
                  {cs.tags.join(", ")}
                </p>
                <h3 className={`font-heading font-bold text-accent mb-2 ${
                  cs.title.length > 20 ? "text-lg md:text-xl" : "text-xl md:text-2xl"
                }`}>
                  {cs.title}
                </h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed line-clamp-2">
                  {cs.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proof;
