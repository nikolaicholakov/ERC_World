import styled from "styled-components";
import _Image from "next/image";
import { Section, Typography } from "components";
import { HomeTrendingCollectionsSwiper } from "collections";

export const Container = styled(Section)`
  padding-top: 64px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.breakpoint.max.M} {
    padding-top: 40px;
    padding-bottom: 60px;
  }

  @media ${({ theme }) => theme.breakpoint.max.S} {
    padding-top: 20px;
    padding-bottom: 40px;
  }
`;

export const Swiper = styled(HomeTrendingCollectionsSwiper)`
  width: -webkit-fill-available;
`;

export const HeadingContainer = styled("div")`
  display: flex;
`;

export const SectionHeading = styled(Typography.H2)`
  margin-bottom: 24px;
  text-align: left;
  width: 100%;
`;
