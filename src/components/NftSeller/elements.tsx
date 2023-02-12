import styled from "styled-components";
import _Image from "next/image";

export const Image = styled(_Image)``;

export const Container = styled("div")`
  display: flex;
  align-items: center;
`;

export const ImgContainer = styled("div")`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 12px;
`;

export const TextBlock = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const TextRow = styled("div")`
  display: flex;
  align-items: center;
  &:first-of-type {
    margin-bottom: 2px;
  }
`;

export const Span = styled("span")`
  text-transform: capitalize;
  margin-right: 4px;
  ${({ theme }) => theme.typography.h7.regular}
  color: ${({ theme }) => theme.colors.secondaryTextColor};
`;

export const Name = styled("span")`
  text-transform: capitalize;
  ${({ theme }) => theme.typography.h6.regular}
  color: ${({ theme }) => theme.colors.mainTextColor};
`;

export const PriceInCrypto = styled("span")`
  margin-right: 4px;
  ${({ theme }) => theme.typography.h5.regular};
  color: ${({ theme }) => theme.colors.buttonColor};
`;

export const PriceInDollars = styled("span")`
  ${({ theme }) => theme.typography.h5.regular}
  color: ${({ theme }) => theme.colors.mainTextColor};
`;
