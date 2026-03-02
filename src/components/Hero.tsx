import mambaLockupReverse from "@/assets/mamba-lockup-reverse.png";

const Hero = () => {
  return (
    <section className="section-dark min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32">
        <div className="max-w-4xl">
          <img
            src={mambaLockupReverse}
            alt="Mamba Digital"
            className="h-10 md:h-14 w-auto mb-10 md:mb-14 animate-fade-up"
          />
          <h1 className="headline-lg mb-8 md:mb-10 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            You're not bad at marketing.{" "}
            <span className="text-accent">You just don't have anyone good at it.</span>
          </h1>
          <p className="body-lg text-primary-foreground/70 max-w-2xl mb-12 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Mamba Digital. Strategic marketing leadership and a full execution team. One consultancy. No handoffs.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <a href="/contact" className="btn-primary">
              Book a Conversation
            </a>
            <a
              href="#problem"
              className="text-primary-foreground/60 hover:text-accent font-medium flex items-center gap-2 transition-colors duration-200 py-4"
            >
              See how we work
              <span className="text-xl leading-none">&#8595;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
