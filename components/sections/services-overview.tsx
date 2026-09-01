import { AnimatedSection } from "@/components/animated-section";
import { ServiceCard } from "@/components/cards/service-card";
import { Container } from "@/components/layout/container";
import { SectionTitle } from "@/components/section-title";
import { featuredServices } from "@/content/services";

export function ServicesOverview() {
  return (
    <AnimatedSection id="services" className="bg-muted py-20 lg:py-28">
      <Container>
        <SectionTitle
          eyebrow="Our Services"
          title="Commercial Cleaning Built for Storefronts"
          description="Contract window cleaning and exterior maintenance for restaurants, retailers, and multi-location operators — with flexible billing, simple paperwork, and options for any budget."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Residential window cleaning is also available for select properties.
        </p>
      </Container>
    </AnimatedSection>
  );
}
