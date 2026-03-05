import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />

      <section className="section-dark min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* LEFT — Copy */}
            <div className="max-w-lg">
              <p className="text-accent font-heading font-semibold text-xs tracking-[0.2em] uppercase mb-6 animate-fade-up">
                Contact
              </p>
              <h1
                className="headline-lg mb-8 animate-fade-up"
                style={{ animationDelay: "0.1s" }}
              >
                Let's talk.
              </h1>
              <p
                className="body-lg text-primary-foreground/70 mb-16 animate-fade-up"
                style={{ animationDelay: "0.2s" }}
              >
                Thirty minutes. Your business, your numbers, your situation. No
                pitch. No pressure. If we can help, we'll tell you how. If we
                can't, we'll say that too.
              </p>

              <div
                className="space-y-8 animate-fade-up"
                style={{ animationDelay: "0.3s" }}
              >
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

            {/* RIGHT — Form */}
            <div
              className="animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="border border-primary-foreground/10 p-8 md:p-10">
                <p className="font-heading font-bold text-primary-foreground text-xl mb-8">
                  Send us a message
                </p>
                <form
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-primary-foreground/50 font-heading text-xs uppercase tracking-wider block mb-3">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full bg-transparent border-b border-primary-foreground/20 text-primary-foreground py-3 font-heading focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-primary-foreground/50 font-heading text-xs uppercase tracking-wider block mb-3">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full bg-transparent border-b border-primary-foreground/20 text-primary-foreground py-3 font-heading focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-primary-foreground/50 font-heading text-xs uppercase tracking-wider block mb-3">
                        Business name
                      </label>
                      <input
                        type="text"
                        className="w-full bg-transparent border-b border-primary-foreground/20 text-primary-foreground py-3 font-heading focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-primary-foreground/50 font-heading text-xs uppercase tracking-wider block mb-3">
                        Approximate annual revenue
                      </label>
                      <input
                        type="text"
                        className="w-full bg-transparent border-b border-primary-foreground/20 text-primary-foreground py-3 font-heading focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-primary-foreground/50 font-heading text-xs uppercase tracking-wider block mb-3">
                      What do you need help with?
                    </label>
                    <textarea
                      rows={4}
                      className="w-full bg-transparent border-b border-primary-foreground/20 text-primary-foreground py-3 font-heading focus:outline-none focus:border-accent transition-colors resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-primary mt-4 w-full sm:w-auto">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
