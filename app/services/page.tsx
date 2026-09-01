import { AnimatedSection } from "@/components/animated-section";
import { FAQAccordion } from "@/components/faq-accordion";
import { CTABanner } from "@/components/sections/cta-banner";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/layout/container";
import { SectionTitle } from "@/components/section-title";
import {
  contractBenefits,
  primaryServices,
  secondaryServices,
} from "@/content/services";
import { servicesFaqs } from "@/content/faq";
import { createPageMetadata } from "@/lib/metadata";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export const metadata = createPageMetadata({
  title: "Commercial Cleaning Services",
  description:
    "Contract ground-level window cleaning and storefront maintenance for Twin Cities restaurants, grocery chains, shopping centers, and multi-location businesses.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Commercial Cleaning Services"
        description="Contract window cleaning and storefront maintenance for restaurants, retailers, malls, and multi-location businesses across the Twin Cities."
      />

      {primaryServices.map((service, index) => {
        const Icon = service.icon;
        const isReversed = index % 2 === 1;
        const isResidential = service.id === "residential-window-cleaning";

        return (
          <AnimatedSection
            key={service.id}
            id={service.id}
            className={
              isResidential
                ? "border-t border-border bg-muted/50 py-16 lg:py-20"
                : index % 2 === 0
                  ? "py-20 lg:py-28"
                  : "bg-muted py-20 lg:py-28"
            }
          >
            <Container>
              {isResidential && (
                <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  Also Available
                </p>
              )}
              <div
                className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
                  isReversed ? "lg:[&>*:first-child]:order-2" : ""
                } ${isResidential ? "opacity-90" : ""}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-6" aria-hidden="true" />
                  </div>
                  <h2 className="mt-6 text-3xl font-bold text-foreground">
                    {service.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2
                          className="mt-0.5 size-5 shrink-0 text-success"
                          aria-hidden="true"
                        />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {service.id === "building-maintenance" && (
                <div className="mt-16">
                  <h3 className="text-xl font-bold text-foreground">
                    Additional Storefront Maintenance
                  </h3>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {secondaryServices.map((sub) => {
                      const SubIcon = sub.icon;
                      return (
                        <div
                          key={sub.title}
                          className="flex items-center gap-3 rounded-xl border border-border bg-white p-4 shadow-sm"
                        >
                          <div className="flex size-10 items-center justify-center rounded-lg bg-accent/15 text-primary">
                            <SubIcon className="size-5" aria-hidden="true" />
                          </div>
                          <span className="font-medium text-foreground">
                            {sub.title}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </Container>
          </AnimatedSection>
        );
      })}

      <AnimatedSection className="bg-primary-dark py-20 lg:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
              Contract Benefits
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Why Contract Service Saves You Money
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/80">
              Pre-scheduled, repeat services deliver substantial savings for
              chain and multi-location accounts.
            </p>
          </div>
          <ul className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
            {contractBenefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 text-white/90">
                <CheckCircle2
                  className="mt-0.5 size-5 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="py-20 lg:py-28">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionTitle
              eyebrow="FAQ"
              title="Service Questions"
              description="Common questions from facilities teams and commercial property managers."
            />
            <div className="mt-10">
              <FAQAccordion items={servicesFaqs} />
            </div>
          </div>
        </Container>
      </AnimatedSection>

      <CTABanner />
    </>
  );
}
