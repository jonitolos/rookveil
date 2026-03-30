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

export default function Home() {
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
        label="Case study"
        title="Arx Auto —"
        titleAccent="car marketplace"
        subtitle="A platform I designed, built, and operate. Here's how and why."
        url="https://arx-auto.vercel.app/"
        image="/work/arx-auto.svg"
        problem="Lithuania's car market is dominated by outdated platforms with poor UX, slow load times, and zero mobile optimization. I wanted to prove a modern stack could do it better — faster search, cleaner interface, real-time listings."
        techDecisions={[
          "Next.js with App Router for SSR and SEO out of the box",
          "Supabase for real-time database, auth, and storage",
          "Tailwind CSS for rapid, consistent UI development",
          "TypeScript end-to-end for reliability",
          "Deployed on Vercel edge network for sub-200ms TTFB",
        ]}
        result="A fully functional car marketplace with advanced filtering, dealer dashboards, and mobile-first design. Lighthouse performance score consistently above 95."
        techStack={[
          "Next.js",
          "React",
          "Supabase",
          "TypeScript",
          "Tailwind CSS",
          "Vercel",
        ]}
      />
      <CaseStudy
        id="case-study-sintorio"
        label="Case study"
        title="Sintorio —"
        titleAccent="AI video processing"
        subtitle="An AI-powered platform I built and operate. From raw footage to viral shorts, fully automated."
        url="https://www.sintorio.com/"
        image="/work/sintorio.svg"
        problem="Content creators spend hours manually clipping, editing, and syncing video highlights. The process is repetitive, time-consuming, and doesn't scale. A 1-hour video can take 40+ minutes to process on cloud-based tools — and the results still need manual tweaking."
        techDecisions={[
          "Next.js frontend with React for a clean editing interface",
          "Python backend with FFmpeg, Whisper, and Demucs for audio separation and transcription",
          "GPT and Gemini vision models for intelligent scene selection",
          "Custom beat detection engine that syncs cuts to music automatically",
          "Dedicated RTX 50-Series GPU infrastructure in Lithuania — no cloud middlemen",
          "Supabase for auth, database, and real-time processing status",
          "Automated YouTube publishing pipeline from render to post",
        ]}
        result="A platform that generates beat-synced video clips across multiple style profiles (AURA, PULSE, HOOK, CINEMATIC) — fully automated from import to publish. Processes a 1-hour video in under 2 minutes on dedicated hardware. Includes HypeMeter viral scoring, Vident trend intelligence, and auto-publishing to TikTok, YouTube, and Instagram."
        techStack={[
          "Next.js",
          "React",
          "Python",
          "FFmpeg",
          "OpenAI",
          "PyTorch",
          "Supabase",
          "NVIDIA CUDA",
          "Tailwind CSS",
        ]}
      />
      <About />
      <CtaBanner />
      <Contact />
      <Footer />
    </>
  );
}
