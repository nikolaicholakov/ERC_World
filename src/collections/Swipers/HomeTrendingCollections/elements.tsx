import { Typography, Button as _Button, HomeTrendingCollection } from "components";
import styled from "styled-components";
import _Image from "next/image";
import { Swiper as _Swiper } from "swiper/react";
import "swiper/css";
import { LoadMoreCard } from "collections/Cards";

export const Image = styled(_Image)`
  pointer-events: none;
`;

export const SlideContent = styled(HomeTrendingCollection)`
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

export const LoadMoreButton = styled(LoadMoreCard)``;

export const Swiper = styled(_Swiper)`
  padding-bottom: 24px;

  .swiper-slide {
    width: 176px;
    margin-right: 24px;
    height: auto;

    @media ${({ theme }) => theme.breakpoint.max.M} {
      width: 160px;
      margin-right: 15px;
    }

    @media ${({ theme }) => theme.breakpoint.max.S} {
      width: 140px;
      margin-right: 10px;
    }
  }

  .swiper-slide-load-more {
    width: 100px;
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
  right: -1px;
  top: 0;
  z-index: 100;

  pointer-events: none;
  background: ${({ theme }) => theme.gradients.trendingCollectionShadow};
`;
