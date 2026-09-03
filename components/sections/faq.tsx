import { AnimatedSection } from "@/components/animated-section";
import { FAQAccordion } from "@/components/faq-accordion";
import { Container } from "@/components/layout/container";
import { SectionTitle } from "@/components/section-title";
import { homeFaqs } from "@/content/faq";

export function FAQ() {
  return (
    <AnimatedSection id="faq" className="py-20 lg:py-28">
      <Container>
        <div className="mx-auto max-w-3xl">
          <SectionTitle
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Common questions from facilities teams and commercial property managers."
          />
          <div className="mt-10">
            <FAQAccordion items={homeFaqs} />
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
