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
    "Minnehaha Building Maintenance serves office buildings, property management companies, medical facilities, retail, industrial sites, and restaurants across the Twin Cities.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        title="Industries We Serve"
        description="Specialized window cleaning and building maintenance for commercial properties across the Minneapolis and St. Paul metro."
      />

      <AnimatedSection className="py-20 lg:py-28">
        <Container>
          <SectionTitle
            eyebrow="Commercial Expertise"
            title="Tailored Solutions for Every Property Type"
            description="We understand the unique needs of each industry and deliver consistent, professional results."
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
              Don&apos;t see your industry?
            </h2>
            <p className="mt-4 text-muted-foreground">
              We work with a wide range of commercial and residential clients.
              Contact us to discuss your specific needs.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </Container>
      </AnimatedSection>

      <CTABanner />
    </>
  );
}
