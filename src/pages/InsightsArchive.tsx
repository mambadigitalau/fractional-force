import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import { blogPosts } from "@/lib/blogPosts";

const featuredPost = blogPosts[0];
const otherPosts = blogPosts.slice(1);

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
            <Link to={`/insights/${featuredPost.slug}`} className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-accent font-heading font-semibold text-xs tracking-[0.15em] uppercase">
                      {featuredPost.category}
                    </span>
                    <span className="w-1 h-1 bg-muted-foreground/30" />
                    <span className="text-muted-foreground/50 text-xs font-heading">
                      {featuredPost.dateShort}
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
                <div className="overflow-hidden aspect-[16/10] border border-border">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* POSTS — alternating rows */}
      <section className="section-light">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 md:py-10">
          <div className="space-y-0">
            {otherPosts.map((post, i) => (
              <Link
                key={post.slug}
                to={`/insights/${post.slug}`}
                className="group flex flex-col md:flex-row md:items-start gap-4 md:gap-8 py-8 md:py-10 border-t border-border last:border-b"
              >
                <span className="text-accent font-heading text-sm font-semibold w-10 shrink-0 md:pt-1 hidden md:block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="shrink-0 w-full md:w-48 lg:w-56 overflow-hidden aspect-[16/9] md:aspect-[16/10]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-accent font-heading font-semibold text-xs tracking-[0.15em] uppercase">
                      {post.category}
                    </span>
                    <span className="w-1 h-1 bg-muted-foreground/30" />
                    <span className="text-muted-foreground/50 text-xs font-heading">
                      {post.dateShort}
                    </span>
                  </div>
                  <div className="flex items-start gap-4">
                    <h3 className="font-heading font-bold text-xl md:text-2xl lg:text-3xl text-foreground group-hover:text-accent transition-colors duration-300 leading-tight mb-2 flex-1 min-w-0">
                      {post.title}
                    </h3>
                    <span className="text-muted-foreground/30 group-hover:text-accent text-2xl transition-all duration-300 group-hover:translate-x-1 shrink-0 mt-0.5">
                      &#8594;
                    </span>
                  </div>
                  <p className="text-muted-foreground text-base leading-relaxed max-w-2xl hidden md:block">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
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
