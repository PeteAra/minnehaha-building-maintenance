export type Stat = {
  id: string;
  value: number;
  suffix: string;
  label: string;
};

export const companyStats: Stat[] = [
  {
    id: "years",
    value: 48,
    suffix: "+",
    label: "Years Serving Twin Cities Businesses",
  },
  {
    id: "clients",
    value: 500,
    suffix: "+",
    label: "Commercial Contract Accounts",
  },
  {
    id: "insured",
    value: 100,
    suffix: "%",
    label: "Insured & Guaranteed Work",
  },
  {
    id: "communities",
    value: 200,
    suffix: "+",
    label: "Communities Served Across the Region",
  },
];
