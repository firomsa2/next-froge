import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TechStack from "@/components/sections/TechStack";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import HowWeWork from "@/components/sections/HowWeWork";
import Portfolio from "@/components/sections/Portfolio";
import Industries from "@/components/sections/Industries";
import WhyUs from "@/components/sections/WhyUs";
import Team from "@/components/sections/Team";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="bg-base text-ink">
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Services />
        <About />
        <HowWeWork />
        <Portfolio />
        <Industries />
        <WhyUs />
        <Team />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
