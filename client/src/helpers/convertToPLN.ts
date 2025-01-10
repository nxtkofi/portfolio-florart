type convertToPLNType = (price: number) => string;
export const convertToPLN: convertToPLNType = (price: number): string => {
  return new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
  }).format(price);
};
