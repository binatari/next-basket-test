import toast from "react-hot-toast";
import { product, productWithQuantity } from "./api/products/types";

export const calculateDiscount = (
  price: number,
  discountPercentage: number
): number => {
  const decimalDiscount = discountPercentage / 100;
  const actualDiscount = price * decimalDiscount;
  return price - actualDiscount;
};

export const calculateTotal = (products: productWithQuantity[]): string => {
  const total: number = products.reduce(
    (prev, currValue) => prev + (calculateDiscount(currValue.price, currValue.discountPercentage) * currValue.quantity),
    0
  );
  return total.toFixed(2);
};

export const notify = (message:string) => toast.success(message);
