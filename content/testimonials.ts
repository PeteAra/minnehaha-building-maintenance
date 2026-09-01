export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "As a property management company overseeing multiple retail locations, we need vendors who show up on schedule at every site. MBM has been dependable for years — professional, insured, and easy to coordinate across our portfolio.",
    name: "Facilities Director",
    role: "Twin Cities Property Management",
    rating: 5,
  },
  {
    id: "2",
    quote:
      "We've used Minnehaha Building Maintenance for our restaurant storefronts for years. Their contract pricing is fair, the crews are professional, and our locations always look ready for customers.",
    name: "Regional Operations Manager",
    role: "Multi-Location Restaurant Group",
    rating: 5,
  },
  {
    id: "3",
    quote:
      "MBM handles our ground-level window cleaning on a bi-weekly contract. Consistent quality, no surprises on billing, and they understand what retail properties need to stay presentable.",
    name: "Facilities Manager",
    role: "Shopping Center, Minneapolis Metro",
    rating: 5,
  },
];
