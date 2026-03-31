"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Process from "@/components/Process";
import CaseStudy from "@/components/CaseStudy";
import About from "@/components/About";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import { useI18n } from "@/lib/i18n";

export default function Home() {
  const { t } = useI18n();

  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <Services />
      <TechStack />
      <Process />
      <CaseStudy
        id="case-study"
        url="https://adn.lt"
        image="/work/arx-auto.png"
        techStack={["Next.js", "React", "Supabase", "TypeScript", "Tailwind CSS", "OpenAI", "Vercel"]}
        data={t.caseAdn}
      />
      <CaseStudy
        id="case-study-sintorio"
        url="https://www.sintorio.com/"
        image="/work/sintorio.png"
        techStack={["Next.js", "React", "Python", "FFmpeg", "OpenAI", "PyTorch", "Supabase", "NVIDIA CUDA", "Tailwind CSS"]}
        data={t.caseSintorio}
      />
      <About />
      <CtaBanner />
      <Contact />
      <Footer />
    </>
  );
}
