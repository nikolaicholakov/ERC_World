import { useWalletConnected } from "hooks";
import React, { RefObject, useState } from "react";
import { HTMLDivProps } from "types";
import * as S from "./elements";

interface IMakeAnOfferProps extends HTMLDivProps {
  popupOpened: boolean;
  togglePopup: (state: boolean) => () => void;
  ref?: RefObject<HTMLDivElement>;
}

export const MakeAnOffer: React.FC<IMakeAnOfferProps> = ({
  popupOpened,
  togglePopup,
  ...props
}) => {
  const [purchaseSubmited, setPurchaseSubmited] = useState<boolean>(false);

  const handleBuyNow = () => {
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
              <S.Title>Make An Offer</S.Title>
              <S.NftInfo>
                <S.InfoBlock>
                  <S.Text>Current highest bid</S.Text>
                  <S.PriceInCrypto>0.99 MATIC</S.PriceInCrypto>
                  <S.PriceInDollars>$7.82</S.PriceInDollars>
                  <S.BuyNowContainer>
                    <S.BuyNowText>Buy Now Price</S.BuyNowText>
                    <S.BuyNowPrice>20 MATIC</S.BuyNowPrice>
                  </S.BuyNowContainer>
                </S.InfoBlock>
                <S.ImgContainer>
                  <S.Image src={"/imgs/nft2.png"} layout='fill' />
                </S.ImgContainer>
              </S.NftInfo>
            </S.NftInfoContainer>
            <S.OfferContainer>
              <S.OfferTitle>Offer Price</S.OfferTitle>
            </S.OfferContainer>
            <S.BalanceContainer>
              <S.Span>Balance</S.Span>
              <S.CryptoBalance>20 MATIC</S.CryptoBalance>
            </S.BalanceContainer>
            <S.BalanceContainer>
              <S.Span>Amount to pay</S.Span>
              <S.AmountToPayContainer>
                <S.AmountToPayCrypto>1.55 MATIC</S.AmountToPayCrypto>
                <S.AmountToPayDollars>($12.12)</S.AmountToPayDollars>
              </S.AmountToPayContainer>
            </S.BalanceContainer>
            <S.OfferButtonsContainer>
              <S.Button onClick={togglePopup(false)}>Cancel</S.Button>
              <S.BuyNowButton onClick={handleBuyNow}>Buy Now</S.BuyNowButton>
              <S.MakeBidButton onClick={togglePopup(false)}>Make Bid</S.MakeBidButton>
            </S.OfferButtonsContainer>
          </S.NotSubmitedContainer>
        )}
      </S.Container>
    </>
  );
};
