import type { Testimonial } from "@/content/testimonials";
import { Star } from "lucide-react";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <blockquote className="flex h-full flex-col rounded-2xl border border-border bg-white p-8 shadow-sm">
      <div className="flex gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            className="size-4 fill-amber-400 text-amber-400"
            aria-hidden="true"
          />
        ))}
      </div>
      <p className="mt-4 flex-1 text-base leading-relaxed text-muted-foreground">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <footer className="mt-6 border-t border-border pt-4">
        <cite className="not-italic">
          <p className="font-semibold text-foreground">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
        </cite>
      </footer>
    </blockquote>
  );
}
