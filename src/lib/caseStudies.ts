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
import fboHero from "@/assets/cases/fbo-hero.png";
import fboSituation from "@/assets/cases/fbo-situation.png";
import fboFound from "@/assets/cases/fbo-found.png";
import fboResults from "@/assets/cases/fbo-results.png";
import wavesHero from "@/assets/cases/waves-hero.png";
import wavesSituation from "@/assets/cases/waves-situation.png";
import wavesFound from "@/assets/cases/waves-found.png";
import wavesResults from "@/assets/cases/waves-results.png";
import koeHero from "@/assets/cases/koe-hero.png";
import koeSituation from "@/assets/cases/koe-situation.jpg";
import koeResults from "@/assets/cases/koe-results.jpg";

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
    heroImage: fboHero,
    sectionImages: {
      afterSituation: fboSituation,
      afterFound: fboFound,
      afterDid: fboResults,
    },
    industry: "Health & Fitness",
    location: "Perth, WA",
    website: "https://www.fatburnersonly.com.au/",
    sections: {
      situation: [
        "Fat Burners Only started the way a lot of good Australian businesses start. Two people, a garage, and a category they knew cold. By the time we got involved in early 2022, they'd grown from that garage into one of Australia's most recognised online supplement retailers. Thousands of five-star reviews. A loyal customer base built on genuine product knowledge and fast, reliable service.",
        "But the marketing infrastructure hadn't kept pace with the business.",
        "Meta ads were being managed internally. There was spend going out and revenue coming in, but no structured campaign architecture and no framework for scaling efficiently. Email marketing was running through Mailchimp with basic in-house execution. No automation. No behavioural flows. No segmentation beyond the basics. The largest revenue channel most eCommerce businesses have access to was essentially untouched.",
        "The business was doing well despite its marketing, not because of it. That's a gap that gets more expensive every month you leave it open.",
      ],
      found: [
        "Two channels with enormous headroom.",
        "On the paid media side, budget was being deployed but without the architecture to make it work efficiently at scale. Ad sets weren't built around clear objectives or audience strategies. There was no structured approach to co-branded campaigns with supplement partners. Creative was functional but not systematic. The bones of a good operation were there. The engineering wasn't.",
        "On email, the gap was even wider. Mailchimp was the wrong platform for a business at this scale and complexity. There were no automated flows. No welcome series. No abandoned cart recovery. No post-purchase sequences. No winback programs. For a business with a large, active customer database and high repeat-purchase potential, that's not a missed opportunity. That's leaving millions on the table.",
      ],
      did: [
        {
          heading: "Email: a complete rebuild.",
          text: "We migrated the business from Mailchimp to Klaviyo and built the entire email program from scratch. Not a template job. A full architecture designed around how supplement customers actually buy. Welcome series. Abandoned cart recovery with multiple decision branches. Post-purchase flows tailored to product category and purchase behaviour. Winback sequences. Nurture content. Every flow built with multiple legs and splits based on what the customer bought, when they bought it, and what they were likely to need next.",
        },
        {
          heading: "High-volume email campaigns.",
          text: "We designed and executed 12 to 15 email campaigns per month. High volume, high pressure, high performance. Turnaround times were tight. Approval windows were short. The operation required a team that could produce broadcast-quality email creative on a schedule that would break most operators.",
        },
        {
          heading: "Paid media: structure where there was none.",
          text: "We rebuilt the Meta ads account around a campaign architecture that could scale. A major part of the account involved co-branded campaigns with supplement brands like EHP Labs, ATP Science, Switch Nutrition, and others. We built a system where every co-branded partnership had its own ad set with dedicated budget allocation, audience targeting, and performance benchmarks. Each one measured independently. Each one optimised on its own merits.",
        },
        {
          heading: "Scaled the entire acquisition engine.",
          text: "On top of the co-branded structure, we ran the business's own campaigns: evergreen product promotion, seasonal sales, and new customer acquisition. The entire account was engineered to scale spend without degrading efficiency. Dozens of concurrent ad sets, each with a clear purpose and measurable outcome.",
        },
      ],
      results: [
        "The paid media results exceeded every target the business set.",
        "The internal benchmark was a 15x return on ad spend. We consistently delivered above 25x, with peaks above 35x. On a typical monthly spend of around $15,000, the account was generating hundreds of thousands in attributed revenue at a cost per purchase regularly under $10. During peak trading periods like Black Friday, we scaled spend significantly while maintaining efficiency. A single month's paid media activity generated nearly half a million dollars in revenue.",
        "But the bigger story is email.",
        "The channel we built from nothing now drives over half of the business's total revenue. On annual turnover in the mid-seven figures, that's well above $3 million per year flowing through an email program that didn't exist before we built it. Welcome flows, abandoned carts, post-purchase sequences, and campaigns working together as a system. Every dollar of that revenue traces back to infrastructure we designed, built, and continue to operate nearly four years later.",
        "That's the difference between marketing that runs alongside a business and marketing that's woven into how it makes money. We didn't build a campaign. We built a channel. And it's still compounding.",
      ],
    },
    relatedSlugs: ["waves-au", "girls-with-gems"],
  },
  {
    slug: "waves-au",
    title: "Waves AU",
    tags: ["eCommerce", "Email", "Paid Advertising"],
    desc: "Garage to eight figures. Through a market collapse. We're still there.",
    image: wavesImg,
    heroImage: wavesHero,
    sectionImages: {
      afterSituation: wavesSituation,
      afterFound: wavesFound,
      afterDid: wavesResults,
    },
    industry: "Fashion",
    location: "Perth, WA",
    website: "https://www.wavesau.com.au/",
    sections: {
      situation: [
        "In May 2020, Waves AU was a sneaker resale operation running out of a garage. George Kozma had built a genuine following in the sneaker community through product knowledge, relationships, and the ability to get his hands on stock that nobody else could find. The business was turning over six figures. All of it driven by word of mouth, social credibility, and hustle.",
        "There was no website worth mentioning. No paid media. No email list. No marketing infrastructure of any kind. Orders were being processed manually. The brand existed almost entirely through George's personal reputation and his presence in the community.",
        "And the timing was extraordinary. The pandemic was pushing consumer behaviour online faster than anyone predicted. Sneaker culture was entering a mainstream boom. Resale was becoming a legitimate retail category. The opportunity in front of Waves wasn't incremental. It was exponential. But capturing it required everything the business didn't have yet: a real eCommerce platform, a customer acquisition engine, a retention strategy, and someone making the strategic calls about where to invest and when to scale.",
        "This wasn't a business that needed its marketing optimised. It needed a marketing function built from the ground up.",
      ],
      found: [
        "A blank canvas. No legacy systems to work around, no bad habits to unlearn, and no inflated expectations about what marketing could do overnight. But also no attribution, no customer data, no automation, no retention strategy, and no scalable acquisition model.",
        "The opportunity was enormous. The pandemic was accelerating eCommerce adoption. Sneaker culture was exploding. But capitalising on that required building every layer of the digital operation simultaneously: the store, the email engine, the paid media architecture, the analytics. And it required someone to make strategic decisions about where to invest, when to scale, and what to prioritise. Waves didn't need a marketing agency. It needed a CMO. We became one, without ever holding the title.",
      ],
      did: [
        {
          heading: "Built the entire digital operation.",
          text: "Shopify store. Designed, launched, and rebuilt multiple times as the business evolved. Each iteration reflected changes in product mix, customer behaviour, and market conditions. What worked for a sneaker resale business in 2020 looked nothing like what worked for a multi-category retailer in 2025.",
        },
        {
          heading: "Built the retention engine from zero.",
          text: "Klaviyo email program. Flows, campaigns, segmentation, lifecycle automation. From zero to a full retention engine that turned one-time buyers into repeat customers and generated revenue on days when no ad was running.",
        },
        {
          heading: "Ran paid media across Meta and Google.",
          text: "Full-funnel campaign architecture. At peak, we achieved ROAS figures above 70x. Even now, after fundamental shifts in the market, the system consistently delivers around 25x. We've had individual months exceed $1.5 million in revenue.",
        },
        {
          heading: "Navigated the market collapse.",
          text: "The sneaker resale market didn't just cool off. It collapsed. We saw it coming and diversified. Waves moved into adjacent categories before the floor fell out. Pop Mart and Labubu became a massive play. Over 20,000 units sold. Rhode was at Waves before the brand was even available in Australian retail. Over 7,500 units moved. Each of these wasn't just a product decision. It was a strategic call about timing, inventory risk, marketing investment, and audience expansion.",
        },
      ],
      results: [
        "From a garage to eight-figure annual revenue. Two consecutive years above $10 million. Over 100,000 orders processed. A brand that survived an industry collapse that bankrupted competitors.",
        "But the numbers only tell half the story. What actually happened is that a one-person operation became a real business with a real marketing function, a real customer base, and the strategic capability to navigate markets that were fundamentally reshaping underneath it.",
        "Sneaker resale boomed, and Waves scaled with it. Sneaker resale collapsed, and Waves pivoted ahead of it. New categories emerged, and Waves was first to market. Through all of it, the same team was setting the strategy and running the execution. No handoffs. No gaps between the plan and the work.",
        "Five years in, we're still there. That's not a campaign. That's a partnership.",
      ],
    },
    relatedSlugs: ["fat-burners-only", "girls-with-gems"],
  },
  {
    slug: "katherine-outback-experience",
    title: "Katherine Outback Experience",
    tags: ["Paid Advertising", "Strategy"],
    desc: "Regional touring, tourism targeting, and a #1 album. Not your typical ad account.",
    image: koeImg,
    heroImage: koeHero,
    sectionImages: {
      afterSituation: koeSituation,
      afterDid: koeResults,
    },
    industry: "Tourism & Events",
    location: "Katherine, NT",
    website: "https://www.katherineoutbackexperience.com.au/",
    sections: {
      situation: [
        "Tom Curtain is a multiple Golden Guitar winning country musician, horseman, and the owner of Katherine Outback Experience. Australia's Best Tourist Attraction. Not a shortlist. The winner. Three times at the national Qantas Australian Tourism Awards (2021, 2023, 2024).",
        "The business has two distinct operations. From April to October, Katherine Outback Experience runs as a permanent show in Katherine, NT. Real horse training, working dog demonstrations, live music, bush stories. From October to April, Tom takes the entire operation on the road. Horses, dogs, musicians, crew. A national tour hitting 50 to 70 towns across Queensland, New South Wales, Victoria, South Australia, Western Australia, and the Northern Territory. Not capital cities. Regional towns. Places like Rankins Springs, Cudal, Amphitheatre, Pinaroo. Towns that most touring acts skip entirely.",
        "When Mamba came on board in late 2020, Tom had built an incredible product and a loyal following. The shows were good. The audience existed. But the marketing was largely organic. Word of mouth, local press, social media without paid amplification. For an operation touring dozens of regional towns every season, that approach has a ceiling. And Tom was hitting it.",
        "The challenge wasn't awareness in the abstract. Tom Curtain is a known name in country music and regional Australia. The challenge was converting that into tickets sold in specific towns on specific dates, weeks in advance, in places where the total addressable audience within driving distance might be measured in the low thousands.",
      ],
      found: [
        "This wasn't a standard digital marketing problem. There's no evergreen funnel that works the same in Tamworth as it does in Warracknabeal. Every show is its own product, in its own market, with its own audience size, its own timing, and its own logistics.",
        "Three distinct advertising challenges, each requiring a different strategic approach.",
        "The national tour. Fifty to seventy individual shows per season, each in a different town, each needing its own campaign with location-specific creative and geo-targeted delivery. Most of these towns are small. The targetable audience within an 80km radius might be a few thousand people. That means frequency management becomes critical.",
        "The Katherine home show. The permanent attraction runs during the dry season and the audience is tourists, not locals. Katherine's resident population is around 6,000. The people you need to reach are planning a trip to the Top End. They're in Sydney, Melbourne, Brisbane, Perth. The targeting problem is essentially inverted.",
        "Music promotion. A newer addition to the scope. Tom is a recording artist with six studio albums, and promoting music through paid channels is a fundamentally different exercise to promoting live events.",
      ],
      did: [
        {
          heading: "Tour advertising across 50-70 towns per season.",
          text: "Each show gets its own campaign built around location targeting with a radius calibrated to the size of the town. Small town, wider radius. People out bush will drive an hour or more for a good show. Creative diversity isn't a nice-to-have. In small towns where the same few thousand people are seeing your ads repeatedly, it's the difference between building anticipation and building annoyance.",
        },
        {
          heading: "Katherine home show — inverted targeting.",
          text: "Completely different targeting strategy. Rather than geo-targeting around a venue, we're identifying and reaching people in the trip-planning phase for Northern Territory travel. People researching Top End holidays, people who've shown interest in outback tourism, people in major capital cities during the months when Katherine visitation peaks. The ad itself isn't selling a show. It's selling a reason to include Katherine on the itinerary.",
        },
        {
          heading: "Drove a #1 album launch.",
          text: "In 2025, we added album promotion to the scope with the release of Tom's sixth studio album, \"Here's To You.\" Paid media strategy designed to drive streams, awareness, and chart performance in the window around release. The album debuted at number one on the ARIA Top 20 Australian Country Albums Chart and number one on the AIR Independent Albums Chart.",
        },
      ],
      results: [
        "Five touring seasons. The shows are fundamentally bigger than when we started. What were once modest regional gatherings now regularly draw hundreds of attendees, with larger shows exceeding a thousand guests. More shows per tour. More towns on the schedule.",
        "The growth in tour scale is a direct result of the paid media engine making it commercially viable to add dates in towns that wouldn't have justified the logistics cost of showing up before. The advertising doesn't just promote the business. It expands the territory.",
        "The numbers are strong. Across multiple tours, we've maintained a cost per ticket sold that keeps every show commercially viable and a return on ad spend that justifies the investment at scale. On an annual paid media investment that runs into six figures, the touring operation generates multiples of that in ticket revenue.",
        "Different problems. Same discipline. Understand the audience. Build the right structure. Choose the right creative. Measure what matters. Five years in, we're still here.",
      ],
    },
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
          text: "Before any centre opened, Mamba built Nurture's social media from nothing. The accounts, the content, the community engagement. All designed to establish trust and awareness in the local market ahead of launch. Once the centres were open, children were enrolled, and internal staff were in place, we trained the Nurture team and handed organic social over to them.",
        },
        {
          heading: "Ran all paid advertising from pre-launch through to today.",
          text: "Meta ads from day one. A mix of lead generation campaigns and traffic campaigns driving to the website. Parents need confidence and information before they will book a tour. Every ad has to answer the questions that are already running through their head: is it safe, who are the educators, what will my child actually do there, is it worth the cost. One open day saw roughly 30 family groups come through in a single session, with around half signing up on the spot.",
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
