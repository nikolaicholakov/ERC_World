import { Typography, Button as _Button, LikeButton as _LikeButton, Button } from "components";
import styled, { css } from "styled-components";
import _Image from "next/image";
import "swiper/css";

export const Container = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Image = styled(_Image)``;

export const LeftSide = styled("div")`
  display: flex;
  align-items: center;
`;

export const ImageContainer = styled("div")`
  display: flex;
  align-items: center;
  margin-right: 16px;
  border-radius: 50%;
  overflow: hidden;
  width: 46px;
  height: 46px;
`;

export const Name = styled(Typography.H6)`
  color: ${({ theme }) => theme.colors.mainTextColor};
`;

export const UnfollowButton = styled(Button)`
  color: ${({ theme }) => theme.colors.mainTextColor};
  border: 1px solid ${({ theme }) => theme.colors.secondaryTextColor};
  border-radius: 4px;
  line-height: 0;
  padding: 0;
  width: 95px;
  height: 24px;
`;

export const FollowButton = styled(Button)`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.buttonColor};
  line-height: 0;
  border-radius: 4px;
  padding: 0;
  width: 95px;
  height: 24px;
`;
