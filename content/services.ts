import {
  Building2,
  Droplets,
  Hammer,
  Home,
  type LucideIcon,
  Sparkles,
  Wind,
} from "lucide-react";

export type Service = {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  image: string;
  featured?: boolean;
};

export const primaryServices: Service[] = [
  {
    id: "commercial-window-cleaning",
    title: "Commercial Window Cleaning",
    shortDescription:
      "Contract window cleaning for restaurants, retail chains, malls, and multi-location businesses — weekly, bi-weekly, or monthly.",
    description:
      "MBM specializes in ground-level commercial window cleaning for customer-facing businesses across the Twin Cities. We serve chain restaurants, grocery retailers, shopping centers, and franchise operators who need dependable, consistent results at every location.",
    features: [
      "Weekly, bi-weekly, and monthly contracts",
      "Ground-level storefront and entrance glass",
      "Multi-location and chain account programs",
      "Pre-scheduled service with automated billing",
      "Volume pricing for repeat contract customers",
    ],
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1604719312566-8912b0b922cb?w=800&q=80",
    featured: true,
  },
  {
    id: "building-maintenance",
    title: "Building Maintenance",
    shortDescription:
      "Storefront exterior maintenance — pressure washing, awnings, gutters, and more to keep your business looking professional.",
    description:
      "Beyond windows, MBM keeps commercial storefronts and ground-level exteriors clean and well-maintained. From pressure washing entryways to awning and gutter care, we help restaurants, retailers, and mall tenants make the right first impression.",
    features: [
      "Storefront pressure washing",
      "Awning cleaning and repair",
      "Gutter cleaning and repair",
      "Construction cleanup",
      "Emergency exterior cleaning",
    ],
    icon: Hammer,
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    featured: true,
  },
  {
    id: "residential-window-cleaning",
    title: "Residential Window Cleaning",
    shortDescription:
      "Also available for homeowners. Commercial contract accounts are our primary focus.",
    description:
      "While our primary business is commercial contract cleaning for restaurants, retailers, and multi-location operators, we also offer residential window cleaning for homeowners in the Twin Cities metro. Contact us to inquire about availability.",
    features: [
      "Interior and exterior window cleaning",
      "Screen cleaning available",
      "Subject to scheduling availability",
      "Fully insured technicians",
    ],
    icon: Home,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    featured: false,
  },
];

export const featuredServices = primaryServices.filter((s) => s.featured);

export const secondaryServices = [
  { title: "Pressure Washing", icon: Droplets },
  { title: "Gutter Cleaning & Repair", icon: Wind },
  { title: "Awning Cleaning & Repair", icon: Sparkles },
  { title: "Construction Cleanup", icon: Hammer },
  { title: "Storefront Dusting", icon: Sparkles },
  { title: "Emergency Cleaning", icon: Building2 },
] as const;

export const contractBenefits = [
  "Substantial savings on pre-scheduled, repeat services",
  "Volume-purchased products and equipment reduce costs",
  "Contract customers receive discounts on cleaning products",
  "Industrial-quality equipment for cost-effective results",
  "Liability insurance protects you against loss and damages",
  "All work is guaranteed to protect your investment",
  "Consistent results across every location in your portfolio",
] as const;
