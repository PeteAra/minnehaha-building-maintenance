import { AnimatedSection } from "@/components/animated-section";
import { IndustryCard } from "@/components/cards/industry-card";
import { Container } from "@/components/layout/container";
import { SectionTitle } from "@/components/section-title";
import { industries } from "@/content/industries";

export function IndustriesGrid() {
  return (
    <AnimatedSection id="industries" className="py-20 lg:py-28">
      <Container>
        <SectionTitle
          eyebrow="Who We Serve"
          title="Built for Restaurants, Retail & Mall Properties"
          description="We partner with facilities teams, property managers, and multi-location operators who need consistent storefront cleaning across the Twin Cities."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <IndustryCard key={industry.id} industry={industry} />
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}
