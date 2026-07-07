import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { FOUNDED_YEAR, PHONE, PHONE_HREF } from "@/lib/constants";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-primary-dark">
      <Image
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
        alt="Modern commercial building with clean glass windows"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/80 to-primary-dark/60" />

      <Container className="relative z-10 py-32">
        <div className="max-w-3xl">
          <Badge variant="accent" className="mb-6 bg-white/10 text-white">
            Trusted Since {FOUNDED_YEAR}
          </Badge>
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Twin Cities Building Maintenance You Can Trust Since {FOUNDED_YEAR}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
            Professional window cleaning and building maintenance for commercial
            properties across Minneapolis and St. Paul. Dependable, insured, and
            industry-leading service.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">Get a Free Estimate</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
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
