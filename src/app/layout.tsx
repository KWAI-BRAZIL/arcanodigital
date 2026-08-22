import type { Metadata } from "next";
import { Cinzel, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700"],
  display: "swap",
  preload: true,
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
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
    "Agência especializada em negócios locais em Brasília, Caldas Novas, Goiânia e região metropolitana que usam neuromarketing, conteúdo e branding pra vender mais todo mês. Tráfego pago, IA, vendas online e sistemas.",
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
    title: "Arcano Digital — neuromarketing para negócios locais",
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
      <body className={`${cinzel.variable} ${montserrat.variable} antialiased bg-ink text-cream`}>
        <JsonLd />
        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
