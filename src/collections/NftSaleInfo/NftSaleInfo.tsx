import React, { RefObject, useState } from "react";
import { HTMLDivProps } from "types";
import * as S from "./elements";

interface INftSaleInfoProps extends HTMLDivProps {
  saleBy: "user" | "administrator";
  ref?: RefObject<HTMLDivElement>;
}

export const NftSaleInfo: React.FC<INftSaleInfoProps> = ({ saleBy, ...props }) => {
  const [purchasePopupOpened, setPurchasePopupOpened] = useState<boolean>(false);
  const [makeOfferPopupOpened, setMakeOfferPopupOpened] = useState<boolean>(false);

  const togglePurchasePopup = (state: boolean) => () => {
    setPurchasePopupOpened(state);
    document.body.style.overflow = state ? "hidden" : "auto";
  };

  const toggleMakeOfferPopup = (state: boolean) => () => {
    setMakeOfferPopupOpened(state);
    document.body.style.overflow = state ? "hidden" : "auto";
  };

  return (
    <S.InfoContainer {...props}>
      <S.FirstRow>
        <S.LeftSide>
          <S.SaleByLabel saleBy={saleBy}>Sale By {saleBy}</S.SaleByLabel>
          <S.NftName>Listed NFT Name</S.NftName>
          <S.AvailablesContainer>
            <S.AvailableText>Available:</S.AvailableText>
            <S.AvailableNumber>22/100</S.AvailableNumber>
          </S.AvailablesContainer>
        </S.LeftSide>
        <S.SocialsContainer>
          <S.ShareButton content='\f1e0' font='--fa-font-solid' />
          <S.LikesButton>123</S.LikesButton>
        </S.SocialsContainer>
      </S.FirstRow>
      <S.SecondRow>
        <S.Creator type='creator' />
        <S.Collection type='collection' />
      </S.SecondRow>
      <S.Row>
        <S.DescriptionHeading>Description</S.DescriptionHeading>
        <S.Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit eget commodo metus
          tincidunt turpis vulputate odio ornare. Urna sed turpis sit vulputate sollicitudin est
          tortor ut. Nibh elementum massa at lectus. Nunc porttitor sed nibh amet purus suspendisse.
          Dui elementum dui fusce nibh odio ultrices habitant. Lorem felis, tristique cursus id
          risus nec. Nunc sed ut duis nisi, velit, donec. Hac sem cursus est bibendum vulputate amet
          ultrices risus massa.
        </S.Description>
        <S.Wrapper>
          <S.RegularText>Royalty: </S.RegularText>
          <S.BoldText> 1.75%</S.BoldText>
        </S.Wrapper>
        {saleBy === "administrator" && (
          <S.Wrapper>
            <S.RegularText>Items Available: </S.RegularText>
            <S.BoldText> 22</S.BoldText>
          </S.Wrapper>
        )}
      </S.Row>
      {saleBy === "user" && (
        <S.AuctionInfo>
          <S.LightSpan>Auction ends in:</S.LightSpan>
          <S.NumberSpan>21</S.NumberSpan>
          <S.LightSpan>days</S.LightSpan>
          <S.NumberSpan>02</S.NumberSpan>
          <S.LightSpan>hours</S.LightSpan>
          <S.NumberSpan>24</S.NumberSpan>
          <S.LightSpan>min</S.LightSpan>
          <S.NumberSpan>32</S.NumberSpan>
          <S.LightSpan>sec</S.LightSpan>
        </S.AuctionInfo>
      )}
      <S.LastRow>
        <S.SellerInfo />
        <S.ActionsContainer>
          <S.AddToCart />
          {saleBy === "user" && (
            <S.MakeOfferButton onClick={toggleMakeOfferPopup(true)}>
              Make an Offer
            </S.MakeOfferButton>
          )}

          {makeOfferPopupOpened && (
            <S.MakeAnOfferPopup
              popupOpened={makeOfferPopupOpened}
              togglePopup={toggleMakeOfferPopup}
            />
          )}
          <S.BuyButton saleBy={saleBy} onClick={togglePurchasePopup(true)}>
            Buy now
          </S.BuyButton>
          {purchasePopupOpened && (
            <S.PurchaseNftPopup
              popupOpened={purchasePopupOpened}
              togglePopup={togglePurchasePopup}
            />
          )}
        </S.ActionsContainer>
      </S.LastRow>
    </S.InfoContainer>
  );
};
