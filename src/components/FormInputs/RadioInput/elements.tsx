import { Typography } from "components/Typography";
import styled from "styled-components";

export const Label = styled("label")`
  width: 100%;
  cursor: ponter;
`;

export const Text = styled("span")`
  ${({ theme }) => theme.typography.h6.regular}white-space:nowrap;
  line-height: 16px;
`;

export const ErrorText = styled("p")``;

export const Input = styled("input")`
  margin: 0;
  border: none;
  width: 16px;
  background-color: transparent;
  outline: none;
  color: ${({ theme }) => theme.colors.mainTextColor};
  ${({ theme }) => theme.typography.h6.regular};

  &:checked {
    color: ${({ theme }) => theme.colors.buttonColor};
  }
`;

export const InputContainer = styled("div")`
  display: flex;
  cursor: pointer;
  padding: 16px;
  justify-content: space-between;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  /* margin-bottom: 24px; */
  background-color: ${({ theme }) => theme.colors.inputBackground};
`;
