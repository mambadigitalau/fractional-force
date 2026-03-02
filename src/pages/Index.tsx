import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoScroller from "@/components/LogoScroller";
import Problem from "@/components/Problem";
import Pillars from "@/components/Pillars";
import Services from "@/components/Services";
import Proof from "@/components/Proof";
import Insights from "@/components/Insights";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoScroller />
      <Services />
      <Proof />
      <Problem />
      <Pillars />
      <Insights />
      <WhoWeWorkWith />
      <FinalCTA />
      <Footer />
    </>
  );
};

export default Index;
