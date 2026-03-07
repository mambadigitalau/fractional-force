import { useParams, Link } from "react-router-dom";
import { useMemo, useEffect, useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import { getBlogPost, getRelatedPosts, type BlogSection } from "@/lib/blogPosts";

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = useMemo(() => getBlogPost(slug || ""), [slug]);
  const related = useMemo(() => getRelatedPosts(slug || "", 3), [slug]);

  // Extract headings for TOC
  const headings = useMemo(() => {
    if (!post) return [];
    return post.sections
      .filter((s) => s.type === "heading")
      .map((s, i) => ({
        id: `section-${i}`,
        text: s.content || "",
      }));
  }, [post]);

  const [activeId, setActiveId] = useState("");
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());

  // Intersection observer for active TOC tracking
  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    sectionRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [headings]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <>
        <Navbar />
        <section className="section-dark min-h-[60vh] flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="headline mb-6">Article not found.</h1>
            <Link to="/insights" className="btn-primary">
              Back to Insights
            </Link>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  let headingIndex = -1;

  const renderSection = (section: BlogSection, i: number) => {
    if (section.type === "heading") {
      headingIndex++;
      const id = `section-${headingIndex}`;
      return (
        <h2
          key={i}
          id={id}
          ref={(el) => {
            if (el) sectionRefs.current.set(id, el);
          }}
          className="font-heading font-bold text-2xl md:text-3xl text-foreground mt-12 mb-5 leading-tight"
        >
          {section.content}
        </h2>
      );
    }
    if (section.type === "bold-paragraph") {
      return (
        <p
          key={i}
          className="text-foreground text-base md:text-lg leading-[1.75] mb-5"
        >
          <strong>{section.content}</strong>
        </p>
      );
    }
    if (section.type === "italic-paragraph") {
      return (
        <p
          key={i}
          className="text-muted-foreground text-base md:text-lg leading-[1.75] mb-5 italic"
        >
          {section.content}
        </p>
      );
    }
    if (section.type === "separator") {
      return <hr key={i} className="border-border my-10" />;
    }
    return (
      <p
        key={i}
        className="text-muted-foreground text-base md:text-lg leading-[1.75] mb-5"
      >
        {section.content}
      </p>
    );
  };

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="section-dark pt-28 md:pt-36 pb-0">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <p className="text-accent font-heading font-semibold text-xs tracking-[0.2em] uppercase mb-5 animate-fade-up">
            {post.date}
          </p>
          <h1
            className="font-heading font-bold tracking-tight leading-[1.1] mb-10 animate-fade-up text-primary-foreground"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              animationDelay: "0.1s",
            }}
          >
            {post.title}
          </h1>
        </div>

        {/* Video or Image hero */}
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          {post.videoUrl ? (
            <div className="relative aspect-video overflow-hidden">
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster={post.image}
              >
                <source src={post.videoUrl} type="video/mp4" />
              </video>
            </div>
          ) : (
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </section>

      {/* ARTICLE BODY + TOC */}
      <section className="section-light">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20">
          <div className="flex gap-12 lg:gap-16 items-start">
            {/* Main content */}
            <article className="flex-1 min-w-0 max-w-3xl">
              {/* Category tags */}
              <div className="flex items-center gap-3 mb-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-accent font-heading font-semibold text-xs tracking-[0.15em] uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Body sections */}
              {post.sections.map((section, i) => renderSection(section, i))}

              {/* FAQ */}
              {post.faq && post.faq.length > 0 && (
                <>
                  <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mt-12 mb-8 leading-tight">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-8">
                    {post.faq.map((item, i) => (
                      <div key={i}>
                        <h3 className="font-heading font-bold text-lg md:text-xl text-foreground mb-3">
                          {item.question}
                        </h3>
                        <p className="text-muted-foreground text-base md:text-lg leading-[1.75]">
                          {item.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* CTA */}
              {post.cta && (
                <>
                  <hr className="border-border my-10" />
                  <p
                    className="text-muted-foreground text-base md:text-lg leading-[1.75] italic [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-accent/80 [&_a]:transition-colors"
                    dangerouslySetInnerHTML={{ __html: post.cta }}
                  />
                </>
              )}
            </article>

            {/* Sticky TOC sidebar — desktop only */}
            {headings.length > 0 && (
              <aside className="hidden lg:block w-64 shrink-0 sticky top-28">
                <p className="font-heading font-semibold text-xs tracking-[0.15em] uppercase text-muted-foreground mb-4">
                  In this article
                </p>
                <nav className="flex flex-col gap-1">
                  {headings.map((h) => (
                    <a
                      key={h.id}
                      href={`#${h.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .getElementById(h.id)
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className={`text-sm leading-snug py-1.5 border-l-2 pl-4 transition-all duration-200 ${
                        activeId === h.id
                          ? "border-accent text-foreground font-semibold"
                          : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                      }`}
                    >
                      {h.text}
                    </a>
                  ))}
                </nav>
              </aside>
            )}
          </div>
        </div>
      </section>

      {/* RELATED POSTS */}
      {related.length > 0 && (
        <section className="section-light border-t border-border">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-10">
              More from the blog.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
              {related.map((rp, i) => (
                <Link
                  key={rp.slug}
                  to={`/insights/${rp.slug}`}
                  className={`group block p-4 md:p-5 ${
                    i > 0 ? "sm:border-l border-border" : ""
                  }`}
                >
                  <div className="relative aspect-[16/9] overflow-hidden mb-4">
                    <img
                      src={rp.image}
                      alt={rp.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-muted-foreground text-xs font-heading font-semibold tracking-wider uppercase mb-2">
                    {rp.dateShort} &middot; {rp.category}
                  </p>
                  <h3 className="font-heading text-base md:text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-300 leading-snug">
                    {rp.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FinalCTA />
      <Footer />
    </>
  );
};

export default BlogArticle;
