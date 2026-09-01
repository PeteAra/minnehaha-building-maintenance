import {
  ADDRESS,
  FOOTER_SERVICE_LINKS,
  LOGO_LIGHT_SRC,
  NAV_LINKS,
  PHONE,
  PHONE_HREF,
  SITE_NAME,
} from "@/lib/constants";
import Image from "next/image";
import { Container } from "./container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white">
      <Container className="py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src={LOGO_LIGHT_SRC}
              alt={SITE_NAME}
              width={260}
              height={52}
              className="h-11 w-auto object-contain"
            />
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              {SITE_NAME} — commercial contract window cleaning for
              restaurants, retailers, and multi-location businesses across the
              Twin Cities since 1978.
            </p>
          </div>

          <div>
            <p className="font-semibold">Quick Links</p>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold">Services</p>
            <ul className="mt-4 space-y-2">
              {FOOTER_SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold">Contact</p>
            <address className="mt-4 space-y-2 text-sm not-italic text-white/70">
              <p>{ADDRESS.full}</p>
              <p>
                <a
                  href={PHONE_HREF}
                  className="font-semibold text-white transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark"
                >
                  {PHONE}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p>
            © {year} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
