import { CompanyIntro } from "@/components/sections/company-intro";
import { ContactSection } from "@/components/sections/contact-section";
import { CTABanner } from "@/components/sections/cta-banner";
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
  title: "Twin Cities Window Cleaning & Building Maintenance",
  description:
    "Minnehaha Building Maintenance Inc. — professional commercial and residential window cleaning and building maintenance serving Minneapolis, St. Paul, and the Twin Cities since 1978.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <CompanyIntro />
      <ServicesOverview />
      <WhyChooseUs />
      <StatsBand />
      <IndustriesGrid />
      <ServiceAreasPreview />
      <Testimonials />
      <FAQ />
      <CTABanner />
      <ContactSection />
    </>
  );
}
