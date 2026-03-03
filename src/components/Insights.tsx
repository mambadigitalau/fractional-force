import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

const posts = [
  {
    title: "AI Agents for Business in 2026: They're Not Assistants. They're Employees.",
    date: "March 1, 2026",
    tags: "AI",
    image: "https://mambadigital.au/wp-content/uploads/2026/03/AI-For-Business.png",
    link: "https://mambadigital.au/insights/",
  },
  {
    title: "What Is a Fractional CMO? The Complete Guide for Growing Australian Businesses",
    date: "February 16, 2026",
    tags: "CMO, Strategy",
    image: "https://mambadigital.au/wp-content/uploads/2026/03/What-is-a-CMO--768x410.jpg",
    link: "https://mambadigital.au/what-is-a-fractional-cmo-the-complete-guide-for-growing-australian-businesses/",
  },
  {
    title: "Meta Advantage+ Backlash: Why Advertisers Are Frustrated – How We Fix It",
    date: "November 29, 2025",
    tags: "AI, Paid",
    image: "https://mambadigital.au/wp-content/uploads/2025/12/MetaBacklash_BlogImage_1366-%C3%97-768.png-768x428.jpg",
    link: "https://mambadigital.au/meta-advantage-backlash-why-advertisers-are-frustrated-how-we-fix-it/",
  },
  {
    title: "Why Your Perth Business Needs a Fractional CMO (Not a Full-Time Hire)",
    date: "October 24, 2025",
    tags: "CMO",
    image: "https://mambadigital.au/wp-content/uploads/2025/10/Why-Your-Perth-Business-Needs-a-Fractional-CMO-768x432.jpg",
    link: "https://mambadigital.au/why-your-perth-business-needs-a-fractional-cmo-not-a-full-time-hire/",
  },
  {
    title: "Paid Social Media Strategy for Meta Ads: The Financial Edge that Drives Results",
    date: "May 19, 2025",
    tags: "Paid, Strategy",
    image: "https://mambadigital.au/wp-content/uploads/2025/05/Blog-Paid-Social-Media-Strategy-for-Meta-V2-768x439.png",
    link: "https://mambadigital.au/paid-social-media-strategy-for-meta-facebook-instagram-ads-the-financial-edge-that-drives-results/",
  },
  {
    title: "How to Develop a Social Media Marketing Strategy (Step-by-Step Guide)",
    date: "March 6, 2025",
    tags: "Content, Strategy",
    image: "https://mambadigital.au/wp-content/uploads/2025/03/u5948933713_A_high-resolution_photorealistic_image_of_a_small_d_67d6f04f-86d9-4858-bc8e-5f76e12dbed0-768x439.png",
    link: "https://mambadigital.au/how-to-develop-a-social-media-marketing-strategy-step-by-step-guide/",
  },
];

const PostCard = ({ post, bordered }: { post: (typeof posts)[number]; bordered?: { row: number; col: number } }) => (
  <a
    href={post.link}
    target="_blank"
    rel="noopener noreferrer"
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
      {post.date} &middot; {post.tags}
    </p>
    <h3 className="font-heading text-base md:text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-300 leading-snug">
      {post.title}
    </h3>
  </a>
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
          <a
            href="https://mambadigital.au/insights/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-inverted self-start md:self-auto"
          >
            All Articles
          </a>
        </div>

        {/* Desktop grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <PostCard
              key={i}
              post={post}
              bordered={{ row: Math.floor(i / 3), col: i % 3 }}
            />
          ))}
        </div>

        {/* Mobile carousel with peek */}
        <div className="sm:hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-3">
              {posts.map((post, i) => (
                <div
                  key={i}
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
            {posts.map((_, i) => (
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
