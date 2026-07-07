import { AnimatedSection } from "@/components/animated-section";
import { TestimonialCard } from "@/components/cards/testimonial-card";
import { Container } from "@/components/layout/container";
import { SectionTitle } from "@/components/section-title";
import { testimonials } from "@/content/testimonials";

export function Testimonials() {
  return (
    <AnimatedSection id="testimonials" className="bg-muted py-20 lg:py-28">
      <Container>
        <SectionTitle
          eyebrow="Testimonials"
          title="What Our Clients Say"
          description="Trusted by property managers, business owners, and homeowners across the Twin Cities."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}
