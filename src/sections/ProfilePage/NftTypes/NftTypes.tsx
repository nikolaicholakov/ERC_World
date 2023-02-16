import { CreatedNftCard, OnSaleCard } from "collections";
import React, { RefObject, useState } from "react";
import { HTMLSectionProps, IOnSaleCard } from "types";
import * as S from "./elements";

interface INftTypesProps extends HTMLSectionProps {
  ref?: RefObject<HTMLDivElement>;
}

const cards: IOnSaleCard[] = [
  {
    collectionName: "Collection Name",
    image: { src: "/imgs/nft1.png", width: 228, height: 220 },
    nftName: "NFT Name #020",
    price: 0.005
  },
  {
    collectionName: "Collection Name",
    image: { src: "/imgs/nft2.png", width: 228, height: 220 },
    nftName: "NFT Name #020",
    price: 0.005
  },
  {
    collectionName: "Collection Name",
    image: { src: "/imgs/nft3.png", width: 228, height: 220 },
    nftName: "NFT Name #020",
    price: 0.005
  },
  {
    collectionName: "Collection Name",
    image: { src: "/imgs/nft1.png", width: 228, height: 220 },
    nftName: "NFT Name #020",
    price: 0.005
  },
  {
    collectionName: "Collection Name",
    image: { src: "/imgs/nft2.png", width: 228, height: 220 },
    nftName: "NFT Name #020",
    price: 0.005
  },
  {
    collectionName: "Collection Name",
    image: { src: "/imgs/nft3.png", width: 228, height: 220 },
    nftName: "NFT Name #020",
    price: 0.005
  },
  {
    collectionName: "Collection Name",
    image: { src: "/imgs/nft1.png", width: 228, height: 220 },
    nftName: "NFT Name #020",
    price: 0.005
  },
  {
    collectionName: "Collection Name",
    image: { src: "/imgs/nft2.png", width: 228, height: 220 },
    nftName: "NFT Name #020",
    price: 0.005
  },
  {
    collectionName: "Collection Name",
    image: { src: "/imgs/nft3.png", width: 228, height: 220 },
    nftName: "NFT Name #020",
    price: 0.005
  },
  {
    collectionName: "Collection Name",
    image: { src: "/imgs/nft1.png", width: 228, height: 220 },
    nftName: "NFT Name #020",
    price: 0.005
  },
  {
    collectionName: "Collection Name",
    image: { src: "/imgs/nft2.png", width: 228, height: 220 },
    nftName: "NFT Name #020",
    price: 0.005
  },
  {
    collectionName: "Collection Name",
    image: { src: "/imgs/nft3.png", width: 228, height: 220 },
    nftName: "NFT Name #020",
    price: 0.005
  }
];

export type TCurrentTab =
  | "all"
  | "created"
  | "onSale"
  | "auction"
  | "transfered"
  | "purchases"
  | "favorites";

export const NftTypes: React.FC<INftTypesProps> = ({ ...props }) => {
  const [currentTab, setCurrentTab] = useState<TCurrentTab>("onSale");

  const handleChangeTab = (tab: TCurrentTab) => () => {
    setCurrentTab(tab);
  };

  const CardTypes = {
    all: OnSaleCard,
    created: CreatedNftCard,
    onSale: OnSaleCard,
    auction: OnSaleCard,
    transfered: OnSaleCard,
    purchases: OnSaleCard,
    favorites: OnSaleCard
  };

  return (
    <S.Container {...props}>
      <S.TypesContainer>
        <S.Type active={currentTab === "all"} onClick={handleChangeTab("all")}>
          <S.Text>All NFTs</S.Text>
          <S.NumberSpan>44</S.NumberSpan>
        </S.Type>
        <S.Type active={currentTab === "created"} onClick={handleChangeTab("created")}>
          <S.Text>Created</S.Text>
          <S.NumberSpan>2</S.NumberSpan>
        </S.Type>
        <S.Type active={currentTab === "onSale"} onClick={handleChangeTab("onSale")}>
          <S.Text>On Sale</S.Text>
          <S.NumberSpan>2</S.NumberSpan>
        </S.Type>
        <S.Type active={currentTab === "auction"} onClick={handleChangeTab("auction")}>
          <S.Text>Auction</S.Text>
          <S.NumberSpan>2</S.NumberSpan>
        </S.Type>
        <S.Type active={currentTab === "transfered"} onClick={handleChangeTab("transfered")}>
          <S.Text>Transfered</S.Text>
        </S.Type>
        <S.Type active={currentTab === "purchases"} onClick={handleChangeTab("purchases")}>
          <S.Text>Purchases</S.Text>
          <S.NumberSpan>2</S.NumberSpan>
        </S.Type>
        <S.Type active={currentTab === "favorites"} onClick={handleChangeTab("favorites")}>
          <S.Text>Favorites</S.Text>
          <S.NumberSpan>2</S.NumberSpan>
        </S.Type>
      </S.TypesContainer>
      <S.NftCardsContainer>
        <S.ContainerHeader>
          <S.Heading>{currentTab.split("-").join(" ")}</S.Heading>
        </S.ContainerHeader>
        <S.NftsContainer>
          {cards.map((card, i) => {
            const Card = CardTypes[currentTab];
            return <Card key={"card" + i} {...card} />;
          })}
        </S.NftsContainer>
      </S.NftCardsContainer>
    </S.Container>
  );
};
