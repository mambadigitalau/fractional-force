import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import { caseStudies } from "@/lib/caseStudies";

const CaseStudyCard = ({ cs }: { cs: (typeof caseStudies)[number] }) => {
  const href = cs.sections ? `/work/${cs.slug}` : (cs.externalLink || "#");
  const isInternal = !!cs.sections;

  const inner = (
    <div className="group relative block aspect-[3/4] overflow-hidden">
      <img
        src={cs.image}
        alt={cs.title}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col justify-end h-[55%]">
        <p className="text-primary-foreground/50 text-xs font-heading font-semibold tracking-wider uppercase mb-2">
          {cs.tags.join(", ")}
        </p>
        <h3
          className={`font-heading font-bold text-accent mb-2 ${
            cs.title.length > 20 ? "text-lg md:text-xl" : "text-xl md:text-2xl"
          }`}
        >
          {cs.title}
        </h3>
        <p className="text-primary-foreground/80 text-sm leading-relaxed line-clamp-2">
          {cs.desc}
        </p>
      </div>
    </div>
  );

  if (isInternal) {
    return (
      <Link to={href} className="block">
        {inner}
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block">
      {inner}
    </a>
  );
};

const CaseStudiesArchive = () => {
  const featured = caseStudies.find((cs) => cs.sections);
  const rest = caseStudies.filter((cs) => cs !== featured);

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
            <h1
              className="headline-lg mb-8 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Businesses we've grown.
            </h1>
            <p
              className="body-lg text-primary-foreground/70 max-w-2xl animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Real businesses. Real numbers. Strategy and execution under one
              roof. Here's what that looks like.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED CASE STUDY */}
      {featured && (
        <section className="section-dark">
          <div className="max-w-7xl mx-auto px-6 md:px-10 pb-10">
            <Link
              to={`/work/${featured.slug}`}
              className="group relative block w-full overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                  />
                </div>
                <div className="bg-primary border border-primary-foreground/10 p-10 md:p-14 lg:p-16 flex flex-col justify-center">
                  <p className="text-accent font-heading font-semibold text-xs tracking-[0.2em] uppercase mb-4">
                    Featured
                  </p>
                  <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-4 group-hover:text-accent transition-colors duration-300 leading-tight">
                    {featured.title}
                  </h2>
                  <p className="text-primary-foreground/50 text-xs font-heading font-semibold tracking-wider uppercase mb-6">
                    {featured.tags.join(" · ")}
                  </p>
                  <p className="body-lg text-primary-foreground/70 mb-8 max-w-lg">
                    {featured.desc}
                  </p>
                  <span className="text-primary-foreground/40 group-hover:text-accent text-lg transition-all duration-300 group-hover:translate-x-2 self-start font-heading font-semibold">
                    Read case study &#8594;
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* CASE STUDIES GRID — matches homepage Proof grid */}
      <section className="section-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((cs) => (
              <CaseStudyCard key={cs.slug} cs={cs} />
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
