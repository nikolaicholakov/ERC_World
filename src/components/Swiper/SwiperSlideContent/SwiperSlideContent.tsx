import { RefObject } from "react";
import { ISwiperCard } from "types";
import * as S from "./elements";
import "swiper/css";

export interface ISwiperSlideContentProps extends ISwiperCard {
  ref?: RefObject<HTMLDivElement>;
}

export const SwiperSlideContent: React.FC<ISwiperSlideContentProps> = ({
  // title,
  // subTitle,
  // description,
  // backgroundImage,
  // button,
  // image,
  // reverse,
  ...props
}) => {
  return (
    <S.Container {...props}>
      {/* <S.Image img={backgroundImage} objectFit='cover' /> */}
      {/* <S.Image {...backgroundImage} objectFit='cover' /> */}
    </S.Container>
  );
};
