import React, { useRef, useState, RefObject, useEffect } from "react";
import { ITrendingCollectionsSwiperCard } from "types";
import * as S from "./elements";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import { Swiper as TSwiper, SwiperOptions } from "swiper/types";

export interface HomeTrendingCollectionsSwiper {
  swiperCards: ITrendingCollectionsSwiperCard[];
  loadMoreCollections: () => void;
  isLoading: boolean;
  ref?: RefObject<HTMLDivElement>;
}

export const HomeTrendingCollectionsSwiper: React.FC<HomeTrendingCollectionsSwiper> = ({
  swiperCards,
  isLoading,
  loadMoreCollections,
  ...props
}) => {
  const [swiper, setSwiper] = useState<TSwiper | null>(null);

  const swiperSettings: SwiperOptions = {
    speed: 800,
    slidesPerView: "auto",
    pagination: {
      type: "progressbar"
    },
    modules: [Pagination]
  };

  return (
    <S.Swiper onSwiper={swiper => setSwiper(swiper)} {...swiperSettings} {...props}>
      {swiperCards.length === 0 ? (
        <S.LoadMoreButton onClick={loadMoreCollections} isLoading={true} />
      ) : (
        <>
          {swiperCards.map((slide, i) => (
            <SwiperSlide key={"swiperSlide" + i}>
              <S.SlideContent {...slide} />
            </SwiperSlide>
          ))}

          <SwiperSlide className='swiper-slide-load-more'>
            <S.LoadMoreButton onClick={loadMoreCollections} isLoading={isLoading} />
          </SwiperSlide>
        </>
      )}
      <S.Shadow />
    </S.Swiper>
  );
};
