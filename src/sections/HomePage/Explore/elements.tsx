import styled from "styled-components";
import _Image from "next/image";
import { LoadMoreButton, Section, Typography } from "components";
import { ExploreCard as _ExploreCard, RecentlyListedCollectionCard } from "collections";

export const Container = styled(Section)`
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
`;

export const ExploreCard = styled(_ExploreCard)`
  flex-basis: 25%;
  margin-right: 24px;
  margin-bottom: 24px;

  &:nth-of-type(4n) {
    margin-right: 0;
  }
`;

export const LoadMore = styled(LoadMoreButton)``;
