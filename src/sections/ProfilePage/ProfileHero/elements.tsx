import styled, { css } from "styled-components";
import _Image from "next/image";
import { Button, CopyBlockchainAdress, OtherSettings, Section, Typography } from "components";
import { Followers } from "collections";

export const Image = styled(_Image)``;

export const Container = styled(Section)`
  padding-top: 24px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  margin-bottom: -60px;
`;

export const ProfileBackgroundImage = styled("div")`
  display: flex;
  align-items: center;
  width: 100%;
  height: 244px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.cardsShadow};
`;

export const ProfileImg = styled("div")`
  display: flex;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
  width: 139px;
  height: 139px;
  border: 6px solid ${({ theme }) => theme.colors.white};
  margin-bottom: 16px;
`;

export const ProfileInformationContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 628px;
  width: 100%;

  top: -60px;
`;

export const Row = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const ColumnRow = styled(Row)`
  flex-direction: column;
  margin-bottom: 2px;
`;

export const UserName = styled(Typography.UserName)``;

export const CopyAdressButton = styled(CopyBlockchainAdress)`
  margin-bottom: 10px;
`;

export const Bio = styled(Typography.H6)`
  font-weight: 400;
  text-align: center;
  line-height: 16px;
`;

export const FollowingBlock = styled("div")`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  &:first-of-type {
    margin-right: 48px;
  }
`;

export const FollowCount = styled(Typography.H3)`
  margin-bottom: 2px;
`;

export const FollowText = styled(Typography.H4)`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.mainTextColor}80;
`;

export const CreateNftButton = styled(Button)`
  width: 120px;
  padding: 0;
  border-radius: 4px;
  height: 40px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.buttonColor};
  margin-right: 8px;
`;

export const EditProfileButton = styled(CreateNftButton)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.buttonColor};
  border: 1px solid ${({ theme }) => theme.colors.buttonColor};
`;

export const OtherSettingsButton = styled(OtherSettings)``;

export const CheckFollowersPopup = styled(Followers)``;
