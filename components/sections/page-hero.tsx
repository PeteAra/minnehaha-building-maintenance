import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  title: string;
  description: string;
  className?: string;
};

export function PageHero({ title, description, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        "bg-primary-dark pt-32 pb-16 lg:pt-40 lg:pb-20",
        className
      )}
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-white/80">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
}
