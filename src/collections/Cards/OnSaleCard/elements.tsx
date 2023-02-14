import { Typography, Button as _Button, LikeButton as _LikeButton } from "components";
import styled, { css } from "styled-components";
import _Image from "next/image";
import "swiper/css";

export const Container = styled("div")`
  max-width: 252px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 12px;
  border-radius: 12px;

  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.cardsShadow};
`;

export const Image = styled(_Image)`
  display: flex;
  background-color: ${({ theme }) => theme.colors.bodyBackground};
  border-radius: 8px;
`;

export const ImageContainer = styled("a")`
  display: flex;
`;

export const TextContainer = styled("div")`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  width: 100%;
`;

export const Title = styled("span")`
  ${({ theme }) => theme.typography.h4.regular};
  margin-bottom: 45px;
`;

export const CollectionName = styled("span")`
  ${({ theme }) => theme.typography.h6.regular};
  font-weight: 400;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
`;

export const InfoContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 100%;

  &:first-of-type {
    margin-bottom: 8px;
  }
`;

export const InfoText = styled("span")`
  ${({ theme }) => theme.typography.h6.regular};
  font-weight: 400;
`;

export const InfoTextBolder = styled("span")`
  ${({ theme }) => theme.typography.h6.regular};
`;

export const Price = styled("span")`
  ${({ theme }) => theme.typography.h5.regular};
  color: ${({ theme }) => theme.colors.buttonColor};
`;

export const LikeButton = styled(_LikeButton)`
  position: absolute;
  top: 22px;
  right: 21px;
  font-size: 18px;
`;
