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
import nurtureHero from "@/assets/cases/nurture-hero.png";
import nurtureSituation from "@/assets/cases/nurture-situation.jpg";
import nurtureFound from "@/assets/cases/nurture-found.jpg";
import nurtureResults from "@/assets/cases/nurture-results.jpg";
import gwgHero from "@/assets/cases/gwg-hero.png";
import gwgSituation from "@/assets/cases/gwg-situation.png";
import gwgFound from "@/assets/cases/gwg-found.png";
import gwgResults from "@/assets/cases/gwg-results.png";

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
          text: 'Mamba created Mindset Mastery, a one-day seminar repositioned around neuroscience. We wrote the event from scratch: the description, the messaging, all advertising. "Rewiring your brain" replaced "unlocking your potential." Science replaced self-help. The one-day format delivered the same experience at a fraction of the operational cost.',
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
    tags: ["Content & Creative", "Paid Advertising", "Strategy"],
    desc: "Three brand new childcare centres. Built the brand. Ran the ads. All three hit targets within months.",
    image: nurtureImg,
    heroImage: nurtureHero,
    sectionImages: {
      afterSituation: nurtureSituation,
      afterFound: nurtureFound,
      afterDid: nurtureResults,
    },
    industry: "Childcare",
    location: "Perth, WA",
    website: "https://nurture-el.com.au/",
    sections: {
      situation: [
        "Nurture Early Learning is a Perth-based childcare operator with three centres: two in Victoria Park and one in Murdoch. Holistic early learning for children aged six weeks to five years, with STEAM and EYLF curriculum, on-site chefs, and a Montessori program at one location.",
        "Mamba came on board in January 2024. No centres were open. All three were under construction. There was a name and a logo. Everything else needed to be built.",
      ],
      found: [
        "A brand new business with no market presence, no audience, no brand identity beyond a logo, and no parents on the books. Three centres due to open within months and every single enrolment needed to be generated from scratch.",
        "Childcare is a competitive, trust-driven market. Parents are not impulse buyers. They research, they compare, they visit, they deliberate. The decision involves handing over their child to strangers for most of the working week. The marketing has to earn that trust before anyone walks through the door.",
        "The operator had the centres, the educators, and the philosophy. What they needed was a strategic partner to build the brand, create the materials, launch the advertising, and drive the enquiries that would fill the rooms.",
      ],
      did: [
        {
          heading: "Built the brand identity from the ground up.",
          text: "Everything after the logo was Mamba. Brand guidelines. Visual identity and style. Parent handbooks. Educator handbooks. Marketing collateral. The tone, the look, the feel of Nurture as parents experience it across every touchpoint. We established the brand standard that the business still operates from today.",
        },
        {
          heading: "Built and managed the organic social media presence.",
          text: "Before any centre opened, Mamba built Nurture's social media from nothing. The accounts, the content, the community engagement. All designed to establish trust and awareness in the local market ahead of launch. Once the centres were open, children were enrolled, and internal staff were in place, we trained the Nurture team and handed organic social over to them. That was always the plan. Build it properly, set the standard, then hand it to the people who are actually in the centres every day.",
        },
        {
          heading: "Ran all paid advertising from pre-launch through to today.",
          text: "Meta ads from day one. A mix of lead generation campaigns and traffic campaigns driving to the website. The creative work is where the value sits in childcare advertising. Parents need confidence and information before they will book a tour. Every ad has to answer the questions that are already running through their head: is it safe, who are the educators, what will my child actually do there, is it worth the cost. We also ran open day campaigns for centre launches. One open day saw roughly 30 family groups come through in a single session, with around half signing up on the spot.",
        },
        {
          heading: "Managed the full conversion path.",
          text: "Ad to enquiry. Enquiry to tour booking. Tour to enrolment. Mamba built and managed the advertising that drives the top of this funnel across all three centres, with creative and messaging tailored to each location and its surrounding community.",
        },
      ],
      results: [
        "Murdoch and the Victoria Park Montessori centre opened in July 2024. Victoria Park Shepperton Road opened in November 2024. All three centres were hitting occupancy targets by early 2025, well within the first year of operation.",
        "For context, new childcare centres typically take 12 to 18 months to reach sustainable occupancy levels. Nurture reached that point significantly faster across all three locations.",
        "Every enrolment in the business was generated from the marketing infrastructure Mamba built. The brand identity. The social media presence. The paid advertising. The open day campaigns. There was no existing reputation to lean on, no word of mouth from years of operation, no established community presence. It all had to be created.",
        "Mamba has been with Nurture since before the first centre opened its doors. From brand development and organic social through to the paid media that continues to fill rooms today. One of those engagements where the scope is whatever the business needs it to be.",
      ],
    },
    relatedSlugs: ["mjb-seminars", "katherine-outback-experience"],
  },
  {
    slug: "girls-with-gems",
    title: "Girls With Gems",
    tags: ["eCommerce", "Paid Advertising"],
    desc: "In-store brand to eight-figure eCommerce. Attribution-led paid media at scale.",
    image: gwgImg,
    heroImage: gwgHero,
    sectionImages: {
      afterSituation: gwgSituation,
      afterFound: gwgFound,
      afterDid: gwgResults,
    },
    industry: "Fashion",
    location: "Sydney, NSW",
    website: "https://www.girlswithgems.com/",
    sections: {
      situation: [
        "Girls With Gems had built something genuinely rare in Australian fashion: a boutique in Double Bay with a loyal following, beautiful product, and a brand that people actually talked about. The in-store experience was the business. Online was an afterthought.",
        "By late 2021, the eCommerce side existed but wasn't the engine. Revenue was still predominantly brick-and-mortar. The brand had strong creative instincts and a clear identity. What it didn't have was a digital strategy, a paid media structure, or any real understanding of what was driving online sales versus what was just generating activity.",
      ],
      found: [
        "The creative was already strong. GWG understood their customer and their aesthetic better than most brands we've worked with. That wasn't the problem.",
        "The problem was that there was no attribution framework worth trusting. Decisions were being made on metrics that looked good on a dashboard but didn't connect to actual revenue. There was no campaign architecture designed to scale. No structured approach to new customer acquisition versus retargeting. No framework for understanding what a customer was actually worth and what it should cost to acquire one.",
        "The raw ingredients were excellent. The infrastructure to turn them into scalable eCommerce growth didn't exist yet.",
      ],
      did: [
        {
          heading: "Built the measurement framework first.",
          text: "Campaign structure came first. We designed a full-funnel paid media architecture across Meta, built around one non-negotiable principle: measure everything on 1-day last click ROAS. Not 7-day click. Not 28-day view-through. The hardest, most conservative attribution window available. Most advertisers avoid this because the numbers look smaller. We used it because it's the only metric that tells you the truth.",
        },
        {
          heading: "Built a systematic approach to customer acquisition.",
          text: "Every campaign, every audience, every creative was evaluated against what a new customer actually cost to acquire relative to what they were worth. Not just whether an ad \"performed\" but whether the unit economics behind it made commercial sense.",
        },
        {
          heading: "Scaled spend without degrading economics.",
          text: "As confidence in the model grew, so did spend. The system was designed to scale without the economics degrading. By the final year of the engagement, GWG was deploying over $1.5 million annually in paid media, managed entirely by Mamba.",
        },
      ],
      results: [
        "Girls With Gems went from a predominantly in-store operation to eight-figure annual eCommerce revenue.",
        "Over three and a half years, the business scaled from a boutique with a small online presence to one of the most commercially successful independent fashion eCommerce operations in Australia. Revenue didn't just grow. It compounded. Year on year, the paid media engine delivered consistent, scalable growth because it was built on numbers that were real.",
        "The 1-day last click discipline meant there were no surprises. No months where the dashboard said one thing and the bank account said another. The strategy was never about vanity metrics or impressive-looking reports. It was about building a system where every dollar spent could be traced to a dollar earned, conservatively.",
        "The real proof came when GWG launched Sneaky Link, their own in-house fashion label. The paid media infrastructure we'd built didn't just scale other brands' products. It became the launch platform for an entirely new brand. Sneaky Link sold 300 units on its first day. Within two years, it was driving roughly half of the entire company's revenue. An in-house label, built by a boutique owner with no design background, outperforming 60+ established designer brands on the same site.",
        "That's what happens when you treat eCommerce advertising as a financial discipline, not a creative one. The creative was already world-class. We gave it a commercial engine that matched.",
      ],
    },
    relatedSlugs: ["fat-burners-only", "waves-au"],
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((cs) => cs.slug === slug);
export const getRelatedStudies = (slugs: string[]) => caseStudies.filter((cs) => slugs.includes(cs.slug));
