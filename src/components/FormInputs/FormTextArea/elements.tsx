import { FontAwesomeIcon } from "components/FontAwesomeIcon";
import { Typography } from "components/Typography";
import styled from "styled-components";
import type { FormTextAreaProps } from "./TextArea";

export const Label = styled("label")`
  width: 100%;
`;

export const LabelText = styled(Typography.H7)`
  font-weight: 500;
  display: inline-block;
  margin-bottom: 5px;
  text-transform: capitalize;
`;

export const ErrorText = styled("p")``;

export const Input = styled("textarea")`
  height: 108px;
  resize: vertical;
  width: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  padding: 16px;
  color: ${({ theme }) => theme.colors.mainTextColor};
  ${({ theme }) => theme.typography.h6.regular};
`;

export const InputContainer = styled("div")`
  display: flex;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  background-color: ${({ theme }) => theme.colors.inputBackground};
`;

export const RequiredIcon = styled(FontAwesomeIcon)`
  margin-left: 3px;
  pointer-events: none;
  font-size: 8px;
  display: inline;
  top: -2px;
  color: ${({ theme }) => theme.colors.required};
`;
