import { ImageProps } from "next/image";

type KeyTypes<T> = {
  [K in keyof T]-?: K extends string
    ? string
    : K extends number
    ? number
    : K extends symbol
    ? symbol
    : never;
}[keyof T];

/**
 * Fix unexpected behavior of Typescript's `keyof` operator
 * @see https://github.com/microsoft/TypeScript/issues/23724
 */
export type KeyOfType<T, KeyType extends string | number | symbol = KeyTypes<T>> = Extract<
  keyof T,
  KeyType
>;

export interface IFontAwesomeIcon {
  content: string;
  font: string;
}

export interface IHomeHeroSwiperCard {
  image: ImageProps;
  title: string;
  subTitle: string;
}

export interface ITrendingCollectionsSwiperCard {
  image: ImageProps;
  name: string;
  floor: number;
  volume: number;
}

export interface IExploreNftCard {
  image: ImageProps;
  collectionName: string;
  nftName: string;
  nftsAvailable: string | number;
  price: number;
}
