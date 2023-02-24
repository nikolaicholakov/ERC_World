import { boolean, number, object, string } from "yup";

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

export const editProfileSchema = object({
  profileImage: string().notRequired(),
  backgroundImage: string().notRequired(),
  email: string().notRequired(),
  twoFactorAuth: boolean().notRequired(),
  userName: string().notRequired(),
  bio: string().notRequired()
});

export const createNftSchema = object({
  image: string().required(),
  nftName: string().required(),
  description: string().required(),
  royalty: number().required(),
  putOnMarket: boolean().required(),
  price: number().notRequired(),
  amountOfCopies: number().notRequired(),
  amountToSell: number().notRequired()
});
