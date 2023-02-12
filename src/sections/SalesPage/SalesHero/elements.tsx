import styled, { css } from "styled-components";
import _Image from "next/image";
import { LoadMoreButton, Section, Typography } from "components";
import { NftSaleInfo, HistoryTable as _HistoryTable, BidsTable as _BidsTable } from "collections";

export const Image = styled(_Image)``;

export const Container = styled(Section)`
  padding-top: 60px;
  padding-bottom: 32px;
  padding-inline: 128px;
  display: flex;
  flex-direction: column;
`;

export const HeroContent = styled("div")`
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 32px;
`;

export const ImgWrapper = styled("div")`
  display: flex;
  flex-basis: 524px;
  padding-top: 44.3%;
  border-radius: 16px;
  overflow: hidden;
  margin-right: 36px;
`;

export const SaleInfo = styled(NftSaleInfo)``;

export const SalesHistoryContainer = styled("div")`
  border-radius: 16px;
  padding: 24px;
  padding-bottom: 8px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.cardsShadow};

  margin-bottom: 46px;
`;

export const LoadMoreContainer = styled("div")`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 52px;
`;

export const LoadMore = styled(LoadMoreButton)``;

export const ContainerTitle = styled(Typography.H5)`
  font-weight: 600;
  margin-bottom: 16px;
  width: 100%;
  text-align: left;
`;

export const HistoryTable = styled(_HistoryTable)``;

export const BidsContainer = styled("div")`
  border-radius: 16px;
  padding: 24px;
  padding-bottom: 8px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.cardsShadow};

  margin-bottom: 40px;
`;

export const BidsTable = styled(_BidsTable)``;
