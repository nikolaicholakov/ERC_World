import { Typography, Button as _Button, HomeHeroSwiperContent } from "components";
import styled from "styled-components";
import _Image from "next/image";
import { Swiper as _Swiper } from "swiper/react";
// import { ArrowButton } from "components/Buttons";
import "swiper/css";

export const Image = styled(_Image)``;

export const SlideContent = styled(HomeHeroSwiperContent)``;

export const Swiper = styled(_Swiper)`
  padding-bottom: 16px;
  padding-top: 20px;

  .swiper-pagination {
    bottom: 0px;
    background-color: ${({ theme }) => theme.colors.bodyBackground};

    > .swiper-pagination-bullet-active {
      background-color: ${({ theme }) => theme.colors.swiperActive};
    }

    > .swiper-pagination-bullet {
      width: 32px;
      height: 3px;
      border-radius: 0;
    }
  }

  .swiper-slide {
    opacity: 0 !important;
    border-radius: 16px;
    overflow: hidden;
  }

  .swiper-slide-next {
    opacity: 0.9 !important;
    transition: opacity 0.5s ease-in-out, width 1.2s ease-in-out !important;
  }

  .swiper-slide-visible {
    opacity: 1 !important;
  }
`;
