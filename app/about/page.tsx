import { AnimatedSection } from "@/components/animated-section";
import { CTABanner } from "@/components/sections/cta-banner";
import { PageHero } from "@/components/sections/page-hero";
import { StatsBand } from "@/components/sections/stats-band";
import { Container } from "@/components/layout/container";
import { SectionTitle } from "@/components/section-title";
import { companyValues } from "@/content/company";
import { FOUNDED_YEAR } from "@/lib/constants";
import { createPageMetadata } from "@/lib/metadata";
import { CheckCircle2, Shield } from "lucide-react";
import Image from "next/image";

export const metadata = createPageMetadata({
  title: "About Us",
  description:
    "Learn about Minnehaha Building Maintenance Inc. — the Twin Cities premier window cleaning and building maintenance company since 1978.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Minnehaha Building Maintenance"
        description={`Serving the Twin Cities with dependable, industry-leading cleaning services since ${FOUNDED_YEAR}.`}
      />

      <AnimatedSection className="py-20 lg:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionTitle
                eyebrow="Our Story"
                title="The Premier Window Cleaning Company in the Twin Cities"
                align="left"
              />
              <div className="mt-8 space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  Since {FOUNDED_YEAR}, Minnehaha Building Maintenance Inc. has
                  served the individual cleaning needs of our customers with fast,
                  professional services. Our skilled cleaning professionals always
                  assure dependable, industry-leading results.
                </p>
                <p>
                  MBM is the oldest and premier window cleaning company in the
                  Metro Minneapolis / St. Paul area. We specialize in weekly,
                  bi-weekly, and monthly contract cleaning — the most cost-effective
                  option for our customers.
                </p>
                <p>
                  Our personnel are professionally trained and supervised. We only
                  use proper cleaning products and equipment, and MBM constantly
                  researches and upgrades its products and service techniques.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://static.wixstatic.com/media/948629_c7b13d2767e0bb844b046af516ab4266.jpg/v1/fill/w_800,h_600,al_c,lg_1,q_80,enc_avif,quality_auto/948629_c7b13d2767e0bb844b046af516ab4266.jpg"
                alt="MBM professional cleaning team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="bg-muted py-20 lg:py-28">
        <Container>
          <SectionTitle
            eyebrow="Our Values"
            title="Built on Trust, Quality, and Value"
          />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {companyValues.map((value) => (
              <div
                key={value.id}
                className="rounded-2xl border border-border bg-white p-8 shadow-sm"
              >
                <h3 className="text-xl font-bold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </AnimatedSection>

      <StatsBand />

      <AnimatedSection className="py-20 lg:py-28">
        <Container>
          <div className="mx-auto max-w-3xl rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center lg:p-12">
            <Shield className="mx-auto size-12 text-primary" aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-bold text-foreground">
              Fully Insured & Guaranteed
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Our liability insurance protects you against loss and damages. All
              work is guaranteed to protect your investment in our service.
            </p>
            <ul className="mt-8 space-y-3 text-left">
              {[
                "Liability insurance for your protection",
                "All work guaranteed",
                "Professionally trained and supervised staff",
                "Emergency cleaning available on short notice",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    className="size-5 shrink-0 text-success"
                    aria-hidden="true"
                  />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </AnimatedSection>

      <CTABanner />
    </>
  );
}
