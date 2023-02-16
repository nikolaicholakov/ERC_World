import styled from "styled-components";
import _Image from "next/image";

import { Button as _Button, Popup as _Popup, Typography } from "components";
import { SuccessfulPurchase } from "collections/Forms";

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

  @media ${({ theme }) => theme.breakpoint.max.M} {
    margin: auto;
    max-width: 90%;
  }
`;

export const NotSubmitedContainer = styled("div")`
  padding: 24px 40px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media ${({ theme }) => theme.breakpoint.max.M} {
    padding: 24px 20px;
  }
`;

export const PurchaseSubmited = styled(SuccessfulPurchase)`
  padding: 40px;
`;

export const NftInfoContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;

  margin-bottom: 40px;
`;

export const InfoBlock = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const NftInfo = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const NftName = styled(Typography.H5)`
  font-weight: 600;
  margin-bottom: 10px;

  text-align: left;
`;

export const PriceInCrypto = styled(Typography.H4)`
  color: ${({ theme }) => theme.colors.buttonColor};
  margin-bottom: 2px;
  text-align: left;
`;

export const PriceInDollars = styled(Typography.H6)`
  color: ${({ theme }) => theme.colors.secondaryTextColor};
  text-align: left;
`;

export const Title = styled(Typography.H4)`
  margin-bottom: 32px;
`;

export const ImgContainer = styled("div")`
  display: flex;
  width: 100px;
  height: 100px;

  border-radius: 4px;
  overflow: hidden;
`;

export const ButtonsContainer = styled("div")`
  display: flex;
`;

export const Button = styled(_Button)`
  width: 125px;
  height: 40px;
  padding: 0px;

  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.secondaryTextColor};
  color: ${({ theme }) => theme.colors.mainTextColor};
`;

export const BuyNowButton = styled(_Button)`
  width: 125px;
  height: 40px;
  padding: 0px;
  border-radius: 4px;
  margin-left: 20px;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.lightButtonColor};
`;

export const BalanceContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
  width: 100%;
`;

export const Span = styled("span")`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
  ${({ theme }) => theme.typography.h6.regular};
`;

export const CryptoBalance = styled("span")`
  color: ${({ theme }) => theme.colors.mainTextColor};
  ${({ theme }) => theme.typography.h6.regular};
`;
