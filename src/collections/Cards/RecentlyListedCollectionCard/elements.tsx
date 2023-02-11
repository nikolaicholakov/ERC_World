import { Typography, Button as _Button } from "components";
import styled, { css } from "styled-components";
import _Image from "next/image";
import "swiper/css";
// import { UnderLinedButton } from "components/Buttons";

export const Container = styled("a")`
  max-width: 164px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 12px 8px;
  border-radius: 12px;

  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.cardsShadow};
`;

export const Image = styled(_Image)`
  display: flex;
  background-color: ${({ theme }) => theme.colors.bodyBackground};
  border-radius: 50%;
`;

export const TextContainer = styled("div")`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  width: 100%;
`;

export const Title = styled("span")`
  ${({ theme }) => theme.typography.h4.regular};
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
