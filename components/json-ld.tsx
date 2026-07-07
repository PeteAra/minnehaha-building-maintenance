import {
  ADDRESS,
  FOUNDED_YEAR,
  PHONE,
  SITE_NAME,
  SITE_URL,
} from "@/lib/constants";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    url: SITE_URL,
    telephone: `+1-${PHONE.replace(/-/g, "")}`,
    foundingDate: String(FOUNDED_YEAR),
    image: `${SITE_URL}/og-image.svg`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.city,
      addressRegion: ADDRESS.state,
      postalCode: ADDRESS.zip,
      addressCountry: "US",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Minneapolis",
        containedInPlace: { "@type": "State", name: "Minnesota" },
      },
      {
        "@type": "City",
        name: "St. Paul",
        containedInPlace: { "@type": "State", name: "Minnesota" },
      },
    ],
    description:
      "Professional commercial and residential window cleaning and building maintenance serving the Twin Cities metro since 1978.",
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
