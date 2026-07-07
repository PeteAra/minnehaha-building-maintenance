import { AnimatedSection } from "@/components/animated-section";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/layout/container";
import { FAQAccordion } from "@/components/faq-accordion";
import {
  ADDRESS,
  BUSINESS_HOURS,
  MAP_EMBED_URL,
  PHONE,
  PHONE_HREF,
} from "@/lib/constants";
import { createPageMetadata } from "@/lib/metadata";
import { homeFaqs } from "@/content/faq";
import { Clock, MapPin, Phone } from "lucide-react";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Minnehaha Building Maintenance for a fast, free estimate. Call 612-332-1916 or fill out our contact form.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        description="We are only a phone call away. Reach out for a fast, friendly, and free estimate."
      />

      <AnimatedSection className="py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-foreground">
                Send Us a Message
              </h2>
              <p className="mt-2 text-muted-foreground">
                Fill out the form below and we&apos;ll get back to you shortly.
              </p>
              <ContactForm className="mt-8" />
            </div>
            <div className="space-y-6 lg:col-span-2">
              <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <Phone className="size-5 text-primary" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <a
                      href={PHONE_HREF}
                      className="text-lg font-bold text-primary hover:text-primary-light"
                    >
                      {PHONE}
                    </a>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Call for a fast free quote
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="size-5 text-primary" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-foreground">Address</p>
                    <address className="mt-1 not-italic text-muted-foreground">
                      {ADDRESS.full}
                    </address>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <Clock className="size-5 text-primary" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-foreground">Hours</p>
                    <p className="mt-1 text-muted-foreground">
                      {BUSINESS_HOURS}
                    </p>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
                <iframe
                  src={MAP_EMBED_URL}
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office location map"
                />
              </div>
            </div>
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="bg-muted py-20 lg:py-28">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-2xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
            <div className="mt-8">
              <FAQAccordion items={homeFaqs} />
            </div>
          </div>
        </Container>
      </AnimatedSection>
    </>
  );
}
