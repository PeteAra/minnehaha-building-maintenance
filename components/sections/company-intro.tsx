import { AnimatedSection } from "@/components/animated-section";
import { Container } from "@/components/layout/container";
import { SectionTitle } from "@/components/section-title";
import { FOUNDED_YEAR } from "@/lib/constants";

export function CompanyIntro() {
  return (
    <AnimatedSection id="about" className="py-20 lg:py-28">
      <Container>
        <div className="mx-auto max-w-3xl">
          <SectionTitle
            eyebrow="About MBM"
            title={`Your Twin Cities Commercial Cleaning Partner Since ${FOUNDED_YEAR}`}
            description="The premier ground-level window cleaning company for restaurants, retailers, and commercial properties in the Minneapolis / St. Paul metro."
          />
          <div className="mt-8 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Since {FOUNDED_YEAR}, Minnehaha Building Maintenance has served
              the commercial cleaning needs of restaurants, grocery stores,
              shopping centers, and multi-location businesses across the Twin
              Cities. Our trained crews deliver dependable, industry-leading
              results at ground level — every visit.
            </p>
            <p>
              We specialize in weekly, bi-weekly, and monthly contract
              cleaning — the most cost-effective option for businesses with
              multiple locations. Our liability insurance protects you against
              loss and damages, and all work is guaranteed.
            </p>
            <p>
              Billing should be just as easy as the cleaning itself. We offer
              flexible, set-it-and-forget-it billing with options for any
              budget — consolidated invoicing, per-location billing, recurring
              auto-pay, and more — with clear paperwork your accounts payable
              team can process without the hassle.
            </p>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
