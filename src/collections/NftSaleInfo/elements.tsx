import styled, { css } from "styled-components";
import _Image from "next/image";

import {
  AddToCartButton,
  Button,
  Button as _Button,
  IconButton,
  LikeButton,
  NftCreatorOrCollection,
  NftSeller,
  Popup as _Popup,
  Typography
} from "components";
import { MakeAnOffer, PurchaseNft } from "collections/Popups";

export const Image = styled(_Image)``;

export const InfoContainer = styled("div")`
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 16px;
  padding-bottom: 22px;
  background-color: ${({ theme }) => theme.colors.white};

  box-shadow: ${({ theme }) => theme.shadows.cardsShadow};
`;

export const Row = styled("div")`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:last-of-type {
    margin-bottom: 0px;
  }
`;

export const SaleByLabel = styled("div")<{ saleBy: "user" | "administrator" }>`
  padding: 4px 8px;
  text-transform: capitalize;
  ${({ theme }) => theme.typography.h6.regular}
  border-radius:4px;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 12px;

  background: ${({ saleBy, theme }) =>
    saleBy === "administrator"
      ? theme.gradients.administratorGradiant
      : theme.gradients.userGradient};
`;

export const FirstRow = styled(Row)`
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
`;

export const SecondRow = styled(Row)`
  flex-direction: row;
`;

export const LeftSide = styled(Row)`
  align-items: flex-start;
`;

export const NftName = styled(Typography.H3)`
  margin-bottom: 12px;
`;

export const AvailablesContainer = styled("div")`
  display: flex;
  align-items: center;
`;

export const AvailableText = styled(Typography.H6)`
  color: ${({ theme }) => theme.colors.secondaryTextColor};
  margin-right: 8px;
`;

export const AvailableNumber = styled("div")`
  padding: 4px 8px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.buttonColor}1f;
  ${({ theme }) => theme.typography.h6.regular};
`;

export const Creator = styled(NftCreatorOrCollection)`
  margin-right: 58px;
`;

export const Collection = styled(NftCreatorOrCollection)``;

export const DescriptionHeading = styled(Typography.H6)`
  color: ${({ theme }) => theme.colors.secondaryTextColor};
  align-self: flex-start;
  margin-bottom: 8px;
`;

export const Description = styled(Typography.H6)`
  color: ${({ theme }) => theme.colors.mainTextColor};
  max-width: 566px;
  margin-bottom: 24px;
`;

export const Wrapper = styled("div")`
  display: flex;
  align-self: flex-start;
  &:first-of-type {
    margin-bottom: 4px;
  }
`;

export const BoldText = styled(Typography.H6)`
  display: inline-block;
  color: ${({ theme }) => theme.colors.mainTextColor};
`;

export const RegularText = styled(Typography.H6)`
  display: inline-block;
  margin-right: 4px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
`;

export const LastRow = styled(Row)`
  justify-content: space-between;
  flex-direction: row;
`;

export const SellerInfo = styled(NftSeller)``;

export const ActionsContainer = styled("div")`
  display: flex;
  align-items: center;
`;

export const AddToCart = styled(AddToCartButton)`
  display: flex;
  order: 1;
`;

export const BuyButton = styled(Button)<{ saleBy: "user" | "administrator" }>`
  display: flex;
  order: 2;

  ${({ theme, saleBy }) =>
    saleBy === "user"
      ? css`
          margin-left: 16px;
          border: 1px solid ${theme.colors.secondaryTextColor};
          background-color: ${theme.colors.white};
          color: ${theme.colors.mainTextColor};
        `
      : css`
          margin-left: 24px;
          background-color: ${({ theme }) => theme.colors.buttonColor};
        `}
  border-radius: 4px;
  padding: 10px 33px;
`;

export const MakeOfferButton = styled(Button)`
  margin-left: 16px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.buttonColor};
  padding: 10px 13px;

  display: flex;
  order: 3;
`;

export const AuctionInfo = styled("div")`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const LightSpan = styled(Typography.H7)`
  padding: 5px 0;
  margin-right: 4px;

  &:first-of-type {
    margin-right: 10px;
  }
`;
export const NumberSpan = styled(Typography.H5)`
  font-weight: 600;
  margin-right: 2px;
  color: ${({ theme }) => theme.colors.buttonColor};
`;

export const SocialsContainer = styled("div")`
  display: flex;
`;

export const ShareButton = styled(IconButton)`
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
  background-color: ${({ theme }) => theme.colors.bodyBackground};

  margin-right: 8px;
  height: 32px;
  width: 32px;
`;

export const LikesButton = styled(LikeButton)`
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
  background-color: ${({ theme }) => theme.colors.bodyBackground};

  height: 32px;
  width: 75px;
`;

export const PurchaseNftPopup = styled(PurchaseNft)``;

export const MakeAnOfferPopup = styled(MakeAnOffer)``;
