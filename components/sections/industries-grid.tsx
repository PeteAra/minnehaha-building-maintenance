import { AnimatedSection } from "@/components/animated-section";
import { IndustryCard } from "@/components/cards/industry-card";
import { Container } from "@/components/layout/container";
import { SectionTitle } from "@/components/section-title";
import { industries } from "@/content/industries";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function IndustriesGrid() {
  return (
    <AnimatedSection className="py-20 lg:py-28">
      <Container>
        <SectionTitle
          eyebrow="Who We Serve"
          title="Built for Chain Restaurants, Retail & Mall Properties"
          description="We partner with facilities teams, property managers, and multi-location operators who need consistent storefront cleaning across the Twin Cities."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <IndustryCard key={industry.id} industry={industry} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild variant="secondary" size="lg">
            <Link href="/industries">Explore Industries We Serve</Link>
          </Button>
        </div>
      </Container>
    </AnimatedSection>
  );
}
