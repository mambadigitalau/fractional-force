import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import { caseStudies } from "@/lib/caseStudies";
import mambamark from "@/assets/mamba-mark.png";

const strategicServices = [
  {
    num: "01",
    title: "Fractional CMO",
    desc: "A senior marketing leader in your business, part-time. Setting direction, managing budget, holding everything accountable. The same strategic thinking as a $200K hire, without the $200K.",
    href: "/services/fractional-cmo",
  },
  {
    num: "02",
    title: "Strategy & Consulting",
    desc: "Audits, go-to-market plans, channel strategy, budget allocation. Built from your numbers, not a template. Then executed by the team that wrote it.",
    href: "/services/strategy-consulting",
  },
];

const executionServices = [
  {
    num: "03",
    title: "Paid Advertising",
    desc: "Google, Meta, TikTok, LinkedIn. Managed around your margins. We start with what you can afford to pay for a customer, then work backwards.",
    href: "/services/paid-advertising",
  },
  {
    num: "04",
    title: "Email Marketing",
    desc: "Klaviyo strategy, flows, campaigns, database growth. Klaviyo Master Partner. The highest-ROI channel most businesses ignore.",
    href: "/services/email-marketing",
  },
  {
    num: "05",
    title: "Content & Creative",
    desc: "Social media management, content production, brand creative. Connected to commercial goals, not content calendars.",
    href: "/services/content-creative",
  },
  {
    num: "06",
    title: "eCommerce",
    desc: "Shopify development, conversion optimisation, product feeds, retail marketing. Shopify Plus Partner. Built on unit economics.",
    href: "/services/ecommerce",
  },
];

