import { AnimatedSection } from "@/components/animated-section";
import { IndustryCard } from "@/components/cards/industry-card";
import { Container } from "@/components/layout/container";
import { SectionTitle } from "@/components/section-title";
import { industries } from "@/content/industries";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function IndustriesGrid() {
  return (
    <AnimatedSection className="bg-muted py-20 lg:py-28">
      <Container>
        <SectionTitle
          eyebrow="Industries Served"
          title="Trusted by Businesses Across the Twin Cities"
          description="We provide specialized cleaning and maintenance for a wide range of commercial properties."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <IndustryCard key={industry.id} industry={industry} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild variant="secondary" size="lg">
            <Link href="/industries">Explore All Industries</Link>
          </Button>
        </div>
      </Container>
    </AnimatedSection>
  );
}
