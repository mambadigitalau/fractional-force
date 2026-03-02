import backchat from "@/assets/logos/backchat.png";
import pistachioPapi from "@/assets/logos/pistachio-papi.png";
import katherineOutback from "@/assets/logos/katherine-outback.png";
import fbo from "@/assets/logos/fbo.png";
import nurture from "@/assets/logos/nurture.png";
import zipclimb from "@/assets/logos/zipclimb.png";
import wavesAu from "@/assets/logos/waves-au.png";
import mjb from "@/assets/logos/mjb.png";
import fboSupps from "@/assets/logos/fbo-supps.png";

const logos = [
  { src: backchat, alt: "BackChat" },
  { src: pistachioPapi, alt: "Pistachio Papi" },
  { src: katherineOutback, alt: "Katherine Outback Experience" },
  { src: fbo, alt: "Fat Burners Only" },
  { src: nurture, alt: "Nurture Early Learning" },
  { src: zipclimb, alt: "ZipClimb" },
  { src: wavesAu, alt: "Waves AU" },
  { src: mjb, alt: "MJB" },
  { src: fboSupps, alt: "FBO Supplements" },
];

const LogoScroller = () => {
  return (
    <section className="bg-white py-12 md:py-16 overflow-hidden">
      <p className="text-center text-muted-foreground text-xs font-heading font-semibold tracking-[0.2em] uppercase mb-8">
        Trusted by leading companies
      </p>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex animate-logo-scroll">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center mx-8 md:mx-12"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-10 md:h-14 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoScroller;