const MobileServiceDropdown = ({ services }: { services: typeof strategicServices }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="sm:hidden py-2">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 border border-border text-sm font-heading font-semibold text-muted-foreground hover:text-foreground transition-colors duration-200"
      >
        <span>Browse Services</span>
        <ChevronDown className={`size-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="border-x border-b border-border animate-fade-in">
          {services.map((s) => (
            <Link
              key={s.num}
              to={s.href}
              className="group flex items-center gap-2 px-4 py-3 border-t border-border/50 hover:bg-accent/5 transition-colors duration-200"
            >
              <span className="text-accent/60 group-hover:text-accent text-xs font-heading font-semibold">{s.num}</span>
              <span className="text-sm font-heading font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-200">{s.title}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const ServiceRow = ({ s }: { s: (typeof strategicServices)[0] }) => (
  <Link
    to={s.href}
    className="group flex items-center gap-4 md:gap-6 py-5 md:py-7 border-t border-border last:border-b hover:pl-3 transition-all duration-300"
  >
    <span className="text-accent font-heading text-sm font-semibold w-8 shrink-0">
      {s.num}
    </span>
    <h3 className="font-heading text-2xl md:text-4xl font-bold text-foreground group-hover:text-accent transition-colors duration-300 w-[45%] md:w-[35%] shrink-0">
      {s.title}
    </h3>
    <p className="hidden md:block text-muted-foreground text-base flex-1 group-hover:text-foreground/70 transition-colors duration-300">
      {s.desc}
    </p>
    <span className="text-muted-foreground/30 group-hover:text-accent text-2xl transition-all duration-300 group-hover:translate-x-1">
      &#8594;
    </span>
  </Link>
);

const DarkServiceRow = ({ s }: { s: (typeof executionServices)[0] }) => (
  <Link
    to={s.href}
    className="group flex items-center gap-4 md:gap-6 py-5 md:py-7 border-t border-primary-foreground/15 last:border-b hover:pl-3 transition-all duration-300"
  >
    <span className="text-accent font-heading text-sm font-semibold w-8 shrink-0">
      {s.num}
    </span>
    <h3 className="font-heading text-2xl md:text-4xl font-bold text-primary-foreground group-hover:text-accent transition-colors duration-300 w-[45%] md:w-[35%] shrink-0">
      {s.title}
    </h3>
    <p className="hidden md:block text-primary-foreground/60 text-base flex-1 group-hover:text-primary-foreground/80 transition-colors duration-300">
      {s.desc}
    </p>
    <span className="text-primary-foreground/20 group-hover:text-accent text-2xl transition-all duration-300 group-hover:translate-x-1">
      &#8594;
    </span>
  </Link>
);

const ProofStrip = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <section className="section-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-14 gap-6">
          <h2 className="headline">See it in practice.</h2>
          <Link to="/work" className="btn-primary self-start md:self-auto">
            All Case Studies
          </Link>
        </div>

        {/* Desktop grid */}
        <div className="hidden lg:grid grid-cols-3 gap-5">
          {proofStudies.map((cs) => (
            <Link
              key={cs.slug}
              to={cs.sections ? `/work/${cs.slug}` : (cs.externalLink || "#")}
              className="group relative block aspect-[3/4] overflow-hidden"
            >
              <img src={cs.image} alt={cs.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col justify-end h-[55%]">
                <p className="text-primary-foreground/50 text-xs font-heading font-semibold tracking-wider uppercase mb-2">{cs.tags.join(", ")}</p>
                <h3 className={`font-heading font-bold text-accent mb-2 ${cs.title.length > 20 ? "text-lg md:text-xl" : "text-xl md:text-2xl"}`}>{cs.title}</h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed line-clamp-2">{cs.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile/Tablet carousel */}
        <div className="lg:hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {proofStudies.map((cs) => (
                <div key={cs.slug} className="flex-none basis-[82%] sm:basis-[47%]">
                  <Link
                    to={cs.sections ? `/work/${cs.slug}` : (cs.externalLink || "#")}
                    className="group relative block aspect-[3/4] overflow-hidden"
                  >
                    <img src={cs.image} alt={cs.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col justify-end h-[55%]">
                      <p className="text-primary-foreground/50 text-xs font-heading font-semibold tracking-wider uppercase mb-2">{cs.tags.join(", ")}</p>
                      <h3 className={`font-heading font-bold text-accent mb-2 ${cs.title.length > 20 ? "text-lg md:text-xl" : "text-xl md:text-2xl"}`}>{cs.title}</h3>
                      <p className="text-primary-foreground/80 text-sm leading-relaxed line-clamp-2">{cs.desc}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {scrollSnaps.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === selectedIndex ? "w-6 bg-accent" : "w-2 bg-primary-foreground/30"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Get 3 case studies for the proof strip
const proofStudies = caseStudies.slice(0, 3);

const ServicesArchive = () => {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="section-dark min-h-[70vh] flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32">
          <div className="max-w-4xl">
            <p className="text-accent font-heading font-semibold text-xs tracking-[0.2em] uppercase mb-6 animate-fade-up">
              Services
            </p>
            <h1
              className="headline-lg mb-8 md:mb-10 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Strategy first. Execution built in.
            </h1>
            <p
              className="body-lg text-primary-foreground/70 max-w-2xl mb-12 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Senior marketing leadership for growing businesses, backed by a
              team that handles paid media, email, content, creative, and
              eCommerce. One plan. One team. Nothing lost in translation.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICE TABS */}
      <section className="section-light border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-0">
          {/* Mobile: dropdown */}
          <MobileServiceDropdown services={[...strategicServices, ...executionServices]} />
          {/* Tablet: 2x3 grid */}
          <div className="hidden sm:grid md:hidden grid-cols-3 gap-2 py-4">
            {[...strategicServices, ...executionServices].map((s) => (
              <Link
                key={s.num}
                to={s.href}
                className="group flex items-center gap-2 px-4 py-3 border border-border hover:border-accent hover:bg-accent/5 transition-all duration-300"
              >
                <span className="text-accent/60 group-hover:text-accent text-xs font-heading font-semibold">{s.num}</span>
                <span className="text-sm font-heading font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-300">{s.title}</span>
              </Link>
            ))}
          </div>
          {/* Desktop: horizontal tabs */}
          <div className="hidden md:flex justify-center -mb-px">
            {[...strategicServices, ...executionServices].map((s) => (
              <Link
                key={s.num}
                to={s.href}
                className="group relative flex items-center gap-2 px-6 py-4 text-muted-foreground hover:text-foreground transition-colors duration-300 whitespace-nowrap shrink-0"
              >
                <span className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-300" />
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-300 ease-out" />
                <span className="relative text-accent/60 group-hover:text-accent text-xs font-heading font-semibold transition-colors duration-300">{s.num}</span>
                <span className="relative text-sm font-heading font-semibold">{s.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="section-light">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="headline mb-8">
              The gap that eats your marketing budget.
            </h2>
            <div className="space-y-5 mb-14">
              <p className="body-lg text-muted-foreground">
                Most businesses outgrow DIY marketing somewhere between $2M and
                $5M in revenue. What follows is usually one of two mistakes.
              </p>
              <p className="body-lg text-muted-foreground">
                Mistake one: hire a consultant who builds a strategy, presents it
                beautifully, and leaves you to figure out how to execute it. The
                strategy sits in a shared drive. Nothing changes.
              </p>
              <p className="body-lg text-muted-foreground">
                Mistake two: hire an agency that runs campaigns without ever
                asking whether those campaigns are the right ones. Plenty of
                activity. No direction.
              </p>
              <p className="body-lg text-muted-foreground">
                Either way, you're paying for half the job. We exist because
                business owners kept telling us the same thing: "I need someone
                who does both."
              </p>
            </div>
            <div className="py-10 border-t border-b border-border">
              <p
                className="font-heading font-bold tracking-tight leading-[1.15] text-accent"
                style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.5rem)" }}
              >
                Strategy without execution is a PDF. Execution without strategy
                is a waste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC SERVICES */}
      <section className="section-light">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20 md:pb-28">
          <div className="flex items-center gap-4 md:gap-6 mb-10 md:mb-14">
            <img
              src={mambamark}
              alt=""
              aria-hidden="true"
              className="h-10 md:h-14 w-auto opacity-20"
            />
            <h2 className="headline">Strategic leadership.</h2>
          </div>
          <div className="space-y-0">
            {strategicServices.map((s) => (
              <ServiceRow key={s.num} s={s} />
            ))}
          </div>
        </div>
      </section>

      {/* EXECUTION SERVICES — dark section for contrast */}
      <section className="section-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <h2 className="headline mb-10 md:mb-14">
            Execution capabilities.
          </h2>
          <div className="space-y-0">
            {executionServices.map((s) => (
              <DarkServiceRow key={s.num} s={s} />
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT CONNECTS */}
      <section className="section-light">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="headline mb-8">One team. Not six providers.</h2>
            <div className="space-y-5">
              <p className="body-lg text-muted-foreground">
                Every service connects to the same strategy. The person running
                your ads knows what your email flows say. The person writing your
                content knows what your margins look like. Nothing gets lost in
                translation because there's nobody to translate between.
              </p>
              <p className="body-lg text-muted-foreground">
                Most businesses piece this together across three or four
                providers and spend half their time managing the gaps. We built
                Mamba so that gap doesn't exist. It's less interesting than it
                sounds. It's just a marketing team working like a marketing team
                should.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF — case studies strip */}
      <ProofStrip />

      <FinalCTA />
      <Footer />
    </>
  );
};

export default ServicesArchive;
