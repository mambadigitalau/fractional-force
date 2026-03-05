import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";

const posts = [
  {
    title: "AI Agents for Business in 2026: They're Not Assistants. They're Employees.",
    category: "AI",
    date: "March 2026",
    excerpt:
      "AI agents are no longer tools you prompt. They're autonomous workers that execute, adapt, and deliver — without hand-holding.",
    slug: "https://mambadigital.au/insights/",
    image: "https://mambadigital.au/wp-content/uploads/2026/03/AI-For-Business.png",
    featured: true,
  },
  {
    title: "What Is a Fractional CMO? The Complete Guide for Growing Australian Businesses",
    category: "CMO, Strategy",
    date: "February 2026",
    excerpt:
      "The role is senior leadership. Not doing the work. Not managing the work. Deciding which work is worth doing.",
    slug: "https://mambadigital.au/what-is-a-fractional-cmo-the-complete-guide-for-growing-australian-businesses/",
    image: "https://mambadigital.au/wp-content/uploads/2026/03/What-is-a-CMO--768x410.jpg",
  },
  {
    title: "Meta Advantage+ Backlash: Why Advertisers Are Frustrated – How We Fix It",
    category: "AI, Paid",
    date: "November 2025",
    excerpt:
      "Meta's black-box automation is frustrating advertisers everywhere. Here's what's actually going on — and how to take back control.",
    slug: "https://mambadigital.au/meta-advantage-backlash-why-advertisers-are-frustrated-how-we-fix-it/",
    image: "https://mambadigital.au/wp-content/uploads/2025/12/MetaBacklash_BlogImage_1366-%C3%97-768.png-768x428.jpg",
  },
  {
    title: "Why Your Perth Business Needs a Fractional CMO (Not a Full-Time Hire)",
    category: "CMO",
    date: "October 2025",
    excerpt:
      "You don't need a full-time marketing executive. You need the right one, at the right time, for the right scope.",
    slug: "https://mambadigital.au/why-your-perth-business-needs-a-fractional-cmo-not-a-full-time-hire/",
    image: "https://mambadigital.au/wp-content/uploads/2025/10/Why-Your-Perth-Business-Needs-a-Fractional-CMO-768x432.jpg",
  },
  {
    title: "Paid Social Media Strategy for Meta Ads: The Financial Edge that Drives Results",
    category: "Paid, Strategy",
    date: "May 2025",
    excerpt:
      "If your ad report doesn't connect to revenue, it's not a report. It's a distraction.",
    slug: "https://mambadigital.au/paid-social-media-strategy-for-meta-facebook-instagram-ads-the-financial-edge-that-drives-results/",
    image: "https://mambadigital.au/wp-content/uploads/2025/05/Blog-Paid-Social-Media-Strategy-for-Meta-V2-768x439.png",
  },
  {
    title: "How to Develop a Social Media Marketing Strategy (Step-by-Step Guide)",
    category: "Content, Strategy",
    date: "March 2025",
    excerpt:
      "The highest-ROI channel most businesses ignore. A breakdown of what actually works.",
    slug: "https://mambadigital.au/how-to-develop-a-social-media-marketing-strategy-step-by-step-guide/",
    image: "https://mambadigital.au/wp-content/uploads/2025/03/u5948933713_A_high-resolution_photorealistic_image_of_a_small_d_67d6f04f-86d9-4858-bc8e-5f76e12dbed0-768x439.png",
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
            <a href={featuredPost.slug} target="_blank" rel="noopener noreferrer" className="group block">
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
                <div className="overflow-hidden aspect-[16/10] border border-border">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
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
                target="_blank"
                rel="noopener noreferrer"
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
                      {post.date}
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
