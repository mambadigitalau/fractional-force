import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import mambamark from "@/assets/mamba-mark.png";

const team = [
  {
    name: "Toby Lloyd",
    role: "Founder & Fractional CMO",
    bio: "Accounting background. Property development. Mining. Learned marketing by spending $30K on it badly, then learning to do it properly. Reads P&Ls before brand guidelines. Runs strategy and leads every client engagement. Still occasionally surprised that people pay him for marketing advice, given where he started.",
  },
  {
    name: "Kira",
    role: "Creative Lead",
    bio: "Creative direction, brand strategy, content production. Makes things look like they were made by people who give a shit.",
  },
  {
    name: "Giulia",
    role: "Execution",
    bio: "Paid media, email marketing, campaign management. Turns strategy into results without needing to be told twice.",
  },
];

const About = () => {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="section-dark min-h-[70vh] flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32">
          <div className="max-w-4xl">
            <p className="text-accent font-heading font-semibold text-xs tracking-[0.2em] uppercase mb-6 animate-fade-up">
              About Mamba
            </p>
            <h1
              className="headline-lg mb-8 md:mb-10 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              We spent $30,000 on agencies. Got plenty of reports.{" "}
              <span className="text-accent">No answers.</span>
            </h1>
            <p
              className="body-lg text-primary-foreground/70 max-w-2xl animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              That's why Mamba exists.
            </p>
          </div>
        </div>
      </section>

      {/* THE STORY — two-column editorial with pull-quote break */}
      <section className="section-light">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-20">
            <div>
              <h2 className="headline text-3xl md:text-4xl">The story.</h2>
            </div>
            <div className="space-y-5 body-lg text-muted-foreground">
              <p>
                I didn't start in marketing. I started in accounting, then
                property development, then mining. Numbers, context, and
                commercial logic have always come first.
              </p>
              <p>
                When my wife bought an eCommerce business, we did what everyone
                does. Hired agencies. Three of them, over two years. Spent
                $30,000. Got dashboards, monthly reports, plenty of activity.
                What we didn't get was a straight answer to a simple question: is
                any of this actually working?
              </p>
              <p>
                Nobody could connect what they were doing to our revenue. Nobody
                could explain where the money went or what came back. It wasn't
                that they were bad at marketing. They just didn't understand
                business.
              </p>
              <p>
                So I learned it myself. Turns out marketing isn't meant to be
                confusing. It's just been explained by the wrong people.
              </p>
              <p>
                Mamba exists because business owners deserve someone who reads
                their P&L before their brand guidelines. Who connects strategy to
                revenue, not impressions. Who stays and makes it work instead of
                handing over a PDF and wishing you luck.
              </p>
              <p>
                That's not a bold vision statement. It's just common sense.
                Apparently that's rare enough to build a business around.
              </p>
              <p>
                We're not trying to disrupt marketing. We're trying to do it in a
                way that makes sense to the people paying for it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PULL QUOTE — accent band */}
      <section className="section-accent">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <p
              className="font-heading font-bold tracking-tight leading-[1.15] text-accent-foreground"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
            >
              Marketing isn't meant to be confusing. It's just been explained by
              the wrong people.
            </p>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="section-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-20">
            <div className="flex items-start gap-4">
              <img
                src={mambamark}
                alt=""
                aria-hidden="true"
                className="h-10 md:h-14 w-auto opacity-20"
              />
              <h2 className="headline text-3xl md:text-4xl">How we work.</h2>
            </div>
            <div>
              <div className="space-y-5 body-lg text-primary-foreground/70 mb-12">
                <p>
                  The problem with most marketing help is the gap. A consultant
                  builds a strategy, hands it to an agency, the agency interprets
                  it their way, things get lost, accountability blurs, and you're
                  managing the space between two providers who don't talk to each
                  other.
                </p>
                <p>
                  We don't work like that. The person setting the strategy is the
                  same person overseeing the ads, the content, the email, and the
                  data. No translation layer. No handoff. No gap between what was
                  planned and what gets delivered.
                </p>
              </div>
              <div className="py-8 border-t border-b border-primary-foreground/15">
                <p
                  className="font-heading font-bold tracking-tight leading-[1.15] text-accent"
                  style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.25rem)" }}
                >
                  It's not complicated. It's just rare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE TEAM */}
      <section className="section-light">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <h2 className="headline mb-4">Small team. No fat.</h2>
          <p className="body-lg text-muted-foreground mb-14 max-w-2xl">
            No layers. No account managers. No person whose job is to relay your
            message to the person who actually does the work.
          </p>
          <div className="space-y-0">
            {team.map((t, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row gap-4 md:gap-8 py-8 border-t border-border last:border-b"
              >
                <span className="text-accent font-heading text-sm font-semibold w-10 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="md:w-[30%] shrink-0">
                  <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground">
                    {t.name}
                  </h3>
                  <p className="text-accent font-heading font-semibold text-sm mt-1">
                    {t.role}
                  </p>
                </div>
                <p className="body-lg text-muted-foreground flex-1">{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BASED IN PERTH */}
      <section className="section-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-20">
            <h2 className="headline text-3xl md:text-4xl">Based in Perth.</h2>
            <div>
              <p
                className="font-heading font-bold tracking-tight leading-[1.15] text-primary-foreground mb-10"
                style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.25rem)" }}
              >
                Subiaco, Perth. Not a Zoom screen in another timezone.
              </p>
              <div className="space-y-5 body-lg text-primary-foreground/70">
                <p>
                  We work with businesses across Perth Metro and South West WA.
                  Busselton, Dunsborough, Margaret River. Local market, local
                  relationships, local accountability.
                </p>
                <p>
                  We're not a platform that matches you with a contractor
                  interstate. We're a team. In the same city. Available when you
                  need us.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 mt-12 pt-8 border-t border-primary-foreground/15">
                <div>
                  <p className="text-accent font-heading font-semibold text-xs tracking-[0.2em] uppercase mb-2">
                    Address
                  </p>
                  <p className="text-primary-foreground font-heading font-bold">
                    203 Hay Street, Subiaco WA 6008
                  </p>
                </div>
                <div>
                  <p className="text-accent font-heading font-semibold text-xs tracking-[0.2em] uppercase mb-2">
                    Email
                  </p>
                  <a
                    href="mailto:hello@mambadigital.au"
                    className="text-primary-foreground font-heading font-bold hover:text-accent transition-colors"
                  >
                    hello@mambadigital.au
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </>
  );
};

export default About;
