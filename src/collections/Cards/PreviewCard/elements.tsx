import { Typography, Button as _Button, LikeButton as _LikeButton } from "components";
import styled, { css } from "styled-components";
import _Image from "next/image";
import "swiper/css";

export const Container = styled("div")`
  max-width: 100%;
  display: flex;
  height: 305px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 12px;
  border-radius: 12px;

  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.cardsShadow};
`;

export const ImgContainer = styled("a")<{ previewSrc: string | ArrayBuffer | null }>`
  display: flex;
  height: 220px;
  align-items: flex-start;
  width: 100%;
  border-radius: 8px;
  background-image: ${({ previewSrc }) => (previewSrc ? `url(${previewSrc})` : "none")};
  background-size: cover;
  background-position: center;

  ${({ previewSrc, theme }) =>
    previewSrc
      ? css`
          background-color: none;
        `
      : css`
          background-color: ${theme.colors.previewBackground};
        `}
`;

export const TextContainer = styled("div")`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  width: 100%;
`;

export const Title = styled("span")`
  ${({ theme }) => theme.typography.h5.regular};
  font-weight: 600;
  margin-bottom: 20px;
`;

export const CollectionName = styled("span")`
  ${({ theme }) => theme.typography.h6.regular};
  margin-bottom: 4px;
`;

export const InfoContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 100%;

  &:first-of-type {
    margin-bottom: 8px;
  }
`;

export const Name = styled("span")`
  ${({ theme }) => theme.typography.h4.regular};
  margin-bottom: 29px;
`;

export const LikeButton = styled(_LikeButton)`
  position: absolute;
  top: 10px;
  right: 9px;
  font-size: 18px;
`;

export const MultipleNftsContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Span = styled("span")`
  ${({ theme }) => theme.typography.h6.regular};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
`;
