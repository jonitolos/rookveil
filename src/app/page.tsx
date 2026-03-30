import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Process from "@/components/Process";
import CaseStudy from "@/components/CaseStudy";
import Work from "@/components/Work";
import About from "@/components/About";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <Services />
      <TechStack />
      <Process />
      <CaseStudy />
      <Work />
      <About />
      <CtaBanner />
      <Contact />
      <Footer />
    </>
  );
}
