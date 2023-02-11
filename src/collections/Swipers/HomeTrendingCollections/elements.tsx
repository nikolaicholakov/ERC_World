import { Typography, Button as _Button, HomeTrendingCollection } from "components";
import styled from "styled-components";
import _Image from "next/image";
import { Swiper as _Swiper } from "swiper/react";
// import { ArrowButton } from "components/Buttons";
import "swiper/css";

export const Image = styled(_Image)`
  pointer-events: none;
`;

export const SlideContent = styled(HomeTrendingCollection)``;

export const Swiper = styled(_Swiper)`
  padding-bottom: 24px;

  .swiper-slide {
    max-width: 176px;
  }

  .swiper-pagination-progressbar {
    border-radius: 100px;
    position: absolute;
    height: 2.5px;
    top: unset;
    bottom: 0;
    background: ${({ theme }) => theme.colors.swiperInActive};
  }

  .swiper-pagination-progressbar-fill {
    background: ${({ theme }) => theme.colors.swiperActive};
  }
`;

export const Shadow = styled("div")`
  position: absolute;
  height: 100%;
  width: 53px;
  right: -3px;
  top: 0;
  z-index: 100;

  pointer-events: none;
  background: ${({ theme }) => theme.gradients.trendingCollectionShadow};
`;
