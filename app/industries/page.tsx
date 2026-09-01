import { AnimatedSection } from "@/components/animated-section";
import { IndustryCard } from "@/components/cards/industry-card";
import { CTABanner } from "@/components/sections/cta-banner";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/layout/container";
import { SectionTitle } from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { industries } from "@/content/industries";
import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = createPageMetadata({
  title: "Industries Served",
  description:
    "Contract window cleaning for Twin Cities chain restaurants, grocery retailers, shopping centers, property management firms, and multi-location operators.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        title="Industries We Serve"
        description="Ground-level window cleaning and storefront maintenance for restaurants, grocery chains, malls, and multi-location commercial properties."
      />

      <AnimatedSection className="py-20 lg:py-28">
        <Container>
          <SectionTitle
            eyebrow="Commercial Focus"
            title="Built for Restaurants, Retail Chains & Mall Properties"
            description="We partner with facilities teams and operators who manage customer-facing storefronts across the Twin Cities metro."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <IndustryCard key={industry.id} industry={industry} />
            ))}
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="bg-muted py-16 lg:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-foreground">
              Managing multiple locations?
            </h2>
            <p className="mt-4 text-muted-foreground">
              We work with franchise groups, property managers, and regional
              operators who need consistent storefront cleaning across their
              portfolio. Contact us to discuss a contract program.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/contact">Request a Commercial Quote</Link>
            </Button>
          </div>
        </Container>
      </AnimatedSection>

      <CTABanner />
    </>
  );
}
