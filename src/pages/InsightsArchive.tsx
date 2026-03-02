import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";

const posts = [
  {
    title: "What a fractional CMO actually does (and doesn't do)",
    category: "Strategy",
    date: "February 2026",
    excerpt:
      "The role is senior leadership. Not doing the work. Not managing the work. Deciding which work is worth doing.",
    slug: "#",
    featured: true,
  },
  {
    title: "Why your marketing report makes you feel dumber",
    category: "Marketing",
    date: "January 2026",
    excerpt:
      "If you can't understand the report, the report is the problem. Not you.",
    slug: "#",
  },
  {
    title: "The real cost of not having a marketing strategy",
    category: "Strategy",
    date: "December 2025",
    excerpt:
      "Every month without clarity costs more than the month before. Here's why.",
    slug: "#",
  },
  {
    title: "Email marketing is not dead. You're just doing it wrong.",
    category: "Email",
    date: "November 2025",
    excerpt:
      "The highest-ROI channel most businesses ignore. A breakdown of what actually works.",
    slug: "#",
  },
  {
    title: "Impressions aren't income: rethinking paid media metrics",
    category: "Paid Advertising",
    date: "October 2025",
    excerpt:
      "If your ad report doesn't connect to revenue, it's not a report. It's a distraction.",
    slug: "#",
  },
  {
    title: "How we turned a $0 email channel into $3M for an eCommerce brand",
    category: "Case Study",
    date: "September 2025",
    excerpt:
      "No flows. No automation. No strategy. Here's how we built it from scratch.",
    slug: "#",
  },
];

const featuredPost = posts.find((p) => p.featured);
const otherPosts = posts.filter((p) => !p.featured);

const InsightsArchive = () => {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="section-dark min-h-[60vh] flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32">
          <div className="max-w-4xl">
            <p className="text-accent font-heading font-semibold text-xs tracking-[0.2em] uppercase mb-6 animate-fade-up">
              Insights
            </p>
            <h1
              className="headline-lg mb-8 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Thinking out loud.
            </h1>
            <p
              className="body-lg text-primary-foreground/70 max-w-2xl animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Marketing thinking for business owners who'd rather understand
              their marketing than just outsource it.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED POST */}
      {featuredPost && (
        <section className="section-light border-b border-border">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
            <a href={featuredPost.slug} className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-accent font-heading font-semibold text-xs tracking-[0.15em] uppercase">
                      {featuredPost.category}
                    </span>
                    <span className="w-1 h-1 bg-muted-foreground/30" />
                    <span className="text-muted-foreground/50 text-xs font-heading">
                      {featuredPost.date}
                    </span>
                  </div>
                  <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 group-hover:text-accent transition-colors duration-300 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="body-lg text-muted-foreground mb-8 max-w-lg">
                    {featuredPost.excerpt}
                  </p>
                  <span className="text-muted-foreground/40 group-hover:text-accent text-lg transition-all duration-300 group-hover:translate-x-2 inline-block font-heading font-semibold">
                    Read article &#8594;
                  </span>
                </div>
                <div className="bg-muted aspect-[16/10] flex items-center justify-center border border-border">
                  <div className="text-center px-8">
                    <p className="text-muted-foreground/20 font-heading font-bold tracking-wider uppercase" style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}>
                      Insights
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </section>
      )}

      {/* POSTS — alternating rows */}
      <section className="section-light">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 md:py-10">
          <div className="space-y-0">
            {otherPosts.map((post, i) => (
              <a
                key={i}
                href={post.slug}
                className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-8 md:py-10 border-t border-border last:border-b"
              >
                <span className="text-accent font-heading text-sm font-semibold w-10 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-accent font-heading font-semibold text-xs tracking-[0.15em] uppercase">
                      {post.category}
                    </span>
                    <span className="w-1 h-1 bg-muted-foreground/30" />
                    <span className="text-muted-foreground/50 text-xs font-heading">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-xl md:text-2xl lg:text-3xl text-foreground group-hover:text-accent transition-colors duration-300 leading-tight mb-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed max-w-2xl hidden md:block">
                    {post.excerpt}
                  </p>
                </div>
                <span className="text-muted-foreground/30 group-hover:text-accent text-2xl transition-all duration-300 group-hover:translate-x-1 shrink-0">
                  &#8594;
                </span>
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

export default InsightsArchive;
