import styled, { css } from "styled-components";
import {
  Button as _Button,
  CreateNewButton,
  FormDropdownInput as _FormInput,
  FormTextArea,
  RadioInput,
  RoyaltyInput,
  ToggleInput,
  Typography,
  UploadImageInput
} from "components";
import { DropdownInput } from "../SellNftForm/elements";
import { PreviewCard } from "collections/Cards";

export const Form = styled("form")`
  padding: 32px;
  padding-bottom: 37px;
  border-radius: 16px;
  max-width: 824px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: ${({ theme }) => theme.shadows.cardsShadow};

  @media ${({ theme }) => theme.breakpoint.max.S} {
    padding: 20px;
  }
`;

export const Container = styled("div")`
  display: flex;
  width: 100%;

  @media ${({ theme }) => theme.breakpoint.max.M} {
    flex-direction: column;
  }
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
  background-color: ${({ theme }) => theme.colors.buttonColor};
`;

export const CreateNftSection = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 62.5%;
  margin-right: 88px;
  @media ${({ theme }) => theme.breakpoint.max.M} {
    flex-basis: unset;
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

export const PreviewSection = styled("div")`
  display: flex;
  flex-direction: column;
  flex-basis: 37.5%;
  @media ${({ theme }) => theme.breakpoint.max.M} {
    flex-basis: unset;
    width: 100%;
  }
`;

export const PreviewNft = styled(PreviewCard)``;

export const FormTitle = styled(Typography.H3)`
  color: ${({ theme }) => theme.colors.mainTextColor};
  margin-bottom: 40px;
`;

export const FormTypesContainer = styled("div")<{ active: boolean }>`
  display: flex;
  width: 100%;
  padding-bottom: 14px;
  border-bottom: 3px solid ${({ theme }) => theme.colors.buttonColor}1f;
  margin-bottom: 24px;

  &::after {
    display: block;
    position: absolute;
    content: "";
    bottom: -3px;
    height: 3px;
    width: 50%;
    background-color: ${({ theme }) => theme.colors.buttonColor};
    transition: transform 0.3s ease;

    ${({ active }) =>
      active &&
      css`
        transform: translateX(100%);
      `}
  }
`;

export const FormType = styled(Typography.H4)<{ active: boolean }>`
  font-weight: 500;
  width: 50%;
  text-align: center;
  cursor: pointer;

  color: ${({ theme, active }) => (active ? theme.colors.buttonColor : theme.colors.mainTextColor)};
`;

export const UploadImage = styled(UploadImageInput)<{ previewSrc: string | ArrayBuffer | null }>`
  margin-bottom: 24px;
  background-image: ${({ previewSrc }) => (previewSrc ? `url(${previewSrc})` : "none")};
`;

export const AboutNftContainer = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;

  > * {
    margin-bottom: 24px;
  }
`;

export const Input = styled(DropdownInput)``;

export const Description = styled(FormTextArea)``;

export const Royalty = styled(RoyaltyInput)``;

export const SectionTitle = styled(Typography.H5)`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.mainTextColor};
  margin-bottom: 24px;
  text-align: left;
  width: 100%;
`;

export const CreateNew = styled(CreateNewButton)``;

export const SectionHeaderContainer = styled("div")`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const ContainerTitle = styled(SectionTitle)`
  margin-bottom: 0;
`;

export const CollectionLabel = styled(Typography.H6)`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
  width: 100%;
  text-align: left;
  margin-bottom: 24px;
`;

export const CollectionsContainer = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 321px;
  height: 100%;
  padding-right: 16px;
  overflow: auto;
  margin-bottom: 24px;

  > * {
    margin-bottom: 12px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

export const Collection = styled(RadioInput)``;

export const PutOnMarketContainer = styled("div")`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

export const PutText = styled(Typography.H7)`
  font-weight: 500;
`;

export const Toggle = styled(ToggleInput)``;

export const PreviewTitle = styled(Typography.H5)`
  font-weight: 600;
  margin-bottom: 24px;
`;

export const SaleSettingsContainer = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 31px;

  > * {
    margin-bottom: 24px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;
