import { PHONE_HREF } from "@/lib/constants";
import { Phone } from "lucide-react";

export function ClickToCall() {
  return (
    <a
      href={PHONE_HREF}
      className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-transform hover:scale-105 hover:bg-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:hidden"
      aria-label="Call us now"
    >
      <Phone className="size-6" aria-hidden="true" />
    </a>
  );
}
