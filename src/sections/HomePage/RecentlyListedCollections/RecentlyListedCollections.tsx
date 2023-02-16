import React, { RefObject } from "react";
import { ITrendingCollectionsSwiperCard } from "types";
import * as S from "./elements";

interface ITrendingCollectionsProps {
  ref?: RefObject<HTMLDivElement>;
}

const swiperCards: Omit<ITrendingCollectionsSwiperCard, "volume">[] = [
  {
    image: { src: "/imgs/nft1.png", width: 120, height: 120 },
    name: "Collection Name",
    floor: 0.01
  },
  {
    image: { src: "/imgs/nft2.png", width: 120, height: 120 },
    name: "Collection Name",
    floor: 0.31
  },
  {
    image: { src: "/imgs/nft3.png", width: 120, height: 120 },
    name: "Collection Name",
    floor: 1.31
  },
  {
    image: { src: "/imgs/nft1.png", width: 120, height: 120 },
    name: "Collection Name",
    floor: 0.01
  },
  {
    image: { src: "/imgs/nft2.png", width: 120, height: 120 },
    name: "Collection Name",
    floor: 0.31
  },
  {
    image: { src: "/imgs/nft3.png", width: 120, height: 120 },
    name: "Collection Name",
    floor: 1.31
  },
  {
    image: { src: "/imgs/nft1.png", width: 120, height: 120 },
    name: "Collection Name",
    floor: 0.01
  },
  {
    image: { src: "/imgs/nft2.png", width: 120, height: 120 },
    name: "Collection Name",
    floor: 0.31
  },
  {
    image: { src: "/imgs/nft3.png", width: 120, height: 120 },
    name: "Collection Name",
    floor: 1.31
  },
  {
    image: { src: "/imgs/nft1.png", width: 120, height: 120 },
    name: "Collection Name",
    floor: 0.01
  },
  {
    image: { src: "/imgs/nft2.png", width: 120, height: 120 },
    name: "Collection Name",
    floor: 0.31
  },
  {
    image: { src: "/imgs/nft3.png", width: 120, height: 120 },
    name: "Collection Name",
    floor: 1.31
  }
];

export const RecentlyListedCollections: React.FC<ITrendingCollectionsProps> = ({ ...props }) => {
  return (
    <S.Container {...props}>
      <S.SectionHeading>Recently Listed Collections</S.SectionHeading>
      <S.Wrapper>
        <S.CardsContainer>
          {swiperCards.map((card, i) => (
            <S.CollectionCard key={"recentlyListedCollection" + i} {...card} />
          ))}
          <S.LoadMoreCard />
        </S.CardsContainer>
        <S.LoadMore />
      </S.Wrapper>
    </S.Container>
  );
};
