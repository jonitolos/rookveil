import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { I18nProvider } from "@/lib/i18n";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rookveil — Web Development Studio",
  description:
    "Rookveil is a boutique web development studio crafting custom, high-performance websites. Based in Vilnius, Lithuania.",
  keywords: [
    "web development",
    "custom websites",
    "Next.js",
    "React",
    "Lithuania",
    "Vilnius",
    "web design",
    "Rookveil",
  ],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  manifest: "/manifest.json",
  metadataBase: new URL("https://rookveil.lt"),
  openGraph: {
    title: "Rookveil — Web Development Studio",
    description:
      "Boutique web development studio crafting custom, high-performance websites.",
    url: "https://rookveil.lt",
    siteName: "Rookveil",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rookveil — Web Development Studio",
    description:
      "Boutique web development studio crafting custom, high-performance websites.",
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: "https://rookveil.lt",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Rookveil",
  url: "https://rookveil.lt",
  description:
    "Boutique web development studio crafting custom, high-performance websites.",
  founder: {
    "@type": "Person",
    name: "Jonas Losis",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vilnius",
    addressCountry: "LT",
  },
  telephone: "+37067308538",
  email: "hello@rookveil.lt",
  sameAs: ["https://www.linkedin.com/in/jonas-losis/"],
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 54.6872,
      longitude: 25.2797,
    },
    geoRadius: "50000",
  },
  knowsAbout: [
    "Web Development",
    "Next.js",
    "React",
    "Custom Websites",
    "SEO",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${inter.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground noise-bg">
        <I18nProvider>{children}</I18nProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
