import { FontAwesomeIcon } from "components/FontAwesomeIcon";
import { Typography } from "components/Typography";
import styled from "styled-components";

export const Select = styled("select")`
  width: 100%;
  outline: none;
  border: none;
  background-color: transparent;
  padding: 14px;
  padding-left: 16px;
  padding-right: 100px;
  color: ${({ theme }) => theme.colors.mainTextColor};
  ${({ theme }) => theme.typography.h6.regular};
`;

export const Option = styled("option")`
  max-width: 100%;
`;

export const Label = styled("label")`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const InputContainer = styled("div")`
  display: flex;
  border-radius: 12px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  background-color: ${({ theme }) => theme.colors.inputBackground};
`;

export const LabelText = styled(Typography.H7)`
  font-weight: 500;
  text-transform: capitalize;
  width: 100%;
  margin-bottom: 5px;
`;
export const Icon = styled(FontAwesomeIcon)`
  display: inline-block;
  margin-right: 7px;
  color: ${({ theme }) => theme.colors.white};
`;
