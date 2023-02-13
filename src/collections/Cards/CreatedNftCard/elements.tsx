import { Typography, Button as _Button, LikeButton as _LikeButton, Button } from "components";
import styled, { css } from "styled-components";
import _Image from "next/image";
import "swiper/css";

export const Container = styled("a")`
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

export const ImageContainer = styled("div")`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Image = styled(_Image)`
  display: flex;
  background-color: ${({ theme }) => theme.colors.bodyBackground};
  border-radius: 8px;
`;

export const TextContainer = styled("div")`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  width: 100%;
`;

export const Title = styled("span")`
  ${({ theme }) => theme.typography.h4.regular};
  margin-bottom: 26px;
`;

export const CollectionName = styled("span")`
  ${({ theme }) => theme.typography.h6.regular};
  font-weight: 400;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
`;

export const ButtonsContainer = styled("div")`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const LikeButton = styled(_LikeButton)`
  position: absolute;
  top: 22px;
  right: 21px;
  font-size: 18px;
`;

export const SellButton = styled(Button)`
  flex-basis: 96px;
  border-radius: 4px;
  padding: 9px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.buttonColor};
  margin-right: 8px;
`;

export const AutctionSellButton = styled(SellButton)`
  flex-basis: 116px;
  color: ${({ theme }) => theme.colors.buttonColor};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.buttonColor};
  margin: 0;
`;
