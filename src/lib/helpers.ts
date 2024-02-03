import { product } from "./api/products/types";

export const calculateDiscount = (
  price: number,
  discountPercentage: number
): number => {
  const decimalDiscount = discountPercentage / 100;
  const actualDiscount = price * decimalDiscount;
  return price - actualDiscount;
};

export const calculateTotal = (products: product[]): string => {
  const total: number = products.reduce(
    (prev, currValue) => prev + calculateDiscount(currValue.price, currValue.discountPercentage),
    0
  );
  return total.toFixed(2);
};
