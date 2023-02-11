import React, { useRef, useState, RefObject, useEffect } from "react";
import { ITrendingCollectionsSwiperCard } from "types";
import * as S from "./elements";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import { Swiper as TSwiper, SwiperOptions } from "swiper/types";

export interface IHomeTrendingCollectionsSwiper {
  swiperCards: ITrendingCollectionsSwiperCard[];
  ref?: RefObject<HTMLDivElement>;
}

export const HomeTrendingCollectionsSwiper: React.FC<IHomeTrendingCollectionsSwiper> = ({
  swiperCards,
  ...props
}) => {
  const [swiper, setSwiper] = useState<TSwiper | null>(null);

  const swiperSettings: SwiperOptions = {
    loop: true,
    speed: 800,
    slidesPerView: "auto",
    spaceBetween: 24,
    pagination: {
      type: "progressbar"
    },
    modules: [Pagination]
  };

  return (
    <S.Swiper onSwiper={swiper => setSwiper(swiper)} {...swiperSettings} {...props}>
      {swiperCards.map((slide, i) => (
        <SwiperSlide key={"swiperSlide" + i}>
          <S.SlideContent {...slide} />
        </SwiperSlide>
      ))}
      <S.Shadow />
    </S.Swiper>
  );
};
