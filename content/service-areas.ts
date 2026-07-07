export const minneapolisAreas = [
  "Minneapolis",
  "Bloomington",
  "Edina",
  "Richfield",
  "St. Louis Park",
  "Golden Valley",
  "Plymouth",
  "Maple Grove",
  "Brooklyn Park",
  "Minnetonka",
  "Eden Prairie",
  "Hopkins",
] as const;

export const stPaulAreas = [
  "St. Paul",
  "Mendota Heights",
  "Eagan",
  "Woodbury",
  "Maplewood",
  "Roseville",
  "Inver Grove Heights",
  "Cottage Grove",
  "Oakdale",
  "Stillwater",
  "West St. Paul",
  "South St. Paul",
] as const;

export const allServiceAreas = [...minneapolisAreas, ...stPaulAreas];
