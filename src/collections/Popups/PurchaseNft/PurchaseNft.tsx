import React, { RefObject, useState } from "react";
import { HTMLDivProps } from "types";
import * as S from "./elements";

interface PurchaseNftProps extends HTMLDivProps {
  popupOpened: boolean;
  togglePopup: (state: boolean) => () => void;
  ref?: RefObject<HTMLDivElement>;
}

export const PurchaseNft: React.FC<PurchaseNftProps> = ({ popupOpened, togglePopup, ...props }) => {
  const [purchaseSubmited, setPurchaseSubmited] = useState<boolean>(false);

  const submitPurchase = () => {
    setPurchaseSubmited(true);
  };

  return (
    <>
      <S.Popup popupOpened={popupOpened} togglePopup={togglePopup(false)} />
      <S.Container {...props}>
        {purchaseSubmited ? (
          <S.PurchaseSubmitedPopup togglePopup={togglePopup} />
        ) : (
          <S.NotSubmitedContainer>
            <S.NftInfoContainer>
              <S.Title>Purchase NFT</S.Title>
              <S.NftInfo>
                <S.InfoBlock>
                  <S.NftName>Listed NFT Name</S.NftName>
                  <S.PriceInCrypto>0.99 MATIC</S.PriceInCrypto>
                  <S.PriceInDollars>$7.82</S.PriceInDollars>
                </S.InfoBlock>
                <S.ImgContainer>
                  <S.Image src={"/imgs/nft2.png"} layout='fill' />
                </S.ImgContainer>
              </S.NftInfo>
            </S.NftInfoContainer>
            <S.BalanceContainer>
              <S.Span>Balance</S.Span>
              <S.CryptoBalance>20 MATIC</S.CryptoBalance>
            </S.BalanceContainer>
            <S.ButtonsContainer>
              <S.CancelButton onClick={togglePopup(false)}>Cancel</S.CancelButton>
              <S.BuyNowButton onClick={submitPurchase}>Buy Now</S.BuyNowButton>
            </S.ButtonsContainer>
          </S.NotSubmitedContainer>
        )}
      </S.Container>
    </>
  );
};
