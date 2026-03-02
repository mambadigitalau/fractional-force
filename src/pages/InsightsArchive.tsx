import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";

const posts = [
  {
    title: "What a fractional CMO actually does (and doesn't do)",
    category: "Strategy",
    date: "February 2026",
    excerpt: "The role is senior leadership. Not doing the work. Not managing the work. Deciding which work is worth doing.",
    slug: "#",
  },
  {
    title: "Why your marketing report makes you feel dumber",
    category: "Marketing",
    date: "January 2026",
    excerpt: "If you can't understand the report, the report is the problem. Not you.",
    slug: "#",
  },
  {
    title: "The real cost of not having a marketing strategy",
    category: "Strategy",
    date: "December 2025",
    excerpt: "Every month without clarity costs more than the month before. Here's why.",
    slug: "#",
  },
  {
    title: "Email marketing is not dead. You're just doing it wrong.",
    category: "Email",
    date: "November 2025",
    excerpt: "The highest-ROI channel most businesses ignore. A breakdown of what actually works.",
    slug: "#",
  },
  {
    title: "Impressions aren't income: rethinking paid media metrics",
    category: "Paid Advertising",
    date: "October 2025",
    excerpt: "If your ad report doesn't connect to revenue, it's not a report. It's a distraction.",
    slug: "#",
  },
  {
    title: "How we turned a $0 email channel into $3M for an eCommerce brand",
    category: "Case Study",
    date: "September 2025",
    excerpt: "No flows. No automation. No strategy. Here's how we built it from scratch.",
    slug: "#",
  },
];

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
            <h1 className="headline-lg mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Thinking out loud.
            </h1>
            <p
              className="body-lg text-primary-foreground/70 max-w-2xl animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Marketing thinking for business owners who'd rather understand their marketing than just outsource it.
            </p>
          </div>
        </div>
      </section>

      {/* POSTS GRID */}
      <section className="section-light">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {posts.map((post, i) => (
              <a
                key={i}
                href={post.slug}
                className="group bg-background p-8 md:p-10 flex flex-col justify-between min-h-[280px] hover:bg-muted/50 transition-colors duration-300"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-accent font-heading font-semibold text-xs tracking-[0.15em] uppercase">
                      {post.category}
                    </span>
                    <span className="text-muted-foreground/40 text-xs">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-4 group-hover:text-accent transition-colors duration-300 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
                <span className="text-muted-foreground/30 group-hover:text-accent text-lg mt-6 transition-all duration-300 group-hover:translate-x-1 self-start">
                  Read &#8594;
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
