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
      "Nearly five decades of trusted service make us the premier window cleaning company in the Twin Cities.",
    icon: Clock,
  },
  {
    id: "trained",
    title: "Trained Professionals",
    description:
      "Our personnel are professionally trained and supervised for consistent, dependable results every visit.",
    icon: Users,
  },
  {
    id: "insured",
    title: "Fully Insured",
    description:
      "Liability insurance protects you against loss and damages. All work is guaranteed.",
    icon: Shield,
  },
  {
    id: "value",
    title: "Contract Savings",
    description:
      "Pre-scheduled repeat services and volume pricing deliver substantial savings for contract customers.",
    icon: DollarSign,
  },
  {
    id: "quality",
    title: "Industry-Leading Quality",
    description:
      "We use proper cleaning products and industrial-quality equipment for superior results.",
    icon: Sparkles,
  },
  {
    id: "reliable",
    title: "Dependable Service",
    description:
      "Pre-scheduled service, automated billing, and emergency availability when you need us most.",
    icon: BadgeCheck,
  },
];

export const companyValues = [
  {
    id: "reliability",
    title: "Reliability",
    description:
      "We show up on schedule, every time. Your property maintenance runs smoothly with MBM.",
  },
  {
    id: "quality",
    title: "Quality",
    description:
      "Industry-leading techniques and equipment ensure your property always looks its best.",
  },
  {
    id: "value",
    title: "Value",
    description:
      "Fair, transparent pricing with contract discounts that protect your bottom line.",
  },
] as const;
