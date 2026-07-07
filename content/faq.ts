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
    question: "Do you offer commercial window cleaning contracts?",
    answer:
      "Yes. We specialize in weekly, bi-weekly, and monthly contract window cleaning for commercial properties. Contract customers receive substantial savings on pre-scheduled repeat services.",
  },
  {
    id: "residential",
    question: "Do you clean residential windows?",
    answer:
      "Absolutely. We provide residential window cleaning for homes across the Twin Cities with free estimates and flexible scheduling.",
  },
  {
    id: "insured",
    question: "Are you licensed and insured?",
    answer:
      "Yes. Minnehaha Building Maintenance Inc. carries liability insurance to protect you against loss and damages. All work is guaranteed.",
  },
  {
    id: "estimate",
    question: "How do I get a free estimate?",
    answer:
      "Call us at 612-332-1916 or fill out our contact form. We provide fast, friendly, and free estimates for all services.",
  },
  {
    id: "emergency",
    question: "Do you offer emergency cleaning services?",
    answer:
      "Yes. We are equipped to provide emergency cleaning on short notice for both commercial and residential clients.",
  },
];

export const servicesFaqs: FAQItem[] = [
  {
    id: "frequency",
    question: "How often should commercial windows be cleaned?",
    answer:
      "Most commercial properties benefit from weekly, bi-weekly, or monthly service depending on foot traffic, location, and visibility. We help you choose the right schedule.",
  },
  {
    id: "products",
    question: "What cleaning products do you use?",
    answer:
      "We use professional-grade, industry-approved cleaning products and equipment. MBM constantly researches and upgrades its products and service techniques.",
  },
  {
    id: "billing",
    question: "How does billing work for contract customers?",
    answer:
      "Contract customers enjoy convenient, automated billing with pre-scheduled service. You receive discounts on repeat services and cleaning product purchases.",
  },
  {
    id: "high-rise",
    question: "Can you clean multi-story buildings?",
    answer:
      "Yes. Our industrial-quality equipment and trained professionals handle multi-story commercial buildings throughout the metro area.",
  },
];
