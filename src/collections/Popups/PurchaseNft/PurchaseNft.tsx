import { useWalletConnected } from "hooks";
import React, { RefObject, useState } from "react";
import { HTMLDivProps } from "types";
import * as S from "./elements";

interface IPurchaseNftProps extends HTMLDivProps {
  popupOpened: boolean;
  togglePopup: (state: boolean) => () => void;
  ref?: RefObject<HTMLDivElement>;
}

export const PurchaseNft: React.FC<IPurchaseNftProps> = ({
  popupOpened,
  togglePopup,
  ...props
}) => {
  const [purchaseSubmited, setPurchaseSubmited] = useState<boolean>(false);

  const submitPurchase = () => {
    setPurchaseSubmited(true);
  };

  return (
    <>
      <S.Popup popupOpened={popupOpened} togglePopup={togglePopup(false)} />
      <S.Container {...props}>
        {purchaseSubmited ? (
          <S.SubmitedContainer>
            <S.SuccessTitle>Purchase successful</S.SuccessTitle>
            <S.Message>You successfully bought/sell NFT you can check your</S.Message>
            <S.TransactionLinkContainer href={"https://polygonscan.com/"}>
              transaction on Polyscan
              <S.NewWindowIcon content='\f08e' font='--fa-font-solid' />
            </S.TransactionLinkContainer>
            <S.ButtonsContainer>
              <S.Button onClick={togglePopup(false)}>Cancel</S.Button>
            </S.ButtonsContainer>
          </S.SubmitedContainer>
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
              <S.Button onClick={togglePopup(false)}>Cancel</S.Button>
              <S.BuyNowButton onClick={submitPurchase}>Buy Now</S.BuyNowButton>
            </S.ButtonsContainer>
          </S.NotSubmitedContainer>
        )}
      </S.Container>
    </>
  );
};
