import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import fcmo1 from "@/assets/services/fcmo-1.jpg";
import fcmo2 from "@/assets/services/fcmo-2.jpg";
import fcmo6 from "@/assets/services/fcmo-6.png";
import fboImg from "@/assets/cases/fbo.jpg";
import koeImg from "@/assets/cases/koe.jpg";
import nurtureImg from "@/assets/cases/nurture.jpg";
import mjbImg from "@/assets/cases/mjb.png";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What does a fractional CMO actually do?",
    a: "Same thing a full-time CMO does: sets strategy, oversees execution, interprets data, manages teams and providers, and makes sure marketing investment delivers results. The difference is you get it part-time, which for most businesses under $20M is exactly the right amount.",
  },
  {
    q: "How is this different from hiring an agency?",
    a: "An agency executes tasks. A fractional CMO decides which tasks matter. With Mamba, you get both under one roof: the strategic direction and the team to deliver it. One plan. One invoice. One point of accountability.",
  },
  {
    q: "How much does a fractional CMO cost in Perth?",
    a: "Engagements typically range from $5,000 to $15,000 per month depending on scope, complexity, and how much execution support is required. We start with a 90-day commitment because that's the minimum to diagnose, build, and prove results.",
  },
  {
    q: "How long does a typical engagement last?",
    a: "Ninety days to start. That's enough time to get clarity, build structure, and prove the approach works. Many clients continue into ongoing engagements. Others shift to a lighter advisory arrangement once the foundations are in place. No lock-in contracts beyond the initial commitment.",
  },
  {
    q: "Do I need to fire my current agency?",
    a: "Not necessarily. A fractional CMO can direct your existing providers and make sure their work aligns with a coherent strategy. Quite often, strategic oversight makes existing provider relationships work significantly better: because someone's finally telling them what to prioritise.",
  },
  {
    q: "How often will we meet?",
    a: "Typically weekly or fortnightly, depending on the phase. During the Clarity phase (first 30 days), expect more intensive engagement. After that, we settle into a rhythm that works for your business. You'll also have Slack and email access between sessions.",
  },
  {
    q: "What if we already have a marketing person or team?",
    a: "A fractional CMO works with your existing team, not instead of them. The role is senior leadership: setting direction, defining priorities, interpreting data, and holding the strategy together. Your existing team gets clearer direction and better support. Most internal marketing people tell us it's the first time anyone's actually given them a proper brief.",
  },
  {
    q: "Can you work with businesses outside Perth?",
    a: "We can, and we do. But our primary focus is Perth Metro and South West WA. That's where our local knowledge, relationships, and market understanding add the most value.",
  },
];

const phases = [
  {
    num: "01",
    title: "Clarity",
    timeline: "Days 1–30",
    desc: "Strip everything back. The numbers, the content, the structure, the gaps. Where is the money going? What's working? What's wasting? What's missing entirely? Within weeks you'll see your marketing in context for the first time.",
  },
  {
    num: "02",
    title: "Build",
    timeline: "Days 31–60",
    desc: "Put structure in place. Right strategy, right rhythm. Connect content, ads, and data to your business numbers. Set clear KPIs that tie to revenue, not vanity metrics. Build the reporting cadence so you always know where you stand.",
  },
  {
    num: "03",
    title: "Grow",
    timeline: "Days 61–90",
    desc: "Make it work. Run, refine, optimise until results are predictable and measurable. This is where the strategy proves itself or gets adjusted. We don't fall in love with our own plans. If the data says pivot, we pivot.",
  },
];

const included = [
  { title: "Full marketing audit", desc: "Where the money goes, what's working, what's wasting, what's missing. A clear set of priorities with numbers attached." },
  { title: "Strategic marketing plan", desc: "Channel strategy, budget allocation, messaging direction, campaign priorities. Built from your data, not a template." },
  { title: "Ongoing strategic oversight", desc: "Weekly or fortnightly sessions plus Slack and email access. The kind of access you'd give a team member, not a vendor." },
  { title: "Team and provider management", desc: "If you have existing providers, we direct them. If you don't, our team executes. Either way, someone's accountable." },
  { title: "Reporting that makes sense", desc: "Revenue. Margins. Customer acquisition cost. Not impressions. Not engagement. Numbers in context. Plain English." },
  { title: "30-day milestones", desc: "So you always know where you are, what's been done, and what's next. No ambiguity." },
];

