import React, { RefObject } from "react";
import { ITrendingCollectionsSwiperCard } from "types";
import * as S from "./elements";

interface ITrendingCollectionsProps {
  ref?: RefObject<HTMLDivElement>;
}

const swiperCards: ITrendingCollectionsSwiperCard[] = [
  {
    image: { src: "/imgs/nft1.png", width: 120, height: 120 },
    name: "Collection Name",
    floor: 0.01,
    volume: 729
  },
  {
    image: { src: "/imgs/nft2.png", width: 120, height: 120 },
    name: "Collection Name",
    floor: 0.31,
    volume: 7123
  },
  {
    image: { src: "/imgs/nft3.png", width: 120, height: 120 },
    name: "Collection Name",
    floor: 1.31,
    volume: 413
  },
  {
    image: { src: "/imgs/nft1.png", width: 120, height: 120 },
    name: "Collection Name",
    floor: 0.01,
    volume: 729
  },
  {
    image: { src: "/imgs/nft2.png", width: 120, height: 120 },
    name: "Collection Name",
    floor: 0.31,
    volume: 7123
  },
  {
    image: { src: "/imgs/nft3.png", width: 120, height: 120 },
    name: "Collection Name",
    floor: 1.31,
    volume: 413
  },
  {
    image: { src: "/imgs/nft1.png", width: 120, height: 120 },
    name: "Collection Name",
    floor: 0.01,
    volume: 729
  },
  {
    image: { src: "/imgs/nft2.png", width: 120, height: 120 },
    name: "Collection Name",
    floor: 0.31,
    volume: 7123
  },
  {
    image: { src: "/imgs/nft3.png", width: 120, height: 120 },
    name: "Collection Name",
    floor: 1.31,
    volume: 413
  },
  {
    image: { src: "/imgs/nft1.png", width: 120, height: 120 },
    name: "Collection Name",
    floor: 0.01,
    volume: 729
  },
  {
    image: { src: "/imgs/nft2.png", width: 120, height: 120 },
    name: "Collection Name",
    floor: 0.31,
    volume: 7123
  },
  {
    image: { src: "/imgs/nft3.png", width: 120, height: 120 },
    name: "Collection Name",
    floor: 1.31,
    volume: 413
  }
];

export const TrendingCollections: React.FC<ITrendingCollectionsProps> = ({ ...props }) => {
  return (
    <S.Container {...props}>
      <S.SectionHeading>Trending Collections</S.SectionHeading>
      <S.Swiper swiperCards={swiperCards} />
    </S.Container>
  );
};
