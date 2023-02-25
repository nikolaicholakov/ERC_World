import React, { RefObject, useState } from "react";
import { HTMLDivProps, ICartCard } from "types";
import * as S from "./elements";

interface CartPopupProps extends HTMLDivProps {
  popupOpened: boolean;
  togglePopup: (state: boolean) => () => void;
  ref?: RefObject<HTMLDivElement>;
}

export const exampleCartItems: ICartCard[] = [
  {
    image: "/imgs/nft1.png",
    collectionName: "Collection Name",
    nftName: "NFT Name #020",
    priceInCrypto: 1.99,
    priceInDollars: 7.83
  },
  {
    image: "/imgs/nft2.png",
    collectionName: "Collection Name",
    nftName: "NFT Name #020",
    priceInCrypto: 1.99,
    priceInDollars: 7.83
  },
  {
    image: "/imgs/nft3.png",
    collectionName: "Collection Name",
    nftName: "NFT Name #020",
    priceInCrypto: 1.99,
    priceInDollars: 7.83
  },
  {
    image: "/imgs/nft1.png",
    collectionName: "Collection Name",
    nftName: "NFT Name #020",
    priceInCrypto: 1.99,
    priceInDollars: 7.83
  },
  {
    image: "/imgs/nft2.png",
    collectionName: "Collection Name",
    nftName: "NFT Name #020",
    priceInCrypto: 1.99,
    priceInDollars: 7.83
  },
  {
    image: "/imgs/nft3.png",
    collectionName: "Collection Name",
    nftName: "NFT Name #020",
    priceInCrypto: 1.99,
    priceInDollars: 7.83
  }
];

export const CartPopup: React.FC<CartPopupProps> = ({ popupOpened, togglePopup, ...props }) => {
  return (
    <>
      <S.Popup popupOpened={popupOpened} togglePopup={togglePopup(false)} />
      <S.Container {...props}>
        <S.Title>Shopping Cart</S.Title>
        <S.CartItemsContainer>
          {exampleCartItems.map((product, i) => (
            <S.CartProduct key={"cartProduct" + i} {...product} />
          ))}
        </S.CartItemsContainer>
        <S.PriceContainer>
          <S.PriceContainerRow>
            <S.RowType>Item Price (3)</S.RowType>
            <S.RowValue>2.97 MATIC</S.RowValue>
          </S.PriceContainerRow>
          <S.PriceContainerRow>
            <S.RowType>Royalty</S.RowType>
            <S.RowValue>10%</S.RowValue>
          </S.PriceContainerRow>
          <S.PriceContainerRow>
            <S.RowType>Total</S.RowType>
            <S.Wrapper>
              <S.PriceInCrypto>2.97 MATIC</S.PriceInCrypto>
              <S.RowValue>($22.83)</S.RowValue>
            </S.Wrapper>
          </S.PriceContainerRow>
        </S.PriceContainer>
        <S.ButtonsContainer>
          <S.CancelButton onClick={togglePopup(false)}>Cancel</S.CancelButton>
          <S.BuyAllButton onClick={togglePopup(false)}>Buy All</S.BuyAllButton>
        </S.ButtonsContainer>
      </S.Container>
    </>
  );
};
