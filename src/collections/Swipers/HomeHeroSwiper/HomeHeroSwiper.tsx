import React, { useRef, useState, RefObject, useEffect } from "react";
import { IHomeHeroSwiperCard } from "types";
import * as S from "./elements";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import { Swiper as TSwiper, SwiperOptions } from "swiper/types";

export interface IHomeHeroSwiper {
  swiperCards: IHomeHeroSwiperCard[];
  ref?: RefObject<HTMLDivElement>;
}

export const HomeHeroSwiper: React.FC<IHomeHeroSwiper> = ({ swiperCards, ...props }) => {
  const [swiper, setSwiper] = useState<TSwiper | null>(null);

  const swiperSettings: SwiperOptions = {
    loop: true,
    speed: 800,
    autoplay: { delay: 4000, disableOnInteraction: false },
    pagination: {
      clickable: true
    },
    modules: [Autoplay, Pagination]
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
