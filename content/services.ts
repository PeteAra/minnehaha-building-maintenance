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
};

export const primaryServices: Service[] = [
  {
    id: "commercial-window-cleaning",
    title: "Commercial Window Cleaning",
    shortDescription:
      "Weekly, bi-weekly, and monthly contract window cleaning for storefronts, offices, and commercial properties.",
    description:
      "Keep your business looking its best with dependable commercial window cleaning tailored to your schedule. We specialize in contract service for storefronts, restaurants, office buildings, and retail spaces across the Twin Cities.",
    features: [
      "Weekly, bi-weekly, and monthly contracts",
      "Storefront and high-rise capabilities",
      "Pre-scheduled service with automated billing",
      "Emergency cleaning available on short notice",
      "Volume pricing for repeat customers",
    ],
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    id: "residential-window-cleaning",
    title: "Residential Window Cleaning",
    shortDescription:
      "Crystal-clear windows for homes across Minneapolis, St. Paul, and surrounding suburbs.",
    description:
      "Enjoy spotless windows without the hassle. Our trained professionals use industry-leading equipment and eco-friendly products to deliver streak-free results for homeowners throughout the metro area.",
    features: [
      "Interior and exterior window cleaning",
      "Screen cleaning available",
      "One-time or recurring service",
      "Free friendly estimates",
      "Fully insured technicians",
    ],
    icon: Home,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    id: "building-maintenance",
    title: "Building Maintenance",
    shortDescription:
      "Comprehensive exterior and interior maintenance to protect and enhance your property.",
    description:
      "Beyond windows, MBM provides a full range of building maintenance services to keep your property clean, safe, and professional. From pressure washing to gutter care, we handle it all.",
    features: [
      "Pressure washing",
      "Gutter cleaning and repair",
      "Awning cleaning and repair",
      "Construction cleanup",
      "Dusting and emergency cleaning",
    ],
    icon: Hammer,
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
];

export const secondaryServices = [
  { title: "Pressure Washing", icon: Droplets },
  { title: "Gutter Cleaning & Repair", icon: Wind },
  { title: "Awning Cleaning & Repair", icon: Sparkles },
  { title: "Construction Cleanup", icon: Hammer },
  { title: "Dusting", icon: Sparkles },
  { title: "Emergency Cleaning", icon: Building2 },
] as const;

export const contractBenefits = [
  "Substantial savings on pre-scheduled, repeat services",
  "Volume-purchased products and equipment reduce costs",
  "Contract customers receive discounts on cleaning products",
  "Industrial-quality equipment for cost-effective results",
  "Liability insurance protects you against loss and damages",
  "All work is guaranteed to protect your investment",
  "Services completed regularly, properly, and cost-effectively",
] as const;
