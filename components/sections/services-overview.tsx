import { AnimatedSection } from "@/components/animated-section";
import { ServiceCard } from "@/components/cards/service-card";
import { Container } from "@/components/layout/container";
import { SectionTitle } from "@/components/section-title";
import { featuredServices } from "@/content/services";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ServicesOverview() {
  return (
    <AnimatedSection className="bg-muted py-20 lg:py-28">
      <Container>
        <SectionTitle
          eyebrow="Our Services"
          title="Commercial Cleaning Built for Storefronts"
          description="Contract window cleaning and exterior maintenance for restaurants, retailers, and multi-location operators across the Twin Cities."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Residential window cleaning is also available.{" "}
          <Link
            href="/services#residential-window-cleaning"
            className="font-medium text-primary hover:text-primary-light"
          >
            Learn more
          </Link>
        </p>
        <div className="mt-8 text-center">
          <Button asChild variant="secondary" size="lg">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </Container>
    </AnimatedSection>
  );
}
