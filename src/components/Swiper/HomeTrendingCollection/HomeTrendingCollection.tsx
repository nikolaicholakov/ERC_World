import { RefObject } from "react";
import { ITrendingCollectionsSwiperCard } from "types";
import * as S from "./elements";
import "swiper/css";

export interface IHomeTrendingCollectionProps extends ITrendingCollectionsSwiperCard {
  ref?: RefObject<HTMLAnchorElement>;
}

export const HomeTrendingCollection: React.FC<IHomeTrendingCollectionProps> = ({
  image,
  floor,
  name,
  volume,
  ...props
}) => {
  return (
    <S.Container href={"#"} {...props}>
      {/* <S.Image img={backgroundImage} objectFit='cover' /> */}
      <S.Image {...image} objectFit='cover' />
      <S.TextContainer>
        <S.Title>{name}</S.Title>
        <S.InfoContainer>
          <S.InfoText>Floor</S.InfoText>
          <S.InfoText>{floor} ETH</S.InfoText>
        </S.InfoContainer>
        <S.InfoContainer>
          <S.InfoText>Volume</S.InfoText>
          <S.InfoText>{volume} ETH</S.InfoText>
        </S.InfoContainer>
      </S.TextContainer>
    </S.Container>
  );
};
