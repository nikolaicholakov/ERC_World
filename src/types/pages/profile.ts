import { ImageProps } from "next/image";
import { IExploreNftCard } from "types/helpers";

export interface IOnSaleCard extends Omit<IExploreNftCard, "nftsAvailable"> {}

export interface IFollowerCard {
  image: string;
  name: string;
  relationship: "following" | "not-following";
}

export interface ICreatedNftCard {
  // image: string;
  image: ImageProps;
  collectionName: string;
  nftName: string;
  // using price so i dont use another exampleCards data object
  price: number;
}

export interface ICartCard {
  image: string;
  collectionName: string;
  nftName: string;
  priceInCrypto: number;
  priceInDollars: number;
}
