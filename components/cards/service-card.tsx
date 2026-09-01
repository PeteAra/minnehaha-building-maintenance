import type { Service } from "@/content/services";

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
    </article>
  );
}
