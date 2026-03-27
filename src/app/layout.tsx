import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rookveil — Web Development Studio",
  description:
    "Rookveil is a boutique web development studio crafting high-performance websites and web applications. Based in Lithuania.",
  keywords: [
    "web development",
    "Next.js",
    "React",
    "Lithuania",
    "web design",
    "Rookveil",
  ],
  openGraph: {
    title: "Rookveil — Web Development Studio",
    description:
      "Boutique web development studio crafting high-performance websites and web applications.",
    url: "https://rookveil.lt",
    siteName: "Rookveil",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
