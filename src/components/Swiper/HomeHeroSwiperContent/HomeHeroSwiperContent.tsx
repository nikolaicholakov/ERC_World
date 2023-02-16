import { RefObject } from "react";
import { IHomeHeroSwiperCard } from "types";
import * as S from "./elements";
import "swiper/css";

export interface IHomeHeroSwiperContentProps extends IHomeHeroSwiperCard {
  ref?: RefObject<HTMLDivElement>;
}

export const HomeHeroSwiperContent: React.FC<IHomeHeroSwiperContentProps> = ({
  image,
  subTitle,
  title,
  ...props
}) => {
  return (
    <S.Container {...props}>
      {/* <S.Image img={backgroundImage} objectFit='cover' /> */}
      <S.Image {...image} layout='fill' objectFit='cover' />
      <S.TextContainer>
        <S.Title>{title}</S.Title>
        <S.SubTitle>{subTitle}</S.SubTitle>
      </S.TextContainer>
    </S.Container>
  );
};
