import mambaMark from "@/assets/mamba-mark.png";

const WhoWeWorkWith = () => {
  return (
    <section className="section-dark relative overflow-hidden">
      {/* Left brand mark */}
      <img
        src={mambaMark}
        alt=""
        aria-hidden="true"
        className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 md:w-80 opacity-[0.06] pointer-events-none select-none"
      />
      {/* Right brand mark */}
      <img
        src={mambaMark}
        alt=""
        aria-hidden="true"
        className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 md:w-80 opacity-[0.06] pointer-events-none select-none -scale-x-100"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="headline mb-10">
            Built for businesses growing faster than their marketing.
          </h2>
          <div className="body-lg text-primary-foreground/70 space-y-6 mb-14">
            <p>
              Businesses doing $2M to $20M. Past the startup phase. Spending money on marketing but not sure it's the right money on the right things.
            </p>
            <p>
              Childcare. Tourism. Hospitality. Professional services. Trades. eCommerce. The industry matters less than the stage. If you're growing fast enough that winging it is starting to cost you, we should talk.
            </p>
          </div>
          <p className="pull-quote text-accent">
            Later always costs more and delivers less.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;
