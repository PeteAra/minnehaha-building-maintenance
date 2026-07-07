import { AnimatedSection } from "@/components/animated-section";
import { Container } from "@/components/layout/container";
import { SectionTitle } from "@/components/section-title";
import { whyChooseUs } from "@/content/company";

export function WhyChooseUs() {
  return (
    <AnimatedSection className="py-20 lg:py-28">
      <Container>
        <SectionTitle
          eyebrow="Why Choose Us"
          title="Why Is MBM the Right Choice?"
          description="Nearly five decades of experience, professional training, and a commitment to value set us apart."
        />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.id}
                className="rounded-2xl border border-border bg-white p-6 shadow-sm"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </AnimatedSection>
  );
}
