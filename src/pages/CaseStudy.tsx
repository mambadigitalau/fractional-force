import { useParams, Navigate, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import { getCaseStudy, getRelatedStudies } from "@/lib/caseStudies";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

const SectionImage = ({ src, alt, direction = "bl" }: { src: string; alt: string; direction?: "bl" | "tr" }) => {
  const borderClasses = direction === "bl"
    ? "border-b-[6px] border-l-[6px] md:border-b-[10px] md:border-l-[10px] border-accent"
    : "border-t-[6px] border-r-[6px] md:border-t-[10px] md:border-r-[10px] border-accent";

  return (
    <section className="section-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 md:py-12">
        <div className={borderClasses}>
          <img src={src} alt={alt} className="w-full h-auto block" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

const RelatedCard = ({ r }: { r: ReturnType<typeof getRelatedStudies>[number] }) => (
  <Link
    to={`/work/${r.slug}`}
    className="group relative block aspect-[3/4] overflow-hidden"
  >
    <img
      src={r.image}
      alt={r.title}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col justify-end h-[55%]">
      <p className="text-primary-foreground/50 text-xs font-heading font-semibold tracking-wider uppercase mb-2">
        {r.tags.join(", ")}
      </p>
      <h3 className={`font-heading font-bold text-accent mb-2 ${
        r.title.length > 20 ? "text-lg md:text-xl" : "text-xl md:text-2xl"
      }`}>
        {r.title}
      </h3>
      <p className="text-primary-foreground/80 text-sm leading-relaxed line-clamp-2">
        {r.desc}
      </p>
    </div>
  </Link>
);

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const cs = getCaseStudy(slug || "");

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: false,
    slidesToScroll: 1,
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  if (!cs || !cs.sections) {
    return <Navigate to="/work" replace />;
  }

  const related = cs.relatedSlugs
    ? getRelatedStudies(cs.relatedSlugs).filter((r) => r.slug !== slug)
    : [];
  const heroImg = cs.heroImage || cs.image;

  return (
    <>
      <Navbar />

      {/* HERO IMAGE */}
      <section className="section-dark pt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-8 md:pt-20">
          <div className="border-b-[6px] border-l-[6px] md:border-b-[10px] md:border-l-[10px] border-accent">
            <img src={heroImg} alt={cs.title} className="w-full h-auto block" />
          </div>
        </div>
      </section>

      {/* TITLE + META */}
      <section className="section-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 md:py-20">
          <h1 className="headline-lg mb-8 md:mb-12">{cs.title}</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10">
            <div>
              <p className="text-accent font-heading font-semibold text-xs tracking-[0.2em] uppercase mb-2">Industry</p>
              <p className="text-primary-foreground font-heading font-bold">{cs.industry}</p>
            </div>
            <div>
              <p className="text-accent font-heading font-semibold text-xs tracking-[0.2em] uppercase mb-2">Location</p>
              <p className="text-primary-foreground font-heading font-bold">{cs.location}</p>
            </div>
            <div>
              <p className="text-accent font-heading font-semibold text-xs tracking-[0.2em] uppercase mb-2">Services</p>
              <p className="text-primary-foreground font-heading font-bold">{cs.tags.join(", ")}</p>
            </div>
            {cs.website && (
              <div>
                <p className="text-accent font-heading font-semibold text-xs tracking-[0.2em] uppercase mb-2">Website</p>
                <a href={cs.website} target="_blank" rel="noopener noreferrer" className="text-primary-foreground font-heading font-bold hover:text-accent transition-colors">
                  Visit site &#8594;
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* THE SITUATION */}
      <section className="section-light">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-4 lg:gap-20">
            <h2 className="headline text-3xl md:text-4xl">The Situation</h2>
            <div className="space-y-4 md:space-y-5 body-lg text-muted-foreground">
              {cs.sections.situation.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE BREAK — after situation */}
      {cs.sectionImages?.afterSituation && (
        <SectionImage src={cs.sectionImages.afterSituation} alt={`${cs.title} — seminar in action`} direction="bl" />
      )}

      {/* WHAT WE FOUND */}
      <section className="section-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-4 lg:gap-20">
            <h2 className="headline text-3xl md:text-4xl">What We Found</h2>
            <div className="space-y-4 md:space-y-5 body-lg text-primary-foreground/70">
              {cs.sections.found.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE BREAK — after found */}
      {cs.sectionImages?.afterFound && (
        <SectionImage src={cs.sectionImages.afterFound} alt={`${cs.title} — behind the scenes`} direction="tr" />
      )}

      {/* WHAT WE DID */}
      <section className="section-light">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-28">
          <h2 className="headline text-3xl md:text-4xl mb-8 md:mb-14">What We Did</h2>
          <div className="space-y-0">
            {cs.sections.did.map((item, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row gap-3 md:gap-8 py-5 md:py-8 border-t border-border last:border-b"
              >
                <span className="text-accent font-heading text-sm font-semibold w-10 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground md:w-[35%] shrink-0">
                  {item.heading}
                </h3>
                <p className="body-lg text-muted-foreground flex-1">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE BREAK — after did */}
      {cs.sectionImages?.afterDid && (
        <SectionImage src={cs.sectionImages.afterDid} alt={`${cs.title} — the results`} />
      )}

      {/* RESULTS */}
      <section className="section-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-4 lg:gap-20">
            <h2 className="headline text-3xl md:text-4xl">What Happened</h2>
            <div className="space-y-4 md:space-y-5 body-lg text-primary-foreground/70">
              {cs.sections.results.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RELATED PROJECTS */}
      {related.length > 0 && (
        <section className="section-light">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-20">
            <h2 className="headline mb-8 md:mb-14">Related projects.</h2>

            {/* Desktop grid */}
            <div className="hidden lg:grid grid-cols-3 gap-5">
              {related.map((r) => (
                <RelatedCard key={r.slug} r={r} />
              ))}
            </div>

            {/* Mobile/Tablet carousel with peek */}
            <div className="lg:hidden">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex gap-3">
                  {related.map((r) => (
                    <div key={r.slug} className="min-w-0 shrink-0 basis-[82%] sm:basis-[47%]">
                      <RelatedCard r={r} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Dot indicators */}
              <div className="flex justify-center gap-1.5 mt-5 lg:hidden">
                {related.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => emblaApi?.scrollTo(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === selectedIndex
                        ? "w-6 bg-accent"
                        : "w-1.5 bg-foreground/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <FinalCTA />
      <Footer />
    </>
  );
};

export default CaseStudy;
