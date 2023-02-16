import styled from "styled-components";
import _Image from "next/image";
import { Section } from "components";
import { HomeHeroSwiper } from "collections";

export const Container = styled(Section)`
  padding-top: 64px;
  padding-bottom: 40px;

  @media ${({ theme }) => theme.breakpoint.max.M} {
    padding-top: 40px;
    padding-bottom: 25px;
  }

  @media ${({ theme }) => theme.breakpoint.max.S} {
    padding-top: 20px;
    padding-bottom: 10px;
  }
`;

export const Swiper = styled(HomeHeroSwiper)`
  width: 100%;
`;
