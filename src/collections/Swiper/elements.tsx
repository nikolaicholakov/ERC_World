import { Typography, Button as _Button, SwiperSlideContent } from "components";
import styled from "styled-components";
import _Image from "next/image";
// import { ArrowButton } from "components/Buttons";
import "swiper/css";

export const Image = styled(_Image)``;

export const SlideContent = styled(SwiperSlideContent)``;

// export const SlideChanger = styled(ArrowButton)``;

export const ButtonsWrapper = styled("div")`
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: center;

  @media ${({ theme }) => theme.breakpoint.max.S} {
    display: none;
  }
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  align-items: center;
`;
