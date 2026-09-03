import { CompanyIntro } from "@/components/sections/company-intro";
import { ContactSection } from "@/components/sections/contact-section";
import { FAQ } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { IndustriesGrid } from "@/components/sections/industries-grid";
import { ServiceAreasPreview } from "@/components/sections/service-areas-preview";
import { ServicesOverview } from "@/components/sections/services-overview";
import { StatsBand } from "@/components/sections/stats-band";
import { Testimonials } from "@/components/sections/testimonials";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Commercial Window Cleaning Minneapolis & St. Paul",
  description:
    "Minnehaha Building Maintenance Inc. — Twin Cities commercial window cleaning for restaurants, grocery stores, shopping centers, and multi-location businesses since 1978. Flexible billing. Call 612-332-1916.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <IndustriesGrid />
      <WhyChooseUs />
      <StatsBand />
      <CompanyIntro />
      <ServiceAreasPreview />
      <Testimonials />
      <FAQ />
      <ContactSection />
    </>
  );
}
