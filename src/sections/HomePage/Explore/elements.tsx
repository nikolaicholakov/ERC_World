import styled from "styled-components";
import _Image from "next/image";
import { LoadMoreButton, Section, Typography } from "components";
import { ExploreCard as _ExploreCard, LoadMoreCard } from "collections";

export const Container = styled(Section)`
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${({ theme }) => theme.breakpoint.max.M} {
    padding-bottom: 30px;
  }

  @media ${({ theme }) => theme.breakpoint.max.S} {
    padding-bottom: 20px;
  }
`;

export const Wrapper = styled("div")`
  @media ${({ theme }) => theme.breakpoint.max.L} {
    display: flex;
    width: 100%;
  }
`;

export const HeadingContainer = styled("div")`
  display: flex;
`;

export const SectionHeading = styled(Typography.H2)`
  margin-bottom: 24px;
  text-align: left;
  width: 100%;
`;

export const CardsContainer = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;

  @media ${({ theme }) => theme.breakpoint.max.L} {
    flex-wrap: nowrap;
    overflow: auto;
    justify-content: flex-start;
  }
`;

export const ExploreCard = styled(_ExploreCard)`
  flex-basis: 25%;
  margin-right: 24px;
  margin-bottom: 24px;

  &:nth-of-type(4n) {
    margin-right: 0;
  }

  @media ${({ theme }) => theme.breakpoint.max.L} {
    flex-shrink: 0;
    &:nth-of-type(4n) {
      margin-right: 12px;
      flex-basis: 24%;
    }
    margin-right: 12px;
    flex-basis: 24%;
    margin-bottom: 14px;
  }

  @media ${({ theme }) => theme.breakpoint.max.M} {
    &:nth-of-type(4n) {
      margin-right: 9px;
      flex-basis: 30%;
    }
    margin-right: 9px;
    flex-basis: 30%;
    margin-bottom: 10px;
  }

  @media ${({ theme }) => theme.breakpoint.max.S} {
    &:nth-of-type(4n) {
      flex-basis: 50%;
    }
    flex-basis: 50%;
    margin-bottom: 10px;
  }
`;

export const LoadMore = styled(LoadMoreCard)`
  display: block;
  @media ${({ theme }) => theme.breakpoint.max.L} {
    display: none;
  }
`;

export const LoadMoreMobile = styled(LoadMoreCard)`
  display: none;
  @media ${({ theme }) => theme.breakpoint.max.L} {
    display: flex;
    height: calc(100% - 14px);
    border-radius: 12px;

    > button {
      width: 100px;
    }
  }
`;
