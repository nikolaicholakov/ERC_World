import React, { RefObject } from "react";
import { IExploreNftCard } from "types";
import * as S from "./elements";

interface IExploreProps {
  ref?: RefObject<HTMLDivElement>;
}

const cards: IExploreNftCard[] = [
  {
    image: { src: "/imgs/nft1.png", width: 228, height: 220 },
    collectionName: "Collection Name",
    nftName: "NTF Name #020",
    nftsAvailable: "12/1000",
    price: 10
  },
  {
    image: { src: "/imgs/nft2.png", width: 228, height: 220 },
    collectionName: "Collection Name",
    nftName: "NTF Name #020",
    nftsAvailable: "12/1000",
    price: 10
  },
  {
    image: { src: "/imgs/nft1.png", width: 228, height: 220 },
    collectionName: "Collection Name",
    nftName: "NTF Name #020",
    nftsAvailable: "12/1000",
    price: 10
  },
  {
    image: { src: "/imgs/nft2.png", width: 228, height: 220 },
    collectionName: "Collection Name",
    nftName: "NTF Name #020",
    nftsAvailable: "12/1000",
    price: 10
  },
  {
    image: { src: "/imgs/nft1.png", width: 228, height: 220 },
    collectionName: "Collection Name",
    nftName: "NTF Name #020",
    nftsAvailable: "12/1000",
    price: 0.11
  },
  {
    image: { src: "/imgs/nft2.png", width: 228, height: 220 },
    collectionName: "Collection Name",
    nftName: "NTF Name #020",
    nftsAvailable: "12/1000",
    price: 113.0
  },
  {
    image: { src: "/imgs/nft1.png", width: 228, height: 220 },
    collectionName: "Collection Name",
    nftName: "NTF Name #020",
    nftsAvailable: "12/1000",
    price: 10
  },
  {
    image: { src: "/imgs/nft2.png", width: 228, height: 220 },
    collectionName: "Collection Name",
    nftName: "NTF Name #020",
    nftsAvailable: "12/1000",
    price: 10
  }
];

export const Explore: React.FC<IExploreProps> = ({ ...props }) => {
  return (
    <S.Container {...props}>
      <S.SectionHeading>Explore</S.SectionHeading>
      <S.CardsContainer>
        {cards.map((card, i) => (
          <S.ExploreCard key={"exploreCard" + i} {...card} />
        ))}
      </S.CardsContainer>
      <S.LoadMore />
    </S.Container>
  );
};
