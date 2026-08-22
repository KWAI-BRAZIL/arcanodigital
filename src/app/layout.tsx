import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { JsonLd } from "@/components/JsonLd";
import { ScrollImmersion, ScrollProgressBar } from "@/components/ScrollImmersion";
import { site } from "@/lib/site";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  display: "swap",
  preload: true,
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Arcano Digital | Agência de neuromarketing para negócios locais em Brasília, Caldas Novas e Goiânia",
    template: "%s | Arcano Digital",
  },
  description:
    "Marketing e sistemas para negócios locais em Brasília, Caldas Novas, Goiânia e região metropolitana: neuromarketing, tráfego, branding, e-commerce e automações.",
  keywords: [
    "agência de marketing Goiânia",
    "agência de marketing Brasília",
    "marketing Caldas Novas",
    "neuromarketing Goiás",
    "marketing para negócios locais",
    "branding Goiânia",
    "Arcano Digital",
  ],
  openGraph: {
    locale: "pt_BR",
    type: "website",
    siteName: site.name,
    title: "Arcano Digital — marketing e sistemas para negócios locais",
    description: site.positioning,
    images: [{ url: "/brand/logo.png", width: 1200, height: 630, alt: "Arcano Digital" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arcano Digital",
    description: site.positioning,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable} antialiased bg-arcano-bg text-arcano-text`}>
        <JsonLd />
        <Header />
        <ScrollProgressBar />
        <ScrollImmersion />
        <div className="relative z-[1]">{children}</div>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
