import fboImg from "@/assets/cases/fbo.jpg";
import wavesImg from "@/assets/cases/waves.png";
import koeImg from "@/assets/cases/koe.jpg";
import nurtureImg from "@/assets/cases/nurture.jpg";
import mjbImg from "@/assets/cases/mjb.png";
import gwgImg from "@/assets/cases/gwg.jpg";

const caseStudies = [
  {
    title: "Fat Burners Only",
    tags: "Email Marketing, Paid Advertising",
    desc: "No flows. No automation. No strategy. Now it's a $3M+ channel we built from scratch.",
    image: fboImg,
    link: "https://mambadigital.au/work/fbo/",
  },
  {
    title: "Waves AU",
    tags: "E-Commerce, Email, Paid Advertising",
    desc: "Garage to eight figures. Through a market collapse. We're still there.",
    image: wavesImg,
    link: "https://mambadigital.au/work/wavesau/",
  },
  {
    title: "Katherine Outback Experience",
    tags: "Paid Advertising, Strategy",
    desc: "Regional touring, tourism targeting, and a #1 album. Not your typical ad account.",
    image: koeImg,
    link: "https://mambadigital.au/work/koe/",
  },
  {
    title: "Nurture Early Learning",
    tags: "Content & Creative, Paid Advertising",
    desc: "Three brand new childcare centres. Built the brand. Ran the ads. All three hit targets within months.",
    image: nurtureImg,
    link: "https://mambadigital.au/work/nurture-early-learning/",
  },
  {
    title: "MJB Seminars",
    tags: "Paid Advertising, Strategy",
    desc: "Zero to 437,000 followers. 1.7 million likes. For a business without a personal brand 12 months ago.",
    image: mjbImg,
    link: "https://mambadigital.au/work/mjb-seminars/",
  },
  {
    title: "Girls With Gems",
    tags: "E-Commerce, Paid Advertising",
    desc: "In-store brand to eight-figure eCommerce. Attribution-led paid media at scale.",
    image: gwgImg,
    link: "https://mambadigital.au/work/girls-with-gems/",
  },
];

const Proof = () => {
  return (
    <section id="work" className="section-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-14 gap-6">
          <h2 className="headline">Businesses we've grown.</h2>
          <a href="#" className="btn-primary self-start md:self-auto">
            All Case Studies
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {caseStudies.map((cs, i) => (
            <a
              key={i}
              href={cs.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative aspect-[4/3] overflow-hidden mb-4">
                <img
                  src={cs.image}
                  alt={cs.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-primary-foreground/40 text-xs font-heading font-semibold tracking-wider uppercase mb-2 min-h-[1rem]">
                {cs.tags}
              </p>
              <h3 className="font-heading text-lg md:text-xl font-bold text-accent mb-1 min-h-[1.75rem]">
                {cs.title}
              </h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                {cs.desc}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proof;
