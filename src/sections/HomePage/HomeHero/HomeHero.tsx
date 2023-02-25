import React, { RefObject } from "react";
import { IHomeHeroSwiperCard } from "types";
import * as S from "./elements";

interface HomeHeroProps {
  ref?: RefObject<HTMLDivElement>;
}

const swiperCards: IHomeHeroSwiperCard[] = [
  {
    image: { src: "/imgs/heroSwiper1.png", width: 1080, height: 494 },
    title: "Explore, Collect and Sell NFTs",
    subTitle:
      "NFT Marketplace brings together artists, creators, and crypto enthusiasts on a single platform to create and explore top NFTs"
  },
  {
    image: { src: "/imgs/heroSwiper2.png", width: 1080, height: 494 },
    title: "2 Explore, Collect and Sell NFTs",
    subTitle:
      "NFT Marketplace brings together artists, creators, and crypto enthusiasts on a single platform to create and explore top NFTs"
  },
  {
    image: { src: "/imgs/heroSwiper3.png", width: 1080, height: 494 },
    title: "3 Explore, Collect and Sell NFTs",
    subTitle:
      "NFT Marketplace brings together artists, creators, and crypto enthusiasts on a single platform to create and explore top NFTs"
  }
];

export const HomeHero: React.FC<HomeHeroProps> = ({ ...props }) => {
  return (
    <S.Container {...props}>
      <S.Swiper swiperCards={swiperCards} />
    </S.Container>
  );
};
