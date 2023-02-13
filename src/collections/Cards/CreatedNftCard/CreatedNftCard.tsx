import { RefObject } from "react";
import { ICreatedNftCard } from "types";
import * as S from "./elements";
import "swiper/css";

export interface ICreatedNftCardProps extends ICreatedNftCard {
  ref?: RefObject<HTMLAnchorElement>;
}

export const CreatedNftCard: React.FC<ICreatedNftCardProps> = ({
  collectionName,
  nftName,
  image,
  ...props
}) => {
  return (
    <S.Container href={"#"} {...props}>
      <S.LikeButton />
      {/* <S.Image img={backgroundImage} objectFit='cover' /> */}
      <S.Image {...image} objectFit='cover' />
      <S.TextContainer>
        <S.CollectionName>{collectionName}</S.CollectionName>
        <S.Title>{nftName}</S.Title>
        <S.ButtonsContainer>
          <S.SellButton>Sell</S.SellButton>
          <S.AutctionSellButton>Auction Sell</S.AutctionSellButton>
        </S.ButtonsContainer>
      </S.TextContainer>
    </S.Container>
  );
};
