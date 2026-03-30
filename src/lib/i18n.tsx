"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type Locale = "pl" | "en";

const translations = {
  // --- Navbar ---
  nav: {
    services: { pl: "Usługi", en: "Services" },
    work: { pl: "Realizacje", en: "Work" },
    about: { pl: "O mnie", en: "About" },
    contact: { pl: "Kontakt", en: "Contact" },
    getInTouch: { pl: "Napisz do mnie", en: "Get in touch" },
  },

  // --- Hero ---
  hero: {
    headline1: { pl: "Tworzę strony internetowe", en: "I build websites" },
    headline2: { pl: "które przynoszą rezultaty", en: "that drive results" },
    subtitle: {
      pl: "12 lat w transporcie i logistyce, teraz buduję dedykowane strony internetowe dla firm, które potrzebują czegoś więcej niż szablon. Wilno, Litwa.",
      en: "12 years in transport & logistics, now building custom websites for businesses that need more than a template. Based in Vilnius, Lithuania.",
    },
    cta1: { pl: "Rozpocznij projekt", en: "Start a project" },
    cta2: { pl: "Zobacz moje realizacje", en: "See my work" },
  },

  // --- Services ---
  services: {
    label: { pl: "Co otrzymujesz", en: "What you get" },
    title1: { pl: "Każda strona, którą buduję", en: "Every website I build" },
    titleAccent: { pl: "zawiera", en: "includes" },
    subtitle: {
      pl: "Jedna usługa, wykonana dobrze. W pełni dedykowana strona internetowa — bez skrótów, bez kompromisów.",
      en: "One service, done right. A fully custom website — no shortcuts, no compromises.",
    },
    items: [
      {
        title: { pl: "Budowana od zera", en: "Built from scratch" },
        description: {
          pl: "Żadnego WordPressa, Wixa ani szablonów. Każda linia kodu napisana specjalnie dla Twojej firmy w Next.js i React.",
          en: "No WordPress, no Wix, no templates. Every line of code is written specifically for your business using Next.js and React.",
        },
      },
      {
        title: { pl: "Zaprojektowana by konwertować", en: "Designed to convert" },
        description: {
          pl: "Czysty, nowoczesny design, który prowadzi odwiedzających do działania. Każdy element ma swój cel — nic nie jest dekoracją.",
          en: "Clean, modern design that guides visitors toward action. Every element has a purpose — nothing is decoration.",
        },
      },
      {
        title: { pl: "Responsywna na każdym urządzeniu", en: "Responsive on every device" },
        description: {
          pl: "Podejście mobile-first gwarantuje, że Twoja strona wygląda i działa doskonale na telefonach, tabletach i komputerach.",
          en: "Mobile-first development ensures your site looks and works flawlessly on phones, tablets, and desktops.",
        },
      },
      {
        title: { pl: "Błyskawicznie szybka", en: "Blazing fast" },
        description: {
          pl: "Ładowanie poniżej sekundy dzięki renderowaniu po stronie serwera, zoptymalizowanym obrazom i edge deployment. Szybkość nie jest opcjonalna.",
          en: "Sub-second load times with server-side rendering, optimized images, and edge deployment. Speed is not optional.",
        },
      },
      {
        title: { pl: "Gotowa na SEO od pierwszego dnia", en: "SEO-ready from day one" },
        description: {
          pl: "Semantyczny HTML, dane strukturalne, meta tagi i Core Web Vitals dostrojone, aby Google znalazł i pozycjonował Twoją stronę.",
          en: "Semantic HTML, structured data, meta tags, and Core Web Vitals tuned so Google finds and ranks your site.",
        },
      },
      {
        title: { pl: "Bezpieczna i utrzymywana", en: "Secure & maintained" },
        description: {
          pl: "HTTPS, bezpieczny hosting i bieżące aktualizacje w cenie. Twoja strona pozostaje chroniona i aktualna po uruchomieniu.",
          en: "HTTPS, secure hosting, and ongoing updates included. Your site stays protected and up-to-date after launch.",
        },
      },
    ],
  },

  // --- Tech Stack ---
  techStack: {
    label: { pl: "Zbudowane z nowoczesnymi narzędziami", en: "Built with modern tools" },
  },

  // --- Process ---
  process: {
    label: { pl: "Proces", en: "Process" },
    title1: { pl: "Jak to", en: "How it" },
    titleAccent: { pl: "działa", en: "works" },
    steps: [
      {
        title: { pl: "Rozmawiamy", en: "We talk" },
        description: {
          pl: "Mówisz mi, czego potrzebujesz — ja zadaję właściwe pytania.",
          en: "You tell me what you need, I ask the right questions.",
        },
      },
      {
        title: { pl: "Projektuję", en: "I design" },
        description: {
          pl: "Czyste makiety. Iterujemy, aż będzie idealnie.",
          en: "Clean mockups. We iterate until it feels right.",
        },
      },
      {
        title: { pl: "Buduję", en: "I build" },
        description: {
          pl: "Dedykowany kod, przetestowany i zoptymalizowany pod kątem szybkości.",
          en: "Custom code, tested and optimized for speed.",
        },
      },
      {
        title: { pl: "Uruchamiasz", en: "You launch" },
        description: {
          pl: "Twoja strona startuje. Pozostaję dostępny do wsparcia.",
          en: "Your site goes live. I stay available for support.",
        },
      },
    ],
  },

  // --- Case Study: ADN ---
  caseAdn: {
    label: { pl: "Studium przypadku", en: "Case study" },
    title: { pl: "ADN.lt —", en: "ADN.lt —" },
    titleAccent: { pl: "darmowe ogłoszenia samochodowe", en: "free car listings" },
    subtitle: {
      pl: "Platforma, którą zaprojektowałem, zbudowałem i prowadzę. Oto jak i dlaczego.",
      en: "A full car marketplace I designed, built, and operate. Here's how and why.",
    },
    problem: {
      pl: "Litewski rynek samochodowy zdominowany jest przez przestarzałe platformy z kiepskim UX, wolnym ładowaniem i brakiem optymalizacji mobilnej. Chciałem udowodnić, że nowoczesny stack potrafi lepiej — darmowe ogłoszenia, import jednym kliknięciem z Autoplius/Autogidas/Autobilis, analiza pojazdów wspierana przez AI i wyszukiwarka, która naprawdę działa na telefonie.",
      en: "Lithuania's car market is dominated by outdated platforms with poor UX, slow load times, and clunky listing processes. I wanted to prove a modern stack could do it better — free listings, one-click import from Autoplius/Autogidas/Autobilis, AI-powered vehicle analysis, and a search experience that actually works on mobile.",
    },
    techDecisions: {
      pl: [
        "Next.js z App Router do SSR i SEO od razu",
        "Supabase do bazy danych w czasie rzeczywistym, autoryzacji, przechowywania i kont użytkowników",
        "Silnik AI Vision do automatycznej oceny stanu pojazdu ze zdjęć",
        "Import ogłoszeń jednym kliknięciem z konkurencyjnych portali (Autoplius, Autogidas, Autobilis)",
        "Integracja darmowego raportu VIN dla każdego ogłoszenia",
        "Tailwind CSS do szybkiego, spójnego rozwoju interfejsu",
        "TypeScript end-to-end dla niezawodności",
        "Wdrożone na sieci edge Vercel z TTFB poniżej 200ms",
      ],
      en: [
        "Next.js with App Router for SSR and SEO out of the box",
        "Supabase for real-time database, auth, storage, and user accounts",
        "AI Vision engine for automated vehicle condition assessment from photos",
        "One-click listing import from competing portals (Autoplius, Autogidas, Autobilis)",
        "Free VIN report integration for every listing",
        "Tailwind CSS for rapid, consistent UI development",
        "TypeScript end-to-end for reliability",
        "Deployed on Vercel edge network for sub-200ms TTFB",
      ],
    },
    result: {
      pl: "W pełni funkcjonalny marketplace samochodowy z ponad 50 ogłoszeniami, darmowym zamieszczaniem, inspekcją pojazdów wspieraną przez AI (ADN Vision), importem jednym kliknięciem z konkurencyjnych portali, zaawansowanym wyszukiwaniem samochodów, motocykli, ciężarówek, maszyn rolniczych i części. Wynik Lighthouse konsekwentnie powyżej 95.",
      en: "A fully functional car marketplace with 50+ listings, free posting, AI-powered car inspection (ADN Vision), one-click import from competing portals, advanced search across cars, motorcycles, heavy transport, agriculture, and parts. Lighthouse performance score consistently above 95.",
    },
    problemTitle: { pl: "Problem", en: "The problem" },
    techTitle: { pl: "Decyzje technologiczne", en: "Tech decisions" },
    resultTitle: { pl: "Rezultat", en: "The result" },
    techStackLabel: { pl: "Stack technologiczny", en: "Tech stack" },
    viewSite: { pl: "Zobacz stronę na żywo", en: "View live site" },
    visitSite: { pl: "Odwiedź stronę", en: "Visit live site" },
  },

  // --- Case Study: Sintorio ---
  caseSintorio: {
    label: { pl: "Studium przypadku", en: "Case study" },
    title: { pl: "Sintorio —", en: "Sintorio —" },
    titleAccent: { pl: "przetwarzanie wideo z AI", en: "AI video processing" },
    subtitle: {
      pl: "Platforma wspierana przez AI, którą zbudowałem i prowadzę. Od surowego materiału do viralowych klipów, w pełni zautomatyzowana.",
      en: "An AI-powered platform I built and operate. From raw footage to viral shorts, fully automated.",
    },
    problem: {
      pl: "Twórcy treści spędzają godziny na ręcznym przycinaniu, edytowaniu i synchronizowaniu najciekawszych fragmentów wideo. Proces jest powtarzalny, czasochłonny i nie skaluje się. Godzinne wideo może przetwarzać się ponad 40 minut na narzędziach chmurowych — a wyniki i tak wymagają ręcznej poprawki.",
      en: "Content creators spend hours manually clipping, editing, and syncing video highlights. The process is repetitive, time-consuming, and doesn't scale. A 1-hour video can take 40+ minutes to process on cloud-based tools — and the results still need manual tweaking.",
    },
    techDecisions: {
      pl: [
        "Frontend Next.js z React do czystego interfejsu edycji",
        "Backend Python z FFmpeg, Whisper i Demucs do separacji audio i transkrypcji",
        "Modele wizyjne GPT i Gemini do inteligentnego wyboru scen",
        "Własny silnik detekcji beatu automatycznie synchronizujący cięcia z muzyką",
        "Dedykowana infrastruktura GPU RTX serii 50 na Litwie — bez pośredników chmurowych",
        "Supabase do autoryzacji, bazy danych i statusu przetwarzania w czasie rzeczywistym",
        "Zautomatyzowany pipeline publikacji na YouTube od renderowania do publikacji",
      ],
      en: [
        "Next.js frontend with React for a clean editing interface",
        "Python backend with FFmpeg, Whisper, and Demucs for audio separation and transcription",
        "GPT and Gemini vision models for intelligent scene selection",
        "Custom beat detection engine that syncs cuts to music automatically",
        "Dedicated RTX 50-Series GPU infrastructure in Lithuania — no cloud middlemen",
        "Supabase for auth, database, and real-time processing status",
        "Automated YouTube publishing pipeline from render to post",
      ],
    },
    result: {
      pl: "Platforma generująca klipy zsynchronizowane z beatem w wielu profilach stylów (AURA, PULSE, HOOK, CINEMATIC) — w pełni zautomatyzowana od importu do publikacji. Przetwarza godzinne wideo w mniej niż 2 minuty na dedykowanym sprzęcie. Zawiera scoring viralowości HypeMeter, analizę trendów Vident i automatyczną publikację na TikTok, YouTube i Instagram.",
      en: "A platform that generates beat-synced video clips across multiple style profiles (AURA, PULSE, HOOK, CINEMATIC) — fully automated from import to publish. Processes a 1-hour video in under 2 minutes on dedicated hardware. Includes HypeMeter viral scoring, Vident trend intelligence, and auto-publishing to TikTok, YouTube, and Instagram.",
    },
    problemTitle: { pl: "Problem", en: "The problem" },
    techTitle: { pl: "Decyzje technologiczne", en: "Tech decisions" },
    resultTitle: { pl: "Rezultat", en: "The result" },
    techStackLabel: { pl: "Stack technologiczny", en: "Tech stack" },
    viewSite: { pl: "Zobacz stronę na żywo", en: "View live site" },
    visitSite: { pl: "Odwiedź stronę", en: "Visit live site" },
  },

  // --- About ---
  about: {
    label: { pl: "O mnie", en: "About" },
    title1: { pl: "Nie agencja.", en: "Not an agency." },
    titleAccent: { pl: "Jeden deweloper, pełne zaangażowanie.", en: "One developer, full focus." },
    bio1: {
      pl: "Nazywam się Jonas Losis. Spędziłem 12 lat pracując w transporcie i logistyce — zarządzając operacjami, rozwiązując realne problemy biznesowe i ucząc się, czego firmy naprawdę potrzebują od swojej obecności cyfrowej.",
      en: "I'm Jonas Losis. I spent 12 years working in transport and logistics — managing operations, solving real business problems, and learning what companies actually need from their digital presence.",
    },
    bio2: {
      pl: "To doświadczenie oznacza, że rozumiem Twój biznes, zanim napiszę jedną linię kodu. Dashboardy do zarządzania flotą, portale rezerwacyjne dla klientów, strony firmowe, które faktycznie generują leady — widziałem od środka, co działa, a co nie.",
      en: "That background means I understand your business before writing a single line of code. Fleet management dashboards, customer-facing booking portals, company websites that actually generate leads — I've seen what works and what doesn't from the inside.",
    },
    bio3: {
      pl: "Teraz buduję dedykowane strony internetowe w nowoczesnym stacku — Next.js, React, Supabase, Tailwind CSS. Żadnych szablonów, żadnych kreatorów stron. Tylko czysty kod, szybkie strony i bezpośrednia komunikacja.",
      en: "Now I build custom websites with the modern stack — Next.js, React, Supabase, Tailwind CSS. No templates, no page builders. Just clean code, fast sites, and direct communication.",
    },
    values: [
      {
        title: { pl: "Rzemiosło ponad kod", en: "Craft over code" },
        description: {
          pl: "Nie piszę tylko kodu — tworzę doświadczenia. Każda decyzja jest przemyślana, każdy detal ma znaczenie.",
          en: "I don't just write code — I engineer experiences. Every decision is deliberate, every detail matters.",
        },
      },
      {
        title: { pl: "Szybkość to funkcja", en: "Speed is a feature" },
        description: {
          pl: "Wydajność nie jest myślą post factum. Ładowanie poniżej sekundy, zoptymalizowane zasoby i infrastruktura edge.",
          en: "Performance isn't an afterthought. Sub-second load times, optimized assets, and edge-deployed infrastructure.",
        },
      },
      {
        title: { pl: "Bezpośrednia komunikacja", en: "Direct communication" },
        description: {
          pl: "Żadnych project managerów, żadnych pośredników. Rozmawiasz z osobą, która buduje Twoją stronę. Tak się robi to dobrze.",
          en: "No project managers, no middlemen. You talk to the person building your site. That's how things get done right.",
        },
      },
    ],
  },

  // --- CTA Banner ---
  cta: {
    title: { pl: "Potrzebujesz strony internetowej? Mogę pomóc.", en: "Need a website? I can help." },
    subtitle: {
      pl: "Projekty zaczynają się zwykle od",
      en: "Projects typically start from",
    },
    subtitleEnd: {
      pl: "Powiedz mi, czego potrzebujesz, a odezwę się w ciągu 24 godzin.",
      en: "Tell me what you need and I'll get back to you within 24 hours.",
    },
    button: { pl: "Napisz do mnie", en: "Get in touch" },
  },

  // --- Contact ---
  contact: {
    label: { pl: "Kontakt", en: "Contact" },
    title1: { pl: "Masz projekt?", en: "Have a project?" },
    titleAccent: { pl: "Porozmawiajmy.", en: "Let's talk." },
    subtitle: {
      pl: "Powiedz mi, czego potrzebujesz. Odpowiem w ciągu 24 godzin z uczciwą oceną, czy jestem odpowiednią osobą.",
      en: "Tell me what you need. I'll respond within 24 hours with an honest assessment of whether I'm the right fit.",
    },
    nameLabel: { pl: "Imię", en: "Name" },
    namePlaceholder: { pl: "Twoje imię", en: "Your name" },
    emailLabel: { pl: "Email", en: "Email" },
    emailPlaceholder: { pl: "ty@firma.com", en: "you@company.com" },
    messageLabel: { pl: "Wiadomość", en: "Message" },
    messagePlaceholder: {
      pl: "Opowiedz mi o swoim projekcie — czego potrzebujesz, na kiedy i jaki jest Twój budżet?",
      en: "Tell me about your project — what do you need, by when, and what's your budget range?",
    },
    send: { pl: "Wyślij wiadomość", en: "Send message" },
    sending: { pl: "Otwieranie klienta email...", en: "Opening email client..." },
    location: { pl: "Wilno, Litwa", en: "Vilnius, Lithuania" },
  },

  // --- Footer ---
  footer: {
    rights: { pl: "Wszelkie prawa zastrzeżone.", en: "All rights reserved." },
    location: { pl: "Wilno, Litwa", en: "Vilnius, Lithuania" },
  },
} as const;

type Translations = typeof translations;

interface I18nContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Translations;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("pl");

  useEffect(() => {
    const saved = localStorage.getItem("rookveil-locale") as Locale | null;
    if (saved === "en" || saved === "pl") {
      setLocaleState(saved);
    }
  }, []);

  function setLocale(l: Locale) {
    setLocaleState(l);
    localStorage.setItem("rookveil-locale", l);
    document.documentElement.lang = l;
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale, t: translations }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

// Helper to get translated string
export function useT() {
  const { locale, t } = useI18n();
  return { locale, t };
}
