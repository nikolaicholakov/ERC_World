import {
  Typography,
  Button as _Button,
  LikeButton as _LikeButton,
  FontAwesomeIcon
} from "components";
import styled, { css } from "styled-components";
import _Image from "next/image";
import "swiper/css";

export const Container = styled("div")`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Image = styled(_Image)`
  display: flex;
  background-color: ${({ theme }) => theme.colors.bodyBackground};
  border-radius: 4px;
`;

export const ImgContainer = styled("a")`
  display: flex;
  width: 64px;
  height: 64px;
  margin-right: 20px;
`;

export const NamesContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const CollectionName = styled(Typography.H6)`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.mainTextColor};
  margin-bottom: 4px;
`;

export const NftName = styled(Typography.H4)`
  color: ${({ theme }) => theme.colors.mainTextColor};
`;

export const PriceContainer = styled(NamesContainer)`
  margin-left: auto;
  align-items: flex-end;
`;

export const PriceInCrypto = styled(Typography.H6)`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.buttonColor};
  margin-bottom: 7px;
`;

export const PriceInDollars = styled(Typography.H6)`
  color: ${({ theme }) => theme.colors.mainTextColor};
`;

export const RemoveButton = styled(FontAwesomeIcon)`
  margin-right: 8px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
`;
