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
          title="From Hudson to St. Cloud — and Everywhere In Between"
          description="We cover 200+ communities across the Twin Cities metro, surrounding suburbs, and rural areas from Hudson, WI to St. Cloud, MN."
        />
        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-lg font-bold text-foreground">
              Minneapolis Side & West
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
            <h3 className="text-lg font-bold text-foreground">
              St. Paul Side & East
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {stPaulAreas.map((area) => (
                <Badge key={area} variant="secondary">
                  {area}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground">
          Plus incorporated municipalities and rural communities throughout the
          greater Twin Cities region. Not sure if we serve your location?{" "}
          <a
            href="#contact"
            className="font-medium text-primary hover:text-primary-light"
          >
            Ask us
          </a>
          .
        </p>
      </Container>
    </AnimatedSection>
  );
}
