import styled from "styled-components";
import _Image from "next/image";
import { CartCard } from "collections/Cards";
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

  // not the correct one
  padding: 30px;
  padding-left: 16px;
  // to account for the padding so that the scrollbar can be well visible
  padding-right: calc(32px - 6px);
`;

export const Title = styled(Typography.H4)`
  color: ${({ theme }) => theme.colors.mainTextColor};
  margin-bottom: 24px;
`;

export const CartItemsContainer = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 40px;
  max-height: 224px;
  overflow: auto;

  padding-right: 6px;
`;

export const PriceContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 32px;
  padding-left: 24px;
  width: 100%;
`;

export const PriceContainerRow = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 12px;
`;

export const RowType = styled(Typography.H6)`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
`;

export const RowValue = styled(Typography.H6)`
  color: ${({ theme }) => theme.colors.mainTextColor};
`;

export const Wrapper = styled("div")`
  display: flex;
  align-items: center;
`;

export const PriceInCrypto = styled(RowValue)`
  margin-right: 4px;
  color: ${({ theme }) => theme.colors.buttonColor};
`;

export const ButtonsContainer = styled("div")`
  display: flex;
`;

export const CancelButton = styled(_Button)`
  width: 134px;
  height: 40px;
  padding: 0;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.secondaryTextColor};
  color: ${({ theme }) => theme.colors.secondaryTextColor};
  margin-right: 24px;
`;

export const BuyAllButton = styled(CancelButton)`
  margin-right: 0px;
  border: 1px solid transparent;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.lightButtonColor};
`;

export const CartProduct = styled(CartCard)`
  margin-bottom: 16px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;
