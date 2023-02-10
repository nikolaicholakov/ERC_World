import React, { useRef, useState, RefObject, useEffect } from "react";
import { ISwiperCard } from "types";
import * as S from "./elements";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper";

import "swiper/css/effect-fade";
import "swiper/css";
import "swiper/css/navigation";

import { Swiper as TSwiper, SwiperOptions } from "swiper/types";

export interface SwiperProps {
  swiperCards: ISwiperCard[];
  ref?: RefObject<HTMLDivElement>;
}

export const SwiperElement: React.FC<SwiperProps> = ({ swiperCards, ...props }) => {
  const [swiper, setSwiper] = useState<TSwiper | null>(null);

  const nextSlide = () => {
    if (swiper === null) return;
    swiper.slideNext();
  };

  const prevSlide = () => {
    if (swiper === null) return;
    swiper?.slidePrev();
  };

  const swiperSettings: SwiperOptions = {
    loop: true,
    effect: "fade",
    speed: 800,
    autoplay: { delay: 4000, disableOnInteraction: false },
    modules: [Autoplay, Navigation, EffectFade]
  };

  return (
    <Swiper onSwiper={swiper => setSwiper(swiper)} {...swiperSettings} {...props}>
      {swiperCards.map((slide, i) => (
        <SwiperSlide key={"swiperSlide" + i}>
          <S.SlideContent {...slide} />
        </SwiperSlide>
      ))}
      <S.ButtonsWrapper>
        {/* <S.SlideChanger onClick={prevSlide} rotated={true} />
        <S.SlideChanger onClick={nextSlide} /> */}
      </S.ButtonsWrapper>
    </Swiper>
  );
};
