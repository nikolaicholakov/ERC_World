import { RefObject } from "react";
import { IExploreNftCard } from "types";
import * as S from "./elements";
import "swiper/css";

export interface IExploreCardProps extends IExploreNftCard {
  ref?: RefObject<HTMLDivElement>;
}

export const ExploreCard: React.FC<IExploreCardProps> = ({
  collectionName,
  nftName,
  nftsAvailable,
  price,
  image,
  ...props
}) => {
  return (
    <S.Container {...props}>
      <S.LikeButton />
      {/* <S.Image img={backgroundImage} objectFit='cover' /> */}
      <S.ImgContainer href={"#"}>
        <S.Image {...image} objectFit='cover' />
      </S.ImgContainer>
      <S.TextContainer>
        <S.CollectionName>{collectionName}</S.CollectionName>
        <S.Title>{nftName}</S.Title>
        <S.InfoContainer>
          <S.InfoText>Items available</S.InfoText>
          <S.InfoTextBolder>{nftsAvailable}</S.InfoTextBolder>
        </S.InfoContainer>
        <S.InfoContainer>
          <S.InfoText>Price</S.InfoText>
          <S.Price>{price} ERC</S.Price>
        </S.InfoContainer>
      </S.TextContainer>
    </S.Container>
  );
};
