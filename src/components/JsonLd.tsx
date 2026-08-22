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
          { "@type": "City", name: "Brasília" },
          { "@type": "City", name: "Caldas Novas" },
          { "@type": "City", name: "Goiânia" },
          { "@type": "State", name: "Goiás" },
          { "@type": "State", name: "Distrito Federal" },
        ],
        address: {
          "@type": "PostalAddress",
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
