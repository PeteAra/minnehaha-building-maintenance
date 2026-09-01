import {
  BadgeCheck,
  Clock,
  DollarSign,
  Shield,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";

export type Benefit = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const whyChooseUs: Benefit[] = [
  {
    id: "experience",
    title: "Since 1978",
    description:
      "Nearly five decades serving Twin Cities restaurants, retailers, and commercial properties with dependable contract cleaning.",
    icon: Clock,
  },
  {
    id: "chains",
    title: "Built for Multi-Location Accounts",
    description:
      "We understand what facilities teams and franchise operators need — consistent quality, reliable scheduling, and straightforward billing across every site.",
    icon: Users,
  },
  {
    id: "insured",
    title: "Fully Insured",
    description:
      "Liability insurance protects your business against loss and damages. All work is guaranteed.",
    icon: Shield,
  },
  {
    id: "value",
    title: "Contract Savings",
    description:
      "Pre-scheduled repeat services and volume pricing deliver substantial savings for chain and multi-location accounts.",
    icon: DollarSign,
  },
  {
    id: "quality",
    title: "Ground-Level Expertise",
    description:
      "We specialize in storefront and entrance glass — the customer-facing work restaurants, grocers, and retailers depend on.",
    icon: Sparkles,
  },
  {
    id: "reliable",
    title: "Dependable Service",
    description:
      "Pre-scheduled service, automated billing, and emergency availability when your business needs it most.",
    icon: BadgeCheck,
  },
];

export const companyValues = [
  {
    id: "reliability",
    title: "Reliability",
    description:
      "We show up on schedule at every location. Your facilities team can count on MBM across your entire portfolio.",
  },
  {
    id: "quality",
    title: "Quality",
    description:
      "Industry-leading techniques and equipment keep storefronts and entrances meeting the standards your brand demands.",
  },
  {
    id: "value",
    title: "Value",
    description:
      "Fair, transparent contract pricing with volume discounts that make sense for multi-location operators.",
  },
] as const;
