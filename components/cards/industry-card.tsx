import type { Industry } from "@/content/industries";
import Link from "next/link";

type IndustryCardProps = {
  industry: Industry;
};

export function IndustryCard({ industry }: IndustryCardProps) {
  const Icon = industry.icon;

  return (
    <article className="group rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/20 hover:shadow-md">
      <div className="flex size-11 items-center justify-center rounded-xl bg-accent/15 text-primary">
        <Icon className="size-5" aria-hidden="true" />
      </div>
      <h3 className="mt-4 text-lg font-bold text-foreground">{industry.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {industry.description}
      </p>
      <Link
        href="#contact"
        className="mt-4 inline-flex text-sm font-semibold text-primary transition-colors hover:text-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        Request service →
      </Link>
    </article>
  );
}
