import styled, { css } from "styled-components";
import {
  Button as _Button,
  CopyBlockchainAdress,
  FormDropdownInput,
  FormDropdownInput as _FormInput,
  FormTextArea,
  FormTextArea as _FormTextArea,
  UploadInput,
  Typography
} from "components";

export const Form = styled("form")`
  padding: 23px 32px;
  border-radius: 16px;
  max-width: 452px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Description = styled("p")``;

export const Actions = styled("div")`
  margin-top: 24px;
`;

export const ButtonsContainer = styled("div")`
  display: flex;
  justify-content: center;
`;

export const CreateAuctionButton = styled(_Button)`
  width: 154px;
  height: 40px;
  padding: 0px;
  border-radius: 4px;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.lightButtonColor};
`;

export const FormInput = styled(FormDropdownInput)``;

export const InputsContainer = styled("div")`
  display: flex;
  width: 100%;
  flex-direction: column;

  > * {
    margin-bottom: 16px;
  }
`;

export const ProfileImageContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 148px;
  height: 148px;

  overflow: hidden;
  /* padding + margin from container */
  top: calc(-25px - 75px);
  background-image: url("/imgs/user2.png");
  background-size: cover;
  background-color: ${({ theme }) => theme.colors.secondaryTextColor}cc;
  background-blend-mode: exclusion;
`;

export const UploadFileInput = styled(UploadInput)``;

export const CopyWalletButton = styled(CopyBlockchainAdress)`
  /* padding + margin from ImageContainer Above */
  margin-top: calc(-25px - 75px + 32px);
  margin-bottom: 4px;
`;

export const DisconnectWalletButton = styled("button")`
  border: none;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
  ${({ theme }) => theme.typography.h6.regular};
  font-weight: 400;
  background-color: transparent;
  cursor: pointer;
  text-decoration: underline;
  margin-bottom: 32px;
`;

export const BackgroundImageContainer = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 16px;
`;

export const Text = styled(Typography.H7)`
  font-weight: 500;
  margin-bottom: 5px;
  text-transform: capitalize;
  text-align: left;
`;

export const UploadBackgroundImageContainer = styled("div")`
  display: flex;
  height: 118px;
  overflow: hidden;
  border-radius: 16px;

  background-image: url("/imgs/userBg.png");
  background-size: cover;
  background-color: ${({ theme }) => theme.colors.secondaryTextColor}cc;
  background-blend-mode: exclusion;
`;

export const BioInput = styled(FormTextArea)`
  height: 108px;
`;

export const ConnectMessengerContainer = styled("div")`
  margin-top: 16px;
  margin-bottom: 32px;
`;

export const ContainerTitle = styled(Typography.H6)`
  margin-bottom: 4px;
`;

export const SmallText = styled(Typography.H7)`
  color: ${({ theme }) => theme.colors.secondaryTextColor};
  margin-bottom: 16px;
`;

export const SocialsContainer = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const SocialPlatform = styled(Typography.H7)`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.mainTextColor};
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 12px;
`;

export const SocialPlatformName = styled("span")``;

export const CurrentStatus = styled("span")<{ status: "connected" | "disconnected" }>`
  cursor: pointer;

  color: ${({ theme, status }) =>
    status === "connected" ? theme.colors.secondaryTextColor : theme.colors.buttonColor};
`;
