import {
  Building2,
  ShoppingBag,
  ShoppingCart,
  Store,
  Users,
  UtensilsCrossed,
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
    id: "restaurants",
    title: "Restaurants",
    description:
      "Keep every location looking sharp with consistent ground-level window cleaning for national and regional restaurant brands, franchise groups, and multi-unit operators.",
    icon: UtensilsCrossed,
  },
  {
    id: "grocery-retail",
    title: "Grocery & Retail Chains",
    description:
      "Crystal-clear storefront glass for supermarkets, big-box retailers, and chain stores where curb appeal drives foot traffic and brand perception.",
    icon: ShoppingCart,
  },
  {
    id: "shopping-centers",
    title: "Shopping Centers & Malls",
    description:
      "Dependable contract service for mall properties, strip centers, and retail complexes with high-visibility entrances and storefronts.",
    icon: ShoppingBag,
  },
  {
    id: "property-management",
    title: "Property Management",
    description:
      "A single trusted vendor for facilities teams managing multiple commercial properties — consistent quality, scheduling, and consolidated billing with simple paperwork across every site.",
    icon: Users,
  },
  {
    id: "franchise-operators",
    title: "Franchise & Multi-Location Operators",
    description:
      "One partner for all your locations. Pre-scheduled contract cleaning that keeps every storefront meeting brand standards without the hassle.",
    icon: Store,
  },
  {
    id: "retail-storefronts",
    title: "Retail Storefronts",
    description:
      "Ground-level window and exterior cleaning for standalone retail locations, restaurant outposts, and customer-facing commercial entrances.",
    icon: Building2,
  },
];
