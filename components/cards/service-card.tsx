import { Button } from "@/components/ui/button";
import type { Service } from "@/content/services";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-border bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
      <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="size-6" aria-hidden="true" />
      </div>
      <h3 className="mt-6 text-xl font-bold text-foreground">{service.title}</h3>
      <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
        {service.shortDescription}
      </p>
      <Button asChild variant="ghost" className="mt-6 w-fit px-0 text-primary">
        <Link href={`/services#${service.id}`}>
          Learn more
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Button>
    </article>
  );
}