const comparisons = [
  {
    num: "01",
    title: "vs. Full-Time CMO",
    text: "A full-time CMO in Perth costs $180K–$250K per year plus super, plus the six months it takes to recruit one. A fractional CMO delivers the same strategic output at a fraction of the cost. You want strategic clarity, not another person in the Monday meeting.",
  },
  {
    num: "02",
    title: "vs. Marketing Consultant",
    text: "A consultant analyses your situation and gives you recommendations. A fractional CMO does that and then stays to implement them. We don't hand over a PDF and wish you luck. We stay and make it work.",
  },
  {
    num: "03",
    title: "vs. Marketing Agency",
    text: "An agency executes tasks. A fractional CMO decides which tasks are worth executing. The best agencies are excellent at what they do. The problem is nobody's telling them what to do. With Mamba, you get the strategy and the execution under one roof.",
  },
  {
    num: "04",
    title: "vs. Doing It Yourself",
    text: "\"Fine\" has a ceiling, and you hit it when the complexity of your marketing outpaces the time you can give it. A fractional CMO buys back your time and applies genuine marketing expertise to decisions you've been making on instinct.",
  },
];

const relatedCaseStudies = [
  {
    title: "Fat Burners Only",
    tags: "Email Marketing, Paid Advertising",
    desc: "No flows. No automation. No strategy. Now it's a $3M+ channel we built from scratch.",
    image: fboImg,
    link: "https://mambadigital.au/work/fbo/",
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
];

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-primary-foreground/15">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left cursor-pointer group"
      >
        <h3 className="font-heading font-bold text-lg md:text-xl text-primary-foreground group-hover:text-accent transition-colors duration-200 pr-8">
          {q}
        </h3>
        <ChevronDown
          className={`w-5 h-5 text-primary-foreground/40 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <p className="body-lg text-primary-foreground/60 pb-6 pr-12">{a}</p>
        </div>
      </div>
    </div>
  );
};

const FractionalCMO = () => {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="section-dark min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-32">
          <div className="max-w-4xl">
            <p className="text-accent font-heading font-semibold text-xs tracking-[0.2em] uppercase mb-6 animate-fade-up">
              Fractional CMO Perth
            </p>
            <h1 className="headline-lg mb-8 md:mb-10 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Fractional CMO Perth.
            </h1>
            <p
              className="body-lg text-primary-foreground/70 max-w-2xl mb-10 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Strategic marketing leadership for businesses that have outgrown guesswork. With an execution team built in.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <a href="/contact" className="btn-primary">
                Book a Conversation
              </a>
              <a
                href="#problem"
                className="text-primary-foreground/60 hover:text-accent font-medium flex items-center gap-2 transition-colors duration-200 py-4"
              >
                See how it works
                <span className="text-xl leading-none">&#8595;</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section id="problem" className="section-light">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="font-heading font-bold tracking-tight leading-[1.1] text-[2rem] md:text-[2.5rem] lg:text-[3.6rem] mb-6">
              You don't have a marketing problem.<br />
              <span className="text-accent">You have a leadership problem.</span>
            </h2>
            <div className="space-y-4 mb-10">
              <p className="body-lg text-muted-foreground">
                You're spending on marketing. Ads are running. Content's posting. There are dashboards and reports and plenty of activity.
              </p>
              <p className="body-lg text-muted-foreground">
                Ask "what's actually working?" and watch the room go quiet.
              </p>
              <p className="body-lg text-muted-foreground">
                That's not an execution problem. It's a leadership gap. You've got people doing things. Nobody's deciding which things are worth doing. Nobody's connecting the spend to the revenue.
              </p>
              <p className="body-lg text-muted-foreground">
                A full-time marketing director would fix it. But at $200K a year plus super, that's a significant commitment for a business your size.
              </p>
            </div>
            <div className="py-8 border-t border-b border-border">
              <p
                className="font-heading font-bold tracking-tight leading-[1.15] text-accent"
                style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.5rem)" }}
              >
                That's what a fractional CMO fixes. Same thinking. Same leadership. Without the overhead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS A FRACTIONAL CMO */}
      <section className="section-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div>
              <h2 className="font-heading font-bold tracking-tight leading-[1.1] text-[2rem] md:text-[2.5rem] lg:text-[3.6rem] mb-6">What is a fractional CMO?</h2>
              <div className="space-y-4 body-lg text-primary-foreground/70">
                <p>
                  A fractional CMO is a senior marketing leader who works inside your business part-time. Same strategic thinking as a full-time Chief Marketing Officer: setting strategy, overseeing execution, interpreting data, managing teams and providers, and making sure every marketing dollar is accountable.
                </p>
                <p>
                  The "fractional" part means you get this leadership on a part-time basis. Typically one to two days per week. It's the same level of strategic oversight, applied with focus rather than diluted across a 40-hour week.
                </p>
                <p>
                  For businesses doing $2M to $20M in revenue, it's usually the smartest structural decision available. You get the thinking without the salary.
                </p>
              </div>
            </div>
            <div>
              <img
                src={fcmo1}
                alt="Marketing leadership in Perth"
                className="w-full aspect-[4/5] object-cover max-h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FRACTIONAL CMO VS ALTERNATIVES */}
      <section className="section-light">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20">
          <h2 className="font-heading font-bold tracking-tight leading-[1.1] text-[2rem] md:text-[2.5rem] lg:text-[3.6rem] mb-3 max-w-3xl">
            Fractional CMO vs. the alternatives.
          </h2>
          <p className="body-lg text-muted-foreground max-w-2xl mb-10">
            Every option has trade-offs. Here's how a fractional CMO compares.
          </p>
          <div className="space-y-0">
            {comparisons.map((c) => (
              <div
                key={c.num}
                className="flex flex-col md:flex-row gap-4 md:gap-8 py-6 md:py-8 border-t border-border last:border-b"
              >
                <span className="text-accent font-heading text-sm font-semibold w-10 shrink-0">
                  {c.num}
                </span>
                <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground md:w-[30%] shrink-0">
                  {c.title}
                </h3>
                <p className="body-lg text-muted-foreground flex-1">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MID-PAGE CTA BAND */}
      <section className="section-accent">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-heading font-bold text-2xl md:text-3xl text-accent-foreground">
            Ready to stop guessing?
          </p>
          <a href="/contact" className="btn-inverted">
            Book a Conversation
          </a>
        </div>
      </section>

      {/* HOW MAMBA IS DIFFERENT */}
      <section className="section-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div>
              <img src={fcmo6} alt="Strategy and delivery" className="w-full aspect-[4/5] object-cover max-h-[500px]" />
            </div>
            <div>
              <h2 className="font-heading font-bold tracking-tight leading-[1.1] text-[2rem] md:text-[2.5rem] lg:text-[3.6rem] mb-6">Strategy and delivery. One team.</h2>
              <div className="space-y-4 body-lg text-primary-foreground/70">
                <p>
                  Here's what usually happens. The fractional CMO builds a strategy. Hands it to an agency to execute. The agency interprets it their own way. Things get lost. Accountability blurs.
                </p>
                <p className="text-accent font-heading font-semibold" style={{ fontSize: "clamp(1.25rem, 2vw, 1.75rem)" }}>
                  We don't work like that.
                </p>
                <p>
                  The person setting the strategy is the same person overseeing the ads, the content, the email, and the data. No translation layer. No handoff document that nobody reads.
                </p>
                <p>
                  Most consultants give you a PDF and leave. Most agencies give you activity without strategy. We do both. And we answer for both.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-light">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-bold tracking-tight leading-[1.1] text-[2rem] md:text-[2.5rem] lg:text-[3.6rem] mb-3">How it works.</h2>
            <p className="body-lg text-muted-foreground">
              We don't start with campaigns. We start with clarity.
            </p>
          </div>
          {/* Mobile carousel */}
          <div className="md:hidden">
            <div className="overflow-x-auto scrollbar-hide -mx-6 px-6" style={{ scrollSnapType: "x mandatory" }}>
              <div className="flex gap-4" style={{ width: "max-content" }}>
                {phases.map((p) => (
                  <div
                    key={p.num}
                    className="bg-card border border-border p-6 shrink-0"
                    style={{ width: "calc(100vw - 48px - 32px)", scrollSnapAlign: "start" }}
                  >
                    <span className="text-accent font-heading text-sm font-semibold">{p.num}</span>
                    <h3 className="font-heading font-bold text-xl text-foreground mt-2">{p.title}</h3>
                    <p className="text-accent font-heading font-semibold text-sm mt-1">{p.timeline}</p>
                    <p className="body-lg text-muted-foreground mt-4">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Desktop rows */}
          <div className="hidden md:block space-y-0">
            {phases.map((p) => (
              <div
                key={p.num}
                className="flex flex-row gap-8 py-8 border-t border-border last:border-b"
              >
                <span className="text-accent font-heading text-sm font-semibold w-10 shrink-0">
                  {p.num}
                </span>
                <div className="w-[30%] shrink-0">
                  <h3 className="font-heading font-bold text-2xl text-foreground">
                    {p.title}
                  </h3>
                  <p className="text-accent font-heading font-semibold text-sm mt-1">
                    {p.timeline}
                  </p>
                </div>
                <p className="body-lg text-muted-foreground flex-1">{p.desc}</p>
              </div>
            ))}
          </div>
          {/* Featured pull-quote */}
          <div className="mt-10 text-center">
            <p className="font-heading font-bold tracking-tight leading-[1.2] text-foreground" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
              No frameworks with clever names.<br />
              No proprietary methodologies.<br />
              Just a logical sequence:<br />
              <span className="text-accent">understand it, fix it, build it, prove it.</span>
            </p>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="section-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20">
          <h2 className="font-heading font-bold tracking-tight leading-[1.1] text-[2rem] md:text-[2.5rem] lg:text-[3.6rem] mb-10">What's included.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
            {included.map((item, i) => (
              <div key={i} className="py-5 border-t border-primary-foreground/15">
                <h3 className="font-heading font-bold text-lg text-primary-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-primary-foreground/60 leading-relaxed text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR — restructured: text left with both sections, image right */}
      <section className="section-light">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-start">
            <div>
              <h2 className="font-heading font-bold tracking-tight leading-[1.1] text-[2rem] md:text-[2.5rem] lg:text-[3.6rem] mb-6">Who this is for.</h2>
              <div className="space-y-4">
                <p className="body-lg text-muted-foreground">
                  Business owners doing $2M to $20M who are spending on marketing but can't see where it's going. You've outgrown doing it yourself. You're not ready for a full-time hire. You're frustrated by providers who confuse activity with results.
                </p>
                <p className="body-lg text-muted-foreground italic">
                  If you've ever read a marketing report and felt dumber afterwards, you're probably in the right place.
                </p>
                <div className="mt-6">
                  <h3 className="font-heading font-bold text-lg text-foreground mb-3">
                    Industries we work with
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Childcare, tourism, hospitality, professional services, trades and construction, eCommerce, health and wellness, education. The industry matters less than the stage.
                  </p>
                </div>
                <div className="mt-6 border-t border-border pt-6">
                  <h3 className="font-heading font-bold text-lg text-foreground mb-3">
                    Who this isn't for
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Startups with no revenue. Businesses hunting for a quick hack. Anyone who wants a marketing person to "just run the socials." If you want hype, we're not the right fit.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img src={fcmo6} alt="Marketing leadership" className="w-full aspect-[4/5] object-cover max-h-[500px]" />
            </div>
          </div>
        </div>
      </section>

      {/* CONFUSION IS EXPENSIVE */}
      <section className="section-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="font-heading font-bold tracking-tight leading-[1.1] text-[2rem] md:text-[2.5rem] lg:text-[3.6rem] mb-6">Confusion is expensive.</h2>
            <div className="space-y-4 mb-10">
              <p className="body-lg text-primary-foreground/70">
                The platforms aren't working for you anymore. They're testing on you. Every algorithm shift, every "smart" feature, every AI update moves the goalposts while you foot the bill.
              </p>
              <p className="body-lg text-primary-foreground/70">
                Meanwhile, your competitors who have marketing leadership are making decisions with data while you're making them with gut feel. That's not a criticism. Gut feel got you this far. But it doesn't scale.
              </p>
              <p className="body-lg text-primary-foreground/70">
                The longer you stay unclear, the more assumptions harden into habits. Bad data doesn't just waste money. It shapes your next decisions.
              </p>
            </div>
            <div className="py-8 border-t border-b border-primary-foreground/15">
              <p
                className="font-heading font-bold tracking-tight leading-[1.15] text-accent"
                style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.5rem)" }}
              >
                There's no rush. But there is a cost. Later always costs more and delivers less.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MID-PAGE CTA BAND */}
      <section className="section-accent">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-heading font-bold text-2xl md:text-3xl text-accent-foreground">
            Thirty minutes. No pitch. Just clarity.
          </p>
          <a href="/contact" className="btn-inverted">
            Book a Conversation
          </a>
        </div>
      </section>

      {/* WHY TOBY */}
      <section className="section-light">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div>
              <img src={fcmo2} alt="Toby — Mamba Digital" className="w-full aspect-[4/5] object-cover max-h-[500px]" />
            </div>
            <div>
              <h2 className="font-heading font-bold tracking-tight leading-[1.1] text-[2rem] md:text-[2.5rem] lg:text-[3.6rem] mb-6">
                A CMO who reads your P&L before your brand guidelines.
              </h2>
              <div className="space-y-4 body-lg text-muted-foreground">
                <p>
                  Toby didn't start in marketing. He started in accounting, then property development. When his wife bought an eCommerce business, they spent $30,000 on agencies that promised growth but couldn't explain what they were actually doing.
                </p>
                <p>
                  It became obvious that most marketers were guessing. They didn't understand numbers or business context. So he learned it himself and discovered marketing isn't meant to be confusing. It's just been explained by the wrong people.
                </p>
                <p>
                  That accounting background isn't a quirky footnote. It's the foundation. Every marketing recommendation starts with the numbers. Revenue. Margins. Customer acquisition cost. If the maths doesn't work, we don't suggest it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED CASE STUDIES */}
      <section className="section-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 md:mb-14 gap-6">
            <h2 className="font-heading font-bold tracking-tight leading-[1.1] text-[2rem] md:text-[2.5rem] lg:text-[3.6rem]">Businesses we've led.</h2>
            <a href="/#work" className="btn-primary self-start md:self-auto">
              All Case Studies
            </a>
          </div>
          {/* Mobile/Tablet carousel */}
          <div className="lg:hidden">
            <div className="overflow-x-auto scrollbar-hide -mx-6 px-6" style={{ scrollSnapType: "x mandatory" }}>
              <div className="flex gap-4" style={{ width: "max-content" }}>
                {relatedCaseStudies.map((cs, i) => (
                  <a
                    key={i}
                    href={cs.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block aspect-[3/4] overflow-hidden shrink-0 w-[80vw] sm:w-[calc((100vw-48px-16px)/2.15)]"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <img
                      src={cs.image}
                      alt={cs.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col justify-end h-[55%]">
                      <p className="text-primary-foreground/50 text-xs font-heading font-semibold tracking-wider uppercase mb-2">
                        {cs.tags}
                      </p>
                      <h3 className={`font-heading font-bold text-accent mb-2 ${
                        cs.title.length > 20 ? "text-base" : "text-lg"
                      }`}>
                        {cs.title}
                      </h3>
                      <p className="text-primary-foreground/80 text-sm leading-relaxed line-clamp-2">
                        {cs.desc}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          {/* Desktop grid */}
          <div className="hidden lg:grid grid-cols-4 gap-5">
            {relatedCaseStudies.map((cs, i) => (
              <a
                key={i}
                href={cs.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[3/4] overflow-hidden"
              >
                <img
                  src={cs.image}
                  alt={cs.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 flex flex-col justify-end h-[55%]">
                  <p className="text-primary-foreground/50 text-xs font-heading font-semibold tracking-wider uppercase mb-2">
                    {cs.tags}
                  </p>
                  <h3 className={`font-heading font-bold text-accent mb-2 ${
                    cs.title.length > 20 ? "text-base md:text-lg" : "text-lg md:text-xl"
                  }`}>
                    {cs.title}
                  </h3>
                  <p className="text-primary-foreground/80 text-sm leading-relaxed line-clamp-2">
                    {cs.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PERTH & WA FOCUS */}
      <section className="section-light">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20">
          <div className="max-w-4xl">
            <h2 className="font-heading font-bold tracking-tight leading-[1.1] text-[2rem] md:text-[2.5rem] lg:text-[3.6rem] mb-6">
              Based in Perth. Built for WA businesses.
            </h2>
            <div className="space-y-4 body-lg text-muted-foreground">
              <p>
                Mamba is based in Subiaco, Perth, and works with businesses across Perth Metro and South West WA, including Busselton, Dunsborough, and Margaret River.
              </p>
              <p>
                Being local matters. Perth's market is different from Sydney or Melbourne: smaller talent pools, different competitive dynamics, a business culture that values directness over polish.
              </p>
              <p>
                We're not a national platform matching you with whoever's available. We're a team in the same city, with direct accountability and no timezone excuses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20">
          <h2 className="font-heading font-bold tracking-tight leading-[1.1] text-[2rem] md:text-[2.5rem] lg:text-[3.6rem] mb-10">Questions people usually ask.</h2>
          <div className="max-w-3xl">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-accent">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20 text-center">
          <h2 className="font-heading font-bold tracking-tight leading-[1.1] text-[2rem] md:text-[2.5rem] lg:text-[3.6rem] mb-6 text-accent-foreground">
            Book a conversation. No pitch.
          </h2>
          <p className="body-lg text-accent-foreground/80 max-w-2xl mx-auto mb-10">
            Thirty minutes. Your business, your numbers, your situation. If it makes sense, we'll map the work and start the clarity phase. If it doesn't, you'll still walk away with a clearer picture.
          </p>
          <a href="/contact" className="btn-inverted mb-6">
            Book a Conversation
          </a>
          <p className="text-accent-foreground/60 text-sm mt-6">
            Based in Subiaco, Perth. Working with businesses across Perth Metro and South West WA.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default FractionalCMO;
