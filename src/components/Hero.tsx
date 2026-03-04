import mambaLockupReverse from "@/assets/mamba-lockup-reverse.png";
import metaPartner from "@/assets/partners/meta-business-partner.png";
import klaviyoMaster from "@/assets/partners/klaviyo-master.png";
import shopifyPartners from "@/assets/partners/shopify-partners.png";
import googlePartner from "@/assets/partners/google-partner.svg";

const Hero = () => {
  return (
    <section className="section-dark min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32">
        <div className="max-w-4xl">
          <h1 className="headline-lg mb-8 md:mb-10 animate-fade-up">
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
          {/* Partner badges */}
          <div className="flex items-center gap-4 md:gap-6 mt-12 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <img src={metaPartner} alt="Meta Business Partner" className="h-10 md:h-12 w-auto" />
            <img src={klaviyoMaster} alt="Klaviyo Master Partner" className="h-8 md:h-10 w-auto" />
            <img src={shopifyPartners} alt="Shopify Partners" className="h-6 md:h-7 w-auto" />
            <a href="https://www.google.com/partners/agency?id=6852427839" target="_blank" rel="noopener noreferrer">
              <img src={googlePartner} alt="Google Partner" className="h-12 md:h-14 w-auto" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
