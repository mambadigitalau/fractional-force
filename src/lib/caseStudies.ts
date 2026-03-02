import fboImg from "@/assets/cases/fbo.jpg";
import wavesImg from "@/assets/cases/waves.png";
import koeImg from "@/assets/cases/koe.jpg";
import nurtureImg from "@/assets/cases/nurture.jpg";
import mjbImg from "@/assets/cases/mjb.png";
import gwgImg from "@/assets/cases/gwg.jpg";
import mjbHero from "@/assets/cases/mjb-hero.png";
import mjbSituation from "@/assets/cases/mjb-situation.jpg";
import mjbFound from "@/assets/cases/mjb-found.jpg";
import mjbResults from "@/assets/cases/mjb-results.jpg";

export type CaseStudy = {
  slug: string;
  title: string;
  tags: string[];
  desc: string;
  image: string;
  externalLink?: string;
  industry: string;
  location: string;
  website?: string;
  heroImage?: string;
  sectionImages?: {
    afterSituation?: string;
    afterFound?: string;
    afterDid?: string;
  };
  sections?: {
    situation: string[];
    found: string[];
    did: { heading: string; text: string }[];
    results: string[];
  };
  relatedSlugs?: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "mjb-seminars",
    title: "MJB Seminars",
    tags: ["Paid Advertising", "Strategy"],
    desc: "Zero to 437,000 followers. 1.7 million likes. For a business without a personal brand 12 months ago.",
    image: mjbImg,
    heroImage: mjbHero,
    sectionImages: {
      afterSituation: mjbSituation,
      afterFound: mjbFound,
      afterDid: mjbResults,
    },
    industry: "Education & Events",
    location: "Perth, WA",
    website: "https://mjbseminars.com/",
    sections: {
      situation: [
        "MJB Seminars is one of Australia's longest-running personal development companies. Founded and led by Mitch Behan and Emilia Tomeo out of Perth, MJB has been running experiential seminars, coaching programs, and international retreats for over 25 years. More than 50,000 people have attended their events. They hold 854+ Google reviews at 4.9 stars. Their Instagram following sits at 86,000+.",
        "MJB had built something remarkable over two decades. A loyal community. A proven methodology in the Equilibration Process. A reputation that filled rooms in Perth through word of mouth alone. But the business was at an inflection point. The personal development industry was shifting fast: rising ad costs, digital-first competitors, growing consumer scepticism toward free seminar models. MJB was ready for the next chapter but needed a strategic partner to build it.",
        "When Mamba came on board in June 2024, the scope was paid media execution with a very healthy budget per event. That scope expanded quickly once it became clear the opportunity went well beyond running ads.",
      ],
      found: [
        "MJB's entry-point event was a two-day free seminar. The format had served the business well, but the operational costs were significant and the broader market had shifted toward shorter, more accessible experiences. There was a clear opportunity to redesign the model.",
        "MJB was expanding interstate into Brisbane, Launceston, and Melbourne. Perth audiences already knew the brand through 25 years of presence. Interstate audiences were cold. Different challenge entirely.",
        "The founder, Mitch Behan, had 25 years of experience, thousands of transformation stories, and a natural presence on camera. But no personal social media accounts. The business had built a strong corporate following but the most compelling asset in the company, Mitch himself, had zero audience of his own.",
      ],
      did: [
        {
          heading: "Built Mitch Behan's personal brand from nothing.",
          text: "Mamba developed the personal brand strategy for Mitch: platform selection, content positioning, growth framework, and ongoing direction. Mitch brought it to life with natural, unscripted content that connected with audiences immediately.",
        },
        {
          heading: "Conceptualised and launched a new flagship event.",
          text: "Mamba created Mindset Mastery, a one-day seminar repositioned around neuroscience. We wrote the event from scratch: the description, the messaging, all advertising. \"Rewiring your brain\" replaced \"unlocking your potential.\" Science replaced self-help. The one-day format delivered the same experience at a fraction of the operational cost.",
        },
        {
          heading: "Built the paid media engine across all markets.",
          text: "Neuroscience-led creative. Challenging, confrontational hooks. Single-image graphics that consistently outperformed video. For interstate markets with no existing brand awareness, every registration was earned from cold through this system.",
        },
        {
          heading: "Delivered a strategic roadmap for the business.",
          text: "Beyond campaign work, Mamba delivered a comprehensive strategy covering brand development, lead generation, partnerships, and product alignment. An 18-month phased plan for MJB's next chapter.",
        },
      ],
      results: [
        "216,000 Instagram followers. From zero.",
        "221,000 TikTok followers. From zero.",
        "1.7 million TikTok likes. All in under 12 months.",
        "That audience became MJB's most valuable lead generation channel. People arrive at seminars already familiar with Mitch, already trusting the brand, before they see a paid ad.",
        "Cost per registration dropped by roughly two-thirds when Mindset Mastery replaced the previous format.",
        "Events across all markets consistently generate strong registration numbers well under the allocated budget. Interstate events that needed audiences built from scratch now convert from cold.",
        "Mamba has been with MJB since June 2024. What started as paid media became something broader. The kind of engagement where you are building the strategy, creating the flagship product, directing the brand, and running the campaigns. All under one roof.",
      ],
    },
    relatedSlugs: ["nurture-early-learning", "fat-burners-only"],
  },
  {
    slug: "fat-burners-only",
    title: "Fat Burners Only",
    tags: ["Email Marketing", "Paid Advertising"],
    desc: "No flows. No automation. No strategy. Now it's a $3M+ channel we built from scratch.",
    image: fboImg,
    industry: "eCommerce / Supplements",
    location: "Perth, WA",
    website: "https://fatburnersonly.com.au/",
    relatedSlugs: ["waves-au", "girls-with-gems"],
  },
  {
    slug: "waves-au",
    title: "Waves AU",
    tags: ["eCommerce", "Email", "Paid Advertising"],
    desc: "Garage to eight figures. Through a market collapse. We're still there.",
    image: wavesImg,
    industry: "eCommerce / Fashion",
    location: "Perth, WA",
    website: "https://wavesau.com/",
    relatedSlugs: ["fat-burners-only", "girls-with-gems"],
  },
  {
    slug: "katherine-outback-experience",
    title: "Katherine Outback Experience",
    tags: ["Paid Advertising", "Strategy"],
    desc: "Regional touring, tourism targeting, and a #1 album. Not your typical ad account.",
    image: koeImg,
    industry: "Tourism & Entertainment",
    location: "Katherine, NT",
    website: "https://katherineoutbackexperience.com.au/",
    relatedSlugs: ["mjb-seminars", "nurture-early-learning"],
  },
  {
    slug: "nurture-early-learning",
    title: "Nurture Early Learning",
    tags: ["Content & Creative", "Paid Advertising"],
    desc: "Three brand new childcare centres. Built the brand. Ran the ads. All three hit targets within months.",
    image: nurtureImg,
    industry: "Childcare",
    location: "Perth, WA",
    relatedSlugs: ["mjb-seminars", "katherine-outback-experience"],
  },
  {
    slug: "girls-with-gems",
    title: "Girls With Gems",
    tags: ["eCommerce", "Paid Advertising"],
    desc: "In-store brand to eight-figure eCommerce. Attribution-led paid media at scale.",
    image: gwgImg,
    industry: "eCommerce / Jewellery",
    location: "Perth, WA",
    relatedSlugs: ["fat-burners-only", "waves-au"],
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((cs) => cs.slug === slug);
export const getRelatedStudies = (slugs: string[]) => caseStudies.filter((cs) => slugs.includes(cs.slug));
