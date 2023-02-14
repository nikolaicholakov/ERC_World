import styled, { css } from "styled-components";
import {
  Button as _Button,
  FormDropdownInput,
  FormDropdownInput as _FormInput,
  FormTextArea as _FormTextArea,
  Typography
} from "components";
import _Image from "next/image";
import { SuccessfulPurchase } from "../SuccessfulPurchase";

export const Form = styled("form")``;

export const Image = styled(_Image)``;

export const NftInfo = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  margin-bottom: 24px;
`;

export const Text = styled(Typography.H6)`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
  margin-bottom: 6px;
  text-align: left;
`;

export const OfferContainer = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-bottom: 8px;
`;

export const OfferTitle = styled(Typography.H6)`
  font-weight: 400;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
`;

export const PriceInCrypto = styled(Typography.H4)`
  color: ${({ theme }) => theme.colors.buttonColor};
  margin-bottom: 2px;
  text-align: left;
`;

export const PriceInDollars = styled(Typography.H6)`
  color: ${({ theme }) => theme.colors.mainTextColor};
  text-align: left;
  margin-bottom: 8px;
`;

export const BuyNowContainer = styled("div")`
  display: flex;
`;

export const InfoBlock = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const BuyNowText = styled(Text)`
  margin: 0;
  margin-right: 8px;
`;

export const NftInfoContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;

  margin-bottom: 24px;
`;

export const BuyNowPrice = styled(Typography.H6)`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.buttonColor};
`;

export const Title = styled(Typography.H4)`
  margin-bottom: 32px;
  text-align: center;
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

export const OfferButtonsContainer = styled(ButtonsContainer)`
  margin-top: 44px;
`;

export const Button = styled(_Button)`
  width: 120px;
  height: 40px;
  padding: 0px;

  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.secondaryTextColor};
  color: ${({ theme }) => theme.colors.mainTextColor};
`;

export const BuyNowButton = styled(_Button)`
  width: 120px;
  height: 40px;
  padding: 0px;
  border-radius: 4px;
  margin-left: 20px;

  color: ${({ theme }) => theme.colors.buttonColor};
  border: 1px solid ${({ theme }) => theme.colors.buttonColor};
`;

export const MakeBidButton = styled(_Button)`
  width: 120px;
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
  width: 100%;
  margin-bottom: 8px;
`;

export const AmountToPayContainer = styled("div")`
  display: flex;
  align-items: center;
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

export const AmountToPayDollars = styled(CryptoBalance)``;

export const AmountToPayCrypto = styled(CryptoBalance)`
  color: ${({ theme }) => theme.colors.buttonColor};
  margin-right: 5px;
`;

export const Input = styled(FormDropdownInput)``;

export const PurchaseSubmitedContent = styled(SuccessfulPurchase)``;
