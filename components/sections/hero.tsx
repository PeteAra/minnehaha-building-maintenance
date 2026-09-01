import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { FOUNDED_YEAR, PHONE, PHONE_HREF } from "@/lib/constants";
import { Phone } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-50">
      <Image
        src="/images/hero-restaurant.jpg"
        alt="Modern restaurant exterior with large glass storefront windows and outdoor patio seating"
        fill
        priority
        className="object-cover object-[center_40%] opacity-70"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/60 to-white/20" />
      <div className="absolute -right-24 top-20 size-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -left-24 bottom-10 size-80 rounded-full bg-primary/5 blur-3xl" />

      <Container className="relative z-10 py-32">
        <div className="max-w-3xl">
          <Badge
            variant="accent"
            className="mb-6 border border-primary/15 bg-primary/10 text-primary"
          >
            Commercial Contract Cleaning Since {FOUNDED_YEAR}
          </Badge>
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-primary-dark sm:text-5xl lg:text-6xl">
            Optimum Appearance Level That Your Customers and Restaurant Deserve
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Trusted Twin Cities vendor for restaurants, grocery stores,
            shopping centers, and multi-location businesses. Flexible billing,
            payment options for any budget, and dependable contract service since{" "}
            {FOUNDED_YEAR}.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <a href="#contact">Request a Commercial Quote</a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href={PHONE_HREF}>
                <Phone className="size-4" aria-hidden="true" />
                Call {PHONE}
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
