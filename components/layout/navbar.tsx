"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  LOGO_SRC,
  NAV_LINKS,
  PHONE,
  PHONE_HREF,
  SITE_SHORT_NAME,
} from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Menu, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "./container";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-white/90 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <Container>
        <nav
          className="flex h-20 items-center justify-between"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="relative flex shrink-0 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <Image
              src={LOGO_SRC}
              alt={SITE_SHORT_NAME}
              width={240}
              height={61}
              className={cn(
                "h-12 w-auto object-contain transition-all sm:h-14",
                !scrolled && "brightness-0 invert"
              )}
              priority
            />
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "rounded-lg px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                      scrolled
                        ? isActive
                          ? "text-primary"
                          : "text-muted-foreground hover:text-primary"
                        : isActive
                          ? "text-white"
                          : "text-white/80 hover:text-white"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <Button
              asChild
              size="sm"
              variant={scrolled ? "default" : "outline"}
              className="hidden sm:inline-flex"
            >
              <a href={PHONE_HREF}>
                <Phone className="size-4" aria-hidden="true" />
                {PHONE}
              </a>
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "size-14 shrink-0 [&_svg]:!size-9 lg:hidden",
                    !scrolled && "text-white hover:bg-white/10 hover:text-white"
                  )}
                  aria-label="Open menu"
                >
                  <Menu strokeWidth={2.5} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-sm">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="mt-6 flex flex-col gap-2" aria-label="Mobile navigation">
                  {NAV_LINKS.map((link) => {
                    const isActive =
                      link.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(link.href);
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                          "rounded-xl px-4 py-3 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-foreground hover:bg-muted"
                        )}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                  <Button asChild className="mt-4">
                    <a href={PHONE_HREF}>
                      <Phone className="size-4" aria-hidden="true" />
                      Call {PHONE}
                    </a>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </Container>
    </header>
  );
}
