import styled from "styled-components";
import _Image from "next/image";

import { Button as _Button, Popup as _Popup, Typography } from "components";

export const Image = styled(_Image)``;

export const Popup = styled(_Popup)``;

export const Container = styled("div")`
  z-index: 100;
  width: 468px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding-top: 24px;
  padding-inline: 40px;
  padding-bottom: 31px;

  @media ${({ theme }) => theme.breakpoint.max.M} {
    margin: auto;
    max-width: 90%;
  }
`;

export const TextContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Title = styled(Typography.H4)`
  margin-bottom: 12px;
`;

export const SubTitle = styled(Typography.H6)`
  margin-bottom: 40px;
  max-width: 311px;
`;

export const ButtonsContainer = styled("div")`
  display: flex;
`;

export const Button = styled(_Button)`
  width: 140px;
  border: 1px solid ${({ theme }) => theme.colors.secondaryTextColor};
  color: ${({ theme }) => theme.colors.secondaryTextColor};

  &:first-of-type {
    margin-right: 20px;
  }

  @media ${({ theme }) => theme.breakpoint.max.M} {
    width: 120px;
  }
`;

export const WalletTypesContainer = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 32px;
`;

export const WalletContainer = styled("div")`
  padding: 16px 24px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid ${({ theme }) => theme.colors.secondaryTextColor}1f;

  margin-bottom: 16px;
  &:last-of-type {
    margin-bottom: 0px;
  }
`;

export const WalletType = styled(Typography.H6)``;
