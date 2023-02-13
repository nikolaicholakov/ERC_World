import styled, { css } from "styled-components";
import _Image from "next/image";
import { Section, Typography } from "components";
import { OnSaleCard } from "collections";

export const Image = styled(_Image)``;

export const Container = styled(Section)`
  padding-block: 0px;
  display: flex;
  flex-direction: column;
  margin-bottom: 88px;
`;

export const TypesContainer = styled("div")`
  display: flex;
  width: 100%;
  padding-bottom: 12px;
  border-bottom: 3px solid ${({ theme }) => theme.colors.buttonColor}1f;
  margin-bottom: 60px;
`;

export const Type = styled(Typography.H4)<{ active: boolean }>`
  font-weight: 500;
  flex-basis: calc(100% / 7);
  color: ${({ theme }) => theme.colors.mainTextColor}80;
  cursor: pointer;

  text-align: center;
  &:first-of-type {
    text-align: left;
  }

  &:last-child {
    text-align: right;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -12px;
    left: 0;
    width: 100%;
    height: 3px;
  }

  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.colors.buttonColor};
      &::after {
        background-color: ${({ theme }) => theme.colors.buttonColor};
      }
    `}
`;

export const NumberSpan = styled("span")`
  margin-left: 8px;
  border-radius: 100px;
  padding: 4px 8px;
  background-color: ${({ theme }) => theme.colors.buttonColor}1f;
  ${({ theme }) => theme.typography.h6.regular}
  font-weight:500;
  color: ${({ theme }) => theme.colors.mainTextColor};
`;

export const NftCardsContainer = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ContainerHeader = styled("div")`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const Heading = styled(Typography.H2)`
  text-transform: capitalize;
`;

export const NftsContainer = styled("div")`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  > * {
    flex: 1 1 25%;
    margin-right: 24px;
    margin-bottom: 24px;

    &:nth-of-type(4n) {
      margin-right: 0;
    }
  }
`;
