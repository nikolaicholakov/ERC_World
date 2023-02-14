import { RefObject } from "react";
import { IExploreNftCard, IOnSaleCard } from "types";
import * as S from "./elements";
import "swiper/css";

export interface IOnSaleCardProps extends IOnSaleCard {
  ref?: RefObject<HTMLDivElement>;
}

export const OnSaleCard: React.FC<IOnSaleCardProps> = ({
  collectionName,
  nftName,
  price,
  image,
  ...props
}) => {
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
        <S.InfoContainer>
          <S.InfoText>Price</S.InfoText>
          <S.Price>{price} ERC</S.Price>
        </S.InfoContainer>
      </S.TextContainer>
    </S.Container>
  );
};
