import { RefObject } from "react";
import { IHomeHeroSwiperCard } from "types";
import * as S from "./elements";
import "swiper/css";

export interface HomeHeroSwiperContentProps extends IHomeHeroSwiperCard {
  ref?: RefObject<HTMLDivElement>;
}

export const HomeHeroSwiperContent: React.FC<HomeHeroSwiperContentProps> = ({
  image,
  subTitle,
  title,
  ...props
}) => {
  return (
    <S.Container {...props}>
      {/* <S.Image img={backgroundImage} objectFit='cover' /> */}
      <S.Image src={image.src} layout='fill' objectFit='cover' />
      <S.TextContainer>
        <S.Title>{title}</S.Title>
        <S.SubTitle>{subTitle}</S.SubTitle>
      </S.TextContainer>
    </S.Container>
  );
};
