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
    label: "Years of Experience",
  },
  {
    id: "clients",
    value: 500,
    suffix: "+",
    label: "Commercial Clients Served",
  },
  {
    id: "insured",
    value: 100,
    suffix: "%",
    label: "Insured & Guaranteed Work",
  },
  {
    id: "metro",
    value: 2,
    suffix: "",
    label: "Metro Areas Covered",
  },
];
