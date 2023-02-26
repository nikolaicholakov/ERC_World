import React, { useRef, useState, RefObject, useEffect } from "react";
import { IHomeHeroSwiperCard } from "types";
import * as S from "./elements";
import { SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCreative } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

import { Swiper as TSwiper, SwiperOptions } from "swiper/types";

export interface HomeHeroSwiper {
  swiperCards: IHomeHeroSwiperCard[];
  ref?: RefObject<HTMLDivElement>;
}

export const HomeHeroSwiper: React.FC<HomeHeroSwiper> = ({ swiperCards, ...props }) => {
  const [swiper, setSwiper] = useState<TSwiper | null>(null);

  const swiperSettings: SwiperOptions = {
    loop: true,
    speed: 1300,
    effect: "creative",
    autoplay: { delay: 3000, disableOnInteraction: false },
    pagination: {
      clickable: true
    },
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, "100%", 0]
      },
      next: {
        translate: [0, "-11%", 0],
        opacity: 0.1,
        scale: 0.85
      }
    },
    modules: [EffectCreative, Pagination, Autoplay]
  };

  return (
    <S.Swiper onSwiper={swiper => setSwiper(swiper)} {...swiperSettings} {...props}>
      {swiperCards.map((slide, i) => (
        <SwiperSlide key={"swiperSlide" + i}>
          <S.SlideContent {...slide} />
        </SwiperSlide>
      ))}
    </S.Swiper>
  );
};
