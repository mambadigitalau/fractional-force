import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import { caseStudies } from "@/lib/caseStudies";

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
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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

      {/* SECTION TITLE */}
      <section className="section-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-10 md:pb-14">
          <h2 className="headline">Case Studies</h2>
        </div>
      </section>

      {/* CASE STUDIES — staggered editorial grid */}
      <section>
        <div className="max-w-7xl mx-auto">
          <div>
            {rest.map((cs, i) => {
              const href = cs.sections
                ? `/work/${cs.slug}`
                : cs.externalLink || "#";
              const isInternal = !!cs.sections;
              const isEven = i % 2 === 0;
              const isDark = isEven;

              const Wrapper = isInternal ? Link : "a";
              const wrapperProps = isInternal
                ? { to: href }
                : { href, target: "_blank", rel: "noopener noreferrer" };

              return (
                <Wrapper
                  key={cs.slug}
                  {...(wrapperProps as any)}
                  className="group grid grid-cols-1 md:grid-cols-2 gap-0"
                >
                  <div
                    className={`relative aspect-[16/10] md:aspect-[4/3] overflow-hidden ${
                      isEven ? "" : "md:order-2"
                    }`}
                  >
                    <img
                      src={cs.image}
                      alt={cs.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div
                    className={`flex flex-col justify-center p-8 md:p-12 lg:p-16 ${
                      isEven ? "" : "md:order-1"
                    } ${isDark ? "bg-primary text-primary-foreground" : "bg-background text-foreground"}`}
                  >
                    <span className="text-accent font-heading text-sm font-semibold mb-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className={`text-xs font-heading font-semibold tracking-wider uppercase mb-4 ${isDark ? "text-primary-foreground/50" : "text-muted-foreground/50"}`}>
                      {cs.tags.join(" · ")}
                    </p>
                    <h3 className={`font-heading font-bold text-2xl md:text-3xl lg:text-4xl mb-4 group-hover:text-accent transition-colors duration-300 leading-tight ${isDark ? "text-primary-foreground" : "text-foreground"}`}>
                      {cs.title}
                    </h3>
                    <p className={`body-lg mb-2 max-w-md ${isDark ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                      {cs.desc}
                    </p>
                    <div className="mt-6 flex items-center gap-3">
                      <span className={`text-xs font-heading font-semibold uppercase tracking-wider ${isDark ? "text-primary-foreground/50" : "text-muted-foreground/60"}`}>
                        {cs.industry}
                      </span>
                      <span className={`w-1 h-1 ${isDark ? "bg-primary-foreground/30" : "bg-muted-foreground/30"}`} />
                      <span className={`text-xs font-heading font-semibold uppercase tracking-wider ${isDark ? "text-primary-foreground/50" : "text-muted-foreground/60"}`}>
                        {cs.location}
                      </span>
                    </div>
                    <span className={`group-hover:text-accent text-lg mt-8 transition-all duration-300 group-hover:translate-x-2 self-start font-heading font-semibold ${isDark ? "text-primary-foreground/40" : "text-muted-foreground/30"}`}>
                      {isInternal ? "Read case study" : "View project"} &#8594;
                    </span>
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </>
  );
};

export default CaseStudiesArchive;
