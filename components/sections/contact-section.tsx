import { AnimatedSection } from "@/components/animated-section";
import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/layout/container";
import { SectionTitle } from "@/components/section-title";
import {
  ADDRESS,
  BUSINESS_HOURS,
  MAP_EMBED_URL,
  PHONE,
  PHONE_HREF,
} from "@/lib/constants";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <AnimatedSection id="contact" className="py-20 lg:py-28">
      <Container>
        <SectionTitle
          eyebrow="Contact Us"
          title="Request a Commercial Quote"
          description="Speak with our team about contract window cleaning for your restaurants, retail locations, or commercial properties."
        />
        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <div>
            <ContactForm />
          </div>
          <div className="space-y-8">
            <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
              <h3 className="text-lg font-bold text-foreground">Contact Info</h3>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Phone</p>
                    <a
                      href={PHONE_HREF}
                      className="text-primary hover:text-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {PHONE}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Address</p>
                    <address className="not-italic text-muted-foreground">
                      {ADDRESS.full}
                    </address>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Hours</p>
                    <p className="text-muted-foreground">{BUSINESS_HOURS}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Quotes</p>
                    <p className="text-muted-foreground">
                      Fast, friendly commercial estimates
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
              <iframe
                src={MAP_EMBED_URL}
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Minnehaha Building Maintenance office location"
              />
            </div>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
