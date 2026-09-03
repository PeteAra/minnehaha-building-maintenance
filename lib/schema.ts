import { homeFaqs } from "@/content/faq";
import { primaryServices } from "@/content/services";
import {
  ADDRESS,
  FOUNDED_YEAR,
  LOGO_SRC,
  PHONE_HREF,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/constants";

const BUSINESS_ID = `${SITE_URL}/#business`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export function buildJsonLdGraph() {
  const telephone = PHONE_HREF.replace("tel:", "");

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        publisher: { "@id": BUSINESS_ID },
        inLanguage: "en-US",
      },
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": BUSINESS_ID,
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}${LOGO_SRC}`,
        image: `${SITE_URL}/og-image.svg`,
        telephone,
        foundingDate: String(FOUNDED_YEAR),
        description: SITE_DESCRIPTION,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: ADDRESS.street,
          addressLocality: ADDRESS.city,
          addressRegion: ADDRESS.state,
          postalCode: ADDRESS.zip,
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 44.883,
          longitude: -93.138,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
            opens: "07:00",
            closes: "17:00",
          },
        ],
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
          {
            "@type": "AdministrativeArea",
            name: "Twin Cities Metro Area",
            containedInPlace: { "@type": "State", name: "Minnesota" },
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Commercial Cleaning Services",
          itemListElement: primaryServices
            .filter((service) => service.featured)
            .map((service, index) => ({
              "@type": "Offer",
              position: index + 1,
              itemOffered: {
                "@type": "Service",
                name: service.title,
                description: service.shortDescription,
              },
            })),
        },
        sameAs: [],
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: homeFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };
}
