import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { PHONE, PHONE_HREF } from "@/lib/constants";
import { Phone } from "lucide-react";
import Link from "next/link";

type CTABannerProps = {
  title?: string;
  description?: string;
};

export function CTABanner({
  title = "Ready to Discuss a Commercial Contract?",
  description = "Contact Minnehaha Building Maintenance for a fast, friendly quote on contract window cleaning for your restaurants, retail locations, or commercial properties.",
}: CTABannerProps) {
  return (
    <section className="bg-primary-dark py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg text-white/80">{description}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">Request a Commercial Quote</Link>
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
