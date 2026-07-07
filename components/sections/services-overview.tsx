import { AnimatedSection } from "@/components/animated-section";
import { ServiceCard } from "@/components/cards/service-card";
import { Container } from "@/components/layout/container";
import { SectionTitle } from "@/components/section-title";
import { primaryServices } from "@/content/services";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ServicesOverview() {
  return (
    <AnimatedSection className="bg-muted py-20 lg:py-28">
      <Container>
        <SectionTitle
          eyebrow="Our Services"
          title="Complete Cleaning & Maintenance Solutions"
          description="From commercial storefronts to residential homes, MBM delivers professional results on your schedule."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {primaryServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild variant="secondary" size="lg">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </Container>
    </AnimatedSection>
  );
}
