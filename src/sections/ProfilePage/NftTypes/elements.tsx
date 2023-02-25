import styled, { css } from "styled-components";
import _Image from "next/image";
import { Section, Typography } from "components";

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
  margin-bottom: 60px;
  max-width: 100%;

  /* background-color: ${({ theme }) => theme.colors.buttonColor}1f; */

  @media ${({ theme }) => theme.breakpoint.max.M} {
    overflow-x: auto;
    margin-bottom: 40px;
    max-width: 100%;
    padding-top: 2px;
    padding-bottom: 15px;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  @media ${({ theme }) => theme.breakpoint.max.S} {
    margin-bottom: 20px;
  }
`;

export const Text = styled("span")`
  display: inline-block;
`;

export const Type = styled(Typography.H4)<{ active: boolean | undefined }>`
  font-weight: 500;
  flex-basis: calc(100% / 7);
  width: 100%;
  justify-content: center;
  color: ${({ theme }) => theme.colors.mainTextColor}80;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-inline: 5px;
  @media ${({ theme }) => theme.breakpoint.max.L} {
    /* margin-right: 10px; */

    &:last-of-type {
      margin-right: 0;
    }
  }

  @media ${({ theme }) => theme.breakpoint.max.M} {
    flex-basis: calc(100% / 5);
    flex-direction: column-reverse;
    flex-shrink: 0;
    justify-content: flex-start;
  }

  text-align: center;
  &:first-of-type {
    text-align: left;
  }

  &:last-child {
    text-align: right;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: -14px;
    left: 0;
    width: 100%;
    height: 2px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.buttonColor}1f;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -14px;
    left: 0;
    width: 100%;
    height: 2px;
    border-radius: 10px;
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

  @media ${({ theme }) => theme.breakpoint.max.M} {
    margin-left: 0;
    margin-bottom: 5px;
  }
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
    flex-basis: 25%;
    margin-right: 24px;
    margin-bottom: 24px;

    &:nth-of-type(4n) {
      margin-right: 0;
    }

    @media ${({ theme }) => theme.breakpoint.max.L} {
      flex-basis: calc(34% - 20px);
      margin-right: 20px;
      &:nth-of-type(4n) {
        margin-right: 20px;
      }
      &:nth-of-type(3n) {
        margin-right: 0;
      }
    }

    @media ${({ theme }) => theme.breakpoint.max.M} {
      flex-basis: calc(50% - 5px);
      margin-right: 10px;
      &:nth-of-type(2n) {
        margin-right: 0px !important;
      }
      &:nth-of-type(3n) {
        margin-right: 10px;
      }
    }
  }
`;
