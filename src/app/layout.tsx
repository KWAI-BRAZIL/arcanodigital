import type { Metadata } from "next";
import { JetBrains_Mono, Raleway } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { JsonLd } from "@/components/JsonLd";
import { ScrollProgressBar } from "@/components/ScrollImmersion";
import { site } from "@/lib/site";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
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
    default: "Arcano Solutions | Agência de neuromarketing para negócios locais em Brasília, Caldas Novas e Goiânia",
    template: "%s | Arcano Solutions",
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
    "Arcano Solutions",
  ],
  openGraph: {
    locale: "pt_BR",
    type: "website",
    siteName: site.name,
    title: "Arcano Solutions — marketing e sistemas para negócios locais",
    description: site.positioning,
    images: [{ url: "/brand/logo.png", width: 1024, height: 819, alt: "Arcano Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arcano Solutions",
    description: site.positioning,
  },
  robots: { index: true, follow: true },
  verification: {
    google: "ylpe-EI7SZKhaBkMVFq5gebO7diyu7c0ZJUKYro2ttg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${raleway.variable} ${jetbrains.variable} antialiased bg-paper text-cream`}>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-7HG8L6QWN9" strategy="afterInteractive" />
        <Script id="google-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7HG8L6QWN9');
          `}
        </Script>
        <JsonLd />
        <Header />
        <ScrollProgressBar />
        <div className="relative z-[1]">{children}</div>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
