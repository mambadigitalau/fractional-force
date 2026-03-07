import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/lib/blogPosts";

const PostCard = ({ post, bordered }: { post: (typeof blogPosts)[number]; bordered?: { row: number; col: number } }) => (
  <Link
    to={`/insights/${post.slug}`}
    className={`group block p-4 md:p-5 ${
      bordered
        ? `${bordered.row > 0 ? "border-t border-border" : ""} ${bordered.col > 0 ? "lg:border-l border-border" : ""} ${bordered.col === 1 ? "sm:border-l" : ""}`
        : ""
    }`}
  >
    <div className="relative aspect-[16/9] overflow-hidden mb-4">
      <img
        src={post.image}
        alt={post.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
    </div>
    <p className="text-muted-foreground text-xs font-heading font-semibold tracking-wider uppercase mb-2">
      {post.dateShort} &middot; {post.category}
    </p>
    <h3 className="font-heading text-base md:text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-300 leading-snug">
      {post.title}
    </h3>
  </Link>
);

const Insights = () => {
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

  return (
    <section className="section-light">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16 gap-6">
          <h2 className="headline">Latest insights.</h2>
          <Link
            to="/insights"
            className="btn-inverted self-start md:self-auto"
          >
            All Articles
          </Link>
        </div>

        {/* Desktop grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <PostCard
              key={post.slug}
              post={post}
              bordered={{ row: Math.floor(i / 3), col: i % 3 }}
            />
          ))}
        </div>

        {/* Mobile carousel with peek */}
        <div className="sm:hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-3">
              {blogPosts.map((post) => (
                <div
                  key={post.slug}
                  className="min-w-0 shrink-0"
                  style={{ flexBasis: "85%" }}
                >
                  <PostCard post={post} />
                </div>
              ))}
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-1.5 mt-5">
            {blogPosts.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === selectedIndex
                    ? "w-6 bg-accent"
                    : "w-1.5 bg-foreground/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
