import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${site.url}/#business`,
        name: site.name,
        legalName: site.legalName,
        description: site.positioning,
        url: site.url,
        email: site.email,
        telephone: `+${site.phoneE164}`,
        image: `${site.url}/brand/logo.png`,
        logo: `${site.url}/brand/logo.png`,
        taxID: site.cnpj,
        areaServed: [
          { "@type": "City", name: "Goiânia" },
          { "@type": "City", name: "Senador Canedo" },
          { "@type": "State", name: "Goiás" },
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.street,
          addressLocality: site.address.city,
          addressRegion: site.address.state,
          postalCode: site.address.postalCode,
          addressCountry: site.address.country,
        },
        founder: { "@type": "Person", name: site.founder },
        priceRange: "$$",
        sameAs: [site.url],
      },
      {
        "@type": "WebSite",
        name: site.name,
        url: site.url,
        inLanguage: "pt-BR",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
