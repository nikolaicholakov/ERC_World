import styled from "styled-components";
import _Image from "next/image";

import { Button as _Button, Popup as _Popup, Typography } from "components";
import { FollowerCard } from "collections/Cards";

export const Image = styled(_Image)``;

export const Popup = styled(_Popup)``;

export const Container = styled("div")`
  z-index: 100;
  width: 100%;
  max-width: 468px;
  height: fit-content;
  max-height: 490px;
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

  padding-top: 32px;
  padding-left: 24px;
  padding-right: 12px;
  padding-bottom: 23px;

  @media ${({ theme }) => theme.breakpoint.max.M} {
    max-width: 90%;
    padding-top: 20px;
    padding-bottom: 12px;
    @media (orientation: landscape) {
      max-height: 90%;
    }
  }
`;

export const Title = styled(Typography.H4)`
  margin-bottom: 24px;
`;

export const ButtonsContainer = styled("div")`
  display: flex;
`;

export const Button = styled(_Button)`
  width: 125px;
  height: 40px;
  padding: 0;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.secondaryTextColor};
  color: ${({ theme }) => theme.colors.mainTextColor};
`;

export const FollowersContainer = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: auto;
  max-height: 318px;
  padding-right: 12px;
`;

export const Follower = styled(FollowerCard)`
  margin-bottom: 12px;
`;
