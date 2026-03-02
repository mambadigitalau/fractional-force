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

const Insights = () => {
  return (
    <section className="section-light">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {posts.map((post, i) => (
            <a
              key={i}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
