export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export const homeFaqs: FAQItem[] = [
  {
    id: "areas",
    question: "What areas do you serve?",
    answer:
      "We serve the Minneapolis metro area and suburbs, as well as the St. Paul metro area and suburbs throughout the Twin Cities region.",
  },
  {
    id: "commercial",
    question: "Do you work with restaurants and retail businesses?",
    answer:
      "Yes. We specialize in contract window cleaning for restaurants, grocery and retail stores, shopping centers, and multi-location operators. Weekly, bi-weekly, and monthly schedules are available.",
  },
  {
    id: "ground-level",
    question: "Do you clean high-rise or multi-story buildings?",
    answer:
      "Our focus is ground-level storefront and entrance glass — the work restaurants, retailers, and mall tenants need most. We do not perform high-rise window cleaning.",
  },
  {
    id: "insured",
    question: "Are you licensed and insured?",
    answer:
      "Yes. Minnehaha Building Maintenance Inc. carries liability insurance to protect you against loss and damages. All work is guaranteed.",
  },
  {
    id: "estimate",
    question: "How do I request a commercial quote?",
    answer:
      "Call us at 612-332-1916 or fill out our contact form. We provide fast, friendly quotes for commercial contract accounts and multi-location properties.",
  },
  {
    id: "billing",
    question: "What billing and payment options do you offer?",
    answer:
      "We offer flexible, set-it-and-forget-it billing designed for commercial accounts — with payment and service options for any budget. That includes recurring auto-pay, consolidated monthly invoicing, per-location billing, and multiple payment methods. We handle the paperwork so your AP team spends less time chasing invoices.",
  },
  {
    id: "paperwork",
    question: "Do you simplify invoicing for multi-location accounts?",
    answer:
      "Yes. We consolidate scheduling and billing across your locations with clear, straightforward invoices. Facilities teams and property managers appreciate that our paperwork is easy to process — set it up once and leave the billing to us.",
  },
  {
    id: "emergency",
    question: "Do you offer emergency cleaning services?",
    answer:
      "Yes. We are equipped to provide emergency exterior cleaning on short notice for commercial clients.",
  },
];

export const servicesFaqs: FAQItem[] = [
  {
    id: "frequency",
    question: "How often should restaurant and retail windows be cleaned?",
    answer:
      "Most restaurants and retail locations benefit from weekly, bi-weekly, or monthly service depending on foot traffic, weather, and brand standards. We help facilities teams choose the right schedule for each location.",
  },
  {
    id: "multi-location",
    question: "Can you service multiple locations under one contract?",
    answer:
      "Yes. We work with property managers, franchise groups, and multi-location operators to provide consistent scheduling, consolidated invoicing, and simple billing across your portfolio.",
  },
  {
    id: "billing",
    question: "How does billing work for contract customers?",
    answer:
      "Contract customers choose from flexible billing options — recurring auto-pay, consolidated monthly invoicing, per-location billing, and more. We keep invoices and paperwork simple so your team can set it up once and forget about it.",
  },
  {
    id: "ground-level",
    question: "What types of buildings do you service?",
    answer:
      "We specialize in ground-level commercial work — restaurant storefronts, grocery and retail entrances, mall tenant spaces, and other customer-facing commercial properties. We do not perform high-rise window cleaning.",
  },
];
