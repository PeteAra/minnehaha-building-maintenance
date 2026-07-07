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
      "MBM has been cleaning our office building windows for over five years. They are always on time, thorough, and professional. Highly recommend for any commercial property.",
    name: "Property Manager",
    role: "Minneapolis Office Complex",
    rating: 5,
  },
  {
    id: "2",
    quote:
      "We've used Minnehaha Building Maintenance for our restaurant storefront for years. Their contract pricing is fair and the results are consistently excellent.",
    name: "Restaurant Owner",
    role: "St. Paul, MN",
    rating: 5,
  },
  {
    id: "3",
    quote:
      "As a property management company, we need reliable vendors. MBM delivers every time — insured, professional, and easy to work with on billing and scheduling.",
    name: "Facilities Director",
    role: "Twin Cities Property Management",
    rating: 5,
  },
];
