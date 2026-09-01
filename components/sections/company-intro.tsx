import { AnimatedSection } from "@/components/animated-section";
import { Container } from "@/components/layout/container";
import { SectionTitle } from "@/components/section-title";
import { FOUNDED_YEAR } from "@/lib/constants";
import Image from "next/image";

export function CompanyIntro() {
  return (
    <AnimatedSection id="about" className="py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="https://static.wixstatic.com/media/948629_c7b13d2767e0bb844b046af516ab4266.jpg/v1/fill/w_800,h_600,al_c,lg_1,q_80,enc_avif,quality_auto/948629_c7b13d2767e0bb844b046af516ab4266.jpg"
              alt="MBM technician cleaning commercial storefront windows at ground level"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <SectionTitle
              eyebrow="About MBM"
              title={`Your Twin Cities Commercial Cleaning Partner Since ${FOUNDED_YEAR}`}
              description="The premier ground-level window cleaning company for restaurants, retailers, and commercial properties in the Minneapolis / St. Paul metro."
              align="left"
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
            </div>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
