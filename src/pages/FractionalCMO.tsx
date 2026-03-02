import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import fcmo1 from "@/assets/services/fcmo-1.jpg";
import fcmo2 from "@/assets/services/fcmo-2.jpg";
import fcmo3 from "@/assets/services/fcmo-3.png";
import fcmo4 from "@/assets/services/fcmo-4.png";
import fcmo5 from "@/assets/services/fcmo-5.png";
import fcmo6 from "@/assets/services/fcmo-6.png";
import { useState } from "react";
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
    desc: "Strip everything back. The numbers, the content, the structure, the gaps. Where is the money going? What's working? What's wasting? What's missing entirely? Within weeks you'll see your marketing in context for the first time. Most clients tell us this phase alone is worth the engagement.",
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
    desc: "Make it work. Run, refine, optimise until results are predictable and measurable. This is where the strategy proves itself or gets adjusted. We don't fall in love with our own plans. If the data says pivot, we pivot. The goal isn't dependency. It's independence with confidence.",
  },
];

const included = [
  { title: "Full marketing audit", desc: "Where the money goes, what's working, what's wasting, what's missing. Not a 60-page deck. A clear set of priorities with numbers attached." },
  { title: "Strategic marketing plan", desc: "Channel strategy, budget allocation, messaging direction, campaign priorities. Built from your data and your business model, not a template." },
  { title: "Ongoing strategic oversight", desc: "Weekly or fortnightly sessions plus Slack and email access between meetings. The kind of access you'd give a team member, not a vendor." },
  { title: "Team and provider management", desc: "If you have existing providers, we direct them. If you don't, our team executes. Either way, someone's accountable for the output." },
  { title: "Reporting that makes sense", desc: "Connected to business outcomes. Revenue. Margins. Customer acquisition cost. Not impressions. Not engagement. Numbers in context. Plain English." },
  { title: "30-day milestones", desc: "So you always know where you are, what's been done, and what's next. No ambiguity. No waiting until the end of a quarter to find out if things are working." },
];

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left cursor-pointer group"
      >
        <h3 className="font-heading font-bold text-lg md:text-xl text-foreground group-hover:text-accent transition-colors duration-200 pr-8">
          {q}
        </h3>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <p className="body-lg text-muted-foreground pb-6 pr-12">{a}</p>
      )}
    </div>
  );
};

