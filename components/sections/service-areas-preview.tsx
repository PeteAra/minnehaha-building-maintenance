import { AnimatedSection } from "@/components/animated-section";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/layout/container";
import { SectionTitle } from "@/components/section-title";
import { minneapolisAreas, stPaulAreas } from "@/content/service-areas";

export function ServiceAreasPreview() {
  return (
    <AnimatedSection id="areas" className="py-20 lg:py-28">
      <Container>
        <SectionTitle
          eyebrow="Service Areas"
          title="Proudly Serving the Twin Cities Metro"
          description="Minneapolis area and suburbs, plus St. Paul area and suburbs."
        />
        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-lg font-bold text-foreground">
              Minneapolis Metro
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {minneapolisAreas.map((area) => (
                <Badge key={area} variant="secondary">
                  {area}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground">St. Paul Metro</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {stPaulAreas.map((area) => (
                <Badge key={area} variant="secondary">
                  {area}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
