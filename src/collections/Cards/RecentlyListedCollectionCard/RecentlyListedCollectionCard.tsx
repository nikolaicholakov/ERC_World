import { RefObject } from "react";
import { ITrendingCollectionsSwiperCard } from "types";
import * as S from "./elements";
import "swiper/css";

export interface IRecentlyListedCollectionCardProps
  extends Omit<ITrendingCollectionsSwiperCard, "volume"> {
  ref?: RefObject<HTMLDivElement>;
}

export const RecentlyListedCollectionCard: React.FC<IRecentlyListedCollectionCardProps> = ({
  floor,
  name,
  image,
  ...props
}) => {
  return (
    <S.Container {...props}>
      {/* <S.Image img={backgroundImage} objectFit='cover' /> */}
      <S.ImgContainer href={"#"}>
        <S.Image {...image} objectFit='cover' />
      </S.ImgContainer>
      <S.TextContainer>
        <S.Title>{name}</S.Title>
        <S.InfoContainer>
          <S.InfoText>Floor</S.InfoText>
          <S.InfoText>{floor} ETH</S.InfoText>
        </S.InfoContainer>
      </S.TextContainer>
    </S.Container>
  );
};
