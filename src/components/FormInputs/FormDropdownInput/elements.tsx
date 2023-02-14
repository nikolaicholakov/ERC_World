import { Typography } from "components/Typography";
import styled from "styled-components";

export const Label = styled("label")`
  width: 100%;
`;

export const LabelText = styled(Typography.H7)`
  font-weight: 500;
  margin-bottom: 5px;
  text-transform: capitalize;
`;

export const ErrorText = styled("p")``;

export const Input = styled("input")`
  width: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  padding: 14px;
  padding-left: 16px;
  padding-right: 100px;
  color: ${({ theme }) => theme.colors.mainTextColor};
  ${({ theme }) => theme.typography.h6.regular};
`;

export const InputContainer = styled("div")`
  display: flex;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  /* margin-bottom: 24px; */
  background-color: ${({ theme }) => theme.colors.inputBackground};
`;