const FractionalCMO = () => {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="section-dark min-h-[80vh] flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <p className="text-accent font-heading font-semibold text-sm tracking-[0.15em] uppercase mb-6 animate-fade-up">
                Services
              </p>
              <h1 className="headline-lg mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                Fractional CMO Perth.
              </h1>
              <p
                className="body-lg text-primary-foreground/70 max-w-xl mb-10 animate-fade-up"
                style={{ animationDelay: "0.2s" }}
              >
                Strategic marketing leadership for businesses that have outgrown guesswork. With an execution team built in.
              </p>
              <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <a href="/contact" className="btn-primary">
                  Book a Conversation
                </a>
              </div>
            </div>
            <div className="relative animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <img
                src={fcmo1}
                alt="Marketing leadership Perth"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="section-light">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <h2 className="headline mb-8">
                You don't have a marketing problem. You have a leadership problem.
              </h2>
              <div className="space-y-5">
                <p className="body-lg text-muted-foreground">
                  You're spending on marketing. Ads are running. Content's posting. There are dashboards and reports and plenty of activity.
                </p>
                <p className="body-lg text-muted-foreground">
                  Ask "what's actually working?" and watch the room go quiet.
                </p>
                <p className="body-lg text-muted-foreground">
                  That's not an execution problem. It's a leadership gap. You've got people doing things. Nobody's deciding which things are worth doing. Nobody's connecting the spend to the revenue. Nobody's looking at the whole picture and making a call.
                </p>
                <p className="body-lg text-muted-foreground">
                  A full-time marketing director would fix it. But at $200K a year plus super, that's a significant commitment for a business your size.
                </p>
                <p className="body-lg text-accent font-heading font-semibold text-xl">
                  That's what a fractional CMO fixes. Same thinking. Same leadership. Without the overhead.
                </p>
              </div>
            </div>
            <div>
              <img
                src={fcmo2}
                alt="Fractional CMO services Perth"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS A FRACTIONAL CMO */}
      <section className="section-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="headline mb-10">What is a fractional CMO?</h2>
            <div className="space-y-6">
              <p className="body-lg text-primary-foreground/70">
                A fractional CMO is a senior marketing leader who works inside your business part-time. Same strategic thinking as a full-time Chief Marketing Officer: setting strategy, overseeing execution, interpreting data, managing teams and providers, and making sure every marketing dollar is accountable.
              </p>
              <p className="body-lg text-primary-foreground/70">
                The "fractional" part means you get this leadership on a part-time basis. Typically one to two days per week, depending on the complexity of your business. It's the same level of strategic oversight, applied with focus rather than diluted across a 40-hour week.
              </p>
              <p className="body-lg text-primary-foreground/70">
                For businesses doing $2M to $20M in revenue, it's usually the smartest structural decision available. You get the thinking without the salary. And because the role is focused on strategy and oversight rather than day-to-day execution, a fractional CMO often delivers more clarity in less time than a full-time hire who gets pulled into operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FULL-WIDTH IMAGE BREAK */}
      <div className="w-full h-[40vh] md:h-[50vh] overflow-hidden">
        <img
          src={fcmo3}
          alt="Fractional CMO strategy Perth"
          className="w-full h-full object-cover"
        />
      </div>

      {/* FRACTIONAL CMO VS ALTERNATIVES */}
      <section className="section-light">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20">
          <h2 className="headline mb-14 max-w-3xl">
            Fractional CMO vs. the alternatives.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
            {[
              {
                title: "Fractional CMO vs. full-time CMO",
                text: "A full-time CMO in Perth costs $180K–$250K per year plus superannuation, plus the six months it takes to recruit one. A fractional CMO delivers the same strategic output at a fraction of the cost. The trade-off is time. But for most businesses under $20M, that's not a trade-off. It's an advantage. You want strategic clarity, not another person in the Monday meeting.",
              },
              {
                title: "Fractional CMO vs. marketing consultant",
                text: "A consultant analyses your situation and gives you recommendations. A fractional CMO does that and then stays to implement them. Most consulting engagements produce a document. Most of those documents end up in a shared drive, untouched. We don't hand over a PDF and wish you luck. We stay and make it work.",
              },
              {
                title: "Fractional CMO vs. marketing agency",
                text: "An agency executes tasks: runs ads, posts content, sends emails. A fractional CMO decides which tasks are worth executing in the first place. The best agencies are excellent at what they do. The problem is nobody's telling them what to do. That's the leadership gap a fractional CMO fills. With Mamba, you get the strategy and the execution under one roof.",
              },
              {
                title: "Fractional CMO vs. doing it yourself",
                text: "You've been the de facto marketing director. You've been making the calls, briefing the freelancers, approving the posts, trying to make sense of the data. It's probably been fine. But \"fine\" has a ceiling, and you hit it when the complexity of your marketing outpaces the time you can give it. A fractional CMO buys back your time and applies genuine marketing expertise to decisions you've been making on instinct.",
              },
            ].map((item, i) => (
              <div key={i} className="border-t border-border pt-6">
                <h3 className="font-heading font-bold text-xl md:text-2xl mb-4 text-foreground">
                  {item.title}
                </h3>
                <p className="body-lg text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW MAMBA IS DIFFERENT */}
      <section className="section-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <img
                src={fcmo4}
                alt="Marketing results showcase"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            <div>
              <h2 className="headline mb-8">Strategy and delivery. One team.</h2>
              <div className="space-y-5">
                <p className="body-lg text-primary-foreground/70">
                  Here's what usually happens. The fractional CMO builds a strategy. Hands it to an agency to execute. The agency interprets it their own way. Things get lost. Accountability blurs. You're paying two parties and managing the gap between them.
                </p>
                <p className="body-lg text-primary-foreground/70 font-heading font-semibold text-xl text-accent">
                  We don't work like that.
                </p>
                <p className="body-lg text-primary-foreground/70">
                  The person setting the strategy is the same person overseeing the ads, the content, the email, and the data. No translation layer. No handoff document that nobody reads.
                </p>
                <p className="body-lg text-primary-foreground/70">
                  Most consultants give you a PDF and leave. Most agencies give you activity without strategy. We do both. And we answer for both.
                </p>
                <p className="body-lg text-primary-foreground/70">
                  If that sounds like it should be obvious, you're right. We didn't invent anything clever here. We just noticed that everyone else was doing it in two halves, so we did it in one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-light">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20">
          <div className="max-w-3xl mb-14">
            <h2 className="headline mb-4">How it works.</h2>
            <p className="body-lg text-muted-foreground">
              We don't start with campaigns. We start with clarity.
            </p>
          </div>
          <div className="space-y-0">
            {phases.map((p) => (
              <div
                key={p.num}
                className="flex flex-col md:flex-row gap-4 md:gap-8 py-8 border-t border-border last:border-b"
              >
                <span className="text-accent font-heading text-sm font-semibold w-10 shrink-0">
                  {p.num}
                </span>
                <div className="md:w-[30%] shrink-0">
                  <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground">
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
          <p className="body-lg text-muted-foreground mt-10 max-w-3xl">
            No frameworks with clever names. No proprietary methodologies. Just a logical sequence: understand it, fix it, build it, prove it.
          </p>
        </div>
      </section>

      {/* FULL-WIDTH IMAGE BREAK */}
      <div className="w-full h-[40vh] md:h-[50vh] overflow-hidden">
        <img
          src={fcmo5}
          alt="Fractional CMO Perth results"
          className="w-full h-full object-cover"
        />
      </div>

      {/* WHAT'S INCLUDED */}
      <section className="section-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20">
          <h2 className="headline mb-14">What's included.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {included.map((item, i) => (
              <div key={i} className="border-t border-primary-foreground/15 pt-6">
                <h3 className="font-heading font-bold text-lg text-primary-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-primary-foreground/60 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="section-light">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div>
              <h2 className="headline mb-8">Who this is for.</h2>
              <div className="space-y-5">
                <p className="body-lg text-muted-foreground">
                  Business owners doing $2M to $20M who are spending on marketing but can't see where it's going. You've outgrown doing it yourself. You're not ready for a full-time hire. You're frustrated by providers who confuse activity with results.
                </p>
                <p className="body-lg text-muted-foreground italic">
                  If you've ever read a marketing report and felt dumber afterwards, you're probably in the right place.
                </p>
                <div className="mt-8">
                  <h3 className="font-heading font-bold text-lg text-foreground mb-3">
                    Industries we work with
                  </h3>
                  <p className="body-lg text-muted-foreground">
                    Childcare, tourism, hospitality, professional services, trades and construction, eCommerce, health and wellness, education. The industry matters less than the stage. We work best with businesses that have product-market fit and enough revenue to invest in marketing properly.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img
                src={fcmo6}
                alt="Fractional CMO marketing results"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="mt-8 border-t border-border pt-6">
                <h3 className="font-heading font-bold text-lg text-foreground mb-3">
                  Who this isn't for
                </h3>
                <p className="body-lg text-muted-foreground">
                  Startups with no revenue. Businesses hunting for a quick hack. Anyone who wants a marketing person to "just run the socials." If you want hype, we're not the right fit. If you want clarity, read on.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONFUSION IS EXPENSIVE */}
      <section className="section-accent">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="headline mb-10 text-accent-foreground">Confusion is expensive.</h2>
            <div className="space-y-6">
              <p className="body-lg text-accent-foreground/80">
                The platforms aren't working for you anymore. They're testing on you. Every algorithm shift, every "smart" feature, every AI update moves the goalposts while you foot the bill.
              </p>
              <p className="body-lg text-accent-foreground/80">
                Meanwhile, your competitors who have marketing leadership are making decisions with data while you're making them with gut feel. That's not a criticism. Gut feel got you this far. But it doesn't scale past a certain point, and the gap between businesses with strategic marketing oversight and businesses without it only gets wider.
              </p>
              <p className="body-lg text-accent-foreground/80">
                The longer you stay unclear, the more assumptions harden into habits. Bad data doesn't just waste money. It shapes your next decisions. Every month without clarity costs more than the month before.
              </p>
            </div>
            <p className="pull-quote text-accent-foreground mt-12">
              There's no rush. But there is a cost. Later always costs more and delivers less.
            </p>
          </div>
        </div>
      </section>

      {/* WHY TOBY */}
      <section className="section-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20">
          <div className="max-w-4xl">
            <h2 className="headline mb-10">
              A CMO who reads your P&L before your brand guidelines.
            </h2>
            <div className="space-y-5 body-lg text-primary-foreground/70">
              <p>
                Toby didn't start in marketing. He started in accounting, then property development. When his wife bought an eCommerce business, they spent $30,000 on agencies that promised growth but couldn't explain what they were actually doing. Plenty of reports. No clarity.
              </p>
              <p>
                It became obvious that most marketers were guessing. They didn't understand numbers or business context. So he learned it himself and discovered marketing isn't meant to be confusing. It's just been explained by the wrong people.
              </p>
              <p>
                That accounting background isn't a quirky footnote. It's the foundation. It means every marketing recommendation starts with the numbers. Revenue. Margins. Customer acquisition cost. Lifetime value. If the maths doesn't work, we don't suggest it. If it does, we can prove it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PERTH & WA FOCUS */}
      <section className="section-light">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20">
          <div className="max-w-4xl">
            <h2 className="headline mb-10">
              Based in Perth. Built for WA businesses.
            </h2>
            <div className="space-y-5 body-lg text-muted-foreground">
              <p>
                Mamba is based in Subiaco, Perth, and works with businesses across Perth Metro and South West WA, including Busselton, Dunsborough, and Margaret River.
              </p>
              <p>
                Being local matters. Perth's market is different from Sydney or Melbourne: smaller talent pools, different competitive dynamics, a business culture that values directness over polish. We understand the local landscape because we operate in it.
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
          <h2 className="headline mb-14">Questions people usually ask.</h2>
          <div className="max-w-3xl">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-accent">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="headline mb-8 text-accent-foreground">
              Book a conversation. No pitch.
            </h2>
            <p className="body-lg text-accent-foreground/80 mb-10">
              Thirty minutes. Your business, your numbers, your situation. If it makes sense, we'll map the work and start the clarity phase. If it doesn't, you'll still walk away with a clearer picture.
            </p>
            <a href="/contact" className="btn-inverted">
              Book a Conversation
            </a>
            <p className="text-accent-foreground/50 text-sm mt-6 font-heading">
              Based in Subiaco, Perth. Working with businesses across Perth Metro and South West WA.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default FractionalCMO;
