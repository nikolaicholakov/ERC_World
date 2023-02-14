import { number, object, string } from "yup";

export const helloSchema = object({
  userName: string().required("User Name field is required.")
});

export const sellNftSchema = object({
  price: number().required("Price is required")
});

export const makeAnOfferSchema = object({
  offerPrice: number().required("Price is required")
});

export const auctionSellNftSchema = object({
  startPrice: number().required("Price is required"),
  minimumSteps: number().required("Price is required"),
  startData: number().required("Price is required"),
  duration: number().required("Price is required"),
  buyNowPrice: number().required("Price is required")
});
