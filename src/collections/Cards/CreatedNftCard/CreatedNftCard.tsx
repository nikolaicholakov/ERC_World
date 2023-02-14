import { RefObject, useState } from "react";
import { ICreatedNftCard } from "types";
import * as S from "./elements";
import "swiper/css";

export interface ICreatedNftCardProps extends ICreatedNftCard {
  ref?: RefObject<HTMLDivElement>;
}

export const CreatedNftCard: React.FC<ICreatedNftCardProps> = ({
  collectionName,
  nftName,
  image,
  ...props
}) => {
  const [sellPopupOpened, setSellPopupOpened] = useState<boolean>(false);
  const [auctionSellPopupOpened, setAuctionSellPopupOpened] = useState<boolean>(false);

  const handleSellPopup = (state: boolean) => () => {
    setSellPopupOpened(state);
    document.body.style.overflow = state ? "hidden" : "auto";
  };

  const handleAuctionSellPopup = (state: boolean) => () => {
    setAuctionSellPopupOpened(state);
    document.body.style.overflow = state ? "hidden" : "auto";
  };

  return (
    <S.Container {...props}>
      <S.LikeButton />
      {/* <S.Image img={backgroundImage} objectFit='cover' /> */}
      <S.ImageContainer href={"#"}>
        <S.Image {...image} objectFit='cover' />
      </S.ImageContainer>
      <S.TextContainer>
        <S.CollectionName>{collectionName}</S.CollectionName>
        <S.Title>{nftName}</S.Title>
        <S.ButtonsContainer>
          <S.SellButton onClick={handleSellPopup(true)}>Sell</S.SellButton>
          {sellPopupOpened && (
            <S.SellNftPopup popupOpened={sellPopupOpened} togglePopup={handleSellPopup} />
          )}
          <S.AutctionSellButton onClick={handleAuctionSellPopup(true)}>
            Auction Sell
          </S.AutctionSellButton>
          {auctionSellPopupOpened && (
            <S.AuctionSellNftPopup
              popupOpened={auctionSellPopupOpened}
              togglePopup={handleAuctionSellPopup}
            />
          )}
        </S.ButtonsContainer>
      </S.TextContainer>
    </S.Container>
  );
};
