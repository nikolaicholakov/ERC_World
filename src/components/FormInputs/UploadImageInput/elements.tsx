import { Button } from "components/Buttons";
import styled, { css } from "styled-components";

export const Input = styled("input")`
  display: none;
`;

export const InputContainer = styled("div")<{ imageUploaded: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 289px;
  width: 100%;
  border: 2px dashed ${({ theme }) => theme.colors.secondaryTextColor};

  ${({ imageUploaded }) =>
    imageUploaded &&
    css`
      border: none;
    `}

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const MessageContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LightText = styled("span")<{ imageUploaded: boolean }>`
  ${({ theme }) => theme.typography.h6.regular}
  font-weight:400;
  color: ${({ theme }) => theme.colors.secondaryTextColor};

  margin-bottom: 24px;

  ${({ imageUploaded }) =>
    imageUploaded &&
    css`
      display: none;
    `}
`;

export const SmallText = styled("span")<{ imageUploaded: boolean }>`
  ${({ theme }) => theme.typography.h7.regular};
  color: ${({ theme }) => theme.colors.secondaryTextColor};

  ${({ imageUploaded }) =>
    imageUploaded &&
    css`
      display: none;
    `}
`;

export const BrowseButton = styled(Button)<{ imageUploaded: boolean }>`
  pointer-events: none;
  padding: 0;
  width: 140px;
  height: 40px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.mainTextColor};
  border: 1px solid ${({ theme }) => theme.colors.secondaryTextColor};
  margin-bottom: 24px;

  ${({ imageUploaded }) =>
    imageUploaded &&
    css`
      background-color: ${({ theme }) => theme.colors.white};
      margin-bottom: 0;
    `}
`;

export const Label = styled("label")`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
`;

export const LabelText = styled("span")`
  ${({ theme }) => theme.typography.h5.regular};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.mainTextColor};
  margin-bottom: 24px;
  text-align: left;
  width: 100%;
`;
