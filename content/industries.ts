import {
  Building2,
  Factory,
  HeartPulse,
  ShoppingBag,
  Store,
  Users,
  type LucideIcon,
} from "lucide-react";

export type Industry = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const industries: Industry[] = [
  {
    id: "office-buildings",
    title: "Office Buildings",
    description:
      "Maintain a polished, professional appearance for tenants and visitors with reliable scheduled window cleaning and building maintenance.",
    icon: Building2,
  },
  {
    id: "property-management",
    title: "Property Management",
    description:
      "Partner with a trusted vendor who delivers consistent quality across multiple properties with flexible contract scheduling.",
    icon: Users,
  },
  {
    id: "medical-facilities",
    title: "Medical Facilities",
    description:
      "Spotless windows and clean exteriors that reflect the high standards of care your patients and staff expect.",
    icon: HeartPulse,
  },
  {
    id: "retail-malls",
    title: "Retail & Malls",
    description:
      "First impressions matter. Keep storefronts and common areas sparkling to attract and retain customers.",
    icon: ShoppingBag,
  },
  {
    id: "industrial",
    title: "Industrial Buildings",
    description:
      "Heavy-duty cleaning solutions for warehouses, manufacturing facilities, and industrial complexes.",
    icon: Factory,
  },
  {
    id: "restaurants",
    title: "Restaurants",
    description:
      "Clean windows and exteriors that showcase your establishment and meet health and safety expectations.",
    icon: Store,
  },
];
