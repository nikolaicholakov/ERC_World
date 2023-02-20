import styled, { css } from "styled-components";
import _Image from "next/image";
import { LoadMoreButton, Section, Typography } from "components";
import {
  NftSaleInfo,
  HistoryTable as _HistoryTable,
  BidsTable as _BidsTable,
  LoadMoreCard
} from "collections";

export const Image = styled(_Image)``;

export const Container = styled(Section)`
  padding-top: 60px;
  padding-bottom: 32px;
  max-width: 1184px;
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.breakpoint.max.L} {
    padding-top: 40px;
    padding-bottom: 22px;
  }

  @media ${({ theme }) => theme.breakpoint.max.S} {
    padding-top: 20px;
    padding-bottom: 10px;
  }
`;

export const HeroContent = styled("div")`
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 32px;

  @media ${({ theme }) => theme.breakpoint.max.L} {
    flex-direction: column;
  }
`;

export const ImgWrapper = styled("div")`
  display: flex;
  flex-basis: 524px;
  padding-top: 44.3%;
  border-radius: 16px;
  overflow: hidden;
  margin-right: 36px;
  flex-shrink: 1;
  border-radius: 16px;

  @media ${({ theme }) => theme.breakpoint.max.L} {
    padding-top: 0;
    margin: 0 auto;
    width: 70%;
    /* padding-top: 40%; */
    margin-bottom: 20px;
    flex-basis: 500px;
  }

  @media ${({ theme }) => theme.breakpoint.max.M} {
    width: 100%;
  }

  @media ${({ theme }) => theme.breakpoint.max.S} {
    flex-basis: 350px;
  }
`;

export const SaleInfo = styled(NftSaleInfo)`
  max-width: 624px;
  width: 100%;
  flex-shrink: 1.5;

  @media ${({ theme }) => theme.breakpoint.max.L} {
    margin: 0 auto;
    max-width: 100%;
  }
`;

export const LoadMoreContainer = styled("div")`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 52px;

  @media ${({ theme }) => theme.breakpoint.max.M} {
    padding: 0;
  }
`;

export const LoadMore = styled(LoadMoreCard)`
  width: 100%;
`;

export const ContainerTitle = styled(Typography.H5)`
  font-weight: 600;
  margin-bottom: 16px;
  width: 100%;
  text-align: left;
`;

export const HistoryTable = styled(_HistoryTable)``;

export const SalesHistoryContainer = styled("div")`
  border-radius: 16px;
  padding: 24px;
  padding-bottom: 8px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.cardsShadow};

  margin-bottom: 46px;

  @media ${({ theme }) => theme.breakpoint.max.M} {
    padding: 18px 12px;
    margin-bottom: 25px;
  }
`;

export const BidsContainer = styled(SalesHistoryContainer)`
  border-radius: 16px;
  padding: 24px;
  padding-bottom: 8px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.cardsShadow};

  margin-bottom: 40px;

  @media ${({ theme }) => theme.breakpoint.max.M} {
    padding: 18px 12px;
    margin-bottom: 25px;
  }
`;

export const BidsTable = styled(_BidsTable)``;
