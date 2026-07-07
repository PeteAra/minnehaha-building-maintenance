import { AnimatedSection } from "@/components/animated-section";
import { CTABanner } from "@/components/sections/cta-banner";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/layout/container";
import { SectionTitle } from "@/components/section-title";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { minneapolisAreas, stPaulAreas } from "@/content/service-areas";
import { MAP_EMBED_URL } from "@/lib/constants";
import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = createPageMetadata({
  title: "Service Areas",
  description:
    "Minnehaha Building Maintenance serves Minneapolis, St. Paul, and surrounding suburbs throughout the Twin Cities metro area.",
  path: "/service-areas",
});

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        title="Service Areas"
        description="Proudly serving the Minneapolis and St. Paul metro areas and surrounding suburbs."
      />

      <AnimatedSection className="py-20 lg:py-28">
        <Container>
          <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
            <iframe
              src={MAP_EMBED_URL}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Twin Cities service area map"
            />
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="bg-muted py-20 lg:py-28">
        <Container>
          <SectionTitle
            eyebrow="Coverage"
            title="Twin Cities Metro & Suburbs"
            description="We provide fast, reliable service throughout the greater Minneapolis and St. Paul area."
          />
          <div className="mt-14 grid gap-12 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
              <h2 className="text-xl font-bold text-foreground">
                Minneapolis Metro
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Minneapolis area and suburbs
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {minneapolisAreas.map((area) => (
                  <Badge key={area} variant="secondary">
                    {area}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
              <h2 className="text-xl font-bold text-foreground">
                St. Paul Metro
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                St. Paul area and suburbs
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {stPaulAreas.map((area) => (
                  <Badge key={area} variant="secondary">
                    {area}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Not sure if we serve your area? Give us a call — we&apos;re happy
              to help.
            </p>
            <Button asChild size="lg" className="mt-6">
              <Link href="/contact">Request Service in Your Area</Link>
            </Button>
          </div>
        </Container>
      </AnimatedSection>

      <CTABanner
        title="Need Service in Your Area?"
        description="Contact us for a fast, free estimate anywhere in the Twin Cities metro."
      />
    </>
  );
}
