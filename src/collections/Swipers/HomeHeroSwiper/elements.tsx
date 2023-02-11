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

  .swiper-pagination {
    bottom: 0px;

    > .swiper-pagination-bullet-active {
      background-color: ${({ theme }) => theme.colors.swiperActive};
    }

    > .swiper-pagination-bullet {
      width: 32px;
      height: 3px;
      border-radius: 0;
    }
  }
`;
