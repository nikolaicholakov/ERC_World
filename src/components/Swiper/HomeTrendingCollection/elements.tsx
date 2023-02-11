import { Typography, Button as _Button } from "components";
import styled, { css } from "styled-components";
import _Image from "next/image";
import "swiper/css";
// import { UnderLinedButton } from "components/Buttons";

export const Container = styled("a")`
  max-width: 176px;
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
  border-radius: 50%;
  pointer-events: none;
`;

export const TextContainer = styled("div")`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  pointer-events: none;
`;

export const Title = styled("span")`
  ${({ theme }) => theme.typography.h5.regular};
  font-weight: 600;
  margin-bottom: 16px;
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
