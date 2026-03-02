import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import { caseStudies } from "@/lib/caseStudies";

const CaseStudiesArchive = () => {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="section-dark min-h-[60vh] flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32">
          <div className="max-w-4xl">
            <p className="text-accent font-heading font-semibold text-xs tracking-[0.2em] uppercase mb-6 animate-fade-up">
              Our Work
            </p>
            <h1 className="headline-lg mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Businesses we've grown.
            </h1>
            <p
              className="body-lg text-primary-foreground/70 max-w-2xl animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Real businesses. Real numbers. No vanity metrics.
            </p>
          </div>
        </div>
      </section>

      {/* CASE STUDIES GRID */}
      <section className="section-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20 md:pb-28">
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

      <FinalCTA />
      <Footer />
    </>
  );
};

export default CaseStudiesArchive;
